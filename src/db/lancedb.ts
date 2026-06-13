import fs from "node:fs/promises";
import path from "node:path";
import { env } from "../config/env";
import type { ChunkTableRecord } from "./schema";

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length === 0 || b.length === 0 || a.length !== b.length) {
    return 0;
  }
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  if (normA === 0 || normB === 0) {
    return 0;
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export class LanceDbService {
  private readonly fallbackFile: string;
  private readonly memory: ChunkTableRecord[] = [];
  private db: any = null;
  private table: any = null;

  constructor() {
    this.fallbackFile = path.join(env.LANCEDB_PATH, "chunks.fallback.json");
  }

  async init(): Promise<void> {
    await fs.mkdir(env.LANCEDB_PATH, { recursive: true });
    await this.loadFallback();

    try {
      const lancedb = (await import("@lancedb/lancedb")) as any;
      this.db = await lancedb.connect(env.LANCEDB_PATH);

      if (typeof this.db.openTable === "function") {
        try {
          this.table = await this.db.openTable("chunks");
        } catch {
          this.table = await this.db.createTable("chunks", []);
        }
      }
    } catch {
      this.db = null;
      this.table = null;
    }
  }

  private async loadFallback(): Promise<void> {
    try {
      const raw = await fs.readFile(this.fallbackFile, "utf8");
      const rows = JSON.parse(raw) as ChunkTableRecord[];
      this.memory.splice(0, this.memory.length, ...rows);
    } catch {
      this.memory.splice(0, this.memory.length);
    }
  }

  private async saveFallback(): Promise<void> {
    await fs.writeFile(this.fallbackFile, JSON.stringify(this.memory), "utf8");
  }

  async add(rows: ChunkTableRecord[]): Promise<void> {
    if (rows.length === 0) {
      return;
    }

    this.memory.push(...rows);
    await this.saveFallback();

    if (this.table && typeof this.table.add === "function") {
      try {
        await this.table.add(rows);
      } catch {
        // fall back to local JSON index only
      }
    }
  }

  async similaritySearch(
    queryEmbedding: number[],
    topK: number,
  ): Promise<Array<ChunkTableRecord & { score: number }>> {
    const scored = this.memory.map((row) => ({
      ...row,
      score: cosineSimilarity(queryEmbedding, row.embedding),
    }));

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topK);
  }

  async allRows(): Promise<ChunkTableRecord[]> {
    return [...this.memory];
  }
}

export const lanceDbService = new LanceDbService();

import fs from "node:fs/promises";
import path from "node:path";
import { v4 as uuidv4 } from "uuid";
import {
  EXTRACTED_TEXT_EXT,
  METADATA_EXT,
  STORAGE_UPLOAD_DIR,
} from "../config/constants";
import type { SemanticMetadata } from "../types";

type PersistedPaths = {
  sourcePath: string;
  extractedTextPath: string;
  metadataPath: string;
};

export class StorageService {
  private readonly uploadsDir: string;

  constructor(uploadsDir = STORAGE_UPLOAD_DIR) {
    this.uploadsDir = uploadsDir;
  }

  async ensureStorage(): Promise<void> {
    await fs.mkdir(this.uploadsDir, { recursive: true });
  }

  sanitizeName(input: string): string {
    return input.replace(/[^a-zA-Z0-9._-]/g, "_");
  }

  async persistOriginalFile(
    sourceName: string,
    content: Buffer | string,
  ): Promise<string> {
    await this.ensureStorage();
    const safe = this.sanitizeName(sourceName);
    const fileName = `${uuidv4()}-${safe}`;
    const target = path.join(this.uploadsDir, fileName);
    await fs.writeFile(target, content);
    return target;
  }

  async persistExtractedText(baseSourcePath: string, text: string): Promise<string> {
    const target = `${baseSourcePath}${EXTRACTED_TEXT_EXT}`;
    await fs.writeFile(target, text, "utf8");
    return target;
  }

  async persistMetadata(
    baseSourcePath: string,
    metadata: SemanticMetadata,
  ): Promise<string> {
    const target = `${baseSourcePath}${METADATA_EXT}`;
    await fs.writeFile(target, JSON.stringify(metadata, null, 2), "utf8");
    return target;
  }

  async persistArtifacts(params: {
    sourceName: string;
    sourceContent: Buffer | string;
    extractedText: string;
    metadata: SemanticMetadata;
  }): Promise<PersistedPaths> {
    const sourcePath = await this.persistOriginalFile(
      params.sourceName,
      params.sourceContent,
    );
    const extractedTextPath = await this.persistExtractedText(
      sourcePath,
      params.extractedText,
    );
    const metadataPath = await this.persistMetadata(sourcePath, params.metadata);

    return { sourcePath, extractedTextPath, metadataPath };
  }
}

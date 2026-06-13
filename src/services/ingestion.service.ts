import { v4 as uuidv4 } from "uuid";
import { documentsDb } from "../db/documents.db";
import { parsePdf } from "../parsers/pdf";
import { parseText } from "../parsers/text";
import { parseUrl } from "../parsers/url";
import { chunkText } from "../rag/chunk";
import { embedText } from "../rag/embed";
import { metadataService } from "./metadata.service";
import { StorageService } from "./storage.service";
import type { ChunkRecord, IngestionInput, IngestionResult, SourceType } from "../types";

export class IngestionService {
  constructor(private readonly storageService = new StorageService()) {}

  private async getExtractedText(input: IngestionInput): Promise<string> {
    if (input.sourceType === "pdf") {
      if (input.text) {
        return parseText(input.text);
      }
      return parsePdf(input.fileBuffer);
    }
    if (input.sourceType === "url") {
      return parseUrl(input.url);
    }
    return parseText(input.text);
  }

  async ingest(input: IngestionInput): Promise<IngestionResult> {
    const extractedText = await this.getExtractedText(input);
    const metadata = await metadataService.extractSemanticMetadata(extractedText);

    const sourceContent =
      input.sourceType === "pdf"
        ? input.fileBuffer
        : input.sourceType === "url"
          ? input.url
          : input.text;

    const persisted = await this.storageService.persistArtifacts({
      sourceName: input.sourceName,
      sourceContent,
      extractedText,
      metadata,
    });

    const chunks = chunkText({ text: extractedText });
    const documentId = uuidv4();
    const rows: ChunkRecord[] = [];

    for (let i = 0; i < chunks.length; i += 1) {
      const chunk = chunks[i];
      const embedding = await embedText(chunk);
      rows.push({
        id: uuidv4(),
        documentId,
        sourceName: input.sourceName,
        sourceType: input.sourceType as SourceType,
        sourcePath: persisted.sourcePath,
        extractedTextPath: persisted.extractedTextPath,
        chunkIndex: i,
        chunkText: chunk,
        embedding,
        entities: metadata.entities,
        relatedConcepts: metadata.relatedConcepts,
        tags: metadata.tags,
      });
    }

    await documentsDb.addChunks(rows);

    return {
      documentId,
      chunkCount: rows.length,
      sourcePath: persisted.sourcePath,
      extractedTextPath: persisted.extractedTextPath,
    };
  }
}

export const ingestionService = new IngestionService();

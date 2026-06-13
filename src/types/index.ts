export type Intent = "upload" | "question" | "summary";

export type SourceType = "pdf" | "url" | "text";

export type SemanticMetadata = {
  entities: string[];
  relatedConcepts: string[];
  tags: string[];
};

export type ChunkRecord = {
  id: string;
  documentId: string;
  sourceName: string;
  sourceType: SourceType;
  sourcePath: string;
  extractedTextPath: string;
  chunkIndex: number;
  chunkText: string;
  embedding: number[];
  entities: string[];
  relatedConcepts: string[];
  tags: string[];
  page?: number;
};

export type Citation = {
  sourceName: string;
  chunkIndex: number;
  sourcePath: string;
  page?: number;
};

export type RetrievedChunk = ChunkRecord & {
  score: number;
};

export type IngestionInput =
  | {
      sourceType: "pdf";
      sourceName: string;
      fileBuffer: Buffer;
      text?: string;
    }
  | {
      sourceType: "url";
      sourceName: string;
      url: string;
    }
  | {
      sourceType: "text";
      sourceName: string;
      text: string;
    };

export type IngestionResult = {
  documentId: string;
  chunkCount: number;
  sourcePath: string;
  extractedTextPath: string;
};

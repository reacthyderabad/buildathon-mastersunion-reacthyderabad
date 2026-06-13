import type { IngestionInput, Intent, RetrievedChunk, SemanticMetadata } from "../types";

export type GraphState = {
  userMessage: string;
  threadTs: string;
  intent?: Intent;
  ingestionInput?: IngestionInput;
  retrievedChunks?: RetrievedChunk[];
  relatedChunks?: RetrievedChunk[];
  answer?: string;
  metadata?: SemanticMetadata;
  citations?: string[];
};

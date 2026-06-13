import { RETRIEVAL_TOP_K } from "../config/constants";
import { documentsDb } from "../db/documents.db";
import { embedText } from "./embed";
import type { RetrievedChunk } from "../types";

export async function retrieveRelevantChunks(
  question: string,
  topK = RETRIEVAL_TOP_K,
): Promise<RetrievedChunk[]> {
  const queryEmbedding = await embedText(question);
  const chunks = await documentsDb.similaritySearch(queryEmbedding, topK);
  return chunks;
}

import { RELATIONSHIP_EXPANSION_K } from "../config/constants";
import { documentsDb } from "../db/documents.db";
import type { RetrievedChunk } from "../types";

export async function expandBySemanticRelationships(
  retrieved: RetrievedChunk[],
  limit = RELATIONSHIP_EXPANSION_K,
): Promise<RetrievedChunk[]> {
  if (retrieved.length === 0) {
    return [];
  }

  const tags = new Set<string>();
  const relatedConcepts = new Set<string>();
  for (const chunk of retrieved) {
    chunk.tags.forEach((tag) => tags.add(tag));
    chunk.relatedConcepts.forEach((concept) => relatedConcepts.add(concept));
  }

  const related = await documentsDb.findRelatedByMetadata({
    tags: [...tags],
    relatedConcepts: [...relatedConcepts],
    limit,
    excludeIds: retrieved.map((r) => r.id),
  });

  return related.map((row) => ({ ...row, score: 0.5 }));
}

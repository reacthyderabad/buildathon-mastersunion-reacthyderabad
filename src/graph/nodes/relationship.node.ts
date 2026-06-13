import { expandBySemanticRelationships } from "../../rag/similarity";
import type { GraphState } from "../state";

export async function relationshipNode(state: GraphState): Promise<GraphState> {
  const retrieved = state.retrievedChunks ?? [];
  const relatedChunks = await expandBySemanticRelationships(retrieved);
  return { ...state, relatedChunks };
}

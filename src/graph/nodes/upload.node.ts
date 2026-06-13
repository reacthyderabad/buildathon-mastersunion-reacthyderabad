import { ingestionService } from "../../services/ingestion.service";
import type { GraphState } from "../state";

export async function uploadNode(state: GraphState): Promise<GraphState> {
  if (!state.ingestionInput) {
    return state;
  }

  const result = await ingestionService.ingest(state.ingestionInput);
  return {
    ...state,
    answer: `Indexed ${state.ingestionInput.sourceName} (${result.chunkCount} chunks). Document ID: ${result.documentId}`,
    citations: [result.sourcePath],
  };
}

import { retrieveRelevantChunks } from "../../rag/retrieve";
import type { GraphState } from "../state";

export async function retrievalNode(state: GraphState): Promise<GraphState> {
  const retrievedChunks = await retrieveRelevantChunks(state.userMessage);
  return { ...state, retrievedChunks };
}

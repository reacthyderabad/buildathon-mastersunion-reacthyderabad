import type { GraphState } from "../state";

export function intentNode(state: GraphState): GraphState {
  const text = state.userMessage.toLowerCase();

  if (state.ingestionInput) {
    return { ...state, intent: "upload" };
  }

  if (text.startsWith("summary") || text.includes(" summarize ")) {
    return { ...state, intent: "summary" };
  }

  return { ...state, intent: "question" };
}

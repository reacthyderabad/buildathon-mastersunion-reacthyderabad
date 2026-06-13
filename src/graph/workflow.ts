import { answerNode } from "./nodes/answer.node";
import { intentNode } from "./nodes/intent.node";
import { relationshipNode } from "./nodes/relationship.node";
import { retrievalNode } from "./nodes/retrieval.node";
import { summaryNode } from "./nodes/summary.node";
import { uploadNode } from "./nodes/upload.node";
import type { GraphState } from "./state";

export async function runWorkflow(initialState: GraphState): Promise<GraphState> {
  const withIntent = intentNode(initialState);

  if (withIntent.intent === "upload") {
    return uploadNode(withIntent);
  }

  if (withIntent.intent === "summary") {
    return summaryNode(withIntent);
  }

  const retrieved = await retrievalNode(withIntent);
  const expanded = await relationshipNode(retrieved);
  return answerNode(expanded);
}

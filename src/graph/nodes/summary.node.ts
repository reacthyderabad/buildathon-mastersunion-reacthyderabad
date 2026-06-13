import { FALLBACK_ANSWER } from "../../config/constants";
import { documentsDb } from "../../db/documents.db";
import { buildSummaryPrompt } from "../../rag/prompts";
import { groqService } from "../../services/groq.service";
import type { GraphState } from "../state";

export async function summaryNode(state: GraphState): Promise<GraphState> {
  const documentId = state.userMessage.replace(/^summary\s*/i, "").trim();
  if (!documentId) {
    return { ...state, answer: "Please provide a document ID after `summary`." };
  }

  const rows = await documentsDb.findByDocumentId(documentId);
  if (rows.length === 0) {
    return { ...state, answer: FALLBACK_ANSWER };
  }

  const text = rows.map((row) => row.chunkText).join("\n");
  const prompt = buildSummaryPrompt(text);
  const summary = await groqService.summarizeDocument(prompt);

  return { ...state, answer: summary || FALLBACK_ANSWER };
}

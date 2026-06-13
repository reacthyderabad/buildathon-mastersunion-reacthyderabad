import { FALLBACK_ANSWER } from "../config/constants";
import type { Citation, RetrievedChunk } from "../types";

export const SYSTEM_PROMPT = `You are a company knowledge assistant.
Answer ONLY using the provided context.
If information is unavailable, reply exactly with:
"${FALLBACK_ANSWER}"
Always keep answers concise and include citations.`;

export function buildQuestionPrompt(params: {
  question: string;
  contextChunks: RetrievedChunk[];
  threadContext: string[];
}): string {
  const context = params.contextChunks
    .map(
      (chunk) =>
        `[${chunk.sourceName}#${chunk.chunkIndex}] ${chunk.chunkText.slice(0, 1200)}`,
    )
    .join("\n\n");

  const history = params.threadContext.length
    ? `Thread context:\n${params.threadContext.join("\n")}\n\n`
    : "";

  return `${history}Context:\n${context}\n\nQuestion:\n${params.question}`;
}

export function buildSummaryPrompt(documentText: string): string {
  return `Summarize this document for Slack in 5-8 bullet points.\n\n${documentText}`;
}

export function buildSourcesBlock(citations: Citation[]): string {
  if (citations.length === 0) {
    return "";
  }
  const lines = citations.map((c) =>
    c.sourceUrl ? `- <${c.sourceUrl}|${c.sourceName}>` : `- ${c.sourceName}`,
  );
  return `\n\nSources:\n${lines.join("\n")}`;
}

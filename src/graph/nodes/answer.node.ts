import { FALLBACK_ANSWER } from "../../config/constants";
import { threadMemory } from "../../memory/thread.memory";
import { buildQuestionPrompt, buildSourcesBlock } from "../../rag/prompts";
import { groqService } from "../../services/groq.service";
import type { Citation } from "../../types";
import type { GraphState } from "../state";

function toCitations(state: GraphState): Citation[] {
  const chunks = [...(state.retrievedChunks ?? []), ...(state.relatedChunks ?? [])];
  const seen = new Set<string>();
  const citations: Citation[] = [];

  for (const chunk of chunks) {
    const key = chunk.sourceUrl
      ? `${chunk.sourceName}:${chunk.sourceUrl}`
      : `${chunk.sourceName}:${chunk.sourcePath}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    citations.push({
      sourceName: chunk.sourceName,
      sourceUrl: chunk.sourceUrl,
      sourcePath: chunk.sourcePath,
      page: chunk.page,
    });
  }

  return citations;
}

export async function answerNode(state: GraphState): Promise<GraphState> {
  const allChunks = [...(state.retrievedChunks ?? []), ...(state.relatedChunks ?? [])];
  if (allChunks.length === 0) {
    return { ...state, answer: FALLBACK_ANSWER, citations: [] };
  }

  const history = threadMemory
    .getRecent(state.threadTs)
    .map((entry) => `${entry.role}: ${entry.message}`);

  const prompt = buildQuestionPrompt({
    question: state.userMessage,
    contextChunks: allChunks,
    threadContext: history,
  });

  const modelAnswer = await groqService.answerQuestion(prompt);
  const citations = toCitations(state);
  const answer = `${modelAnswer || FALLBACK_ANSWER}${buildSourcesBlock(citations)}`;

  threadMemory.append(state.threadTs, { role: "user", message: state.userMessage });
  threadMemory.append(state.threadTs, { role: "assistant", message: answer });

  return {
    ...state,
    answer,
    citations: citations.map((c) => c.sourceUrl ?? c.sourceName),
  };
}

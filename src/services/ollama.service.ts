import axios from "axios";
import { env } from "../config/env";

export class OllamaService {
  async embedText(input: string): Promise<number[]> {
    const response = await axios.post<{
      embedding?: number[];
    }>(`${env.OLLAMA_BASE_URL}/api/embeddings`, {
      model: env.OLLAMA_EMBED_MODEL,
      prompt: input,
    });

    if (!response.data.embedding || response.data.embedding.length === 0) {
      throw new Error("Ollama did not return an embedding vector.");
    }

    return response.data.embedding;
  }
}

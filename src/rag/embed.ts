import { OllamaService } from "../services/ollama.service";

const ollamaService = new OllamaService();

export async function embedText(text: string): Promise<number[]> {
  return ollamaService.embedText(text);
}

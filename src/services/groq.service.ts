import axios from "axios";
import { env } from "../config/env";
import { SYSTEM_PROMPT } from "../rag/prompts";

type GroqMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export class GroqService {
  private async chat(messages: GroqMessage[]): Promise<string> {
    const response = await axios.post<{
      choices?: Array<{ message?: { content?: string } }>;
    }>(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: env.GROQ_MODEL,
        temperature: 0.1,
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.choices?.[0]?.message?.content?.trim() ?? "";
  }

  async answerQuestion(prompt: string): Promise<string> {
    return this.chat([
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: prompt },
    ]);
  }

  async summarizeDocument(prompt: string): Promise<string> {
    return this.chat([
      {
        role: "system",
        content: "You produce concise, Slack-friendly summaries.",
      },
      { role: "user", content: prompt },
    ]);
  }

  async extractMetadata(text: string): Promise<string> {
    const extractionPrompt = `Extract entities, related concepts, and semantic tags from this text.
Return JSON only in the shape:
{"entities": string[], "relatedConcepts": string[], "tags": string[]}

Text:
${text.slice(0, 5000)}`;

    return this.chat([
      { role: "system", content: "You extract semantic metadata as strict JSON." },
      { role: "user", content: extractionPrompt },
    ]);
  }
}

export const groqService = new GroqService();

import { groqService } from "./groq.service";
import type { SemanticMetadata } from "../types";

const EMPTY_METADATA: SemanticMetadata = {
  entities: [],
  relatedConcepts: [],
  tags: [],
};

export class MetadataService {
  async extractSemanticMetadata(text: string): Promise<SemanticMetadata> {
    if (!text.trim()) {
      return EMPTY_METADATA;
    }

    try {
      const raw = await groqService.extractMetadata(text);
      const parsed = JSON.parse(raw) as Partial<SemanticMetadata>;
      return {
        entities: parsed.entities ?? [],
        relatedConcepts: parsed.relatedConcepts ?? [],
        tags: parsed.tags ?? [],
      };
    } catch {
      return EMPTY_METADATA;
    }
  }
}

export const metadataService = new MetadataService();

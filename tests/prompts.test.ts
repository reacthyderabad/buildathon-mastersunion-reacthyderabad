import test from "node:test";
import assert from "node:assert/strict";
import { FALLBACK_ANSWER } from "../src/config/constants";
import { SYSTEM_PROMPT, buildSourcesBlock } from "../src/rag/prompts";

test("system prompt embeds fallback answer", () => {
  assert.ok(SYSTEM_PROMPT.includes(FALLBACK_ANSWER));
});

test("sources block renders citations", () => {
  const block = buildSourcesBlock([
    {
      sourceName: "HR_Policy.pdf",
      sourceUrl: "https://example.slack.com/files/abc",
      sourcePath: "storage/uploads/x",
    },
  ]);

  assert.ok(block.includes("Sources:"));
  assert.ok(block.includes("<https://example.slack.com/files/abc|HR_Policy.pdf>"));
});

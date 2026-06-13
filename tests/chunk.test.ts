import test from "node:test";
import assert from "node:assert/strict";
import { chunkText } from "../src/rag/chunk";

test("chunkText splits long text", () => {
  const text = "A".repeat(2000);
  const chunks = chunkText({ text, chunkSize: 500, overlap: 50 });
  assert.ok(chunks.length > 3);
  assert.ok(chunks.every((chunk) => chunk.length > 0));
});

test("chunkText returns empty for blank text", () => {
  const chunks = chunkText({ text: "   " });
  assert.equal(chunks.length, 0);
});

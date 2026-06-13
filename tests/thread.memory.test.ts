import test from "node:test";
import assert from "node:assert/strict";
import { ThreadMemory } from "../src/memory/thread.memory";

test("thread memory keeps only recent exchanges", () => {
  const memory = new ThreadMemory();
  const thread = "abc";

  for (let i = 0; i < 6; i += 1) {
    memory.append(thread, {
      role: i % 2 === 0 ? "user" : "assistant",
      message: `m${i}`,
    });
  }

  const recent = memory.getRecent(thread);
  assert.equal(recent.length, 4);
  assert.equal(recent[0]?.message, "m2");
  assert.equal(recent[3]?.message, "m5");
});

import type { SayFn } from "@slack/bolt";
import { runWorkflow } from "../../graph/workflow";

export async function handleSummaryCommand(params: {
  message: string;
  threadTs: string;
  say: SayFn;
}): Promise<void> {
  const result = await runWorkflow({
    userMessage: params.message,
    threadTs: params.threadTs,
  });

  await params.say({
    text: result.answer ?? "Unable to summarize.",
    thread_ts: params.threadTs,
  });
}

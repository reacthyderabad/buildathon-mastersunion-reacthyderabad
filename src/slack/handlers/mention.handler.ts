import type { AllMiddlewareArgs, SlackEventMiddlewareArgs } from "@slack/bolt";
import { ACK_SEARCHING } from "../../config/constants";
import { runWorkflow } from "../../graph/workflow";

type MentionArgs = SlackEventMiddlewareArgs<"app_mention"> & AllMiddlewareArgs;

export async function handleMention(args: MentionArgs): Promise<void> {
  const { event, say } = args;
  const question = event.text ?? "";
  const threadTs = event.thread_ts ?? event.ts;
  // eslint-disable-next-line no-console
  console.log(`[mention] start threadTs=${threadTs}`);

  await say({
    text: ACK_SEARCHING,
    thread_ts: threadTs,
  });
  // eslint-disable-next-line no-console
  console.log(`[mention] ack sent threadTs=${threadTs}`);

  setImmediate(async () => {
    try {
      // eslint-disable-next-line no-console
      console.log(`[mention] workflow begin threadTs=${threadTs}`);
      const result = await runWorkflow({
        userMessage: question,
        threadTs,
      });

      await say({
        text: result.answer ?? "Unable to process request.",
        thread_ts: threadTs,
      });
      // eslint-disable-next-line no-console
      console.log(`[mention] response sent threadTs=${threadTs}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`[mention] error threadTs=${threadTs}`, error);
      await say({
        text: `Error processing request: ${(error as Error).message}`,
        thread_ts: threadTs,
      });
    }
  });
}

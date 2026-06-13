import { App } from "@slack/bolt";
import { env } from "../config/env";
import { handleMention } from "./handlers/mention.handler";
import { handleFileShared } from "./handlers/upload.handler";

let appInstance: App | null = null;

export function getSlackApp(): App {
  if (appInstance) {
    return appInstance;
  }

  appInstance = new App({
    token: env.SLACK_BOT_TOKEN,
    signingSecret: env.SLACK_SIGNING_SECRET,
    appToken: env.SLACK_APP_TOKEN,
    socketMode: true,
  });

  appInstance.use(async ({ body, next }) => {
    const bodyType = (body as { type?: string }).type ?? "unknown";
    const eventType = (body as { event?: { type?: string } }).event?.type ?? "unknown";
    // eslint-disable-next-line no-console
    console.log(`[slack] inbound bodyType=${bodyType} eventType=${eventType}`);
    await next();
  });

  appInstance.event("app_mention", async (args) => {
    // eslint-disable-next-line no-console
    console.log(`[slack] app_mention ts=${args.event.ts} channel=${args.event.channel}`);
    await handleMention(args);
  });

  appInstance.event("file_shared", async (args) => {
    // eslint-disable-next-line no-console
    console.log(`[slack] file_shared fileId=${args.event.file_id}`);
    await handleFileShared(args);
  });

  appInstance.error(async (error) => {
    // eslint-disable-next-line no-console
    console.error("[slack] bolt error", error);
  });

  return appInstance;
}

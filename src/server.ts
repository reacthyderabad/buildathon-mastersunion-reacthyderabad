import cors from "cors";
import express from "express";
import { APP_NAME } from "./config/constants";
import { env } from "./config/env";
import { runWorkflow } from "./graph/workflow";
import { getSlackApp } from "./slack/app";

async function startServer(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(`[startup] ${APP_NAME} booting...`);
  // eslint-disable-next-line no-console
  console.log(
    `[startup] PORT=${env.PORT} SLACK_SOCKET_PORT=${env.SLACK_SOCKET_PORT} OLLAMA_BASE_URL=${env.OLLAMA_BASE_URL}`,
  );

  const app = express();
  app.use(cors());
  app.use(express.json({ limit: "5mb" }));

  app.get("/health", (_req, res) => {
    res.json({ ok: true, app: APP_NAME });
  });

  app.post("/api/ingest-text", async (req, res) => {
    try {
      const sourceName = String(req.body?.sourceName ?? "manual-input.txt");
      const text = String(req.body?.text ?? "");
      // eslint-disable-next-line no-console
      console.log(`[api] ingest-text source=${sourceName} textLen=${text.length}`);
      const result = await runWorkflow({
        userMessage: `upload ${sourceName}`,
        threadTs: `${Date.now()}`,
        ingestionInput: {
          sourceType: "text",
          sourceName,
          text,
        },
      });
      res.json({ ok: true, result: result.answer, citations: result.citations ?? [] });
    } catch (error) {
      res.status(500).json({ ok: false, error: (error as Error).message });
    }
  });

  app.post("/api/ask", async (req, res) => {
    try {
      const question = String(req.body?.question ?? "");
      const threadTs = String(req.body?.threadTs ?? "api-thread");
      // eslint-disable-next-line no-console
      console.log(`[api] ask threadTs=${threadTs} qLen=${question.length}`);
      const result = await runWorkflow({ userMessage: question, threadTs });
      res.json({ ok: true, answer: result.answer, citations: result.citations ?? [] });
    } catch (error) {
      res.status(500).json({ ok: false, error: (error as Error).message });
    }
  });

  app.listen(env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`${APP_NAME} HTTP server running on port ${env.PORT}`);
  });

  const slackApp = getSlackApp();

  const auth = await slackApp.client.auth.test({
    token: env.SLACK_BOT_TOKEN,
  });
  // eslint-disable-next-line no-console
  console.log(
    `[slack] auth ok team=${auth.team ?? "unknown"} botUserId=${auth.user_id ?? "unknown"} url=${auth.url ?? "unknown"}`,
  );

  await slackApp.start(env.SLACK_SOCKET_PORT);
  // eslint-disable-next-line no-console
  console.log(`Slack socket mode running on port ${env.SLACK_SOCKET_PORT}`);
}

startServer().catch((error) => {
  // eslint-disable-next-line no-console
  console.error("Failed to start service:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  // eslint-disable-next-line no-console
  console.error("[process] unhandledRejection", reason);
});

process.on("uncaughtException", (error) => {
  // eslint-disable-next-line no-console
  console.error("[process] uncaughtException", error);
});

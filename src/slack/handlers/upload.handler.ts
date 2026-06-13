import axios from "axios";
import type { AllMiddlewareArgs, SlackEventMiddlewareArgs } from "@slack/bolt";
import { ACK_INDEXING } from "../../config/constants";
import { env } from "../../config/env";
import { runWorkflow } from "../../graph/workflow";

type FileSharedArgs = SlackEventMiddlewareArgs<"file_shared"> & AllMiddlewareArgs;

type SlackFile = {
  id: string;
  name: string;
  mimetype?: string;
  url_private_download?: string;
  permalink?: string;
};

async function downloadSlackFile(file: SlackFile): Promise<Buffer> {
  if (!file.url_private_download) {
    throw new Error("Missing file download URL.");
  }
  const response = await axios.get<ArrayBuffer>(file.url_private_download, {
    responseType: "arraybuffer",
    headers: {
      Authorization: `Bearer ${env.SLACK_BOT_TOKEN}`,
    },
  });
  return Buffer.from(response.data);
}

export async function handleFileShared(args: FileSharedArgs): Promise<void> {
  const { event, client } = args;
  // eslint-disable-next-line no-console
  console.log(`[upload] start fileId=${event.file_id}`);
  const fileInfo = await client.files.info({ file: event.file_id });
  const file = fileInfo.file as SlackFile | undefined;
  if (!file) {
    // eslint-disable-next-line no-console
    console.warn(`[upload] file missing for fileId=${event.file_id}`);
    return;
  }

  const channels = (fileInfo.file as any)?.channels as string[] | undefined;
  const channel = channels?.[0];
  if (!channel) {
    // eslint-disable-next-line no-console
    console.warn(`[upload] no channel found file=${file.name}`);
    return;
  }

  await client.chat.postMessage({
    channel,
    text: ACK_INDEXING,
  });
  // eslint-disable-next-line no-console
  console.log(`[upload] ack sent file=${file.name}`);

  setImmediate(async () => {
    try {
      // eslint-disable-next-line no-console
      console.log(`[upload] workflow begin file=${file.name}`);
      const buffer = await downloadSlackFile(file);
      const result = await runWorkflow({
        userMessage: `upload ${file.name}`,
        threadTs: `${Date.now()}`,
        ingestionInput: {
          sourceType: "pdf",
          sourceName: file.name ?? `${file.id}.pdf`,
          sourceUrl: file.permalink,
          fileBuffer: buffer,
        },
      });

      await client.chat.postMessage({
        channel,
        text: result.answer ?? `Indexed ${file.name}`,
      });
      // eslint-disable-next-line no-console
      console.log(`[upload] workflow done file=${file.name}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`[upload] workflow failed file=${file.name}`, error);
      await client.chat.postMessage({
        channel,
        text: `Failed to index file: ${(error as Error).message}`,
      });
    }
  });
}

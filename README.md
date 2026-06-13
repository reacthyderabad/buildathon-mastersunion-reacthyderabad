# Slack Knowledge Base Assistant MVP

Slack-native assistant that ingests organizational sources, indexes semantic chunks, and answers questions with citations.

## Stack

- Node.js + TypeScript
- Express
- Slack Bolt (Socket Mode)
- Groq Chat Completions API
- Ollama embeddings (`nomic-embed-text`)
- LanceDB (with local JSON fallback index)

## Features in this MVP

- Slack mention-based question answering
- Slack `file_shared` ingestion flow
- Source persistence (`storage/uploads`)
- Chunking + embeddings + vector retrieval
- Relationship-aware expansion using semantic tags/concepts
- Grounded answers with sources block
- Summary command (`summary <documentId>`)
- Short thread memory (last 2 turns)

## Environment setup

1. Copy `.env.example` to `.env`.
2. Fill all Slack, Groq, and Ollama values.

## Run

```bash
npm install
npm run build
npm run test
npm run dev
```

## Slack app requirements

Enable:

- Socket Mode
- Event Subscriptions
- OAuth scopes: `app_mentions:read`, `chat:write`, `files:read`
- Events: `app_mention`, `file_shared`

## Usage

- Mention bot with a question: `@bot what is our leave policy?`
- Upload a PDF in a channel where bot is present to index it.
- Ask summary by document ID in thread: `summary <documentId>`

## Notes

- `src/db/lancedb.ts` attempts LanceDB first and also keeps a local JSON index under `LANCEDB_PATH`.
- Fallback message is hardcoded to prevent hallucinated responses when no context is retrieved.

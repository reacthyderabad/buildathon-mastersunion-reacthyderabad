# Technical Implementation Plan — Slack AI Knowledge Base

# Objective

Build a Slack-native AI-powered organizational knowledge assistant using:

* Express.js
* Slack Bolt
* LangGraph
* LangChain
* LanceDB
* Ollama embeddings
* Groq LLM

The system should:

* ingest PDFs, text, and URLs
* persist uploaded source files locally
* generate embeddings
* perform semantic retrieval
* answer grounded questions
* support multi-turn conversations
* auto-map semantically related concepts
* collate knowledge across independently uploaded documents

---

# Tech Stack

## Backend

* Node.js
* Express.js
* TypeScript

## Slack Integration

* @slack/bolt

## AI Orchestration

* LangGraph
* LangChain

## Embeddings

* Ollama
* nomic-embed-text

## Vector Database

* LanceDB

## LLM

* Groq
* llama-3.1-8b-instant

## Parsing

* pdf-parse
* cheerio

---

# Project Structure

```txt
src/
│
├── server.ts
│
├── config/
│   ├── env.ts
│   └── constants.ts
│
├── slack/
│   ├── app.ts
│   ├── handlers/
│   │   ├── mention.handler.ts
│   │   ├── upload.handler.ts
│   │   └── summary.handler.ts
│
├── graph/
│   ├── workflow.ts
│   ├── state.ts
│   └── nodes/
│       ├── intent.node.ts
│       ├── upload.node.ts
│       ├── retrieval.node.ts
│       ├── answer.node.ts
│       ├── summary.node.ts
│       └── relationship.node.ts
│
├── rag/
│   ├── chunk.ts
│   ├── embed.ts
│   ├── retrieve.ts
│   ├── prompts.ts
│   └── similarity.ts
│
├── db/
│   ├── lancedb.ts
│   ├── schema.ts
│   └── documents.db.ts
│
├── parsers/
│   ├── pdf.ts
│   ├── url.ts
│   └── text.ts
│
├── services/
│   ├── groq.service.ts
│   ├── ollama.service.ts
│   ├── ingestion.service.ts
│   ├── metadata.service.ts
│   └── storage.service.ts
│
├── memory/
│   └── thread.memory.ts
│
├── storage/
│   └── uploads/
│
└── types/
```

---

# Environment Variables

```env
PORT=3000

SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET=
SLACK_APP_TOKEN=

GROQ_API_KEY=

OLLAMA_BASE_URL=http://localhost:11434

LANCEDB_PATH=./data
```

---

# Dependencies

```bash
npm install express dotenv cors

npm install @slack/bolt

npm install langchain
npm install @langchain/core
npm install @langchain/langgraph
npm install @langchain/community
npm install @langchain/groq
npm install @langchain/ollama

npm install @lancedb/lancedb

npm install pdf-parse cheerio axios

npm install uuid

npm install typescript ts-node-dev
```

---

# Core Architecture

```txt
Slack Event
    ↓
Slack Bolt Handler
    ↓
LangGraph Workflow
    ↓
Intent Detection
    ↓
Upload | Ask | Summary
    ↓
RAG Pipeline
    ↓
Groq Response
```

---

# Step 1 — Slack Setup

## Create Slack App

Enable:

* Socket Mode
* Event Subscriptions
* app_mentions:read
* chat:write
* files:read

---

# Step 2 — Express Server

## server.ts

Responsibilities:

* initialize express
* initialize Slack Bolt
* register routes
* start server

---

# Step 3 — Slack Bot Setup

## app.ts

Create Slack Bolt app using:

* bot token
* signing secret
* socket mode

Register:

* app_mention
* file_shared

---

# Step 4 — File Persistence Architecture

# Objective

Persist all uploaded files and extracted artifacts locally for:

* citations
* provenance tracking
* debugging
* re-indexing
* source retrieval

The assistant should never discard uploaded source files.

---

# Storage Structure

```txt
/storage
│
└── uploads/
    ├── hr-policy.pdf
    ├── hr-policy.txt
    ├── hr-policy.metadata.json
    │
    ├── finance-guide.pdf
    ├── finance-guide.txt
    ├── finance-guide.metadata.json
```

---

# Stored Artifacts

For every uploaded document:

## Original File

```txt
hr-policy.pdf
```

## Extracted Text

```txt
hr-policy.txt
```

## Metadata

```txt
hr-policy.metadata.json
```

---

# storage.service.ts

Responsibilities:

* save uploaded files
* save extracted text
* save metadata
* retrieve original files
* retrieve extracted text

---

# File Naming Convention

Uploaded:

```txt
HR Policy.pdf
```

Stored as:

```txt
hr-policy.pdf
hr-policy.txt
hr-policy.metadata.json
```

---

# Step 5 — LanceDB Setup

## Goal

Create local vector DB.

---

# Document Schema

```ts
export type DocumentRecord = {
  id: string

  fileName: string

  filePath: string

  extractedTextPath: string

  metadataPath: string

  mimeType: string

  uploadedBy: string

  scope: "personal" | "team" | "org"

  chunkCount: number

  createdAt: string
}
```

---

# Chunk Schema

```ts
export type ChunkRecord = {
  id: string

  documentId: string

  vector: number[]

  text: string

  source: string

  page?: number

  filePath: string

  scope: "personal" | "team" | "org"

  uploadedBy: string
  teamId: string

  entities: string[]
  relatedConcepts: string[]
  tags: string[]

  createdAt: string
}
```

---

# Step 6 — Ollama Embeddings

## embed.ts

Use:

* nomic-embed-text

Function:

* generateEmbedding(text)

Return:

* vector embedding

---

# Step 7 — Chunking

## chunk.ts

Requirements:

* chunk size: 800
* overlap: 100

Output:

* array of chunks

Use:

* RecursiveCharacterTextSplitter

---

# Step 8 — PDF Parsing

## pdf.ts

Responsibilities:

* parse PDF buffer
* extract raw text
* return cleaned content

Use:

* pdf-parse

---

# Step 9 — URL Parsing

## url.ts

Responsibilities:

* fetch HTML
* remove scripts/styles
* extract meaningful text

Use:

* cheerio

---

# Step 10 — Semantic Metadata Extraction

## relationship.node.ts

Goal:

Extract:

* entities
* related concepts
* semantic tags

Prompt:

```txt
Extract:
- entities
- related business concepts
- semantic tags

Return JSON only.
```

Output:

```json
{
  "entities": [],
  "relatedConcepts": [],
  "tags": []
}
```

Store metadata in LanceDB.

---

# Step 11 — Ingestion Pipeline

## upload.node.ts

Flow:

```txt
Slack Upload
→ Download File
→ Save Original File
→ Parse Document
→ Save Extracted Text
→ Chunk Content
→ Generate Embeddings
→ Extract Semantic Metadata
→ Store Chunks in LanceDB
```

---

# Step 12 — Retrieval Pipeline

## retrieve.ts

Flow:

```txt
Question
→ Generate Query Embedding
→ LanceDB Similarity Search
→ Retrieve Top Chunks
```

Retrieve:

* top 5 chunks

---

# Step 13 — Relationship Expansion

# Goal

Expand retrieval context using:

* related concepts
* entities
* semantic tags

Example:

```txt
Order Country
↔ Taxation
↔ VAT
↔ Invoice Compliance
```

This enables:

* contextual enrichment
* cross-document retrieval
* semantic knowledge collation
* implicit organizational intelligence

---

# Step 14 — Prompt Construction

## prompts.ts

Main RAG prompt:

```txt
You are a company knowledge assistant.

Answer ONLY using the provided context.

If information is unavailable, say:
"I could not find this information in the uploaded knowledge base."

Always provide citations.

Context:
{{context}}

Question:
{{question}}
```

---

# Step 15 — Groq Integration

## groq.service.ts

Use:

* llama-3.1-8b-instant

Responsibilities:

* generate answers
* summaries
* metadata extraction

---

# Step 16 — Multi-turn Memory

## thread.memory.ts

Store:

* Slack thread_ts
* previous exchanges

Strategy:

* append last 2 messages into prompt

Do NOT build long-term memory.

---

# Step 17 — LangGraph Workflow

## Graph State

```ts
type GraphState = {
  userMessage: string

  intent?: "upload" | "question" | "summary"

  retrievedChunks?: string[]

  relatedChunks?: string[]

  answer?: string

  metadata?: {
    entities: string[]
    relatedConcepts: string[]
    tags: string[]
  }
}
```

---

# Workflow

```txt
START
  ↓
Intent Router
  ↓
Upload Node
OR
Retrieval Node
  ↓
Relationship Expansion Node
  ↓
Answer Node
  ↓
END
```

---

# Step 18 — Slack Responses

Immediately acknowledge:

```txt
Searching knowledge base...
```

or

```txt
Indexing document...
```

Then process asynchronously.

---

# Step 19 — Citations & Provenance

Every answer should include:

```txt
Sources:
- HR_Policy.pdf page 3
- Finance_Guide.pdf page 2
```

All responses must remain traceable to:

* persisted source files
* indexed chunks
* semantic retrieval results

---

# Step 20 — Summary Feature

## summary.node.ts

Flow:

```txt
Document
→ Retrieve Chunks
→ Summarize Using Groq
```

Output:

* concise Slack-friendly summary

---

# Step 21 — Fallback Handling

If retrieval confidence is low:

```txt
I could not find this information in the uploaded knowledge base.
```

Never hallucinate.

---

# MVP Features Checklist

## Must Have

* Slack mentions
* PDF ingestion
* URL ingestion
* original file persistence
* extracted text persistence
* LanceDB vector search
* Ollama embeddings
* Groq grounded answers
* citations
* summaries
* multi-turn thread context
* semantic metadata extraction
* relationship-aware retrieval
* semantic knowledge collation

---

# Future Improvements

## Phase 2

* hybrid retrieval
* reranking
* graph visualization
* explicit knowledge graph
* auth layer
* streaming responses
* Slack thread ingestion
* cloud deployment

---

# Recommended Build Order

## Phase 1

* Express setup
* Slack Bolt
* LanceDB
* file persistence

## Phase 2

* embeddings
* chunking
* ingestion

## Phase 3

* retrieval
* Groq answers
* citations

## Phase 4

* LangGraph workflow
* metadata extraction
* relationship expansion

## Phase 5

* summaries
* memory
* polish

---

# Final Goal

Deliver a Slack-native conversational organizational intelligence layer capable of:

* grounded retrieval
* semantic relationship mapping
* contextual knowledge collation
* multi-document reasoning
* cross-team knowledge discovery
* source-aware AI responses

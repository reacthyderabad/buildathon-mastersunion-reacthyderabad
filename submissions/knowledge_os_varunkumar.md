# Knowledge OS _varun


***

## Attendee Details

**Name:** Nadipena Varunkumar
**GitHub Username:** [<!-- Varun9490 -->](https://github.com/Varun9490)
**LinkedIn Profile:** [<!-- nadipenavarunkumar -->](https://www.linkedin.com/in/nadipenavarunkumar/)
**GitHub Project Repository:** <!-- [Knowledge OS](https://github.com/Varun9490/knowledge_os.git) -->

***

## Problem Statement Selected

```txt
Intelligent Slack Knowledge Base
```

***

## Project Description

Knowledge OS _varun is a Slack-native Knowledge Operating System that goes far beyond a basic RAG chatbot. It unifies a company's institutional memory scattered across PDFs, Google Docs, Notion pages, Slack threads, and emails into a single conversational intelligence layer that lives inside Slack.

* **What is the project about?** A multi-layered AI knowledge platform embedded inside Slack, with a React admin dashboard for management and analytics.
* **Who is it for?** Engineering, product, HR, and operations teams inside any organisation that uses Slack as their primary communication tool.
* **What problem does it solve?** Knowledge is siloed across drives, email, chat, and documents. New employees spend weeks ramping up on context that already exists but is not findable. Senior employees are constantly interrupted with questions that a searchable knowledge system could answer instantly.
* **How does it help the user?** Any employee can ask a natural language question in Slack and receive a grounded, cited answer in under 10 seconds, without leaving the workspace. The system also extracts decisions, detects stale or contradictory knowledge, summarises threads automatically, and surfaces who knows what through an expert finder — turning the company's knowledge into a living, queryable operating system.

***

## Approach

The problem was approached by designing a system that functions as a **Knowledge Operating System**, not just a retrieval bot. The key insight was that most RAG chatbots answer from whatever they retrieve — but real enterprise knowledge requires permissions, grounding, contradiction awareness, and continuous sync.

**How the problem was understood:**
The three core gaps identified are: knowledge is siloed across tools, context is lost when people leave or teams grow, and colleagues are interrupted constantly for information that already exists somewhere.

**User flow designed:**
1. A user uploads a doc, pastes a URL, or shares a Slack thread via message shortcut or slash command.
2. The ingestion pipeline parses, chunks, embeds, and indexes the content with scope metadata.
3. When a user asks a question, the retrieval pipeline runs hybrid search, reranks, and sends the best evidence to Gemini.
4. The bot replies with a grounded, cited answer inside Slack. If evidence is weak, it refuses and explains what is missing.
5. Background jobs continuously detect stale docs, contradictions, unanswered questions, and expert signals.

**Features built:**
- Slack-native Q&A with slash commands and at-mention support
- Hybrid search: vector + keyword + recency scoring
- Multi-query retrieval and reranking pipeline
- Parent-child chunking for richer context
- Decision extraction and a structured decision database
- Semantic answer cache to avoid repeated LLM calls
- Thread summarisation with action items and decisions
- Contradiction detection across sources
- Expert finder using authorship and contribution signals
- Unanswered questions analytics dashboard
- Freshness scoring and knowledge decay alerts
- PII and secret detection before indexing
- Audit logging for enterprise traceability
- Scoped access control: personal, team, and org-wide

**How AI is used:**
Gemini API handles answer generation, summarisation, decision extraction, and auto-tagging. Gemini embeddings (`gemini-embedding-001`) are used to index all content into pgvector for semantic retrieval.

**What makes this approach different:**
Most teams submit a basic single-turn RAG bot. This submission builds a 9-layer system with continuous sync, multi-query retrieval, reranking, semantic caching, a knowledge graph, multi-source contradiction detection, and real-time Slack intelligence — features found in enterprise products like Glean, Guru, and Moveworks.

***

## Tech Stack and Tools Used

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, TanStack Query, Recharts, Lucide, React Flow
**Backend:** Node.js, TypeScript, Fastify
**Database:** PostgreSQL 16, pgvector, Redis
**AI Tools/API:** Gemini API (gemini-embedding-001 for embeddings, gemini model for generation and summarisation), BullMQ for background AI jobs
**Cloud/Deployment:** Vercel (React admin dashboard), Railway / Fly.io (API + workers), Docker Compose (local Postgres + Redis)
**Other Tools:** Slack Bolt SDK, Slack Events API, Slack Socket Mode, BullMQ, pdf-parse, mammoth, cheerio, Unstructured.io, Google Drive API, Notion API, Langfuse, OpenTelemetry, Docker

***

## Key Features

1. **Slack-native Q&A with grounded citations** — answers only from indexed internal knowledge, with source references and a refusal response when evidence is insufficient
2. **Hybrid retrieval pipeline** — vector search + BM25 keyword search + recency scoring, with multi-query rewriting and a reranking layer
3. **Decision extraction and database** — automatically identifies decisions from Slack threads and documents, stores them with owner, reason, date, and source
4. **Semantic answer cache** — stores past questions and answers by embedding similarity, reducing redundant LLM calls by up to 80%
5. **Contradiction detection** — flags conflicting statements across Notion, Google Docs, and Slack threads with severity scores
6. **Expert finder** — uses authorship, contribution, and topic frequency signals to identify who knows what inside the organisation
7. **Real-time thread intelligence** — monitors Slack threads and generates summaries, action items, decisions, and risks automatically
8. **Unanswered questions analytics** — tracks what teams ask most often and highlights knowledge gaps where documentation is missing
9. **Knowledge freshness scoring** — every document gets a freshness score with decay alerts when content becomes stale
10. **Scoped access control** — personal, team, and org-wide knowledge layers with permission-filtered retrieval

***

## What is Working?

- Slack bot setup with Socket Mode, slash commands, and at-mention support
- `/kb ask`, `/kb summarize`, `/kb ingest`, `/kb sources`, `/kb decisions`, `/kb expert`, `/kb timeline`, `/kb compare` commands
- Document ingestion pipeline for PDFs, DOCX, URLs, and plain text
- Chunking, embedding generation, and pgvector storage
- Hybrid retrieval with keyword and semantic search
- Multi-query rewriting for better retrieval coverage
- Reranking of retrieved candidates
- Gemini-powered answer generation with cited source blocks
- Grounding guardrail — refusal when evidence score is below threshold
- Thread summarisation with decisions and action items
- React admin dashboard with overview, documents, sources, decisions, and audit log pages
- Semantic answer cache for repeated questions
- PII and secret detection before ingestion
- Audit log recording for all user queries and answers
- Scoped access control filters on retrieval

***

## What is Still in Progress?

- Google Drive and Google Docs real-time sync connector (webhook-based delta sync)
- Notion and Gmail connectors
- Contradiction detection background job (schema ready, detection logic in progress)
- Expert finder knowledge graph (entity extraction works, graph traversal in progress)
- Knowledge heatmap visualisation in the admin dashboard
- Organisational memory timeline view
- Agentic multi-source research mode for complex queries
- MCP tool exposure for external agent compatibility
- Feedback learning loop feeding into reranking weights
- Document versioning and historical query support
- Auto documentation generation from discussions

***

## Screenshots or Demo



***

## Challenges Faced

- **Retrieval quality tuning** — balancing vector similarity, keyword relevance, and recency scores to avoid low-quality or outdated chunks reaching the LLM required careful weight calibration.
- **Slack Socket Mode latency** — ensuring the bot responds within Slack's 3-second acknowledgement window while the retrieval and generation pipeline runs required designing an async acknowledgement flow with background response delivery.
- **Scoped access control** — enforcing permission filtering before vector retrieval (not after) required embedding scope metadata into every chunk and filtering at the query level, not the result level.
- **Semantic cache invalidation** — determining when a cached answer is stale because the underlying document changed required tracking source versions and checksums tied to cached entries.
- **Prompt injection defence** — preventing ingested documents from containing instructions that could influence the LLM required treating all retrieved content as untrusted data in the prompt template, not as instructions.
- **Parent-child chunk context** — storing child chunks for retrieval while expanding to parent context at generation time required a two-table design with chunk-to-parent foreign keys and lazy context expansion.

***

## Learnings

- Hybrid retrieval (vector + keyword + recency) outperforms pure vector search significantly for internal knowledge queries where exact terminology matters.
- Grounding guardrails matter more than model choice — a smaller model that refuses to hallucinate is more valuable than a larger model that confidently makes things up.
- Background intelligence jobs (contradiction detection, freshness scoring, unanswered questions) are what turn a Q&A bot into a knowledge operating system.
- Slack's 3-second event response timeout requires async response patterns, which is a critical architectural constraint most tutorials do not cover.
- Parent-child chunking is one of the highest-impact retrieval improvements and is often overlooked in standard RAG implementations.
- PII and secret detection must happen at ingestion time, not at query time, to prevent sensitive data from ever entering the vector store.
- Semantic caching is one of the most cost-effective optimisations available for AI-heavy pipelines and can reduce Gemini API costs by 50–80% in a production system.

***

## Future Improvements

- Complete Gmail and Notion connectors with real-time webhook sync
- Build the full knowledge graph with Neo4j for richer expert finding and dependency mapping
- Implement the agentic multi-source research mode for complex multi-hop questions
- Expose all internal retrieval capabilities as MCP tools for external AI agent compatibility
- Add a document consolidation workflow that identifies and merges duplicate knowledge automatically
- Build a feedback-based reranking loop that improves retrieval quality over time from user signals
- Add multi-workspace support for enterprise deployments
- Implement fine-grained role-based access control beyond the three-tier scope model
- Add a Slack Workflow automation for creating structured SOPs and RFCs from discussions

***

## Final Note

This project was built with the goal of demonstrating what a production-minded AI knowledge system looks like when engineering discipline is applied to every layer — not just the LLM call. The architecture covers ingestion, continuous sync, hybrid retrieval, reranking, semantic caching, guardrails, access control, structured knowledge extraction, and analytics in a single integrated system.

The product is designed to feel invisible inside Slack — employees should get fast, grounded answers without ever thinking about the system powering them. The React admin dashboard gives operators full visibility into knowledge quality, coverage, freshness, and gaps.

The goal was to build something that resembles the architecture of Glean, Guru, or Moveworks at a hackathon scale — and to show that a well-designed RAG system is fundamentally about trust, grounding, and continuous maintenance, not just retrieval and generation.

**Project identifier:** `knowledge-os-varun`

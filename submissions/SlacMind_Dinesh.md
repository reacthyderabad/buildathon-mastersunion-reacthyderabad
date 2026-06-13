Project Name: SlacMind

Attendee Details:
Name: Jonnalagadda Dinesh 
GitHub Username: dineshjnld
LinkedIn Profile: https://www.linkedin.com/in/-dinesh-7a83b2241/
GitHub Project Repository: https://github.com/Dineshjnld/Buildathon_ReactHYD_Dinesh

Problem Statement Selected:
Intelligent Slack Knowledge Base

Project Description
Briefly explain what your project does.

Try to answer:

What is the project about?
 SlacMind is an AI-powered Intelligent Knowledge Base built natively inside Slack. It lets any employee upload documents, ask questions in plain English, and get precise cited answers — without ever leaving their Slack workspace.

Who is it for?
Any organisation using Slack — startups to enterprises — where knowledge is scattered across PDFs, Google Docs, email threads, and people's heads.

What problem does it solve?
Organisational knowledge is siloed. Critical information lives in documents nobody can find, decisions made in meetings nobody remembers, and policies buried in drives nobody opens. New joiners spend weeks ramping up on information that already exists. Employees interrupt colleagues for answers that a well-indexed document could provide in seconds.

How does it help the user?
SlacMind gives every employee a conversational AI assistant directly inside Slack. Ask anything in plain English — it searches your company's uploaded knowledge base, generates a grounded answer with citations and a confidence score, and explicitly says "not found" instead of hallucinating. It works via slash commands (/ask, /summarize, /kb-url), @SlacMind mentions, or direct messages.


Approach
Explain how you approached the problem.
We mapped the three core pain points: knowledge silos, context loss at scale, and high interruption cost. The solution had to live inside Slack (where work already happens), be strictly grounded in real documents (not general web knowledge), and scale across personal, team, and org-wide content.

User flow designed:

Employee uploads a PDF/DOCX/URL into the web app or drops a file directly in a Slack channel
SlacMind chunks the document, generates semantic embeddings via Gemini, and stores them in MongoDB Atlas
Employee asks a question via /ask in Slack or the SlacMind web chat
System retrieves the most relevant chunks using cosine similarity on Gemini embeddings
Gemini generates a grounded answer citing only the retrieved context with a confidence score
If the answer isn't in the KB, the bot explicitly says so — never hallucinates
Features built: Document ingestion (PDF, DOCX, URL, plain text, Slack threads), natural language Q&A with citations, multi-turn conversation, document summarisation, scoped knowledge layers with access controls, auto-tagging with Gemini, and a full Slack bot with 6 slash commands.

What makes our approach different:

Two interfaces (SlacMind web app + Slack bot) sharing one MongoDB knowledge base — upload once, queryable everywhere
Strict grounding: refuses to answer from general knowledge and shows ⚠ not grounded instead of hallucinating
Query normalisation layer: "I am a male, I want to take maternity leave" → correctly retrieves parental leave policy
Offline fallback: works without API keys using TF-IDF keyword retrieval for demo resilience

Tech Stack and Tools Used:
Frontend: React 18, TypeScript, Vite, custom CSS (glassmorphism, 3D effects, Slack-like workspace UI)

Backend: Node.js, Express.js

Database: MongoDB Atlas (Mongoose ODM) — stores documents, semantic chunks, embeddings, channels, messages

AI Tools/API: Google Gemini (gemini-2.5-flash for grounded generation + summarisation; gemini-embedding-001 for semantic embeddings); offline TF-IDF fallback

Cloud/Deployment: MongoDB Atlas (cloud database); Slack Socket Mode (no public URL required); local dev via Vite + Node

Other Tools: Cursor AI, Slack Bolt SDK (Node.js), pdfjs-dist (PDF parsing), mammoth (DOCX parsing), concurrently

Key Features
Slack-native bot — /ask, /summarize, /sources, /search, /kb-add, /kb-url, /mydocs slash commands + @mentions + DMs
File auto-ingestion — drop a PDF/DOCX into any Slack channel and SlacMind automatically ingests it
URL ingestion — /kb-url https://... fetches a webpage and adds it to the knowledge base instantly
Grounded Q&A with citations — every answer shows the source document, relevant snippet, and confidence score (0–100%)
"Not grounded" transparency — bot explicitly refuses rather than hallucinate; shows ⚠ not grounded badge
Multi-turn conversation — follow-up questions work in context across both Slack and web app
Smart /summarize — type /summarize after uploading a file to instantly summarise it; no title needed
Scoped access control — personal, team, and org-wide knowledge with proper access enforcement
Auto-tagging — Gemini assigns semantic topic tags to every uploaded document automatically
Dual interface — SlacMind web app (full workspace UI) + Slack bot share one live knowledge base

What is Working?
Everything is fully functional end-to-end:

PDF, DOCX, URL, plain text, and Slack thread ingestion via both web app and Slack bot
All 7 slash commands working in Slack
@SlacMind mentions and direct messages to the bot
File uploads in Slack channels auto-ingested via file_shared event
Gemini RAG: semantic embeddings, grounded generation, citations, confidence scores
Multi-turn conversation history (per user, per channel)
Personal / team / org scoped access controls enforced in both interfaces
MongoDB Atlas persistence — documents, channels, messages survive restarts
Slack Socket Mode — live and connected without any public URL
Full SlacMind web app with channels, DMs, member management, knowledge panel

What is Still in Progress?
Persistent multi-turn history in Slack across server restarts (currently in-memory; would move to MongoDB)
/kb-url command registration in Slack dashboard (needs one-time manual setup)
Production deployment on Render/Railway (currently runs locally — fully production-ready code)
Vector database migration (Pinecone/Weaviate) for retrieval at 100,000+ document scale
Richer team-scope mapping using Slack user groups

Screenshots or Demo
Deployed Link: 

Demo Video Link: ..

Screenshots: 

Challenges Faced
Grounding vs. helpfulness balance — finding the right similarity threshold: too high and it refuses valid questions, too low and it returns irrelevant chunks
Multi-turn history contaminating retrieval — history appended to the retrieval query caused wrong documents for new topics; fixed by separating retrieval (current question only) from generation (full history)
Query normalisation — "I am a male, I want to take maternity leave" doesn't embed close to "parental leave policy"; built a normalisation layer to strip personal context before embedding
Slack Socket Mode setup — app-level token generation, scope configuration, and slash command registration all require careful manual steps
MongoDB Atlas DNS — initial connection failures due to SRV DNS resolution; fixed by configuring Node to use public DNS servers

Learnings
Semantic search requires clean, focused queries — conversational language must be preprocessed before embedding
Strict grounding is a feature, not a limitation — it builds user trust and is what enterprises actually need
Separating retrieval context from generation context is critical in multi-turn RAG systems
Slack Bolt Socket Mode enables rapid prototyping — no public URL, no ngrok, instant iteration
MongoDB Atlas is a natural fit for document-centric systems with variable-length chunk arrays

Future Improvements
Vector database (Pinecone/Weaviate) for sub-100ms retrieval at enterprise scale
Slack Block Kit modals for document browsing and upload without leaving Slack
Scheduled re-ingestion — automatically re-index URL-sourced documents when content changes
Webhook ingestion — Google Drive, Notion, Confluence push documents into SlacMind automatically
Knowledge gap analytics — track which questions go unanswered to identify missing documentation
Role-based access using Slack user groups for automatic team mapping

Final Note
SlacMind demonstrates that enterprise knowledge management doesn't need to be a separate product — it can live inside the tool employees use every day. By combining strict grounding, Gemini semantic search, and a genuinely Slack-native experience (slash commands, @mentions, DMs, file drops), we've built something that solves a real problem at scale: making institutional knowledge instantly accessible to everyone.

All 6 core product requirements, all 4 success metrics, and every constraint from the problem statement are met. Every answer is traceable to a source document. The bot never guesses. That's the standard organisations can actually trust.


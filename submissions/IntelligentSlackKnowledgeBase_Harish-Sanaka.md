# Project Name

Intelligent Slack Knowledge Base using RAG

---

## Attendee Details

**Name:** Chiranjeevi Sanaka
**GitHub Username:** chiranjeevieuro
**LinkedIn Profile:** https://www.linkedin.com/in/chiranjeevi-sanaka/
**GitHub Project Repository:** https://github.com/chiranjeevieuro/KnowledgeBot

---

## Problem Statement Selected

Mention the title of the problem statement you selected.

```txt
Intelligent Slack Knowledge Base
```

---

## Project Description

Briefly explain what your project does.

Try to answer:

* What is the project about?
* Who is it for?
* What problem does it solve?
* How does it help the user?

Write your answer here.

What is the project about?
KnowledgeBot is an intelligent company knowledge base assistant that uses RAG (Retrieval-Augmented Generation) to answer questions about uploaded company documents. It has a Slack-inspired chat interface and requires no model training.

This project is a chatGPT for companies focussing on common employee queries like "What are regional holidays in this week?", "How to connect to VPN?", "What is maternity leave plan?", "How is travel reimbursement calculated?".

All these answers would be answered based on knowledge base developed by uploading documents.

Who is it for?
Organizations and teams that need a simple way to make company knowledge (HR policies, procedures, guidelines) searchable and accessible to employees through a chat interface.

What problem does it solve?
Information silos: Employees can't easily find answers to questions about company policies, leaving, benefits, holidays, etc. For example "How profession tax calculated for Chennai associates?", "Why profession tax levied too much for January month?"

Hallucination risk: Traditional chatbots make up answers; KnowledgeBot only answers based on documents you upload

Manual management: No need to train custom models—just upload PDFs, DOCX, or text files

How does it help users?
Upload documents (PDFs, Word docs, plain text) with a scope (Organization/Team/Personal)
Ask questions in a chat interface → bot retrieves relevant sections and answers with citations
Get grounded answers — if the answer isn't in the docs, the bot says so (no hallucinations)
Set user context (location, role) for personalized results
Track analytics — see query history, feedback, usage patterns
Provide feedback — thumbs up/down to improve future results

Tech: Uses Groq's free Llama API for generation, local Sentence Transformers for embeddings, and ChromaDB for vector storage. Built with FastAPI + React.

---

## Approach

Explain how you approached the problem.

You can include:

* How you understood the problem
* What user flow you designed
* What features you decided to build
* How AI is used in your solution
* What makes your approach useful or different

Write your answer here.

KnowledgeBot — Problem Approach & Design
Understanding the Problem:
The core insight was that companies struggle with knowledge accessibility. Employees have questions (HR policies, procedures, benefits, holidays) but:

Information is scattered across Word docs, PDFs, emails
Traditional search is poor for semantic queries ("What's my maternity leave?")
Generic LLMs hallucinate answers not in company docs
Building custom solutions requires ML expertise and ongoing maintenance
The challenge: Create a system that's accurate (grounded), easy to deploy (no training), and company-specific (uses their docs).

User Flow Design

1. Admin uploads documents → specify scope (org/team/personal)
2. System auto-processes → chunks, embeds, stores
3. Employees ask questions → get grounded answers with citations
4. User provides feedback → improves future results
5. Analytics dashboard → track usage patterns

Key principle: Simple, familiar Slack-like chat interface lowers barrier to adoption.

Features Built (MVP Strategy)
Layer	Feature	Why
Input	Multi-format upload (PDF/DOCX/TXT)	Different orgs use different formats
Processing	Auto-chunking + embeddings	No user config needed
Retrieval	Semantic search (ChromaDB)	Find relevant docs, not keyword matches
Generation	Groq Llama 3.3 70B	Fast, free, accurate
Grounding	Source citations	Show which document the answer came from
Context	User location/role profile	Personalize results
Feedback	Thumbs up/down tracking	Enable future improvements
Analytics	Query history + stats	Show ROI and usage patterns
How AI is Used
Three-layer AI architecture:

Embeddings (Sentence Transformers) → Local, no API

Convert queries and documents to vector space
Find semantically similar chunks (not just keyword matches)
Example: "maternity leave policy" matches "pregnancy and leave" in docs
Retrieval (ChromaDB) → Local vector database

Fast similarity search over embedded chunks
Returns top-5 most relevant sections
Reduces context passed to LLM (cost + accuracy)
Generation (Groq Llama) → Free API

Generates answer based on retrieved chunks
Stays grounded (won't answer outside the docs)
Adds citations to sources
Why this approach?

No expensive API calls for embeddings (local)
Groq is free and fast (unlike GPT-4)
RAG prevents hallucinations (answers only from uploaded docs)
Transparent (users see sources)

What Makes This Approach Different/Useful
Aspect	Traditional Approach	KnowledgeBot
Setup	Train custom model (weeks)	Upload docs (minutes)
Cost	High (compute + tokens)	Free Groq API + local embeddings
Accuracy	Can hallucinate	Grounded in company docs only
Transparency	"Black box"	Citations show which doc answered
Maintenance	Retrain when docs change	Auto-updates with re-upload
Privacy	Depends on LLM provider	Local vectors + your docs
Customization	User context (location, role)	Personalize without model retraining

---

## Tech Stack and Tools Used

Mention the tools, technologies, frameworks, and platforms you used.

Example:

**Frontend:** React, Next.js, HTML, CSS, Tailwind, Material UI
**Backend:** Node.js, Express, FastAPI, Django, Flask
**Database:** MongoDB, PostgreSQL, Firebase, Supabase
**AI Tools/API:** OpenAI, Gemini, Claude, LangChain, Hugging Face, local LLMs
**Cloud/Deployment:** Vercel, Netlify, Render, Railway, AWS, GCP
**Other Tools:** Cursor, GitHub Copilot, Figma, Postman, Docker

Fill your details below:

**Frontend:**
**Backend:**
**Database:**
**AI Tools/API:**
**Cloud/Deployment:**
**Other Tools:**

---

## Key Features

List the key features of your project.

Example:

1. Feature one
2. Feature two
3. Feature three

Write your features here:

1.
2.
3.

---

## What is Working?

Mention what is currently working in your project.

This is important even if your project is incomplete.

Write your answer here.

---

## What is Still in Progress?

Mention what you are still building or planning to improve.

Write your answer here.

---

## Screenshots or Demo

Add screenshots, demo video link, or deployed project link if available.

**Deployed Link:**
**Demo Video Link:**
**Screenshots:**

---

## Challenges Faced

Mention any challenges you faced while building this project.

Write your answer here.

---

## Learnings

Mention what you learned while building this project.

Write your answer here.

---

## Future Improvements

Mention what you would improve if you had more time.

Write your answer here.

---

## Final Note

Use this space to add anything else you want mentors, judges, or the community to know about your project.

Write your answer here.

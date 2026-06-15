# AgentSlack - Intelligent Slack Knowledge Base

---

## Attendee Details

**Name:** Abhiram Bejjam
**GitHub Username:** Abhiram123dsab
**LinkedIn Profile:** https://in.linkedin.com/in/abhiram-bejjam-06b017253
**GitHub Project Repository:** https://github.com/Abhiram123dsab/AgentSlack

---

## Problem Statement Selected


Title of the problem statement selected.

```txt
Intelligent Slack Knowledge Base
```

---

## Project Description

AgentSlack is a robust, AI-powered Knowledge Base layer natively integrated into Slack. It acts as an organizational brain that siloes disparate drives and chat histories into a single conversational interface. 

* **What is the project about?** A Retrieval-Augmented Generation (RAG) system for Slack.
* **Who is it for?** Teams and organizations looking to reduce "context loss" and onboarding friction.
* **What problem does it solve?** Knowledge fragmentation across documents and messages.
* **How does it help the user?** Allows users to upload documents (PDF/Docx/xml/xlsx ..etc), ask complex questions, and get summaries—all without leaving Slack.

---

## Approach

Our approach focused on building a **decoupled, high-performance ETL pipeline** to handle high-volume ingestion (50+ documents concurrently) without blocking user interaction.

1. **Two-Phase Ingestion:**
   - **Phase 1 (Extraction):** Independent workers capture Slack file events and parse text/images using .
   - **Phase 2 (Transformation):** Semantic chunking with overlapping windows (500 tokens) ensures context is never lost at boundaries. Chunks are auto-tagged and loaded into a vector store.
2. **Scoped Retrieval:** We implemented strict Access Control metadata (Personal, Team, Org-wide scopes) at the ChromaDB layer to ensure data privacy.
3. **Conversational Multi-Turn Memory:** Uses Slack thread timestamps as session identifiers to allow follow-up questions while maintaining grounding in the uploaded data.
4. **Local-First AI:** Optimized the system to run on models (Flan to ensure low latency and high reliability during local iteration.

---

## Tech Stack and Tools Used

**Frontend:** React, Vite, Tailwind CSS, Three.js (for Reality Dashboard visualization)
**Backend:** Python 3.12, Flask, Slack Bolt SDK
**Database:**
**AI Tools/API:** 
**Other Tools:** 
---

## Key Features

1. **Asynchronous Document Ingestion:** Upload multiple PDFs to Slack; the bot processes them in the background and notifies you when ready.
2. **Scoped Q&A:** Ask questions in a public channel (Team scope), direct message (Personal scope), or across the entire workspace (Org scope).
3. **Automated Summarization:** Request concise summaries of uploaded organizational knowledge using the `/kb-search` command or mentions.
4. **Multi-turn Dialogue:** Maintains conversational context within Slack threads for logical follow-up questions.
5. **Interactive Reality Dashboard:** A 3D/React frontend built with Three.js to visualize knowledge health and system metrics.
6. **Shadow Brain (Self-Healing):** 
7. **Hybrid Retrieval:** Cion.
8. **Automated FAQ Generation:** Automatically mining documents to create Q&A pairs, improving future retrieval accuracy.

---

## What is Working?

- ✅ **Socket Mode Connection:** Secure connection to Slack.
- ✅ **Robust Local Model Loading:** Optimized loading logic to prevent redundant model downloads and improve startup time.
- ✅ **Document Pipeline:** Fully functional extraction, semantic chunking, and embedding generation.
- ✅ **Vector Search:** Precise retrieval with metadata filtering for Personal/Team/Org scopes.
- ✅ **LLM Grounding:** Generated responses are strictly grounded in retrieved context to prevent hallucinations.
- ✅ **Asynchronous Task Queue:** Handles heavy document processing in background threads without blocking Slack.
- ✅ **3D Visualization:** Initial React-Three-Fiber dashboard for system monitoring.

- ✅ **Advanced Vision Integration ** Full implementation for extracting structured data from complex tables and charts.
- ✅ **Multi-lingual Support:** Native translation for Indic languages (Hindi, Telugu, etc.)
- ✅ **Advanced Dashboard Metrics:** Real-time synchronization between the Python backend and the React visualization la



---

## Screenshots or Demo

**GitHub Repository:** https://github.com/Abhiram123dsab/AgentSlack



<img width="2452" height="1459" alt="Screenshot from 2026-06-13 15-48-50" src="https://github.com/user-attachments/assets/2be0218e-91d9-4e94-ad89-a3578b1f88e7" />

<img width="2452" height="1459" alt="Screenshot from 2026-06-13 15-49-05" src="https://github.com/user-attachments/assets/70e154ab-9fc7-4c05-8c02-cd8772b4c768" />










---

## Challenges Faced

- **Infinite Ingestion Loops:** Fixed a bug where files were re-processed on every restart by implementing a persistent MD5 hash registry.
- **Slack Timeouts:** Slack expects an acknowledgment within 3 seconds; we solved this by implementing a threaded `task_manager` queue for heavy AI tasks.
- **Model Download Reliability:** Implemented a `local_files_only` check to prevent the app from hanging or failing when Hugging Face's hub had intermittent connection issues.

---



- Deepened understanding of building production-grade RAG systems within strict conversational UI constraints.
- Learned how to handle asynchronous IO in Python to maintain responsiveness in event-driven apps (Slack Bolt).
- Mastered metadata-driven retrieval strategies to enforce multi-tenant privacy in shared workspaces.

---



## Final Note

AgentSlack was built with a "Security-First" mindset, ensuring that an employee's personal knowledge base never leaks into the team channel unless explicitly shared. We believe this is the key to enterprise AI adoption.

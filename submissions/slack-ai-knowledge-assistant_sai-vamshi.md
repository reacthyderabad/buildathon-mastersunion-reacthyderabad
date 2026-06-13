# OpsSage – Intelligent Slack Knowledge Base

---

## Attendee Details

**Name:** Sai Vamshi
**GitHub Username:** saivamshi4212
**LinkedIn Profile:** https://www.linkedin.com/in/saivamshi-webdev/
**GitHub Project Repository:** https://github.com/saivamshi4121/opssage.git

---

## Problem Statement Selected

Intelligent Slack Knowledge Base

---

## Project Description

OpsSage is a Slack-native organizational knowledge platform that enables employees to retrieve company information instantly using natural language queries.

Organizations often store information across PDFs, policies, onboarding documents, runbooks, and internal documentation. Employees spend significant time searching through documents or repeatedly asking the same questions.

OpsSage solves this problem by allowing users to ask questions directly in Slack using the `/ask` command. The platform performs semantic search over uploaded knowledge documents and returns concise answers along with source citations.

In addition to organizational knowledge retrieval, the platform architecture supports team-level and personal knowledge scopes, creating a centralized and intelligent knowledge layer for enterprises.

---

## Approach

We approached the problem by focusing on reducing the friction involved in finding organizational knowledge.

The system allows administrators to upload PDF and TXT documents into a centralized knowledge repository. During ingestion, documents are automatically processed, chunked, embedded, tagged, and stored for semantic retrieval.

User Flow:

1. Upload organizational documents.
2. Generate embeddings using a local sentence-transformer model.
3. Store embeddings and metadata in MongoDB.
4. User asks a question using Slack `/ask`.
5. Query is converted into an embedding.
6. Semantic similarity search retrieves the most relevant documents.
7. A concise answer with source citations is returned directly in Slack.

AI is used through local embeddings rather than expensive per-query LLM calls, making the system faster, more private, and cost-effective.

What makes our solution unique:

* Slack-native experience
* Local embedding-based semantic search
* Source-aware answers with similarity scores
* Multi-tenant architecture
* Organization, Team, and Personal knowledge scopes
* No external AI cost for knowledge retrieval

---

## Tech Stack and Tools Used

**Frontend:**

* React 18
* TypeScript
* Vite
* Tailwind CSS
* TanStack Query
* Axios

**Backend:**

* FastAPI
* Python 3.11
* Uvicorn
* Pydantic v2

**Database:**

* MongoDB
* Beanie ODM
* Motor

**AI Tools/API:**

* Sentence Transformers (all-MiniLM-L6-v2)
* NumPy
* Scikit-learn
* OpenAI GPT-4o-mini (Incident Intelligence Module)

**Cloud/Deployment:**

* Docker
* Nginx
* Ngrok (development integration)

**Other Tools:**

* Slack API
* Postman
* GitHub
* Cursor IDE
* PyMuPDF

---

## Key Features

1. Slack-native `/ask` command for organizational knowledge retrieval.
2. Semantic search using local embeddings and cosine similarity.
3. PDF and TXT document ingestion with automatic indexing.
4. Source citations with similarity scores.
5. Multi-tenant knowledge architecture.
6. Organization, Team, and Personal knowledge scopes.
7. Automatic document chunking and tagging.
8. FastAPI-powered REST APIs with OpenAPI documentation.

---

## What is Working?

* PDF document upload and ingestion.
* TXT document upload and ingestion.
* Automatic embedding generation.
* MongoDB storage and indexing.
* Semantic similarity search.
* Knowledge retrieval API.
* Slack `/ask` integration.
* Source citation generation.
* Multi-tenant document storage.
* Organization, Team, and Personal scope metadata.
* Swagger/OpenAPI documentation.

---

## What is Still in Progress?

* Fine-grained user-level access control for personal knowledge.
* Team membership enforcement.
* DOCX and PPTX document support.
* Slack message ingestion as knowledge.
* Advanced role-based permissions.
* Enterprise authentication and SSO integration.

---

## Screenshots or Demo

**Deployed Link:** N/A

**Demo Video Link:** [Add Video URL]

**Screenshots:**

* Knowledge Upload Interface
* MongoDB Knowledge Documents
* Slack `/ask` Query Demo
* Swagger API Documentation

---

## Challenges Faced

* Designing an efficient semantic search pipeline.
* Handling PDF extraction and document chunking.
* Optimizing embedding generation and retrieval latency.
* Building Slack integrations and slash commands.
* Designing a scalable multi-tenant architecture.
* Balancing retrieval quality and response speed.

---

## Learnings

Through this project we learned:

* Building semantic search systems using embeddings.
* FastAPI async architecture.
* MongoDB document modeling and indexing.
* Slack API integrations and slash commands.
* Multi-tenant system design.
* Retrieval-Augmented Knowledge architectures.
* Embedding-based information retrieval techniques.

---

## Future Improvements

* Enterprise SSO support.
* Role-based access control.
* DOCX, PPTX, and spreadsheet ingestion.
* MongoDB Atlas Vector Search integration.
* Slack message ingestion pipeline.
* Knowledge quality feedback loop.
* Advanced analytics dashboard.
* Hybrid retrieval with knowledge + incident context.

---

## Final Note

OpsSage transforms scattered organizational knowledge into a searchable, Slack-native intelligence platform. By combining semantic search, local embeddings, multi-tenant architecture, and direct Slack integration, the system enables employees to retrieve accurate information instantly while reducing operational overhead and knowledge silos.

Our vision is to become the central intelligence layer for organizational knowledge and operational workflows.

# KnowledgeFlow AI

An AI-powered Slack-native Knowledge Base Assistant that enables organizations to instantly access, search, summarize, and converse with company knowledge through natural language.

---

## Attendee Details

**Name:** Muhammad Aman
**GitHub Username:** https://github.com/MD-AMAN-123
**LinkedIn Profile:** https://www.linkedin.com/in/muhammadaman-/
**GitHub Project Repository:** https://github.com/MD-AMAN-123/buildathon-mastersunion-reacthyderabad

---

## Problem Statement Selected

```txt
AI-Powered Knowledge Base Layer for Slack
```

---

## Project Description

KnowledgeFlow AI is a Slack-native conversational knowledge management system that transforms scattered organizational information into an intelligent, searchable knowledge layer.

Organizations often store critical information across PDFs, Word documents, Slack conversations, URLs, onboarding guides, and internal documentation. Employees spend valuable time searching through multiple systems or repeatedly asking colleagues for information.

KnowledgeFlow AI solves this problem by allowing teams to upload documents directly into a centralized AI-powered knowledge base. Employees can then ask questions in natural language within Slack and receive instant, context-aware, cited responses grounded entirely in organizational knowledge.

The platform supports document summarization, multi-turn conversations, semantic search, automatic content tagging, and role-based access control across personal, team, and organization-wide knowledge scopes.

---

## Approach

We approached this problem by creating a Retrieval-Augmented Generation (RAG) architecture integrated directly into Slack.

### Understanding the Problem

The primary challenge was that organizational knowledge exists across multiple disconnected systems, making information retrieval slow and inefficient.

### User Flow

1. User uploads documents, URLs, or Slack threads.
2. The system extracts and processes content.
3. Content is chunked and converted into vector embeddings.
4. Embeddings are stored in a vector database.
5. Users ask questions through Slack commands or mentions.
6. Relevant content is retrieved using semantic search.
7. Gemini generates grounded answers with citations.
8. Users can continue asking follow-up questions within the same conversation.

### AI Implementation

* Retrieval-Augmented Generation (RAG)
* Semantic Search using Vector Embeddings
* AI-powered Summarization
* Auto-tagging and Categorization
* Multi-turn Conversational Context

### Unique Value

Unlike traditional document search systems, KnowledgeFlow AI provides a conversational interface directly within Slack, reducing context switching and enabling instant knowledge retrieval without leaving the workspace.

---

## Tech Stack and Tools Used

**Frontend:** React, TypeScript, Vite, TailwindCSS, ShadCN UI, React Query, Zustand

**Backend:** Node.js, Express.js, TypeScript

**Database:** PostgreSQL, Prisma ORM

**AI Tools/API:** Gemini 2.5 Pro, Gemini Embeddings, LangChain

**Cloud/Deployment:** Vercel, Render, Docker

**Other Tools:** Slack API, Slack Bolt SDK, Qdrant Vector Database, GitHub, Postman, Cursor AI

---

## Key Features

1. Slack-native conversational AI assistant
2. PDF, DOCX, URL, Text, and Slack thread ingestion
3. Context-aware natural language Q&A with citations
4. Multi-turn conversational memory
5. AI-powered document summarization
6. Personal, Team, and Organization knowledge scopes
7. Semantic search using vector embeddings
8. Automatic content tagging and categorization
9. Role-based access control (RBAC)
10. Source-grounded responses with confidence scoring

---

## What is Working?

* Slack bot integration
* Document upload pipeline
* PDF and DOCX parsing
* Embedding generation
* Vector storage and retrieval
* Semantic search
* Natural language question answering
* Document summarization
* Multi-turn conversational context
* Team and organization access controls

---

## What is Still in Progress?

* Advanced analytics dashboard
* Enhanced permission management
* Real-time synchronization with external sources
* Improved document versioning
* Enterprise audit logging
* Performance optimization for larger datasets

---

 ## Local Setup & Running the Project

### Prerequisites

Make sure you have the following installed:

* Node.js (v18 or higher)
* npm or pnpm
* PostgreSQL
* Qdrant Vector Database
* Slack Workspace (for bot testing)
* Gemini API Key

---

### Clone the Repository

```bash
git clone https://github.com/your-username/knowledgeflow-ai.git

cd knowledgeflow-ai
```

---

### Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
DATABASE_URL=postgresql://username:password@localhost:5432/knowledgeflow

GEMINI_API_KEY=your_gemini_api_key

QDRANT_URL=http://localhost:6333

JWT_SECRET=your_secret_key

SLACK_BOT_TOKEN=xoxb-your-bot-token

SLACK_SIGNING_SECRET=your_signing_secret

SLACK_APP_TOKEN=xapp-your-app-token
```

---

### Start PostgreSQL

Ensure PostgreSQL is running and create the database:

```sql
CREATE DATABASE knowledgeflow;
```

---

### Start Qdrant

Using Docker:

```bash
docker run -p 6333:6333 qdrant/qdrant
```

---

### Run Database Migrations

```bash
cd backend

npx prisma migrate dev

npx prisma generate
```

---

### Start Backend Server

```bash
npm run dev
```

Backend will run on:

```txt
http://localhost:5000
```

---

### Start Frontend

Open a new terminal:

```bash
cd frontend

npm run dev
```

Frontend will run on:

```txt
http://localhost:5173
```

---

### Start Slack Bot

```bash
cd backend

npm run slack
```

---

### Test the Application

1. Open `http://localhost:5173`
2. Upload a PDF, DOCX, URL, or text document.
3. Verify document ingestion.
4. Open Slack Workspace.
5. Use:

```bash
/ask What is our leave policy?
```

or

```bash
@KnowledgeFlow summarize onboarding guide
```

6. View AI-generated responses with citations.

---

### Project Status

Current Version: Local Development Prototype

Deployment Status: Not yet deployed

Frontend URL:

```txt
http://localhost:5173
```

Backend URL:

```txt
http://localhost:5000
```

Vector Database:

```txt
http://localhost:6333
```


**Screenshots:**

* Slack AI Assistant Interface
* Knowledge Base Dashboard
* Document Upload Flow
* AI Chat with Citations
* Organization Analytics Dashboard

---

## Challenges Faced

* Handling multiple document formats consistently
* Maintaining citation accuracy during retrieval
* Designing efficient semantic search pipelines
* Implementing secure multi-level access controls
* Managing conversational context across multiple interactions
* Optimizing response latency for real-time Slack interactions

---

## Learnings

During this project, we gained practical experience in:

* Building Retrieval-Augmented Generation systems
* Vector databases and semantic search
* Slack application development
* Prompt engineering for grounded responses
* Role-based access control implementation
* Scalable AI architecture design
* Enterprise-grade knowledge management systems

---

## Future Improvements

Given more time, we would like to:

* Integrate Google Drive, Notion, and Confluence
* Add voice-based knowledge retrieval
* Implement multilingual support
* Introduce AI-generated knowledge graphs
* Build proactive knowledge recommendations
* Enable real-time document synchronization
* Add advanced analytics and reporting features

---

## Final Note

KnowledgeFlow AI is designed to become the organization's collective intelligence layer. Instead of wasting time searching across multiple platforms or interrupting colleagues for information, employees can simply ask questions in Slack and receive instant, accurate, and cited answers.

Our vision is to transform organizational knowledge into an accessible, conversational resource that improves productivity, onboarding, collaboration, and decision-making across teams.


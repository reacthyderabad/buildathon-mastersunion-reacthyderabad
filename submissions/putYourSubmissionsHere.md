# GETHUB

## Project Name

GETHUB

## Attendee Details

Name: Venkatesh M
GitHub Username: Cyberbob108
LinkedIn Profile: https://linkedin.com/in/venkateshmanekar
GitHub Project Repository: PASTE_GITHUB_PROJECT_REPOSITORY_HERE

## Problem Statement Selected

Problem Statement 02: Intelligent Slack Knowledge Base

## Project Description

GETHUB is a Slack-native AI knowledge assistant that helps teams search and retrieve information from scattered organisational knowledge such as documents, URLs, plain text, and Slack conversations.

It is designed for employees, teams, and organisations where important information is spread across files, chats, policies, onboarding guides, and project notes.

Instead of asking colleagues repeatedly or manually searching folders, users can ask questions in natural language and receive grounded answers from the uploaded knowledge base.

## Approach

The problem is about scattered knowledge and slow information retrieval. I understood this as a retrieval problem where the system should not simply generate answers from general AI knowledge, but should answer only from the uploaded company content.

My approach is to build a Retrieval-Augmented Generation system. Uploaded content is extracted, divided into smaller chunks, converted into embeddings, and stored in a searchable knowledge base. When a user asks a question, the system retrieves the most relevant chunks and generates a cited answer from that context.

The idea is also inspired by a previous project concept around storing and retrieving customer bills and warranty documents. In that use case, users often lose product bills and later want to ask questions like “show my shoes bill” or “what is my AC warranty status?” GETHUB applies the same idea to organisational knowledge inside Slack.

## Tech Stack and Tools Used

Frontend: React, Vite, HTML, CSS
Backend: Node.js, Express.js
Database: Supabase / PostgreSQL / Vector Database
AI Tools/API: OpenAI API or Gemini API, Embeddings, RAG
Cloud/Deployment: Vercel / Render
Other Tools: Slack API, GitHub, VS Code, Postman

## Key Features

* Upload documents, URLs, and plain text into the knowledge base
* Ask natural language questions from Slack
* Generate grounded answers from uploaded content
* Provide source-based citations
* Summarise uploaded documents or content
* Support personal, team, and organisation-level knowledge scope
* Clearly respond when an answer is not available in the uploaded knowledge base

## What is Working?

The project is currently in progress. The submission repository has been created and the project structure is being prepared.

The planned working prototype will include:

* React upload interface
* Backend ingestion API
* AI-based question answering
* Slack bot command for asking questions
* Source-aware responses

## What is Still in Progress?

* Slack bot integration
* File ingestion and text extraction
* Vector search implementation
* Access control for personal, team, and organisation knowledge
* Document summarisation
* Final UI polish and deployment

## Screenshots or Demo

Deployed Link: To be added
Demo Video Link: To be added
Screenshots: To be added

## Challenges Faced

The main challenge is building a solution that does not hallucinate and answers only from the uploaded knowledge base. Another challenge is designing the Slack interaction and access-control layer in a simple but useful way within the buildathon timeline.

## Learnings

This project helped me understand how business knowledge can be converted into a searchable AI layer using retrieval, embeddings, and conversational interfaces. I also learned how important grounding, citations, and scope-based access are for enterprise AI products.

## Future Improvements

* Google Drive integration
* Notion and Confluence integration
* Slack thread ingestion
* Better role-based access control
* Analytics dashboard for frequently asked questions
* Consumer version for bills, warranty cards, insurance documents, and tax records

## Final Note

GETHUB is built with the idea that knowledge should not stay hidden inside documents, chats, or people’s memory. The goal is to make organisational knowledge instantly searchable, summarised, and available inside Slack.

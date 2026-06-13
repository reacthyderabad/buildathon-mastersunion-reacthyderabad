# ClockLens — HR Cost Intelligence Engine

---

## Attendee Details

**Name:** Omkar Raichur
**GitHub Username:** Romkar2006
**LinkedIn Profile:** https://www.linkedin.com/in/omkarraichur/
**GitHub Project Repository:** https://github.com/Romkar2006/ClockLens

---

## Problem Statement Selected

```txt
Problem Statement 1: HR Cost Intelligence Engine
```

---

## Project Description

ClockLens is a premium HR Cost Intelligence Engine designed to eliminate manual timesheets and expose invisible cost leakage, meeting bloat, task inflation, and work-ghosting proxies. It does this by cross-referencing digital footprints (calendar events, Slack presence, and Jira/Git activity) and mapping time to salary bands.

---

## Approach

1. **Relational Database telemetry ingestion**: We built a relational schema that aggregates data from Google Calendar, Slack, and Jira, assigning standard average cost bands to role designations to protect raw salary privacy.
2. **AI-Powered Project Attribution**: Unmapped calendar events with vague titles (e.g. "Quick Sync") are parsed by Gemini API using structured few-shot prompting, assigning a taxonomy tag and a confidence score.
3. **Behavioral Anomaly & Proxy Detection**: Created logic to identify:
   - *Meeting Bloat*: Daily syncs dragging on for 90 mins involving the entire squad.
   - *Shadow Allocation*: Employees attending meetings for projects outside their allocation.
   - *Tracking Proxies (Work Ghosting)*: Slack status is active, calendar has private focus blocks, but Git/Jira commits and ticket transitions are zero.
   - *Task Inflation*: Tasks estimated at 2 days taking 10 days of recorded work.
4. **Natural Language Query Bot (Text-to-SQL)**: HR managers can type unstructured questions (e.g. "Why is Project Apollo overbudget?"). The bot converts the text to a read-only SQL query, runs it, and feeds results to Gemini to generate strategic optimization recommendations.
5. **Interactive Executive Console (HR POV)**: Built a premium React dashboard with sidebar navigation, dynamic budget progress bars, searchable anomaly feeds, a What-If sandbox with comparative charts, a **Workplace Wellbeing Burnout Monitor**, a **Meeting Genome** categorizer, and an **Audit Review Queue** for manual calendar mapping.

---

## Tech Stack and Tools Used

**Frontend:** React, Vite, Tailwind CSS (v3), Recharts, Lucide React
**Backend:** Python, FastAPI, Uvicorn, SQLite, PostgreSQL
**Database:** SQLite, PostgreSQL (database-agnostic adapter)
**AI Tools/API:** Gemini API (`gemini-2.5-flash`), Google GenAI Python SDK
**Cloud/Deployment:** Local Dev Environment (Vite + FastAPI)

---

## Key Features

1. **Enterprise Sidebar Layout**: A professional, structured left-hand sidebar containing branding, active workspace details, profile avatar cards, and active database indicators.
2. **Project Budget Utilization Progress**: Visual progress bars for each project that change color dynamically based on budget threshold safety (Teal, Amber, Rose).
3. **Comparative Simulator Chart**: A live bar chart inside the What-If Sandbox that visually shrinks in real-time as policies are applied (e.g. cutting meeting lengths or capping attendees).
4. **Searchable Anomaly grid**: A real-time flag system showing high-risk leaks (ghosting proxies, meeting bloat, task inflation) with filters and text search.
5. **Talent Wellbeing & Burnout Risk Monitor**: Focuses on employee footprints (meeting vs focus hours) and highlights individuals under heavy stress patterns (High risk triggers).
6. **Workplace Meeting Genome**: Distributes meeting costs by categories (Standups, QA, Client syncs, Brainstorming) to analyze organizational sync efficiency.
7. **Audit Review Queue**: Lets HR manually review and re-charge unmapped meetings with low AI confidence scores.
8. **AI Copilot SQL-Agent Chatbot**: Natural language bot that parses queries into database SQL commands, executes them, and returns strategic optimization recommendations (e.g. Financial Impact, Root Cause, Mitigation).
9. **Database-Agnostic Adapter**: Support managed PostgreSQL/Supabase via `DATABASE_URL` env variable with automatic fallback to SQLite for local development.
10. **Proactive Slack Warning Simulator**: Calculates total cost of proposed meetings and posts alerts to a simulated Slack channel log if cost > $200.
11. **Smart Calendar Cleaner**: Integrates a floating notification card for Alice Vance to attribute her unmapped logs with one click.

---

## What is Working?

- Full database-agnostic connector (SQLite default, PostgreSQL via `DATABASE_URL` with automatic parameter translation).
- Smart Calendar Cleaner micro-survey prompting the logged-in user (Alice Vance) to classify unmapped items.
- Proactive Slack Cost-Warning Simulator form and logs feed in the What-If Sandbox.
- Full SQLite schema and mock data generator seeding a realistic 2-month case study (Project Apollo overrun, Dave's ghosting, Eva's task inflation, Charlie's shadow allocation).
- All FastAPI backend endpoints (`/api/projects`, `/api/employees`, `/api/anomalies`, `/api/review-queue`, `/api/meetings`, `/api/review-queue/user/emp-alice`).
- Chatbot live AI Text-to-SQL parsing with local fallback if the Gemini API Key is missing (making it extremely robust for offline demos).
- High-fidelity React Dashboard with interactive tabs, Recharts, the What-If slider, and the chat widget.
- Full compilation build passing successfully (`npm run build`).

---

## What is Still in Progress?

- Integrating live webhooks for Google Workspace and Microsoft Graph APIs to sync real-time calendar updates.

---

## Screenshots or Demo

* **Local Dev Link:** `http://localhost:5173`
* **Local Backend Link:** `http://localhost:8000`

---

## Challenges Faced

- **Pydantic/Rust compatibility on Python 3.14**: Had to resolve rust compilation issues on Python 3.14 for PyO3 by setting `PYO3_USE_ABI3_FORWARD_COMPATIBILITY=1` during dependency installation.
- **Handling Data Privacy**: Abstracted raw individual payroll figures into designational cost bands, preventing any leakage of specific salary details in chatbot responses or public charts.

---

## Learnings

- Utilizing structured output modes in Gemini to generate valid SQLite queries safely.
- Designing offline fallback modes for AI integrations to ensure bulletproof presentations.

---

## Future Improvements

- Add OAuth 2.0 flow for individual user calendars.

---

## Final Note

ClockLens moves HR from descriptive, manual timesheets to predictive, automated cost intelligence—showing managers not just what meetings cost, but what they stole in opportunity delays.

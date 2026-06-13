# HR Cost Intelligence Engine

---

## Attendee Details

**Name:** Syed Mohammad Ali
**GitHub Username:** mohammadali-2000
**LinkedIn Profile:** https://www.linkedin.com/in/syed-mohammad-ali/
**GitHub Project Repository:** https://github.com/mohammadali-2000/HRCostIntelligenceEngine

---

## Problem Statement Selected

```txt
HR Cost Intelligence Engine
```

---

## Project Description

The HR Cost Intelligence Engine is a zero-friction system that eliminates manual timesheets. Instead of asking employees to log their hours, the app securely connects directly to their Google Calendar. It passively reads their schedule and uses Generative AI to transform unstructured calendar events into hard financial data. It gives Finance and HR executives real-time visibility into the hidden payroll costs of meetings across various projects and departments.

---

## Approach

We approached the problem by targeting the root cause of inaccurate timesheets: employee friction. By directly integrating with Google Calendar via OAuth, we created a zero-input pipeline.
The flow works like this:
1. Ingest raw events from Google Calendar.
2. Calculate exact cost by correlating attendees with internal HR salary data.
3. Use a Generative AI Engine (Gemini 2.5 Flash) to read the context of the meeting and intelligently map it to specific company project budgets.
4. Implement a resilient local fallback using Ollama Gemma 12B to ensure the enterprise system never experiences API rate-limit downtime.
5. Provide an interactive React Dashboard for real-time visualization of these invisible costs.

---

## Tech Stack and Tools Used

**Frontend:** React, Vite, Tailwind CSS, Recharts, Lucide React
**Backend:** FastAPI (Python), Uvicorn
**Database:** Local JSON (for Hackathon scope)
**AI Tools/API:** Google Gemini 2.5 Flash API, Local Ollama (Gemma 12b)
**Cloud/Deployment:** Local environment
**Other Tools:** Google Calendar API, Google OAuth2

---

## Key Features

1. Zero-Friction Google Calendar OAuth Integration
2. Dual-LLM Architecture for high availability (Gemini Cloud + Ollama Local Fallback)
3. Real-time HR Cost Attribution Dashboard with Project and Department drill-downs

---

## What is Working?

- Google Calendar OAuth and Event Ingestion
- AI Attribution routing via Gemini API
- Local AI Fallback via Ollama
- Full interactive Executive Dashboard
- Manual Mock Meeting Entry for Demo purposes

---

## What is Still in Progress?

- Database integration (PostgreSQL) instead of JSON persistence
- Advanced RBAC (Role Based Access Control) UI beyond simple toggles

---

## Screenshots or Demo

**Deployed Link:** N/A (Local)
**Demo Video Link:** N/A
**Screenshots:** Provided during live demo

---

## Challenges Faced

We faced challenges dealing with Gemini API free-tier rate limits when processing bulk calendar events synchronously. We solved this by engineering a resilient architecture that detects 429 quota errors and seamlessly reroutes the prompt to a locally running Ollama model. We also handled tricky CORS issues between the Vite frontend and FastAPI backend during OAuth redirects.

---

## Learnings

We learned how to orchestrate hybrid AI architectures (Cloud + Local) to guarantee system uptime. We also deepened our understanding of the Google Calendar API and how to handle OAuth 2.0 flow securely.

---

## Future Improvements

We plan to integrate the Google Workspace Admin API to automatically fetch real employee organizational units and salary bands, rather than using a mock HR database.

---

## Final Note

This project turns invisible time into visible financial intelligence. Thank you to Masters' Union and React Hyderabad for an amazing Hackathon!

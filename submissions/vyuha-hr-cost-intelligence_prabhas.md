# Vyuha - HR Cost Intelligence Engine

---

## Attendee Details

**Name:** Prabhas
**GitHub Username:** prabii
**LinkedIn Profile:** https://linkedin.com/in/prabhas
**GitHub Project Repository:** https://github.com/prabii/Vyuha_Prabhas_Satya_Nihitha

---

## Problem Statement Selected

```txt
HR Cost Intelligence Engine
```

---

## Project Description

Vyuha is an AI-powered HR Cost Intelligence Engine that analyzes, tracks, and optimizes the costs associated with employee meetings and time allocation across projects.

* **What is the project about?** Vyuha transforms raw calendar data (Google Calendar sync, ICS file import, CSV upload) into actionable cost intelligence using Claude AI. It attributes meetings to projects, calculates true costs based on employee salary bands, and surfaces waste patterns.
* **Who is it for?** HR managers, finance teams, project leads, and executives who need visibility into how meeting time translates to organizational spending.
* **What problem does it solve?** Organizations lack visibility into the true cost of meetings. Vyuha quantifies meeting expenses per project, detects anomalies like budget overruns, and recommends optimizations such as shortening meetings or reducing attendees.
* **How does it help the user?** Provides a single dashboard with KPIs, AI-generated executive briefings, meeting ROI scores, cost simulations, and automated timesheet generation - turning calendar chaos into strategic insight.

---

## Approach

* **Problem Understanding:** Meetings are the largest hidden cost in organizations. We approached this by treating every calendar event as a billable cost unit tied to employees and projects.
* **User Flow:** Users sign in (local or Google OAuth), sync their Google Calendar or upload ICS/CSV files, configure employees with salary bands, and define projects with budgets. The AI engine then attributes meetings to projects, calculates costs, and generates insights.
* **Key Design Decisions:**
  - Claude AI for intelligent meeting-to-project attribution with keyword fallback
  - Real-time Google Calendar sync via OAuth for live data
  - ICS file import support for universal calendar compatibility
  - Cost simulation engine for scenario-based planning
  - Chat-based AI assistant ("Ask Vyuha") for natural language queries
* **What makes it different:** Unlike simple time trackers, Vyuha uses AI to automatically categorize and attribute meetings, score their ROI, detect anomalies, and generate strategic recommendations - all without manual tagging.

---

## Tech Stack and Tools Used

**Frontend:** React 18, Vite, TypeScript, Tailwind CSS, Recharts, Framer Motion, Lucide Icons
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas (Mongoose ODM)
**AI Tools/API:** Anthropic Claude API (claude-haiku-4-5), AI Attribution Engine
**Cloud/Deployment:** MongoDB Atlas (cloud database)
**Auth:** Firebase (Google OAuth) + JWT (local auth)
**Other Tools:** Claude Code, Google Calendar API, googleapis, csv-parser, Multer

---

## Key Features

1. Google Calendar real-time sync and ICS file import for universal calendar support
2. AI-powered meeting-to-project attribution using Claude API with keyword fallback
3. Cost dashboard with KPIs - total meeting cost, hours, cost per meeting
4. Meeting ROI scoring and AI-generated optimization recommendations
5. Anomaly detection - low confidence attribution, budget overruns, concentration risk
6. Cost simulator for scenario-based impact analysis (what-if scenarios)
7. AI-generated executive briefings and weekly reports
8. Automated timesheet generation from calendar data with CSV export
9. Organization heatmap showing meeting intensity by day and hour
10. "Ask Vyuha" - AI chatbot for natural language cost queries
11. Employee and project management with salary band configuration
12. Strategy scoring across 5 dimensions (efficiency, focus, allocation, optimization, collaboration)

---

## What is Working?

- Full authentication system (local JWT + Firebase Google OAuth)
- Google Calendar real-time sync via OAuth
- CSV meeting data upload and parsing
- ICS calendar file import
- AI-powered project attribution using Claude API
- Meeting cost calculation based on hourly salary rates
- Dashboard with real-time KPIs and charts (bar, pie, area)
- Meeting ROI analysis with AI recommendations
- Anomaly detection and alerts
- Timesheet generation from meeting data
- Cost simulator with Claude AI
- Executive briefings and weekly reports
- "Ask Vyuha" chatbot
- Employee, project, and salary band CRUD operations
- Organization heatmap and employee cross-project allocation
- Duplicate meeting detection
- Responsive UI with liquid glass aesthetic design

---

## What is Still in Progress?

- Outlook Calendar direct integration (model supports it, endpoint pending)
- Email/Slack notifications for budget alerts
- Advanced pagination for large datasets
- Historical trend analysis and forecasting
- Multi-organization support
- Production deployment and CI/CD pipeline

---

## Screenshots or Demo

**Deployed Link:** Not yet deployed
**Demo Video Link:** -
**Screenshots:** Available in project repository

---

## Challenges Faced

- Designing an accurate AI attribution system that maps meetings to projects without manual tagging - solved with Claude AI + keyword fallback strategy
- Handling Google Calendar OAuth token flow between Firebase frontend and googleapis backend
- Deduplicating meetings across multiple data sources (Google, ICS, CSV, manual)
- Calculating accurate meeting costs when employees have different salary bands and meetings span multiple projects
- Building a responsive dashboard with real-time data visualization that handles varying data volumes

---

## Learnings

- Integrating Claude AI for structured business logic (attribution, scoring, simulation) rather than just chat
- Building a full OAuth flow with Firebase on frontend and Google APIs on backend
- Designing MongoDB schemas that support complex aggregation queries for cost analytics
- Using Recharts and Framer Motion together for data-rich, animated dashboards
- The importance of fallback strategies (keyword matching) when AI confidence is low

---

## Future Improvements

- Deploy to production (Vercel + Render/Railway)
- Add Outlook Calendar and Microsoft Teams integration
- Implement Slack notifications for budget alerts and anomalies
- Build approval workflows for AI-generated timesheets
- Add ML-based forecasting for future meeting costs
- Custom report builder for stakeholders
- Role-based dashboards (HR view vs. Manager view vs. Executive view)
- API rate limiting and caching for production scale

---

## Final Note

Vyuha was built by a team of three - Prabhas, Satya, and Nihitha. The name "Vyuha" comes from the Sanskrit word for strategic formation, reflecting the project's goal of bringing strategic clarity to organizational time and cost management. We focused on making AI not just a chatbot, but an integral part of the business logic - from automatic meeting attribution to cost simulation to strategic scoring. The liquid glass UI design reflects our emphasis on transparency and clarity in HR cost data.

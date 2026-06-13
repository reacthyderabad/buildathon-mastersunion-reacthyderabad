# CostWise AI

---

## Attendee Details

**Name:** B.PRANAY
**GitHub Username:** [Pranay-6669](https://github.com/Pranay-6669)
**LinkedIn Profile:** [B.PRANAY LinkedIn](https://www.linkedin.com/in/pranay-bandanakanti1259)
**GitHub Project Repository:** [CostWise AI Repository](https://github.com/Pranay-6669/Costwise-AI)

---

## Problem Statement Selected

```txt
HR Cost Intelligence Engine
```

---

## Project Description

CostWise AI is an automated cost-tracking and schedule-intelligence system designed for organizations that want to eliminate manual timesheets and capture the hidden cost of meetings.

* **What is the project about?** It is a secure web application that syncs corporate calendar schedules, uses Gemini AI to auto-attribute meetings to active client/internal projects, and calculates exact payroll overhead in real time.
* **Who is it for?** Finance officers, HR managers, project leaders, and team members who need to analyze budget utilization and productivity.
* **What problem does it solve?** Timesheet fatigue and inaccurate project cost reporting. Instead of guessing how many hours were spent on client work vs. meetings, CostWise AI does it automatically.
* **How does it help the user?** It offers transparent spending analytics, alerts teams to meeting overloads and budget leaks, and enforces strong role-based data privacy (shielding sensitive employee salary figures from other colleagues).

---

## Approach

1. **Understanding the Problem**: Meetings are one of the largest unmonitored sinks of company capital. Traditional timesheets rely on human memory and are often inaccurate. By combining calendar events directly with payroll rules, we get an objective, real-time look at project expenditures.
2. **User Flow & Personas**: Designed a 3-role simulation system to demonstrate enterprise access control:
   * *Admin (Sarah Jenkins)*: Full dashboard, cost rule configurations, and company-wide department spending metrics.
   * *Manager (John Doe)*: Can monitor projects and view budget anomalies, but cannot edit payroll configurations.
   * *Employee (Alex Rivera)*: Can only view their personal sync metrics and attributed hours. All cost calculations and salaries are hidden.
3. **AI Project Attribution**: Configured Google Gemini to parse meeting context (titles, descriptions, and participant rosters) and map them to defined project categories, assigning a confidence score. A keyword-based heuristic fallback ensures continuous operation if the AI API is throttled or offline.
4. **Direct Cost Computation**: Developed an algorithmic calculation engine that matches meeting attendees' email domains to active role salary configurations, multiplying the session duration by combined hourly rates to establish real-time costs.

---

## Tech Stack and Tools Used

**Frontend:** React (v18), Vite, React Router DOM, Tailwind CSS, Recharts (visualizations), Lucide React (icons)
**Backend:** Node.js, Express, Mongoose, JSON Web Tokens (JWT), Cookie-Parser, Cors, Dotenv
**Database:** MongoDB
**AI Tools/API:** Google Gemini AI API (`@google/generative-ai` SDK)
**Other Tools:** Git, GitHub, Cursor / VS Code

---

## Key Features

1. **Google Calendar Simulation Sync**: High-fidelity meeting ingestion featuring a custom date range filter and a "Sync Demo Calendar" seeder to test calendar attribution immediately.
2. **Gemini AI Project Attribution**: Contextual analysis of event details to map sessions to active projects (e.g. *Project Aurora*, *Enterprise UX Redesign*) with an AI confidence rating.
3. **Automated Expense Calculations**: Multiplies attendee duration against active payroll rules lookup dynamically.
4. **Security & Data Privacy Barriers**: Fully restricted views preventing standard employee logins from viewing corporate budgets, salaries, or payroll charts.
5. **Interactive Dashboard Visualizations**: Premium Recharts visualizations detailing daily spend trends, project weight splits, department footprints, and job-title payroll structures.
6. **Alerts & Anomaly Panels**: Flags budget leaks (over-budget projects), employee meeting overload (fatigue), and unattributed calendar sessions.
7. **CSV Export Utilities**: Allows downloading tabulated meeting spreadsheets in one click.

---

## What is Working?

* **Full User Authentication & Personas**: Instant role-switching via the top dropdown to test Admin, Manager, and Employee security states.
* **AI Attribution Engine**: Live project matching using Gemini AI.
* **Cost Engine**: Dynamic calculation of meeting costs based on participants and durations.
* **Dashboard Analytics**: Fully functional charts (Area, Pie, Bar charts) rendering real-time MongoDB aggregations.
* **Rate Rule Manager**: Administrative UI to adjust hourly rates by role.
* **CSV Export**: Fully functioning report downloads.
* **Anomalies Page**: Real-time detection of budget leaks, weekend meetings, and meeting overloads.

---

## What is Still in Progress?

* **Production Google OAuth/API Webhooks**: Integration of real-time webhooks for live calendar syncing (currently simulated via mock feeds and manual sync triggers).
* **Direct HRMS Integration**: Syncing live employee directory structures and salary hourly settings directly from platforms like BambooHR or Workday.

---

## Screenshots or Demo

**Deployed Link:** _Coming soon_
**Demo Video Link:** _Coming soon_

**Screenshots:**

> Screenshots will be added once the application is deployed. To preview locally, clone the repository and follow the setup instructions in the repo.

---

## Challenges Faced

1. **Context Mapping Constraints**: Ensuring that the AI model accurately maps meetings to projects even when descriptions are brief or contain abbreviations. We addressed this by reinforcing context rules and building a keyword-fallback matching system.
2. **Data Leakage & Security**: Developing a secure method to compute and store corporate budgets and employee costs without exposing sensitive hourly salary rates in client-side payloads. Resolved by enforcing strict middleware checks and returning masked values (`🔒 Hidden`) for standard employee roles.

---

## Learnings

* Utilizing structured LLM outputs to turn unstructured meeting descriptions into precise project-matching parameters.
* Implementing robust security layers in React + Express, ensuring that API routing strictly validates cookies and session tokens before delivering payload details.
* Structuring clean chart data layouts in Recharts to display nested aggregation properties from MongoDB.

---

## Future Improvements

* **AI Attendance Optimization**: An intelligent advisor recommending specific days/times to hold meetings to minimize attendee cost overheads.
* **Tenant Isolation**: Expanding the database schema to support multi-tenant organizations, letting multiple companies register and isolate their budgets.

---

## Final Note

This project serves as a modern proof-of-concept for automating timesheets, demonstrating how AI and interactive analytics dashboards can unlock significant cost savings and surface productivity patterns for growing enterprises.

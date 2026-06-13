# HR Cost Intelligence Engine Anomaly Detection and Summarizer

---

## Attendee Details

**Name:** Bandi Hemanth
**GitHub Username:** bannu773
**LinkedIn Profile:** https://www.linkedin.com/in/hemanth-bandi-835280211/
**GitHub Project Repository:** https://github.com/bannu773/buildathon-mastersunion-reacthyderabad

---

## Problem Statement Selected

HR Cost Intelligence Engine

---

## Project Description

The HR Cost Intelligence Engine helps organizations understand the real financial cost of their meetings. It connects Google Calendar data, employee salaries, and AI-powered project attribution to show exactly how much money is being spent — and where.

How it works: It pulls meetings from Google Calendar, then uses a LLaMA 3 AI model to classify each meeting to a project. It then calculates the cost of every meeting by multiplying each attendee's hourly rate by the meeting duration — skipping anyone who declined the invite, since they didn't actually spend the time. All of this rolls up into a per-project HR cost dashboard with charts, budget utilization, and breakdowns by team and role.

Anomaly Detection is a key feature — the system automatically flags suspicious patterns:

- A project's meeting costs going over (or nearing 80% of) its budget
- An employee spending more than 60% of their work hours in meetings (over-allocation)
- Senior/expensive employees wasting more than 40% of their time on low-priority projects
- Meetings the AI couldn't confidently assign to a project (confidence score below 60%), which get flagged for human review

Privacy is also built in — cost data for groups smaller than 2 people is suppressed so individual salaries can't be reverse-engineered, and detailed per-person breakdowns are restricted to admin users only.

---

## Approach

- Understood the problem of hidden HR meeting costs in organizations
- Designed a user flow around Google OAuth login → Calendar sync → AI classification → Cost dashboard
- Built anomaly detection rules based on budget thresholds, over-allocation percentages, and AI confidence scores
- Used LLaMA 3 (via Replicate) to automatically classify meetings to projects
- Added privacy controls to prevent salary reverse-engineering
- Made detailed breakdowns admin-only to balance transparency with privacy

---

## Tech Stack and Tools Used

**Frontend:** React, Vite, React Router DOM, Recharts, Lucide React, Axios
**Backend:** Node.js, Express
**Database:** MongoDB, Mongoose
**AI Tools/API:** LLaMA 3 via Replicate
**Auth/Integrations:** Google OAuth, Google Calendar API, JWT
**Other Tools:** dotenv

---

## Key Features

1. Google Calendar integration — pulls real meeting data automatically
2. AI-powered meeting-to-project classification using LLaMA 3 (with confidence scoring)
3. Per-project HR cost dashboard with budget utilization charts and team/role breakdowns
4. Anomaly detection — flags budget overruns, over-allocated employees, and low-confidence AI classifications
5. Privacy controls — suppresses data for small groups and restricts detailed views to admins

---

## What is Working?

- Google OAuth login and Calendar data sync
- Meeting cost calculation (attendee hourly rate × duration, excluding declines)
- AI classification of meetings to projects via LLaMA 3
- Dashboard with charts (Recharts) showing per-project costs and budget utilization
- Anomaly detection for budget, over-allocation, and confidence threshold violations
- Role-based access (admin vs. regular user)
- Privacy suppression for small groups

---

## What is Still in Progress?

- Further UI polish and responsiveness improvements
- Export/report generation feature
- Email/Slack alerts for detected anomalies

---

## Screenshots or Demo

**Deployed Link:**
**Demo Video Link:**
**Screenshots:**

---

## Challenges Faced

- Integrating Google Calendar API with OAuth and handling token refresh
- Tuning the LLaMA 3 prompts to get reliable project classification with confidence scores
- Designing privacy rules that protect individual salary data without losing dashboard usefulness
- Calculating meeting costs accurately by filtering out declined attendees

---

## Learnings

- How to work with Google Calendar API and OAuth 2.0 flows
- Prompt engineering for structured AI output (classification + confidence score)
- Building role-based access control with JWT in a Node/Express/MongoDB stack
- Designing anomaly detection rules with real business logic thresholds

---

## Future Improvements

- Slack/Teams integration for direct anomaly alerts
- Historical trend analysis across quarters
- Automated weekly cost summary reports sent to managers
- Support for multiple calendar providers (Outlook, etc.)

---

## Final Note

This project tackles a real but often invisible problem — organizations spend enormous amounts on meetings without realizing it. By combining calendar data, salary information, and AI, the HR Cost Intelligence Engine makes that cost visible and actionable, while keeping employee privacy intact.

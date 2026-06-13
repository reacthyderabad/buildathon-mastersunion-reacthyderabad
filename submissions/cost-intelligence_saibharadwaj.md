# Cost Intelligence — AI Workforce Intelligence Engine

---

## Attendee Details

**Name:** Sai Bharadwaj Chintalpati
**Email:** founder@stagsterlabs.com
**GitHub Username:** stagster
**LinkedIn Profile:** https://linkedin.com/in/saibharadwaj
**Phone:** 8125465959
**GitHub Project Repository:** https://github.com/stagster/cost-intelligence

---

## Problem Statement Selected

**HR Cost Intelligence Engine**

---

## Project Description

Cost Intelligence is an AI-powered meeting cost intelligence engine that gives companies real-time visibility into where their people time and money actually go.

**What it does:**
- Automatically attributes every meeting to a project using AI (Cerebras GPT-OSS-120B)
- Calculates the real dollar cost of each meeting based on attendee hourly rates
- Surfaces anomalies: high-cost meetings, burnout risks, missing attributions
- Provides a human review workflow for low-confidence AI decisions

**Who it's for:**
Engineering managers, finance teams, and VPs who need to understand meeting ROI and workforce allocation.

**The problem it solves:**
Most companies have zero visibility into meeting costs. With engineers spending 60-80% of their week in meetings, that's potentially millions in untracked spend per year. Cost Intelligence makes this invisible cost visible.

---

## Approach

1. **Understood the problem:** Met with finance and engineering teams to map the pain — manual meeting cost tracking is error-prone, slow, and never up-to-date.

2. **Designed the user flow:** Dashboard → Meetings → Projects → AI Review → Anomalies, with every stat card clickable to its detailed view.

3. **Built AI attribution first:** Cerebras GPT-OSS-120B classifies meetings by title and description, returning project + confidence score. Low-confidence results (<70%) get flagged for human review.

4. **Rules-based anomaly detection:** High cost (>$500), no attribution, low confidence, and burnout risk (>80% utilization) are automatically flagged.

5. **Mock data for demo:** 5 employees, 18 meetings, 5 projects — realistic enough to show the full value without needing real calendar integrations.

---

## Tech Stack and Tools Used

**Frontend:** React 19, Vite, Tailwind CSS v4, Recharts, Radix UI, wouter
**Backend:** Express 5, TypeScript, CORS, REST API
**Database:** In-memory mock data (no database required for MVP)
**AI Tools/API:** Cerebras GPT-OSS-120B for project attribution with confidence scoring
**Cloud/Deployment:** Local development (ready for Vercel/Railway deployment)
**Other Tools:** Cursor, GitHub Copilot, shadcn/ui component patterns

---

## Key Features

1. **AI Project Attribution** — AI classifies meetings into projects (Phoenix, Beta, Acme Corp, Internal Ops) with 70-99% confidence scores
2. **Cost Per Meeting** — Real dollar calculation: Σ(attendee hourly rate × meeting duration)
3. **Interactive Dashboard** — Bar chart (cost by project), pie chart (by department), line chart (trend), utilization widget, anomaly list
4. **Anomaly Detection** — Automatic flagging of high-cost meetings, burnout risk, missing attributions, low AI confidence
5. **Human Review Workflow** — Low-confidence attributions flagged for manual override with one-click project assignment
6. **Clickable Stats** — Every dashboard stat card navigates to its detailed view
7. **Presentation Walkthrough** — 12-slide enterprise deck built into the app for non-technical audience demos

---

## What is Working?

- Full React dashboard with 6 pages (Dashboard, Meetings, Projects, AI Review, Anomalies, Walkthrough)
- 6 Recharts visualizations (bar, pie, line, progress bars)
- Express backend with 15 REST API endpoints
- AI attribution endpoint with Cerebras GPT-OSS-120B integration
- Rules-based anomaly detection engine
- Human review workflow with one-click override
- Interactive walkthrough/presentation deck
- Light enterprise theme
- Loading states with shimmer animations
- Collapsible sidebar for presentation mode

---

## What is Still in Progress?

- Google Calendar OAuth integration (mock UI exists, needs real API)
- Meeting effectiveness scoring (recurring vs one-off, attendee ratio)
- Multi-tenant authentication
- Database persistence (currently in-memory)
- Deployment to production

---

## Screenshots or Demo

**Deployed Link:** http://localhost:5173 (local development)
**Demo Video Link:** (recording in progress)
**Screenshots:** Available in the `/screenshots` folder

---

## Challenges Faced

1. **AI confidence calibration:** Getting the AI to return consistent confidence scores required careful prompt engineering and temperature tuning (0.3).
2. **Cost calculation accuracy:** Ensuring hourly rates × duration calculations handled edge cases (partial hours, multiple timezones).
3. **Theme migration:** Switching from dark to enterprise light theme required updating 15+ components with hardcoded colors.
4. **Demo data realism:** Creating mock data that tells a compelling story without being obviously fake.

---

## Learnings

1. **AI attribution is surprisingly accurate** — Cerebras GPT-OSS-120B correctly classified 83% of meetings with >80% confidence using just title + description.
2. **Meeting costs add up fast** — 5 employees × 18 meetings = $9,391/week. Extrapolated to 50 people = $4.9M/year.
3. **Anomaly detection doesn't need ML** — Simple rules (>threshold, <confidence, no attribution) catch most issues.
4. **Clickable dashboards increase engagement** — Every stat card linking to a detail view made the demo 10x more interactive.

---

## Future Improvements

1. Real Google Calendar + Slack integration for live meeting data
2. Meeting effectiveness scoring (outcome-based, not just cost)
3. Budget forecasting with team growth projections
4. Multi-tenant SaaS with auth, org management, billing
5. Export reports as PDF for finance teams
6. Slack/Teams alerts when meeting budget is exceeded

---

## Final Note

This project was built in 8 hours for the React Hyderabad x Masters' Union Buildathon. We chose Problem Statement #1 (HR Cost Intelligence Engine) because meeting cost visibility is a real problem we've seen in startups and enterprises alike.

The key insight: **every meeting has a cost, but most companies treat meeting time as free.** Cost Intelligence makes that cost visible, trackable, and actionable.

We built a complete demo-ready product with AI-powered attribution, interactive charts, anomaly detection, and a built-in presentation deck — all in a single day.

Thank you to React Hyderabad and Masters' Union for organizing this buildathon.

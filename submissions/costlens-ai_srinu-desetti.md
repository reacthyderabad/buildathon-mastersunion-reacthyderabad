# CostLens AI — HR Cost Intelligence Engine

Know what your meetings are *actually* costing you — in real time. CostLens AI turns raw Google Calendar activity into a live, per-project HR cost dashboard, with AI-powered project attribution and anomaly detection.

---

## Attendee Details

**Name:** Srinu Desetti
**GitHub Username:** webdevelopersrinu
**LinkedIn Profile:** https://www.linkedin.com/in/srinu-desetti/
**GitHub Project Repository:** https://github.com/webdevelopersrinu/CostLens_AI

**Portfolio:** https://srinudesetti.in/
**Blog:** https://blog.srinudesetti.in/
**Dev.to:** https://dev.to/srinu_desetti
**Medium:** https://medium.com/@webdeveloper.srinu9
**X (Twitter):** https://x.com/SrinuWeb69207
**Contact:** contact@srinudesetti.in

---

## Problem Statement Selected

```txt
HR Cost Intelligence Engine
```

---

## Project Description

**What it is:** CostLens AI is an AI-powered HR Cost Intelligence Engine that connects directly to Google Calendar, reads an organisation's meeting activity, intelligently attributes each meeting to a project, and computes the real HR cost of that time — broken down per project, per team, and per day.

**Who it's for:** Finance teams, engineering managers, and leadership who today have *zero* visibility into how much their people's time is costing per project.

**The problem it solves:** Payroll is tracked as one big number. Nobody knows the *cost-per-project*. Manual timesheets are unreliable and under-reported. Meanwhile, calendars are packed with rich signals — titles, attendees, durations — that are never analysed. CostLens closes that gap: **calendar data → AI project attribution → real HR cost → dashboard**, fully automated, no timesheets.

**How it helps:** A manager opens the dashboard and instantly sees "Project Helix cost ₹82,250 this month across 11 meetings", spots that Engineering is spending disproportionately, and gets flagged about a suspiciously expensive 24-hour calendar block — all without a single person filling a timesheet.

---

## Approach

**1. Understand the flow first.** I locked the core pipeline before touching UI:
`Google Calendar → fetch events → AI attribution → cost engine → dashboard + anomalies`.

**2. Nail the data layer before anything else.** I built and *manually verified* the entire Google Calendar integration first — real OAuth2 login, and full CRUD (connect → insert → fetch by date range → update → delete) — testing every operation with curl against my real calendar before writing a line of business logic. This avoided building a beautiful app on a broken foundation.

**3. Realistic demo data via scripts.** I wrote standalone test scripts (`insert / fetch / update / delete`) that generate a believable **July 2026 schedule** — 4 named projects (Atlas, Orion, Nova, Helix), weekdays only (weekends auto-skipped), randomised times/durations/attendees — and push it into a live calendar. This makes demos repeatable and convincing.

**4. AI where it matters.** The problem statement weights **AI project attribution at 30%** — so AI is used precisely there. Google **Gemini** reads each meeting's title + description + attendees and returns a project + a **confidence score**. When context is ambiguous it surfaces low confidence and flags `needsReview` for human review — graceful degradation, exactly as the brief requires.

**5. Resilience by design.** If the AI key is missing/rate-limited, the system **automatically falls back to keyword attribution** instead of crashing — the dashboard always works. The engine in use is shown transparently in the UI.

**6. Privacy-first.** Costs are computed from **role-based hourly rates**, never individual salaries — so shared views never leak personal pay.

---

## Tech Stack and Tools Used

**Frontend:** React, Vite, Recharts, custom CSS design system (JasperSoft-inspired purple/teal analytics theme)
**Backend:** Node.js, Express (REST API)
**Database:** None for the MVP — lightweight JSON file storage (MongoDB planned as an enhancement; not required by the brief)
**AI Tools/API:** Google Gemini (`gemini-2.0-flash`) for project attribution, with a keyword-matching fallback engine
**Calendar Integration:** Google Calendar API via `googleapis`, OAuth 2.0 (offline access + refresh tokens)
**Cloud/Deployment:** Google Cloud Console (OAuth app, Calendar API)
**Other Tools:** curl / Postman for API testing, Git & GitHub

---

## Key Features

1. **Real Google Calendar integration** — OAuth2 login + full CRUD (insert, fetch by date range, update, delete) verified against a live calendar.
2. **AI-powered project attribution** — Gemini infers the project per meeting with a confidence score; keyword fallback when AI is unavailable.
3. **Automatic cost engine** — `meeting cost = duration × Σ(attendee role hourly rate)`, rolled up by project, team, and day.
4. **Industry-grade dashboard** — big-number KPIs, cost-per-project bar chart with ▲▼ % deltas between projects, stacked daily-spend area chart, cost-by-team donut, and a click-through meeting table with per-attendee cost drill-down.
5. **Anomaly detection** — flags unattributed meetings, abnormally high-cost meetings (>2.5× average), and oversized meetings.
6. **Graceful degradation + transparency** — confidence scores, `needsReview` flags, and a live "AI vs fallback" status indicator.
7. **Privacy by design** — role-based rates only; no individual salary exposure.
8. **Repeatable demo scripts** — generate/clean a full month of realistic calendar data on demand.

---

## What is Working?

- ✅ Google OAuth2 connect flow (real login, refresh tokens stored).
- ✅ Full calendar CRUD REST API (`/api/events` GET/POST/PATCH/DELETE, `/api/events/bulk`) — **verified live with curl** (create/read/update/delete reflected in the real Google Calendar).
- ✅ `GET /api/analyze?from=&to=` — the full pipeline: fetch → attribute → cost → summarise → anomalies, returning one clean JSON.
- ✅ Cost engine + per-project / per-team / daily roll-ups (tested on real July data: ₹2,49,500 across 29 meetings).
- ✅ Keyword attribution + automatic fallback (proven working when the AI key was rate-limited).
- ✅ React dashboard rendering live data — KPIs, charts, % deltas, anomaly panel, drill-down drawer, date-range filter.
- ✅ Test scripts that seed and clean a realistic July 2026 schedule.

---

## What is Still in Progress?

- 🔑 Activating live Gemini attribution end-to-end with a valid API key (architecture is complete; the key used during the build was rate-limited, so the keyword fallback carried the demo). Dropping in a valid key flips it to AI with **zero code change**.
- 🗄️ Optional MongoDB persistence for historical trend analysis across months.
- 🔁 Recurring-meeting pattern signals to boost attribution accuracy.
- 👥 Multi-user org rollout via Google Workspace Domain-Wide Delegation (admin-approve once → cover the whole company) — currently demonstrated with per-user OAuth.
- 🚀 Public deployment (Render/Vercel) — runs locally today.

---

## Screenshots or Demo

**GitHub Project Repository:** https://github.com/webdevelopersrinu/CostLens_AI
**Run locally:** `node api.js` (backend) + `npm run dev` (frontend) → http://localhost:5173

**Dashboard — KPIs, cost-per-project with ▲▼ deltas, team donut:**
![Dashboard](https://raw.githubusercontent.com/webdevelopersrinu/CostLens_AI/main/screenshots/dashboard.png)

**Charts — cost per project, cost by team, daily spend stacked by project:**
![Analysis](https://raw.githubusercontent.com/webdevelopersrinu/CostLens_AI/main/screenshots/analyze.png)

**Demo Video:** _Drag-and-drop your `.mp4` here in the GitHub PR editor — GitHub will host it and render an inline player._

---

## Challenges Faced

- **OAuth scopes:** initial connect failed reading the user's identity — fixed by adding the `userinfo.email` + `openid` scopes alongside calendar access.
- **API key format:** the AI key available during the build was not a valid Gemini API key (returned 429), which is exactly why I designed the keyword fallback — so a key issue never breaks the demo.
- **Discipline over rushing:** I deliberately verified the calendar layer end-to-end with curl *before* building UI, to be certain the foundation was real and not mocked.
- **Charts to match an enterprise look:** implemented a custom Recharts layer to draw the ▲▼ % delta badges between bars, matching a professional BI-tool aesthetic.

---

## Learnings

- How to design an AI feature so it **degrades gracefully** instead of failing — confidence scores + fallback engine.
- End-to-end **Google Calendar OAuth2** integration (consent screen, test users, scopes, refresh tokens, CRUD).
- Building a clean, deterministic data pipeline (`fetch → attribute → cost → summarise → anomalies`) behind a single API.
- Translating a **business problem (cost visibility)** into concrete, weighted, demoable features.
- Privacy-aware design — showing cost without exposing salaries.

---

## Future Improvements

- Live Gemini attribution with accuracy benchmarking against the ≥85% target.
- MongoDB for month-over-month trends and budget-vs-actual tracking.
- Outlook Calendar support in addition to Google.
- Org-wide deployment via Domain-Wide Delegation.
- Role-based access control for the dashboard (Finance vs Manager views).
- Export to CSV/PDF and scheduled email digests for leadership.

---

## Final Note

CostLens AI was built foundation-first: a **proven, real calendar integration** verified operation-by-operation before any UI, then an **AI attribution layer designed to never break a demo**, and finally an **enterprise-grade dashboard**. It directly targets the evaluation weights — AI attribution (30%), dashboard quality (25%), integration depth (20%), and privacy (15%) — while staying honest about what's live versus planned. The architecture is ready to scale from one calendar to an entire organisation.

Built with intent. Solved with clarity. Shipped with confidence.
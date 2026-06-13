# HR Cost Intelligence Engine

---

## Attendee Details

**Name:**  Vijay laxmi
**GitHub Username:** vijaylaxmi1213
**LinkedIn Profile:** https://www.linkedin.com/in/vijay-laxmi-meesala-6b5184308/
**GitHub Project Repository:** https://github.com/vijaylaxmi1213/Cost-Intelligence

---

## Problem Statement Selected

```txt
HR Cost Intelligence Engine
```

---

## Project Description

The **HR Cost Intelligence Engine** is a full-stack web application that helps organizations understand and control the hidden cost of employee time spent in meetings.

* **What is it about?** It automatically imports calendar events (ICS files or Nextcloud URLs), maps each attendee to their employee salary profile, calculates the real monetary cost of every meeting, and attributes those costs to projects using AI.
* **Who is it for?** HR managers, finance teams, and engineering/product leaders who want data-driven visibility into where their human-capital budget is being spent.
* **What problem does it solve?** Most organizations have no idea how much meetings actually cost. A 1-hour meeting with 5 senior developers can cost thousands of rupees — the engine surfaces this invisible spend.
* **How does it help?** It provides a real-time dashboard of cost-by-project, alerts for budget overruns, AI-generated narrative insights, anomaly detection, and an executive AI chat assistant that answers natural-language questions about HR expenditure.

---

## Approach

1. **Understanding the problem:** Meetings are the largest hidden cost center in knowledge-work organizations. Calendar data already contains all the signal needed — attendees, duration, timing — but no tool connects it to salary data automatically.

2. **User flow designed:**
   - Admin registers/logs in → uploads ICS calendar file → system enriches meetings with employee salary data → Gemini AI attributes each meeting to a project → dashboard shows real-time cost breakdowns → alerts fire when anomalies are detected → executive chat assistant answers ad-hoc questions.

3. **Features built:**
   - ICS & Nextcloud calendar import
   - AI-powered project attribution via Gemini (with confidence scores)
   - Employee salary band management (monthly salary → auto-calculated hourly rate)
   - Meeting cost calculation engine (Sum of attendee hourly rates × duration)
   - Real-time project cost dashboard with charts (Recharts)
   - Anomaly detection alerts (budget overrun, overutilization, cost spikes, low-confidence attribution)
   - AI-generated narrative insights panel
   - Executive AI Chat Assistant (floating chat widget powered by Gemini 1.5 Flash with full live context)
   - Demo mode: works fully without any database (in-memory, zero-config)

4. **AI usage:** Gemini 1.5 Flash is used for three distinct tasks — (a) project attribution from meeting title/description, (b) narrative insight generation, and (c) conversational Q&A with injected live company data as context.

5. **What makes it different:** The system works instantly in demo mode with no setup, making it ideal for live demonstrations. The AI Chat Assistant injects the entire current company cost context into every Gemini prompt, enabling accurate, grounded answers without hallucination.

---

## Tech Stack and Tools Used

**Frontend:** React 18, Vite, Tailwind CSS, Recharts, React Router, React Hook Form, Lucide React icons

**Backend:** Node.js, Express.js (ESM modules)

**Database:** MongoDB with Mongoose (production); in-memory JS objects for demo/local mode (zero config)

**AI Tools/API:** Google Gemini 1.5 Flash (`@google/generative-ai` SDK) — project attribution, insights generation, executive chat assistant

**Cloud/Deployment:** _(Render / Railway — to be deployed)_

**Other Tools:** Antigravity AI IDE, Postman, GitHub, node-ical (ICS parsing), multer (file upload), jsonwebtoken (auth), bcryptjs, dotenv

---

## Key Features

1. **ICS Calendar Import** — Upload `.ics` files or connect a Nextcloud calendar URL to automatically import all meetings.
2. **AI Project Attribution** — Gemini AI reads meeting titles/descriptions and assigns each meeting to a project with a confidence score; low-confidence meetings are flagged for manual review.
3. **Real-Time Cost Dashboard** — Visual charts for cost-by-project, monthly spend trend, team cost by role, and department-wise breakdown.
4. **Anomaly Detection & Alerts** — Automatic alerts for budget overruns, employee overutilization, low-attribution confidence, and abnormal weekly cost spikes.
5. **Executive AI Chat Assistant** — A floating conversational widget where users can ask questions like "Which project costs the most?" or "Show active alerts" and get instant, data-grounded answers powered by Gemini.
6. **Employee Salary Band Management** — Add/edit employees with monthly salary; the system auto-calculates hourly rates (Monthly Salary ÷ 22 working days ÷ 8 hours).
7. **Zero-Config Demo Mode** — Runs fully in-memory with seeded data, no database or environment variables required.

---

## What is Working?

- Full user authentication (register / login / JWT-protected routes)
- ICS file upload and Nextcloud URL import with live meeting parsing
- Employee CRUD with monthly salary input and auto hourly-rate calculation
- Meeting cost calculation engine for all imported meetings
- AI project attribution with Gemini (confidence scoring)
- Project management with budget tracking
- Real-time dashboard with all KPI cards and Recharts visualizations
- Anomaly detection and alert generation (budget overrun, overutilization, cost spike, low confidence)
- AI Insights panel with narrative summaries
- Executive AI Chat Widget (floating, persistent chat history, suggested prompts, typing indicator)
- Full demo mode (works with zero database/API key configuration)
- Role-based settings (hourly rate tables per role)

---

## What is Still in Progress?

- Cloud deployment (Render/Railway) — the app is fully functional locally
- RBAC (Role-Based Access Control) — currently all logged-in users have admin access
- Real Gemini-powered project attribution in production mode (demo mode uses keyword matching for speed)
- Email/Slack notifications for anomaly alerts
- Multi-organization / multi-tenant support

---

## Screenshots or Demo


**Demo Video Link:** https://drive.google.com/file/d/1Hu5XnBIz52tS5BBfYzjLf8GP-59z3jdg/view?usp=sharing


---

## Challenges Faced

1. **Demo mode vs. production mode routing** — The app needed to work seamlessly with and without a MongoDB connection. Building a full parallel in-memory route handler (`demo.routes.js`) that mirrored all production endpoints was the biggest architectural challenge.
2. **AI Chat context injection** — Fitting the entire company cost context (projects, meetings, alerts, department costs) within Gemini's token limits while keeping responses accurate and grounded required careful data summarization.
3. **Salary band formula** — Transitioning from a manual `hourlyRate` input to an auto-calculated rate derived from `monthlySalary` required updating both the form and all downstream cost calculation logic.
4. **Port conflicts during development** — Running frontend (Vite on 5173) and backend (Express on 5000) simultaneously required careful process management.

---

## Learnings

- How to architect a Node/Express backend that works in both "live database" and "zero-config demo" modes from a single codebase.
- How to inject live, structured business data as context into Gemini prompts for grounded, accurate conversational AI responses.
- How to use Gemini's `startChat` with `history` to maintain multi-turn conversations server-side.
- How Recharts works for building responsive, real-time business dashboards in React.
- The importance of a seamless demo mode for hackathon judging — zero-setup means judges can evaluate the full feature set without any configuration.

---

## Future Improvements

1. **Google Calendar / Outlook OAuth integration** — Replace manual ICS upload with live calendar sync.
2. **Slack / Email alerts** — Push anomaly alerts directly to the team's communication channels.
3. **Historical trend analysis** — Month-over-month cost comparison with ML-based forecasting.
4. **Meeting ROI scoring** — Let managers tag meetings as "high value" or "wasteful" and train a personalized attribution model.
5. **RBAC** — Separate views for executives (aggregate costs), managers (team costs), and employees (personal meeting stats).
6. **Mobile app** — React Native app for on-the-go cost monitoring.

---

## Final Note

This project demonstrates how AI can turn passive calendar data — something every organization already has — into actionable financial intelligence. The Executive AI Chat Assistant in particular shows how Gemini can function as a grounded, context-aware business analyst when given the right data at inference time.

The codebase is production-ready in architecture (proper middleware, error handling, auth, seed data) while also being instantly accessible for evaluation via the zero-config demo mode.

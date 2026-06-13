# CostLens

CostLens is an intelligent project cost tracking and audit tool that converts calendar meetings into actual monetary costs using AI.

---

## Attendee Details

**Name:** Raja Shekar Patha
**GitHub Username:** rajashekarpatha07
**LinkedIn Profile:** https://www.linkedin.com/in/raja-shekar-patha-4519a6340/
**GitHub Project Repository:** https://github.com/rajashekarpatha07/CodeLens

---

## Problem Statement Selected

```txt
HR Cost Intelligence Engine
```

---

## Project Description

CostLens is designed for organizations, HR leaders, and finance managers to shed light on one of the largest unmonitored sinks of company resources: internal meetings. 

* **What is the project about?** CostLens automatically imports calendar meetings, calculates their financial cost based on attendee hourly rates, and maps them to their respective projects using LLMs.
* **Who is it for?** HR managers, team leads, department heads, and financial auditors.
* **What problem does it solve?** It solves the problem of "meeting fatigue" and hidden overhead. Traditional timesheets rely on manual inputs, which employees dislike filling out and are often highly inaccurate. CostLens automates this process by parsing calendar events.
* **How does it help the user?** It provides immediate visual dashboards showing project cost allocations, flagging employees who are overloaded with meetings, tracking budget utilization, and alerting administrators to cost spikes or low-confidence AI attributions.

---

## Approach

Our approach was to combine passive data collection (Google Calendar API sync) with semantic reasoning (Groq AI) to create a zero-friction cost intelligence dashboard.

1. **Database Modeling:** We designed standard collections for `Employee` (storing roles, departments, hourly rates, and salaries), `Project` (storing budgets, active status, and matching keywords), `Meeting` (representing calendar events), `Attribution` (connecting a meeting to a project with confidence and logic details), and `CostEntry` (storing the exact cost per employee for a meeting).
2. **AI Attribution Engine:** We leveraged the **Groq SDK** with `llama-3.1-8b-instant` to automatically categorize meetings. Instead of simple word-matching, the prompt guides the AI to analyze titles, descriptions, team composition, department alignment, and historical patterns, outputting structured JSON with confidence scores and descriptive reasons.
3. **Dynamic Anomaly Detection:** We built an audit engine (`anomalyDetector.js`) that checks for five types of anomalies:
   * *Meeting Overload:* flagging employees spending >60% of work hours in meetings.
   * *Cost Overrun:* flagging projects with a >50% cost spike compared to the previous period.
   * *Low-Confidence Attributions:* identifying meetings categorized with low confidence or flagged for manual review.
   * *Off-hours Meetings:* identifying events scheduled outside of standard business hours (8 AM - 6 PM).
   * *Missing Context:* identifying meetings that have empty descriptions and low attribution confidence.
4. **Interactive UI flow:** We created page views for overall dashboard statistics, employee load monitoring, interactive project budgets, calendar meeting sync lists (with manual overrides), and detailed cost reports.

---

## Tech Stack and Tools Used

**Frontend:** React, Vite, React Router DOM, Vanilla CSS, Recharts, Lucide React
**Backend:** Node.js, Express, Mongoose, Google Calendar APIs
**Database:** MongoDB
**AI Tools/API:** Groq SDK (LLaMA 3.1 8B Model)
**Other Tools:** dotenv, JWT, CORS, node-cron

---

## Key Features

1. **AI-Powered Auto-Attribution:** Automatically maps raw calendar items to correct projects with confidence scores and transparent reasoning, with options to manually review and override when needed.
2. **Granular Cost Calculation:** Multiplies meeting durations by attendee-specific hourly rates, providing absolute breakdown figures (such as developer, designer, or manager costs per meeting).
3. **Interactive Recharts Dashboard:** Visualizes total meeting costs, average cost per meeting, cost distribution by project, employee time allocations, and cost trends over time.
4. **Intelligent Anomaly Detection & Alerts:** Proactively identifies and alerts HR on meeting overloads, cost spikes, off-hours meetings, and missing contexts.
5. **Robust Calendar Sync & Demo Mode:** Integrates with the Google Calendar API for live events, while supporting a togglable **Demo Mode** with seeded dummy data for offline sandboxed testing.

---

## What is Working?

- **Database Schemas:** Employee, Project, Meeting, Attribution, and CostEntry models are fully defined.
- **AI Attribution Engine:** Calls to Groq API successfully categorize meetings and save confidence/reasoning metadata.
- **Rule-based Anomaly Engine:** Scans records and accurately identifies meeting overload, cost overrun, off-hours meetings, and low-confidence matches.
- **Seeding Pipeline:** `npm run seed` populates a full month of meetings, employees, attributions, and cost records.
- **REST APIs:** Full API routing for dashboard stats, employee details, project lists, and meetings reviews.
- **Frontend Dashboard and Recharts:** Interactive charts for cost metrics and time allocations.
- **Demo Mode Configuration:** Ability to run the app offline out-of-the-box using the seeded database.

---

## What is Still in Progress?

- **Slack Notifications integration:** Posting automated weekly cost summaries or anomaly warnings directly to a designated team Slack channel.
- **Multi-Host Syncing:** The system is currently focused on syncing a single primary host's calendar; extending this to cross-reference multiple attendees' calendars.
- **Exporting Options:** PDF and CSV exports for external accounting/billing purposes.

---

## Screenshots or Demo

**Deployed Link:** *Not Deployed (Runs locally on localhost)*
**Demo Video Link:** *(Will be uploaded to YouTube/Loom)*
**Screenshots:** *(Will be added to repository readme/wiki)*

---

## Challenges Faced

* **API Throttling & Rate Limits:** Calling Groq APIs in rapid succession for bulk syncs triggered rate limits. We resolved this by batch-processing meetings sequentially with a minor sleep delay (100ms) between calls.
* **Ambiguous Meeting Information:** Meetings labeled simply "Sync" or "Align" with no description. We addressed this by enriching the AI prompt with context such as attendee department names and recent histories to improve categorization accuracy.
* **Date Calculations:** Calculating working days for overload detection required carefully omitting weekends to ensure we didn't dilute the percentages.

---

## Learnings

* Structured system prompting for reliable JSON schema generation from LLMs (using Groq SDK's JSON output format).
* Transforming time-allocation metrics into finance figures using database populations and map-reductions.
* Crafting visual, responsive UI tables and cards using React and CSS variables.

---

## Future Improvements

* **Browser Extension:** A Google Calendar extension to estimate meeting cost directly during schedule creation (promoting cost consciousness).
* **Multi-Currency Support:** Converting project costs automatically for global teams working in USD, EUR, and INR.
* **AI Recommendation Advisor:** Generates optimization insights (e.g. "Arjun and Raj had three recurring meetings this week with overlap, consider combining them to save ₹5,000").

---

## Final Note

CostLens shows how easily organizations can turn inactive metadata into highly actionable cost and team health metrics. By identifying meeting overload and cost overruns, it acts as a smart financial advisor for HR and leadership.

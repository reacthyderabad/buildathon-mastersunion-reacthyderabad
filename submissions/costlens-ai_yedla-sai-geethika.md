# CostLens AI

---

## Attendee Details

**Name:** YEDLA SAI GEETHIKA  
**GitHub Username:** GeethikaYedla37  
**LinkedIn Profile:** https://www.linkedin.com/in/sai-geethika-yedla/  
**GitHub Project Repository:** https://github.com/GeethikaYedla37/CostLens-AI

---

## Problem Statement Selected

HR Cost Intelligence Engine

---

## Project Description

CostLens AI is a real-time people-spend intelligence platform that converts calendar activity into financial insights.

The system connects to Google Calendar, imports meeting data, estimates meeting costs using privacy-safe role cost bands, and uses AI to attribute meetings to projects.

It helps organizations understand where employee time is being spent, which projects are consuming the most resources, and which meetings are driving unnecessary costs.

The platform provides project burn tracking, meeting cost analysis, budget risk alerts, attribution confidence, and cost-saving recommendations.

---

## Approach

We approached the problem by treating calendar data as a source of operational intelligence.

Instead of relying on manual timesheets, CostLens imports meetings directly from Google Calendar.

Our workflow:

1. Import meetings from Google Calendar.
2. Analyze meeting details such as title, attendees, organizer, duration, and recurrence.
3. Use AI to assign meetings to projects with confidence scores.
4. Calculate meeting costs using role-based hourly cost bands.
5. Generate project-level cost insights and budget utilization metrics.
6. Identify expensive recurring meetings and potential savings opportunities.
7. Provide leadership dashboards and optimization recommendations.

The key innovation is transforming calendar activity into actionable financial intelligence. CostLens is not another timesheet tool; it turns the calendar, which already reflects how people spend time, into a live financial signal.

---

## Tech Stack and Tools Used

**Frontend:** React, TypeScript, Tailwind CSS, Vite, Recharts  
**Backend:** Node.js, TypeScript local API server  
**Database:** Local JSON persistence for recent analysis history  
**AI Tools/API:** Gemini API, AI-based project attribution  
**Cloud/Deployment:** Runs locally  
**Other Tools:** GitHub, Google Calendar API, Google OAuth, VS Code, Codex

---

## Key Features

1. Real Google Calendar Integration
2. AI-Based Project Attribution
3. Meeting Cost Calculation Engine
4. Project Burn Dashboard
5. Meeting Cost Heatmap
6. Budget Risk Forecasting
7. Attribution Review Queue
8. What-If Savings Simulator
9. Privacy-Safe Role Cost Bands
10. Executive Insights Dashboard

---

## What is Working?

* Google Calendar authentication
* Calendar event import
* Meeting data processing
* Gemini-backed AI analysis through the backend
* Cost estimation engine
* Dashboard visualizations
* Project attribution workflow with confidence scores
* Meeting heatmap generation
* Attribution review queue
* Cost band configuration
* Demo fallback data for reliable presentation

---

## What is Still in Progress?

* Advanced forecasting models
* Improved AI attribution accuracy for vague meeting titles
* Slack integration
* Outlook Calendar integration
* Automated recommendations engine
* RAG-based executive assistant
* Production database integration
* Public cloud deployment

---

## Screenshots or Demo

**Deployed Link:** Runs locally  
**Demo Video Link:** https://drive.google.com/file/d/1x2DLsSJ0kvQjJMFfNdwfmG2zefBcbGVG/view?usp=sharing  
**Screenshots:**

* Calendar Import Dashboard
* Meeting Heatmap
* Project Burn Dashboard
* What-If Simulator

---

## Challenges Faced

* Integrating Google Calendar OAuth securely
* Mapping meetings to projects accurately
* Handling meetings with insufficient context
* Designing privacy-safe cost estimation
* Keeping the Gemini API key secure on the backend
* Building meaningful business insights from raw calendar data
* Separating real calendar results from demo fallback data during presentation

---

## Learnings

Through this project, we learned:

* Google Calendar API integration
* OAuth authentication flows
* AI-powered classification techniques
* Cost attribution models
* Business intelligence dashboard design
* Project budgeting concepts
* Data visualization and analytics
* How to convert raw operational data into decision-ready insights

---

## Future Improvements

* Microsoft Outlook integration
* Slack integration
* RAG-powered management assistant
* Predictive budget forecasting
* Team productivity insights
* Automated meeting optimization suggestions
* Enterprise-grade access control
* PostgreSQL or Supabase persistence
* Admin upload for employee roles, salary bands, projects, and budgets

---

## Final Note

CostLens AI is not just a calendar analytics platform.

It is a financial intelligence layer built on top of organizational time.

By transforming meetings into measurable business costs, CostLens helps finance teams, HR departments, and leadership make better decisions, reduce waste, and improve resource utilization.

Our vision is to make invisible people-time visible and actionable. Every meeting is not only a time block; it is a spend event. CostLens turns that hidden spend into project intelligence, budget risk awareness, and practical action.

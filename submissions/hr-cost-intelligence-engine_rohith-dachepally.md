# Project Name
HR Cost Intelligence Engine

---

## Attendee Details
**Name:** Rohith Dachepally  
**GitHub Username:** bachi-2006  
**LinkedIn Profile:** linkedin.com/in/rohith-dachepally  
**GitHub Project Repository:** https://github.com/bachi-2006/reacthyd-project.git

---

## Problem Statement Selected
HR Cost Intelligence Engine

---

## Project Description
HR Cost Intelligence Engine is a workforce cost attribution platform that connects calendar activity to project spend in real time. It is built for finance, HR, and leadership teams that need a clearer view of how meeting time maps to project budgets and labor expenditure.

The project solves the gap between calendar activity and project-level cost visibility by automatically attributing meetings to projects, calculating cost from employee rates, and surfacing budget risk and review queues in a dashboard.

---

## Approach
I started by mapping the core user flow around three actions: sign in, sync calendar data, and review project spend. The backend ingests meetings from Google Calendar or the demo ICS feed, attributes them to projects using AI-assisted heuristics, and persists the results in a JSON-backed datastore so the prototype behaves like a real product.

The UI is designed around fast decision-making. The dashboard shows total spend, attribution accuracy, ambiguous meetings, budget overruns, and department cost breakdowns. The meetings screen supports confidence review, manual correction, and ignored states, while the admin screen lets authorized users update billing rates, manage budgets, and create projects.

AI is used to infer project attribution, generate confidence scores, explain why a meeting was matched, and produce project-level insights. The approach is practical because it combines deterministic business logic with AI-assisted matching and keeps human review in the loop when context is ambiguous.

---

## Tech Stack and Tools Used
**Frontend:** React, TypeScript, Vite, React Router, TanStack Query, Tailwind CSS, Lucide React  
**Backend:** FastAPI, Python 3.10  
**Database:** JSON-backed local datastore (`mock_data.json`)  
**AI Tools/API:** NVIDIA Nemotron / OpenAI-compatible API, heuristic attribution logic  
**Cloud/Deployment:** Local development setup, Vite dev server  
**Other Tools:** VS Code, GitHub Copilot

---

## Key Features
1. Google Calendar OAuth-based sign-in and calendar sync flow.
2. AI-powered project attribution with confidence scoring and reasoning.
3. Real-time cost mapping from employee hourly rates to meetings and projects.
4. Dashboard with spend, budget risk, attribution accuracy, and department breakdowns.
5. Human review workflow for correcting, approving, or ignoring ambiguous meetings.

---

## What is Working?
The core PS1 prototype is working end to end. Calendar data can be ingested, meetings are mapped to projects, costs are calculated from employee billing rates, and the dashboard updates project-level spend, budget overrun signals, and attribution accuracy.

The admin area also works for updating employee rates, creating projects, and editing project budgets. Meeting review actions are persisted, and the backend stores the current state in `mock_data.json` so changes survive between runs.

---

## What is Still in Progress?
The prototype still needs production hardening for a real submission. The OAuth flow depends on Google Cloud Console tester configuration, and the app is still using a local JSON-backed store instead of a proper database service.

The attribution engine can be improved further with more evaluation data, and the review workflow can be expanded with richer audit trails and operational controls.

---

## Screenshots or Demo
**Deployed Link:** N/A  
**Demo Video Link:** N/A  
**Screenshots:** N/A

---

## Challenges Faced
The biggest challenge was connecting calendar intelligence to cost logic in a way that remains understandable to users. The app also needed to balance automation with human review so ambiguous meetings do not get treated as final answers.

Another challenge was keeping the prototype lightweight while still making it feel like a credible product, especially around OAuth setup, persistence, and the admin workflows.

---

## Learnings
I learned how to structure a calendar-to-cost workflow around confidence scoring, review states, and budget impact instead of just simple classification. I also learned how important it is to keep the UI aligned with the backend state so corrections, budgets, and anomaly flags all stay synchronized.

---

## Future Improvements
If I had more time, I would add a stronger persistence layer, deeper analytics for attribution quality, and support for additional calendar providers such as Outlook.

I would also expand the review experience with audit logs, team-level permissions, better export/reporting options, and more explicit evaluation metrics for attribution accuracy.

---

## Final Note
This project is built specifically for PS1, HR Cost Intelligence Engine. It focuses on practical workforce cost visibility, human-in-the-loop attribution, and a dashboard that helps leadership understand where meeting time is going and what it costs.

# ChronaIQ

---

## Attendee Details

**Name:** Nalli Tareni

**GitHub Username:** https://github.com/Tareni2350

**LinkedIn Profile:** https://linkedin.com/in/n-tareni

**GitHub Project Repository:** [https://github.com/Tareni2350/HR-Cost-Intelligence-Engine](https://github.com/Tareni2350/HR-Cost-Intelligence-Engine)

---

## Problem Statement Selected

HR Cost Intelligence Engine

---

## Project Description

Cost-Intel is an AI-powered workforce cost intelligence platform that transforms calendar activity into actionable financial insights.

The platform automatically analyzes meetings from Google Calendar and Outlook, attributes them to projects using AI, calculates real-time HR expenditure, and provides leadership teams with project-level cost visibility.

Designed for HR, Finance, and Project Management teams, Cost-Intel eliminates the need for manual timesheets and enables organizations to understand how employee time and payroll costs are distributed across projects.

---

## Approach

We approached the problem by treating employee calendars as a source of operational intelligence.

The system ingests meeting metadata such as titles, descriptions, attendees, duration, and recurrence patterns. An AI-powered attribution engine then classifies meetings into projects and generates confidence scores for each classification.

Employee hourly rates are mapped to meeting participants, allowing automatic computation of meeting costs and project expenditure.

The platform visualizes these insights through an executive dashboard that includes project cost analytics, utilization metrics, anomaly detection, and predictive budget forecasting.

To enhance decision-making, we also introduced a real-time meeting cost ticker and an AI-powered Executive Copilot capable of answering natural language questions about organizational spending.

---

## Tech Stack and Tools Used

**Frontend:** React, TypeScript, Tailwind CSS, Recharts

**Backend:** FastAPI (Python)

**Database:** PostgreSQL / Supabase

**AI Tools/API:** Gemini API

**Cloud/Deployment:** Vercel, Render

**Other Tools:** Bolt.new, GitHub, Postman, Docker

---

## Key Features

1. Intelligent Calendar Synchronization with Google Calendar and Outlook.
2. AI-powered Project Attribution with confidence scoring.
3. Automated Meeting Cost Calculation using employee hourly rates.
4. Executive Dashboard with project-level expenditure analytics.
5. Real-Time Meeting Cost Ticker.
6. Smart Anomaly Detection for cost overruns and inefficiencies.
7. Predictive Cost Forecasting and Budget Monitoring.
8. Executive AI Copilot for natural language business insights.

---

## What is Working?

* Meeting data ingestion from sample calendar datasets.
* AI-based project classification using Gemini.
* Automatic cost calculation engine.
* Project expenditure dashboard.
* Real-time cost monitoring interface.
* Basic anomaly detection system.

---

## What is Still in Progress?

* Outlook Calendar synchronization.
* Advanced forecasting models.
* Production deployment optimizations.

---

## Screenshots or Demo

**Deployed Link:** https://hr-cost-intelligence-engine-nine.vercel.app/

**Demo Video Link:** 

https://github.com/user-attachments/assets/6bf63d8c-b854-42b2-8ddb-ce4d473e9f81



**Screenshots:** <img width="1440" height="900" alt="Screenshot 2026-06-13 at 3 16 02 PM" src="https://github.com/user-attachments/assets/06ba01cd-96f2-4efa-b137-c2d1a8db97ff" />
<img width="1440" height="900" alt="Screenshot 2026-06-13 at 3 16 09 PM" src="https://github.com/user-attachments/assets/370dcd28-c647-4b78-8ef8-664f8fcc004e" />
<img width="1440" height="900" alt="Screenshot 2026-06-13 at 3 16 25 PM" src="https://github.com/user-attachments/assets/7944e8b3-769a-410f-ac8c-d0d1d4aa5d00" />
<img width="1440" height="900" alt="Screenshot 2026-06-13 at 3 16 18 PM" src="https://github.com/user-attachments/assets/7b840bf7-d323-49a3-81e6-ad7c9e0b7ca8" />
<img width="1440" height="900" alt="Screenshot 2026-06-13 at 3 16 29 PM" src="https://github.com/user-attachments/assets/30a8590f-0187-497c-8a85-e15a0a2f884e" />
<img width="1440" height="900" alt="Screenshot 2026-06-13 at 3 16 35 PM" src="https://github.com/user-attachments/assets/a23ec041-ae3e-4d62-8bb5-44e441e012e4" />
<img width="1440" height="900" alt="Screenshot 2026-06-13 at 3 16 38 PM" src="https://github.com/user-attachments/assets/e2c2d06c-8a85-4d8d-a4f9-33b469e4e42f" />

---

## Challenges Faced

One of the major challenges was accurately attributing meetings to projects when meeting titles or descriptions lacked sufficient context. Balancing attribution accuracy while maintaining explainability was a key design consideration.

Another challenge involved creating a scalable cost attribution model that could handle employees contributing to multiple projects simultaneously.

---

## Learnings

This project provided valuable experience in combining AI-driven classification, workforce analytics, and business intelligence into a single platform.

We gained hands-on understanding of:

* Calendar API integrations
* AI classification workflows
* Cost attribution models
* Dashboard design for executive stakeholders
* Anomaly detection strategies

---

## Future Improvements

* Live integration with enterprise payroll systems.
* Advanced forecasting using machine learning models.
* Slack and Microsoft Teams integration.
* Automated meeting optimization recommendations.
* Resource allocation and workforce planning insights.
* Multi-organization support.

---

## Final Note

Cost-Intel aims to bridge the gap between workforce activity and financial visibility. By transforming calendar data into actionable intelligence, organizations can make smarter decisions about resource allocation, project planning, and operational efficiency.

Our vision is to make every meeting measurable, every project accountable, and every workforce decision data-driven.

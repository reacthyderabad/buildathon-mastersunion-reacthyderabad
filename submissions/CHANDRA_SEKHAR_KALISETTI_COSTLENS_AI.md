# CostLens AI

## Attendee Details

**Name:** Chandra Sekhar Kalisetti
**GitHub Username:** [GITHUB_USERNAME](https://github.com/chandu-s-1729)
**LinkedIn Profile:** [LINKEDIN_PROFILE](https://www.linkedin.com/in/chandrasekhark1729/)
**GitHub Project Repository:** [GITHUB_REPOSITORY_LINK](https://github.com/chandu-s-1729/CostLens-AI)

---

# Problem Statement Selected

**HR Cost Intelligence Engine**

---

# Project Description

## CostLens AI — Know Where Your People Cost Is Going

CostLens AI is an AI-powered HR Cost Intelligence Engine that transforms meeting activity into actionable financial insights.

Organizations conduct hundreds of meetings every month, but very few have visibility into how employee time translates into project-level HR expenditure. As a result, project costs remain hidden, manual timesheets become unreliable, and leadership lacks real-time visibility into resource allocation.

CostLens AI solves this problem by analyzing meeting data, employee cost information, and project definitions to automatically attribute meetings to projects, calculate HR expenditure, detect cost leakage, identify anomalies, and generate executive-level recommendations.

The platform helps leadership teams understand:

* Which projects consume the most employee time
* How HR costs are distributed across projects
* Where cost leakage occurs
* Which meetings create the highest organizational expense
* Potential budget and resource allocation risks

---

# Approach

## Understanding the Problem

The core challenge was connecting meeting activity with project-level cost visibility. Most organizations track payroll globally but cannot accurately determine how much HR expenditure is allocated to specific projects.

The solution focuses on transforming calendar activity into financial intelligence using AI-powered project attribution.

## User Flow

1. User provides Gemini API Key.
2. User uploads:

   * Employee Salary CSV
   * Meetings CSV
   * Projects CSV
3. AI analyzes meeting context.
4. Meetings are attributed to projects.
5. Cost calculation engine computes HR expenditure.
6. Dashboard generates financial insights.
7. AI CFO Insights provide executive recommendations.

## AI Usage

Gemini AI is used to:

* Analyze meeting titles and descriptions
* Infer project ownership
* Generate confidence scores
* Detect ambiguous meetings
* Identify anomalies
* Generate executive recommendations
* Produce CFO-style business insights

## What Makes This Approach Different

Instead of relying on manual timesheets, CostLens AI uses AI-powered attribution to automatically estimate project allocation based on actual meeting activity.

The solution combines:

* Cost Intelligence
* AI Attribution
* Anomaly Detection
* Executive Insights

into a single platform.

---

# Tech Stack and Tools Used

### Frontend

* React.js
* Vite
* Tailwind CSS
* shadcn/ui
* Recharts

### Backend

* Node.js
* Express.js

### Database

* Local JSON Data Layer (Hackathon MVP)
* Designed for future PostgreSQL integration

### AI Tools/API

* Google Gemini 2.5 Flash

### Cloud/Deployment

* Vercel (Frontend)
* Render (Backend)

### Other Tools

* Kiro AI IDE
* GitHub
* Postman
* PapaParse
* Figma
* VS Code

---

# Key Features

* AI-Powered Project Attribution
* Employee Cost Mapping
* Automated HR Cost Calculation
* Project Cost Distribution Dashboard
* Cost Leakage Detection
* Anomaly Detection Engine
* AI CFO Insights
* Executive KPI Dashboard
* Privacy View Toggle
* CSV-Based Data Ingestion
* Meeting Intelligence Analytics
* Demo Mode Support

---

# What is Working?

### Data Management

* Employee CSV Upload
* Meetings CSV Upload
* Projects CSV Upload
* CSV Validation and Parsing

### AI Features

* Gemini Integration
* Project Attribution
* Confidence Score Generation
* Meeting Classification
* AI Insights Generation

### Cost Intelligence

* Meeting Cost Calculation
* Project Cost Calculation
* Cost Leakage Identification
* HR Expenditure Analytics

### Dashboard

* Executive KPI Cards
* Cost Distribution Charts
* Cost Leakage Visualization
* Anomaly Detection Table
* AI CFO Insights Panel

### Security

* Local Gemini API Key Handling
* Privacy View Toggle

---

# What is Still in Progress?

* Google Calendar Integration
* Outlook Calendar Integration
* Real-Time Meeting Sync
* Role-Based Access Control (RBAC)
* Multi-Organization Support
* Historical Trend Analysis
* Predictive Budget Forecasting
* Payroll System Integrations
* Advanced Reporting

---

# Screenshots or Demo

**Deployed Link:** TO_BE_ADDED

**Demo Video Link:** TO_BE_ADDED

**Screenshots:**

* Dashboard Overview
* Project Cost Distribution
* Cost Leakage Analytics
* AI CFO Insights
* Anomaly Detection View

---

# Challenges Faced

* Designing an accurate AI attribution strategy for ambiguous meetings.
* Building reliable cost intelligence without direct payroll integrations.
* Creating a dashboard that balances financial insights and usability.
* Designing meaningful anomaly detection rules within hackathon constraints.
* Integrating AI-generated insights into a business-focused workflow.

---

# Learnings

* Prompt engineering for structured AI outputs.
* Designing AI systems around business workflows rather than chat interfaces.
* Building financial analytics dashboards using React and Recharts.
* Translating unstructured meeting data into measurable business intelligence.
* Leveraging AI to automate traditionally manual operational processes.

---

# Future Improvements

## Phase 2

* Google Calendar Integration
* Outlook Integration
* Slack Notifications
* Automated Weekly Cost Reports

## Phase 3

* PostgreSQL Integration
* Employee Directory Sync
* Payroll System Integrations
* Team-Level Cost Analytics

## Phase 4

* Predictive Budget Forecasting
* Resource Allocation Optimization
* Cost Overrun Prediction
* AI Workforce Planning

## Phase 5

* Enterprise SaaS Platform
* Multi-Tenant Architecture
* Role-Based Access Control
* Audit Logs
* Executive AI Copilot
* Advanced Financial Intelligence Engine

---

# Final Note

CostLens AI was built to demonstrate how AI can transform organizational data into actionable business intelligence.

The current MVP focuses on solving a real-world visibility problem: understanding where employee time and HR expenditure are actually going.

By combining AI-powered project attribution, cost analytics, anomaly detection, and executive recommendations, CostLens AI provides a foundation for a future enterprise platform that helps organizations make smarter resource and budgeting decisions.

Our vision is simple:

**Know Where Your People Cost Is Going.**

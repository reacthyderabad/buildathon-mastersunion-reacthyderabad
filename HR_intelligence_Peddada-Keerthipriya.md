# Project Name

HR Cost Intelligence Engine

---

## Attendee Details

**Name:** Peddada Keerthipriya
**GitHub Username:** Keerthipriya27
**LinkedIn Profile:** https://www.linkedin.com/in/keerthipriya-peddada-9b9a7034b/
**GitHub Project Repository:** https://github.com/Keerthipriya27/HR-intelligent-system

---

## Problem Statement Selected

HR Cost Intelligence Engine

CostIQ — HR Cost Intelligence Platform
CostIQ is a modern, full-stack HR analytics dashboard that gives organizations real-time visibility into the cost of people operations — specifically, the hidden cost of meetings, collaboration time, and cross-team overhead.
What is the project about?
CostIQ transforms raw calendar and HR data into actionable cost intelligence. It tracks meeting hours across departments, attributes costs to specific projects, detects spending anomalies, and provides AI-powered forecasting — all through a beautiful, interactive dashboard built with React, TypeScript, and Supabase.
##  Who is it for?
- HR Leaders and People Operations teams who need to quantify the financial impact of meeting culture and collaboration patterns
- Finance teams who want to attribute labor costs to specific projects and budgets
- Engineering and department managers who need visibility into team time allocation and cost drivers
- Executives who want high-level insights, cost forecasting, and AI-assisted decision support
##  What problem does it solve?
Most organizations have no idea what their meetings actually cost. An hour-long all-hands with 200 attendees isn't just an hour — it's 200 hours of billed labor. CostIQ solves this by:
- Revealing hidden costs — Automatically calculating the real dollar cost of every meeting based on attendee roles and hourly rates
- Eliminating attribution guesswork — Linking meeting costs to specific projects and departments so you know exactly where money is going
- Detecting anomalies early — Flagging unusual spending patterns, over-budget meetings, and cost outliers before they become problems
- Providing forward-looking intelligence — Forecasting future spend trends and giving AI-driven recommendations for cost optimization
##  How does it help the user?
- Make data-driven decisions — Stop guessing about meeting costs and start basing policy decisions on real numbers
- Optimize meeting culture — Identify which meetings, teams, or recurring events drive the most cost and make informed changes
- Stay within budget — Track project-level cost attribution and get early warnings when spending exceeds thresholds
- Save time with AI assistance — Ask natural language questions about your data (e.g., "Show me total HR spend by project") and get instant answers
- Secure by default — Role-based access control with TOTP multi-factor authentication ensures sensitive cost data stays protected
────────────────────────────────────────────────────────────────────────────────
Tech Stack
┌──────────┬─────────────────────────────────────────────────────────────────┐
│ Layer    │ Technology                                                      │
├──────────┼─────────────────────────────────────────────────────────────────┤
│ Frontend │ React 19, TypeScript, Vite, Tailwind CSS v4                     │
│ UI/UX    │ Framer Motion, Lucide Icons, Recharts                           │
│ Backend  │ Supabase (Auth, PostgreSQL, MFA)                                │
│ AI       │ Anthropic Claude SDK for natural language queries               │
│ Security │ TOTP MFA, Role-based access (Admin, Finance, Manager, Employee) │
└──────────┴─────────────────────────────────────────────────────────────────

## Key features:

📊 Real-Time Cost Analytics
- Meeting Cost Calculator — Automatically computes the real dollar cost of every meeting based on attendee roles, hourly rates, and duration
- Dynamic Dashboard — Live KPIs showing total spend, budget utilization, active projects, and unattributed costs with trend indicators
- Anomaly Detection — AI-driven flagging of unusual spending patterns, over-budget meetings, and cost outliers with one-click resolution
- Confidence Scoring — Every cost estimate includes a confidence bar showing data quality and reliability
🔍 Project Cost Attribution
- Drag-and-Drop Attribution — Assign meeting costs to specific projects with a simple, intuitive interface
- Multi-Level Breakdown — View costs by project, department, role, or time period with drill-down capabilities
- Budget Tracking — Real-time budget vs. actual comparisons with visual progress bars and over-budget warnings
- Unattributed Cost Management — Quick workflows to tag and categorize unmapped expenses
📈 Forecasting & Intelligence
- Spend Trend Projections — AI-powered forecasting showing 4-week cost trends with confidence intervals
- Hourly Cost Distribution — Visual analysis of cost patterns across the workday to identify peak spending hours
- Per-Project Forecasts — Individual budget projections for each project with utilization percentages
- Smart Recommendations — AI-generated cost optimization suggestions based on historical patterns
🤖 AI-Powered Assistant
- Natural Language Queries — Ask questions like "Show me total HR spend by project" or "Which projects are over budget?" and get instant answers
- Context-Aware Responses — The AI understands your data and provides enriched answers with actual numbers from the system
- Quick-Action Buttons — One-click preset queries for common analyses
👤 User Profiles & Access Control
- Role-Based Access — Four tiers (Admin, Finance, Manager, Employee) with granular page-level permissions
- Editable Profiles — Inline editing of name and department with persistent save to Supabase
- Activity Overview — Personal meeting stats showing attendance count and total minutes
🔐 Enterprise Security
- TOTP Multi-Factor Authentication — Mandatory TOTP challenge on every login and session restore for maximum security
- Supabase Auth — PKCE flow with secure session management and auto-refresh
- Protected Routes — Unauthenticated users are redirected; unauthorized roles see a dedicated screen
- Session Encryption — Secure token storage with automatic refresh and cleanup
🎨 Modern UX/UI
- Glassmorphism Design — Beautiful frosted-glass cards, gradient headers, and smooth micro-interactions
- Framer Motion Animations — Butter-smooth page transitions, hover effects, and loading states
- Responsive Layout — Collapsible sidebar, adaptive grid layouts, and mobile-friendly navigation
- 3D Backgrounds — Dynamic animated backgrounds on auth screens for a polished first impression
🧩 Extensible Architecture
- Modular Component Design — Reusable chart components, metric cards, and confidence bars
- Plugin-Ready Widget System — Cost estimator widget architecture ready for custom extensions
- TypeScript Throughout — Full type safety with strict mode, interfaces, and no  any  types

##  What is Working
The following features are fully implemented and functional in the current version:
✅ Authentication & Security
- Supabase Auth (PKCE flow) — Full sign-up, sign-in, and sign-out with email/password
- TOTP Multi-Factor Authentication — Complete enrollment flow (QR code generation + verification) and mandatory TOTP challenge on every login and session restore
- Session Management — Token auto-refresh, session persistence across page reloads, and cleanup on sign-out
- Role-Based Access Control — Four roles (Admin, Finance, Manager, Employee) with page-level route protection and an unauthorized screen for denied access
- Editable User Profile — Name and department can be edited and saved persistently to Supabase user metadata
✅ Dashboard & Cost Analytics
- Real-time KPI Cards — Total spend, budget utilization, active projects, and unattributed costs with up/down trend indicators
- Weekly Spend Trend Chart — Interactive area chart showing 7-day cost patterns
- Project Cost Breakdown — Per-project bar chart with budget utilization and color-coded over-budget warnings
- Anomaly Detection — Automated flagging of unusual cost patterns with one-click resolution
- Confidence Scoring — Every cost metric includes a confidence bar indicating data reliability
✅ Pages & Navigation
- Dashboard ( / ) — Main analytics overview with all charts and KPIs
- Exec Insights ( /insights ) — Executive-level summary with project health cards, AI insight cards, and recent activity feed
- Forecasting ( /forecasting ) — 4-week spend projections, budget overview, AI recommendations, and hourly cost distribution
- Cost Attribution ( /attribution ) — Project assignment UI for meeting costs with drag-and-drop style interface
- Employees ( /employees ) — Employee directory and cost overview
- Anomalies ( /anomalies ) — Dedicated anomaly review and resolution dashboard
- AI Assistant ( /ai-assistant ) — Chat interface with natural language query support (total spend, weekly trends, project breakdowns)
- Settings ( /settings ) — Application configuration page
- Profile ( /profile ) — User profile with account details, security info, MFA status, activity overview, and inline editing
- Login & Signup — Auth pages with animated backgrounds, error handling, email confirmation support, and TOTP verification
✅ UI & User Experience
- Responsive Layout — Collapsible sidebar, glassmorphism design, gradient headers
- Framer Motion Animations — Page transitions, hover states, loading indicators, smooth micro-interactions
- Dark/Light Ready — Tailwind CSS v4 with consistent design token system
- 3D Animated Backgrounds — Dynamic backgrounds on auth screens
✅ Build & Infrastructure
- TypeScript Strict Mode — Full type safety across the entire codebase
- Vite Build Pipeline — Production build compiles successfully with no errors
- Git Integration — Repository pushed to GitHub with full commit history

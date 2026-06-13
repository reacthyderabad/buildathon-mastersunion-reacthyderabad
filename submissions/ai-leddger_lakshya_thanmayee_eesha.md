 ### One-Line Project & Approach Summary

  ai.leddger is an AI-powered SaaS analytics platform that connects to Google Calendar via
  Firebase Auth to automatically track, attribute, and audit meeting cost burden using Gemini API
  classification (with heuristic fallback), securing organizational assets with Row-Level
  Security (RLS) and enabling on-the-fly decryption of sensitive audit ledger data via a
  temporary local AES key fetched from the environment.
  ──────
  ### Project Documentation Update

  I have updated the main project README.md file. It is now clean, precise, and includes
  details for all project capabilities, including the security and encryption mechanisms:

  1. What the Project Does & Key Features: Details the dashboard UI (KPI cards, Recharts plots,
  interactive table), Firebase authentication consent flow, Gemini AI cost classifier, and the
  knowledge base ingestion API.
  2. Row-Level Security (RLS): Enforces strict data access boundaries across  personal ,  team ,
  and  org  scopes based on Firebase JWT token claims.
  3. AES Local Decryption & Temporary Bypass: Documents how sensitive fields are encrypted at
  rest using AES-256 and dynamically decrypted in the frontend report table using a temporary
  bypass key loaded from the environment ( AES_DECRYPTION_SECRET ).
  4. Environment Config & Stack Details: Clear setup guides for the FastAPI backend and React
  frontend.

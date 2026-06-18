<!-- Purpose: Introduces the OPS HR Phase 1 Access Core foundation and safe usage boundaries. -->
# OPS HR Access Core

This repository starts the Phase 1 foundation for the OPS HR platform access model. It defines account types, role-based access concepts, recovery policy, audit expectations, draft Firestore guardrails, and implementation test plans.

## Phase 1 Scope

- Owner, Special Support, Business, and Talent account foundations.
- Firebase Auth identification with Firestore roles for authorization planning.
- Least-privilege access policy documentation.
- PII protection principles for candidate and business data.
- Account recovery requirements with hashed account numbers.
- Audit logging expectations for login, failed login, account lifecycle, recovery, role, and PII events.

## Not Included Yet

- No live credentials, API keys, Firebase config, OAuth secrets, Cloudflare tokens, or deployment files.
- No payment logic.
- No AI/LLM logic.
- No full UI or app screens.
- No installed packages or generated app framework.

## Security Reminder

Frontend checks are usability aids only. Firebase Auth identifies the user, Firestore roles define authorization, Firestore Security Rules protect data, and backend functions must handle sensitive actions.

<!-- Purpose: Introduces the OPS HR Phase 1 Access Core foundation and safe usage boundaries. -->
<!-- Supports: Access Core scope, no-secrets rule, backend enforcement rule, PII logging rule. -->
# OPS HR Access Core

OPS HR Phase 1 establishes the Access Core foundation only. It documents account types, role-based access control, PII protection, account recovery, audit logging, database planning, Firebase planning, Cloudflare planning, test plans, and future backlog phases.

## Phase 1 Scope

- Owner, Special Support, Business, and Talent account foundations.
- Firebase Auth for identity planning and Firestore roles for authorization planning.
- Least-privilege access rules for every account type.
- Policy-controlled and logged access to protected candidate and business PII.
- Account recovery that uses hashed account numbers only.
- Audit logging requirements for every sensitive action.

## Not Included

- No secrets, API keys, Firebase credentials, Cloudflare credentials, or live deployment files.
- No payment logic.
- No AI or LLM logic.
- No application screens or production UI.
- No package installation or generated framework code.

## Security Boundary

Frontend authorization is non-authoritative. Backend services and Firestore Security Rules must enforce access decisions, create audit events, and deny protected PII unless policy explicitly allows access.

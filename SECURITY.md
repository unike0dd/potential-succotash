<!-- Purpose: Defines baseline security expectations for the OPS HR Access Core foundation. -->
<!-- Supports: Least privilege, no-secrets rule, PII access control, recovery safety, audit logging. -->
# Security Policy

## Core Principles

1. The frontend is never the security boundary.
2. Firebase Auth identifies the user.
3. Firestore roles and backend policy decide authorization.
4. Firestore Security Rules must deny unsafe direct access.
5. Backend functions must handle sensitive actions.
6. The Owner controls the platform, but must not casually view protected candidate or business PII.
7. PII access must be policy-controlled, purpose-bound, and logged.
8. Support permissions must be limited by support level and assigned duty.
9. Account numbers must be hashed before storage and never stored in plaintext.
10. Recovery must fail safely when no recovery email exists.
11. Every recovery attempt and sensitive action must create an audit event.

## Secrets

Do not commit secrets, API keys, Firebase credentials, Cloudflare tokens, OAuth secrets, private certificates, service account files, or production environment values.

## Reporting

During this foundation phase, report security issues to the repository owner through the approved internal channel placeholder. Do not place sensitive incident details in public issues.

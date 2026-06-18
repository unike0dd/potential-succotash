<!-- Purpose: Defines baseline security expectations for the OPS HR Access Core foundation. -->
# Security Policy

## Core Principles

1. The frontend is never the security boundary.
2. Firebase Auth identifies the user.
3. Firestore roles decide what the user can access.
4. Firestore Security Rules must protect data.
5. Backend functions must handle sensitive actions.
6. Protected candidate and business PII must not be casually visible to Owner or Support accounts.
7. Support permissions must be limited by support level and job duty.
8. Business accounts may only see authorized candidate-facing data.
9. Talent accounts may only see their own profile and approved business/public job information.
10. Account numbers must be hashed before storage.
11. Recovery, login, failed login, role, PII access, suspension, deletion, and block events must be logged.

## Secrets

Do not commit secrets, API keys, Firebase credentials, Cloudflare tokens, OAuth secrets, private certificates, service account files, or production environment values.

## Reporting

During this foundation phase, report security issues to the repository owner through the approved internal channel placeholder.

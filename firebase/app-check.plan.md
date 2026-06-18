<!-- Purpose: Plans Firebase App Check use without adding live project credentials. -->
# Firebase App Check Plan

App Check should be enabled before production traffic to reduce abuse from unauthorized clients.

## Plan

- Register approved web/app clients in Firebase using environment-specific settings outside the repo.
- Enforce App Check for callable/backend functions that handle recovery, role changes, and PII decisions.
- Keep any provider keys or private values out of the repository.

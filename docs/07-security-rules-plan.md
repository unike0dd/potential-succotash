<!-- Purpose: Plans Firestore Security Rules for OPS HR Phase 1 without creating live deployment rules. -->
# Security Rules Plan

Firestore Security Rules must protect data after Firebase Auth identifies the user. Rules should read role and permission data from Firestore, then allow only the minimum access needed.

## Phase 1 Rule Goals

- Verify `request.auth.uid` for every protected read or write.
- Use Firestore role records to decide access.
- Keep Owner PII access policy-controlled and logged through backend functions.
- Block direct client writes to audit logs, recovery attempts, role records, and sensitive account status fields.
- Require backend functions for suspensions, blocks, deletions, role changes, and recovery decisions.

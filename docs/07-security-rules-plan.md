<!-- Purpose: Plans Firestore rule hardening after the draft foundation. -->
<!-- Supports: Backend enforcement, deny-by-default access, PII protection, audit integrity. -->
# Security Rules Plan

Phase 1 includes a draft rules file only. Future work must validate each collection with emulator tests before deployment.

## Rules Supported

- Deny direct client writes to roles, audit logs, recovery attempts, and protected PII.
- Allow users to read only their own safe account data.
- Require backend functions for sensitive actions.
- Keep Owner PII access policy-controlled and logged.

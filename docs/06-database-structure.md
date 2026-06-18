<!-- Purpose: Plans the Phase 1 Firestore collection structure. -->
<!-- Supports: Access Core scope, PII separation, hashed recovery identifiers, audit logging. -->
# Database Structure Plan

## Collections

| Collection | Purpose | Sensitive Notes |
| --- | --- | --- |
| `accounts` | Basic account records and status | Stores `accountNumberHash`, never plaintext account numbers |
| `roles` | Role and permission assignment | Backend-managed only |
| `businessProfiles` | Business profile records | Separate protected contact fields from public fields |
| `talentProfiles` | Talent profile records | Separate protected PII from public/profile fields |
| `piiAccessRequests` | Policy approvals for PII access | Must be logged and time-bound |
| `recoveryAttempts` | Recovery attempt records | No plaintext account numbers |
| `auditLogs` | Sensitive action audit events | Append-only through backend |

## Rules Supported

The structure separates identity, role, business, talent, recovery, PII approval, and audit concerns so future backend enforcement can deny broad or casual data access.

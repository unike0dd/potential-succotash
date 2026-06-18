<!-- Purpose: Defines audit event requirements for sensitive activity. -->
<!-- Supports: Sensitive action logging, recovery logging, PII logging, role-change logging. -->
# Audit Log Policy

## Rules Supported

Every sensitive action must create an audit event. Sensitive actions include login failures, recovery attempts, role changes, permission changes, account suspension, account deletion, PII access, PII export, and blocked access attempts.

## Required Fields

- `id`
- `actorAccountId` when known
- `targetAccountId` when applicable
- `action`
- `result`
- `purpose`
- `createdAtIso`
- `metadata` with no secrets and no plaintext account numbers

## Storage Rule

Audit logs should be append-only and unavailable for direct client writes. Backend services should create audit events.

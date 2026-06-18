<!-- Purpose: Defines required audit events and minimum audit fields. -->
# Audit Log Policy

## Events That Must Be Logged

- Login.
- Failed login.
- Account created.
- Account suspended.
- Account blocked.
- Account deleted.
- Role assigned.
- Role removed.
- Recovery requested.
- Recovery failed.
- Recovery succeeded.
- PII access attempted.
- PII access denied.
- PII access approved.

## Minimum Fields

Each audit record should include actor account ID, target account ID when applicable, action, timestamp, outcome, reason, source context, and metadata with PII minimized or masked.

<!-- Purpose: Defines how PII must be classified and protected. -->
# PII Data Policy

PII includes names, contact numbers, emails, account numbers, recovery emails, candidate profile details, and business-sensitive records.

## Rules

- Store account numbers only as hashes or secure irreversible tokens.
- Reveal the minimum data needed for a task.
- Mask PII in logs and support views by default.
- Require backend authorization before any PII read.
- Record audit events for exceptional PII access.

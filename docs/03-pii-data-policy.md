<!-- Purpose: Defines protected PII handling rules for candidates and businesses. -->
<!-- Supports: Owner no-casual-PII rule, least privilege, audit logging, backend enforcement. -->
# PII Data Policy

## Protected PII

Protected PII includes government identifiers, personal contact details, private candidate profile fields, private business contact details, recovery emails, and account-number hashes.

## Rules Supported

- The Owner controls the platform but must not casually view protected candidate or business PII.
- PII access must be purpose-bound, policy-approved, time-limited where possible, and logged.
- Support access to PII must require an assigned support case or approved escalation.
- Frontend masking is helpful but not sufficient. Backend enforcement is required.

## Logging Requirement

Every PII read, export, update, reveal, or failed access attempt must create an audit event with actor, target, action, purpose, timestamp, and result.

<!-- Purpose: States the non-negotiable access rules for OPS HR accounts. -->
<!-- Supports: Least privilege, role-based access, PII protection, audit logging, backend enforcement. -->
# Access Constitution

## Rules Supported

- Access is granted by explicit role and permission, not by UI visibility.
- Owner accounts manage the platform but do not receive casual PII visibility.
- Special Support accounts are scoped by support level and assigned duties.
- Business accounts see only data approved for that business relationship.
- Talent accounts see only their own profile and approved public or business-facing records.
- Sensitive events require immutable audit records.

## Backend Enforcement Requirement

Every sensitive access decision must be enforced by backend policy and Firestore Security Rules. Frontend code may hide controls for usability, but it must never be treated as authoritative authorization.

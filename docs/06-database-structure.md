<!-- Purpose: Sketches the draft data structure without live service credentials. -->
# Database Structure Draft

Collections are conceptual and may map to Firestore or another backend later.

- `accounts`: account profile, account type, status, hashed account number reference.
- `roles`: Firestore role assignment records used by rules and backend authorization.
- `permissions`: permission definitions used by backend authorization.
- `recoveryAttempts`: recovery audit records with masked input references.
- `auditLogs`: immutable sensitive-event records.
- `businessProfiles`: business-owned profile records.
- `talentProfiles`: talent-owned profile records with PII segmentation.
- `piiPolicies`: policy records that define field-level PII handling and audit requirements.

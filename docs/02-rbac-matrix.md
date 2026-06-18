<!-- Purpose: Defines the Phase 1 role and permission matrix. -->
<!-- Supports: Least privilege, support scoping, PII protection, audit logging. -->
# RBAC Matrix

| Role | Purpose | Allowed Phase 1 Access | PII Default | Audit Required |
| --- | --- | --- | --- | --- |
| Platform Owner | Platform governance | Manage roles, policies, and account status through backend workflows | Denied unless policy-approved | Yes |
| Support Level 1 | Basic account help | View non-sensitive account status and support queues | Denied | Yes |
| Support Level 2 | Escalated support | Limited troubleshooting fields approved by policy | Denied unless case-approved | Yes |
| Business Admin | Business account management | Own business profile and approved candidate workflow metadata | Limited approved candidate-facing data | Yes |
| Talent User | Candidate profile owner | Own profile and approved public/business-facing records | Own PII only | Yes for sensitive changes |

## Rules Supported

RBAC must be enforced by backend logic and Firestore Security Rules. Role changes, permission changes, and sensitive reads must create audit events.

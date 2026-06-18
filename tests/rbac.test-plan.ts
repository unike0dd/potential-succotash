// Purpose: Documents Phase 1 RBAC test scenarios without requiring a test runner yet.
// Supports: Access Core validation planning, backend enforcement, no secrets, and auditability.
export const rbacTestPlan = [
  'Owner lacks default raw PII access.',
  'Support is scoped.',
  'Business cannot read other businesses.',
  'Talent reads only self.',
  'Role changes are audited.',
] as const;

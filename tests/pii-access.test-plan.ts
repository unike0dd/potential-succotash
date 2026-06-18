// Purpose: Documents Phase 1 PII access test scenarios without requiring a test runner yet.
// Supports: Access Core validation planning, backend enforcement, no secrets, and auditability.
export const pii_accessTestPlan = [
  'Owner PII access requires approval.',
  'denied PII access is audited.',
  'approved access is purpose-bound.',
  'exports are denied until policy exists.',
] as const;

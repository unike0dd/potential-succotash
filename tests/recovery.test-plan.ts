// Purpose: Documents Phase 1 account recovery test scenarios without requiring a test runner yet.
// Supports: Access Core validation planning, backend enforcement, no secrets, and auditability.
export const recoveryTestPlan = [
  'Submitted account numbers are hashed.',
  'plaintext is never stored.',
  'missing recovery email fails safely.',
  'every attempt is audited.',
] as const;

// Purpose: Documents Phase 1 PII access test scenarios for future backend enforcement.
export const piiAccessTestPlan = [
  'Candidate PII is masked from casual Owner views.',
  'Support views expose only the minimum required PII.',
  'Business accounts see only authorized candidate-facing fields.',
  'Talent accounts cannot read other talent PII.',
  'Exceptional PII access creates an audit log record.',
] as const;

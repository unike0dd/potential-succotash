// Purpose: Documents Phase 1 account recovery test scenarios without implementation dependencies.
export const recoveryTestPlan = [
  'Recovery requires first name, last name, contact number, account number, and account email.',
  'Optional recovery email is accepted when present.',
  'Plaintext account numbers are never persisted.',
  'Failed and successful recovery attempts are logged.',
  'Repeated risky attempts can be flagged for manual review.',
] as const;

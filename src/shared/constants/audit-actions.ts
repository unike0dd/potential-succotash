// Purpose: Defines audit action constants for required sensitive event logging.
export const AUDIT_ACTIONS = {
  LOGIN: 'login',
  FAILED_LOGIN: 'failed_login',
  ACCOUNT_CREATED: 'account_created',
  ACCOUNT_SUSPENDED: 'account_suspended',
  ACCOUNT_BLOCKED: 'account_blocked',
  ACCOUNT_DELETED: 'account_deleted',
  ROLE_ASSIGNED: 'role_assigned',
  ROLE_REMOVED: 'role_removed',
  RECOVERY_REQUESTED: 'recovery_requested',
  RECOVERY_FAILED: 'recovery_failed',
  RECOVERY_SUCCEEDED: 'recovery_succeeded',
  PII_ACCESS_ATTEMPTED: 'pii_access_attempted',
  PII_ACCESS_DENIED: 'pii_access_denied',
  PII_ACCESS_APPROVED: 'pii_access_approved',
} as const;

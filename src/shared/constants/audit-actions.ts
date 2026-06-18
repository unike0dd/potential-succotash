// Purpose: Provides audit action constants for sensitive OPS HR events.
// Supports: Mandatory logging for sensitive actions, recovery attempts, and PII access.
export const AUDIT_ACTIONS = {
  LoginFailed: 'LOGIN_FAILED',
  RecoveryAttempted: 'RECOVERY_ATTEMPTED',
  RoleChanged: 'ROLE_CHANGED',
  PermissionChanged: 'PERMISSION_CHANGED',
  AccountSuspended: 'ACCOUNT_SUSPENDED',
  AccountBlocked: 'ACCOUNT_BLOCKED',
  AccountDeleted: 'ACCOUNT_DELETED',
  PiiAccessRequested: 'PII_ACCESS_REQUESTED',
  PiiAccessed: 'PII_ACCESSED',
  PiiAccessDenied: 'PII_ACCESS_DENIED',
} as const;

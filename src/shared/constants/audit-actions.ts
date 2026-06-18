// Purpose: Defines audit action values for required sensitive event logging.
export enum AuditAction {
  Login = 'LOGIN',
  FailedLogin = 'FAILED_LOGIN',
  AccountCreated = 'ACCOUNT_CREATED',
  AccountSuspended = 'ACCOUNT_SUSPENDED',
  AccountBlocked = 'ACCOUNT_BLOCKED',
  AccountDeleted = 'ACCOUNT_DELETED',
  RoleAssigned = 'ROLE_ASSIGNED',
  RoleRemoved = 'ROLE_REMOVED',
  RecoveryRequested = 'RECOVERY_REQUESTED',
  RecoveryFailed = 'RECOVERY_FAILED',
  RecoverySucceeded = 'RECOVERY_SUCCEEDED',
  PiiAccessAttempted = 'PII_ACCESS_ATTEMPTED',
  PiiAccessDenied = 'PII_ACCESS_DENIED',
  PiiAccessApproved = 'PII_ACCESS_APPROVED',
}

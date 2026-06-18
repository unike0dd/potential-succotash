// Purpose: Defines audit event types for sensitive OPS HR actions.
// Supports: Mandatory logging for PII access, recovery, role changes, and account lifecycle events.
export type AuditAction =
  | 'LOGIN_FAILED'
  | 'RECOVERY_ATTEMPTED'
  | 'ROLE_CHANGED'
  | 'PERMISSION_CHANGED'
  | 'ACCOUNT_SUSPENDED'
  | 'ACCOUNT_BLOCKED'
  | 'ACCOUNT_DELETED'
  | 'PII_ACCESS_REQUESTED'
  | 'PII_ACCESSED'
  | 'PII_ACCESS_DENIED';

export type AuditResult = 'SUCCESS' | 'FAILURE' | 'DENIED' | 'BLOCKED';

export interface AuditEvent {
  id: string;
  actorAccountId?: string;
  targetAccountId?: string;
  action: AuditAction;
  result: AuditResult;
  purpose: string;
  createdAtIso: string;
  metadata?: Record<string, string | number | boolean>;
}

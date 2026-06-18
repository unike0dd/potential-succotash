// Purpose: Defines audit log records for sensitive OPS HR account events.
export enum AuditOutcome {
  Success = 'SUCCESS',
  Denied = 'DENIED',
  Failed = 'FAILED',
  PendingReview = 'PENDING_REVIEW',
}

export enum AuditSource {
  Backend = 'BACKEND',
  SecurityRules = 'SECURITY_RULES',
  AdminReview = 'ADMIN_REVIEW',
  System = 'SYSTEM',
}

export interface AuditLogRecord {
  id: string;
  actorAccountId: string;
  targetAccountId?: string;
  action: string;
  outcome: AuditOutcome;
  reason: string;
  occurredAtIso: string;
  source: AuditSource;
  metadata?: Record<string, string | number | boolean | null>;
}

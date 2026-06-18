// Purpose: Defines audit log records for sensitive OPS HR account events.
export type AuditOutcome = 'success' | 'denied' | 'failed' | 'pending_review';

export interface AuditLogRecord {
  id: string;
  actorAccountId: string;
  targetAccountId?: string;
  action: string;
  outcome: AuditOutcome;
  reason: string;
  occurredAtIso: string;
  source: 'backend' | 'rules' | 'admin_review' | 'system';
  metadata?: Record<string, string | number | boolean | null>;
}

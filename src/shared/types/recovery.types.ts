// Purpose: Defines safe account recovery planning types.
// Supports: Hashed account numbers, fail-safe recovery, and mandatory recovery audit events.
export type RecoveryAttemptResult = 'STARTED' | 'EMAIL_SENT' | 'NO_RECOVERY_EMAIL' | 'NOT_FOUND' | 'RATE_LIMITED' | 'FAILED';

export interface RecoveryAttempt {
  id: string;
  submittedAccountNumberHash: string;
  matchedAccountId?: string;
  result: RecoveryAttemptResult;
  createdAtIso: string;
  auditEventId: string;
}

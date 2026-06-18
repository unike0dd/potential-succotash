// Purpose: Defines account recovery request and audit-safe recovery attempt types.
export enum RecoveryOutcome {
  Matched = 'MATCHED',
  NotMatched = 'NOT_MATCHED',
  MissingRecoveryEmail = 'MISSING_RECOVERY_EMAIL',
  Locked = 'LOCKED',
  ManualReview = 'MANUAL_REVIEW',
}

export interface AccountRecoveryRequest {
  firstName: string;
  lastName: string;
  contactNumber: string;
  accountNumber: string;
  accountEmail: string;
  recoveryEmail?: string;
}

export interface RecoveryAttemptLog {
  id: string;
  accountEmail: string;
  accountNumberHashPrefix?: string;
  outcome: RecoveryOutcome;
  attemptedAtIso: string;
  riskFlags: string[];
}

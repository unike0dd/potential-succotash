// Purpose: Defines account recovery request and audit-safe recovery attempt types.
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
  outcome: 'matched' | 'not_matched' | 'locked' | 'manual_review';
  attemptedAtIso: string;
  riskFlags: string[];
}

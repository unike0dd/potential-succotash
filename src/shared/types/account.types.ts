// Purpose: Defines shared account record types for the OPS HR Access Core foundation.
// Supports: Account classification, hashed account numbers, safe recovery email handling, audit-ready status changes.
export enum AccountType {
  Owner = 'OWNER',
  SpecialSupport = 'SPECIAL_SUPPORT',
  Business = 'BUSINESS',
  Talent = 'TALENT',
}

export enum AccountStatus {
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  Blocked = 'BLOCKED',
  Deleted = 'DELETED',
  PendingRecovery = 'PENDING_RECOVERY',
}

export interface AccountRecord {
  id: string;
  accountType: AccountType;
  status: AccountStatus;
  accountEmail: string;
  accountNumberHash: string;
  recoveryEmail?: string;
  createdAtIso: string;
  updatedAtIso: string;
}

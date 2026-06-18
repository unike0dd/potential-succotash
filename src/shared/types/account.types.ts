// Purpose: Defines shared account type shapes for the OPS HR Access Core foundation.
export type AccountType = 'owner' | 'special_support' | 'business' | 'talent';

export type AccountStatus = 'active' | 'suspended' | 'blocked' | 'deleted' | 'pending_recovery';

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

// Purpose: Lists supported OPS HR account type values for consistent shared usage.
import { AccountType } from '../types/account.types';

export const ACCOUNT_TYPES: readonly AccountType[] = [
  AccountType.Owner,
  AccountType.SpecialSupport,
  AccountType.Business,
  AccountType.Talent,
];

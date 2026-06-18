// Purpose: Provides role constants for RBAC planning.
// Supports: Least privilege and backend-enforced authorization decisions.
export const ROLES = {
  PlatformOwner: 'PLATFORM_OWNER',
  SupportLevel1: 'SUPPORT_LEVEL_1',
  SupportLevel2: 'SUPPORT_LEVEL_2',
  BusinessAdmin: 'BUSINESS_ADMIN',
  TalentUser: 'TALENT_USER',
} as const;

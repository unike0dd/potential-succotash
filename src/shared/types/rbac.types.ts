// Purpose: Defines RBAC types for roles, support levels, and permission grants.
export enum SupportLevel {
  LevelOne = 'LEVEL_1',
  LevelTwo = 'LEVEL_2',
  LevelThree = 'LEVEL_3',
  RestrictedAdmin = 'RESTRICTED_ADMIN',
}

export enum RoleName {
  PlatformOwner = 'PLATFORM_OWNER',
  SupportLevelOne = 'SUPPORT_LEVEL_1',
  SupportLevelTwo = 'SUPPORT_LEVEL_2',
  SupportLevelThree = 'SUPPORT_LEVEL_3',
  BusinessAdmin = 'BUSINESS_ADMIN',
  BusinessMember = 'BUSINESS_MEMBER',
  TalentMember = 'TALENT_MEMBER',
}

export interface RoleAssignment {
  accountId: string;
  role: RoleName;
  supportLevel?: SupportLevel;
  assignedByAccountId: string;
  assignedAtIso: string;
  reason: string;
}

export interface PermissionGrant {
  permission: string;
  allowed: boolean;
  requiresAuditLog: boolean;
}

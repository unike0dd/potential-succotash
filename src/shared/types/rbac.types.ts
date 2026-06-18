// Purpose: Defines RBAC types used to describe roles, support levels, and permissions.
export type SupportLevel = 'level_1' | 'level_2' | 'level_3' | 'restricted_admin';

export interface RoleAssignment {
  accountId: string;
  role: string;
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

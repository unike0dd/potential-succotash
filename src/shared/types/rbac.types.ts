// Purpose: Defines role and permission types for Phase 1 RBAC planning.
// Supports: Least privilege, backend enforcement, support scoping, Owner no-casual-PII access.
export type RoleName =
  | 'PLATFORM_OWNER'
  | 'SUPPORT_LEVEL_1'
  | 'SUPPORT_LEVEL_2'
  | 'BUSINESS_ADMIN'
  | 'TALENT_USER';

export type PermissionName =
  | 'MANAGE_PLATFORM_POLICY'
  | 'MANAGE_ACCOUNT_STATUS'
  | 'REQUEST_PII_ACCESS'
  | 'APPROVE_PII_ACCESS'
  | 'VIEW_OWN_ACCOUNT'
  | 'VIEW_OWN_BUSINESS'
  | 'VIEW_OWN_TALENT_PROFILE'
  | 'CREATE_AUDIT_EVENT';

export interface RoleAssignment {
  accountId: string;
  role: RoleName;
  permissions: PermissionName[];
  assignedByAccountId: string;
  assignedAtIso: string;
}

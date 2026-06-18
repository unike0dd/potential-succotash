// Purpose: Defines first-pass permission keys for backend authorization planning.
export enum PermissionKey {
  ManagePlatformSettings = 'MANAGE_PLATFORM_SETTINGS',
  AssignRoles = 'ASSIGN_ROLES',
  RemoveRoles = 'REMOVE_ROLES',
  BlockUsers = 'BLOCK_USERS',
  SuspendUsers = 'SUSPEND_USERS',
  DeleteUsers = 'DELETE_USERS',
  ViewAuditSummary = 'VIEW_AUDIT_SUMMARY',
  ViewMaskedSupportData = 'VIEW_MASKED_SUPPORT_DATA',
  ViewAuthorizedCandidateData = 'VIEW_AUTHORIZED_CANDIDATE_DATA',
  ViewOwnTalentProfile = 'VIEW_OWN_TALENT_PROFILE',
  RequestAccountRecovery = 'REQUEST_ACCOUNT_RECOVERY',
}

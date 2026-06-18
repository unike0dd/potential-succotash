// Purpose: Defines first-pass permission keys for backend authorization planning.
export const PERMISSIONS = {
  MANAGE_PLATFORM_SETTINGS: 'manage_platform_settings',
  ASSIGN_ROLES: 'assign_roles',
  VIEW_AUDIT_SUMMARY: 'view_audit_summary',
  VIEW_MASKED_SUPPORT_DATA: 'view_masked_support_data',
  VIEW_AUTHORIZED_CANDIDATE_DATA: 'view_authorized_candidate_data',
  VIEW_OWN_TALENT_PROFILE: 'view_own_talent_profile',
  REQUEST_ACCOUNT_RECOVERY: 'request_account_recovery',
} as const;

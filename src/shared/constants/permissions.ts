// Purpose: Provides permission constants for Phase 1 access planning.
// Supports: Explicit permissions, PII access approval, and audit event creation.
export const PERMISSIONS = {
  ManagePlatformPolicy: 'MANAGE_PLATFORM_POLICY',
  ManageAccountStatus: 'MANAGE_ACCOUNT_STATUS',
  RequestPiiAccess: 'REQUEST_PII_ACCESS',
  ApprovePiiAccess: 'APPROVE_PII_ACCESS',
  ViewOwnAccount: 'VIEW_OWN_ACCOUNT',
  ViewOwnBusiness: 'VIEW_OWN_BUSINESS',
  ViewOwnTalentProfile: 'VIEW_OWN_TALENT_PROFILE',
  CreateAuditEvent: 'CREATE_AUDIT_EVENT',
} as const;

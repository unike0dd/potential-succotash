// Purpose: Documents Phase 1 RBAC test scenarios without requiring a test runner yet.
export const rbacTestPlan = [
  'Owner can manage platform settings without default raw PII access.',
  'Support access is limited by assigned support level.',
  'Business accounts cannot read other business records.',
  'Talent accounts can read only their own talent profile.',
  'Role changes create audit log records.',
] as const;

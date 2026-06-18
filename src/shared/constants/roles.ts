// Purpose: Lists initial role values for Phase 1 RBAC planning.
import { RoleName } from '../types/rbac.types';

export const ROLES: readonly RoleName[] = [
  RoleName.PlatformOwner,
  RoleName.SupportLevelOne,
  RoleName.SupportLevelTwo,
  RoleName.SupportLevelThree,
  RoleName.BusinessAdmin,
  RoleName.BusinessMember,
  RoleName.TalentMember,
];

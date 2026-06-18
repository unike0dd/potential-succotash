// Purpose: Defines PII classification types for policy-controlled OPS HR data access.
export enum PiiClassification {
  Public = 'PUBLIC',
  Internal = 'INTERNAL',
  Protected = 'PROTECTED',
  Restricted = 'RESTRICTED',
}

export interface PiiFieldPolicy {
  fieldName: string;
  classification: PiiClassification;
  maskedByDefault: boolean;
  requiresAuditLog: boolean;
  allowedPurpose: string;
}

export interface PiiAccessDecision {
  allowed: boolean;
  reason: string;
  mustLogAuditEvent: boolean;
}

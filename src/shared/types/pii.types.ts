// Purpose: Defines PII classification types for policy-controlled OPS HR data access.
export type PiiClassification = 'public' | 'internal' | 'protected' | 'restricted';

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

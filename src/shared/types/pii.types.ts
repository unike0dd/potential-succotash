// Purpose: Defines PII classification and policy-controlled access request types.
// Supports: Owner no-casual-PII rule, least privilege, purpose-bound access, audit logging.
export type PiiClass = 'PUBLIC' | 'INTERNAL' | 'PROTECTED_CANDIDATE_PII' | 'PROTECTED_BUSINESS_PII';

export type PiiAccessDecision = 'PENDING' | 'APPROVED' | 'DENIED' | 'EXPIRED';

export interface PiiAccessRequest {
  id: string;
  requesterAccountId: string;
  targetRecordId: string;
  piiClass: PiiClass;
  purpose: string;
  decision: PiiAccessDecision;
  auditEventId: string;
  createdAtIso: string;
  expiresAtIso?: string;
}

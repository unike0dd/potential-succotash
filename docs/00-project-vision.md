<!-- Purpose: Describes the Phase 1 vision for the OPS HR Access Core. -->
<!-- Supports: Access Core scope, simple planning, no UI, no secrets, backend enforcement. -->
# Project Vision

OPS HR will use a security-oriented access foundation before product features are built. Phase 1 defines who can exist in the platform, what they may access, how sensitive information is protected, and what must be logged.

## Rules Supported

- Keep Phase 1 focused on Access Core only.
- Treat frontend authorization as non-authoritative.
- Do not include secrets, credentials, payment logic, AI logic, or production deployment settings.

## Foundation Outcome

The expected output is a readable policy and TypeScript planning baseline that future work orders can implement safely.

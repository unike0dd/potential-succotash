<!-- Purpose: Defines safe account recovery requirements. -->
<!-- Supports: Hashed account number rule, fail-safe recovery, audit logging, no plaintext identifiers. -->
# Account Recovery Policy

## Rules Supported

- Account numbers must be hashed.
- Account numbers must never be stored in plaintext.
- Recovery must fail safely if no recovery email exists.
- Every recovery attempt must be logged.

## Recovery Flow Requirements

1. Accept a submitted account number only in transient request memory.
2. Hash the submitted value using an approved backend process.
3. Compare only against stored account-number hashes.
4. If no recovery email exists, return a safe generic response and do not disclose account existence.
5. Log successful, failed, and blocked attempts.
6. Rate-limit repeated attempts before production launch.

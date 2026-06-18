<!-- Purpose: Plans Firebase Auth provider usage for OPS HR without storing credentials. -->
# Firebase Auth Provider Plan

Firebase Auth identifies the user. Firestore roles and backend authorization decide what the user can access.

## Phase 1 Providers

- Email/password or approved enterprise provider may be selected later.
- MFA should be required for Owner and Special Support accounts before production.
- Provider secrets, OAuth client secrets, and private credentials must not be committed.

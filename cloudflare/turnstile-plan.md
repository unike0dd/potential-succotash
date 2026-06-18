<!-- Purpose: Plans Cloudflare Turnstile use without adding site keys or secrets. -->
# Cloudflare Turnstile Plan

Turnstile can protect public recovery and sign-in surfaces from automated abuse.

## Plan

- Add Turnstile to recovery request and high-risk sign-in flows later.
- Validate Turnstile responses only in backend functions.
- Store site keys and secret keys outside the repository.

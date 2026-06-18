<!-- Purpose: Plans rate limiting for sensitive OPS HR access and recovery flows. -->
# Cloudflare Rate Limit Plan

Rate limiting should reduce credential stuffing, recovery abuse, and PII probing.

## Plan

- Rate limit login, failed login, recovery, and PII-access decision endpoints.
- Apply stricter limits to unauthenticated recovery requests.
- Log rate-limit events for security review without storing sensitive raw inputs.

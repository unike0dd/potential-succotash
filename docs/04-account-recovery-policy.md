<!-- Purpose: Documents required recovery fields and logging rules. -->
# Account Recovery Policy

Recovery requests must collect and verify:

- First name.
- Last name.
- Contact number.
- Account number, compared only through a hashed value.
- Account email.
- Recovery email, when available.

If no recovery email exists, recovery must fail safely and route to an approved manual review path only after policy approval. The system must not disclose which field failed.

Every recovery attempt must be logged with timestamp, account reference, outcome, requester context, and risk flags. Logs must not store plaintext account numbers.

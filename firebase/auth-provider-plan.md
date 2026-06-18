<!-- Purpose: Plans identity provider requirements for OPS HR accounts. -->
<!-- Supports: Firebase Auth identification, recovery safety, no secrets. -->
# Firebase Auth Provider Plan

Firebase Auth may identify users, but Firestore roles and backend policy must authorize them. Recovery email handling must not disclose account existence.

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd8',
  topicId: 'd8-t5',
  overview: `Secure coding guidelines translate security principles into concrete practices developers follow while writing code. The goal is to prevent the recurring classes of vulnerabilities that account for most real-world breaches, rather than finding them after the fact.

The OWASP Top 10 is the most cited reference for web-application risks. Recurring categories include: Broken Access Control (users acting outside their permissions), Cryptographic Failures (weak/missing encryption of sensitive data), Injection (untrusted input interpreted as code/commands — SQL injection, command injection, cross-site scripting), Insecure Design, Security Misconfiguration, Vulnerable and Outdated Components, Identification and Authentication Failures, Software and Data Integrity Failures, Security Logging and Monitoring Failures, and Server-Side Request Forgery (SSRF).

Core secure-coding practices map to these: validate and sanitize ALL input (treat input as untrusted); use parameterized queries / prepared statements to stop SQL injection (do NOT build queries by string concatenation); output-encode to prevent cross-site scripting (XSS); enforce access control server-side (never trust the client); use strong, standard cryptography and never roll your own; fail securely (deny by default); apply least privilege; avoid hard-coded secrets; keep dependencies patched; and log security events. Additional guidance includes defense in depth, secure defaults, and complete mediation (check every access). Following coding standards, doing code review, and running SAST/DAST reinforce these practices.`,
  examFraming: `(ISC)² wants you to map a described flaw to its secure-coding fix. Injection (especially SQL injection) → parameterized queries/prepared statements plus input validation (string concatenation of queries is the wrong answer). XSS → output encoding/escaping and input validation. Broken access control → enforce authorization server-side (client-side checks are bypassable). Weak crypto → use vetted standard algorithms, never custom. Know that input validation should be allowlist-based ('accept known good') rather than only blocklist. 'Fail securely'/'deny by default' and 'least privilege' are recurring correct answers. The OWASP Top 10 is the reference to cite for common web-app risks.`,
  keyTerms: [
    { term: 'OWASP Top 10', definition: 'A widely used list of the most critical web-application security risks.' },
    { term: 'Injection', definition: 'Untrusted input interpreted as code/commands (SQL injection, command injection, XSS).' },
    { term: 'Parameterized Queries', definition: 'Prepared statements that separate code from data, preventing SQL injection.' },
    { term: 'Input Validation', definition: 'Verifying input against expected format, preferably allowlist-based (accept known good).' },
    { term: 'Output Encoding', definition: 'Escaping output so injected data cannot execute as script — the primary XSS defense.' },
    { term: 'Broken Access Control', definition: 'Users acting beyond their permissions; fixed by server-side authorization enforcement.' },
    { term: 'Fail Securely / Deny by Default', definition: 'On error or ambiguity, deny access rather than granting it.' },
    { term: 'Complete Mediation', definition: 'Checking authorization on every access, not just the first.' },
  ],
  scenario: `A code review of a web app surfaces several classic OWASP issues. A search feature builds SQL by concatenating user input — a SQL injection risk — so the team switches to parameterized queries and validates input against an allowlist. A comment field reflects user text into pages unescaped, enabling cross-site scripting; they add output encoding. An admin API relies on the browser hiding a button to 'protect' privileged actions, but the endpoint has no server-side check — a broken access control flaw fixed by enforcing authorization on the server. They also find a hand-rolled 'encryption' routine and replace it with a vetted standard library, and remove a hard-coded API key into a vault. A CISSP question might describe user input ending up in a SQL statement and ask the BEST fix — parameterized queries (prepared statements) with input validation — or note that client-side-only access checks are inadequate because they can be bypassed.`,
  comparisonTables: [
    {
      caption: 'Common Vulnerability → Secure-Coding Fix',
      headers: ['Vulnerability', 'Primary Fix'],
      rows: [
        ['SQL injection', 'Parameterized queries/prepared statements + input validation'],
        ['Cross-site scripting (XSS)', 'Output encoding/escaping + input validation'],
        ['Broken access control', 'Enforce authorization server-side (never trust client)'],
        ['Cryptographic failures', 'Use vetted standard crypto; never roll your own'],
        ['Vulnerable components', 'Patch dependencies; use SCA/SBOM'],
        ['Hard-coded secrets', 'Store secrets in a vault'],
      ],
    },
  ],
  examTraps: [
    'SQL injection is fixed with parameterized queries/prepared statements (plus input validation) — building queries via string concatenation is the WRONG answer.',
    'XSS is primarily prevented by output encoding/escaping (with input validation), not by blocklisting a few characters.',
    'Access control must be enforced SERVER-SIDE; client-side-only checks (hiding buttons) are trivially bypassed.',
    'Never roll your own cryptography — use vetted, standard algorithms/libraries.',
    'Prefer allowlist (accept known-good) input validation over blocklist (block known-bad).',
    '"Fail securely / deny by default" and "least privilege" are recurring correct secure-design answers.',
  ],
  resources: [
    { label: 'Destination Certification – OWASP Top 10 & Secure Coding', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+owasp+top+10+secure+coding' },
    { label: 'Kelly Handerhan – CISSP Secure Coding & Injection', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+secure+coding+sql+injection+xss' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t9',
  overview: `Public Key Infrastructure (PKI) is the framework of hardware, software, policies, and roles that manages digital certificates and public keys so that parties who have never met can trust each other's identities. The central trust problem PKI solves: if you receive someone's public key, how do you know it truly belongs to them and not an impostor? PKI answers this with certificates issued by a trusted Certificate Authority (CA).

A digital certificate (X.509 standard) binds a public key to an identity (person, server, organization) and is digitally signed by the CA. Your system trusts the CA (its root certificate is in your trust store), so it trusts certificates the CA signs. A Registration Authority (RA) may verify identities on the CA's behalf before issuance. Certificates have validity periods and can be revoked early — checked via a Certificate Revocation List (CRL) or the real-time Online Certificate Status Protocol (OCSP).

Trust models describe how CAs relate. A hierarchical model has a root CA at the top signing subordinate CAs (a chain of trust). A mesh (cross-certification) model has CAs certify each other peer-to-peer. A bridge CA connects otherwise-separate hierarchies. The web-of-trust model (used by PGP) has no central CA — users vouch for each other's keys directly.`,
  examFraming: `(ISC)² frames PKI around trust and revocation. Know the roles: CA issues/signs certificates; RA verifies identity; the certificate binds identity to a public key. Understand that you trust a certificate because you trust the CA that signed it (chain of trust up to a trusted root). Expect questions on how to check whether a certificate is revoked — CRL (a downloadable list, can be stale) vs OCSP (real-time query). Know X.509 is the certificate standard. Distinguish the trust models, and remember PGP's web of trust has no central authority. A compromised root CA/private key undermines everything beneath it — a favorite exam scenario.`,
  keyTerms: [
    { term: 'Certificate Authority (CA)', definition: 'A trusted entity that issues and digitally signs certificates binding public keys to identities.' },
    { term: 'Registration Authority (RA)', definition: 'Verifies the identity of certificate requestors on behalf of the CA before issuance.' },
    { term: 'Digital Certificate (X.509)', definition: 'A CA-signed document binding a public key to an identity, following the X.509 standard.' },
    { term: 'Certificate Revocation List (CRL)', definition: 'A published list of certificates revoked before expiration; can become stale between updates.' },
    { term: 'OCSP', definition: 'Online Certificate Status Protocol; a real-time query to check a single certificate’s revocation status.' },
    { term: 'Root CA', definition: 'The top of a hierarchical PKI; its self-signed certificate anchors the chain of trust.' },
    { term: 'Chain of Trust', definition: 'The path from an end certificate up through subordinate CAs to a trusted root.' },
    { term: 'Web of Trust', definition: 'A decentralized trust model (e.g., PGP) where users vouch for each other’s keys without a central CA.' },
  ],
  scenario: `A user's browser connects to https://bank.example and receives the bank's certificate. The browser checks that the certificate is signed by a CA it trusts (following the chain up to a root CA already in its trust store), that the certificate's name matches the site, that it is within its validity period, and that it has not been revoked (via OCSP or CRL). If all checks pass, the browser trusts the bank's public key and establishes the encrypted session. If an attacker presented a self-signed certificate not chained to a trusted CA, the browser would warn the user. A CISSP question might ask what a browser relies on to trust the server's public key — the answer is the CA's signature and the chain of trust, not the key itself in isolation.`,
  comparisonTables: [
    {
      caption: 'CRL vs OCSP (Revocation Checking)',
      headers: ['Attribute', 'CRL', 'OCSP'],
      rows: [
        ['Mechanism', 'Downloadable list of revoked certs', 'Real-time query per certificate'],
        ['Freshness', 'Can be stale between publications', 'Current at query time'],
        ['Scalability', 'List can grow large', 'Lightweight single-cert response'],
      ],
    },
    {
      caption: 'PKI Trust Models',
      headers: ['Model', 'Structure', 'Example / Note'],
      rows: [
        ['Hierarchical', 'Root CA signs subordinate CAs (tree)', 'Most common; single trust anchor'],
        ['Mesh (cross-cert)', 'CAs certify each other peer-to-peer', 'No single root; complex to manage'],
        ['Bridge', 'A bridge CA links separate hierarchies', 'Connects distinct organizations'],
        ['Web of Trust', 'Users vouch for each other directly', 'PGP; no central CA'],
      ],
    },
  ],
  examTraps: [
    'You trust a certificate because you trust the CA that signed it (chain of trust) — not because the public key alone "looks right."',
    'CRL vs OCSP: CRL is a downloadable list (can be stale); OCSP is a real-time status check. Know which a scenario needs.',
    'The RA verifies identity; the CA issues/signs. Do not swap these roles.',
    'A compromised root CA (or its private key) invalidates trust in every certificate beneath it — a catastrophic, exam-favorite scenario.',
    'X.509 is the certificate standard; PGP uses a decentralized web of trust with no central CA.',
    'A certificate binds a public key to an identity; it does not contain or expose the private key.',
  ],
  resources: [
    { label: 'Destination Certification – PKI and Trust Models', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+pki+trust+models' },
    { label: 'Kelly Handerhan – CISSP PKI', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+pki+certificates' },
  ],
};

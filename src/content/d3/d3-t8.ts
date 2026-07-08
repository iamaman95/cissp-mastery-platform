import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t8',
  overview: `Hashing and digital signatures provide integrity and authenticity, not confidentiality. A cryptographic hash function takes input of any size and produces a fixed-length digest (fingerprint). Good hash functions are one-way (you cannot reverse the digest to recover the input), deterministic (same input always yields the same digest), and collision-resistant (it is infeasible to find two different inputs with the same digest). Common algorithms: SHA-2 (SHA-256, SHA-512) and SHA-3 are current; MD5 and SHA-1 are broken (collisions found) and must not be used for security.

Hashing alone verifies integrity but not the source. A MAC (Message Authentication Code), such as HMAC, combines a hash with a shared secret key to provide integrity plus authenticity between parties sharing that key — but not non-repudiation (both share the key).

Digital signatures add non-repudiation using asymmetric keys. To sign, the sender hashes the message and encrypts the hash with their PRIVATE key. Anyone can verify by decrypting the signature with the sender's PUBLIC key and comparing it to a freshly computed hash of the message. Because only the sender holds the private key, a valid signature proves origin (authenticity), integrity (any change breaks the hash match), and non-repudiation (the signer cannot deny it). Note the direction: signing uses the private key; verifying uses the public key — the reverse of encryption for confidentiality.`,
  examFraming: `(ISC)² tests the "which key" direction relentlessly. For a digital signature: sign with the sender's PRIVATE key, verify with the sender's PUBLIC key. (For confidentiality encryption it is the opposite: encrypt with the recipient's public key, decrypt with their private key.) Know that hashing provides integrity only; a digital signature provides integrity + authenticity + non-repudiation; a MAC/HMAC provides integrity + authenticity but NOT non-repudiation. Remember MD5 and SHA-1 are broken (collision attacks) and that a hash is not encryption. Watch birthday-attack framing (finding any collision is easier than a specific preimage).`,
  keyTerms: [
    { term: 'Hash / Digest', definition: 'A fixed-length fingerprint of input data produced by a one-way hash function.' },
    { term: 'Collision Resistance', definition: 'The property that it is infeasible to find two different inputs producing the same hash.' },
    { term: 'SHA-2 / SHA-3', definition: 'Current secure hash families (e.g., SHA-256, SHA-512); recommended over MD5/SHA-1.' },
    { term: 'MD5 / SHA-1', definition: 'Legacy hashes now broken by collision attacks; must not be used for security.' },
    { term: 'MAC / HMAC', definition: 'A keyed hash providing integrity and authenticity between parties sharing a secret key (no non-repudiation).' },
    { term: 'Digital Signature', definition: 'A hash encrypted with the sender’s private key; provides integrity, authenticity, and non-repudiation.' },
    { term: 'Non-repudiation', definition: 'Assurance that a signer cannot deny having signed, achievable via asymmetric digital signatures.' },
    { term: 'Birthday Attack', definition: 'An attack exploiting the math of collisions, making it easier to find any two colliding inputs than a specific preimage.' },
  ],
  scenario: `Alice sends Bob a contract and wants Bob (and a court) to be certain it came from her and was not altered. Alice computes a SHA-256 hash of the contract and encrypts that hash with her private key — this is her digital signature, attached to the document. Bob verifies by decrypting the signature with Alice's public key to recover the original hash, then independently hashes the received contract; if the two hashes match, Bob knows the contract is unaltered (integrity) and truly from Alice (authenticity), and Alice cannot later deny signing (non-repudiation), because only she holds her private key. A CISSP question may try to trick you by saying Alice signed with her public key — that is wrong; signing uses the private key.`,
  comparisonTables: [
    {
      caption: 'Hash vs MAC vs Digital Signature',
      headers: ['Mechanism', 'Keys Used', 'Services Provided'],
      rows: [
        ['Hash (e.g., SHA-256)', 'None', 'Integrity only'],
        ['MAC / HMAC', 'Shared secret key', 'Integrity + authenticity (no non-repudiation)'],
        ['Digital Signature', 'Sender private (sign) / public (verify)', 'Integrity + authenticity + non-repudiation'],
      ],
    },
    {
      caption: 'Which Key for Which Operation',
      headers: ['Goal', 'Sender/Actor Uses', 'Recipient/Verifier Uses'],
      rows: [
        ['Confidentiality (encrypt)', "Recipient's PUBLIC key", "Recipient's PRIVATE key"],
        ['Digital signature (sign)', "Sender's PRIVATE key", "Sender's PUBLIC key"],
      ],
    },
  ],
  examTraps: [
    'Sign with the PRIVATE key, verify with the PUBLIC key — the reverse of confidentiality encryption. This direction is the #1 exam trap.',
    'Hashing provides integrity ONLY — not confidentiality and not authenticity by itself.',
    'A MAC/HMAC gives integrity + authenticity but NOT non-repudiation (shared key); only asymmetric signatures give non-repudiation.',
    'MD5 and SHA-1 are broken by collision attacks — choosing them as "secure" is wrong.',
    'A hash is not encryption; it is one-way and cannot be reversed to recover the original data.',
    'A digital signature does not by itself encrypt/hide the message — it authenticates it; confidentiality needs separate encryption.',
  ],
  resources: [
    { label: 'Destination Certification – Hashing and Digital Signatures', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+hashing+digital+signatures' },
    { label: 'Kelly Handerhan – CISSP Digital Signatures', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+digital+signatures+hashing' },
  ],
};

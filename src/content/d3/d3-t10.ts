import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t10',
  overview: `Key management is the full lifecycle handling of cryptographic keys — and it is where most real-world cryptographic systems actually fail. A strong algorithm like AES-256 is worthless if its key is generated poorly, stored insecurely, or never rotated. The key lifecycle spans generation, distribution/exchange, storage, use, rotation, revocation/destruction, and (optionally) escrow/recovery.

Keys should be generated using a strong random source (a cryptographically secure RNG), sized appropriately for the algorithm, and kept secret. Distribution must be secure — symmetric keys are often exchanged using asymmetric encryption or protocols like Diffie-Hellman. For high assurance, keys are stored and used inside a Hardware Security Module (HSM) — tamper-resistant hardware that generates, stores, and uses keys without exposing them. Keys should be rotated periodically to limit exposure if one is compromised, and securely destroyed at end of life.

Two related concepts appear on the exam. Key escrow stores a copy of keys with a trusted third party so data can be recovered (e.g., for lawful access or business continuity) — useful but a risk if the escrow is compromised. The M of N control (split knowledge / dual control) requires several of a set of custodians to combine their key shares to reconstruct or use a key, preventing any single person from controlling it.`,
  examFraming: `(ISC)² emphasizes that the security of a cryptosystem depends on protecting the key, not hiding the algorithm (Kerckhoffs's principle — assume the algorithm is public). Expect scenarios about: secure key storage (HSM), why keys must be rotated, the danger of hard-coded or reused keys, and split-knowledge/dual-control (M of N) for high-value keys like a root CA. Understand key escrow's trade-off (recovery capability vs. added risk). Know that a compromised key requires revocation and re-keying, and that private keys must never be shared or transmitted in the clear.`,
  keyTerms: [
    { term: 'Key Lifecycle', definition: 'The stages a key passes through: generation, distribution, storage, use, rotation, and destruction.' },
    { term: 'HSM (Hardware Security Module)', definition: 'Tamper-resistant hardware that generates, stores, and uses keys without exposing them.' },
    { term: 'Key Rotation', definition: 'Periodically replacing keys to limit exposure if a key is compromised.' },
    { term: 'Key Escrow', definition: 'Storing a copy of keys with a trusted party to enable recovery or lawful access.' },
    { term: 'Split Knowledge / Dual Control', definition: 'Dividing key control so multiple people are required to use or reconstruct a key.' },
    { term: 'M of N Control', definition: 'A scheme where any M of N custodians must combine shares to recover/use a key.' },
    { term: 'Kerckhoffs’s Principle', definition: 'A cryptosystem should be secure even if everything except the key is public knowledge.' },
    { term: 'Key Destruction', definition: 'Securely and irreversibly eliminating a key (and copies) at end of life.' },
  ],
  scenario: `A company protects its most valuable asset — the private key of its internal root CA. To prevent any single administrator from misusing it, they store it in an HSM and apply an M of N control: the key can only be activated when 3 of 5 designated custodians present their smart cards together (split knowledge and dual control). They rotate subordinate keys annually, keep an escrowed backup of encryption keys in a separate secured facility so data can be recovered if a key is lost, and have a documented procedure to revoke and re-key if compromise is suspected. A CISSP question might ask how to prevent one insider from abusing a critical key — the answer is split knowledge / dual control (M of N), not simply "trust the admin."`,
  comparisonTables: [
    {
      caption: 'Key Management Controls and Their Purpose',
      headers: ['Control', 'Purpose'],
      rows: [
        ['HSM', 'Tamper-resistant generation/storage/use so keys are never exposed'],
        ['Key rotation', 'Limit the exposure window if a key is compromised'],
        ['Key escrow', 'Enable recovery/lawful access to encrypted data'],
        ['Split knowledge / M of N', 'Prevent any single custodian from controlling a critical key'],
        ['Revocation + re-keying', 'Respond to a suspected or actual key compromise'],
      ],
    },
  ],
  examTraps: [
    'Security depends on protecting the KEY, not on keeping the algorithm secret (Kerckhoffs’s principle) — "security through obscurity" of the algorithm is a wrong answer.',
    'Private keys must never be shared, hard-coded, or transmitted in the clear; a hard-coded key in source code is a classic failure.',
    'Key escrow enables recovery but adds risk (the escrow becomes a high-value target) — know the trade-off.',
    'Split knowledge/dual control (M of N) prevents a single insider from misusing a critical key — the right answer when the concern is one person’s abuse.',
    'A compromised key requires revocation and re-keying, not merely changing the algorithm.',
    'An HSM protects keys by never exposing them outside tamper-resistant hardware — do not confuse it with ordinary disk storage.',
  ],
  resources: [
    { label: 'Destination Certification – Key Management', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+key+management' },
    { label: 'Kelly Handerhan – CISSP Cryptographic Key Management', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+key+management+hsm' },
  ],
};

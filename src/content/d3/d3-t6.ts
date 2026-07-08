import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t6',
  overview: `Symmetric encryption uses a single shared secret key for both encryption and decryption. It is fast and efficient, making it the workhorse for encrypting bulk data (files, disks, network sessions). Its central challenge is key distribution: both parties must securely share the same secret key beforehand, and the number of keys required grows quadratically with the number of participants — n(n-1)/2 keys for n people — which is why symmetric crypto is often paired with asymmetric crypto for key exchange.

The dominant modern symmetric algorithm is AES (Advanced Encryption Standard), a block cipher with a 128-bit block size and key lengths of 128, 192, or 256 bits. AES replaced DES (56-bit key, now insecure) and 3DES (Triple DES, which applies DES three times but is deprecated). Other symmetric ciphers include Blowfish, Twofish, RC4 (a stream cipher, now considered insecure), and ChaCha20.

Symmetric ciphers come in two forms: block ciphers (encrypt fixed-size blocks, e.g., AES's 128-bit blocks) and stream ciphers (encrypt data bit/byte at a time, e.g., RC4, ChaCha20). Block ciphers operate in modes such as ECB (insecure — identical plaintext blocks yield identical ciphertext), CBC, CTR, and authenticated modes like GCM that also provide integrity.`,
  examFraming: `(ISC)² expects you to know the defining trade-off: symmetric is fast and good for bulk data but has a hard key-distribution/scaling problem, whereas asymmetric solves distribution but is slow. Memorize AES specifics (128-bit block; 128/192/256-bit keys) and that DES (56-bit) is broken. Expect questions contrasting block vs stream ciphers, flagging ECB mode as insecure (patterns leak), and testing the n(n-1)/2 key-count formula. Also know that symmetric crypto provides confidentiality but not, by itself, non-repudiation (both parties share the same key, so neither can prove the other did something).`,
  keyTerms: [
    { term: 'Symmetric Key', definition: 'A single secret key shared by both parties, used for both encryption and decryption.' },
    { term: 'AES', definition: 'Advanced Encryption Standard; a block cipher with a 128-bit block and 128/192/256-bit keys — the modern standard.' },
    { term: 'DES / 3DES', definition: 'Legacy symmetric ciphers; DES (56-bit key) is broken, and 3DES is deprecated.' },
    { term: 'Block Cipher', definition: 'Encrypts fixed-size blocks of data (e.g., AES 128-bit blocks) using a mode of operation.' },
    { term: 'Stream Cipher', definition: 'Encrypts data one bit/byte at a time (e.g., ChaCha20; RC4 is now insecure).' },
    { term: 'Mode of Operation', definition: 'How a block cipher processes multiple blocks (ECB, CBC, CTR, GCM); ECB is insecure.' },
    { term: 'Key Distribution Problem', definition: 'The difficulty of securely sharing the secret key; symmetric needs n(n-1)/2 keys for n users.' },
    { term: 'GCM', definition: 'Galois/Counter Mode; an authenticated encryption mode providing both confidentiality and integrity.' },
  ],
  scenario: `A company needs to encrypt terabytes of nightly database backups quickly. It chooses AES-256 (a symmetric block cipher) because symmetric encryption is fast enough for large volumes, whereas asymmetric encryption would be far too slow for that data size. To share the AES key with the offsite backup service, the company does not send the symmetric key in the clear — instead it uses asymmetric encryption (the recipient's public key) to protect the AES key in transit, then the bulk data is encrypted symmetrically. This hybrid pattern (asymmetric to exchange the key, symmetric for bulk data) is exactly what CISSP wants you to recognize: use each cipher family for what it does best.`,
  comparisonTables: [
    {
      caption: 'Symmetric vs Asymmetric Encryption',
      headers: ['Attribute', 'Symmetric', 'Asymmetric'],
      rows: [
        ['Keys', 'One shared secret key', 'Public/private key pair'],
        ['Speed', 'Fast (bulk data)', 'Slow (small data / key exchange)'],
        ['Key distribution', 'Hard — must pre-share secret', 'Easier — public key is shareable'],
        ['Scaling (n users)', 'n(n-1)/2 keys', '2n keys (one pair each)'],
        ['Provides', 'Confidentiality', 'Confidentiality, plus non-repudiation via signatures'],
      ],
    },
    {
      caption: 'Common Symmetric Algorithms',
      headers: ['Algorithm', 'Type', 'Status'],
      rows: [
        ['AES (128/192/256-bit)', 'Block (128-bit block)', 'Current standard — secure'],
        ['3DES', 'Block', 'Deprecated'],
        ['DES (56-bit)', 'Block', 'Broken — do not use'],
        ['RC4', 'Stream', 'Insecure — do not use'],
        ['ChaCha20', 'Stream', 'Modern, secure'],
      ],
    },
  ],
  examTraps: [
    'Symmetric = one shared key (fast, bulk data); do not confuse with asymmetric’s public/private pair.',
    'AES uses a 128-bit block with 128/192/256-bit key options — a common trap offers plausible-but-wrong numbers (e.g., "256-bit block").',
    'DES (56-bit) is broken and 3DES is deprecated; picking DES as "secure" is a trap.',
    'ECB mode is insecure because identical plaintext blocks produce identical ciphertext, leaking patterns — prefer CBC/CTR/GCM.',
    'Symmetric encryption alone does NOT provide non-repudiation, since both parties hold the same key.',
    'The symmetric key-distribution problem scales as n(n-1)/2 — this is why hybrid (asymmetric key exchange + symmetric bulk) is used.',
  ],
  resources: [
    { label: 'Destination Certification – Symmetric Cryptography', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+symmetric+encryption+aes' },
    { label: 'Kelly Handerhan – CISSP Cryptography Symmetric', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+symmetric+cryptography' },
  ],
};

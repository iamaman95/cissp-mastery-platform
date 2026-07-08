import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t7',
  overview: `Asymmetric cryptography solves the fundamental problem that symmetric cryptography cannot: how two parties who have never met can establish a shared secret over an insecure channel. Each participant holds a mathematically linked key pair — a public key that can be freely distributed and a private key that must never be shared. Data encrypted with one key of the pair can only be decrypted with the other. This single property enables confidentiality (encrypt with the recipient's public key so only their private key can open it), authentication and non-repudiation (sign with your own private key so anyone can verify with your public key), and secure key exchange.

The security of asymmetric algorithms rests on "trapdoor" one-way mathematical problems that are easy to compute in one direction but computationally infeasible to reverse without the private key. RSA relies on the difficulty of factoring the product of two large primes. Diffie-Hellman and ElGamal rely on the discrete logarithm problem. Elliptic Curve Cryptography (ECC) relies on the elliptic curve discrete logarithm problem, which is harder per bit — so ECC achieves equivalent security to RSA with dramatically smaller keys (a 256-bit ECC key is roughly comparable to a 3072-bit RSA key), making it the preferred choice for mobile and constrained devices.

Asymmetric cryptography is far slower than symmetric cryptography — often by two to three orders of magnitude. For this reason, real-world protocols (TLS, PGP, S/MIME) use a hybrid approach: asymmetric cryptography is used only to authenticate parties and to securely exchange or agree on a symmetric session key, after which the fast symmetric algorithm (e.g., AES) does the bulk data encryption. Diffie-Hellman specifically is a key agreement protocol — it lets two parties derive a shared secret without ever transmitting it, and its ephemeral variants (DHE/ECDHE) provide perfect forward secrecy, meaning compromise of a long-term private key does not retroactively expose past session traffic.`,
  examFraming: `(ISC)² expects you to reason about which key performs which operation, because reversing this is the single most common crypto mistake. For confidentiality you encrypt with the RECIPIENT'S PUBLIC key (only their private key decrypts). For a digital signature you sign with YOUR OWN PRIVATE key (anyone verifies with your public key). Expect scenario questions where a described goal (secrecy vs. proof of origin) must be mapped to the correct key. You should also know the hard problem behind each algorithm (RSA = integer factorization; Diffie-Hellman/ElGamal = discrete logarithm; ECC = elliptic curve discrete logarithm), why ECC is chosen for constrained devices (smaller keys, same strength), and that Diffie-Hellman provides key AGREEMENT — not encryption and not authentication by itself, which is why unauthenticated DH is vulnerable to a man-in-the-middle attack. Recognize the hybrid pattern: asymmetric establishes/exchanges a symmetric session key, symmetric encrypts the data.`,
  keyTerms: [
    { term: 'Public/Private Key Pair', definition: 'Two mathematically linked keys where the public key is freely shared and the private key is kept secret; data encrypted with one can only be reversed with the other.' },
    { term: 'RSA', definition: 'An asymmetric algorithm (Rivest-Shamir-Adleman) whose security depends on the computational difficulty of factoring the product of two large prime numbers; common key sizes are 2048 and 3072 bits.' },
    { term: 'Diffie-Hellman', definition: 'A key agreement protocol that lets two parties derive a shared secret over an insecure channel using the discrete logarithm problem; it exchanges no secret directly and by itself provides neither authentication nor bulk encryption.' },
    { term: 'Elliptic Curve Cryptography (ECC)', definition: 'Asymmetric cryptography based on the elliptic curve discrete logarithm problem, providing equivalent security to RSA with much smaller keys (e.g., 256-bit ECC ~ 3072-bit RSA), ideal for mobile and IoT devices.' },
    { term: 'ElGamal', definition: 'An asymmetric encryption and signature algorithm based on the Diffie-Hellman discrete logarithm problem; notable for producing ciphertext roughly twice the size of the plaintext.' },
    { term: 'Perfect Forward Secrecy (PFS)', definition: 'A property of ephemeral key exchange (DHE/ECDHE) ensuring that compromise of a long-term private key does not allow decryption of previously recorded session traffic, because each session uses a fresh, discarded key.' },
    { term: 'Hybrid Cryptosystem', definition: 'A design in which slow asymmetric cryptography is used only to authenticate parties and exchange a symmetric session key, and fast symmetric cryptography (e.g., AES) encrypts the actual data.' },
    { term: 'Man-in-the-Middle (MITM) on DH', definition: 'An attack where, because plain Diffie-Hellman lacks authentication, an interposed attacker negotiates separate shared secrets with each party; mitigated by authenticating the exchange (e.g., signing DH parameters).' },
  ],
  scenario: `A software company is building a secure messaging feature. Two users who have never communicated must exchange messages that remain confidential and provably originate from the sender. The engineers decide that when Alice sends Bob a message, the app encrypts the message body with a freshly generated AES-256 session key; that session key is itself encrypted with Bob's RSA public key so only Bob's private key can recover it. To prove authorship, Alice computes a hash of the message and signs that hash with her own private key, letting Bob verify authenticity and integrity with Alice's public key.

To achieve perfect forward secrecy, a later revision replaces the static RSA key transport with an ECDHE (ephemeral Elliptic Curve Diffie-Hellman) exchange to agree on the session key, and signs the ephemeral DH parameters with each party's long-term key to prevent a man-in-the-middle attack. A CISSP-style question here tests whether you can identify that DH provides the key agreement (not encryption), that the signature uses the sender's PRIVATE key, that confidentiality of the session key uses the recipient's PUBLIC key, and that the ephemeral exchange is what delivers forward secrecy.`,
  comparisonTables: [
    {
      caption: 'Symmetric vs. Asymmetric Cryptography',
      headers: ['Attribute', 'Symmetric', 'Asymmetric'],
      rows: [
        ['Keys used', 'One shared secret key for encrypt and decrypt', 'Mathematically linked public/private key pair'],
        ['Speed', 'Very fast (bulk data encryption)', 'Slow (100x-1000x slower); used for key exchange/signatures'],
        ['Key distribution problem', 'Hard — the shared key must be securely delivered out-of-band', 'Solved — public keys can be distributed openly'],
        ['Number of keys for n users', 'n(n-1)/2 keys (scales poorly)', '2n keys — one pair per user (scales well)'],
        ['Provides non-repudiation', 'No (both parties share the same key)', 'Yes (private key is unique to the signer)'],
        ['Typical algorithms & key sizes', 'AES (128/192/256-bit), 3DES', 'RSA (2048/3072-bit), ECC (256/384-bit), Diffie-Hellman'],
      ],
    },
    {
      caption: 'Asymmetric Algorithms and Their Hard Problems',
      headers: ['Algorithm', 'Underlying Hard Problem', 'Primary Use', 'Note'],
      rows: [
        ['RSA', 'Integer factorization of large primes', 'Encryption, key transport, signatures', 'Most widely deployed; larger keys needed than ECC'],
        ['Diffie-Hellman', 'Discrete logarithm', 'Key agreement only', 'No authentication by itself; vulnerable to MITM if unauthenticated'],
        ['ElGamal', 'Discrete logarithm', 'Encryption and signatures', 'Ciphertext roughly doubles plaintext size'],
        ['ECC (ECDH/ECDSA)', 'Elliptic curve discrete logarithm', 'Key agreement and signatures', 'Same strength as RSA at far smaller key sizes'],
      ],
    },
  ],
  examTraps: [
    `Confidentiality uses the RECIPIENT'S PUBLIC key; a signature uses the SENDER'S PRIVATE key. Reversing which key does what is the most common asymmetric-crypto exam error.`,
    `Diffie-Hellman is key AGREEMENT, not encryption — it establishes a shared secret and by itself provides no authentication, so plain DH is vulnerable to man-in-the-middle attacks.`,
    `ECC is not "more secure" than RSA at equal key size in an absolute sense — it delivers equivalent strength with much smaller keys, which is why it suits mobile/IoT; don't equate small key size with weakness.`,
    `Asymmetric cryptography is not used to bulk-encrypt large data — it is too slow; real systems use a hybrid model where asymmetric only protects/exchanges a symmetric session key.`,
    `Perfect forward secrecy comes specifically from EPHEMERAL exchanges (DHE/ECDHE), not from static RSA key transport — recording traffic then stealing the long-term key breaks non-ephemeral schemes.`,
  ],
  resources: [
    { label: 'Destination Certification – Asymmetric Encryption', url: 'https://www.youtube.com/results?search_query=destination+certification+asymmetric+encryption+cissp' },
    { label: 'Computerphile – Diffie-Hellman Key Exchange', url: 'https://www.youtube.com/results?search_query=computerphile+diffie+hellman+key+exchange' },
  ],
};

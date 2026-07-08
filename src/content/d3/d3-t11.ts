import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t11',
  overview: `Cryptanalysis is the study of breaking cryptographic systems — recovering plaintext or keys without being given them. CISSP does not require you to perform these attacks, but you must recognize them by their defining characteristic (what the attacker has access to) and know the basic defenses.

Classic attacks are categorized by what the attacker possesses. Ciphertext-only: the attacker has only ciphertext and tries to deduce the key/plaintext (the weakest position). Known-plaintext: the attacker has some plaintext-ciphertext pairs. Chosen-plaintext: the attacker can encrypt plaintexts of their choosing and observe the output. Chosen-ciphertext: the attacker can submit ciphertexts to be decrypted and observe results. A meet-in-the-middle attack targets constructions that encrypt twice (why 2DES gains little over DES). A birthday attack exploits collision probability against hash functions.

Other important categories: Brute-force tries every possible key (defeated by sufficient key length). Dictionary and rainbow-table attacks target password hashes (defeated by salting and slow hashing). Side-channel attacks (timing, power analysis, electromagnetic emanations, acoustic) extract secrets from a system's physical behavior rather than the math. Implementation attacks exploit bugs in how crypto is coded, not the algorithm itself. Social engineering and rubber-hose "attacks" bypass the math entirely by targeting people.`,
  examFraming: `(ISC)² tests recognition: given a description of what the attacker can do, name the attack. "Attacker can choose inputs to encrypt" = chosen-plaintext; "attacker only has ciphertext" = ciphertext-only; "attacker measures how long operations take to infer the key" = side-channel (timing). Know that brute force is beaten by longer keys, rainbow tables by salting, and that side-channel attacks bypass mathematical strength by attacking the implementation/hardware. Remember that a strong algorithm can still be defeated through weak keys, poor implementation, or side channels — the math being sound is necessary but not sufficient.`,
  keyTerms: [
    { term: 'Ciphertext-Only Attack', definition: 'The attacker has only ciphertext and attempts to recover key/plaintext — the weakest attacker position.' },
    { term: 'Known-Plaintext Attack', definition: 'The attacker has one or more plaintext-ciphertext pairs to analyze.' },
    { term: 'Chosen-Plaintext Attack', definition: 'The attacker can encrypt plaintexts of their choice and observe the ciphertext.' },
    { term: 'Chosen-Ciphertext Attack', definition: 'The attacker can submit ciphertexts for decryption and observe the results.' },
    { term: 'Brute-Force Attack', definition: 'Trying every possible key; defeated by sufficient key length.' },
    { term: 'Rainbow Table Attack', definition: 'Using precomputed hash tables to reverse unsalted password hashes; defeated by salting.' },
    { term: 'Side-Channel Attack', definition: 'Extracting secrets from physical leakage (timing, power, EM, acoustic) rather than the algorithm.' },
    { term: 'Meet-in-the-Middle', definition: 'An attack on double-encryption schemes that greatly reduces effective key strength.' },
  ],
  scenario: `A security researcher tests a smart card that performs RSA operations. Instead of attacking RSA's math (infeasible), the researcher measures tiny variations in the card's power consumption and operation timing while it uses the private key, and from those physical measurements reconstructs the key. No mathematical weakness was exploited — this is a side-channel attack (power analysis / timing). The defense is not a stronger algorithm but implementation hardening: constant-time operations, power-analysis countermeasures, and tamper-resistant hardware. A CISSP question might describe "an attacker recovers a key by analyzing timing and power draw" and ask for the attack category — the answer is side-channel, not brute force or chosen-plaintext.`,
  comparisonTables: [
    {
      caption: 'Cryptanalytic Attacks by Attacker Capability',
      headers: ['Attack', 'Attacker Has / Can Do', 'Typical Defense'],
      rows: [
        ['Ciphertext-only', 'Only ciphertext', 'Strong modern ciphers'],
        ['Known-plaintext', 'Plaintext-ciphertext pairs', 'Strong modern ciphers'],
        ['Chosen-plaintext', 'Encrypt chosen inputs', 'Randomized/authenticated encryption'],
        ['Chosen-ciphertext', 'Decrypt chosen ciphertexts', 'Authenticated encryption, padding-attack resistance'],
        ['Brute-force', 'Try all keys', 'Sufficient key length'],
        ['Rainbow table', 'Precomputed hash lookups', 'Salting + slow hashing'],
        ['Side-channel', 'Measure timing/power/EM', 'Constant-time code, hardware countermeasures'],
      ],
    },
  ],
  examTraps: [
    'Identify the attack by what the attacker HAS: only ciphertext = ciphertext-only; chosen inputs to encrypt = chosen-plaintext; timing/power measurement = side-channel.',
    'Brute force is defeated by longer keys; rainbow tables by salting — match the defense to the attack.',
    'Side-channel attacks bypass mathematical strength by exploiting implementation/hardware leakage — a strong algorithm does not protect against them.',
    'Meet-in-the-middle is why double DES (2DES) provides little added strength over DES.',
    'A sound algorithm can still be broken via weak keys, poor implementation, or side channels — math strength is necessary but not sufficient.',
    'Do not confuse chosen-plaintext (attacker encrypts) with chosen-ciphertext (attacker decrypts) — the direction matters.',
  ],
  resources: [
    { label: 'Destination Certification – Cryptanalytic Attacks', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+cryptanalytic+attacks' },
    { label: 'Kelly Handerhan – CISSP Cryptanalysis and Attacks', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+cryptanalysis+attacks' },
  ],
};

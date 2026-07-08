import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t2',
  overview: `The CIA Triad — Confidentiality, Integrity, and Availability — is the foundation every other security control in CISSP traces back to. Confidentiality means information is disclosed only to authorized parties. Integrity means information (and systems) are accurate, complete, and haven't been altered by unauthorized parties. Availability means authorized users can access information and systems when needed.

Beyond CIA, CISSP also expects you to know the complementary concepts: Authenticity (data/communications really come from the claimed source), Non-repudiation (a party cannot deny having performed an action), and the "DAD" triad (Disclosure, Alteration, Destruction) which represents the negative outcomes CIA is designed to prevent.`,
  examFraming: `(ISC)² wants you to be able to classify a described failure (e.g. "a competitor read our unreleased pricing sheet") as a violation of a specific CIA element, and then reason about which control category (preventive, detective, corrective) addresses it. Questions rarely ask "define confidentiality" — they describe a scenario and ask which principle was violated or which control best protects it. Also expect trade-off questions: hardening for confidentiality (e.g. aggressive encryption/access control) can reduce availability, and CISSP wants you to recognize that security is a balance across all three legs, not a maximization of any single one.`,
  keyTerms: [
    { term: 'Confidentiality', definition: 'Ensuring information is not disclosed to unauthorized individuals, entities, or processes.' },
    { term: 'Integrity', definition: 'Ensuring information and systems remain accurate, complete, and unaltered except by authorized action.' },
    { term: 'Availability', definition: 'Ensuring authorized users have timely, reliable access to information and systems.' },
    { term: 'Authenticity', definition: 'Assurance that data, transactions, or communications are genuine and from the claimed source.' },
    { term: 'Non-repudiation', definition: 'A guarantee that a party cannot later deny having performed an action (e.g. sending a message, approving a transaction).' },
    { term: 'DAD Triad', definition: 'Disclosure, Alteration, Destruction — the three negative outcomes that confidentiality, integrity, and availability controls respectively defend against.' },
  ],
  scenario: `A hospital's patient records database is hit by ransomware that encrypts all files. Patient data is not stolen or altered — it is simply inaccessible until a ransom is paid or backups are restored. Doctors cannot pull up patient histories, delaying care.

Which leg of the CIA triad was primarily violated? Availability — the data's confidentiality and integrity are technically intact (nothing was read or changed by the attacker beyond encryption), but authorized users cannot access it when needed. A CISSP-style question would test whether you correctly identify availability as the primary impact rather than defaulting to "confidentiality" just because the word "breach" appears in the scenario.`,
  comparisonTables: [
    {
      caption: 'CIA Triad vs. the DAD Triad (attacker objective vs. defensive goal)',
      headers: ['Defensive Goal (CIA)', 'Attacker Objective It Defeats (DAD)', 'Example Control'],
      rows: [
        ['Confidentiality', 'Disclosure', 'Encryption at rest, access control lists'],
        ['Integrity', 'Alteration', 'Hashing, digital signatures, change control'],
        ['Availability', 'Destruction (or denial of access)', 'Redundancy, backups, DDoS mitigation'],
      ],
    },
  ],
  examTraps: [
    `"Breach" language does not automatically mean a confidentiality violation — read for what actually happened (was data read, changed, or made unavailable?).`,
    `Ransomware scenarios are usually availability violations, not confidentiality violations, unless the question states data was also exfiltrated.`,
    `Non-repudiation is not part of the core CIA triad — don't select it when a question asks "which of the three" and lists it as a distractor for "integrity."`,
    `Over-indexing on confidentiality (e.g., excessive encryption/lockdown) can itself cause an availability failure — CISSP expects you to see this trade-off, not treat more security as strictly better.`,
  ],
  resources: [
    { label: 'Destination Certification – CIA Triad Explained', url: 'https://www.youtube.com/results?search_query=destination+certification+cia+triad' },
    { label: 'Kelly Handerhan – Security Concepts Overview', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+cia+triad' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t5',
  overview: `Legal and regulatory compliance is one of the fastest-growing areas of CISSP Domain 1 because organizations now operate across overlapping, sometimes conflicting, legal regimes. The GDPR (EU General Data Protection Regulation) established the modern template for data protection law: it defines roles (controller vs. processor), lawful bases for processing personal data, individual rights (access, erasure, portability, objection), and a strict 72-hour breach notification clock to the supervisory authority. India's DPDP Act (Digital Personal Data Protection Act, 2023) is a newer, related framework using its own vocabulary — Data Principal (the individual), Data Fiduciary (the organization determining purpose/means of processing, analogous to a controller), and a Consent Manager as a registered intermediary managing consent on the Principal's behalf, with a Data Protection Board of India as the enforcement/adjudication body.

PCI-DSS (Payment Card Industry Data Security Standard) is different in kind — it is not government law but a contractual/industry standard imposed by the payment card brands (Visa, Mastercard, etc.) on any entity that stores, processes, or transmits cardholder data, regardless of transaction volume. It is built around 12 core requirements grouped into six control objectives, and compliance validation scales with transaction volume via Self-Assessment Questionnaires (SAQs) or a Report on Compliance (RoC) performed by a Qualified Security Assessor (QSA) for the largest merchants.

Intellectual property (IP) law rounds out this topic: patents protect novel inventions/processes (time-limited, requires disclosure), copyrights protect original creative/expressive works (including software source code), trademarks protect brand identifiers (names, logos) that distinguish goods/services in commerce, and trade secrets protect confidential business information (like the Coca-Cola formula) for as long as reasonable secrecy measures are maintained — with no registration and no expiration, but also no protection if independently discovered or reverse-engineered legally.

CISSP expects candidates to recognize which legal regime applies to a given fact pattern, distinguish overlapping-but-distinct obligations (e.g., GDPR data subject rights vs. PCI-DSS cardholder data protection vs. a trade secret's confidentiality requirement), and understand that these are compliance floors, not security ceilings — an organization can be "compliant" and still be insecure, and vice versa.`,
  examFraming: `(ISC)² tests this domain by giving you a fact pattern (a company processes EU residents' data, or stores credit card numbers, or invents a novel algorithm) and asking which law/standard applies, which role a party occupies (controller vs. processor; Data Fiduciary vs. Data Principal), or what obligation is triggered (e.g., breach notification timeline, right to erasure, PCI SAQ type). Expect scenario questions that test jurisdiction and scope — GDPR applies based on whose data is processed (EU residents) and can apply to non-EU companies; PCI-DSS applies based on whether cardholder data touches a system, regardless of company size or industry. Also expect trap questions distinguishing a regulatory/legal requirement (which is externally mandated and often carries fines/legal liability) from an internal policy choice (which the organization can revise unilaterally). For IP law, expect "which protection mechanism fits this asset" questions — recognizing that source code can be protected by both copyright AND trade secret simultaneously, but a publicly disclosed algorithm can only rely on patent, not trade secret.`,
  keyTerms: [
    { term: 'Data Controller (GDPR)', definition: 'The entity that determines the purposes and means of processing personal data; bears primary compliance responsibility under GDPR.' },
    { term: 'Data Processor (GDPR)', definition: 'An entity that processes personal data on behalf of, and under the instructions of, a data controller.' },
    { term: 'Data Fiduciary (DPDP)', definition: "India's DPDP Act term, roughly analogous to a GDPR controller — the entity that determines the purpose and means of processing a Data Principal's personal data." },
    { term: 'Consent Manager (DPDP)', definition: 'A registered, interoperable platform under the DPDP Act through which a Data Principal can give, manage, review, and withdraw consent across multiple Data Fiduciaries.' },
    { term: '72-Hour Breach Notification', definition: "GDPR's requirement that a controller notify the relevant supervisory authority within 72 hours of becoming aware of a personal data breach, unless unlikely to result in risk to individuals." },
    { term: 'Cardholder Data Environment (CDE)', definition: 'The people, processes, and technology that store, process, or transmit cardholder data or sensitive authentication data, defining the scope of PCI-DSS assessment.' },
    { term: 'Trade Secret', definition: 'Confidential business information that provides a competitive edge, protected indefinitely as long as reasonable secrecy measures are maintained, but unprotected if independently discovered or reverse-engineered.' },
    { term: 'Patent', definition: 'A time-limited (typically 20 years) government-granted exclusive right to a novel, non-obvious invention, in exchange for public disclosure of how it works.' },
  ],
  scenario: `A SaaS company headquartered in the U.S. sells subscription software to customers in Germany and France, and separately processes credit card payments for all customers globally. Because it processes personal data of EU residents, GDPR applies extraterritorially — the company must appoint an EU representative, honor data subject rights (access, erasure, portability), and report qualifying breaches to the relevant EU supervisory authority within 72 hours. Because it also stores and transmits cardholder data, PCI-DSS applies independently of GDPR, requiring it to scope its cardholder data environment, encrypt cardholder data in transit and at rest, and complete an SAQ or RoC based on transaction volume. If the company's engineering team also develops a novel, undisclosed fraud-detection algorithm and keeps it confidential rather than patenting it, that algorithm may be protected as a trade secret — but only for as long as the company keeps it secret; if a competitor reverse-engineers it through lawful means, trade secret protection offers no recourse. A CISSP candidate must recognize that these three obligations (GDPR, PCI-DSS, trade secret protection) are independent, can apply simultaneously to the same company, and are not satisfied by a single unified control set.`,
  comparisonTables: [
    {
      caption: 'GDPR vs. DPDP Act (2023) — Key Role and Concept Mapping',
      headers: ['GDPR (EU)', 'DPDP Act (India)', 'Notes'],
      rows: [
        ['Data Subject', 'Data Principal', 'The individual whose personal data is processed.'],
        ['Data Controller', 'Data Fiduciary', 'Entity determining purpose/means of processing.'],
        ['Data Processor', 'Data Processor', 'Processes data on behalf of the controller/fiduciary; term used in both frameworks.'],
        ['Supervisory Authority (per member state)', 'Data Protection Board of India', 'Enforcement/adjudication body.'],
        ['No direct equivalent', 'Consent Manager', 'DPDP introduces a registered intermediary to manage consent across fiduciaries; GDPR has no direct equivalent.'],
        ['72-hour breach notification to supervisory authority', 'Breach notification required, timelines per Board rules', 'Both require breach notification; DPDP defers precise timing detail to subordinate rules/Board direction.'],
      ],
    },
    {
      caption: 'Intellectual Property Protection Mechanisms',
      headers: ['Mechanism', 'Protects', 'Duration', 'Requires Disclosure/Registration?'],
      rows: [
        ['Patent', 'Novel, non-obvious inventions or processes', 'Time-limited (~20 years)', 'Yes — full disclosure required, formal registration/examination'],
        ['Copyright', 'Original creative/expressive works (incl. software source code)', 'Life of author + extended term (varies by jurisdiction)', 'Automatic upon creation; registration strengthens enforcement but is not required'],
        ['Trademark', 'Brand identifiers (names, logos, slogans) distinguishing goods/services', 'Indefinite, renewable, as long as used in commerce', 'Registration strengthens rights but common-law use can create limited rights'],
        ['Trade Secret', 'Confidential business information providing competitive advantage', 'Indefinite, as long as kept secret', 'No registration; protection depends on maintaining reasonable secrecy'],
      ],
    },
  ],
  examTraps: [
    `GDPR applicability is based on WHOSE data is processed (EU residents), not where the company is headquartered — a non-EU company can still be fully in scope.`,
    `PCI-DSS is a contractual industry standard, not a government law — don't confuse it with a "regulation" when a question asks about legal vs. contractual obligations.`,
    `A Data Fiduciary under DPDP is not identical in every respect to a GDPR controller — CISSP may test recognition of the parallel roles without assuming word-for-word equivalence.`,
    `Trade secret protection disappears the moment secrecy is lost through lawful means (independent discovery, reverse engineering) — this is not "theft" and offers no legal recourse, unlike misappropriation through breach of confidence.`,
    `Software can be protected simultaneously by copyright (the code as written) AND trade secret (the underlying undisclosed algorithm/method) — questions may test whether you understand these are not mutually exclusive.`,
  ],
  resources: [
    { label: 'Destination Certification – GDPR and Privacy Law for CISSP', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+gdpr+privacy+law' },
    { label: 'Kelly Handerhan – CISSP Legal and Regulatory Issues', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+legal+and+regulatory+issues' },
  ],
};

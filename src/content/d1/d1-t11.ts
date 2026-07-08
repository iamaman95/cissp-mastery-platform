import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t11',
  overview: `Threat modeling is the structured process of identifying, analyzing, and prioritizing potential threats to a system before (and while) it is built, rather than reacting to incidents after deployment. It forces a design-time question: "What can go wrong with this system, and what are we going to do about it?" Done well, it shifts security left — findings surface during architecture and design review, when fixes are cheap, instead of during a penetration test or an incident, when fixes are expensive and reputational damage may already be done.

The most commonly tested methodology is STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege), developed at Microsoft to categorize threats against a system's components and data flows. Other methodologies serve different purposes: DREAD is a (largely deprecated but still exam-referenced) scoring model for ranking threat severity; PASTA (Process for Attack Simulation and Threat Analysis) is a risk-centric, seven-stage methodology that ties technical threats back to business impact; and Attack Trees provide a graphical, hierarchical way to decompose how an attacker could achieve a specific goal.

CISSP frames threat modeling as most valuable during the design phase of the SDLC, using artifacts like data flow diagrams (DFDs) to map trust boundaries, entry points, and assets. The output is not a list of "hackers might attack us" — it is a concrete set of identified threats, each mapped to a mitigating control, with residual risk explicitly acknowledged. Threat modeling is iterative: it should be revisited whenever the architecture changes materially (new integration, new trust boundary, new data flow), not treated as a one-time checkbox.

A recurring exam theme is that threat modeling is a proactive, structured discipline distinct from vulnerability scanning or penetration testing. Vulnerability scanning finds known weaknesses in an existing system; penetration testing validates whether those weaknesses are exploitable; threat modeling asks, at design time, "what could an adversary do to this system's intended architecture," independent of whether a specific implementation flaw yet exists.`,
  examFraming: `(ISC)² wants candidates to recognize threat modeling as a design-phase, proactive activity and to correctly map a described threat scenario to the right STRIDE category or the right methodology for the stated goal. Expect scenario questions that describe an architecture or a described attack and ask which STRIDE category applies, or that describe an organizational need (e.g., "we need to communicate risk to executives in business terms") and ask which methodology (STRIDE vs. PASTA vs. attack trees) BEST fits. You are also expected to know WHEN threat modeling should occur (as early as possible, ideally during design, and repeated on material change) and to distinguish it from related-but-different activities like risk assessment, vulnerability scanning, and penetration testing — CISSP loves testing whether you can tell these apart when a distractor option is technically a "security activity" but is not threat modeling.`,
  keyTerms: [
    { term: 'STRIDE', definition: 'A threat categorization model (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) used to systematically identify threat types against a system\'s components and data flows.' },
    { term: 'DREAD', definition: 'A legacy risk-rating model (Damage, Reproducibility, Exploitability, Affected users, Discoverability) once used to score and prioritize identified threats by estimated severity.' },
    { term: 'PASTA', definition: 'Process for Attack Simulation and Threat Analysis — a seven-stage, risk-centric threat modeling methodology that ties technical threats to business impact and attacker motivation.' },
    { term: 'Attack Tree', definition: 'A hierarchical diagram with a root node representing an attacker\'s ultimate goal, decomposed into branches representing the various paths/sub-goals that could achieve it.' },
    { term: 'Data Flow Diagram (DFD)', definition: 'A diagram showing how data moves between processes, data stores, and external entities, used to identify trust boundaries and entry points during threat modeling.' },
    { term: 'Trust Boundary', definition: 'A point in a system where data or control crosses between components with differing levels of trust, and where validation/authentication is typically required.' },
    { term: 'Attack Surface', definition: 'The sum of all points (entry points, interfaces, data flows) where an unauthorized user could attempt to enter or extract data from a system.' },
    { term: 'Residual Risk', definition: 'The risk that remains after mitigating controls have been applied to identified threats; threat modeling should explicitly document it, not ignore it.' },
  ],
  scenario: `A fintech company is designing a new mobile payment API that allows third-party merchants to initiate transactions on behalf of customers. During the design review, the architecture team builds a data flow diagram showing the mobile app, the API gateway, the authentication service, and the backend ledger, and identifies the trust boundary between the merchant's third-party app and the company's API gateway as the highest-risk zone.

Applying STRIDE, the team identifies that an attacker crossing this trust boundary could: spoof a merchant identity to submit fraudulent transactions (Spoofing), alter transaction amounts in transit (Tampering), later deny having authorized a refund (Repudiation), or exploit an over-permissioned API key to access another merchant's transaction history (Elevation of Privilege). Each identified threat is mapped to a specific control — mutual TLS and signed API requests for spoofing/tampering, immutable audit logging for repudiation, and scoped API keys with per-merchant authorization checks for elevation of privilege — before a single line of production code is written. This is threat modeling done correctly: structured, design-time, and tied to concrete mitigations rather than a vague sense that "APIs are risky."`,
  comparisonTables: [
    {
      caption: 'STRIDE Threat Categories',
      headers: ['Category', 'Violates', 'Example', 'Typical Mitigation'],
      rows: [
        ['Spoofing', 'Authenticity', 'Attacker impersonates a legitimate user or system', 'Strong authentication, mutual TLS, digital signatures'],
        ['Tampering', 'Integrity', 'Attacker modifies data in transit or at rest', 'Hashing, digital signatures, integrity checks'],
        ['Repudiation', 'Non-repudiation', 'User denies having performed an action', 'Audit logging, digital signatures, timestamps'],
        ['Information Disclosure', 'Confidentiality', 'Unauthorized access to sensitive data', 'Encryption, access controls, data classification'],
        ['Denial of Service', 'Availability', 'Attacker degrades or blocks legitimate access', 'Rate limiting, redundancy, resource quotas'],
        ['Elevation of Privilege', 'Authorization', 'Attacker gains higher privileges than granted', 'Least privilege, input validation, privilege separation'],
      ],
    },
    {
      caption: 'Threat Modeling Methodologies Compared',
      headers: ['Methodology', 'Primary Focus', 'Best Used For', 'Limitation'],
      rows: [
        ['STRIDE', 'Categorizing threat types by component/data flow', 'Systematic identification of threats during design', 'Does not inherently prioritize/rank threats by severity'],
        ['DREAD', 'Scoring/ranking identified threats', 'Prioritizing which STRIDE-identified threats to address first', 'Subjective scoring, largely superseded by other risk models in practice'],
        ['PASTA', 'Risk-centric simulation tied to business impact', 'Communicating risk to business stakeholders; aligning threats to attacker motivation', 'More resource-intensive, seven-stage process'],
        ['Attack Trees', 'Decomposing paths to a specific attacker goal', 'Visualizing/analyzing multiple routes to compromise a specific asset', 'Can become large/unwieldy for complex systems'],
      ],
    },
  ],
  examTraps: [
    `Confusing threat modeling with vulnerability scanning or penetration testing — threat modeling is a proactive, design-time activity, not a tool run against a live/built system.`,
    `Misclassifying a STRIDE category — e.g., calling a stolen session token replay "Spoofing" when the exam wants "Elevation of Privilege" or vice versa; read carefully for which CIA/AAA property is actually violated.`,
    `Assuming threat modeling happens only once — CISSP expects you to know it should be revisited whenever the architecture changes materially, not treated as a one-time gate.`,
    `Choosing DREAD as the "best overall" methodology because it's memorable — DREAD is a scoring/prioritization aid, not a full threat-identification methodology like STRIDE or PASTA, and is often the wrong answer when the question asks for identification rather than ranking.`,
    `Picking PASTA for a purely technical, component-level threat enumeration question — PASTA's distinguishing strength is tying threats to business/attacker-motivation context, so it's the wrong answer when the scenario just needs systematic technical categorization (that's STRIDE's job).`,
  ],
  resources: [
    { label: 'Destination Certification – Threat Modeling and STRIDE', url: 'https://www.youtube.com/results?search_query=destination+certification+threat+modeling+stride' },
    { label: 'Kelly Handerhan – CISSP Threat Modeling', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+threat+modeling' },
  ],
};

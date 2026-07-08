import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t1',
  overview: `Secure design principles are the engineering-level habits of mind that translate abstract security goals (confidentiality, integrity, availability) into concrete architectural decisions. Rather than bolting controls onto a finished system, CISSP Domain 3 expects security to be designed in from the requirements phase forward — this is the essence of "security by design." Principles like defense in depth, least privilege, fail secure, separation of duties, and complete mediation are not competing ideas; they are complementary layers that, applied together, reduce the likelihood that a single flawed assumption or a single compromised component leads to total system failure.

Defense in depth accepts that any one control can fail, so multiple independent layers (network, host, application, data) are stacked so that the failure of one does not expose the asset. Least privilege and need-to-know restrict what a subject can do and see to the minimum necessary for its function, shrinking the blast radius of any single compromised account or process. Fail secure (denying access when a control fails) versus fail safe (defaulting to an open/safe physical state, e.g. door locks during a fire) illustrates that "secure" and "safe" can actually conflict, and the correct choice depends on context — data systems typically fail secure, while life-safety systems typically fail safe.

KISS (Keep It Simple, Stupid) and complete mediation reflect the idea that complexity is the enemy of assurance: every access to every object should be checked, every time, and unnecessarily complex designs are harder to verify and more likely to hide exploitable gaps. Secure defaults (systems ship "closed" and features must be deliberately enabled) and zero trust (never trust, always verify — treating internal network location as no more trustworthy than external) extend these ideas into modern architecture. Threat modeling integration and privacy by design push security and privacy analysis to the earliest stages of the SDLC rather than treating them as a late-stage checklist.

Finally, shared responsibility models — most visible in cloud computing — clarify that security is a joint obligation between provider and customer, split along a boundary that shifts depending on the service model (IaaS, PaaS, SaaS). CISSP wants candidates to reason about where that boundary falls in a given scenario, not just recite the principle names.`,
  examFraming: `(ISC)² tests these principles primarily through scenario-based decision-making, not definitions. You'll be given a described design or a control failure and asked which principle was violated, which principle should be applied, or which of two seemingly similar controls is the better fit. Expect direct trade-off questions: fail secure vs. fail safe (the right answer depends entirely on whether human safety or data protection is the priority in the given context), and least privilege vs. need-to-know (privilege is about system rights; need-to-know is about information sensitivity/relevance, and the two are frequently offered as near-identical distractors). You should also be ready to place a described control failure ("a support engineer, who has read access to a system for troubleshooting, was also able to modify production configs without any second approver") into the correct principle bucket (here, a separation-of-duties gap). Zero trust and shared responsibility questions often test whether you understand that these are architectural philosophies applied continuously across a system, not one-time configuration checkboxes.`,
  keyTerms: [
    { term: 'Defense in Depth', definition: 'Layering multiple, independent security controls so that the failure or bypass of any single control does not result in a full compromise.' },
    { term: 'Least Privilege', definition: 'Granting a subject only the minimum system rights and permissions required to perform its authorized function, and no more.' },
    { term: 'Separation of Duties', definition: 'Dividing a critical process into multiple steps performed by different individuals so that no single person can complete a sensitive action alone, reducing fraud and error risk.' },
    { term: 'Fail Secure vs. Fail Safe', definition: 'Fail secure means a control defaults to a locked/denied state on failure (protecting data); fail safe means a control defaults to an open/unlocked state on failure (protecting human life, e.g. fire door egress).' },
    { term: 'Complete Mediation', definition: 'The principle that every single access request to every object must be checked against the current authorization state every time, with no caching of prior permission decisions that could become stale.' },
    { term: 'Zero Trust', definition: 'An architectural model that assumes no implicit trust based on network location; every request is authenticated, authorized, and continuously validated regardless of whether it originates inside or outside the perimeter.' },
    { term: 'Secure Defaults', definition: 'Designing systems so that the out-of-the-box configuration is the most restrictive/secure option, requiring deliberate action to enable riskier features.' },
    { term: 'Shared Responsibility Model', definition: 'A model, especially in cloud computing, that defines which security obligations belong to the service provider versus the customer, with the split point varying by service type (IaaS, PaaS, SaaS).' },
  ],
  scenario: `A healthcare SaaS vendor is redesigning its patient portal after a near-miss incident in which a junior developer, given broad database admin rights "to make debugging easier," accidentally ran a destructive query against the production patient records table. The post-incident review recommends several changes: developers should get read-only access to production by default with a formal, time-boxed elevation process for any write action (least privilege plus a form of separation of duties); the database should reject any unauthenticated or unauthorized query outright rather than silently allowing it and logging afterward (complete mediation and fail secure); and new hires should receive access denied by default until a role is explicitly assigned (secure defaults). The vendor also documents, in its customer-facing security page, exactly which controls it manages (physical infrastructure, hypervisor patching) versus which the customer must configure themselves (application-level access control, data classification) — an explicit statement of the shared responsibility model appropriate to its SaaS offering.`,
  comparisonTables: [
    {
      caption: 'Fail Secure vs. Fail Safe',
      headers: ['Mode', 'Default State on Failure', 'Priority Protected', 'Typical Example'],
      rows: [
        ['Fail Secure', 'Locked / access denied', 'Data confidentiality and integrity', 'Electronic door lock denies entry on power loss (in a data center)'],
        ['Fail Safe', 'Unlocked / access granted', 'Human life and safety', 'Fire exit door unlocks on power loss to allow egress'],
      ],
    },
    {
      caption: 'Least Privilege vs. Need-to-Know',
      headers: ['Concept', 'Governs', 'Basis', 'Example'],
      rows: [
        ['Least Privilege', 'System rights/permissions a subject holds', 'Job function requirements', 'A helpdesk account can reset passwords but cannot access payroll data'],
        ['Need-to-Know', 'Access to specific information, even within a permission level', 'Relevance of information to current task', 'Two analysts with the same clearance level may still not both need access to a specific classified project file'],
      ],
    },
  ],
  examTraps: [
    `Fail secure and fail safe are easy to swap under exam time pressure — always anchor on whether the scenario is about protecting data (favor fail secure) or protecting human life/safety (favor fail safe).`,
    `Least privilege (system rights) and need-to-know (information relevance) are often used as near-identical distractors — least privilege is broader and about permissions in general; need-to-know is a subset concern about sensitive information specifically.`,
    `"Defense in depth" is not the same as simply "buying more security products" — the exam tests whether layers are independent and address different attack vectors, not merely redundant copies of the same control.`,
    `Zero trust is not a single product or VPN replacement — questions may present a vendor pitch as a distractor; the correct answer emphasizes continuous verification and no implicit trust by network location.`,
    `Shared responsibility boundaries shift by cloud service model — a question describing IaaS will place more security obligation on the customer than one describing SaaS; do not apply a one-size-fits-all boundary.`,
  ],
  resources: [
    { label: 'Destination Certification – Secure Design Principles', url: 'https://www.youtube.com/results?search_query=destination+certification+secure+design+principles+cissp' },
    { label: 'Kelly Handerhan – CISSP Domain 3 Security Engineering', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+domain+3+security+engineering' },
  ],
};

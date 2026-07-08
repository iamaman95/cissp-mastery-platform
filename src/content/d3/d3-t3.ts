import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t3',
  overview: `Selecting controls based on systems security requirements means choosing safeguards that match what a system actually needs to protect, and being able to evaluate whether a product genuinely provides the assurance it claims. Two ideas dominate the CISSP treatment: security evaluation criteria and the certification/accreditation (authorization) process.

The Common Criteria (ISO/IEC 15408) is the internationally recognized framework for evaluating the security of IT products. Under it, the product being evaluated is the Target of Evaluation (TOE); the security requirements the evaluation is measured against are captured in a Protection Profile (PP, a customer/community statement of needs) and a Security Target (ST, the vendor's claim of what the TOE does). The assurance level assigned is an Evaluation Assurance Level (EAL) from EAL1 (lowest) to EAL7 (highest) — importantly, a higher EAL means more rigorous evaluation, NOT that the product is inherently "more secure" than one with a lower EAL evaluated against different requirements.

Separately, certification is the technical evaluation of a system against requirements, and accreditation (authorization) is management's formal acceptance of the residual risk and approval to operate. This maps to modern risk-management frameworks (e.g., NIST RMF) where an Authorizing Official grants an Authorization to Operate (ATO).`,
  examFraming: `(ISC)² wants you to know that Common Criteria evaluates products against stated requirements (PP = need, ST = claim, TOE = the product, EAL = assurance rigor), and that a higher EAL is about evaluation depth, not a guarantee of superiority. The classic exam distinction: certification is the technical assessment; accreditation is management's formal, documented acceptance of residual risk and authorization to operate — a business decision, not a technical one. Controls should be selected to meet documented requirements and the system's risk profile, then tailored — never bolted on arbitrarily.`,
  keyTerms: [
    { term: 'Common Criteria (ISO/IEC 15408)', definition: 'The international standard for evaluating the security assurance of IT products.' },
    { term: 'Target of Evaluation (TOE)', definition: 'The product or system that is the subject of a Common Criteria evaluation.' },
    { term: 'Protection Profile (PP)', definition: 'A statement of the security requirements/needs for a category of products (the customer view).' },
    { term: 'Security Target (ST)', definition: 'The vendor’s document describing what security functions the TOE provides (the claim).' },
    { term: 'Evaluation Assurance Level (EAL)', definition: 'A rating (EAL1–EAL7) reflecting the rigor/depth of the evaluation, not absolute security.' },
    { term: 'Certification', definition: 'The technical evaluation of a system’s controls against requirements.' },
    { term: 'Accreditation (Authorization)', definition: 'Management’s formal acceptance of residual risk and approval to operate the system (ATO).' },
    { term: 'Authorizing Official', definition: 'The senior manager who accepts residual risk and grants authorization to operate.' },
  ],
  scenario: `An agency must choose a firewall for a sensitive network. Its security team writes a Protection Profile describing the required security functions. Vendors submit products (each a TOE) with a Security Target claiming conformance, evaluated to a given EAL. The team recognizes that a firewall evaluated at EAL4 against a strong Protection Profile may better fit their needs than one at EAL2 — but also that a high EAL alone does not mean a product is "the most secure"; it means the claims were evaluated to that rigor. After the technical certification confirms the chosen product and configuration meet requirements, the agency's Authorizing Official reviews the residual risk and issues an Authorization to Operate — the accreditation step. A CISSP question may ask who accepts the residual risk and authorizes operation: the answer is management (the Authorizing Official), not the technical evaluators.`,
  comparisonTables: [
    {
      caption: 'Certification vs Accreditation',
      headers: ['Aspect', 'Certification', 'Accreditation (Authorization)'],
      rows: [
        ['What it is', 'Technical evaluation of controls vs requirements', 'Formal management acceptance of residual risk'],
        ['Who performs it', 'Technical assessors', 'Authorizing Official (senior management)'],
        ['Output', 'Assessment of whether requirements are met', 'Authorization to Operate (ATO) / approval'],
        ['Nature', 'Technical', 'Business/risk decision'],
      ],
    },
    {
      caption: 'Common Criteria Terms',
      headers: ['Term', 'Meaning'],
      rows: [
        ['TOE', 'The product/system being evaluated'],
        ['Protection Profile (PP)', 'The required security needs (customer view)'],
        ['Security Target (ST)', "The vendor's claim of security functions"],
        ['EAL1–EAL7', 'Rigor/depth of the evaluation (not absolute security)'],
      ],
    },
  ],
  examTraps: [
    'A higher EAL means the evaluation was more rigorous — NOT that the product is inherently more secure than a lower-EAL product evaluated against different needs.',
    'Certification (technical assessment) vs accreditation (management’s formal risk acceptance/authorization) — the exam tests this pairing constantly.',
    'Accreditation/authorization is a management business decision to accept residual risk, not a technical activity.',
    'Protection Profile = the need/requirement; Security Target = the vendor’s claim; TOE = the product itself. Do not swap PP and ST.',
    'Controls must be selected to meet documented requirements and tailored to the system’s risk — not chosen arbitrarily or "one size fits all."',
  ],
  resources: [
    { label: 'Destination Certification – Common Criteria & Accreditation', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+common+criteria+accreditation' },
    { label: 'Kelly Handerhan – CISSP Certification vs Accreditation', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+certification+accreditation' },
  ],
};

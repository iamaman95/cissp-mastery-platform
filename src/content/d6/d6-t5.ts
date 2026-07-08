import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd6',
  topicId: 'd6-t5',
  overview: `A security audit is a formal, systematic evaluation of controls against a defined standard or set of criteria, producing evidence-based assurance for stakeholders. Audits differ from assessments/tests in their formality, independence, and reliance on documented evidence and defined criteria.

Audits are categorized by who conducts them. Internal (first-party) audits are performed by the organization's own audit function — useful for self-improvement but less independent. External (second-party) audits are conducted by a related party such as a customer auditing a supplier. Independent third-party audits are performed by an outside firm and carry the most credibility for external stakeholders. Auditor independence and objectivity are essential; auditors should not audit their own work.

For service providers, SOC (System and Organization Controls) reports are the key artifacts. SOC 1 covers controls relevant to financial reporting. SOC 2 covers the Trust Services Criteria (security, availability, processing integrity, confidentiality, privacy) — the report most relevant to security assurance. SOC 3 is a public, general-use summary of a SOC 2. Within SOC 1/2, a Type I report assesses control design at a point in time, while a Type II report assesses the operating effectiveness of controls over a period (typically 6–12 months) — Type II gives stronger assurance. The audit process: plan/scope, gather evidence, evaluate against criteria, report findings, and follow up on remediation.`,
  examFraming: `(ISC)² tests the SOC report matrix precisely: SOC 1 = financial reporting; SOC 2 = security/Trust Services Criteria (the security-relevant one); SOC 3 = public general-use summary. Type I = design at a point in time; Type II = operating effectiveness over a period (stronger). Know that independent third-party audits carry the most external credibility and that auditor independence/objectivity is required (don't audit your own work). Audits are evidence-based evaluations against defined criteria — a key distinction from informal testing. Expect a scenario asking which report a customer should request to gain assurance about a SaaS provider's security controls over time: a SOC 2 Type II.`,
  keyTerms: [
    { term: 'Security Audit', definition: 'A formal, evidence-based evaluation of controls against defined criteria.' },
    { term: 'Internal (First-Party) Audit', definition: 'Conducted by the organization’s own audit function; less independent.' },
    { term: 'Third-Party Audit', definition: 'Conducted by an independent external firm; highest external credibility.' },
    { term: 'SOC 1', definition: 'Report on controls relevant to a service organization’s financial reporting.' },
    { term: 'SOC 2', definition: 'Report on the Trust Services Criteria (security, availability, processing integrity, confidentiality, privacy).' },
    { term: 'SOC 3', definition: 'A public, general-use summary version of a SOC 2 report.' },
    { term: 'Type I vs Type II', definition: 'Type I = control design at a point in time; Type II = operating effectiveness over a period (stronger).' },
    { term: 'Auditor Independence', definition: 'The requirement that auditors be objective and not evaluate their own work.' },
  ],
  scenario: `A company evaluating a cloud SaaS vendor wants assurance that the vendor's security controls are not only well-designed but actually operate effectively over time. It requests the vendor's SOC 2 Type II report, because SOC 2 covers the security-focused Trust Services Criteria and Type II attests to operating effectiveness across a review period — stronger evidence than a point-in-time SOC 2 Type I. The vendor's public marketing points to its SOC 3, a general-use summary, but the company needs the detailed SOC 2 Type II under NDA for real due diligence. Internally, the company's own audit team periodically audits its controls, but for customer-facing trust it relies on an independent third-party auditor. A CISSP question might ask which SOC report and type best demonstrate a provider's security-control effectiveness over time: SOC 2 Type II.`,
  comparisonTables: [
    {
      caption: 'SOC 1 vs SOC 2 vs SOC 3',
      headers: ['Report', 'Focus', 'Audience'],
      rows: [
        ['SOC 1', 'Controls over financial reporting', 'User entities / their auditors'],
        ['SOC 2', 'Trust Services Criteria (security, etc.)', 'Stakeholders under NDA (detailed)'],
        ['SOC 3', 'General summary of SOC 2', 'Public / general use'],
      ],
    },
    {
      caption: 'Type I vs Type II',
      headers: ['Type', 'Assesses', 'Assurance'],
      rows: [
        ['Type I', 'Control design at a point in time', 'Weaker'],
        ['Type II', 'Operating effectiveness over a period', 'Stronger'],
      ],
    },
  ],
  examTraps: [
    'SOC 2 (not SOC 1) is the security-relevant report (Trust Services Criteria); SOC 1 is about financial reporting; SOC 3 is a public summary.',
    'Type II (operating effectiveness over a period) gives stronger assurance than Type I (design at a point in time).',
    'For real security due diligence, request the detailed SOC 2 Type II — not just the public SOC 3 marketing summary.',
    'Independent third-party audits carry the most external credibility; auditors must be objective and not audit their own work.',
    'An audit is a formal, evidence-based evaluation against defined criteria — distinct from informal assessments/tests.',
  ],
  resources: [
    { label: 'Destination Certification – SOC Reports & Audits', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+soc+1+soc+2+soc+3+audit' },
    { label: 'Kelly Handerhan – CISSP Security Audits', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+security+audits+soc+reports' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd6',
  topicId: 'd6-t1',
  overview: `Designing an assessment, test, and audit strategy means deciding, before any tool is run or any auditor is engaged, what needs to be verified, how often, by whom, and against which standard. CISSP treats this as a governance activity, not a technical one: the strategy must be driven by business risk, regulatory obligation, and the criticality of the assets involved, and it must be formally approved and documented so that it is repeatable and defensible. A good strategy defines the scope (which systems, data, and processes are in play), the assessment types to be used (vulnerability scanning, penetration testing, code review, audits), the cadence (continuous, quarterly, annual), and the roles of internal staff versus independent third parties.

A critical distinction the exam expects you to internalize is between an assessment and an audit. An assessment (vulnerability scan, penetration test, security control assessment) is typically performed by or for the organization to find and fix weaknesses — it is improvement-oriented. An audit is a formal, evidence-based examination of whether controls meet a defined standard (internal policy, PCI DSS, ISO 27001, SOC 2 criteria), and it is often independent, with findings reported to a governance body, regulator, or customer. Internal audits are performed by the organization's own audit function for management assurance; external/third-party audits are performed by an independent firm and often required contractually or by regulation.

Strategy design also must resolve practical constraints: scope boundaries (what's in-bounds vs. explicitly excluded, e.g., production payment systems during peak hours), rules of engagement, who authorizes testing (a written, signed authorization is mandatory before any offensive testing begins — without it, testers may be committing an actual crime under computer-fraud laws), and how results feed back into the risk register and remediation tracking. Test strategies should also incorporate the full test lifecycle: pre-engagement planning, execution, results analysis, remediation validation (retesting), and lessons-learned integration into the next cycle.`,
  examFraming: `(ISC)² wants candidates to reason like a security leader designing a program, not like a pentester running tools. Expect scenario questions asking you to select the correct type of assessment or audit given a stated business driver (e.g., "a customer requires proof of controls before signing a contract" points to a SOC 2 report or a third-party audit, not an internal vulnerability scan). Also expect questions testing that you know written authorization/scope agreement must precede any test, and that internal audit findings should be reported with organizational independence (audit should not report to the function it audits — classic segregation-of-duties/reporting-line trap). Finally, expect risk-based prioritization questions: strategy should target testing effort at the highest-risk/highest-value assets first, not spread evenly.`,
  keyTerms: [
    { term: 'Assessment', definition: 'An improvement-oriented evaluation (e.g., vulnerability assessment, security control assessment) intended to identify weaknesses so they can be remediated.' },
    { term: 'Audit', definition: 'A formal, evidence-based examination of whether controls meet a defined standard, often performed independently and reported to a governance body or external party.' },
    { term: 'Rules of Engagement (RoE)', definition: 'A written document defining scope, timing, methods, authorized targets, emergency contacts, and limitations for a security test.' },
    { term: 'Scope Statement', definition: 'The formal definition of what systems, networks, applications, or data are included and excluded from an assessment or audit.' },
    { term: 'Third-Party Assessment', definition: 'An assessment or audit performed by an independent external organization, often required for regulatory compliance or customer assurance.' },
    { term: 'Continuous Monitoring', definition: 'An ongoing, automated or semi-automated strategy of assessing controls and posture in near real time rather than at fixed intervals.' },
    { term: 'Authorization to Test', definition: 'Documented, signed management approval permitting security testing activity, protecting testers from legal liability and defining acceptable boundaries.' },
    { term: 'Risk-Based Testing', definition: 'An approach that prioritizes assessment and audit effort according to asset criticality and threat exposure rather than testing everything equally.' },
  ],
  scenario: `A mid-size healthcare SaaS company is preparing to sign a major new enterprise client. The client's procurement team asks for "evidence of your security testing program" before finalizing the contract. The CISO must decide what strategy to present: an annual penetration test performed by an internal red team, a vulnerability scan report, or an independent SOC 2 Type II audit report covering the last 12 months of control operation.

Because the client is asking for third-party assurance suitable for a business relationship (not just technical vulnerability detail), the CISO determines the SOC 2 Type II report — issued by an independent CPA firm attesting that controls were both suitably designed and operating effectively over a period of time — is the correct artifact to lead with, supplemented by the annual penetration test as evidence of ongoing technical validation. A vulnerability scan alone would be insufficient because it demonstrates a point-in-time technical check, not organizational control assurance suitable for contractual reliance.`,
  comparisonTables: [
    {
      caption: 'Assessment vs. Audit',
      headers: ['Aspect', 'Assessment', 'Audit'],
      rows: [
        ['Primary purpose', 'Find and help fix weaknesses', 'Verify compliance against a defined standard'],
        ['Typical performer', 'Internal security team or hired tester', 'Internal audit function or independent external auditor'],
        ['Orientation', 'Improvement-focused, collaborative', 'Assurance-focused, independent, evidence-based'],
        ['Output', 'Findings + remediation recommendations', 'Formal opinion/attestation report'],
        ['Independence requirement', 'Not strictly required', 'Often mandated (organizational or third-party independence)'],
      ],
    },
    {
      caption: 'Internal vs. External (Third-Party) Audit',
      headers: ['Aspect', 'Internal Audit', 'External/Third-Party Audit'],
      rows: [
        ['Performed by', "Organization's own audit function", 'Independent outside firm (e.g., CPA firm for SOC reports)'],
        ['Primary audience', 'Management, board, audit committee', 'Customers, regulators, business partners'],
        ['Independence', 'Independent of the audited function, but still internal to the org', 'Fully independent of the organization'],
        ['Typical driver', 'Ongoing governance, risk management', 'Contractual, regulatory, or certification requirement'],
      ],
    },
  ],
  examTraps: [
    `Do not assume "penetration test" is always the answer when a scenario asks for proof of controls to a customer or regulator — a formal audit/attestation report (e.g., SOC 2) is often the correct artifact for contractual/compliance assurance.`,
    `Written authorization to test is a prerequisite, not a formality — a question describing testing that began without signed management approval should be flagged as improper regardless of good intent.`,
    `Internal audit must retain organizational independence from the function being audited (e.g., the audit team should not report to the CIO whose systems it audits) — watch for reporting-line traps.`,
    `"Assessment" and "audit" are tested as distinct concepts — don't treat them as interchangeable synonyms on the exam even though they're often used loosely in casual conversation.`,
    `Testing strategy should be risk-based and prioritized, not "test everything equally" — questions that offer an option treating all assets as equal priority are usually the distractor.`,
  ],
  resources: [
    { label: 'Destination Certification – Security Assessment and Testing Strategy', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+security+assessment+and+testing' },
    { label: 'Kelly Handerhan – CISSP Domain 6 Overview', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+domain+6+security+assessment' },
  ],
};

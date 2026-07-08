import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t7',
  overview: `Governance is expressed on paper through a hierarchy of documents: policies, standards, procedures, and guidelines. CISSP expects you to know not just what each document is, but its relative authority, mandatory vs. discretionary nature, and where it sits in the chain from strategic intent down to day-to-day execution.

A policy is a high-level statement of management's intent and expectations (e.g., "all sensitive data must be encrypted at rest"). A standard makes that mandatory and specific (e.g., "AES-256 is the approved encryption algorithm"). A procedure is the step-by-step instructions for carrying out a task in compliance with policy and standard (e.g., "how to configure BitLocker on a laptop"). A guideline is a recommended, discretionary practice offered as advice when there is no single correct approach (e.g., "consider using a passphrase generator for memorable passwords"). Baselines are a related concept — a minimum, uniform level of security a system must meet (e.g., a CIS benchmark), and are typically mandatory like standards.

The key exam distinction is mandatory vs. discretionary: policies, standards, and procedures are compulsory — failure to comply is a policy violation with consequences. Guidelines are advisory — they inform good judgment but are not enforced the same way. All of these documents must be approved and sponsored by senior management to carry authority, and all should be reviewed and updated periodically to stay aligned with the organization's risk appetite and regulatory environment.`,
  examFraming: `(ISC)² loves to test whether you can correctly slot a described document into policy/standard/procedure/guideline/baseline based on its characteristics (mandatory vs. optional, high-level vs. step-by-step, "what/why" vs. "how"). Expect scenario questions where a company writes something called a "policy" but it actually behaves like a procedure (or vice versa) — you must classify by function, not by the label used in the scenario. Also expect questions on the correct governance flow (policy drives standards, which drive procedures and baselines; guidelines supplement all of them) and on who must approve/own these documents (senior management/data owners, not IT alone). Trade-off and "what's missing" questions are common too: a procedure without an underlying policy has no authority to compel compliance.`,
  keyTerms: [
    { term: 'Policy', definition: 'A high-level, mandatory statement of management intent, goals, and expectations regarding security; answers "what" and "why," not "how."' },
    { term: 'Standard', definition: 'A mandatory, specific requirement that supports a policy by specifying uniform ways to meet it (e.g., approved technologies, configurations, or metrics).' },
    { term: 'Procedure', definition: 'A mandatory, detailed, step-by-step set of instructions for performing a specific task in a way that complies with policy and standards.' },
    { term: 'Guideline', definition: 'A discretionary, recommended practice or piece of advice used when no single mandatory approach exists; not enforced like a policy.' },
    { term: 'Baseline', definition: 'A defined minimum level of security that a system or process must meet, often expressed as a specific configuration benchmark (e.g., CIS Benchmarks).' },
    { term: 'Senior management approval/sponsorship', definition: 'The requirement that governance documents (especially policy) be formally approved by executive leadership to carry organizational authority and enforceability.' },
    { term: 'Regulatory/business alignment review', definition: 'The periodic process of updating policies, standards, and procedures to remain consistent with current law, regulation, and business risk appetite.' },
  ],
  scenario: `A company's "Acceptable Use Policy" document states: "Employees must not install unauthorized software. To request software, open a ticket in the IT portal, select 'Software Request,' attach a business justification, and await approval within 2 business days. As a best practice, consider checking if a free/open-source alternative already meets your need before requesting paid software."

A CISSP-style question would ask you to identify which sentence belongs to which document type: the first sentence ("must not install unauthorized software") is genuine policy content — a mandatory, high-level expectation. The middle instructions (open a ticket, select an option, attach justification, wait 2 days) are actually procedure content masquerading inside a document labeled "policy." The last sentence ("consider checking...") is a guideline — discretionary advice, not a requirement. This illustrates the classic exam trap: a document's title does not determine its true governance function; you must classify each statement by its actual mandatory/discretionary nature and level of detail.`,
  comparisonTables: [
    {
      caption: 'Policy vs. Standard vs. Procedure vs. Guideline',
      headers: ['Document', 'Mandatory?', 'Level of Detail', 'Purpose/Question Answered', 'Example'],
      rows: [
        ['Policy', 'Yes (mandatory)', 'High-level, strategic', 'What must be done, and why (management intent)', '"All sensitive data must be encrypted at rest and in transit."'],
        ['Standard', 'Yes (mandatory)', 'Specific, uniform requirement', 'Which exact method/technology satisfies the policy', '"AES-256 is the approved algorithm for data-at-rest encryption."'],
        ['Procedure', 'Yes (mandatory)', 'Step-by-step, granular', 'How to perform a task correctly and consistently', '"Steps 1-8 to enable BitLocker with TPM on a company laptop."'],
        ['Guideline', 'No (discretionary/advisory)', 'Flexible, recommendation-based', 'Suggested good practice when no single mandatory path exists', '"Consider a passphrase manager to generate memorable, strong passwords."'],
        ['Baseline', 'Yes (mandatory minimum)', 'Specific configuration floor', 'The minimum acceptable security configuration for a system type', '"All Windows servers must meet the CIS Level 1 benchmark."'],
      ],
    },
  ],
  examTraps: [
    `A document's title ("policy," "standard," etc.) does not determine its true function — classify each statement by whether it is mandatory vs. discretionary and by its level of detail, regardless of the label on the document.`,
    `Guidelines are the only non-mandatory item in this family — don't assume "guideline" means "unimportant." A guideline can address a critical risk area; it's simply advisory rather than compulsory.`,
    `A procedure with no underlying, approved policy has no real authority to compel compliance — CISSP expects you to recognize governance gaps like a "how" document floating without a "what/why" foundation.`,
    `Baselines are often confused with standards; remember a baseline is specifically a minimum configuration floor for a system/component, while a standard can be broader (e.g., which vendor/algorithm/protocol to use organization-wide).`,
    `Senior management (not IT/security staff alone) must approve and sponsor policy for it to carry organizational authority — a policy drafted and enforced solely by the security team without executive backing is a governance weakness the exam may test.`,
  ],
  resources: [
    { label: 'Destination Certification – Policies, Standards, Procedures, Guidelines', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+policies+standards+procedures+guidelines' },
    { label: 'Kelly Handerhan – Security Policy Framework', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+security+policy+standards+procedures+guidelines' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t12',
  overview: `Supply Chain Risk Management (SCRM) addresses the reality that an organization's security is only as strong as the weakest link among its hardware suppliers, software vendors, service providers, and downstream partners. Modern breaches frequently arrive not through the front door but through a trusted third party — a compromised software update, a vulnerable managed service provider, or counterfeit hardware.

SCRM spans the full vendor lifecycle: due diligence before engagement, contractual security requirements, ongoing monitoring during the relationship, and secure offboarding at the end. It also covers concerns unique to the supply chain such as counterfeit or tampered hardware, malicious code inserted upstream, and the "nth-party" problem where your vendors have their own vendors you never directly vetted.

Key mechanisms include vendor security assessments, right-to-audit clauses, requiring evidence such as SOC 2 reports, Service Level Agreements (SLAs) and Service Level Requirements (SLRs), and Software Bills of Materials (SBOMs) to gain visibility into software components.`,
  examFraming: `(ISC)² frames SCRM as risk you must actively manage, not delegate away. Outsourcing a function transfers the work but not the accountability — you remain responsible for the risk. Expect scenarios asking for the BEST way to gain assurance over a vendor (assessment, SOC 2, right-to-audit) or the FIRST step before onboarding a supplier (due diligence / security assessment). Know that contractual security requirements must be established before, not after, granting access, and that minimum security requirements should flow down to subcontractors (fourth parties).`,
  keyTerms: [
    { term: 'Third-Party Risk', definition: 'Risk introduced by external vendors, suppliers, or partners who interact with your systems or data.' },
    { term: 'Due Diligence (vendor)', definition: 'Investigating a prospective vendor’s security posture and reliability before engaging them.' },
    { term: 'Right-to-Audit Clause', definition: 'A contractual provision allowing the customer to audit the vendor’s security controls.' },
    { term: 'Service Level Agreement (SLA)', definition: 'A contract defining measurable service commitments (e.g., uptime, response time) and remedies.' },
    { term: 'SOC 2 Report', definition: 'An independent attestation of a service organization’s controls relevant to security, availability, and related trust criteria.' },
    { term: 'SBOM (Software Bill of Materials)', definition: 'A formal inventory of the components and dependencies in a software product, aiding vulnerability visibility.' },
    { term: 'Nth-Party Risk', definition: 'Risk from your vendors’ own subcontractors/suppliers that you do not directly control or vet.' },
  ],
  scenario: `A retailer engages a small SaaS vendor to process loyalty-program data. Eager to launch, the project team grants the vendor API access before any security review. Months later, attackers compromise the vendor and pivot into the retailer's environment through the trusted integration. A post-incident review finds the retailer never performed a vendor security assessment, never required a SOC 2 report, and had no right-to-audit clause or breach-notification obligation in the contract. The lesson (and a common CISSP exam theme): third-party risk must be assessed and contractually governed before access is granted — outsourcing the service did not outsource the accountability for the resulting breach.`,
  comparisonTables: [
    {
      caption: 'Vendor Lifecycle Security Activities',
      headers: ['Phase', 'Key SCRM Activity'],
      rows: [
        ['Selection', 'Security due diligence, assessment, request SOC 2 / references'],
        ['Onboarding', 'Contractual security requirements, SLAs/SLRs, right-to-audit, breach notification'],
        ['Ongoing', 'Continuous monitoring, periodic reassessment, review audit reports'],
        ['Offboarding', 'Revoke access, ensure data return/secure destruction, confirm obligations end'],
      ],
    },
  ],
  examTraps: [
    'Outsourcing a function transfers the work but NOT the accountability — the customer still owns the risk.',
    'Vendor security assessment and contractual requirements must come BEFORE granting access, not after onboarding.',
    'A SOC 2 report and a right-to-audit clause are different assurance mechanisms — know which a scenario is asking for.',
    'Minimum security requirements should flow down to subcontractors (fourth/nth parties); a vendor’s own suppliers are still your risk.',
    'An SLA defines service commitments and remedies but does not by itself guarantee security — it must include security-relevant terms.',
  ],
  resources: [
    { label: 'Destination Certification – Supply Chain Risk Management', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+supply+chain+risk+management' },
    { label: 'Kelly Handerhan – Third-Party / Vendor Risk CISSP', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+third+party+vendor+risk' },
  ],
};

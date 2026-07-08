import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t4',
  overview: `Compliance in the CISSP context means conforming to externally or internally imposed requirements — laws/regulations, contracts, and industry standards — and it is closely tied to two foundational legal concepts: due diligence (the research and planning done before acting — "doing your homework") and due care (the ongoing, reasonable actions taken to protect something once you know about a risk — "doing what a reasonably prudent person would do"). A classic CISSP distinction: due diligence is proving you researched/planned appropriately; due care is proving you acted on that knowledge. A failure to exercise due care can expose an organization (and individual officers) to a finding of negligence.

Compliance obligations fall into three broad buckets that CISSP expects you to distinguish: regulatory/legal (imposed by government, e.g., GDPR, HIPAA, SOX — non-compliance can mean fines or criminal liability), contractual (imposed by a business agreement, e.g., a client contract requiring specific security controls, or PCI DSS which is technically a contractual/industry-body requirement enforced through payment card brand agreements, not a law), and industry/regulatory-adjacent standards (e.g., PCI DSS, ISO 27001 certification requirements) that may not carry government force of law but carry real business consequences (loss of ability to process card payments, loss of certification, contract breach).

CISSP also tests privacy-specific compliance concepts: data residency/sovereignty, cross-border data transfer restrictions, and the idea that compliance is a floor, not a ceiling — being compliant does not automatically mean an organization is secure or has exercised adequate due care; compliance is necessary but not sufficient.`,
  examFraming: `(ISC)² wants you to correctly categorize a described obligation as regulatory, contractual, or industry-standard-driven, and to identify whether a scenario is testing due diligence (pre-action research/planning) versus due care (ongoing reasonable protective action). Expect scenarios where an organization is "compliant" with a checklist but suffers a breach anyway — the correct reasoning is that compliance is a minimum baseline, not a guarantee of security, and being compliant does not excuse a failure of due care. Also expect trap questions distinguishing PCI DSS (contractual/industry, not government law) from GDPR/HIPAA (statutory law) — many candidates mistakenly treat all major compliance frameworks as "laws."`,
  keyTerms: [
    { term: 'Due Diligence', definition: 'The research, investigation, and planning conducted before taking action — "doing your homework" to understand risk and obligations.' },
    { term: 'Due Care', definition: 'The ongoing, reasonable steps taken to protect an asset or address a known risk, consistent with what a reasonably prudent person/professional would do.' },
    { term: 'Regulatory Compliance', definition: 'Adherence to laws and regulations imposed by a government body (e.g., GDPR, HIPAA, SOX); non-compliance can carry fines or criminal penalties.' },
    { term: 'Contractual Compliance', definition: 'Adherence to security/privacy obligations agreed to in a contract between parties (e.g., a client SLA requiring specific controls, or PCI DSS obligations under a merchant agreement).' },
    { term: 'Industry Standard Compliance', definition: 'Adherence to a non-governmental standard or certification (e.g., ISO 27001, PCI DSS) that carries business/market consequences rather than direct legal force.' },
    { term: 'Negligence', definition: 'A legal finding that a party failed to exercise the standard of due care that a reasonably prudent person/organization would have exercised, resulting in harm.' },
    { term: 'Data Sovereignty/Residency', definition: 'Legal principles requiring data to be subject to the laws of the country in which it is collected/stored, often restricting cross-border data transfer.' },
    { term: 'Compliance as a Floor', definition: 'The principle that meeting compliance requirements represents a minimum baseline, not proof of adequate security or due care.' },
  ],
  scenario: `A retail company completes its annual PCI DSS assessment and receives a passing Report on Compliance (ROC). Three months later, attackers exploit an unpatched vulnerability that was technically outside the PCI DSS-scoped cardholder data environment, pivoting laterally to reach payment systems anyway, resulting in a major card data breach.

The company argues to regulators and the payment brands that it was "PCI compliant" at the time of the breach. A CISSP-minded reviewer recognizes the flaw in this defense: PCI DSS compliance (a contractual/industry obligation tied to payment card brand agreements, not a government law) is a point-in-time minimum baseline, not a guarantee of security. The company still had an ongoing due care obligation to patch known vulnerabilities and monitor its broader network — compliance with a checklist does not excuse a failure to exercise reasonable, ongoing due care once a risk (the unpatched system) was known or reasonably knowable.`,
  comparisonTables: [
    {
      caption: 'Due Diligence vs. Due Care',
      headers: ['Concept', 'Timing', 'What It Proves', 'Example'],
      rows: [
        ['Due Diligence', 'Before acting', 'You researched/planned appropriately', 'Conducting a vendor security assessment before signing a contract'],
        ['Due Care', 'Ongoing, after risk is known', 'You took reasonable protective action', 'Patching a known vulnerability within a defined SLA'],
      ],
    },
    {
      caption: 'Types of Compliance Obligations',
      headers: ['Type', 'Source of Authority', 'Consequence of Non-Compliance', 'Example'],
      rows: [
        ['Regulatory/Legal', 'Government/legislature', 'Fines, criminal liability, sanctions', 'GDPR, HIPAA, SOX'],
        ['Contractual', 'Business agreement between parties', 'Breach of contract, loss of business relationship', 'Client SLA requiring encryption of data in transit'],
        ['Industry/Standard', 'Industry body or certification scheme', 'Loss of certification, loss of ability to transact (e.g., card processing)', 'PCI DSS, ISO 27001'],
      ],
    },
  ],
  examTraps: [
    `PCI DSS is frequently mistaken for a government law — it is a contractual/industry obligation enforced through payment card brand agreements, not a statute.`,
    `Passing a compliance audit ("we're PCI compliant" / "we're ISO certified") does not equal being secure or having exercised due care — compliance is a floor, not a ceiling.`,
    `Due diligence and due care are commonly swapped — due diligence is the pre-action research/planning; due care is the ongoing reasonable protective action after a risk is known.`,
    `A scenario describing "we assessed the risk before the contract was signed" is testing due diligence; one describing "we kept patching/monitoring after we learned of the risk" is testing due care — read carefully to identify which is being tested.`,
    `Not every compliance failure is a legal/regulatory failure — some are purely contractual or industry-standard failures with business (not criminal) consequences; don't assume fines/criminal liability apply to every scenario.`,
  ],
  resources: [
    { label: 'Destination Certification – Due Diligence vs Due Care', url: 'https://www.youtube.com/results?search_query=destination+certification+due+diligence+due+care+cissp' },
    { label: 'Kelly Handerhan – Compliance and Legal Requirements', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+compliance+legal+requirements' },
  ],
};

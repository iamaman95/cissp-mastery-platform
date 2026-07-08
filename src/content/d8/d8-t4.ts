import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd8',
  topicId: 'd8-t4',
  overview: `Most organizations run far more software they acquired than software they wrote. Acquired software comes in several forms — commercial off-the-shelf (COTS) products, open-source software, managed/cloud services (SaaS), and outsourced/custom development — and each imports risk that must be assessed and managed, because you inherit vulnerabilities in code you did not write and often cannot fully inspect.

Assessment considerations include: the vendor's security posture and track record (their SDLC maturity, patch cadence, and vulnerability history), the software's known vulnerabilities and dependencies (an SBOM and SCA help), licensing and support terms (will it be patched for its expected life?), and contractual protections (right-to-audit, breach notification, SLAs, and escrow for source code if the vendor fails). For open-source, evaluate the health of the project (maintenance activity, community, license) rather than assuming 'many eyes' guarantees security. For SaaS, the cloud shared-responsibility model applies and vendor due diligence (e.g., SOC 2) is key.

Before deployment, acquired software should be evaluated in a test environment, hardened (change default credentials, disable unneeded features), and integrated with least privilege. Ongoing, it must be patched and monitored like any other component. The central theme: outsourcing the development does not outsource the risk — the acquiring organization remains accountable for securing what it deploys.`,
  examFraming: `(ISC)² frames acquired-software risk as third-party/supply-chain risk you must actively assess, not assume away. Expect: evaluate the vendor's security posture and the software's vulnerabilities/dependencies before acquisition; use contractual protections (right-to-audit, breach notification, source-code escrow); test and harden acquired software before production; and remember that 'many eyes' on open source does NOT guarantee it is secure. For SaaS, apply the shared responsibility model and vendor due diligence (SOC 2). A recurring point: the organization deploying acquired software remains accountable for the resulting risk, even though it did not write the code.`,
  keyTerms: [
    { term: 'COTS', definition: 'Commercial off-the-shelf software purchased from a vendor.' },
    { term: 'Open-Source Software Risk', definition: 'Risk from freely available code; requires evaluating project health, not assuming security.' },
    { term: 'Source-Code Escrow', definition: 'A third party holds source code, released to the customer if the vendor fails/ceases support.' },
    { term: 'Right-to-Audit Clause', definition: 'Contractual right to assess the vendor’s security controls.' },
    { term: 'Vendor Due Diligence', definition: 'Assessing a supplier’s security posture (e.g., via SOC 2) before and during engagement.' },
    { term: 'SBOM/SCA for Acquisition', definition: 'Using a bill of materials and composition analysis to understand components in acquired software.' },
    { term: 'Shared Responsibility (SaaS)', definition: 'The division of security duties between cloud provider and customer.' },
    { term: 'Software Support/EOL', definition: 'Whether the software will continue to receive security patches for its intended lifespan.' },
  ],
  scenario: `A company is buying a COTS analytics platform. Before signing, it assesses the vendor's security track record and patch history, requests a SOC 2 Type II, and reviews the product's dependencies (asking for an SBOM). It negotiates contractual protections: a right-to-audit clause, breach-notification terms, and source-code escrow in case the vendor goes out of business. It also considers an open-source alternative but checks the project's maintenance activity and license rather than assuming community review makes it safe. Before production, it deploys the chosen software in a test environment, changes default admin credentials, disables unused modules, and integrates it with least-privilege access. Post-deployment, it patches and monitors the product like any other asset. A CISSP question might ask what protects the customer if the software vendor goes bankrupt (source-code escrow) or note that open source is not automatically secure just because it is publicly reviewable.`,
  comparisonTables: [
    {
      caption: 'Acquired Software Types and Key Risk Focus',
      headers: ['Type', 'Key Risk Focus'],
      rows: [
        ['COTS', 'Vendor posture, patch support, hidden vulnerabilities'],
        ['Open source', 'Project health, license, unmaintained/vulnerable components'],
        ['SaaS/cloud', 'Shared responsibility, vendor due diligence (SOC 2)'],
        ['Outsourced custom dev', 'Code quality, IP/ownership, secure-SDLC of the vendor'],
      ],
    },
  ],
  examTraps: [
    'Outsourcing/acquiring software does not outsource the risk — the deploying organization remains accountable.',
    'Open source is NOT automatically secure because "many eyes" can review it — evaluate project health and vulnerabilities.',
    'Source-code escrow protects the customer if the vendor fails or stops supporting the product.',
    'Assess vendor posture and the software’s dependencies/vulnerabilities BEFORE acquisition, and test/harden BEFORE production.',
    'For SaaS, apply the shared responsibility model and vendor due diligence (e.g., SOC 2) — the provider does not secure everything.',
  ],
  resources: [
    { label: 'Destination Certification – Acquired Software & Third-Party Risk', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+acquired+software+third+party+risk+escrow' },
    { label: 'Kelly Handerhan – CISSP Acquired Software Security', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+acquired+software+supply+chain' },
  ],
};

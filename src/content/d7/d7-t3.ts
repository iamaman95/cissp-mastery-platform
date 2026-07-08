import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t3',
  overview: `Configuration management (CM) is the discipline of establishing and maintaining a known, authoritative state for systems throughout their lifecycle. Where change management governs how modifications are approved, configuration management governs what the approved state actually is — the documented baseline of hardware, software, settings, and versions that are deployed. Its security purpose is to eliminate uncertainty: you cannot secure, patch, or audit what you cannot accurately describe, and undocumented drift from a known-good state is a leading source of vulnerabilities.

The core CM artifact is the baseline — a formally reviewed, agreed-upon configuration that serves as the reference point for a system. Secure baselines are built by hardening: removing unnecessary services, closing unused ports, disabling default accounts, applying secure settings, and conforming to a recognized standard (for example CIS Benchmarks or DISA STIGs). Once a hardened baseline exists, imaging (creating a master 'gold image') lets the organization deploy that exact, known-good state to many systems consistently, and automated provisioning tools deploy and configure systems reproducibly rather than by manual, error-prone steps.

CM also encompasses identifying and tracking configuration items (CIs) in a configuration management database (CMDB), version control of configurations, and detecting drift — deviations from the baseline that occur over time through ad-hoc changes. CISSP ties CM directly to security: standardized hardened baselines reduce attack surface and make anomalies obvious; provisioning from images ensures new systems are not deployed insecurely; and configuration monitoring/continuous assessment detects when a system has drifted out of compliance so it can be remediated. Deprovisioning (securely retiring and sanitizing systems) closes the lifecycle.`,
  examFraming: `(ISC)² frames configuration management around the idea that a documented, hardened baseline is the foundation for every other operational control. Expect scenarios where inconsistent, manually built systems create security gaps, and the correct answer is to establish/enforce a standardized secure baseline, deploy from a hardened image, or automate provisioning. Distinguish configuration management (defining and maintaining the authoritative deployed state/baseline) from change management (approving modifications) — a very common exam pairing. Recognize that hardening means reducing attack surface to a defined standard, and that 'baseline' is the reference against which drift is measured. When a scenario describes systems that have quietly diverged from their intended settings, the concept being tested is configuration drift, and the remedy is detection plus re-imaging or remediation back to baseline.`,
  keyTerms: [
    { term: 'Baseline', definition: 'A formally reviewed and agreed-upon reference configuration for a system, against which changes and drift are measured.' },
    { term: 'Hardening', definition: 'Reducing a system’s attack surface by removing unnecessary services, closing unused ports, disabling default accounts, and applying secure settings per a standard.' },
    { term: 'Gold Image / Imaging', definition: 'A master, known-good system image built from a hardened baseline and deployed to many systems to ensure consistent, secure configuration.' },
    { term: 'Provisioning', definition: 'The automated, repeatable deployment and configuration of systems from a defined baseline, reducing manual error and inconsistency.' },
    { term: 'Configuration Item (CI)', definition: 'Any hardware, software, or setting tracked under configuration management, typically recorded in a configuration management database (CMDB).' },
    { term: 'Configuration Drift', definition: 'The gradual, often undocumented deviation of a system from its approved baseline caused by ad-hoc changes over time.' },
    { term: 'Security Baseline Standard', definition: 'A recognized hardening reference such as CIS Benchmarks or DISA STIGs used to define what a secure configuration should look like.' },
    { term: 'CMDB (Configuration Management Database)', definition: 'A repository that records configuration items and their relationships, providing the authoritative inventory of the deployed environment.' },
  ],
  scenario: `An organization has grown by acquiring smaller firms, and its server fleet was built ad hoc over years by different admins. No two web servers are configured the same way; some still run default accounts and unnecessary services, and there is no record of what 'correct' looks like. When a vulnerability is announced, the team cannot even say with confidence which servers are affected or configured securely.

The configuration-management remedy is to define a hardened baseline for each system role (using a standard such as CIS Benchmarks), capture it as a gold image, and re-provision or remediate existing servers to that baseline so every system is a known, consistent, hardened state. An inventory of configuration items in a CMDB tells the team exactly what is deployed, and continuous configuration monitoring detects drift so systems that quietly diverge can be pulled back into compliance. A CISSP question here tests whether you recognize that establishing and enforcing a standardized secure baseline — not simply patching individual boxes reactively — is the foundational fix, and that this is configuration management, distinct from the change-approval process.`,
  examTraps: [
    `Do not confuse configuration management (defining/maintaining the authoritative deployed baseline) with change management (approving proposed modifications) — they are complementary but distinct.`,
    `A 'baseline' is the reference state you measure against; deviation from it over time is configuration drift, and the remedy is detection plus remediation/re-imaging back to baseline.`,
    `Hardening is not just applying patches — it is reducing attack surface (disable default accounts, close unused ports, remove unneeded services) to a recognized standard like CIS or STIG.`,
    `Deploying from a hardened gold image is preferable to manually configuring each system, which reintroduces inconsistency and human error.`,
    `Without an accurate inventory (CMDB/CI tracking), you cannot reliably determine which systems are affected by a vulnerability or out of compliance.`,
  ],
  resources: [
    { label: 'Configuration management and baselines (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+configuration+management+baselines' },
    { label: 'System hardening and gold images explained', url: 'https://www.youtube.com/results?search_query=cissp+system+hardening+gold+image+baseline' },
  ],
};

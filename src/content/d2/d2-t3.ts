import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd2',
  topicId: 'd2-t3',
  overview: `Provisioning is the process of acquiring, configuring, and deploying an asset — hardware, virtual machine, cloud resource, or mobile device — so it can be used safely in production. Secure provisioning starts before the asset ever touches a network: it must be entered into the asset inventory (or CMDB) the moment it is acquired, so the organization always knows what it owns, where it lives, and who is accountable for it. An asset that exists but isn't inventoried is effectively invisible to security monitoring, patch management, and incident response — "you can't protect what you don't know you have" is a foundational CISSP theme that applies directly here.

Once inventoried, an asset must be configured against an approved baseline before deployment. A baseline configuration is the known-good, minimum-security starting state (patched OS, disabled unnecessary services, approved software set, secure default credentials changed). Hardening is the active process of stripping away attack surface — closing unused ports, removing sample accounts, disabling unneeded services and protocols — to bring a system into line with that baseline. Skipping this step and deploying a vendor's default image (which is often optimized for ease of use, not security) is one of the most common real-world provisioning failures, and it is a frequent theme in CISSP scenario questions.

Cloud environments add scalability and elasticity to the provisioning picture. Scalability is the planned ability to increase capacity (more/larger instances) to meet growing demand; elasticity is the automated, often near-real-time expansion and contraction of resources in response to actual load. Auto-scaling groups and infrastructure-as-code templates mean that insecure settings baked into a golden image or template get replicated instantly and at scale — a single misconfigured template can spin up hundreds of vulnerable instances in minutes. This makes secure configuration management (maintaining approved, version-controlled templates/images and validating drift from baseline) far more consequential in cloud provisioning than in traditional one-at-a-time on-premises deployment.

Provisioning also covers the full asset lifecycle transitions: transfer of ownership (reassigning a laptop between employees requires wiping and re-imaging, not just handing it over), and physical/endpoint provisioning such as BYOD and IoT devices, which must be enrolled in mobile device management (MDM), assigned an owner, and brought under policy before they are allowed to touch corporate resources. Across all of these contexts, the sequencing is the same: acquire, inventory, baseline/harden, configure per policy, then deploy — deploying before baselining, or baselining before inventorying, inverts the secure order and is the classic exam trap.`,
  examFraming: `(ISC)² wants candidates to reason about correct sequencing, not just recognize vocabulary. When a scenario describes a new asset (a laptop, a cloud instance, an IoT sensor), you should be able to identify what step comes FIRST: the asset must be recorded in inventory and assigned an owner/classification before it is configured, and it must be hardened against an approved baseline before it is connected to production networks or granted access to sensitive data. Expect questions that describe an organization deploying assets quickly (e.g., using a cloud default image, or letting new hires plug in laptops immediately) and ask you to identify the missing or out-of-order control.

You should also be able to reason about scale: cloud elasticity means a single insecure baseline/template error is magnified across every auto-scaled instance, so exam questions often test whether you recognize that image/template hardening and configuration management are BEST addressed at the template level, not by patching each running instance after the fact. Finally, expect questions on transfer of ownership and end-of-use — the same rigor applied to initial provisioning (wipe, re-image, reassign, re-inventory) must be applied when an asset changes hands or is repurposed, otherwise residual data or access rights carry over insecurely.`,
  keyTerms: [
    { term: 'Asset Inventory', definition: 'A complete, current record of all hardware, software, and cloud resources owned or used by an organization, including owner, location, and classification — the foundation for all other asset security controls.' },
    { term: 'Baseline Configuration', definition: 'The documented, approved minimum-security starting state (patch level, services, accounts, settings) that an asset must meet before it is placed into production.' },
    { term: 'Hardening', definition: 'The active process of reducing an asset\'s attack surface — disabling unnecessary services/ports, removing default accounts, applying secure settings — to bring it into compliance with a baseline.' },
    { term: 'Provisioning', definition: 'The end-to-end process of acquiring, inventorying, configuring, and deploying an asset for authorized use.' },
    { term: 'Configuration Management Database (CMDB)', definition: 'A centralized repository that tracks configuration items (assets) and the relationships between them, supporting change management and impact analysis.' },
    { term: 'Scalability', definition: 'The planned, often manual or scheduled capacity to add resources (compute, storage) to meet anticipated growth in demand.' },
    { term: 'Elasticity', definition: 'The automated capability of a cloud environment to expand and contract resources dynamically and near-instantly in response to real-time demand.' },
    { term: 'Golden Image', definition: 'A pre-hardened, approved template (VM image or container) used as the standardized starting point for provisioning new instances, ensuring consistent security posture at scale.' },
  ],
  scenario: `A retail company migrates its web storefront to a cloud provider ahead of the holiday shopping season. To handle traffic spikes, engineers configure an auto-scaling group that launches additional web server instances automatically whenever CPU utilization crosses a threshold. To save time, the team builds the auto-scaling template directly from the cloud marketplace's default vendor image rather than the company's internally hardened golden image, reasoning they can "patch it later once things calm down."

During a Black Friday traffic surge, the auto-scaling group launches forty additional instances within twenty minutes. Each new instance carries the vendor default image's unnecessary open management port and a well-documented default admin account. Within hours, automated internet-wide scanners locate and compromise several of the new instances. Because the insecure configuration was baked into the launch template rather than corrected once at the image level, every newly scaled instance repeated the same vulnerability — the elasticity that was supposed to be an operational advantage instead multiplied the organization's exposure at exactly the moment of highest business risk. A properly hardened, version-controlled golden image applied at the template level — validated against the organization's baseline before it was ever referenced by the auto-scaling group — would have propagated the secure configuration to every instance instead.`,
  comparisonTables: [
    {
      caption: 'Secure Provisioning Sequence: Correct Order and Rationale',
      headers: ['Step', 'Action', 'Why It Must Happen at This Point'],
      rows: [
        ['1', 'Acquire / procure asset', 'Establishes a documented origin and ownership before the asset enters the environment.'],
        ['2', 'Record in asset inventory / CMDB', 'Ensures the asset is visible to monitoring, patching, and audit before any configuration work begins.'],
        ['3', 'Apply baseline configuration and harden', 'Removes default credentials, unneeded services, and known vulnerabilities before network exposure.'],
        ['4', 'Configure per policy (access control, logging, classification)', 'Aligns the asset with organizational security and compliance requirements.'],
        ['5', 'Deploy to production / grant network and data access', 'Only occurs after the asset is verified compliant, minimizing the window of exposure.'],
      ],
    },
    {
      caption: 'On-Premises vs. Cloud Provisioning Considerations',
      headers: ['Consideration', 'On-Premises Provisioning', 'Cloud Provisioning'],
      rows: [
        ['Speed / scale of deployment', 'Manual, one asset at a time; errors are contained to a single device.', 'Automated and elastic; a single template error is replicated across every auto-scaled instance.'],
        ['Configuration source', 'IT staff image each machine individually from an approved build.', 'Golden images / IaC templates define the baseline for all future instances.'],
        ['Inventory tracking', 'Physical asset tags, CMDB entry at receipt.', 'Cloud asset tagging, auto-discovery tools, and CMDB integration with the provider API.'],
        ['Ownership transfer', 'Physical wipe/re-image required when reassigning hardware.', 'Instance termination and re-provisioning from a clean, approved template.'],
        ['Primary risk if hardening is skipped', 'A single vulnerable endpoint.', 'Mass-scale replication of the vulnerability across every scaled instance.'],
      ],
    },
  ],
  examTraps: [
    `Deploying an asset "quickly" using a vendor default image is almost always the wrong answer when a hardened/baseline alternative is available in the options — CISSP treats default configurations as inherently insecure.`,
    `Don't confuse scalability (planned capacity growth) with elasticity (automated, real-time scaling) — questions may test whether you know cloud elasticity is what amplifies a bad template across many instances quickly.`,
    `"Patch it later" is a trap answer — the FIRST/BEST action is to fix the baseline/template before further deployment, not to remediate each instance individually after the fact.`,
    `Asset inventory must occur before or alongside acquisition/configuration, not as an afterthought — a question describing "we'll add it to the CMDB later" is describing an out-of-order, insecure process.`,
    `Transfer of ownership (reassigning a device) requires the same rigor as initial provisioning (wipe/re-image/re-inventory) — simply handing over a laptop without resetting it is a common distractor implying this step can be skipped.`,
  ],
  resources: [
    { label: 'Destination Certification – Secure Asset Provisioning', url: 'https://www.youtube.com/results?search_query=destination+certification+secure+provisioning+cissp' },
    { label: 'Kelly Handerhan – CISSP Asset Security and Provisioning', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+asset+provisioning' },
  ],
};

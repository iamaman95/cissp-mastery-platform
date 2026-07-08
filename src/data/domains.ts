export interface Topic {
  id: string;
  title: string;
}

export interface Domain {
  id: string;
  number: number;
  title: string;
  weight: number; // official (ISC)^2 2024 outline weighting, as a fraction
  topics: Topic[];
}

export const domains: Domain[] = [
  {
    id: 'd1',
    number: 1,
    title: 'Security and Risk Management',
    weight: 0.15,
    topics: [
      { id: 'd1-t1', title: 'Professional Ethics' },
      { id: 'd1-t2', title: 'Security Concepts (CIA Triad and Beyond)' },
      { id: 'd1-t3', title: 'Security Governance Principles' },
      { id: 'd1-t4', title: 'Compliance and Other Requirements' },
      { id: 'd1-t5', title: 'Legal and Regulatory Issues (GDPR, DPDP, PCI-DSS, IP Law)' },
      { id: 'd1-t6', title: 'Investigation Types' },
      { id: 'd1-t7', title: 'Security Policy, Standards, Procedures, and Guidelines' },
      { id: 'd1-t8', title: 'Business Continuity (BC) Requirements' },
      { id: 'd1-t9', title: 'Personnel Security Policies and Procedures' },
      { id: 'd1-t10', title: 'Risk Management Concepts' },
      { id: 'd1-t11', title: 'Threat Modeling' },
      { id: 'd1-t12', title: 'Supply Chain Risk Management (SCRM)' },
      { id: 'd1-t13', title: 'Security Awareness, Education, and Training' },
    ],
  },
  {
    id: 'd2',
    number: 2,
    title: 'Asset Security',
    weight: 0.10,
    topics: [
      { id: 'd2-t1', title: 'Identifying and Classifying Information and Assets' },
      { id: 'd2-t2', title: 'Information and Asset Handling Requirements' },
      { id: 'd2-t3', title: 'Provisioning Resources Securely' },
      { id: 'd2-t4', title: 'Data Lifecycle Management' },
      { id: 'd2-t5', title: 'Asset Retention' },
      { id: 'd2-t6', title: 'Data Security Controls and Compliance (DLP, DRM)' },
    ],
  },
  {
    id: 'd3',
    number: 3,
    title: 'Security Architecture and Engineering',
    weight: 0.13,
    topics: [
      { id: 'd3-t1', title: 'Secure Design Principles in Engineering Processes' },
      { id: 'd3-t2', title: 'Security Models (Bell-LaPadula, Biba, Clark-Wilson, Brewer-Nash)' },
      { id: 'd3-t3', title: 'Selecting Controls Based on Systems Security Requirements (Common Criteria)' },
      { id: 'd3-t4', title: 'Security Capabilities of Information Systems' },
      { id: 'd3-t5', title: 'Assessing and Mitigating Architecture Vulnerabilities' },
      { id: 'd3-t6', title: 'Cryptography: Symmetric Encryption' },
      { id: 'd3-t7', title: 'Cryptography: Asymmetric Encryption and Key Exchange' },
      { id: 'd3-t8', title: 'Cryptography: Hashing and Digital Signatures' },
      { id: 'd3-t9', title: 'Cryptography: PKI and Trust Models' },
      { id: 'd3-t10', title: 'Cryptography: Key Management' },
      { id: 'd3-t11', title: 'Cryptography: Cryptanalytic Attacks' },
      { id: 'd3-t12', title: 'Site and Facility Security Design Principles' },
      { id: 'd3-t13', title: 'Site and Facility Security Controls' },
    ],
  },
  {
    id: 'd4',
    number: 4,
    title: 'Communication and Network Security',
    weight: 0.13,
    topics: [
      { id: 'd4-t1', title: 'Secure Network Architecture Design (OSI and TCP/IP Models)' },
      { id: 'd4-t2', title: 'Secure Network Components (Firewalls, IDS/IPS, Wireless, VoIP)' },
      { id: 'd4-t3', title: 'Secure Communication Channels (VPN, Protocols)' },
    ],
  },
  {
    id: 'd5',
    number: 5,
    title: 'Identity and Access Management (IAM)',
    weight: 0.13,
    topics: [
      { id: 'd5-t1', title: 'Controlling Physical and Logical Access to Assets' },
      { id: 'd5-t2', title: 'Identification and Authentication of People, Devices, and Services' },
      { id: 'd5-t3', title: 'Federated Identity with Third-Party Services (SSO)' },
      { id: 'd5-t4', title: 'Authorization Mechanisms (DAC, MAC, RBAC, ABAC)' },
      { id: 'd5-t5', title: 'Identity and Access Provisioning Lifecycle' },
      { id: 'd5-t6', title: 'Implementing Authentication Systems' },
    ],
  },
  {
    id: 'd6',
    number: 6,
    title: 'Security Assessment and Testing',
    weight: 0.12,
    topics: [
      { id: 'd6-t1', title: 'Designing and Validating Assessment, Test, and Audit Strategies' },
      { id: 'd6-t2', title: 'Conducting Security Control Testing' },
      { id: 'd6-t3', title: 'Collecting Security Process Data' },
      { id: 'd6-t4', title: 'Analyzing Test Output and Generating Reports' },
      { id: 'd6-t5', title: 'Conducting or Facilitating Security Audits' },
    ],
  },
  {
    id: 'd7',
    number: 7,
    title: 'Security Operations',
    weight: 0.13,
    topics: [
      { id: 'd7-t1', title: 'Understanding and Complying with Investigations' },
      { id: 'd7-t2', title: 'Logging and Monitoring Activities' },
      { id: 'd7-t3', title: 'Configuration Management' },
      { id: 'd7-t4', title: 'Foundational Security Operations Concepts' },
      { id: 'd7-t5', title: 'Resource Protection' },
      { id: 'd7-t6', title: 'Incident Management' },
      { id: 'd7-t7', title: 'Detective and Preventive Measures' },
      { id: 'd7-t8', title: 'Patch and Vulnerability Management' },
      { id: 'd7-t9', title: 'Change Management Processes' },
      { id: 'd7-t10', title: 'Recovery Strategies' },
      { id: 'd7-t11', title: 'Disaster Recovery (DR) Processes' },
      { id: 'd7-t12', title: 'Testing Disaster Recovery Plans (DRP)' },
      { id: 'd7-t13', title: 'Business Continuity (BC) Planning and Exercises' },
      { id: 'd7-t14', title: 'Physical Security Implementation' },
      { id: 'd7-t15', title: 'Personnel Safety and Security Concerns' },
    ],
  },
  {
    id: 'd8',
    number: 8,
    title: 'Software Development Security',
    weight: 0.11,
    topics: [
      { id: 'd8-t1', title: 'Integrating Security in the SDLC' },
      { id: 'd8-t2', title: 'Security Controls in Software Development Ecosystems' },
      { id: 'd8-t3', title: 'Assessing the Effectiveness of Software Security' },
      { id: 'd8-t4', title: 'Assessing the Security Impact of Acquired Software' },
      { id: 'd8-t5', title: 'Defining and Applying Secure Coding Guidelines and Standards (OWASP)' },
    ],
  },
];

export function getDomain(domainId: string): Domain | undefined {
  return domains.find((d) => d.id === domainId);
}

export function getTopic(domainId: string, topicId: string): Topic | undefined {
  return getDomain(domainId)?.topics.find((t) => t.id === topicId);
}

export function allTopics(): { domain: Domain; topic: Topic }[] {
  return domains.flatMap((domain) => domain.topics.map((topic) => ({ domain, topic })));
}

export function totalTopicCount(): number {
  return domains.reduce((sum, d) => sum + d.topics.length, 0);
}

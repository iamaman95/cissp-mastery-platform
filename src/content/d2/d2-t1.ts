import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd2',
  topicId: 'd2-t1',
  overview: `Asset Security begins with knowing what you have and how much it matters. An asset is anything of value to the organization — data, hardware, software, intellectual property, even people and reputation — and an asset inventory is the authoritative, kept-current list of those assets, their location, and their owner. You cannot protect, classify, or budget controls for something you don't know exists, which is why CISSP treats inventory as the precondition for every later Domain 2 topic (classification, handling, retention, destruction).

Classification is the act of assigning a value tier to information (or an asset) based on criteria such as its value to the organization, its age, its useful life, the cost/impact if disclosed or lost, and any legal or regulatory sensitivity attached to it (PII, PHI, PCI data, export-controlled technical data, etc.). Two classification schemes show up repeatedly on the exam. The commercial/private-sector scheme typically uses Public, Sensitive, Private, and Confidential (from least to most sensitive), sometimes with variations like "Internal Use Only." The government/military scheme uses Unclassified, Confidential, Secret, and Top Secret, tied to the degree of damage unauthorized disclosure would cause to national security. Both schemes exist to drive proportional controls — higher classification means stricter handling, storage, transmission, and destruction requirements — not to create bureaucracy for its own sake.

Classification only works if someone is accountable for it, which is why CISSP is precise about asset and data roles. The data owner (usually a senior business-side manager or executive) is accountable for the data, decides its classification, approves who may access it, and defines the protection requirements — this is a business decision, not a technical one. The data custodian (typically IT or an infrastructure team) performs the hands-on technical work of implementing those protections: backups, access provisioning, encryption configuration, and day-to-day maintenance, but does not decide classification. The data steward focuses on the quality, context, and proper labeling/use of data, often bridging business and technical concerns, especially in data governance programs. The system owner is accountable for the system or platform the data resides on, which may be a distinct role from the data owner. Understanding that these are separate, non-interchangeable responsibilities is one of the most heavily tested ideas in this topic.

Once classified, assets need a documented baseline of minimum required controls appropriate to their classification tier, and this baseline should be periodically reviewed since classification is not permanent — data can be reclassified (usually downward, i.e., declassified) as it ages, loses sensitivity, or as regulatory triggers expire. Criteria for classification decisions include: the value of the information to the organization or to a competitor, the age of the data and whether it still carries the same sensitivity, its useful life (how long the organization needs to protect it), and whether disclosure would cause competitive, legal, regulatory, safety, or reputational harm.`,
  examFraming: `(ISC)² wants you to reason about accountability and process, not just recite definitions. The most common question pattern gives you a scenario and asks who is responsible for classifying a given piece of data, or who should be consulted first — and the expected answer is almost always the data owner (a business-side role), never IT, the security team, or the custodian, even though those groups are heavily involved in day-to-day handling. A second common pattern asks you to select the correct classification level for a described dataset based on impact if disclosed, requiring you to apply criteria (value, sensitivity, regulatory exposure) rather than memorize a fixed list. A third pattern tests whether you understand that classification drives proportional controls — you should be able to reason "this is Confidential/Secret-equivalent, therefore it needs X handling," not just label it and stop. Expect distractors that assign owner-level accountability to custodians or to "the security department" — this is the single most frequently tested trap in the entire Domain 2 asset-security topic area.`,
  keyTerms: [
    { term: 'Data Owner', definition: 'The senior business-accountable role (often an executive or department head) who determines classification, approves access, and is ultimately accountable for the protection of a specific data asset.' },
    { term: 'Data Custodian', definition: 'The technical role (typically IT/infrastructure staff) responsible for implementing and maintaining the day-to-day controls (backups, encryption, access provisioning) the data owner requires — does not set classification.' },
    { term: 'Data Steward', definition: 'The role focused on data quality, context, definitions, and proper labeling/use, often coordinating between business and technical stakeholders in a data governance program.' },
    { term: 'System Owner', definition: 'The individual accountable for a specific system or platform (hardware/software), which may be distinct from the owner of the data that resides on it.' },
    { term: 'Asset Inventory', definition: 'A current, authoritative record of all organizational assets (data, hardware, software, and other valuables), including location, custodian, and classification, that underpins all further protection decisions.' },
    { term: 'Classification Criteria', definition: 'The factors used to assign a sensitivity tier to information, including value, age, useful life, and the legal/regulatory/competitive impact of disclosure or loss.' },
    { term: 'Baseline', definition: 'The documented minimum set of security controls required for assets at a given classification level, used as a consistent starting point before tailoring to specific risk.' },
    { term: 'Data Controller / Data Processor', definition: 'Privacy-law roles (e.g., under GDPR): the controller determines the purposes and means of processing personal data (similar in spirit to a data owner), while the processor acts on the controller\'s behalf (similar in spirit to a custodian).' },
  ],
  scenario: `A mid-size healthcare SaaS company is preparing for a security audit and discovers that its marketing analytics team has been storing a spreadsheet of patient appointment histories (exported from the clinical system for a churn-analysis project) on a shared drive with no access restrictions, no classification label, and no owner listed in the asset inventory. The CISO asks: "Who should decide how this data should be classified and protected?"

IT argues they should decide, since they manage the shared drive. The security team argues they should decide, since they own the audit finding. The correct answer, from a CISSP standpoint, is neither — the data owner (in this case, likely a clinical operations or compliance executive accountable for patient data) must determine the classification (almost certainly Confidential/Private given PHI regulatory exposure under HIPAA) and the required protections. IT, as custodian, then implements those protections (access control lists, encryption, audit logging) once the owner has decided. The lesson: technical teams execute protection; only the accountable business owner decides classification and access policy — conflating these roles is the exact trap CISSP exam questions are built around.`,
  comparisonTables: [
    {
      caption: 'Commercial vs. Government/Military Classification Schemes',
      headers: ['Commercial (Private Sector)', 'Government/Military', 'Typical Disclosure Impact'],
      rows: [
        ['Public', 'Unclassified', 'No harm from disclosure; freely releasable'],
        ['Sensitive', 'Confidential', 'Some damage to the organization/national security if disclosed'],
        ['Private', 'Secret', 'Serious damage if disclosed'],
        ['Confidential', 'Top Secret', 'Grave/exceptionally grave damage if disclosed'],
      ],
    },
    {
      caption: 'Asset & Data Roles: Who Does What',
      headers: ['Role', 'Primary Responsibility', 'Decides Classification?'],
      rows: [
        ['Data Owner', 'Accountable for the data; approves access and protection requirements', 'Yes — this is the owner\'s decision'],
        ['Data Custodian', 'Implements technical controls (backups, encryption, provisioning) on the owner\'s behalf', 'No — executes, does not decide'],
        ['Data Steward', 'Manages data quality, context, and proper labeling/definitions', 'No — advises/supports governance, not final authority'],
        ['System Owner', 'Accountable for the system/platform hosting the data', 'No, unless also acting as data owner'],
        ['User', 'Uses data per policy; must handle it according to its classification', 'No'],
      ],
    },
  ],
  examTraps: [
    `Assuming IT or the security team classifies data — classification authority belongs to the data owner, a business-accountable role, not a technical one.`,
    `Confusing "custodian" with "owner" — custodians implement controls the owner specifies; they are never accountable for the classification decision itself.`,
    `Treating classification as permanent — data can and should be reclassified (often downgraded) as it ages or loses sensitivity; a "MOST accurate current classification" question expects you to weigh current criteria, not the original label.`,
    `Picking a classification level based only on data type keywords (e.g., "medical" always equals highest tier) rather than actually reasoning about regulatory exposure, value, and impact of disclosure described in the scenario.`,
    `Overlooking that a "system owner" and "data owner" can be two different people — a question may test whether you correctly identify which role is accountable for a specific decision (protecting the platform vs. classifying the data on it).`,
  ],
  resources: [
    { label: 'Destination Certification – Data Classification and Asset Security', url: 'https://www.youtube.com/results?search_query=destination+certification+data+classification' },
    { label: 'Kelly Handerhan – CISSP Asset Classification and Ownership', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+asset+classification' },
  ],
};

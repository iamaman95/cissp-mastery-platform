import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd5',
  topicId: 'd5-t1',
  overview: `Access control governs how subjects (users, processes, devices) are allowed to interact with objects (files, systems, facilities, data). CISSP frames this domain around a repeatable chain: identification (claiming an identity), authentication (proving it), authorization (deciding what the proven identity may do), and accountability (logging what it did). Domain 5 opens by insisting that both physical access (doors, cabinets, data-center cages) and logical access (accounts, permissions, network segments) protect the same underlying assets and must be governed together — a strong logical control is defeated if anyone can walk to the console.

Two organizing principles dominate this topic. Least privilege grants a subject only the access strictly required to perform its function, and no more. Need-to-know narrows that further to the specific data required for a specific task, even within an authorized clearance. Related is separation of duties, which splits a sensitive process so no single person can complete it alone, deterring fraud. Defense in depth layers physical and logical controls so the failure of one does not expose the asset.

Assets to protect extend beyond files. CISSP explicitly lists information, systems, devices, and facilities as things access control governs. Controls are also categorized by type — preventive (locks, mantraps, permissions), detective (CCTV, log review, IDS), deterrent (warning signs, visible cameras), corrective, compensating, and recovery — and by nature: physical, technical (logical), and administrative (policies, procedures). Expect the exam to ask you to map a described control to the correct category and to recognize that a single mechanism (e.g., a badge reader with logging) can serve preventive and detective roles at once.`,
  examFraming: `(ISC)² tests whether you can apply least privilege and need-to-know to a described situation rather than merely define them. A frequent pattern gives a user with a broad clearance who requests data outside their current task — the correct answer denies it on need-to-know grounds even though the clearance would technically permit it. Another pattern asks you to classify a control by category (preventive vs. detective vs. deterrent) or nature (physical vs. technical vs. administrative). Watch for questions where physical access undermines logical controls: an unencrypted server behind a strong firewall but in an unlocked room is still exposed. Also expect "compensating control" scenarios where a required control is infeasible and you must select the best substitute that provides equivalent protection.`,
  keyTerms: [
    { term: 'Least Privilege', definition: 'Granting a subject only the minimum access rights and permissions required to perform its authorized function, and nothing more.' },
    { term: 'Need-to-Know', definition: 'Restricting access to specific information to only those whose current task requires it, even when their clearance would otherwise permit broader access.' },
    { term: 'Separation of Duties', definition: 'Dividing a sensitive task among multiple people so that no single individual can complete it alone, reducing fraud and error risk.' },
    { term: 'Defense in Depth', definition: 'Layering multiple, diverse physical, technical, and administrative controls so that the failure or bypass of one control does not expose the asset.' },
    { term: 'Subject / Object', definition: 'A subject is the active entity (user, process, device) requesting access; an object is the passive resource (file, system, facility) being accessed.' },
    { term: 'Compensating Control', definition: 'An alternative control implemented when a primary/required control is not feasible, providing an equivalent or comparable level of protection.' },
    { term: 'Mantrap (Access Control Vestibule)', definition: 'A physical control with two interlocking doors where only one can open at a time, preventing tailgating/piggybacking into a secured area.' },
  ],
  scenario: `A cleared analyst on a defense contract holds a Secret clearance. Mid-project she asks a data steward for access to a Secret-classified dataset from an unrelated program she has no assignment on, out of professional curiosity. Her clearance level is sufficient to view Secret material.

Should access be granted? No. Clearance establishes the maximum sensitivity a subject may access, but need-to-know determines whether that specific data is required for the subject's current duties. Because the dataset is unrelated to her assigned task, need-to-know is not satisfied and access must be denied despite the adequate clearance. A CISSP question here tests whether you distinguish clearance (a ceiling) from need-to-know (a task-based gate) rather than assuming clearance alone authorizes access.`,
  comparisonTables: [
    {
      caption: 'Control categories by function (with physical and logical examples)',
      headers: ['Category', 'Purpose', 'Physical Example', 'Logical Example'],
      rows: [
        ['Preventive', 'Stop an incident before it happens', 'Locked door, mantrap', 'Permissions, firewall rules'],
        ['Detective', 'Identify an incident that occurred', 'CCTV, motion sensor', 'Audit logs, IDS'],
        ['Deterrent', 'Discourage a would-be violator', 'Warning signage, visible cameras', 'Login banner warning of monitoring'],
        ['Corrective', 'Restore systems after an incident', 'Fire suppression', 'Quarantine + patch of infected host'],
        ['Compensating', 'Substitute when primary control is infeasible', 'Guard where a lock cannot be installed', 'Extra logging where MFA is not yet supported'],
      ],
    },
  ],
  examTraps: [
    `Adequate clearance does not equal authorization — need-to-know is a separate, task-based gate that can deny access the clearance would otherwise allow.`,
    `Least privilege (minimum permissions for a role) and need-to-know (minimum data for a task) are distinct; questions may reward the more specific of the two.`,
    `Strong logical controls do not protect an asset that is physically accessible — physical and logical access must both be governed.`,
    `A single control can occupy multiple categories (a logging badge reader is both preventive and detective); pick the category the question emphasizes.`,
    `A deterrent control (warning sign) does not prevent access — do not confuse it with a preventive control that physically or technically blocks the action.`,
  ],
  resources: [
    { label: 'Least Privilege and Need-to-Know (CISSP Domain 5)', url: 'https://www.youtube.com/results?search_query=cissp+least+privilege+need+to+know+access+control' },
    { label: 'Physical vs Logical Access Controls Explained', url: 'https://www.youtube.com/results?search_query=cissp+physical+logical+access+control+categories' },
  ],
};

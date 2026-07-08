import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd5',
  topicId: 'd5-t5',
  overview: `The identity and access provisioning lifecycle governs an account from creation to deletion, often summarized as Joiner–Mover–Leaver (JML). Getting this lifecycle right is one of the most common real-world gaps CISSP tests.

Joiner (provisioning): when someone joins, they are given an identity and access appropriate to their role, ideally following least privilege and driven by an authoritative source (usually HR). Access should be granted just-in-time and role-appropriate, not copied wholesale from another employee ('access cloning'), which spreads excess privilege.

Mover (modification): when someone changes roles, their old access should be reviewed and revoked as new access is granted. Failing to remove old access causes privilege creep (aggregation of unnecessary rights over time), a frequent audit finding.

Leaver (deprovisioning): when someone leaves, their access must be revoked promptly — immediately for involuntary terminations. Orphaned accounts (still-active accounts of departed users) are a serious risk and a common breach vector.

Two ongoing controls support the lifecycle: access reviews / recertification (periodically re-validating that each user's access is still appropriate, with managers attesting) and account/entitlement audits. Automating provisioning/deprovisioning (e.g., via an identity governance tool tied to HR) reduces error and lag.`,
  examFraming: `(ISC)² frames this around timely, least-privilege lifecycle management. Key exam points: revoke a terminated (especially for-cause) employee's access immediately; on role change, remove old access to prevent privilege creep; conduct periodic access recertification so entitlements do not drift; orphaned accounts are a top risk. HR is typically the authoritative source that should trigger provisioning/deprovisioning. Avoid access cloning (copying another user's permissions) because it propagates over-privilege. Expect FIRST/BEST questions on what to do at termination or role change.`,
  keyTerms: [
    { term: 'Provisioning (Joiner)', definition: 'Creating an identity and granting role-appropriate, least-privilege access when someone joins.' },
    { term: 'Privilege Creep', definition: 'Accumulation of unnecessary access over time, often from unremoved permissions after role changes.' },
    { term: 'Deprovisioning (Leaver)', definition: 'Promptly revoking access and disabling accounts when someone leaves.' },
    { term: 'Orphaned Account', definition: 'An active account belonging to a departed user or unknown owner — a serious risk.' },
    { term: 'Access Review / Recertification', definition: 'Periodic re-validation that each user’s access is still appropriate, with manager attestation.' },
    { term: 'Authoritative Source', definition: 'The system of record (usually HR) that drives identity provisioning and deprovisioning.' },
    { term: 'Access Cloning', definition: 'Copying another user’s permissions to a new user — risky because it spreads excess privilege.' },
    { term: 'Identity Governance', definition: 'Tools/processes automating and auditing the provisioning lifecycle and entitlements.' },
  ],
  scenario: `An employee is hired into the accounting team. HR (the authoritative source) triggers provisioning, and she receives the least-privilege access defined for her role — not a copy of a senior colleague's broad permissions. A year later she transfers to marketing; a well-run mover process reviews and removes her accounting access as marketing access is granted, preventing privilege creep. Quarterly access recertification asks her manager to confirm her entitlements are still appropriate. When she eventually resigns, deprovisioning disables her accounts promptly (and immediately if it were a for-cause termination), avoiding an orphaned account. A CISSP question might describe an employee who moved departments three times and accumulated access from each — the problem is privilege creep, and the control is access review/recertification and removing old access on role change.`,
  comparisonTables: [
    {
      caption: 'Joiner–Mover–Leaver Lifecycle',
      headers: ['Phase', 'Action', 'Key Risk if Mishandled'],
      rows: [
        ['Joiner', 'Provision least-privilege, role-appropriate access', 'Over-provisioning / access cloning'],
        ['Mover', 'Review and remove old access when granting new', 'Privilege creep'],
        ['Leaver', 'Promptly revoke/disable all access', 'Orphaned accounts / insider misuse'],
        ['Ongoing', 'Periodic access recertification and audits', 'Entitlement drift going undetected'],
      ],
    },
  ],
  examTraps: [
    'Terminated users (especially for-cause) must have access revoked immediately — leaving it active is a top exam-wrong scenario.',
    'On role change, REMOVE old access; failing to do so causes privilege creep, a classic audit finding.',
    'Orphaned accounts (active accounts of departed/unknown users) are a serious risk — detect them via access reviews.',
    'HR is usually the authoritative source that should trigger provisioning/deprovisioning — automate this linkage.',
    'Avoid access cloning (copying another user’s rights) because it propagates excess privilege instead of applying least privilege.',
    'Access recertification is periodic re-validation — a point-in-time provisioning check is not enough.',
  ],
  resources: [
    { label: 'Destination Certification – Provisioning Lifecycle (JML)', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+provisioning+lifecycle+joiner+mover+leaver' },
    { label: 'Kelly Handerhan – CISSP Access Provisioning & Recertification', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+provisioning+deprovisioning+access+review' },
  ],
};

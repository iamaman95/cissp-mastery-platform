import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t9',
  overview: `Change management is the formal, documented discipline that governs how modifications are proposed, reviewed, approved, tested, implemented, and reviewed across an organization's systems. Its security purpose is to ensure that changes do not introduce vulnerabilities, break controls, or reduce availability, and that every change is traceable and reversible. Uncontrolled ("cowboy") changes are a leading cause of outages and security incidents, which is why CISSP treats change management as an operational security control, not merely an IT-service convenience.

The lifecycle typically begins with a Request for Change (RFC) that documents the reason, scope, risk, and expected impact. The RFC is evaluated by a Change Advisory Board (CAB) — a cross-functional group that reviews risk, scheduling, and rollback readiness before granting approval. Approved changes are scheduled (often within a maintenance window), tested where possible, implemented, verified, and then closed with a post-implementation review. Every change must have a documented rollback (back-out) plan so the environment can be restored to a known-good state if the change fails.

CISSP distinguishes normal changes (routed through the full CAB process) from standard changes (pre-approved, low-risk, repeatable — e.g. routine patching following an established procedure) and emergency changes. An emergency change addresses an urgent issue (a live outage or actively exploited vulnerability) and follows an expedited path, often through an Emergency Change Advisory Board (ECAB) with a smaller quorum. Critically, emergency changes are still documented and are reviewed after the fact — expediting approval never means skipping documentation or the post-implementation review.`,
  examFraming: `(ISC)² frames change management around control, accountability, and reversibility rather than ITIL terminology memorization. Expect scenarios where a change is being rushed, undocumented, or pushed straight to production, and you must select the step that restores discipline — usually "submit/evaluate an RFC," "obtain CAB approval," or "ensure a rollback plan exists." A recurring exam pattern: even under emergency conditions, the correct answer preserves documentation and post-change review; expediting is about approval speed, not about bypassing records. Another common frame contrasts change management (planned, controlled modifications) with configuration management (maintaining the authoritative baseline of what is deployed) — know that the two are complementary but distinct.`,
  keyTerms: [
    { term: 'Request for Change (RFC)', definition: 'The formal document initiating a change, capturing its justification, scope, risk assessment, implementation plan, and rollback plan.' },
    { term: 'Change Advisory Board (CAB)', definition: 'A cross-functional body that reviews, prioritizes, and approves or rejects proposed changes based on risk, impact, and scheduling.' },
    { term: 'Emergency Change Advisory Board (ECAB)', definition: 'A reduced-quorum subset of the CAB that can rapidly authorize emergency changes when the full board cannot convene in time.' },
    { term: 'Rollback (Back-out) Plan', definition: 'A predefined procedure to restore systems to their prior known-good state if a change fails or causes unexpected problems.' },
    { term: 'Standard Change', definition: 'A pre-authorized, low-risk, repeatable change that follows an established procedure and does not require individual CAB approval each time.' },
    { term: 'Emergency Change', definition: 'An urgent change to resolve an active incident or critical vulnerability, using an expedited approval path but still documented and reviewed afterward.' },
    { term: 'Post-Implementation Review (PIR)', definition: 'A formal review conducted after a change to confirm it achieved its goal, caused no adverse effects, and to capture lessons learned.' },
    { term: 'Maintenance Window', definition: 'A scheduled, agreed-upon period during which changes are implemented to minimize disruption to business operations.' },
  ],
  scenario: `At 2 a.m., an actively exploited zero-day is discovered in a public-facing web server. The on-call engineer wants to deploy a vendor patch immediately. There is no time to convene the full weekly CAB.

The correct operational path is an emergency change: obtain expedited authorization from the ECAB (or the designated emergency approver), apply the patch, and — critically — still document the RFC, confirm a rollback plan (e.g., snapshot/restore point) before applying, and schedule a post-implementation review. A CISSP-style question tests whether you understand that "emergency" compresses the approval timeline but never eliminates documentation, rollback readiness, or the after-the-fact review. Selecting "apply the patch now and skip the paperwork" is the trap answer.`,
  comparisonTables: [
    {
      caption: 'Normal vs. Standard vs. Emergency Change',
      headers: ['Change Type', 'Approval Path', 'Risk Profile', 'Documentation/Review'],
      rows: [
        ['Standard', 'Pre-approved procedure, no per-instance CAB', 'Low, well-understood, repeatable', 'Documented via the standing procedure'],
        ['Normal', 'Full CAB review and approval', 'Moderate to high; requires assessment', 'Full RFC, CAB record, PIR'],
        ['Emergency', 'Expedited via ECAB / emergency approver', 'Urgent — active incident or critical flaw', 'Still documented; PIR performed after the fact'],
      ],
    },
  ],
  examTraps: [
    `Emergency changes still require documentation, a rollback plan, and a post-implementation review — "emergency" only expedites approval, it never authorizes skipping records.`,
    `A rollback/back-out plan must exist before a change is implemented, not be improvised afterward; a change without a defined rollback is not ready for approval.`,
    `Do not confuse change management (governing planned modifications) with configuration management (maintaining the authoritative baseline of deployed state) — they are complementary, not the same.`,
    `Standard (pre-approved) changes bypass per-instance CAB review but are not "unapproved" — they are approved in advance via an established procedure; ad-hoc undocumented changes are never acceptable.`,
    `The CAB approves or rejects changes; it does not implement them. Selecting the CAB as the party that performs the technical work misreads its governance role.`,
  ],
  resources: [
    { label: 'Change Management for CISSP (Domain 7)', url: 'https://www.youtube.com/results?search_query=cissp+change+management+domain+7' },
    { label: 'RFC, CAB, and Emergency Change Explained', url: 'https://www.youtube.com/results?search_query=cissp+change+advisory+board+emergency+change' },
  ],
};

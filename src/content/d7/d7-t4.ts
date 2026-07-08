import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t4',
  overview: `Foundational security operations concepts are the access and privilege principles that govern how people are granted and constrained in their day-to-day work. They exist to limit both the likelihood and the impact of misuse — whether accidental, malicious, or the result of a compromised account. CISSP treats these as bedrock: nearly every operational control (provisioning, auditing, incident response) assumes these principles are in place.

The two anchor principles are need-to-know and least privilege. Need-to-know restricts access to information to those who require it to perform a specific task, even among users with the same clearance level — clearance is not the same as need-to-know. Least privilege restricts a subject's permissions to only what is necessary to perform assigned duties, and no more; it applies to actions and system rights, not just data. The two are complementary: need-to-know is about information access, least privilege is about the breadth of granted rights.

Separation of duties (SoD) divides a sensitive process among multiple people so that no single individual can complete it alone, preventing fraud and error (for example, the person who requests a payment cannot also approve it). Job rotation moves personnel through different roles, which deters and detects fraud (a hidden scheme is exposed when someone new takes over) and cross-trains staff. Mandatory vacations serve a similar detective purpose. Privileged account management (PAM) applies heightened control to administrator/root and service accounts — vaulting credentials, enforcing check-out and just-in-time access, requiring MFA, and recording privileged sessions — because these accounts are the highest-value targets. Together these concepts implement defense in depth around human access.`,
  examFraming: `(ISC)² frames these concepts as ways to reduce the blast radius of any single actor and to make fraud hard to commit and easy to detect. Expect scenarios where one person can perform an entire sensitive transaction end-to-end (the SoD answer), where a user has access far beyond their job (least privilege), or where someone can read data they have clearance for but no task-based reason to see (need-to-know). Distinguish least privilege (scope of rights granted) from need-to-know (task-based information access) — a favorite exam contrast. Recognize job rotation and mandatory vacations as detective/deterrent controls against fraud, not merely HR conveniences. For administrator accounts, the expected answer is privileged account management with vaulting, just-in-time elevation, MFA, and session recording. When two controls could apply, prefer the one that prevents a single person from having complete, unchecked control.`,
  keyTerms: [
    { term: 'Need-to-Know', definition: 'Restricting access to information to only those who require it for a specific task, independent of their clearance level.' },
    { term: 'Least Privilege', definition: 'Granting a subject only the minimum permissions and system rights required to perform assigned duties, and nothing more.' },
    { term: 'Separation of Duties (SoD)', definition: 'Dividing a critical process across multiple people so no single individual can complete it alone, reducing fraud and error.' },
    { term: 'Job Rotation', definition: 'Periodically moving personnel through different roles to deter and detect fraud and to cross-train staff.' },
    { term: 'Mandatory Vacation', definition: 'A required leave policy that removes an employee from their duties so hidden fraudulent activity can surface while someone else performs the role.' },
    { term: 'Privileged Account Management (PAM)', definition: 'Heightened control of administrator, root, and service accounts via credential vaulting, just-in-time/least-privilege elevation, MFA, and session recording.' },
    { term: 'Dual Control (Two-Person Integrity)', definition: 'A control requiring two authorized people to be present to perform a single highly sensitive action, e.g., accessing a key.' },
    { term: 'Collusion', definition: 'The cooperation of two or more individuals to bypass separation-of-duties controls; SoD raises the number of people needed to commit fraud.' },
  ],
  scenario: `In a finance department, a single accounts-payable clerk can create a new vendor, submit an invoice, approve the payment, and release the funds — all without any second person involved. The clerk also holds domain administrator rights left over from a prior IT role, and shares the local admin password with two colleagues.

The operational fixes map to the foundational concepts. Separation of duties should split the payment process so that creating a vendor, approving an invoice, and releasing payment require different people, preventing one clerk from committing fraud alone (and forcing collusion to bypass the control). Least privilege dictates removing the stale domain-admin rights the clerk no longer needs. Need-to-know limits which records the clerk can even view. Privileged account management vaults the shared admin credentials, requires individual just-in-time elevation with MFA, and records privileged sessions so no one uses an anonymous shared account. Layering job rotation and mandatory vacations adds a detective control that would surface a long-running scheme. A CISSP question here tests whether you pick the control that prevents a single person from holding complete, unchecked control of a sensitive process — separation of duties — and recognize least privilege and PAM as the supporting fixes.`,
  examTraps: [
    `Clearance is not the same as need-to-know: a user cleared to a classification level still must not access information they have no task-based reason to see.`,
    `Least privilege concerns the breadth of rights granted (actions and system permissions), while need-to-know concerns access to specific information — don't conflate them.`,
    `Separation of duties prevents one person from completing a sensitive process alone; when a scenario shows a single actor with end-to-end control, SoD is usually the answer.`,
    `Job rotation and mandatory vacations are detective/deterrent controls against fraud, not just HR/morale practices — they expose schemes that depend on one person staying in place.`,
    `Shared/administrator accounts break accountability; the expected control is privileged account management (vaulting, individual just-in-time access, MFA, session recording), not merely 'change the password.'`,
  ],
  resources: [
    { label: 'Least privilege, need-to-know, and SoD (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+least+privilege+need+to+know+separation+of+duties' },
    { label: 'Privileged account management and job rotation', url: 'https://www.youtube.com/results?search_query=cissp+privileged+account+management+job+rotation' },
  ],
};

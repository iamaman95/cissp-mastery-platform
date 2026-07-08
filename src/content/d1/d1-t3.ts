import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t3',
  overview: `Security governance is the system by which an organization directs and controls its security program so that it supports business objectives, rather than existing as a bolt-on technical function. Governance answers "who decides, who is accountable, and how do we know it's working?" — as distinct from management, which answers "how do we execute day-to-day?" CISSP expects you to understand that governance flows top-down: the board and senior executives set risk appetite and strategic direction, and security policy/standards/procedures cascade from that direction.

Key governance frameworks referenced on the exam include COSO (Committee of Sponsoring Organizations) — an internal-control and enterprise risk management framework widely used for financial and operational governance — and COBIT (Control Objectives for Information and Related Technologies), which is IT-governance-specific and maps control objectives to business goals. CISSP also expects familiarity with the general idea of aligning security strategy to business strategy, the role of a security steering committee, and the documentation hierarchy: policies (high-level, mandatory intent) flow down to standards (mandatory specifics), then to procedures (step-by-step instructions) and guidelines (recommended, not mandatory).

A recurring exam theme is that governance failures are rarely "we didn't have a firewall" — they are "leadership never defined risk appetite," "no one is accountable for the decision," or "the security function reports to a level too low to influence business decisions." Recognizing governance-shaped problems (versus purely technical ones) is a core CISSP skill.`,
  examFraming: `(ISC)² wants you to distinguish governance-level failures (lack of accountability, no board-level risk oversight, absent policy) from operational/technical failures (a missing patch, a misconfigured control), and to identify the BEST governance-level fix rather than a tactical technical fix when a scenario is really about accountability and direction. Expect questions describing a security program with strong tools/technology but no executive sponsorship, unclear ownership, or no policy foundation, and asking what is missing — the correct answer is almost always a governance element (e.g., a documented policy, a defined risk appetite statement, a reporting line to the board) rather than "buy more tooling." Also expect COSO/COBIT framework-recognition questions and questions on the correct order/relationship of policy → standard → procedure → guideline.`,
  keyTerms: [
    { term: 'Security Governance', definition: 'The system of accountability, direction, and oversight (typically originating at the board/executive level) that ensures the security program aligns with business objectives and risk appetite.' },
    { term: 'Risk Appetite', definition: 'The amount and type of risk an organization is willing to accept in pursuit of its objectives, set by senior leadership/the board.' },
    { term: 'COSO', definition: 'Committee of Sponsoring Organizations of the Treadway Commission — a widely used framework for internal control and enterprise risk management (ERM), often cited for financial/operational governance (e.g., SOX compliance).' },
    { term: 'COBIT', definition: 'Control Objectives for Information and Related Technologies — an IT-governance framework (from ISACA) that links IT control objectives to business goals and requirements.' },
    { term: 'Policy', definition: 'A high-level, mandatory statement of management intent that establishes what must be done and why; the top of the documentation hierarchy.' },
    { term: 'Standard', definition: 'A mandatory, specific requirement that supports a policy (e.g., "passwords must be a minimum of 14 characters").' },
    { term: 'Procedure', definition: 'A detailed, step-by-step set of instructions for carrying out a policy or standard.' },
    { term: 'Guideline', definition: 'A recommended, non-mandatory practice offering flexibility in how to achieve a policy objective.' },
  ],
  scenario: `A mid-size fintech company has invested heavily in endpoint detection, a SOC, and a security awareness program, yet during a board review, no one can answer "what is our acceptable level of risk for a customer data breach?" Security decisions are made ad hoc by individual engineering leads, and the CISO reports three levels below the CEO with no direct line to the board's risk committee.

This is a textbook security governance failure, not a technology failure. Applying CISSP governance principles, the fix is not "buy a better SOC platform" — it is establishing a governance structure: the board (or a delegated risk committee) must define and formally approve a risk appetite statement, the CISO's reporting line should be elevated to ensure security risk is represented at the level where business risk decisions are made, and a policy framework must be established so that ad hoc engineering decisions are replaced by consistent, accountable, board-sanctioned direction.`,
  comparisonTables: [
    {
      caption: 'Governance vs. Management',
      headers: ['Aspect', 'Governance', 'Management'],
      rows: [
        ['Question answered', '"Are we doing the right things?"', '"Are we doing things right?"'],
        ['Level', 'Board / senior executive', 'Operational / day-to-day'],
        ['Output', 'Policy, risk appetite, accountability structure', 'Execution, procedures, operations'],
        ['Time horizon', 'Strategic, long-term', 'Tactical, short-term'],
      ],
    },
    {
      caption: 'Documentation Hierarchy',
      headers: ['Document Type', 'Mandatory?', 'Level of Detail', 'Example'],
      rows: [
        ['Policy', 'Yes', 'High-level intent', '"All company data must be classified and protected per its classification."'],
        ['Standard', 'Yes', 'Specific requirement', '"All laptops must use AES-256 full-disk encryption."'],
        ['Procedure', 'Yes', 'Step-by-step instructions', '"Steps to enable BitLocker on a Windows 11 laptop."'],
        ['Guideline', 'No (recommended)', 'Flexible best practice', '"Consider enabling a screen privacy filter in open offices."'],
      ],
    },
    {
      caption: 'COSO vs. COBIT',
      headers: ['Framework', 'Primary Focus', 'Origin', 'Typical Use Case'],
      rows: [
        ['COSO', 'Internal control / enterprise risk management (broad, financial/operational)', 'COSO (sponsoring accounting/audit organizations)', 'SOX compliance, financial reporting controls'],
        ['COBIT', 'IT governance and management, mapping IT controls to business goals', 'ISACA', 'IT governance maturity, aligning IT with business strategy'],
      ],
    },
  ],
  examTraps: [
    `A scenario describing strong tools/technology but no accountability, policy, or executive sponsorship is a governance problem — don't select a "buy more technology" answer.`,
    `COSO and COBIT are often confused — COSO is the broader internal-control/ERM framework (finance-oriented, SOX-linked), COBIT is IT-governance-specific; the exam expects you to tell them apart.`,
    `Policies are mandatory; guidelines are not — don't select "guideline" when a scenario describes a requirement that must be followed.`,
    `Governance sets direction (risk appetite, policy); management executes it — questions asking "who is responsible for approving risk appetite" point to the board/senior leadership, not IT management.`,
    `"Governance" questions are often disguised as technical scenarios — look for the underlying accountability/oversight gap rather than answering the surface-level technical symptom.`,
  ],
  resources: [
    { label: 'Destination Certification – Security Governance', url: 'https://www.youtube.com/results?search_query=destination+certification+security+governance+cissp' },
    { label: 'Kelly Handerhan – Governance, COSO, COBIT', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+security+governance+cobit+coso' },
  ],
};

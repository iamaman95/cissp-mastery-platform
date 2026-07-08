import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd6',
  topicId: 'd6-t2',
  overview: `Security control testing verifies that controls actually work as intended. CISSP expects you to distinguish the major testing techniques and know when each applies.

Vulnerability assessment identifies and catalogs weaknesses (usually with automated scanners) but does not exploit them — it answers "what weaknesses exist?" Penetration testing goes further by actively attempting to exploit weaknesses to demonstrate real impact — it answers "can these weaknesses actually be used to break in?" A red team exercise is an adversary-simulation that tests detection and response holistically, often stealthily, over time.

Penetration tests are categorized by attacker knowledge: black box (no prior knowledge, simulating an outside attacker), white box (full knowledge/source access, most thorough), and gray box (partial knowledge). They follow phases: planning/scoping and rules of engagement, reconnaissance, scanning/enumeration, exploitation, post-exploitation, and reporting. Authorization (a signed scope/rules-of-engagement) is mandatory before any testing — testing without written authorization can be illegal.

Other techniques: security assessments (broad reviews combining tools, interviews, and analysis), log reviews, synthetic transactions and real user monitoring for availability/performance, code review (static analysis of source), misuse/abuse case testing, interface testing, and fuzzing (feeding malformed input to find crashes). Testing may be manual or automated; each has trade-offs in coverage and depth.`,
  examFraming: `(ISC)² tests the vulnerability-assessment-vs-penetration-test distinction constantly: a vuln assessment finds and lists weaknesses (no exploitation), while a pen test exploits them to prove impact. Know black/white/gray box definitions and that white box is the most thorough (full knowledge). The single most important pre-test step is obtaining written authorization and defining rules of engagement/scope — testing without it is a wrong (and possibly illegal) answer. Red teaming tests detection and response, not just vulnerabilities. Match the technique to the goal: fuzzing for input-handling flaws, code review for source-level defects, synthetic transactions for availability monitoring.`,
  keyTerms: [
    { term: 'Vulnerability Assessment', definition: 'Identifying and cataloging weaknesses (often via scanners) without exploiting them.' },
    { term: 'Penetration Test', definition: 'Actively exploiting weaknesses to demonstrate real-world impact, within an agreed scope.' },
    { term: 'Red Team Exercise', definition: 'Adversary simulation testing an organization’s detection and response capabilities holistically.' },
    { term: 'Black Box Testing', definition: 'Tester has no prior knowledge — simulates an external attacker.' },
    { term: 'White Box Testing', definition: 'Tester has full knowledge/source access — the most thorough approach.' },
    { term: 'Gray Box Testing', definition: 'Tester has partial knowledge of the target.' },
    { term: 'Rules of Engagement (ROE)', definition: 'The agreed, authorized scope, constraints, and timing for a test.' },
    { term: 'Fuzzing', definition: 'Sending malformed/random input to find crashes and input-handling flaws.' },
  ],
  scenario: `A company runs a monthly vulnerability scan that produces a list of missing patches and misconfigurations — a vulnerability assessment that finds weaknesses but does not exploit them. To understand whether those weaknesses are actually exploitable, it hires a firm for an annual penetration test; before any activity, both parties sign rules of engagement defining scope, timing, and constraints. The testers perform a gray-box test (given some internal knowledge) and successfully chain two findings to reach a database, proving real impact the scan alone could not. Separately, a stealthy red team engagement tests whether the SOC detects and responds to a simulated intrusion over several weeks. A CISSP question might ask the difference between the scan and the pen test — the scan identifies weaknesses; the pen test exploits them to demonstrate impact — and what must occur before testing begins: written authorization/rules of engagement.`,
  comparisonTables: [
    {
      caption: 'Vulnerability Assessment vs Penetration Test vs Red Team',
      headers: ['Technique', 'Goal', 'Exploitation?'],
      rows: [
        ['Vulnerability assessment', 'Find and catalog weaknesses', 'No'],
        ['Penetration test', 'Prove weaknesses are exploitable (impact)', 'Yes, within scope'],
        ['Red team', 'Test detection and response holistically', 'Yes, stealthy/adversarial'],
      ],
    },
    {
      caption: 'Pen Test Knowledge Levels',
      headers: ['Type', 'Tester Knowledge', 'Note'],
      rows: [
        ['Black box', 'None (outside attacker view)', 'Realistic external simulation'],
        ['Gray box', 'Partial', 'Balance of realism and efficiency'],
        ['White box', 'Full (incl. source)', 'Most thorough coverage'],
      ],
    },
  ],
  examTraps: [
    'Vulnerability assessment identifies weaknesses (no exploitation); a penetration test exploits them to prove impact — do not conflate the two.',
    'Written authorization and rules of engagement/scope MUST be obtained before any testing — testing without it can be illegal.',
    'White box = full knowledge (most thorough); black box = no knowledge (external attacker simulation); gray box = partial.',
    'Red teaming tests detection and response, not merely the presence of vulnerabilities.',
    'Match technique to goal: fuzzing → input-handling flaws; code review → source defects; synthetic transactions → availability monitoring.',
  ],
  resources: [
    { label: 'Destination Certification – Vulnerability Assessment vs Pen Test', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+vulnerability+assessment+penetration+test' },
    { label: 'Kelly Handerhan – CISSP Security Control Testing', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+penetration+testing+control+testing' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t12',
  overview: `Testing disaster recovery plans is what turns a document into a proven capability. A plan that has never been exercised is untested theory; testing validates that recovery procedures actually work, that recovery objectives (RTO/RPO) are achievable, that personnel know their roles, and that the plan reflects the current environment. CISSP expects you to know the standard test types, and — most importantly — their order from least disruptive to most disruptive, and to select the appropriate test given the organization's risk tolerance and the criticality of production systems.

The recognized DR test types, in ascending order of disruption and realism, are: read-through/checklist review (team members individually review the plan and their responsibilities to confirm it is complete and current — the least disruptive); structured walkthrough/tabletop exercise (the team gathers and talks through a simulated disaster scenario step by step, verifying roles and interdependencies without touching systems); simulation test (a more elaborate exercise that role-plays a disaster and may exercise some support functions, still stopping short of failing over production); parallel test (recovery systems are brought up at the alternate site and run in parallel with production, processing real workloads to confirm they work — without taking production offline); and full-interruption test (the primary systems are actually shut down and operations are failed over entirely to recovery systems — the most realistic and the most disruptive/risky, because a failed test can itself cause an outage).

The exam's core skill is matching the test to the goal and to acceptable risk. Checklist and tabletop tests are low-risk ways to validate understanding and plan currency; parallel tests provide strong assurance that recovery actually works without endangering production; full-interruption tests provide the highest confidence but carry real operational risk and require careful authorization. Progressive testing — starting with less disruptive tests and building up — is best practice, so that plan gaps are caught cheaply before a high-risk full-interruption test. Every test should be documented, and findings fed back to update the plan (linking testing to the lessons-learned/maintenance cycle).`,
  examFraming: `(ISC)² frames DR testing around the escalation ladder from least to most disruptive and choosing the right rung. Memorize the order: read-through/checklist → structured walkthrough/tabletop → simulation → parallel → full-interruption. Know the two most commonly confused pairs: a parallel test runs recovery systems alongside production (production stays up), while a full-interruption test takes production down and fails fully over (most disruptive/risky). Recognize that checklist/tabletop tests validate understanding and plan currency at low risk, whereas parallel and full-interruption tests validate that recovery technically works. When a scenario asks for the BEST test given constraints, weigh assurance against disruption: if production cannot be risked, favor a parallel test; if maximum confidence is required and disruption is acceptable/authorized, a full-interruption test provides it. Best practice is progressive testing — build up through the levels — and always document results and update the plan.`,
  keyTerms: [
    { term: 'Read-Through / Checklist Test', definition: 'Team members individually review the DR plan and their responsibilities to confirm the plan is complete and current; the least disruptive test.' },
    { term: 'Structured Walkthrough / Tabletop', definition: 'The recovery team gathers and talks through a simulated disaster scenario step by step, validating roles and dependencies without touching live systems.' },
    { term: 'Simulation Test', definition: 'A more elaborate role-played disaster exercise that may exercise some support functions while still stopping short of failing over production.' },
    { term: 'Parallel Test', definition: 'Recovery systems are brought up at the alternate site and run alongside production, processing real workloads to confirm they work without taking production offline.' },
    { term: 'Full-Interruption Test', definition: 'Primary systems are actually shut down and operations fail fully over to recovery systems; the most realistic but most disruptive and risky test.' },
    { term: 'Progressive Testing', definition: 'The best-practice approach of starting with less disruptive tests and escalating, so gaps are found cheaply before high-risk tests.' },
    { term: 'Test Documentation', definition: 'Recording test scope, participants, results, and gaps so findings can be fed back to update and improve the DR plan.' },
    { term: 'Plan Currency', definition: 'The requirement that a DR plan reflect the current environment; testing verifies the plan has not become stale.' },
  ],
  comparisonTables: [
    {
      caption: 'DR Test Types: Least to Most Disruptive',
      headers: ['Order', 'Test Type', 'What Happens', 'Production Impact'],
      rows: [
        ['1', 'Read-through / Checklist', 'Individually review the plan for completeness', 'None'],
        ['2', 'Structured Walkthrough / Tabletop', 'Team talks through a scenario together', 'None'],
        ['3', 'Simulation', 'Role-play a disaster; exercise some functions', 'Minimal'],
        ['4', 'Parallel', 'Run recovery systems alongside live production', 'Low (production stays up)'],
        ['5', 'Full-Interruption', 'Shut down production; fail fully over', 'High (most disruptive/risky)'],
      ],
    },
  ],
  examTraps: [
    `Know the escalation order least→most disruptive: read-through/checklist → walkthrough/tabletop → simulation → parallel → full-interruption.`,
    `Parallel vs. full-interruption: a parallel test keeps production running while recovery runs alongside it; a full-interruption test takes production DOWN — the most disruptive and risky.`,
    `Checklist and tabletop tests validate understanding and plan currency but do NOT prove that recovery technically works; only parallel and full-interruption tests do that.`,
    `Best practice is progressive testing — build up through the levels so gaps are caught cheaply before a high-risk full-interruption test; don't jump straight to the riskiest test.`,
    `A full-interruption test can itself cause an outage if it fails; it requires careful authorization and is not appropriate when production cannot be risked.`,
  ],
  scenario: `A hospital has a written DR plan for its electronic health record (EHR) system but has never exercised it. Leadership wants confidence the plan will work but cannot risk any downtime of the live EHR, which is used continuously for patient care. A junior manager suggests immediately performing a full-interruption test by shutting down the production EHR to see if failover works.

The testing analysis rejects jumping straight to the riskiest test. Because production cannot be risked, a full-interruption test is inappropriate here — if it failed, it could take the EHR offline during patient care. The right progression begins with a read-through/checklist to confirm the plan is complete and current, then a structured walkthrough/tabletop to validate that staff understand their roles and the dependencies, possibly a simulation, and then a parallel test that stands up the recovery EHR at the alternate site and processes copies of real workloads alongside the still-running production system — giving strong assurance that recovery works without any patient-care downtime. Only if maximum confidence were required and downtime could be safely authorized (for example during a planned maintenance window with clinical mitigations) would a full-interruption test be considered. Each test is documented and its findings used to update the plan. A CISSP question here tests whether you select the least disruptive test that still meets the assurance need, know the escalation order, and correctly distinguish a parallel test (production stays up) from a full-interruption test (production goes down).`,
  resources: [
    { label: 'DR test types and escalation order (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+dr+test+types+checklist+tabletop+parallel+full+interruption' },
    { label: 'Parallel vs full-interruption test explained', url: 'https://www.youtube.com/results?search_query=cissp+parallel+test+vs+full+interruption+test' },
  ],
};

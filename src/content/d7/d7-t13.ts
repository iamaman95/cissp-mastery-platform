import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t13',
  overview: `Business continuity (BC) planning is the strategic, enterprise-wide discipline of ensuring that critical business functions can continue — or resume quickly — during and after a disruption. Where disaster recovery focuses tactically on restoring IT systems, business continuity is broader: it addresses people, processes, facilities, suppliers, and communications so the organization as a whole keeps operating. CISSP treats BCP as a management-driven program that begins with understanding the business, not the technology, and that requires senior leadership sponsorship to succeed.

The analytical heart of BCP is the Business Impact Analysis (BIA). The BIA identifies the organization's critical business functions, the resources they depend on, and the impact over time of losing them, and from that derives the recovery priorities and metrics — most notably the Maximum Tolerable Downtime (MTD) for each function, which drives the RTO and the selection of recovery strategies. The BIA is where criticality is established: functions are ranked so that limited recovery resources are applied to what matters most first. It also considers financial, operational, reputational, and regulatory impacts, and identifies dependencies (including single points of failure and key suppliers) that could cascade a failure.

A complete BCP program follows a lifecycle: obtain management support and define scope, conduct the BIA, develop continuity strategies and the plan (including the DRP as its IT-recovery component), train personnel and raise awareness, and test/exercise and maintain the plan so it stays current. Because BCP is strategic and DRP is tactical, the two must align — the DRP's RTO/RPO targets are set to meet the MTDs the BIA established. The exam wants you to see BCP as the umbrella program driven by the BIA and management commitment, with the DRP nested inside it, and to recognize that identifying and prioritizing critical functions (via the BIA) comes before designing any recovery solution.`,
  examFraming: `(ISC)² frames BCP around the BIA as the foundational, first analytical step and around the BCP-versus-DRP distinction. Remember: BCP is strategic and enterprise-wide (keep the whole business running); DRP is tactical and IT-focused (restore the systems), and the DRP is a component of the BCP. The BIA is where you identify critical functions, establish criticality/priority, and determine MTD — which in turn drives RTO and recovery-strategy selection; you cannot rationally design recovery before knowing what is critical and how long it can be down. Expect scenarios asking what should be done FIRST in a BCP effort (obtain management support, then conduct the BIA) or which document/metric a described activity belongs to. Recognize that senior management commitment is essential and that impact (not just likelihood) drives BCP prioritization. When a question contrasts BCP and DRP, choose based on scope: whole-business continuity versus IT-system recovery.`,
  keyTerms: [
    { term: 'Business Continuity Planning (BCP)', definition: 'The strategic, enterprise-wide program ensuring critical business functions can continue or quickly resume during and after a disruption.' },
    { term: 'Business Impact Analysis (BIA)', definition: 'The foundational analysis that identifies critical business functions, their dependencies, and the impact over time of their loss, deriving recovery priorities and metrics like MTD.' },
    { term: 'Maximum Tolerable Downtime (MTD)', definition: 'The longest a critical function can be unavailable before unacceptable harm; established in the BIA and used to set RTO and recovery strategies.' },
    { term: 'Criticality', definition: 'The relative importance of a business function, ranked in the BIA so recovery resources are prioritized toward the most essential functions first.' },
    { term: 'BCP vs. DRP', definition: 'BCP is the strategic, whole-business program; DRP is its tactical IT-recovery component. The DRP’s RTO/RPO must satisfy the MTDs the BIA established.' },
    { term: 'Management Sponsorship', definition: 'Senior leadership commitment and support, essential for a BCP program to receive the authority, funding, and cross-functional cooperation it needs.' },
    { term: 'Dependencies / Single Points of Failure', definition: 'Resources, suppliers, or systems whose loss can cascade into failure of a critical function; identified during the BIA.' },
    { term: 'BCP Lifecycle', definition: 'The ongoing program cycle: management support and scope, BIA, strategy and plan development, training/awareness, and testing/maintenance.' },
  ],
  scenario: `A regional bank builds its business continuity program. First it secures senior management sponsorship, then conducts a Business Impact Analysis. The BIA reveals that online payment processing has a Maximum Tolerable Downtime of just 4 hours (halting it stops revenue and breaches regulatory obligations), while internal training portals can be down for days — so recovery resources and the shortest RTOs are directed to payments. The BIA also maps a dependency: payments rely on a single authentication service, a single point of failure the bank adds redundancy for. The technical restoration of the payment systems is handled by the DRP, a component whose RTO must satisfy the 4-hour MTD the BIA set. A CISSP question might ask what a team should do FIRST in a BCP effort — obtain management support and conduct the BIA — or which metric caps how long a function may be down: the MTD.`,
  comparisonTables: [
    {
      caption: 'BCP vs. DRP',
      headers: ['Aspect', 'Business Continuity Plan (BCP)', 'Disaster Recovery Plan (DRP)'],
      rows: [
        ['Scope', 'Whole business: people, process, facilities, suppliers', 'IT systems and infrastructure'],
        ['Focus', 'Strategic — keep the business operating', 'Tactical — restore the technology'],
        ['Relationship', 'Umbrella program', 'A component nested within the BCP'],
        ['Driven by', 'BIA and management sponsorship', 'RTO/RPO targets set to meet BIA-derived MTDs'],
      ],
    },
  ],
  examTraps: [
    `BCP is strategic and enterprise-wide; DRP is tactical and IT-focused — the DRP is a component of the BCP, not a synonym for it.`,
    `The BIA comes first analytically: it identifies critical functions and sets MTD, which then drives RTO and recovery-strategy choices — don't design recovery before the BIA.`,
    `MTD is established in the BIA; RTO is derived to fit within MTD. Confusing where each is set (or which drives which) is a common trap.`,
    `BCP prioritization is driven by impact/criticality, not merely by the likelihood of a threat — the BIA measures impact over time.`,
    `A BCP program requires senior management sponsorship; the correct FIRST step is usually to obtain that support/scope, then conduct the BIA.`,
  ],
  resources: [
    { label: 'Business impact analysis and BCP (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+business+impact+analysis+bia+bcp' },
    { label: 'BCP vs DRP explained (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+bcp+vs+drp+difference' },
  ],
};

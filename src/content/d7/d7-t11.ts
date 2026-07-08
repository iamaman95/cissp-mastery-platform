import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t11',
  overview: `Disaster recovery (DR) processes are the coordinated actions that restore IT systems and operations after a disruptive event. DR is the technology-focused, tactical execution that sits within the broader Business Continuity (BC) umbrella: BC keeps the whole business running, while DR concentrates on recovering the systems and infrastructure that support it. CISSP expects you to know the DR process phases and, above all, the recovery metrics that quantify how fast and how completely you must recover.

The DR process unfolds through several phases: response (activating the plan and assessing the situation), personnel/notification (mobilizing the recovery teams and alerting stakeholders), communications (keeping internal and external parties informed through predefined channels), assessment (determining the scope of damage and what must be recovered), recovery (bringing critical systems back at the alternate site or restored primary), and restoration (returning operations to the primary/permanent environment once it is safe and validated). Life safety always takes priority over any technology recovery.

The recovery metrics are the most heavily tested content. Maximum Tolerable Downtime (MTD) — sometimes called MTPD — is the longest a business function can be unavailable before the organization suffers unacceptable or irreparable harm; it is the outer bound the other metrics must fit within. Recovery Time Objective (RTO) is the target time to restore a function after a disruption, and it must be less than the MTD. Recovery Point Objective (RPO) is the maximum acceptable amount of data loss measured backward in time — how much recent data you can afford to lose (which drives backup/replication frequency). Work Recovery Time (WRT) is the time needed after systems are technically restored to configure, validate, and reintegrate them so business work can actually resume; RTO + WRT together must not exceed the MTD. Getting these relationships right — RTO is about time to restore systems, RPO is about data-loss tolerance, and both live inside the MTD — is the core exam skill.`,
  examFraming: `(ISC)² frames DR around distinguishing the recovery metrics and placing DR within business continuity. The single most tested confusion is RTO vs. RPO: RTO measures time to recover a system (forward-looking downtime target), while RPO measures acceptable data loss (backward-looking to the last good recovery point). Memorize the relationships: RTO must be shorter than MTD; RTO + WRT must fit within MTD; RPO drives how frequently you back up or replicate (a near-zero RPO demands continuous replication). Know that MTD is the outer limit and that DR is a subset of BC — DR restores the systems, BC sustains the business. Recognize the process order (response and assessment come before recovery, and restoration to the primary site comes after critical operations are stable), and that life safety precedes any asset or system recovery. When a scenario asks which metric applies, decide first whether the question is about how long you can be down (RTO/MTD) or how much data you can lose (RPO).`,
  keyTerms: [
    { term: 'Maximum Tolerable Downtime (MTD)', definition: 'The longest a business function can be unavailable before causing unacceptable or irreparable harm; the outer bound within which RTO and WRT must fit.' },
    { term: 'Recovery Time Objective (RTO)', definition: 'The target time to restore a function or system after a disruption; it must be shorter than the MTD.' },
    { term: 'Recovery Point Objective (RPO)', definition: 'The maximum acceptable amount of data loss measured backward in time, driving how frequently data must be backed up or replicated.' },
    { term: 'Work Recovery Time (WRT)', definition: 'The time after systems are technically restored needed to configure, validate, and reintegrate them so business work can resume; RTO + WRT must not exceed MTD.' },
    { term: 'Response Phase', definition: 'The initial DR phase of activating the plan and assessing the situation immediately after a disruption.' },
    { term: 'Assessment Phase', definition: 'Determining the scope and severity of damage and what must be recovered, informing the recovery effort.' },
    { term: 'Restoration Phase', definition: 'Returning operations to the primary or permanent environment after critical systems are stable and the site is validated as safe.' },
    { term: 'DR vs. BC', definition: 'Disaster recovery focuses on restoring IT systems and infrastructure (tactical), while business continuity sustains overall business operations (strategic); DR is a subset of BC.' },
  ],
  comparisonTables: [
    {
      caption: 'Recovery Metrics: RTO vs. RPO vs. MTD vs. WRT',
      headers: ['Metric', 'Measures', 'Direction', 'Relationship'],
      rows: [
        ['MTD', 'Max downtime before unacceptable harm', 'Outer limit', 'Must contain RTO + WRT'],
        ['RTO', 'Time to restore systems', 'Forward (downtime)', 'Must be less than MTD'],
        ['RPO', 'Acceptable data loss', 'Backward (to last good copy)', 'Drives backup/replication frequency'],
        ['WRT', 'Time to validate/reintegrate after restore', 'Forward (after RTO)', 'RTO + WRT ≤ MTD'],
      ],
    },
  ],
  scenario: `A retailer's order-management system is analyzed for disaster recovery. The business determines it can survive no more than 8 hours of total outage before losses become unacceptable (MTD = 8 hours). The IT team sets a target to have the system technically restored within 4 hours (RTO = 4 hours) and estimates that validating data integrity, reconfiguring integrations, and reconnecting stores will take another 3 hours of work (WRT = 3 hours). Separately, the business states it can tolerate losing at most 15 minutes of transactions (RPO = 15 minutes).

The DR analysis checks the relationships. RTO (4h) plus WRT (3h) equals 7 hours, which fits within the 8-hour MTD — the plan is viable, with one hour of margin. The 15-minute RPO cannot be met by nightly backups; it requires near-continuous replication or transaction-log journaling, so the recovery strategy must be chosen to satisfy it. The DR process itself will proceed through response and assessment, mobilize personnel and communications, recover the system at the alternate site, and finally restore to the primary once it is validated — with life safety taking precedence over any system recovery throughout. A CISSP question here tests whether you correctly separate RTO (time to restore) from RPO (data-loss tolerance), verify that RTO + WRT stays within MTD, and understand that DR executes within the broader business continuity framework.`,
  examTraps: [
    `RTO vs. RPO: RTO is time to restore systems (downtime target), RPO is acceptable data loss (how far back to the last good copy) — don't swap them.`,
    `MTD is the outer bound: RTO must be less than MTD, and RTO + WRT together must not exceed MTD.`,
    `RPO drives backup/replication frequency: a near-zero RPO cannot be met by periodic nightly backups; it requires continuous replication or journaling.`,
    `DR is a subset of business continuity — DR restores the IT systems, BC sustains the whole business; don't treat them as identical.`,
    `Life safety always comes before asset or system recovery; a plan that prioritizes technology over people is wrong on the exam.`,
  ],
  resources: [
    { label: 'RTO, RPO, MTD, WRT explained (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+rto+rpo+mtd+wrt+explained' },
    { label: 'Disaster recovery process phases (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+disaster+recovery+process+phases' },
  ],
};

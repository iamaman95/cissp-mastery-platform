import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t8',
  overview: `Business Continuity (BC) is the discipline of keeping essential business functions running — or restoring them within an acceptable time — when a disruption occurs. It is broader than "IT disaster recovery": BC covers people, facilities, suppliers, communications, and processes, not just servers and data. The centerpiece of BC planning is the Business Impact Analysis (BIA), a formal process that identifies critical business functions, the systems/resources they depend on, and the quantified impact of losing them over time (financial, operational, reputational, legal/regulatory, and safety impact).

From the BIA, the organization derives recovery targets — Maximum Tolerable Downtime (MTD, sometimes called Maximum Allowable Outage), Recovery Time Objective (RTO), Recovery Point Objective (RPO), and Work Recovery Time (WRT) — that drive every downstream decision about redundancy, backup strategy, alternate site selection, and staffing. Without a BIA, a Business Continuity Plan (BCP) is just a guess: you cannot size a recovery solution (hot site vs. warm site vs. cold site, backup frequency, failover architecture) without first knowing how long the business can actually tolerate an outage and how much data loss it can absorb.

CISSP also expects candidates to place BC within a lifecycle: project initiation and scoping, BIA, strategy development, plan development, testing/exercising, and maintenance. BC is not a one-time deliverable — it must be re-validated whenever the business changes (new systems, new critical processes, mergers, org changes) and exercised regularly (tabletop, walkthrough, simulation, parallel, and full-interruption tests) so the plan reflects reality rather than a stale binder on a shelf.

Executive/senior management support, sponsorship, and sign-off is treated as a foundational, gating requirement in CISSP's BC model — without it, resources, authority, and organization-wide cooperation for BC will not materialize. This is why BCP planning is almost always described as starting with a Business Organization Analysis and management commitment before any technical recovery planning begins.`,
  examFraming: `(ISC)² tests BC as a risk-informed, business-driven decision process, not a technical checklist. Expect scenarios that give you numbers (e.g., "the business can tolerate 4 hours of downtime, but the last backup is 12 hours old") and ask you to identify the gap, the correct recovery objective term, or the correct alternate-site/backup-strategy choice given cost and time constraints. You must be able to distinguish BIA (identifying and quantifying impact) from risk assessment (identifying threats/vulnerabilities and likelihood) — they are related but conceptually distinct, and CISSP loves to test whether you can tell them apart. You should also be able to reason about sequencing: BIA must occur before strategy/plan development; recovery strategies must be sized to RTO/RPO, not the other way around. Finally, expect trade-off reasoning: tighter RTO/RPO generally costs more (hot sites, continuous replication), so BC decisions are ultimately about balancing acceptable risk/downtime against cost — a business decision that security professionals inform but do not unilaterally make.`,
  keyTerms: [
    { term: 'Business Impact Analysis (BIA)', definition: 'A formal analysis that identifies critical business functions, their dependencies, and quantifies the impact (financial, operational, legal, reputational, safety) of their disruption over increasing periods of time.' },
    { term: 'Maximum Tolerable Downtime (MTD)', definition: 'The absolute longest amount of time a business function can be unavailable before causing unacceptable/irreparable harm to the organization; also called Maximum Allowable Outage (MAO).' },
    { term: 'Recovery Time Objective (RTO)', definition: 'The target amount of time within which a system or business function must be restored after a disruption; RTO must be less than or equal to MTD.' },
    { term: 'Recovery Point Objective (RPO)', definition: 'The maximum acceptable amount of data loss, measured in time, between the last good backup/replication point and the point of disruption.' },
    { term: 'Work Recovery Time (WRT)', definition: 'The additional time needed after systems are technically restored (RTO met) to verify data, reconfigure, and resume normal business operations; MTD is roughly RTO + WRT.' },
    { term: 'Business Continuity Plan (BCP)', definition: 'The overarching plan ensuring critical business functions continue operating (or resume quickly) during and after a disruption, encompassing people, process, and facilities beyond just IT.' },
    { term: 'Continuity of Operations Plan (COOP)', definition: 'A plan (common in government/federal contexts) focused on sustaining essential functions and leadership succession during an emergency, often for a defined minimum period (e.g., 30 days).' },
    { term: 'Alternate Site Strategies', definition: 'Hot, warm, and cold sites (plus cloud/mobile sites) representing a spectrum of readiness-versus-cost trade-offs used to meet an RTO after a facility-level disruption.' },
  ],
  scenario: `A regional bank's BIA determines that its core loan-processing application can be down for a maximum of 6 hours (MTD) before regulatory penalties and customer attrition become unacceptable. The current backup strategy performs full backups nightly at 2 a.m. and ships tapes offsite once per day. A CISSP candidate is asked to evaluate whether this strategy meets business requirements.

The gap is immediately visible in RPO: if the system fails at 1 p.m., the most recent backup is 11 hours old — meaning the bank would lose up to 11 hours of loan transaction data, far beyond what regulators or the business likely find acceptable, even if the RTO (time to physically restore the system) could be met. The correct professional response is not to buy a bigger server or a faster tape drive — it is to go back to the BIA-derived RPO target, and if the true tolerable data loss is, say, 15 minutes, recommend a strategy such as continuous data replication or frequent incremental backups/log shipping to a warm or hot site. This illustrates the core CISSP lesson: recovery architecture must be justified by, and sized to, the BIA's quantified objectives — not chosen first and hoped to be "good enough."`,
  comparisonTables: [
    {
      caption: 'BCP vs. DRP vs. COOP',
      headers: ['Plan', 'Primary Focus', 'Scope', 'Typical Trigger'],
      rows: [
        ['Business Continuity Plan (BCP)', 'Keeping critical business functions running end-to-end', 'People, process, facilities, IT, suppliers — organization-wide', 'Any disruption threatening business operations'],
        ['Disaster Recovery Plan (DRP)', 'Restoring IT systems, data, and infrastructure', 'Technical: data centers, applications, networks', 'IT/technology outage or disaster'],
        ['Continuity of Operations Plan (COOP)', 'Sustaining essential functions and leadership/authority', 'Often government/mission-essential functions; succession planning', 'Emergency requiring relocation or leadership continuity'],
      ],
    },
    {
      caption: 'Alternate Site Options',
      headers: ['Site Type', 'Readiness', 'Cost', 'Typical RTO Fit'],
      rows: [
        ['Hot Site', 'Fully equipped, live data replication, staffed/ready to operate almost immediately', 'Highest', 'Minutes to hours'],
        ['Warm Site', 'Partially equipped with hardware; data/config restoration still required', 'Moderate', 'Hours to about a day'],
        ['Cold Site', 'Basic facility (power, space, HVAC) with no pre-installed systems', 'Lowest', 'Days to weeks'],
        ['Mobile/Cloud Site', 'Portable or on-demand cloud-provisioned infrastructure', 'Variable, often pay-as-needed', 'Highly variable, can be very fast if pre-architected'],
      ],
    },
  ],
  examTraps: [
    `Confusing RTO (how fast can we restore the system) with RPO (how much data can we afford to lose) — questions frequently give a scenario and expect you to correctly label which metric is being violated.`,
    `Assuming MTD and RTO are the same thing — RTO is a target the recovery team designs to meet, and it must be less than or equal to MTD, with WRT making up the difference (MTD ≈ RTO + WRT).`,
    `Treating BIA and risk assessment as interchangeable — BIA quantifies impact/criticality of business functions; risk assessment analyzes threats, vulnerabilities, and likelihood. BIA answers "how much does this hurt and how fast," risk assessment answers "what could cause it and how likely is it."`,
    `Picking a technically impressive recovery solution (e.g., "always choose the hot site") without checking whether it's actually justified by the BIA's RTO/RPO and cost tolerance — CISSP wants the answer sized to business requirements, not the most robust-sounding option.`,
    `Forgetting that BC planning must start with, and requires, senior management support/sponsorship — a question about "what is needed FIRST to begin a BCP" is often testing whether you pick management commitment/BIA scoping over jumping straight to technical solutions.`,
  ],
  resources: [
    { label: 'Destination Certification – BIA, RTO, RPO, MTD Explained', url: 'https://www.youtube.com/results?search_query=destination+certification+business+continuity+bia+rto+rpo+mtd' },
    { label: 'Kelly Handerhan – Business Continuity Planning', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+business+continuity+planning' },
  ],
};

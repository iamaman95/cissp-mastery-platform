import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t10',
  overview: `Recovery strategies are the pre-planned technical arrangements that let an organization restore data and operations after a disruption. They are the concrete means by which recovery objectives (RTO/RPO) defined in business continuity and disaster recovery planning are actually met. CISSP expects you to know the major categories — backups, alternate processing sites, data replication/vaulting, and fault-tolerant storage — and to select the right combination for a given recovery time and recovery point requirement, balanced against cost.

Backups are the foundation of data recovery, and the three schemes are heavily tested. A full backup copies all selected data every time — slowest to back up but fastest and simplest to restore (a single set). An incremental backup copies only data changed since the last backup of any type (full or incremental) and clears the archive bit — fastest to back up but slowest to restore because you need the last full plus every subsequent incremental in order. A differential backup copies all data changed since the last full backup (it does not clear the archive bit) — it grows larger each day but restores from just the last full plus one differential. The classic exam trap is the restore chain: incremental means restore full + all increments; differential means restore full + one differential.

Alternate processing sites provide somewhere to run operations if the primary facility is lost. A hot site is fully equipped and continuously updated, allowing recovery in minutes to hours (highest cost). A warm site has hardware and connectivity but not current data, requiring hours to days to bring online (moderate cost). A cold site is essentially empty space with power and cooling — cheapest, but taking weeks to make operational. A mobile site is a transportable, self-contained facility. Reciprocal (mutual aid) agreements, where two organizations agree to host each other, are cheap but often impractical for capacity, confidentiality, and enforceability reasons. Data-protection strategies complement sites: electronic vaulting batches backups to a remote location, remote journaling transmits transaction logs continuously for finer-grained recovery, and database shadowing/mirroring maintains live duplicate copies. RAID (redundant array of independent disks) provides fault tolerance against disk failure — mirroring (RAID 1) and parity (RAID 5/6) keep a system running through a drive loss — but RAID is not a backup, because it does not protect against deletion, corruption, or site loss.`,
  examFraming: `(ISC)² frames recovery strategies around matching the strategy to the required RTO/RPO and cost. The most tested items are backup mechanics and the restore chain, and the hot/warm/cold site trade-offs. Know that incremental backups are fastest to create but require the last full plus every increment to restore, while differential backups take longer to create but restore from just the last full plus one differential. Rank sites by recovery speed and cost: hot (fastest, most expensive) > warm > cold (slowest, cheapest), with mobile sites and reciprocal agreements as special cases. Distinguish electronic vaulting (batch remote backups) from remote journaling (continuous transaction-log transmission, giving a better RPO). Critically, remember RAID is fault tolerance, not backup — it does not protect against accidental deletion, malicious corruption, or destruction of the site. When a scenario gives a tight RTO or near-zero RPO, favor faster, more current strategies (hot site, replication/journaling); when cost is the driver, expect cold sites or reciprocal agreements with their acknowledged limitations.`,
  keyTerms: [
    { term: 'Full Backup', definition: 'A backup of all selected data each time; slowest to create but simplest and fastest to restore from a single set.' },
    { term: 'Incremental Backup', definition: 'Backs up only data changed since the last backup of any type and clears the archive bit; fastest to create, but restore requires the last full plus every subsequent incremental.' },
    { term: 'Differential Backup', definition: 'Backs up all data changed since the last full backup (archive bit not cleared); grows over time, but restore needs only the last full plus one differential.' },
    { term: 'Hot Site', definition: 'A fully equipped, continuously updated alternate facility enabling recovery in minutes to hours at the highest cost.' },
    { term: 'Warm Site', definition: 'An alternate facility with hardware and connectivity but not current data, requiring hours to days to become operational at moderate cost.' },
    { term: 'Cold Site', definition: 'Basic space with power and cooling but no equipment or data; cheapest but takes weeks to make operational.' },
    { term: 'Electronic Vaulting', definition: 'Batch transmission of backup data to a remote location on a scheduled basis for offsite protection.' },
    { term: 'Remote Journaling', definition: 'Continuous transmission of transaction logs to a remote site, enabling finer-grained recovery and a better recovery point objective than periodic backups.' },
    { term: 'RAID', definition: 'A redundant array of independent disks providing fault tolerance against drive failure (mirroring or parity); it is not a backup because it does not protect against deletion, corruption, or site loss.' },
  ],
  scenario: `A mid-sized firm must recover its core transaction system within four hours of a disaster, with no more than a few minutes of data loss, while a secondary records archive can tolerate a full day of downtime and up to 24 hours of data loss. Management proposes relying on nightly full backups to tape and a single reciprocal agreement with a partner company for facilities.

The recovery-strategy analysis shows the plan does not meet the core system's objectives. A four-hour RTO and near-zero RPO require a hot site (fully equipped and current) plus continuous data protection such as remote journaling or replication — nightly tape backups alone would lose up to a day of transactions and take too long to restore. The reciprocal agreement is cheap but risky for the critical system (capacity, confidentiality, and enforceability concerns), so a contracted hot site is more defensible. For the less-critical archive, nightly backups to a warm or even cold arrangement, or electronic vaulting, may suffice given its looser RTO/RPO. If the team also assumed its RAID array was its 'backup,' that is a trap: RAID survives a disk failure but does not protect against accidental deletion, ransomware corruption, or loss of the whole site. A CISSP question here tests whether you match strategy to RTO/RPO and cost, choose the correct backup scheme and restore chain, and recognize that RAID is not a substitute for backups.`,
  comparisonTables: [
    {
      caption: 'Backup Types: Create vs. Restore Trade-offs',
      headers: ['Type', 'What It Copies', 'Backup Speed', 'Restore Chain', 'Archive Bit'],
      rows: [
        ['Full', 'All selected data', 'Slowest', 'Just the full set', 'Cleared'],
        ['Incremental', 'Changed since last backup (any type)', 'Fastest', 'Last full + every increment', 'Cleared'],
        ['Differential', 'Changed since last full', 'Medium (grows)', 'Last full + one differential', 'Not cleared'],
      ],
    },
    {
      caption: 'Alternate Site Types: Speed vs. Cost',
      headers: ['Site', 'Readiness', 'Recovery Time', 'Relative Cost'],
      rows: [
        ['Hot', 'Fully equipped and current', 'Minutes to hours', 'Highest'],
        ['Warm', 'Hardware/connectivity, no current data', 'Hours to days', 'Moderate'],
        ['Cold', 'Space, power, cooling only', 'Weeks', 'Lowest'],
        ['Mobile', 'Transportable self-contained unit', 'Varies', 'Varies'],
      ],
    },
  ],
  examTraps: [
    `Restore chain trap: incremental restore needs the last full PLUS every subsequent incremental; differential restore needs only the last full PLUS one differential.`,
    `Incremental is fastest to back up but slowest to restore; differential is slower to back up (grows daily) but faster/simpler to restore — don't reverse these.`,
    `Site trade-off: hot (fastest, priciest) > warm > cold (slowest, cheapest); reciprocal agreements are cheap but often impractical for capacity, confidentiality, and enforceability.`,
    `RAID is fault tolerance, not backup — it does not protect against accidental deletion, malicious/ransomware corruption, or destruction of the whole site.`,
    `Remote journaling (continuous transaction logs) gives a better RPO than periodic electronic vaulting (batch backups) — match the mechanism to the required data-loss tolerance.`,
  ],
  resources: [
    { label: 'Backup types and restore chains (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+full+incremental+differential+backup+restore' },
    { label: 'Hot warm cold sites and recovery strategies', url: 'https://www.youtube.com/results?search_query=cissp+hot+warm+cold+site+recovery+strategies' },
  ],
};

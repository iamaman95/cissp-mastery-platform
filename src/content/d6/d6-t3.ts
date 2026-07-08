import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd6',
  topicId: 'd6-t3',
  overview: `Collecting security process data means gathering the operational metrics and records that show whether security controls and processes are actually working. You cannot manage or improve what you do not measure, and auditors, management, and continuous-improvement efforts all depend on this data.

Common sources and categories include: account management data (are accounts provisioned/deprovisioned correctly, are there orphaned or dormant accounts?), management review and approval records, key performance and risk indicators (KPIs/KRIs), backup verification data (are backups completing and restorable?), security training and awareness metrics (completion rates, phishing click-rates), and disaster-recovery/business-continuity exercise results. Technical telemetry — logs, SIEM alerts, vulnerability-scan trends, patch-compliance rates, and incident metrics (number, mean time to detect/respond) — also feeds this picture.

The goal is to turn raw activity into meaningful, comparable measurements. Good metrics are relevant to objectives, measurable/objective, and tracked over time so trends (improving or degrading) are visible. This data supports management review, audit evidence, and the plan-do-check-act cycle of continuous improvement. Automation (dashboards, SIEM, GRC tools) makes collection consistent and timely.`,
  examFraming: `(ISC)² wants you to recognize which process data supports which oversight goal. Account management data reveals provisioning/deprovisioning and orphaned-account problems; backup verification data confirms recoverability (a completed backup is not proof until a restore is tested); training metrics show awareness-program effectiveness; DR/BC test results validate recovery readiness. Expect questions on using metrics for management review and continuous improvement, and on the principle that measurement must be objective and trended over time. A common theme: collecting the data is only useful if it is reviewed and acted upon.`,
  keyTerms: [
    { term: 'KPI (Key Performance Indicator)', definition: 'A metric showing how well a security process is performing against objectives.' },
    { term: 'KRI (Key Risk Indicator)', definition: 'A metric signaling changing risk levels (e.g., rising failed-login rates).' },
    { term: 'Account Management Data', definition: 'Records of provisioning/deprovisioning, dormant/orphaned accounts, and access reviews.' },
    { term: 'Backup Verification', definition: 'Confirming backups complete AND can be restored — completion alone is insufficient.' },
    { term: 'Management Review', definition: 'Leadership examination of security metrics/records to steer decisions.' },
    { term: 'Patch Compliance Rate', definition: 'The percentage of systems patched within policy timelines — a common process metric.' },
    { term: 'Awareness Metrics', definition: 'Training completion rates and phishing-simulation click-rates measuring program effectiveness.' },
    { term: 'Continuous Improvement', definition: 'Using collected data to iteratively refine controls (plan-do-check-act).' },
  ],
  scenario: `A CISO builds a monthly security scorecard. It pulls account management data (flagging 12 dormant accounts and 3 orphaned accounts for cleanup), backup verification results (backups complete, and monthly restore tests succeed — proving recoverability, not just completion), patch compliance (94% within policy), phishing-simulation click-rate (down from 18% to 5%), and DR-exercise outcomes. Management reviews the scorecard, directs remediation of the orphaned accounts, and tracks whether metrics trend the right way over subsequent months. A CISSP question might note that a backup job 'completed successfully' and ask what still must be verified — that the backup can actually be restored — or ask which data source best reveals orphaned accounts: account management/access review data.`,
  comparisonTables: [
    {
      caption: 'Security Process Data Sources and What They Reveal',
      headers: ['Data Source', 'What It Reveals'],
      rows: [
        ['Account management / access reviews', 'Provisioning gaps, orphaned/dormant accounts'],
        ['Backup verification (restore tests)', 'Whether data is actually recoverable'],
        ['Awareness/training metrics', 'Effectiveness of the security-awareness program'],
        ['Patch/vulnerability trends', 'Exposure and remediation timeliness'],
        ['DR/BC exercise results', 'Recovery readiness and plan gaps'],
        ['Incident metrics (MTTD/MTTR)', 'Detection and response effectiveness'],
      ],
    },
  ],
  examTraps: [
    'A backup that "completed successfully" is NOT proven recoverable until a restore test verifies it.',
    'Collecting metrics is only valuable if they are reviewed by management and acted upon — data for its own sake is not the goal.',
    'Account management/access-review data is the source that surfaces orphaned and dormant accounts.',
    'Good metrics are objective and tracked over time so trends (improving/degrading) are visible — one-off numbers reveal little.',
    'KPIs measure performance against objectives; KRIs signal changing risk — do not conflate them.',
  ],
  resources: [
    { label: 'Destination Certification – Security Process Data & Metrics', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+security+process+data+metrics' },
    { label: 'Kelly Handerhan – CISSP Collecting Security Process Data', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+security+metrics+process+data' },
  ],
};

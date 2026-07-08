import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd6',
  topicId: 'd6-t4',
  overview: `Raw test output (scan results, pen-test logs, audit findings) is only valuable once it is analyzed, prioritized, and communicated so the right people act on the right things. This topic covers turning findings into decisions.

Analysis starts with validating findings — separating true positives from false positives and confirming false negatives were not missed — then prioritizing by risk (likelihood × impact), often using severity ratings (e.g., CVSS scores) combined with business context. A critical-severity vulnerability on an isolated test system may rank lower than a medium one on an internet-facing crown-jewel asset; business context matters, not just the raw score.

Effective reporting is tailored to the audience: executives need a concise risk-focused summary (business impact, overall posture, prioritized recommendations), while technical teams need detailed findings with evidence, affected assets, and remediation steps. Reports should include an executive summary, methodology/scope, findings ranked by risk, and actionable remediation guidance. Findings must be tracked to closure (remediation tracking / plan of action and milestones), and retesting verifies fixes. Distribution must respect confidentiality — a report detailing exploitable weaknesses is highly sensitive and must be protected. Root-cause analysis and trend analysis across reports feed continuous improvement.`,
  examFraming: `(ISC)² emphasizes risk-based prioritization and audience-appropriate reporting. Expect: prioritize remediation by risk to the business (impact × likelihood plus context), not merely by raw CVSS number; validate findings to weed out false positives before reporting; tailor the report (executive summary vs. technical detail); protect the report because it maps exploitable weaknesses; and track findings to closure with retesting to confirm fixes. A common trap is treating the highest CVSS score as automatically the top priority regardless of exposure/asset value — business context can change the ranking.`,
  keyTerms: [
    { term: 'False Positive', definition: 'A reported finding that is not actually a real vulnerability.' },
    { term: 'False Negative', definition: 'A real vulnerability the test failed to detect.' },
    { term: 'CVSS', definition: 'Common Vulnerability Scoring System; a standardized severity score (0–10) for vulnerabilities.' },
    { term: 'Risk-Based Prioritization', definition: 'Ranking findings by likelihood and business impact, not raw severity alone.' },
    { term: 'Executive Summary', definition: 'A concise, business-focused overview of results and prioritized recommendations for leadership.' },
    { term: 'Remediation Tracking', definition: 'Following findings to closure (e.g., a Plan of Action and Milestones / POA&M).' },
    { term: 'Retesting', definition: 'Verifying that reported findings were actually fixed.' },
    { term: 'Root-Cause Analysis', definition: 'Identifying the underlying cause of findings to prevent recurrence.' },
  ],
  scenario: `A pen-test report lists 40 findings. The security team first validates them, discarding 6 false positives. It then prioritizes by risk: a "high" CVSS finding on an isolated lab box is ranked below a "medium" finding on the public payment portal, because business context (exposure and asset value) raises the portal's real risk. The team produces two views: a one-page executive summary emphasizing business impact and top three recommendations, and a detailed technical appendix with evidence and remediation steps for engineers. Findings are logged in a remediation tracker with owners and due dates; once fixes are claimed, the testers retest to confirm closure. The report itself — a roadmap of exploitable weaknesses — is marked confidential and shared only with authorized parties. A CISSP question might ask how to prioritize remediation: by risk to the business, not by raw score alone.`,
  comparisonTables: [
    {
      caption: 'Reporting Tailored to Audience',
      headers: ['Audience', 'Needs', 'Emphasis'],
      rows: [
        ['Executives/board', 'Concise risk summary + priorities', 'Business impact, overall posture'],
        ['Management', 'Findings, owners, timelines', 'Remediation planning and resourcing'],
        ['Technical teams', 'Detailed findings + evidence + steps', 'How to reproduce and fix'],
      ],
    },
  ],
  examTraps: [
    'Prioritize remediation by risk to the business (impact × likelihood + context), not by raw CVSS score alone.',
    'Validate findings to remove false positives (and watch for false negatives) before reporting.',
    'Tailor the report: executives need a concise business-risk summary; engineers need detailed reproduction and remediation steps.',
    'A security test report maps exploitable weaknesses and is highly confidential — protect and restrict its distribution.',
    'Track findings to closure and RETEST to confirm fixes — reporting a finding is not the same as remediating it.',
  ],
  resources: [
    { label: 'Destination Certification – Analyzing & Reporting Test Results', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+test+output+reporting+cvss' },
    { label: 'Kelly Handerhan – CISSP Reporting and Prioritization', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+risk+prioritization+reporting' },
  ],
};

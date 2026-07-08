import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t2',
  overview: `Logging and monitoring give an organization the visibility needed to detect, investigate, and respond to security events. Logging is the recording of events (authentication attempts, configuration changes, network flows, application errors); monitoring is the ongoing analysis of those records — and of live telemetry — to identify conditions that require attention. Without reliable logs an incident cannot be reconstructed, and without monitoring even the best logs simply accumulate unread. CISSP expects you to treat logs themselves as protected assets: they must be time-synchronized (via NTP), centrally aggregated, protected from tampering, and retained per policy and legal requirements.

A Security Information and Event Management (SIEM) system is the centerpiece of modern monitoring. A SIEM collects and normalizes logs from many sources, correlates events across them, and generates alerts based on rules and, increasingly, behavioral analytics. Correlation is what turns isolated events (a failed login here, a privilege change there, an outbound transfer) into a detectable attack pattern. Because analysts cannot watch every event, SIEM tuning to reduce false positives — and clipping levels/thresholds that suppress routine noise — is essential; too many false alerts cause alert fatigue and missed true positives.

Beyond the SIEM, CISSP covers several specific monitoring disciplines. User and Entity Behavior Analytics (UEBA) baselines normal behavior for users and devices and flags deviations (impossible travel, unusual data access), which is effective against insider threats and compromised credentials. Egress monitoring inspects outbound traffic to detect data exfiltration and command-and-control, complementing DLP. Continuous monitoring is the ongoing, largely automated assessment of security controls and configurations against a defined state, feeding real-time risk decisions rather than relying on point-in-time audits. Supporting techniques include log management (collection, retention, rotation, and secure storage), and specialized telemetry from IDS/IPS, endpoint detection, and network flow data.`,
  examFraming: `(ISC)² frames logging and monitoring around detection capability and log integrity. Expect questions where the missing ingredient is correlation across sources (the SIEM answer), accurate timestamps (NTP synchronization), or protection of the logs from the very attacker who would want to erase them (write-once/remote centralized logging). A recurring theme: the value of logging is realized only through monitoring/review — collecting logs no one analyzes provides little security benefit. Distinguish detection tools by purpose: a SIEM correlates and alerts; UEBA detects anomalous behavior and insider threats via baselining; egress monitoring/DLP targets data leaving the organization; continuous monitoring assesses control state over time. When a scenario emphasizes 'unusual behavior for that user' or 'insider,' favor UEBA; when it emphasizes 'sensitive data leaving,' favor egress monitoring/DLP; when it emphasizes 'too many alerts to review,' favor tuning/clipping levels.`,
  keyTerms: [
    { term: 'SIEM (Security Information and Event Management)', definition: 'A platform that centrally collects, normalizes, and correlates log and event data from many sources to generate security alerts and support investigation and reporting.' },
    { term: 'Event Correlation', definition: 'Analyzing events from multiple sources together to identify patterns (e.g., a multi-step attack) that individual events would not reveal in isolation.' },
    { term: 'UEBA (User and Entity Behavior Analytics)', definition: 'Analytics that establish behavioral baselines for users and devices and flag deviations, used to detect insider threats and compromised accounts.' },
    { term: 'Egress Monitoring', definition: 'Inspection of outbound network traffic to detect and prevent data exfiltration and command-and-control communication, often working alongside DLP.' },
    { term: 'Continuous Monitoring', definition: 'The ongoing, largely automated assessment of security controls, configurations, and posture against a defined baseline to support near-real-time risk decisions.' },
    { term: 'Clipping Level / Threshold', definition: 'A predefined baseline count of routine events below which activity is treated as noise and not alerted, used to suppress false positives and reduce alert fatigue.' },
    { term: 'Log Management', definition: 'The processes for collecting, aggregating, rotating, protecting, and retaining log data, including time synchronization and secure central storage.' },
    { term: 'NTP (Network Time Protocol)', definition: 'A protocol used to synchronize clocks across systems so that log timestamps can be correlated accurately during investigation.' },
  ],
  scenario: `An organization has enabled verbose logging on its firewalls, servers, and applications, but logs stay on each local host and no one reviews them regularly. An attacker compromises a workstation, moves laterally over three weeks, and exfiltrates data. During the post-breach review, investigators find that the evidence existed all along — but timestamps across systems were minutes to hours apart (no NTP), logs on the compromised hosts had been cleared by the attacker, and there was no central place where the failed logins, privilege escalation, and outbound transfer could be seen together.

The corrective actions map directly to the exam's themes: deploy a SIEM to centrally aggregate and correlate logs so a multi-step attack becomes visible; forward logs to protected, write-once central storage so a local compromise cannot erase them; synchronize all clocks via NTP so events can be sequenced; add egress monitoring/DLP to catch the outbound exfiltration; and — most importantly — actually monitor and tune the alerts, because logs no one reads provide no detection value. A CISSP question here tests whether you recognize that correlation, log integrity/centralization, time synchronization, and active review are what convert raw logging into detection.`,
  comparisonTables: [
    {
      caption: 'Monitoring Disciplines and What They Detect',
      headers: ['Discipline', 'Primary Purpose', 'Best Signal For'],
      rows: [
        ['SIEM', 'Central collection + cross-source correlation and alerting', 'Multi-step attacks spanning many systems'],
        ['UEBA', 'Behavioral baselining and anomaly detection', 'Insider threats, compromised/abused accounts'],
        ['Egress Monitoring / DLP', 'Inspect outbound traffic/data', 'Data exfiltration, C2 communication'],
        ['Continuous Monitoring', 'Ongoing control/config posture assessment', 'Drift from a secure baseline, control failures'],
      ],
    },
  ],
  examTraps: [
    `Collecting logs is not the same as monitoring them — logs that no one reviews provide little detection value; the exam favors active review/correlation over mere retention.`,
    `Without synchronized clocks (NTP), timestamps cannot be correlated across systems, crippling investigation — time synchronization is a prerequisite, not an optional nicety.`,
    `Logs must be protected from the attacker: forward to centralized, write-once/remote storage so a compromised host's local logs cannot simply be cleared.`,
    `Match the tool to the signal: 'unusual behavior for that user/insider' points to UEBA; 'sensitive data leaving the network' points to egress monitoring/DLP; 'too many alerts' points to tuning/clipping levels — don't default to 'SIEM' for every answer.`,
    `More logging is not automatically better; excessive noise and unreviewed volume cause alert fatigue and missed true positives — tuning and thresholds matter.`,
  ],
  resources: [
    { label: 'SIEM, log management, and correlation (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+siem+log+management+correlation' },
    { label: 'UEBA and continuous monitoring explained', url: 'https://www.youtube.com/results?search_query=cissp+ueba+continuous+monitoring' },
  ],
};

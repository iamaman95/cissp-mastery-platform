import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t7',
  overview: `Detective and preventive measures are the operational technologies and control types that stop, catch, and respond to malicious activity. CISSP expects you to reason in two dimensions: the control's function (deterrent, preventive, detective, corrective, compensating, recovery) and the specific technology that implements it (firewall, IDS/IPS, allowlisting, sandboxing, honeypots, antivirus, threat intelligence). A well-designed environment layers these — defense in depth — so that if a preventive control fails, a detective control catches the activity and a corrective control limits the damage.

The control-function taxonomy is heavily tested. A deterrent control discourages an attacker before they act (a warning banner, visible cameras). A preventive control stops an action from occurring (a firewall blocking a port, allowlisting refusing to run unapproved code). A detective control identifies that something happened (an IDS alert, log review, a honeypot triggering). A corrective control fixes or restores after an event (removing malware, restoring from backup). Compensating controls provide an alternative when the primary control is not feasible, and recovery controls restore operations. The same technology can serve more than one function depending on how it is used, but you should be able to classify a described control by its primary intent.

The specific technologies each have a purpose to know. Firewalls enforce network access policy (preventive). An IDS detects and alerts on suspicious traffic (detective) while an IPS can also block it inline (preventive) — the key distinction is that an IPS sits in-line and can take action, whereas an IDS is passive. Detection can be signature-based (matching known patterns) or anomaly/behavior-based (flagging deviations from normal), each with trade-offs. Application allowlisting (whitelisting) permits only approved software to run and denies everything else — a strong preventive control against unknown malware, in contrast to blocklisting. Sandboxing detonates suspicious files in an isolated environment to observe behavior safely. Honeypots and honeynets are decoy systems that attract and study attackers, functioning as detective/deceptive controls. Antivirus/EDR detects and removes malicious code, and threat intelligence feeds enrich all of the above with knowledge of current adversary indicators.`,
  examFraming: `(ISC)² frames this topic around correctly classifying control functions and matching the right technology to a goal. The most common trap is confusing IDS and IPS: an IDS is passive and detective (it alerts), while an IPS is inline and preventive (it can block). Expect to classify controls as deterrent, preventive, detective, or corrective — remember that a warning banner deters, a firewall/allowlisting prevents, an IDS/honeypot detects, and backup restoration corrects. Know that allowlisting (deny-by-default, permit approved) is stronger against unknown malware than blocklisting (permit-by-default, block known-bad). Recognize sandboxing as safe detonation/analysis, and honeypots/honeynets as decoys for detection and study, not for blocking. When a scenario asks which control BEST fits, first decide the function needed (stop it vs. detect it vs. recover), then choose the technology whose primary intent matches. Layering (defense in depth) is favored over relying on any single control.`,
  keyTerms: [
    { term: 'Deterrent Control', definition: 'A control that discourages a potential attacker from acting, such as a warning banner or visible surveillance.' },
    { term: 'Preventive Control', definition: 'A control that stops an unwanted action from occurring, such as a firewall blocking traffic or allowlisting refusing unapproved code.' },
    { term: 'Detective Control', definition: 'A control that identifies and signals that an event has occurred, such as an IDS alert, log review, or a triggered honeypot.' },
    { term: 'Corrective Control', definition: 'A control that remediates or restores after an incident, such as removing malware or restoring data from backup.' },
    { term: 'IDS vs. IPS', definition: 'An IDS passively detects and alerts on suspicious activity; an IPS sits inline and can actively block it, making the IPS a preventive control.' },
    { term: 'Application Allowlisting (Whitelisting)', definition: 'A deny-by-default control that permits only explicitly approved software to run, strongly resisting unknown malware, unlike blocklisting.' },
    { term: 'Sandboxing', definition: 'Executing suspicious code in an isolated environment to safely observe its behavior without risking production systems.' },
    { term: 'Honeypot / Honeynet', definition: 'A decoy system (or network of them) designed to attract, detect, and study attackers, acting as a detective/deceptive control.' },
    { term: 'Threat Intelligence', definition: 'Curated information about current adversary tactics and indicators used to enrich and tune detective and preventive controls.' },
  ],
  scenario: `A security architect is designing layered defenses for a web application environment. At the perimeter, a firewall enforces which ports and services are reachable (a preventive control). Behind it, an intrusion prevention system inspects traffic inline and can block known exploit patterns (preventive/detective), while an intrusion detection system on a monitoring span port alerts analysts to suspicious activity it sees but does not block (detective). Endpoints run application allowlisting so only approved binaries execute, stopping unknown malware by default (preventive), backed by antivirus/EDR that detects and removes malicious code (detective/corrective).

To study attacker behavior, the team stands up a honeypot in a segmented decoy network; any interaction with it is inherently suspicious and generates high-fidelity detective alerts. Suspicious email attachments are automatically detonated in a sandbox to observe their behavior before they reach users. Threat intelligence feeds keep the IPS signatures, allowlists, and detection rules current. A warning banner on the login page deters casual misuse. If prevention fails, backups provide a corrective/recovery path. A CISSP question here tests whether you can classify each control by function — deterrent, preventive, detective, corrective — and pick the technology whose primary intent matches the stated goal, and whether you correctly distinguish the passive, alerting IDS from the inline, blocking IPS.`,
  comparisonTables: [
    {
      caption: 'Control Functions with Examples',
      headers: ['Function', 'Intent', 'Example'],
      rows: [
        ['Deterrent', 'Discourage the attacker before acting', 'Warning banner, visible cameras'],
        ['Preventive', 'Stop the action from occurring', 'Firewall, IPS (inline block), allowlisting'],
        ['Detective', 'Identify that an event occurred', 'IDS alert, log review, honeypot, AV detection'],
        ['Corrective', 'Remediate/restore after an event', 'Malware removal, restore from backup'],
      ],
    },
  ],
  examTraps: [
    `IDS vs. IPS: an IDS is passive and detective (it alerts only); an IPS is inline and preventive (it can block). Don't call an IDS a preventive control.`,
    `Allowlisting (deny-by-default, permit approved) is stronger against unknown/zero-day malware than blocklisting (permit-by-default, block known-bad).`,
    `Classify by primary intent: a warning banner deters, a firewall prevents, a honeypot/IDS detects, and backup restoration corrects — the same tech can shift function, but answer by primary purpose.`,
    `Honeypots/honeynets are decoys for detection and study, not blocking controls; interacting with them is inherently suspicious, which is why alerts are high-fidelity.`,
    `Sandboxing is safe detonation/analysis of suspicious code, not a mechanism that itself blocks traffic at the perimeter.`,
  ],
  resources: [
    { label: 'Control types: deterrent, preventive, detective, corrective (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+control+types+preventive+detective+corrective+deterrent' },
    { label: 'IDS vs IPS, allowlisting, honeypots, sandboxing', url: 'https://www.youtube.com/results?search_query=cissp+ids+vs+ips+honeypot+allowlisting+sandboxing' },
  ],
};

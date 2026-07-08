import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t6',
  overview: `Incident management is the structured process for handling adverse security events so that damage is minimized, service is restored, and the organization learns and improves. CISSP expects you to know the incident response lifecycle as an ordered sequence and to apply it under pressure: detect, respond, mitigate (contain), report, recover, remediate, and then conduct lessons learned. Some texts label the phases slightly differently (e.g., preparation → detection/analysis → containment → eradication → recovery → post-incident/lessons learned), but the core ordering and intent are the same, and the exam tests whether you act in the correct order rather than jumping ahead.

The single most tested idea is that containment comes before eradication and recovery. When an incident is confirmed, you first limit its spread (contain) to stop it from causing further harm, then eradicate the root cause (remove the malware, close the exploited hole), then recover systems to normal operation, and only afterward remediate the underlying weaknesses and capture lessons learned. Acting out of order — for example, wiping and restoring a compromised server immediately — can destroy evidence and allow the threat to persist or re-enter, so CISSP rewards the disciplined sequence.

Several supporting concepts round out the domain. An incident should be distinguished from an event: an event is any observable occurrence, while an incident is an event that actually or potentially harms security. Preparation (having a plan, a trained Computer Security Incident Response Team/CSIRT, and the tools ready) determines how well every later phase goes. Evidence preservation runs alongside response — even while containing, you avoid needlessly destroying forensic data if the matter may be pursued legally. Reporting obligations (internal escalation and, where required, notification to regulators, customers, or law enforcement) must be handled within legal timelines. Finally, the lessons-learned phase feeds improvements back into preparation, making incident response a continuous cycle rather than a one-time reaction.`,
  examFraming: `(ISC)² frames incident management around correct sequencing and disciplined judgment under pressure. The recurring FIRST/NEXT questions test whether you contain before you eradicate, preserve evidence before you wipe, and follow the plan rather than improvising. Memorize the phase order — detect → respond → mitigate/contain → report → recover → remediate → lessons learned (or the equivalent preparation → detection/analysis → containment → eradication → recovery → lessons-learned model) — and know that containment always precedes eradication and recovery. Recognize that restoring or re-imaging a system too early can destroy evidence and leave the root cause in place. Distinguish an event (any observable occurrence) from an incident (harm or potential harm). Understand that preparation quality drives outcomes, that reporting/notification has legal timelines, and that lessons learned exist to improve future preparation. When two actions seem plausible, choose the one that stops further harm first (contain) while preserving the ability to investigate.`,
  keyTerms: [
    { term: 'Event', definition: 'Any observable occurrence in a system or network, which may be benign; not every event is an incident.' },
    { term: 'Incident', definition: 'An event that actually or potentially harms the confidentiality, integrity, or availability of information or systems, warranting a response.' },
    { term: 'Detection', definition: 'Identifying that an incident is occurring or has occurred, through monitoring, alerts, or reports.' },
    { term: 'Containment (Mitigation)', definition: 'Actions taken to limit the scope and spread of an incident and prevent further damage before the root cause is removed.' },
    { term: 'Eradication', definition: 'Removing the cause of the incident (malware, compromised accounts, exploited vulnerabilities) after it has been contained.' },
    { term: 'Recovery', definition: 'Restoring affected systems and services to normal, verified operation after eradication.' },
    { term: 'Remediation', definition: 'Addressing the underlying weaknesses that allowed the incident so it is less likely to recur.' },
    { term: 'Lessons Learned', definition: 'A post-incident review capturing what happened and what to improve, feeding back into preparation for future incidents.' },
    { term: 'CSIRT', definition: 'The Computer Security Incident Response Team responsible for coordinating and executing the incident response process.' },
  ],
  scenario: `A SIEM alert indicates that a workstation is scanning the internal network and has established a suspicious outbound connection. The analyst confirms it is compromised (detection). Under pressure to 'just clean it,' a junior engineer wants to immediately reimage the machine and put it back online.

The correct incident-management sequence is different. After confirming the incident (respond), the first priority is containment: isolate the workstation from the network (for example, quarantine the port or disconnect it) to stop lateral movement and outbound exfiltration — while preserving evidence such as memory and logs if the matter may be investigated. Only after containment does the team eradicate the root cause (remove the malware, disable compromised credentials, close the exploited path), then recover the system to verified normal operation, then remediate the underlying weakness (patch, tighten configuration), and finally conduct a lessons-learned review that improves preparation. Reimaging immediately would skip containment and evidence preservation, destroy forensic data, and risk leaving the root cause unaddressed so the threat returns. A CISSP question here tests whether you contain before you eradicate/recover and preserve evidence rather than jumping straight to restoration.`,
  comparisonTables: [
    {
      caption: 'Incident Response Phase Order (contain before eradicate/recover)',
      headers: ['Order', 'Phase', 'Goal'],
      rows: [
        ['1', 'Detect', 'Identify that an incident is occurring'],
        ['2', 'Respond', 'Activate the plan/CSIRT and assess'],
        ['3', 'Mitigate / Contain', 'Limit spread and stop further damage'],
        ['4', 'Report', 'Escalate internally and notify as required'],
        ['5', 'Recover', 'Restore systems to verified normal operation'],
        ['6', 'Remediate', 'Fix the underlying weakness (eradicate root cause)'],
        ['7', 'Lessons Learned', 'Review and improve future preparation'],
      ],
    },
  ],
  examTraps: [
    `Contain BEFORE you eradicate and recover — stopping the spread comes first; wiping or restoring a system immediately can leave the root cause in place and let the threat return.`,
    `Preserve evidence before destroying it: reimaging or cleaning a compromised system too early destroys forensic data you may need for investigation or legal action.`,
    `Know the phase order and answer FIRST/NEXT questions by choosing the next correct step in sequence, not the most drastic action.`,
    `An event is any observable occurrence; an incident is an event that harms or could harm security — don't treat every event as an incident.`,
    `Lessons learned is not optional busywork — it feeds back into preparation; skipping it means the same incident is likely to recur.`,
  ],
  resources: [
    { label: 'Incident response lifecycle and phase order (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+incident+response+lifecycle+containment+eradication' },
    { label: 'Containment before eradication explained', url: 'https://www.youtube.com/results?search_query=cissp+incident+management+contain+before+eradicate' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t6',
  overview: `CISSP candidates must distinguish four fundamentally different types of investigations, because each carries a different purpose, a different burden of proof, different rules of evidence, and different potential outcomes. Administrative investigations are internal, conducted by an organization (often HR or internal security) to determine whether policy was violated and what internal consequence (up to and including termination) is warranted; the standard of proof is typically the lowest — often "preponderance of the evidence" or simply management judgment — and the outcome is internal, not criminal or civil liability.

Criminal investigations are conducted by law enforcement (or with law enforcement involvement) to determine whether a crime was committed and to support prosecution; they carry the highest burden of proof — "beyond a reasonable doubt" — and require strict adherence to evidentiary rules (chain of custody, search warrants, Miranda-equivalent rights) because the outcome can include imprisonment. Civil investigations arise from disputes between private parties (e.g., breach of contract, tort claims, IP infringement) litigated in civil court, with a lower burden of proof — "preponderance of the evidence" (more likely than not) — and outcomes limited to monetary damages or injunctive relief, not incarceration. Regulatory investigations are conducted by a government regulatory body (e.g., a data protection authority, financial regulator) to determine compliance with a specific regulatory framework, often using an intermediate standard of proof and resulting in fines, consent decrees, or mandated remediation rather than criminal penalties.

A single incident can trigger multiple investigation types simultaneously — a data breach might launch an internal administrative investigation (did an employee violate policy?), a regulatory investigation (did the company violate GDPR?), and potentially a criminal investigation (did an external attacker commit computer fraud?) — each running on its own track with its own standard of evidence and its own investigators, and each requiring the security professional to preserve evidence to the highest applicable standard (typically the criminal standard) even if the incident initially looks purely administrative.`,
  examFraming: `(ISC)² wants you to read a scenario and correctly classify which type(s) of investigation are in play, and reason about the practical consequences of that classification — most importantly, what standard of evidence handling is required. A key exam skill is recognizing that even a seemingly "internal" incident should be handled with forensically sound evidence preservation (proper chain of custody, forensic imaging) from the outset, because you often cannot predict at the start whether an incident will escalate to civil litigation or criminal referral — and evidence collected sloppily under a low administrative standard may become inadmissible or unusable later. Expect questions that ask which investigation type has the HIGHEST/LOWEST burden of proof, which type could lead to imprisonment vs. termination vs. fines, and who typically conducts each type (internal staff vs. law enforcement vs. a regulator).`,
  keyTerms: [
    { term: 'Administrative Investigation', definition: 'An internal organizational investigation into a suspected policy violation, typically conducted by HR/internal security, with internal consequences such as discipline or termination.' },
    { term: 'Criminal Investigation', definition: 'An investigation conducted by or with law enforcement to determine whether a crime occurred, using the "beyond a reasonable doubt" standard, potentially resulting in prosecution and imprisonment.' },
    { term: 'Civil Investigation', definition: 'An investigation supporting a private-party lawsuit (e.g., breach of contract, tort, IP infringement), using the "preponderance of the evidence" standard, resulting in monetary damages or injunctions.' },
    { term: 'Regulatory Investigation', definition: 'An investigation by a government regulatory body to assess compliance with a specific regulatory framework, potentially resulting in fines, consent decrees, or mandated remediation.' },
    { term: 'Chain of Custody', definition: 'Documented, unbroken record of who collected, handled, and stored evidence and when, required to establish evidence integrity and admissibility.' },
    { term: 'Beyond a Reasonable Doubt', definition: 'The highest standard of proof, used in criminal cases, requiring near-certainty of guilt.' },
    { term: 'Preponderance of the Evidence', definition: 'A "more likely than not" (>50%) standard of proof used in civil cases and many administrative proceedings.' },
    { term: 'Forensic Imaging', definition: 'Creating a bit-for-bit copy of digital media using write-blocking tools to preserve original evidence integrity for any potential future investigation.' },
  ],
  scenario: `A security analyst discovers that an employee has been copying confidential customer files to a personal USB drive over several months. The company opens an internal administrative investigation to decide whether to terminate the employee for policy violation. During the investigation, it becomes clear the copied files include data protected under a data protection regulation, and the regulator's office is notified, triggering a regulatory investigation into the company's compliance failures. Separately, forensic analysis reveals the employee also sold some of the data to a competitor for cash, which may constitute theft of trade secrets — a criminal matter referred to law enforcement — and the harmed customers' company may also sue the employee civilly for damages. A CISSP-minded security team recognizes from day one that evidence must be collected using forensically sound methods (imaging, hashing, documented chain of custody) sufficient to meet the criminal standard, even though the investigation began as a routine administrative matter — because failing to do so could make the evidence useless if the case escalates to criminal prosecution or civil litigation.`,
  comparisonTables: [
    {
      caption: 'Investigation Types Compared',
      headers: ['Type', 'Conducted By', 'Standard of Proof', 'Typical Outcome'],
      rows: [
        ['Administrative', 'Internal (HR, internal security/legal)', 'Low — often management judgment or preponderance of evidence', 'Discipline, termination, internal policy remediation'],
        ['Criminal', 'Law enforcement / prosecutors', 'Highest — beyond a reasonable doubt', 'Prosecution, fines, imprisonment'],
        ['Civil', 'Private parties via civil courts', 'Preponderance of the evidence (more likely than not)', 'Monetary damages, injunctive relief'],
        ['Regulatory', 'Government regulatory body/agency', 'Varies, often intermediate; agency-specific rules', 'Fines, consent decrees, mandated remediation, license actions'],
      ],
    },
  ],
  examTraps: [
    `Administrative investigations having the "lowest" burden of proof does NOT mean evidence handling can be sloppy — you should still preserve evidence to a forensic standard because escalation to criminal/civil proceedings is often unpredictable at the outset.`,
    `"Beyond a reasonable doubt" belongs to criminal investigations only — don't select it for civil or regulatory scenarios, which use "preponderance of the evidence" or agency-specific standards.`,
    `A single incident can trigger multiple simultaneous investigation types (administrative + regulatory + criminal) — questions may test whether you recognize this rather than force a single "either/or" classification.`,
    `Regulatory investigations are conducted by government bodies but are distinct from criminal investigations — a regulatory fine is not the same as a criminal conviction, even though both involve government action.`,
    `Civil investigations/litigation can proceed even if a criminal case is declined or unsuccessful, because the burden of proof is lower — don't assume a failed criminal case means no legal consequences at all.`,
  ],
  resources: [
    { label: 'Destination Certification – Investigation Types for CISSP', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+investigation+types' },
    { label: 'Kelly Handerhan – CISSP Administrative Criminal Civil Regulatory Investigations', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+investigation+types' },
  ],
};

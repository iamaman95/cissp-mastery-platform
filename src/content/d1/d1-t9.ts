import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t9',
  overview: `Personnel security recognizes a hard truth: people are simultaneously an organization's greatest asset and its greatest risk. CISSP's personnel security domain covers the full employment lifecycle — candidate screening, onboarding, ongoing employment controls, and termination/offboarding — and the policies that reduce the risk of insider threat, fraud, and human error at each stage.

Pre-employment controls include background checks (criminal history, credit checks, education/employment verification, reference checks) that should be tiered by role sensitivity: a help-desk technician and a database administrator with access to financial systems do not warrant the same depth of screening. Non-disclosure agreements (NDAs), acceptable use policies, and codes of conduct are typically signed during onboarding, before system access is granted.

During employment, controls like separation of duties, job rotation, and mandatory vacation exist specifically to detect and deter fraud: separation of duties ensures no single person can complete a sensitive process end-to-end alone, job rotation cross-trains staff and exposes anomalies when someone else steps into a role, and mandatory vacation forces a period where another person must perform the departed employee's duties — a classic mechanism for uncovering embezzlement or fraud schemes that depend on continuous personal control.

Termination procedures — voluntary or involuntary — must be planned and, in involuntary/hostile cases, executed swiftly and simultaneously: access revocation, badge/key collection, and reminders of ongoing NDA/confidentiality obligations should happen at (or just before) the moment of notification, not hours or days later. CISSP treats the timing and coordination of termination as a critical control, since a delayed offboarding process is one of the most common real-world sources of insider-threat incidents.`,
  examFraming: `(ISC)² wants you to reason about WHEN and HOW MUCH screening or control is appropriate given the sensitivity of a role, and to sequence personnel actions correctly (e.g., background check before offer/access, NDA before system provisioning, access revocation at/before termination notice). Expect scenario questions that describe a specific job (e.g., "a payroll clerk," "a system administrator with root access," "a summer intern") and ask you to select the BEST screening depth or control, testing whether you understand tiered/risk-based screening rather than a one-size-fits-all checklist. You'll also be tested on distinguishing preventive personnel controls (separation of duties, least privilege) from detective personnel controls (mandatory vacation, job rotation, audit review) — a question may ask which control is BEST suited to detect an ongoing fraud versus which prevents it in the first place. Termination scenarios often test FIRST/BEST sequencing: what should happen first when someone is terminated for cause, and why simultaneity of notification and access revocation matters.`,
  keyTerms: [
    { term: 'Background Check / Screening', definition: 'Pre-employment (and sometimes periodic) verification of a candidate\'s identity, criminal history, credit history, education, and employment record, scaled in depth to the sensitivity of the role.' },
    { term: 'Non-Disclosure Agreement (NDA)', definition: 'A legal agreement obligating an employee or contractor to protect confidential information, typically signed before granting system or data access.' },
    { term: 'Separation of Duties (SoD)', definition: 'Dividing a sensitive process into multiple steps performed by different individuals so no single person can complete a fraudulent or harmful action alone.' },
    { term: 'Job Rotation', definition: 'Periodically moving employees between roles/duties, which cross-trains staff and increases the likelihood that irregularities or fraud committed by the prior role-holder are discovered.' },
    { term: 'Mandatory Vacation', definition: 'A policy requiring employees (especially in sensitive financial or system-administration roles) to take consecutive days off during which someone else performs their duties, helping to detect ongoing fraud that depends on constant personal control.' },
    { term: 'Least Privilege', definition: 'Granting a user only the minimum access rights necessary to perform their job function, limiting the potential damage from error, misuse, or compromise.' },
    { term: 'Termination Procedures (Offboarding)', definition: 'A formal, coordinated process for revoking access, collecting assets, and reminding departing personnel of continuing obligations (e.g., NDA), timed to minimize insider-threat risk.' },
    { term: 'Onboarding', definition: 'The formal process of provisioning a new hire with the credentials, training, and signed agreements required before they may perform their job.' },
  ],
  scenario: `A mid-size company is hiring for two open roles: a front-desk receptionist and a senior database administrator (DBA) who will have privileged access to the customer financial database. HR proposes running the identical standard background check package (basic identity verification only) for both roles to "keep things fair and simple."

A CISSP-minded reviewer would flag this as a risk-based screening failure: personnel security controls should be tiered to the sensitivity and access level of the role, not applied uniformly for administrative convenience. The receptionist role, with no access to sensitive systems, may reasonably need only basic identity and reference verification. The DBA role, with the ability to read, modify, or exfiltrate the entire customer financial database, warrants a deeper background check — criminal history, credit check (relevant given financial-fraud risk), verified employment history, and possibly a more privacy-invasive/PCI-relevant screening — proportional to the harm a bad actor in that seat could cause. The lesson: screening depth is a risk decision driven by data/system sensitivity and potential impact, not a fixed HR template applied equally to every hire.`,
  comparisonTables: [
    {
      caption: 'Background Screening Depth by Role Sensitivity',
      headers: ['Role Sensitivity', 'Example Role', 'Typical Screening Depth'],
      rows: [
        ['Low', 'Receptionist, retail associate', 'Identity verification, basic reference check'],
        ['Moderate', 'General office staff, help-desk technician', 'Identity, employment history, education verification, criminal history'],
        ['High', 'System/database administrator, finance staff with payment access', 'Full criminal history, credit check, verified employment/education, possibly periodic re-screening'],
        ['Very High', 'Executives, security officers, roles with access to classified/highly regulated data', 'Extensive background investigation, credit/financial history, possibly government clearance-equivalent vetting, ongoing monitoring'],
      ],
    },
    {
      caption: 'Preventive vs. Detective Personnel Controls',
      headers: ['Control', 'Type', 'Purpose'],
      rows: [
        ['Separation of duties', 'Preventive', 'Stops a single individual from completing a sensitive process alone'],
        ['Least privilege', 'Preventive', 'Limits the damage any one account/role can cause'],
        ['Mandatory vacation', 'Detective', 'Surfaces fraud/irregularities while the normal duty-holder is absent'],
        ['Job rotation', 'Detective (also cross-training)', 'Exposes anomalies as a new person reviews/performs prior duties'],
        ['Audit log review', 'Detective', 'Identifies after-the-fact evidence of policy violations or fraud'],
      ],
    },
  ],
  examTraps: [
    `Applying the same background-check depth to every role "to be fair" — CISSP expects risk-based, role-sensitivity-tiered screening, not a flat policy.`,
    `Confusing mandatory vacation and job rotation as prevention mechanisms — both are primarily DETECTIVE controls (they surface existing fraud), not preventive ones, even though they have a deterrent effect.`,
    `Assuming termination access revocation can happen "sometime that day" — for involuntary terminations, CISSP expects revocation to be simultaneous with (or immediately before) notification to minimize the window for retaliatory or malicious insider action.`,
    `Treating an NDA as a technical control — it is an administrative/legal control, and questions may test whether you correctly classify it as such rather than as an access control mechanism.`,
    `Selecting separation of duties when a question is really describing detection of an already-completed fraud (that calls for job rotation, mandatory vacation, or audit review) — read carefully whether the question asks about preventing or detecting.`,
  ],
  resources: [
    { label: 'Destination Certification – Personnel Security Policies', url: 'https://www.youtube.com/results?search_query=destination+certification+personnel+security+policies+cissp' },
    { label: 'Kelly Handerhan – Personnel Security and Separation of Duties', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+personnel+security+separation+of+duties' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd2',
  topicId: 'd2-t5',
  overview: `Asset retention is the discipline of deciding how long data, records, and the media/hardware that hold them must be kept — and ensuring they are actually destroyed or disposed of once that period ends. A retention policy is not an IT decision made in isolation; it is a business and legal requirement translated into an operational schedule. Legal, compliance, records management, and privacy stakeholders define retention periods based on statutory and regulatory obligations, contractual commitments, and litigation risk. IT and security teams then implement the schedule technically — through storage lifecycle rules, archival tiers, and secure destruction/sanitization procedures.

Regulatory frameworks frequently conflict in their instincts. HIPAA generally requires covered entities to retain certain records (e.g., audit logs, authorizations) for six years. SOX mandates that public companies retain financial audit records and supporting workpapers for at least seven years. Tax and employment laws impose their own multi-year minimums. GDPR, by contrast, is built around data minimization and storage limitation — personal data should be kept "no longer than necessary" for the purpose it was collected for, unless another law specifically requires longer retention. A mature organization does not pick one philosophy; it maps each data category to the specific law, regulation, or contract that governs it, and retains only as long as the strictest applicable requirement demands, then destroys it.

Retention schedules are also overridden by legal hold (litigation hold): when litigation, a regulatory investigation, or a credible expectation of either arises, the organization has a legal duty to preserve potentially relevant records — even if the normal retention/destruction schedule says they should be deleted. Continuing to destroy data under a routine schedule after a litigation hold has been issued can constitute spoliation of evidence, exposing the organization to adverse inference instructions, sanctions, or independent liability, regardless of whether the destruction was "automatic" or well-intentioned.

Retention also applies to media and hardware, not just logical records: when drives, tapes, or devices reach end-of-life (EOL), they must be retained, sanitized, or destroyed according to the same data-classification rules that governed the live data on them. Organizations must balance storage cost and operational risk against retention obligations on both ends of the spectrum. Over-retention — keeping data far longer than required "just in case" — expands the attack surface, increases breach impact and e-discovery costs, and raises liability because more sensitive data exists to be compromised or subpoenaed. Under-retention — destroying data before the legally required period, or before a hold is lifted — creates regulatory violations, spoliation exposure, and an inability to defend the organization's own actions later. Neither extreme is "safe"; the correct answer is always adherence to the defined, legally-informed schedule, adjusted for any active hold.`,
  examFraming: `(ISC)² frames retention questions as tests of who owns the decision and what overrides what. The retention period itself is set by legal/compliance/records-management functions based on statutory, regulatory, and contractual requirements — never by IT or security acting unilaterally, and never based on "what's convenient to store." Security professionals implement and enforce the schedule (technical controls, sanitization, audit of compliance) but do not invent it.

The second reasoning pattern tested is hierarchy under conflict: when a legal hold is in effect, it suspends the normal destruction schedule for the specific records in scope, regardless of what the retention policy would otherwise dictate. A CISSP-style question will describe a routine destruction date arriving while litigation is pending, and the correct action is always to preserve the data — continuing scheduled destruction is not defensible ("we were just following policy" is not a valid excuse once a hold is known). Expect distractors that describe "keep everything forever" as the safe default; this is wrong because it increases breach exposure, discovery cost, and violates data-minimization obligations. The exam wants you to recognize retention as a compliance-driven balance, not a maximalist or minimalist instinct.`,
  keyTerms: [
    { term: 'Retention Policy', definition: 'A formal, documented set of rules defining how long specific categories of data and records must be kept before secure disposal, based on legal, regulatory, and business requirements.' },
    { term: 'Retention Schedule', definition: 'The operational document that maps specific record/data types to their required retention periods and disposition actions (archive, destroy, transfer).' },
    { term: 'Legal Hold (Litigation Hold)', definition: 'A directive, issued when litigation or investigation is reasonably anticipated, requiring preservation of potentially relevant records and suspending normal destruction schedules for that data.' },
    { term: 'Data Minimization', definition: 'A privacy principle (central to GDPR) requiring that only data necessary for a stated purpose be collected and retained, and only for as long as that purpose requires.' },
    { term: 'Spoliation', definition: 'The intentional, reckless, or negligent destruction or alteration of evidence that is or should be known to be relevant to pending or anticipated litigation, creating legal liability.' },
    { term: 'End-of-Life (EOL) Media', definition: 'Storage media or hardware that has reached the end of its operational or retention lifecycle and must be sanitized or destroyed per data classification requirements before disposal.' },
    { term: 'Records Retention Requirement', definition: 'A specific statutory, regulatory, or contractual obligation (e.g., SOX, HIPAA, tax law) mandating a minimum period certain records must be preserved.' },
    { term: 'Over-Retention', definition: 'Keeping data or media beyond its required or useful retention period, increasing breach impact, discovery costs, and liability without a corresponding business or legal need.' },
  ],
  scenario: `A mid-size healthcare billing company's records retention policy calls for destroying claims-processing records seven years after the close of the relevant fiscal year, per its interpretation of applicable regulations. On the scheduled destruction date for a batch of 2019 records, the automated data lifecycle job runs as configured and permanently deletes the batch from the archive tier.

Two weeks later, the company's general counsel issues a litigation hold notice: a former patient has filed a lawsuit alleging billing fraud connected to claims from exactly that time period, and outside counsel had verbally flagged the possibility of litigation to the compliance team six weeks before the destruction ran — a fact IT was never told. Legal argues the notice should have gone out earlier, but from IT's perspective, the destruction followed the documented schedule to the letter.

This scenario illustrates the central tension in asset retention: a routine, policy-compliant destruction job can still result in spoliation if the organization knew or should have known that litigation was reasonably anticipated before the destruction occurred. It also shows why legal hold must be a cross-functional trigger — communicated the moment litigation becomes foreseeable — that pauses automated destruction regardless of what the standing schedule says, and why IT following its documented process is not, by itself, a legal defense once anticipated litigation existed.`,
  comparisonTables: [
    {
      caption: 'Over-Retention vs. Under-Retention Risk',
      headers: ['Dimension', 'Over-Retention (keeping too long)', 'Under-Retention (destroying too soon)'],
      rows: [
        ['Primary risk', 'Larger breach impact/attack surface; higher e-discovery cost and scope', 'Regulatory non-compliance; inability to produce required records'],
        ['Legal exposure', 'Increased liability if excess data is compromised or subpoenaed', 'Spoliation claims, adverse inference, sanctions if under litigation hold'],
        ['Cost driver', 'Ongoing storage, management, and security control costs for unneeded data', 'Fines, penalties, and litigation losses from missing required evidence'],
        ['Common cause', 'No defined destruction trigger; "just in case" hoarding mindset', 'Rigid automated schedules that ignore legal hold notices'],
        ['Correct posture', 'Destroy per schedule once legal/regulatory minimum is met and no hold applies', 'Retain fully through the required period and through any active legal hold'],
      ],
    },
    {
      caption: 'Representative Retention Drivers by Regulation/Framework',
      headers: ['Framework', 'Retention Instinct', 'Practical Implication'],
      rows: [
        ['SOX', 'Mandates minimum retention (audit workpapers, ~7 years)', 'Cannot destroy in-scope financial records before the statutory minimum, even to save storage cost'],
        ['HIPAA', 'Mandates minimum retention (e.g., ~6 years for policies, authorizations, audit logs)', 'Covered entities/business associates must retain specified documentation regardless of state law minimums, if HIPAA is stricter'],
        ['GDPR', 'Data minimization / storage limitation — retain no longer than necessary', 'Personal data must be deleted or anonymized once its original purpose ends, absent another legal basis to keep it longer'],
        ['Litigation Hold (cross-cutting)', 'Overrides all of the above for in-scope records', 'Suspends scheduled destruction the moment litigation/investigation is reasonably anticipated, regardless of underlying regulation'],
      ],
    },
  ],
  examTraps: [
    `Assuming IT or security sets the retention period — retention requirements are defined by legal, compliance, and records-management functions based on law/regulation/contract; IT implements the schedule, it does not author it.`,
    `Assuming "keep everything forever" is the safe default — over-retention increases breach impact, e-discovery scope, and liability; it is not a risk-free choice.`,
    `Treating "we followed the documented schedule" as a complete defense — if litigation was reasonably anticipated before scheduled destruction ran, destruction can still constitute spoliation.`,
    `Confusing GDPR's data-minimization instinct with a universal rule — many records must be retained for a mandated minimum period (SOX, HIPAA, tax law) even under a privacy-forward program; minimization applies where no overriding retention mandate exists.`,
    `Assuming a legal hold only applies to records already identified in a lawsuit — it applies to all records reasonably anticipated to be relevant, which can precede the filing of a case entirely.`,
  ],
  resources: [
    { label: 'Destination Certification – Data Retention and Legal Hold', url: 'https://www.youtube.com/results?search_query=destination+certification+asset+retention+cissp' },
    { label: 'Kelly Handerhan – CISSP Data Retention', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+data+retention' },
  ],
};

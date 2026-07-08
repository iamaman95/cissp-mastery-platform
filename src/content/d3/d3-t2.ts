import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t2',
  overview: `Security models are formal, mathematical descriptions of how a system should enforce a security policy. Where a policy states an intent ("subjects may not read data above their clearance"), a model expresses that intent as precise rules about subjects, objects, and the allowed operations between them, so the enforcement can be reasoned about and, ideally, proven correct. CISSP Domain 3 focuses on a small set of classic models, and the exam repeatedly tests whether you can match a model to the property it protects — confidentiality, integrity, or conflict-of-interest — and recall the exact direction of its "no read"/"no write" rules.

Bell-LaPadula (BLP) is a confidentiality model built on multilevel security. Its two mandatory rules are the Simple Security Property — "no read up" (a subject cannot read an object at a higher classification) — and the Star (*) Property — "no write down" (a subject cannot write to an object at a lower classification, preventing leakage of high data into low containers). A third, the Discretionary Security Property, adds an access-control matrix on top. BLP protects secrecy and says nothing about integrity.

Biba is the integrity mirror of BLP. It protects data from improper modification using the Simple Integrity Property — "no read down" (a subject cannot read lower-integrity data that might corrupt it) — and the Star Integrity Property — "no write up" (a subject cannot write to higher-integrity objects). The single most common exam trap is swapping BLP and Biba: BLP is "no read up / no write down" (confidentiality), Biba is "no read down / no write up" (integrity). Clark-Wilson takes a different, more commercial approach to integrity: it enforces well-formed transactions (subjects act on data only through certified transformation procedures, TPs) and separation of duties, using the access triple of subject-program-object rather than letting subjects touch data directly. Brewer-Nash (the Chinese Wall model) is dynamic: a subject's past access history determines future access, to prevent conflicts of interest — once a consultant accesses one company's data in a conflict class, they are walled off from competitors in that same class.

Supporting concepts round out the topic: the Take-Grant model (rights propagation via take/grant/create/remove rules), the Graham-Denning and Harrison-Ruzzo-Ullman (HRU) models (formal rules for creating/deleting subjects, objects, and rights), the reference monitor concept and its implementation the security kernel (which must be tamperproof, always invoked, and small enough to be verifiable), and the Trusted Computing Base (TCB) — the totality of protection mechanisms the system's security depends on.`,
  examFraming: `(ISC)² tests security models with two reliable question shapes. First, direct property recall dressed as a scenario: "A subject cleared Secret attempts to read a Top Secret file — which property blocks this?" (answer: BLP Simple Security Property, no read up). You must know each rule's exact direction cold, because the wrong-direction distractor is always present. Second, model-selection questions: given a business goal (protect secrecy, prevent unauthorized modification, enforce separation of duties, or avoid conflicts of interest), pick the model whose purpose matches. Remember the one-line mapping: Bell-LaPadula = confidentiality, Biba = integrity, Clark-Wilson = integrity via well-formed transactions and separation of duties, Brewer-Nash = conflict of interest. Expect a trap where a confidentiality goal is paired with Biba (integrity) as a tempting distractor, or where "no write up" (Biba) is offered for a Bell-LaPadula question. Also be ready for reference monitor / security kernel questions: the reference monitor is the abstract concept (mediates all access), the security kernel implements it, and it must satisfy three requirements — completeness (always invoked), isolation (tamperproof), and verifiability (small enough to test/prove).`,
  keyTerms: [
    { term: 'Bell-LaPadula (BLP)', definition: 'A confidentiality-focused multilevel security model enforcing "no read up" (Simple Security Property) and "no write down" (Star Property) to prevent unauthorized disclosure.' },
    { term: 'Biba', definition: 'An integrity-focused model that mirrors BLP, enforcing "no read down" (Simple Integrity Property) and "no write up" (Star Integrity Property) to prevent improper data modification.' },
    { term: 'Clark-Wilson', definition: 'A commercial integrity model enforcing well-formed transactions through certified transformation procedures (TPs) and separation of duties, using the subject-program-object access triple rather than direct subject-to-object access.' },
    { term: 'Brewer-Nash (Chinese Wall)', definition: 'A dynamic model that prevents conflicts of interest by using a subject’s access history to restrict future access within the same conflict-of-interest class.' },
    { term: 'Star (*) Property', definition: 'In Bell-LaPadula, the rule prohibiting a subject from writing to an object at a lower classification ("no write down"), preventing high-classification data from leaking into a lower container.' },
    { term: 'Reference Monitor', definition: 'The abstract concept of an access-control mechanism that mediates all access by subjects to objects; it must be tamperproof, always invoked, and small enough to be fully verified.' },
    { term: 'Security Kernel', definition: 'The hardware, firmware, and software that implement the reference monitor concept; it enforces access control and forms the core of the Trusted Computing Base.' },
    { term: 'Trusted Computing Base (TCB)', definition: 'The totality of protection mechanisms within a computer system—hardware, firmware, and software—that are responsible for enforcing the security policy.' },
  ],
  scenario: `A defense contractor runs a multilevel system holding data classified Unclassified, Secret, and Top Secret. An analyst cleared to Secret is logged in at the Secret level. The system must satisfy several rules simultaneously. When the analyst tries to open a Top Secret intelligence report, Bell-LaPadula's Simple Security Property blocks the read ("no read up"), preserving confidentiality. When the analyst drafts a Secret summary, the Star Property forbids saving it to an Unclassified share ("no write down") so Secret content cannot leak downward. Separately, the contractor's financial records are governed by Clark-Wilson: clerks may only adjust ledger entries through a certified transformation procedure that logs the change and requires a second approver, enforcing well-formed transactions and separation of duties rather than letting a clerk edit the database directly. Finally, a consulting arm advising two rival banks applies Brewer-Nash: once a consultant opens Bank A's files, the Chinese Wall dynamically denies that consultant access to Bank B's files in the same conflict-of-interest class. A CISSP question would test whether you correctly attribute each denial to the right model and the right property direction.`,
  comparisonTables: [
    {
      caption: 'Bell-LaPadula vs. Biba vs. Clark-Wilson vs. Brewer-Nash',
      headers: ['Model', 'Protects', 'Simple (read) Rule', 'Star (write) Rule', 'Distinguishing Idea'],
      rows: [
        ['Bell-LaPadula', 'Confidentiality', 'No read up (Simple Security Property)', 'No write down (Star Property)', 'Multilevel secrecy; keeps high data from leaking to low'],
        ['Biba', 'Integrity', 'No read down (Simple Integrity Property)', 'No write up (Star Integrity Property)', 'Mirror of BLP; keeps low-integrity data from corrupting high'],
        ['Clark-Wilson', 'Integrity (commercial)', 'N/A — access only via certified transformation procedures', 'N/A — writes only through well-formed transactions', 'Subject-program-object access triple; separation of duties'],
        ['Brewer-Nash (Chinese Wall)', 'Conflict of interest', 'Access depends on prior access history', 'Write restricted to prevent cross-class leakage', 'Dynamic; past access changes future permissions'],
      ],
    },
    {
      caption: 'Confidentiality vs. Integrity model rule directions (the classic swap trap)',
      headers: ['Model', 'Goal', 'Read Rule', 'Write Rule'],
      rows: [
        ['Bell-LaPadula', 'Confidentiality', 'No read UP', 'No write DOWN'],
        ['Biba', 'Integrity', 'No read DOWN', 'No write UP'],
      ],
    },
  ],
  examTraps: [
    `Do not swap Bell-LaPadula and Biba: BLP is "no read up / no write down" (confidentiality); Biba is "no read down / no write up" (integrity). The wrong-direction option is always present.`,
    `Bell-LaPadula protects confidentiality only — it says nothing about integrity. If a question asks about preventing unauthorized modification, BLP is a distractor, not the answer.`,
    `Clark-Wilson and Biba are both integrity models, but Clark-Wilson is the "commercial" one built on well-formed transactions, the subject-program-object triple, and separation of duties — choose it when the scenario emphasizes controlled transactions and dual control, not simple read/write levels.`,
    `Brewer-Nash (Chinese Wall) is about conflict of interest, not classification levels; it is dynamic because prior access history changes what a subject may access next. Don't pick it for a pure secrecy or integrity question.`,
    `The reference monitor is a concept; the security kernel is its implementation. The three requirements are completeness (always invoked), isolation (tamperproof), and verifiability (small/testable) — don't confuse the reference monitor with the whole TCB.`,
  ],
  resources: [
    { label: 'Destination Certification – Security Models (Bell-LaPadula, Biba, Clark-Wilson)', url: 'https://www.youtube.com/results?search_query=destination+certification+security+models+bell+lapadula+biba+cissp' },
    { label: 'Kelly Handerhan – CISSP Security Models', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+security+models+bell+lapadula+biba' },
  ],
};

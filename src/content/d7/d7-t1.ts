import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t1',
  overview: `Investigations in security operations require the security professional to gather, preserve, and analyze evidence in a manner that keeps it admissible and credible. CISSP expects you to distinguish the major categories of investigation — administrative (internal HR/policy), criminal (violation of law, "beyond a reasonable doubt" standard), civil (disputes between parties, "preponderance of the evidence" standard), and regulatory (compliance with an industry regulator) — because the type of investigation dictates the standard of proof and the rules that govern evidence collection.

The core discipline of any investigation is evidence handling. Chain of custody is the documented, unbroken record of who collected, controlled, transferred, analyzed, and stored each piece of evidence, and when. A broken chain of custody can render otherwise valuable evidence inadmissible. Digital forensics follows an ordered process — identification, preservation, collection, examination, analysis, and presentation — and always prioritizes preserving the original evidence, working from forensically sound bit-for-bit images (verified with hashing) rather than the original media.

You must also know the categories of evidence and the rules for admissibility. Evidence must generally be relevant, reliable/authentic, and legally permissible (obtained lawfully). The best evidence rule favors original documents over copies; the hearsay rule generally excludes secondhand statements, though business records (including many logs) can qualify under an exception. Locard's exchange principle — every contact leaves a trace — underpins why forensic examiners expect to find (and can recover) artifacts of an intruder's activity.`,
  examFraming: `(ISC)² frames investigation questions around what you should do FIRST or what is BEST to preserve admissibility. The recurring theme: preserve evidence before you analyze it, and never work on the original. Expect scenarios where a well-meaning administrator "just wants to check" a compromised system and thereby destroys volatile evidence or breaks the chain of custody — the correct answer preserves and documents first. You should be able to map a described situation to the correct investigation type (and therefore the correct standard of proof), identify which evidence category applies (real, documentary, testimonial, demonstrative), and recognize admissibility problems such as unlawful collection, a broken chain of custody, or hearsay. Volatility matters: when collecting live evidence, follow the order of volatility (memory/cache before disk before archived logs).`,
  keyTerms: [
    { term: 'Chain of Custody', definition: 'The documented, unbroken chronological record of everyone who collected, handled, transferred, and stored a piece of evidence, used to prove the evidence was not tampered with or substituted.' },
    { term: "Locard's Exchange Principle", definition: 'The forensic principle that any contact between two entities leaves a trace — an intruder both brings something to and takes something from a compromised environment, so artifacts of the activity can be recovered.' },
    { term: 'Best Evidence Rule', definition: 'A legal rule preferring the original document or item of evidence over a copy or secondhand description when proving the contents of that evidence.' },
    { term: 'Hearsay Rule', definition: 'A rule generally excluding out-of-court, secondhand statements offered to prove the truth of the matter; computer-generated business records (e.g., logs) often qualify under the business-records exception.' },
    { term: 'Order of Volatility', definition: 'The sequence for collecting live evidence from most to least perishable (CPU registers/cache, RAM, running processes/network state, disk, then archived/backup data), so transient data is captured before it is lost.' },
    { term: 'Forensic Image', definition: 'A bit-for-bit copy of storage media, verified by a cryptographic hash, that examiners analyze so the original evidence remains untouched and admissible.' },
    { term: 'Admissibility', definition: 'The determination that evidence may be presented in a proceeding — it must be relevant, reliable/authentic, and lawfully obtained.' },
    { term: 'Standard of Proof', definition: 'The threshold a case must meet: "beyond a reasonable doubt" in criminal cases and "preponderance of the evidence" (more likely than not) in civil cases.' },
  ],
  scenario: `A systems administrator notices suspicious outbound connections from a production server and, wanting to help, logs into the server, opens several files, runs antivirus, and reboots it "to clear the malware." Only afterward does management decide to pursue the matter as a potential criminal case and calls in a forensic examiner.

By the time the examiner arrives, volatile memory (which may have held the malware's decrypted payload, injected code, and live network connections) is gone because of the reboot, file access timestamps have been altered, and there is no chain-of-custody documentation for anything the administrator touched. The correct first action would have been to preserve the scene — capture volatile data in order of volatility, take a forensic image of the disk, hash it, and document custody — before any analysis. A CISSP question here tests whether you recognize that preserving and documenting evidence comes FIRST, and that acting on the original system destroyed both volatile evidence and admissibility.`,
  comparisonTables: [
    {
      caption: 'Categories of Evidence',
      headers: ['Type', 'Definition', 'Example'],
      rows: [
        ['Real (physical)', 'Tangible objects brought before the court', 'A seized hard drive, a USB device, a physical server'],
        ['Documentary', 'Written or recorded information offered to prove a fact', 'Log files, emails, contracts, printed reports'],
        ['Testimonial', 'Verbal or written statements given by a witness under oath', 'Analyst testimony describing what a log showed'],
        ['Demonstrative', 'Illustrative aids that help explain other evidence', 'A diagram or timeline reconstructing the attack'],
      ],
    },
    {
      caption: 'Types of Investigation and Standard of Proof',
      headers: ['Investigation Type', 'Purpose', 'Standard of Proof'],
      rows: [
        ['Administrative', 'Internal policy / HR matters', 'Lowest — organizational discretion'],
        ['Civil', 'Disputes between parties (e.g., contract, damages)', 'Preponderance of the evidence'],
        ['Criminal', 'Violation of criminal law; can lead to incarceration', 'Beyond a reasonable doubt'],
        ['Regulatory', 'Compliance with an industry regulator/law', 'Varies; often preponderance-like'],
      ],
    },
  ],
  examTraps: [
    `Preserve before you analyze: rebooting, running AV, or opening files on the original system destroys volatile evidence and file timestamps — the FIRST step is to preserve and capture (order of volatility), not investigate.`,
    `Never analyze the original media — work from a hashed, bit-for-bit forensic image, or you risk altering and invalidating the evidence.`,
    `A broken or undocumented chain of custody can make otherwise strong evidence inadmissible, even if the evidence itself is genuine.`,
    `Match the investigation type to the standard of proof: criminal = "beyond a reasonable doubt," civil = "preponderance of the evidence" — don't apply the criminal standard to a civil scenario.`,
    `Logs are documentary evidence and can be admissible under the business-records exception to hearsay, but only if they are routinely generated and their integrity is demonstrable.`,
  ],
  resources: [
    { label: 'Digital forensics and chain of custody (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+chain+of+custody+digital+forensics' },
    { label: 'Types of evidence and admissibility (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+evidence+types+admissibility' },
  ],
};

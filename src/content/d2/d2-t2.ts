import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd2',
  topicId: 'd2-t2',
  overview: `Once an organization has classified its information (public, internal, confidential, secret, top secret, or a similar private-sector scheme), classification alone protects nothing — it only sets the stage for handling requirements. Handling requirements are the concrete, day-to-day rules that translate a classification label into action: how the asset must be marked, where and how it may be stored, what transmission channels are permitted, who may access it, and how it must ultimately be destroyed or sanitized. CISSP expects candidates to know that every classification level should map to a documented handling standard covering the full lifecycle — creation, use, storage, transmission, and destruction — and that higher classification levels require progressively stricter controls at each of those stages (e.g., encrypted storage and transmission, escorted physical handling, audited destruction).

Marking and labeling are the visible mechanism that makes classification actionable for humans and systems. Markings appear on the asset itself (a header/footer banner on a document, a label on removable media, a classification tag in metadata) so anyone handling it can immediately determine what protections apply, without needing to inspect the content. Labeling conventions must be consistent across the organization — the same term ("Confidential," "Restricted") must always imply the same handling obligations — and markings should appear on every page, every screen, and every physical container, not just a cover page, since pages can be separated from a stack of otherwise-marked documents.

Media handling extends these same rules to the physical and electronic containers information lives on: USB drives, backup tapes, laptops, printed reports, and cloud storage buckets. Because media can hold data of mixed classification or can outlive the sensitivity of its original content, organizations need explicit rules for reuse, transport (e.g., locked containers, trusted couriers, chain-of-custody logs for the highest classifications), and end-of-life sanitization (clearing, purging, or physical destruction, chosen based on the classification of the most sensitive data the media ever held).

Underpinning all of this is need-to-know: even a person with the correct clearance or role should only access information relevant to their current task. Handling procedures enforce need-to-know operationally — through access control lists, segmented storage, "eyes only" or cover-sheet conventions, clean desk policies that prevent classified material from being visible to unauthorized passersby, and controlled distribution lists. A correctly classified asset that is stored, transmitted, or discarded without matching its label's required handling controls represents a handling failure, which CISSP treats as distinct from (but just as serious as) a classification failure.`,
  examFraming: `(ISC)² frames handling questions as "given this classification level and this described action, is the handling control sufficient, excessive, or missing?" Expect scenarios where a document is correctly classified but then mishandled — e.g., a "Confidential" file emailed unencrypted, or "Secret" media discarded in a regular trash bin — and you must identify which required control was skipped. You should also expect mismatch scenarios: content that is clearly more sensitive than its label suggests (mislabeling), or a person with adequate clearance but no need-to-know accessing data they technically "could" access. When a question asks what to do FIRST or what BEST addresses a described gap, favor the specific, classification-mapped handling control (e.g., cryptographic erasure for the classification level involved) over a generic-sounding but weaker option (e.g., "delete the file"). CISSP also wants you to recognize that handling standards must scale with classification — treating all data with maximum-security handling wastes resources, while treating sensitive data with minimum handling creates real risk; the correct answer matches control rigor to the asset's actual classification.`,
  keyTerms: [
    { term: 'Marking/Labeling', definition: 'The visible or embedded indication of an asset\'s classification level (e.g., a banner, header/footer, sticker, or metadata tag) that tells anyone handling it what protections apply.' },
    { term: 'Handling Standard', definition: 'A documented set of classification-specific rules covering storage, transmission, access, and destruction requirements across an asset\'s lifecycle.' },
    { term: 'Need-to-Know', definition: 'The principle that access to specific information should be granted only when required for an individual\'s current task or role, even if that individual holds a sufficient clearance level.' },
    { term: 'Clean Desk Policy', definition: 'An administrative control requiring that sensitive documents and media not be left unattended or visible in a workspace, reducing the risk of unauthorized viewing or theft.' },
    { term: 'Media Handling', definition: 'The set of procedures governing the transport, storage, reuse, and disposal of physical and electronic media (USB drives, tapes, laptops, printed material) based on the classification of the data they hold.' },
    { term: 'Cover Sheet/Banner', definition: 'A physical or digital marking placed on top of or embedded in classified material to obscure/announce its classification level to anyone glancing at it, without requiring them to read the content.' },
    { term: 'Sanitization', definition: 'The process (clearing, purging, or destroying) of removing data from media to a level that matches its classification, ensuring the data cannot be recovered when the media is reused, repurposed, or disposed of.' },
    { term: 'Chain of Custody', definition: 'A documented, unbroken record of who has possessed, transported, or accessed an asset, used to demonstrate that handling requirements were continuously satisfied.' },
  ],
  scenario: `A defense contractor's engineering team stores "Secret"-classified schematics on a shared drive. A project manager, who holds an active Secret clearance for unrelated reasons but has no assigned role on this particular program, requests read access "just to stay in the loop." The IT administrator grants it because the clearance level matches.

This is a need-to-know failure, not a classification or clearance failure: the project manager's clearance is sufficient in principle, but clearance alone does not establish authorization to access this specific asset. CISSP-style questions test whether candidates recognize that handling requirements enforce need-to-know as a separate gate layered on top of classification and clearance — granting access solely because clearance "matches" the label, without validating a legitimate business need for that specific information, is the exact mismatch the exam wants you to catch.`,
  comparisonTables: [
    {
      caption: 'Representative Handling Requirements by Classification Level (private-sector scheme)',
      headers: ['Classification', 'Storage Requirement', 'Transmission Requirement', 'Destruction Requirement'],
      rows: [
        ['Public', 'No special storage controls required', 'May be sent unencrypted over any channel', 'Standard disposal (recycling/regular deletion)'],
        ['Internal Use', 'Access-controlled network share or locked cabinet', 'Internal channels; encryption recommended over public networks', 'Delete/clear; shredding recommended for print copies'],
        ['Confidential', 'Encrypted storage; access-controlled with logging', 'Must be encrypted in transit (e.g., TLS, encrypted email)', 'Purge/cryptographic erasure; cross-cut shredding for paper'],
        ['Secret/Restricted', 'Encrypted storage with strict ACLs; physical media in locked/secured containers', 'Encrypted transmission only, approved channels, chain-of-custody for physical transport', 'Purge or physical destruction with witnessed/logged disposal'],
        ['Top Secret', 'Encrypted, segmented storage; need-to-know enforced per-file; SCIF or equivalent for physical copies', 'Approved cryptographic channels only; couriers with clearance for physical media', 'Physical destruction (incineration/pulverization) with certified, witnessed destruction record'],
      ],
    },
  ],
  examTraps: [
    `A correctly assigned classification label does not guarantee correct handling — questions often describe properly classified data that is then stored, transmitted, or discarded in a way that violates the required handling standard for that level.`,
    `Sufficient clearance is not the same as need-to-know; do not select an answer just because the person "has clearance" if the scenario doesn't establish a legitimate task-based reason for access.`,
    `"Delete the file" or "empty the recycle bin" is rarely the BEST destruction answer for classified/sensitive data — look for classification-appropriate sanitization (purging, cryptographic erasure, or physical destruction) rather than a simple, generic-sounding deletion.`,
    `Applying maximum-security handling (e.g., physical destruction, SCIF storage) to low-classification/public data is a distractor answer that sounds "safe" but is actually wasteful and not the BEST match to the described classification.`,
    `Missing or faded markings on individual pages/media (not just the cover page) is itself a handling violation — don't assume a single cover-page marking satisfies labeling requirements for the whole document or media set.`,
  ],
  resources: [
    { label: 'Destination Certification – Information and Asset Handling', url: 'https://www.youtube.com/results?search_query=destination+certification+information+and+asset+handling+requirements' },
    { label: 'Kelly Handerhan – CISSP Asset Security Handling', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+asset+handling+requirements' },
  ],
};

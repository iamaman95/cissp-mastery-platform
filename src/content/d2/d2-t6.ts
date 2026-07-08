import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd2',
  topicId: 'd2-t6',
  overview: `Classification and handling requirements tell you how sensitive data must be treated; data security controls and compliance are the concrete technologies and processes that actually enforce those requirements and prove to regulators that you did so. Two technology families dominate this topic on the CISSP exam: Data Loss Prevention (DLP) and Digital Rights Management (DRM). They are often confused because both aim to keep sensitive information from going where it shouldn't, but they solve different problems, at different points, using different mechanisms — and the exam repeatedly tests whether you can tell them apart.

Data Loss Prevention (DLP) is a set of controls that discovers, monitors, and blocks sensitive data from leaving the organization's control through unauthorized channels. DLP works by inspecting content (using pattern matching, regular expressions, exact/partial document matching, and data fingerprinting) and enforcing policy at three points: data in motion (network DLP inspecting email, web uploads, and other egress traffic), data at rest (storage/discovery DLP scanning file shares, databases, and endpoints to find where sensitive data lives), and data in use (endpoint DLP that blocks copying to USB, printing, or clipboard operations on a workstation). The defining characteristic of DLP is that it is content-aware and boundary-focused: its job is to catch sensitive data attempting to cross a boundary and to stop or log that egress. DLP protects the organization from leakage but generally stops protecting a file the moment it legitimately leaves — once the data is outside the DLP-controlled perimeter, DLP no longer sees it.

Digital Rights Management (DRM) — also called Information Rights Management (IRM) when applied to enterprise documents — takes a fundamentally different approach: it binds persistent, cryptographically enforced usage restrictions to the data object itself, so the protection travels with the file wherever it goes. A DRM-protected document can be configured so that only authorized identities can open it, and even authorized users may be forbidden from printing, copying, forwarding, editing, or taking screenshots; permissions can expire on a set date or be revoked remotely after distribution. Because the controls are embedded in (or cryptographically tied to) the object and checked against a policy/license server, DRM keeps enforcing rules after the file has left the organization — which is precisely the gap DLP leaves open. The trade-off is that DRM requires the content to be wrapped/encrypted and typically requires compatible client software or a rights-management infrastructure, whereas DLP can be deployed as a monitoring layer without altering the files themselves.

Beyond DLP and DRM, this topic covers the broader control landscape that maps to the three data states: encryption (at rest via full-disk/file/column encryption; in transit via TLS/IPsec; in use via secure enclaves), access controls, and — critically for exam scenarios — the distinction between protecting the data itself and merely reducing its identifiability. Tokenization replaces a sensitive value (e.g., a primary account number) with a non-sensitive surrogate token, storing the real value in a separately secured token vault; it is heavily used to reduce PCI DSS scope because systems that only handle tokens fall largely outside the cardholder-data environment. Data masking (or obfuscation) replaces sensitive values with realistic but fictitious ones, commonly to protect production data used in test/development or on screens. Anonymization irreversibly removes the ability to link data to an individual (moving it outside the scope of privacy laws like GDPR), while pseudonymization replaces identifiers with a reversible token/key — meaning pseudonymized data is still personal data under GDPR because re-identification is possible with the additional key. Finally, compliance frameworks — PCI DSS for cardholder data, HIPAA for protected health information, GDPR for EU personal data, SOX for financial reporting — define which controls are required, and the exam expects you to connect a described data type to the framework that governs it and the control that satisfies it.`,
  examFraming: `(ISC)² frames this topic around two recurring decisions: "which control technology fits the described requirement?" and "does this control actually protect the data, or just monitor/reduce it?" The single most tested distinction is DLP vs. DRM. When a scenario asks how to stop sensitive data from being emailed or copied out of the organization, or how to discover where regulated data is stored, the answer is DLP. When a scenario asks how to keep enforcing "no printing / no forwarding / read-only / access expires" after a document has already been shared with an external partner, the answer is DRM/IRM — because persistent, travels-with-the-file enforcement is DRM's defining capability and DLP's blind spot. Expect the exam to bait you into choosing DLP for a post-distribution control problem, or DRM for a discovery/egress-monitoring problem; matching the mechanism to the point of enforcement is the skill being tested.

A second framing pattern tests the difference between reversible and irreversible de-identification and its regulatory consequence: tokenization and pseudonymization are reversible (a vault/key can recover the original), so the data still requires protection and, in GDPR terms, pseudonymized data is still personal data; anonymization is irreversible and, done properly, removes the data from privacy-law scope entirely. A third pattern connects a regulated data type to the correct framework and control — cardholder data to PCI DSS (favoring tokenization to reduce scope), PHI to HIPAA, EU personal data to GDPR — and asks for the BEST control given the compliance driver. Throughout, watch for the trap of treating encryption as a universal answer: encryption protects data at rest and in transit but does not, by itself, control what an authorized recipient does with a decrypted file (that's DRM) or prevent an insider from emailing it out (that's DLP).`,
  keyTerms: [
    { term: 'Data Loss Prevention (DLP)', definition: 'A content-aware control set that discovers, monitors, and blocks sensitive data from leaving the organization through unauthorized channels, enforced at network (in motion), storage (at rest), and endpoint (in use) points.' },
    { term: 'Digital Rights Management (DRM) / IRM', definition: 'Technology that binds persistent, cryptographically enforced usage restrictions (open, print, copy, forward, edit, expiry, revocation) to a data object itself, so protection travels with the file after it leaves the organization.' },
    { term: 'Tokenization', definition: 'Replacing a sensitive value with a non-sensitive surrogate token while the real value is held in a separate secured vault; reversible via the vault, and widely used to reduce PCI DSS scope.' },
    { term: 'Data Masking (Obfuscation)', definition: 'Replacing sensitive values with realistic but fictitious substitutes, typically to protect production data used in test/development environments or displayed on screens.' },
    { term: 'Anonymization', definition: 'Irreversibly removing the ability to associate data with an individual, which (done properly) takes the data outside the scope of privacy regulations such as GDPR.' },
    { term: 'Pseudonymization', definition: 'Replacing identifying fields with a reversible token or key so that data can be re-identified with the additional key; still treated as personal data under GDPR because re-identification remains possible.' },
    { term: 'PCI DSS', definition: 'The Payment Card Industry Data Security Standard governing the protection of cardholder data; drives controls such as encryption, tokenization, and network segmentation to reduce the cardholder-data environment.' },
    { term: 'Fingerprinting / Exact Data Matching', definition: 'A DLP detection technique that generates hashes/signatures of known sensitive documents or database records so the DLP engine can recognize even partial copies leaving the organization.' },
  ],
  scenario: `A financial services firm must share quarterly deal models (spreadsheets containing material non-public information) with an external law firm and an outside auditor. Two failures have already occurred: an analyst emailed a model to a personal Gmail account, and a partner at the law firm forwarded a model to an unauthorized colleague and printed a copy left in a shared printer tray.

The security team proposes two complementary controls. For the first failure — sensitive data leaving the firm through an unauthorized egress channel — network and endpoint DLP is the right fit: content inspection recognizes the deal-model fingerprint and the regulated data patterns, blocks the send to the personal account, and logs the attempt. But DLP cannot solve the second failure, because once the model legitimately reaches the external law firm it is outside the firm's DLP boundary. For that, the model must be wrapped in DRM/IRM: permissions are bound to the file so only named recipients at the law firm and audit firm can open it, forwarding and printing are disabled, and access automatically expires after the deal closes — enforced no matter where the file travels.

A CISSP-style question would present this situation and ask which control addresses the post-distribution "no forwarding, no printing, expires after the deal" requirement. The trap answer is "stronger DLP" or "encrypt the email," neither of which persists control after the file is legitimately delivered and decrypted by the recipient. The correct answer is DRM/IRM, precisely because it enforces usage rights that travel with the object — the capability DLP structurally lacks.`,
  comparisonTables: [
    {
      caption: 'DLP vs. DRM/IRM: Different Problems, Different Mechanisms',
      headers: ['Dimension', 'Data Loss Prevention (DLP)', 'Digital Rights Management (DRM/IRM)'],
      rows: [
        ['Primary goal', 'Stop sensitive data from leaving the organization; discover where it resides', 'Control what authorized recipients can do with a file, persistently'],
        ['Point of enforcement', 'At the boundary/egress (network, storage, endpoint) before data leaves', 'On the data object itself, wherever it travels'],
        ['Protection after data leaves the org', 'Generally none — DLP loses visibility once data legitimately exits', 'Continues — permissions and expiry/revocation enforce after distribution'],
        ['Core mechanism', 'Content inspection, pattern/regex matching, fingerprinting, policy blocking', 'Encryption + embedded usage policy checked against a rights/license server'],
        ['Typical control', 'Block an email containing SSNs; block copy to USB; scan shares for PII', 'Disable printing/forwarding; read-only; access expires or is revoked remotely'],
      ],
    },
    {
      caption: 'Data States and the Controls That Protect Them',
      headers: ['Data State', 'Primary Threat', 'Representative Controls'],
      rows: [
        ['At Rest', 'Theft/loss of media; unauthorized access to stored data', 'Full-disk/file/column encryption, tokenization, access controls, storage DLP discovery'],
        ['In Transit', 'Interception/eavesdropping on the network', 'TLS/SSL, IPsec VPN, SFTP; network DLP inspecting egress'],
        ['In Use', 'Exposure while decrypted in memory; misuse by authorized users', 'Secure enclaves/TEEs, memory encryption; endpoint DLP; DRM restricting print/copy'],
      ],
    },
    {
      caption: 'De-Identification Techniques: Reversibility and Regulatory Effect',
      headers: ['Technique', 'Reversible?', 'Regulatory / Practical Effect'],
      rows: [
        ['Tokenization', 'Yes (via secured token vault)', 'Reduces PCI DSS scope; token systems fall largely outside the cardholder-data environment'],
        ['Pseudonymization', 'Yes (with the additional key)', 'Still personal data under GDPR because re-identification is possible'],
        ['Data Masking', 'Depends (static often irreversible; dynamic reversible)', 'Protects production data in test/dev and on-screen display'],
        ['Anonymization', 'No (irreversible)', 'Removes data from GDPR scope if truly non-re-identifiable'],
      ],
    },
  ],
  examTraps: [
    `Confusing DLP with DRM — DLP stops data from leaving and discovers where it resides at the boundary; DRM enforces persistent usage rights (no print/forward, expiry) that travel with the file after it leaves. Post-distribution control is DRM, not DLP.`,
    `Treating encryption as a universal answer — encryption protects data at rest and in transit, but does not control what an authorized recipient does with the decrypted file (that is DRM) and does not stop an insider from emailing it out (that is DLP).`,
    `Assuming pseudonymization or tokenization removes data from privacy-law scope — both are reversible, so pseudonymized data is still personal data under GDPR; only true anonymization (irreversible) takes data out of scope.`,
    `Selecting tokenization when the requirement is realistic-but-fake data for a test environment — that is data masking; tokenization is about substituting a vault-backed surrogate (classically for PCI scope reduction), not generating test data.`,
    `Forgetting that DLP has three deployment modes — data in motion (network), at rest (discovery), and in use (endpoint); a question describing "block copying to USB on a laptop" points to endpoint DLP, not network DLP.`,
  ],
  resources: [
    { label: 'Destination Certification – DLP and DRM in Asset Security', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+dlp+drm' },
    { label: 'Kelly Handerhan – CISSP Data Security Controls', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+dlp+data+security+controls' },
  ],
};

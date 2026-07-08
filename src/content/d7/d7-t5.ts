import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t5',
  overview: `Resource protection is the operational practice of safeguarding the assets — media, hardware, software, and data — that the organization depends on throughout their lifecycle. It ties together asset management (knowing what you have), media management (controlling storage media from acquisition to destruction), and the protection of the platforms (physical, virtual, and cloud) where data lives. The unifying idea is that you cannot protect what you have not identified, classified, and tracked, and that protection must follow the asset from provisioning through secure disposal.

Media management addresses how removable and fixed media are labeled, handled, stored, transported, and ultimately sanitized. A central CISSP concept is data remanence — the residual data that survives ordinary deletion or formatting — and the sanitization methods that address it: clearing (overwriting so data cannot be recovered by standard means), purging (stronger removal such as degaussing magnetic media or cryptographic erase, resistant to laboratory recovery), and destruction (physical shredding, incineration, pulverizing) for the highest assurance. The correct method depends on data sensitivity and whether the media will be reused, released, or destroyed; degaussing works on magnetic media but not solid-state drives, which typically require cryptographic erase or destruction.

Asset management maintains an inventory of hardware and software assets, ownership, classification, and lifecycle state, feeding patching, licensing, and end-of-life decisions. Protecting hardware includes physical controls, secure configuration, and tamper resistance; protecting software includes licensing compliance, integrity verification, and controlling unauthorized (shadow) software. In cloud and virtualized environments, resource protection follows the shared responsibility model — the provider secures the underlying infrastructure while the customer remains responsible for their data, access, and configuration — and adds concerns such as tenant isolation and secure decommissioning of virtual resources. Data-centric protections (classification-driven handling, encryption, and marking) ensure that even as media and platforms change, the data itself remains appropriately safeguarded.`,
  examFraming: `(ISC)² frames resource protection around the asset lifecycle and, most heavily, around media sanitization and data remanence. Expect questions asking which sanitization method (clear, purge, destroy) is appropriate for a given sensitivity and reuse scenario — and traps that offer a weaker method (simple delete/format) that leaves data recoverable. Know that degaussing addresses magnetic media but is ineffective on SSDs, which need cryptographic erase or physical destruction, and that for the most sensitive data, destruction provides the highest assurance. Recognize that an accurate asset inventory and classification are prerequisites for protecting anything. For cloud/virtual resources, apply the shared responsibility model: the customer still owns data protection, access control, and configuration even when the provider secures the infrastructure. When a scenario involves disposing of or repurposing media, the correct answer aligns the sanitization method to the data's classification and the media type.`,
  keyTerms: [
    { term: 'Data Remanence', definition: 'Residual data that remains on storage media after ordinary deletion or formatting and can be recovered unless proper sanitization is applied.' },
    { term: 'Clearing', definition: 'Overwriting media so data cannot be recovered by standard, non-laboratory means; suitable when media stays within the organization.' },
    { term: 'Purging', definition: 'Stronger sanitization (e.g., degaussing magnetic media or cryptographic erase) resistant to laboratory recovery, used before releasing media outside the organization.' },
    { term: 'Destruction', definition: 'Physically destroying media (shredding, incineration, pulverizing) for the highest assurance that data cannot be recovered.' },
    { term: 'Degaussing', definition: 'Using a strong magnetic field to erase magnetic media; effective on magnetic disks/tapes but not on solid-state drives.' },
    { term: 'Cryptographic Erase', definition: 'Rendering data unrecoverable by destroying the encryption keys used to protect it, commonly used to sanitize self-encrypting and solid-state drives.' },
    { term: 'Asset Management', definition: 'Maintaining an authoritative inventory of hardware and software assets with ownership, classification, and lifecycle state to drive protection decisions.' },
    { term: 'Shared Responsibility Model', definition: 'The cloud principle that the provider secures the underlying infrastructure while the customer remains responsible for data, access, and configuration.' },
  ],
  scenario: `A company is decommissioning a batch of storage devices before returning leased hardware to a vendor. The batch includes magnetic hard drives that held confidential customer data and several solid-state drives (SSDs) from finance workstations. A technician plans to 'just delete the files and quick-format the drives' before shipping them back.

The resource-protection concern is data remanence: deletion and quick-format leave the underlying data recoverable, so shipping the drives externally would risk a confidential-data exposure. Because the media is leaving the organization, purging (not mere clearing) is the minimum — degaussing is appropriate for the magnetic drives but will not work on the SSDs, which require cryptographic erase or physical destruction. For the most sensitive finance data, destruction provides the highest assurance and may be the safest choice, especially since the SSDs cannot be degaussed. An accurate asset inventory ensures every device in the batch is accounted for and none is shipped un-sanitized. A CISSP question here tests whether you match the sanitization method to both the data sensitivity and the media type, and recognize that 'delete and format' does not defeat data remanence.`,
  comparisonTables: [
    {
      caption: 'Media Sanitization Methods',
      headers: ['Method', 'What It Does', 'Use When', 'Limitation'],
      rows: [
        ['Clearing', 'Overwrites data to block standard recovery', 'Media stays inside the organization', 'May not resist laboratory recovery'],
        ['Purging', 'Degauss / crypto-erase; resists lab recovery', 'Media released outside the organization', 'Degaussing does not work on SSDs'],
        ['Destruction', 'Physically destroys the media', 'Highest sensitivity / end-of-life', 'Media cannot be reused'],
      ],
    },
  ],
  examTraps: [
    `'Delete' and 'quick format' do not remove data — data remanence leaves it recoverable; choose clear, purge, or destroy based on sensitivity and whether the media leaves the organization.`,
    `Degaussing works on magnetic media but is ineffective on solid-state drives (SSDs), which require cryptographic erase or physical destruction.`,
    `Match sanitization to context: clearing is acceptable when media stays internal; purging is the minimum when releasing media externally; destruction gives the highest assurance for the most sensitive data.`,
    `You cannot protect what you have not inventoried and classified — accurate asset management is a prerequisite, and un-inventoried media is a common source of leaks.`,
    `In cloud/virtual environments, the shared responsibility model still leaves the customer responsible for data, access, and configuration — 'the provider handles security' is a trap.`,
  ],
  resources: [
    { label: 'Data remanence and media sanitization (CISSP)', url: 'https://www.youtube.com/results?search_query=cissp+data+remanence+media+sanitization+clearing+purging' },
    { label: 'Asset management and cloud shared responsibility', url: 'https://www.youtube.com/results?search_query=cissp+asset+management+cloud+shared+responsibility+model' },
  ],
};

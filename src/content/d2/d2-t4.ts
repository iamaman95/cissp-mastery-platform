import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd2',
  topicId: 'd2-t4',
  overview: `Every piece of data an organization holds moves through a predictable lifecycle, and CISSP expects you to know both the phases and the controls appropriate to each. The commonly tested phases are: Create/Collect (data comes into existence — via user input, sensor capture, purchase, or generation from another process), Classify (the data is labeled according to sensitivity — often taught as happening at or immediately after creation, not as an afterthought), Store (the data is committed to a repository — a database, file share, backup medium, or cloud bucket), Use (the data is processed, viewed, or acted upon by people or applications), Share (the data is transmitted or disclosed to another party, internal or external), Archive (the data is moved to long-term, lower-cost, less-accessible storage because it is no longer in active use but must be retained), and Destroy (the data is permanently and irreversibly removed once it has no further business, legal, or regulatory purpose). Some frameworks compress this into fewer named stages, but the underlying idea — data has a beginning, a working life, and an end — is constant, and exam questions will describe a situation and expect you to identify which phase it represents.

Layered on top of the lifecycle is the concept of data states: at rest (data sitting in storage — a disk, database, or backup tape), in transit (data moving across a network — between a client and server, or between sites), and in use (data actively loaded into memory and being processed by a CPU, such as during a computation). Each state has different threat exposure and therefore different appropriate controls. Data at rest is typically protected by full-disk or file/column-level encryption and strict access controls. Data in transit is protected by transport encryption such as TLS, IPsec, or VPN tunnels. Data in use is the hardest state to protect because the data must be in a readable, decrypted form for the processor to operate on it; controls here include memory encryption, secure enclaves/trusted execution environments (e.g., Intel SGX, AMD SEV), and homomorphic encryption in specialized cases. A frequent exam trap is assuming at-rest encryption also protects data in use — it does not, because the data is decrypted before it reaches the CPU.

Data roles carry lifecycle responsibilities that shift depending on the phase. The data owner (typically a senior business leader) is accountable for classification decisions made at creation and for approving retention and destruction schedules. The data custodian (typically IT/security operations) implements the technical controls — encryption, backup, access provisioning — during the store, use, and share phases, acting on the owner's classification and policy decisions. The data controller and data processor (privacy-law terms, notably under GDPR) matter heavily during the share phase, when data crosses organizational boundaries: the controller decides why and how data is processed, while the processor acts on the controller's instructions. Data users/subjects interact with data primarily during the use phase, constrained by access controls the custodian enforces.

Lifecycle-driven policy means rules are tied to phase rather than applied uniformly. For example, classification must occur at or near creation — not after the data has already been copied, shared, or stored insecurely — because every downstream control (encryption strength, access list, retention period) depends on knowing the classification first. Retention policy governs how long data sits in the store/archive phases before it must be destroyed, driven by legal, regulatory, or contractual requirements (not indefinite retention "just in case"). And destruction must be verifiable and appropriate to the media and sensitivity level (e.g., cryptographic erasure, degaussing, physical destruction) — simply deleting a file pointer is not destruction, because the underlying data (remanence) may still be recoverable.`,
  examFraming: `(ISC)² wants you to take a described data-handling scenario and map it onto two axes simultaneously: which lifecycle phase is occurring (create, classify, store, use, share, archive, destroy), and which data state applies at that moment (at rest, in transit, or in use). A question might describe a database backup tape being shipped to an off-site vault — that is simultaneously the "archive" phase of the lifecycle and "data in transit" as a state (until it arrives and is stored). Expect the exam to test whether you select the control appropriate to the state actually described, rather than defaulting to the most commonly cited control (encryption at rest) when the scenario actually describes data in transit or in use. Also expect questions that test the ordering and dependency of lifecycle events — classification must happen before appropriate storage and sharing controls can be selected, and destruction should only occur after retention obligations are satisfied, not simply when storage space is needed.`,
  keyTerms: [
    { term: 'Data at Rest', definition: 'Data stored on persistent media (disk, database, backup tape, cloud object storage) and not actively being transmitted or processed; typically protected by encryption and access controls.' },
    { term: 'Data in Transit', definition: 'Data actively moving across a network or between systems; typically protected by transport-layer encryption such as TLS, IPsec, or VPNs.' },
    { term: 'Data in Use', definition: 'Data loaded into memory and actively being processed by a CPU or application; the hardest state to protect since it usually must exist in decrypted form, addressed by controls like secure enclaves or memory encryption.' },
    { term: 'Data Lifecycle', definition: 'The full sequence of phases data passes through: create/collect, classify, store, use, share, archive, and destroy.' },
    { term: 'Archival', definition: 'Moving data that is no longer in active use to long-term, lower-cost storage while it is retained to satisfy legal, regulatory, or business requirements.' },
    { term: 'Sunsetting/Destruction', definition: 'The final lifecycle phase in which data is permanently and verifiably removed once it no longer serves any retention purpose, using a method appropriate to media and sensitivity.' },
    { term: 'Data Remanence', definition: 'Residual data that remains recoverable on storage media after a standard deletion operation, posing a confidentiality risk if the media is reused or disposed of without proper sanitization.' },
    { term: 'Data Owner', definition: 'The accountable business role responsible for classifying data, and approving access, retention, and destruction decisions across the lifecycle.' },
  ],
  scenario: `A healthcare analytics firm collects patient encounter data from partner hospitals. At intake, the data is automatically tagged "Restricted" per policy (classification at creation). While stored in the production database, it is protected with column-level encryption (at rest). Analysts querying the data for research models pull it into an in-memory processing cluster, where it briefly exists in decrypted form (in use) before results are aggregated and re-encrypted. Aggregated, de-identified results are then transmitted nightly over a TLS-secured link to a partner hospital's reporting portal (in transit). After the seven-year contractual retention period defined by the data owner expires, the original patient-level records are moved to encrypted archival storage for one additional year per regulatory requirement, and then cryptographically erased — with the encryption keys destroyed — rendering the data permanently unrecoverable (destruction). A CISSP-style question would ask you to identify which control corresponds to which moment in this chain, and to recognize that the in-memory processing step is the one point where data exists outside of at-rest or in-transit protections and requires a distinct control category.`,
  comparisonTables: [
    {
      caption: 'Data States and Typical Controls',
      headers: ['Data State', 'Description', 'Typical Controls', 'Example'],
      rows: [
        ['At Rest', 'Data stored on persistent media, not currently moving or being processed', 'Full-disk/file/column-level encryption, access control lists, physical security', 'Encrypted database on a production server'],
        ['In Transit', 'Data actively moving across a network between systems', 'TLS/SSL, IPsec VPN tunnels, SFTP, message-layer encryption', 'A backup file uploaded nightly to a cloud storage bucket'],
        ['In Use', 'Data loaded into memory and actively being processed by a CPU', 'Secure enclaves/TEEs (e.g., Intel SGX), memory encryption, homomorphic encryption, access session controls', 'A payroll application computing tax withholding on decrypted salary data in RAM'],
      ],
    },
    {
      caption: 'Data Lifecycle Phases and Primary Responsibility',
      headers: ['Phase', 'What Happens', 'Primary Responsible Role'],
      rows: [
        ['Create/Collect', 'Data comes into existence via input, capture, or generation', 'Data creator/user; data owner sets classification requirement'],
        ['Classify', 'Sensitivity label is applied based on policy criteria', 'Data owner'],
        ['Store', 'Data is committed to a repository with controls matching classification', 'Data custodian'],
        ['Use', 'Data is processed, viewed, or acted on', 'Data user, under custodian-enforced access controls'],
        ['Share', 'Data is transmitted or disclosed to another party', 'Data controller/processor (cross-boundary); custodian (internal)'],
        ['Archive', 'Data no longer in active use is moved to long-term retention storage', 'Data custodian, per owner-approved retention schedule'],
        ['Destroy', 'Data is permanently and verifiably removed', 'Data custodian, per owner-approved destruction policy'],
      ],
    },
  ],
  examTraps: [
    `Assuming at-rest encryption also protects "data in use" — data must typically be decrypted to be processed, so a separate control category (secure enclaves, memory encryption) is needed for the in-use state.`,
    `Treating "archive" and "destroy" as interchangeable — archived data is still retained and must remain protected/accessible for legal or business purposes, while destroyed data is irreversibly gone; picking destruction when the scenario describes long-term retention is a common trap.`,
    `Assuming deleting a file (removing the pointer/directory entry) is equivalent to secure destruction — data remanence means the underlying bits may still be recoverable until properly sanitized (e.g., cryptographic erasure, degaussing, physical destruction).`,
    `Selecting a lifecycle phase based on where data "currently sits" without noticing it is simultaneously in a particular state — e.g., a backup tape being couriered off-site is in the archive phase of the lifecycle AND in the "in transit" state until it arrives, and the correct control depends on which the question is actually asking about.`,
    `Assuming classification happens whenever convenient — CISSP materials teach that classification must occur at or near creation, since every downstream control (storage encryption level, sharing restrictions, retention duration) depends on knowing the classification first.`,
  ],
  resources: [
    { label: 'Destination Certification – Data Lifecycle Explained', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+data+lifecycle' },
    { label: 'Kelly Handerhan – Data States and Lifecycle', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+data+lifecycle+data+states' },
  ],
};

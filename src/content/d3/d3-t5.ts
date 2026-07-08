import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t5',
  overview: `Every architecture style brings its own characteristic vulnerabilities, and CISSP expects you to recognize the weakness that goes with a given technology and choose an appropriate mitigation. This topic surveys vulnerabilities across the major system types.

Client-based systems can suffer from local caching of sensitive data, malicious code in the browser, and applets/active content. Server-based systems face issues like data-flow and concurrency problems and exposure of services. Database systems have distinctive risks: aggregation (combining lower-sensitivity records to derive sensitive information), inference (deducing sensitive facts from available data), and the mitigations of polyinstantiation (allowing multiple versions of a record at different classifications) and database views/access controls. Distributed and cloud systems introduce multi-tenancy, shared-responsibility gaps, and data-location concerns.

Specialized environments carry heightened risk: industrial control systems / SCADA and cyber-physical systems often run legacy, unpatched software controlling physical processes; the Internet of Things (IoT) frequently ships with weak defaults, poor update mechanisms, and large attack surface; embedded systems may be hard to patch. High-Performance Computing, edge/fog computing, containerization, serverless, and microservices each shift the trust and isolation boundaries. The unifying skill is: identify the architecture, name its inherent weakness, and apply a fitting control (segmentation, patching, least privilege, encryption, monitoring).`,
  examFraming: `(ISC)² tests pattern-matching: given a described system, identify its characteristic vulnerability and the best mitigation. The database trio is a favorite — know aggregation (assembling pieces to reveal sensitive info), inference (deducing it), and polyinstantiation (a mitigation that stores multiple record versions to prevent inference across levels). For ICS/SCADA, expect the theme of legacy, unpatched systems controlling physical processes, mitigated by network segmentation/isolation rather than "just patch it." For IoT, expect weak defaults and update problems. Cloud questions hinge on the shared responsibility model. The best answer is usually the control matched to that architecture's specific weakness.`,
  keyTerms: [
    { term: 'Aggregation', definition: 'Combining multiple lower-sensitivity data items to derive higher-sensitivity information.' },
    { term: 'Inference', definition: 'Deducing sensitive information from data one is authorized to see.' },
    { term: 'Polyinstantiation', definition: 'Storing multiple versions of a record at different classification levels to prevent inference across levels.' },
    { term: 'SCADA / ICS', definition: 'Industrial control systems managing physical processes; often legacy and hard to patch.' },
    { term: 'Cyber-Physical System', definition: 'A system linking computation with physical processes (e.g., ICS, medical devices, vehicles).' },
    { term: 'IoT (Internet of Things)', definition: 'Networked devices often shipping with weak defaults, poor patching, and a large attack surface.' },
    { term: 'Shared Responsibility Model', definition: 'The cloud division of security duties between provider and customer.' },
    { term: 'Multitenancy', definition: 'Multiple customers sharing the same underlying cloud infrastructure, requiring strong isolation.' },
  ],
  scenario: `A hospital runs a legacy SCADA-like system controlling its HVAC and building automation on an unpatched, decade-old OS, alongside a patient database and a fleet of networked IoT medical sensors. The security architect recognizes distinct weaknesses: the building-automation system cannot be easily patched (legacy cyber-physical), so it is isolated on a segmented network away from clinical systems; the patient database is at risk of inference/aggregation, so views, access controls, and (where needed) polyinstantiation limit what any user can derive; the IoT sensors ship with default credentials and weak update paths, so they are placed on a restricted VLAN with changed credentials and monitored egress. A CISSP question might describe a legacy ICS that cannot be patched and ask for the best mitigation — the answer is network segmentation/isolation, not simply "apply the latest patch," which may be impossible.`,
  comparisonTables: [
    {
      caption: 'Architecture Type → Characteristic Weakness → Mitigation',
      headers: ['System Type', 'Characteristic Weakness', 'Typical Mitigation'],
      rows: [
        ['Database', 'Aggregation / inference', 'Views, access control, polyinstantiation'],
        ['ICS / SCADA', 'Legacy, unpatchable, physical impact', 'Network segmentation / isolation, monitoring'],
        ['IoT / embedded', 'Weak defaults, poor patching', 'Change defaults, segment, restrict, monitor'],
        ['Cloud / multitenant', 'Shared-responsibility gaps, isolation', 'Clarify responsibilities, strong tenant isolation, encryption'],
        ['Client-based', 'Local caching, malicious active content', 'Endpoint hardening, restrict active content'],
      ],
    },
  ],
  examTraps: [
    'Aggregation (assembling pieces to reveal sensitive info) vs inference (deducing it) — know the difference; polyinstantiation is a mitigation, not an attack.',
    'For legacy ICS/SCADA that cannot be patched, the best answer is usually segmentation/isolation, not "just patch it."',
    'IoT devices commonly ship with weak/default credentials and poor update mechanisms — change defaults and segment them.',
    'In the cloud shared responsibility model, the customer remains responsible for their data/configuration even on managed platforms.',
    'Match the control to the architecture’s specific weakness — a generic answer like "install antivirus" is often not the best fit for ICS or IoT.',
  ],
  resources: [
    { label: 'Destination Certification – Architecture Vulnerabilities (ICS, IoT, DB)', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+architecture+vulnerabilities+scada+iot' },
    { label: 'Kelly Handerhan – CISSP Aggregation and Inference', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+aggregation+inference+polyinstantiation' },
  ],
};

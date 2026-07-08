import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t4',
  overview: `Modern information systems provide built-in security capabilities at the hardware and OS level that enforce protection beneath the applications. Understanding these capabilities helps you reason about why certain attacks are contained and others are not.

Core capabilities include memory protection (each process gets an isolated address space so one process cannot read or corrupt another's memory), the use of processor privilege levels or protection rings (ring 0 = kernel/most privileged; higher rings = less privileged user code) to separate trusted kernel operations from untrusted user code, and a security kernel implementing the reference monitor concept — the abstract mechanism that mediates every access of a subject to an object. The reference monitor must be tamper-proof, always invoked (non-bypassable), and small enough to be verifiable; its concrete implementation is the security kernel, and the totality of protection mechanisms is the Trusted Computing Base (TCB).

Additional hardware/system capabilities include a Trusted Platform Module (TPM) — a chip that stores keys and supports functions like measured boot and full-disk-encryption key protection; virtualization and containerization for isolation; and features such as address space layout randomization (ASLR) and data execution prevention (DEP/NX) that harden against memory-corruption exploits.`,
  examFraming: `(ISC)² focuses on the reference monitor and its three properties (tamper-proof, always invoked, verifiable/small), the security kernel that implements it, and the Trusted Computing Base as the sum of all components you must trust. Know that memory protection/process isolation prevents one process from tampering with another, that protection rings separate kernel (ring 0) from user code, and that a TPM provides hardware-based key storage and integrity measurement (e.g., for full-disk encryption and secure/measured boot). Expect "which concept mediates all access between subjects and objects" — the reference monitor.`,
  keyTerms: [
    { term: 'Reference Monitor', definition: 'The abstract mechanism that mediates all access of subjects to objects; must be tamper-proof, always invoked, and verifiable.' },
    { term: 'Security Kernel', definition: 'The hardware/software/firmware that implements the reference monitor concept.' },
    { term: 'Trusted Computing Base (TCB)', definition: 'The totality of protection mechanisms within a system that together enforce security policy.' },
    { term: 'Protection Rings', definition: 'Hierarchical privilege levels (ring 0 = kernel, most privileged) separating trusted and untrusted code.' },
    { term: 'Memory Protection / Isolation', definition: 'Keeping each process in its own address space so it cannot access another’s memory.' },
    { term: 'Trusted Platform Module (TPM)', definition: 'A hardware chip providing secure key storage and integrity measurement (e.g., for FDE and measured boot).' },
    { term: 'ASLR', definition: 'Address Space Layout Randomization; randomizes memory layout to hinder memory-corruption exploits.' },
    { term: 'DEP / NX', definition: 'Data Execution Prevention / No-eXecute; marks memory non-executable to block code injection into data regions.' },
  ],
  scenario: `A workstation runs an untrusted browser and a sensitive banking app simultaneously. Because the OS enforces memory protection, the browser process cannot read the banking app's memory even if the browser is exploited — each runs in an isolated address space. Kernel operations run in ring 0, separated from the user-mode applications, so a compromised user app cannot directly execute privileged kernel functions. The machine's TPM stores the full-disk-encryption key and performs a measured boot, so if the boot components are tampered with, the key is not released. Every access the apps make to files or devices is ultimately mediated by the OS's access-control mechanism — the reference monitor concept in action. A CISSP question might ask what concept ensures every subject-object access is checked and cannot be bypassed: the reference monitor.`,
  comparisonTables: [
    {
      caption: 'Reference Monitor Required Properties',
      headers: ['Property', 'Meaning'],
      rows: [
        ['Tamper-proof', 'Cannot be altered by attackers'],
        ['Always invoked (non-bypassable)', 'Every access is mediated, with no way around it'],
        ['Verifiable (small/simple)', 'Small enough to be thoroughly tested/analyzed for correctness'],
      ],
    },
    {
      caption: 'Key System Security Concepts',
      headers: ['Concept', 'Role'],
      rows: [
        ['Reference monitor', 'Abstract mediator of all subject-object access'],
        ['Security kernel', 'Concrete implementation of the reference monitor'],
        ['TCB', 'All components that must be trusted to enforce policy'],
        ['TPM', 'Hardware key storage and integrity measurement'],
      ],
    },
  ],
  examTraps: [
    'The reference monitor must be tamper-proof, always invoked, and verifiable (small/simple) — memorize all three properties.',
    'Reference monitor = the abstract concept; security kernel = its implementation. Do not use the terms interchangeably on a "which term" question.',
    'The TCB is the SUM of all trusted protection components, not a single device.',
    'A TPM is hardware for key storage and integrity/measured boot — it is not itself an encryption algorithm.',
    'Memory protection/process isolation is what stops one process from reading/corrupting another — the right answer to "why can’t the exploited browser read the banking app’s memory?"',
    'Ring 0 is the most privileged (kernel), higher-numbered rings are less privileged (user) — a common reversed-answer trap.',
  ],
  resources: [
    { label: 'Destination Certification – Reference Monitor & TCB', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+reference+monitor+trusted+computing+base' },
    { label: 'Kelly Handerhan – CISSP Security Architecture', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+reference+monitor+security+kernel' },
  ],
};

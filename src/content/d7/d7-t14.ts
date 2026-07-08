import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t14',
  overview: `Physical security implementation in security operations is the day-to-day application of the physical controls that protect people, facilities, and equipment — the operational counterpart to the design principles in Domain 3. It covers perimeter and access controls, monitoring, and the procedures that keep them effective.

Layered (defense-in-depth) controls run from the perimeter inward: fences, gates, bollards, and lighting at the boundary; guards, dogs, and signage as deterrents; badge/proximity readers, biometric readers, turnstiles, and mantraps (access-control vestibules) at entry points to authenticate individuals and defeat tailgating/piggybacking; and locked doors, cages, and safes protecting sensitive interior areas. Visitor management (sign-in, escorts, temporary badges) controls non-employees. Monitoring and detection include CCTV (surveillance and evidence), intrusion detection sensors, and alarms, all supporting the deter–delay–detect–respond model. Guards add human judgment that automated systems lack.

Operationally, physical security must be maintained: test locks and alarms, review CCTV coverage, audit badge access lists (revoke access promptly for departed staff — the physical equivalent of deprovisioning), and log physical access for accountability. Because physical access often defeats logical controls (an attacker at the console can bypass much), physical security is foundational. Throughout, life safety takes precedence — controls must never trap people, and egress must remain possible in emergencies.`,
  examFraming: `(ISC)² focuses on matching an operational threat to the right physical control and on the enduring principles: mantraps/access-control vestibules defeat tailgating; CCTV provides detection and evidence (and visible cameras deter); guards add discretionary judgment; badge access lists must be maintained and revoked like logical accounts. Physical access can bypass logical controls, so it is foundational. And above all, life safety outranks asset protection — a control that blocks emergency egress is wrong. Expect FIRST/BEST scenarios: an unbadged person following an employee in → tailgating, addressed by a mantrap and awareness; a departed employee still holding a working badge → revoke physical access promptly.`,
  keyTerms: [
    { term: 'Mantrap / Access-Control Vestibule', definition: 'Interlocking doors allowing one person through at a time to prevent tailgating/piggybacking.' },
    { term: 'Tailgating / Piggybacking', definition: 'An unauthorized person following an authorized person through a controlled door.' },
    { term: 'Badge / Proximity Reader', definition: 'Credential-based entry control identifying and authorizing individuals at a door.' },
    { term: 'CCTV', definition: 'Closed-circuit television for surveillance, detection, deterrence, and evidence.' },
    { term: 'Visitor Management', definition: 'Sign-in, escorting, and temporary badging to control non-employees on site.' },
    { term: 'Security Guard', definition: 'Personnel providing discretionary judgment, response, and deterrence beyond automated controls.' },
    { term: 'Physical Access Review', definition: 'Auditing and revoking badge/door access — the physical counterpart to logical deprovisioning.' },
    { term: 'Deter–Delay–Detect–Respond', definition: 'The operating model physical controls support to protect a facility.' },
  ],
  scenario: `A data center operations team runs its physical security day to day. Vehicles are stopped by bollards; visitors sign in, receive temporary badges, and are escorted. Employees enter the server hall through an access-control vestibule (mantrap) that admits one person at a time, defeating tailgating, after a badge and biometric check. CCTV covers entrances and aisles for detection and evidence, and guards patrol and respond to alarms with human judgment. Monthly, the team audits the badge access list and finds a contractor who left last week still has active door access — they revoke it immediately, the physical equivalent of deprovisioning. All secured doors still fail safe to allow egress during a fire, because life safety takes precedence over asset protection. A CISSP question might describe an unbadged person slipping in behind an employee and ask the best control — an access-control vestibule (mantrap) plus awareness — or ask what to do about a departed employee's still-active badge: revoke it promptly.`,
  comparisonTables: [
    {
      caption: 'Operational Threat → Physical Control',
      headers: ['Threat', 'Control'],
      rows: [
        ['Tailgating/piggybacking', 'Mantrap/access-control vestibule + awareness'],
        ['Unmonitored intrusion', 'CCTV + intrusion sensors + alarms'],
        ['Unescorted visitors', 'Visitor sign-in, temporary badges, escorts'],
        ['Departed staff retaining access', 'Prompt badge/access revocation and reviews'],
        ['Vehicle ramming', 'Bollards / barriers'],
      ],
    },
  ],
  examTraps: [
    'Tailgating/piggybacking is defeated by a mantrap/access-control vestibule (one person at a time) plus staff awareness — not by a stronger door lock alone.',
    'Badge/door access lists must be maintained and revoked promptly for departed staff — the physical equivalent of deprovisioning.',
    'Physical access can bypass many logical controls, so physical security is foundational, not an afterthought.',
    'CCTV primarily provides detection and evidence (and visible cameras deter); it does not by itself prevent entry.',
    'Life safety takes precedence over asset protection — controls must allow safe emergency egress and never trap people.',
  ],
  resources: [
    { label: 'Destination Certification – Physical Security Operations', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+physical+security+mantrap+tailgating' },
    { label: 'Kelly Handerhan – CISSP Physical Security Controls', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+physical+security+badge+cctv' },
  ],
};

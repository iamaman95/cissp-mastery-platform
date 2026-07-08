import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd5',
  topicId: 'd5-t6',
  overview: `Implementing authentication systems means deploying the protocols and infrastructure that actually carry out identification, authentication, and (often) authorization and accounting — the "AAA" services. This topic focuses on the AAA protocols and related infrastructure choices.

RADIUS (Remote Authentication Dial-In User Service) is a widely used AAA protocol (commonly for network access, VPNs, and 802.1X Wi-Fi). Classic RADIUS uses UDP and encrypts only the password in the access-request, leaving other attributes in the clear, and it combines authentication and authorization. TACACS+ (a Cisco protocol) uses TCP, encrypts the entire payload, and separates authentication, authorization, and accounting into distinct functions — making it preferred for granular device administration control. Diameter is a more modern successor to RADIUS with enhanced capabilities.

Other implementation elements include directory services (LDAP / Active Directory) as the identity store, Kerberos for intra-domain SSO (covered in the federation topic), and considerations like protecting the AAA server, using strong shared secrets, and centralizing authentication so credentials and policy are managed in one place rather than per-device. Just-in-time access, credential vaulting for privileged accounts (PAM), and session monitoring round out modern implementations.`,
  examFraming: `(ISC)² tests the RADIUS vs TACACS+ distinctions crisply: RADIUS = UDP, encrypts only the password, combines authN/authZ, cross-vendor; TACACS+ = TCP, encrypts the whole payload, separates authN/authZ/accounting, Cisco. When a scenario needs granular command-level device administration control with full-payload encryption, TACACS+ is the answer; for general network-access AAA/802.1X, RADIUS is typical. Know that centralizing AAA improves manageability and consistency, and that the AAA server and its shared secrets must be protected. Diameter is the RADIUS successor. Don't confuse these with SSO/federation protocols (SAML/OAuth/OIDC) from the federation topic.`,
  keyTerms: [
    { term: 'AAA', definition: 'Authentication, Authorization, and Accounting — the core services these systems provide.' },
    { term: 'RADIUS', definition: 'AAA protocol using UDP; encrypts only the password; combines authN and authZ; cross-vendor.' },
    { term: 'TACACS+', definition: 'Cisco AAA protocol using TCP; encrypts the entire payload; separates authN, authZ, and accounting.' },
    { term: 'Diameter', definition: 'A modern successor to RADIUS with enhanced reliability and capabilities.' },
    { term: '802.1X', definition: 'Port-based network access control that often uses RADIUS to authenticate devices/users onto the network.' },
    { term: 'Directory Service (LDAP/AD)', definition: 'Centralized identity store used by authentication systems to look up users and attributes.' },
    { term: 'Shared Secret', definition: 'A secret configured between a client (e.g., switch) and the AAA server to secure their communication.' },
    { term: 'PAM (Privileged Access Management)', definition: 'Systems that vault, broker, and monitor privileged credentials and sessions.' },
  ],
  scenario: `A network team must control which administrators can run which commands on the company's routers and switches, with full auditing and encrypted management traffic. They choose TACACS+ because it separates authentication, authorization, and accounting (enabling per-command authorization), runs over TCP, and encrypts the entire payload. For general employee Wi-Fi and VPN access, they deploy RADIUS with 802.1X so each user authenticates against the central directory. Both AAA servers are hardened, use strong shared secrets with the network devices, and centralize credential and policy management so changes are made once rather than device-by-device. Privileged admin credentials are vaulted in a PAM system with session recording. A CISSP question might ask which protocol best supports granular, encrypted, per-command device administration — the answer is TACACS+.`,
  comparisonTables: [
    {
      caption: 'RADIUS vs TACACS+',
      headers: ['Attribute', 'RADIUS', 'TACACS+'],
      rows: [
        ['Transport', 'UDP', 'TCP'],
        ['Encryption', 'Password only', 'Entire payload'],
        ['AAA separation', 'Combines authN + authZ', 'Separates authN, authZ, accounting'],
        ['Origin / use', 'Cross-vendor; network access, 802.1X', 'Cisco; granular device administration'],
      ],
    },
  ],
  examTraps: [
    'RADIUS encrypts ONLY the password (over UDP) and combines authN/authZ; TACACS+ encrypts the WHOLE payload (over TCP) and separates authN/authZ/accounting.',
    'For granular, per-command device administration with full encryption, choose TACACS+; for general network-access AAA/802.1X, RADIUS is typical.',
    'Diameter is the modern successor to RADIUS — not a wireless or encryption standard.',
    'Do not confuse AAA protocols (RADIUS/TACACS+/Diameter) with federation/SSO protocols (SAML/OAuth/OIDC).',
    'Centralizing AAA and protecting the AAA server + shared secrets is a best practice; per-device local credentials do not scale and are inconsistent.',
  ],
  resources: [
    { label: 'Destination Certification – RADIUS vs TACACS+ (AAA)', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+radius+tacacs+aaa' },
    { label: 'Kelly Handerhan – CISSP Authentication Systems AAA', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+radius+tacacs+authentication' },
  ],
};

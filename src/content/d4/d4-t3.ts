import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd4',
  topicId: 'd4-t3',
  overview: `Secure communication channels protect data as it moves across untrusted networks. The two workhorses on the CISSP exam are IPsec and TLS, plus the concept of the VPN (virtual private network) that tunnels private traffic over a public network.

IPsec operates at the network layer (Layer 3) and has two protocols: AH (Authentication Header) provides integrity and authentication but NOT confidentiality (no encryption), while ESP (Encapsulating Security Payload) provides confidentiality (encryption) plus integrity/authentication. IPsec runs in two modes: transport mode (encrypts only the payload, leaving the original IP header — used host-to-host) and tunnel mode (encrypts the entire original packet and adds a new header — used for gateway-to-gateway/site-to-site VPNs). Key exchange is handled by IKE.

TLS (Transport Layer Security, the successor to the deprecated SSL) secures application traffic (e.g., HTTPS) and typically operates above the transport layer; it provides confidentiality, integrity, and server authentication (optionally mutual). SSL is deprecated and should not be used. Other secure protocols worth knowing: SSH (secure remote administration, replacing Telnet), SFTP/FTPS (secure file transfer vs insecure FTP), and secure email (S/MIME, PGP). VPN types include remote-access VPNs (individual users to the corporate network, often TLS or IPsec) and site-to-site VPNs (connecting whole networks, typically IPsec tunnel mode).`,
  examFraming: `(ISC)² tests the IPsec details hard: AH = integrity/authentication only (no encryption); ESP = encryption + integrity; transport mode = payload only (host-to-host); tunnel mode = whole packet + new header (site-to-site VPN). Know that TLS replaced the deprecated SSL and provides confidentiality/integrity/authentication. Match the insecure protocol to its secure replacement (Telnet→SSH, FTP→SFTP/FTPS, HTTP→HTTPS). Expect scenario questions: "connect two office networks securely" → site-to-site IPsec tunnel-mode VPN; "let a remote employee reach internal apps" → remote-access VPN. A common trap: choosing AH when confidentiality is required (AH does not encrypt).`,
  keyTerms: [
    { term: 'IPsec', definition: 'A network-layer (Layer 3) suite securing IP traffic via AH and/or ESP, with IKE for key exchange.' },
    { term: 'AH (Authentication Header)', definition: 'IPsec protocol providing integrity and authentication but NOT confidentiality (no encryption).' },
    { term: 'ESP (Encapsulating Security Payload)', definition: 'IPsec protocol providing confidentiality (encryption) plus integrity/authentication.' },
    { term: 'Transport Mode', definition: 'IPsec mode encrypting only the packet payload; used host-to-host.' },
    { term: 'Tunnel Mode', definition: 'IPsec mode encrypting the entire packet and adding a new header; used for site-to-site VPNs.' },
    { term: 'TLS', definition: 'Transport Layer Security; secures application traffic (e.g., HTTPS). Successor to deprecated SSL.' },
    { term: 'VPN', definition: 'Virtual Private Network; tunnels private traffic securely over a public network.' },
    { term: 'SSH', definition: 'Secure Shell; encrypted remote administration replacing insecure Telnet.' },
  ],
  scenario: `A company needs three secure channels. To connect its headquarters and branch office networks over the internet, it builds a site-to-site VPN using IPsec in tunnel mode with ESP, so entire packets are encrypted and routed between the two gateways. For remote employees to reach internal applications from home, it deploys a remote-access VPN (TLS-based) that authenticates each user. For administrators managing servers, it mandates SSH instead of Telnet so credentials and sessions are encrypted. When a developer proposes using IPsec AH to 'secure' a sensitive data feed, the security architect corrects them: AH provides integrity and authentication but no encryption, so ESP is required for confidentiality. A CISSP question might ask which IPsec component and mode fit a site-to-site VPN needing encryption — ESP in tunnel mode.`,
  comparisonTables: [
    {
      caption: 'IPsec: AH vs ESP and Transport vs Tunnel',
      headers: ['Element', 'Provides / Used For'],
      rows: [
        ['AH (Authentication Header)', 'Integrity + authentication, NO encryption'],
        ['ESP (Encapsulating Security Payload)', 'Confidentiality (encryption) + integrity/authentication'],
        ['Transport mode', 'Encrypts payload only; host-to-host'],
        ['Tunnel mode', 'Encrypts entire packet + new header; site-to-site VPN'],
      ],
    },
    {
      caption: 'Insecure Protocol → Secure Replacement',
      headers: ['Insecure', 'Secure Replacement'],
      rows: [
        ['Telnet', 'SSH'],
        ['FTP', 'SFTP / FTPS'],
        ['HTTP', 'HTTPS (TLS)'],
        ['SSL (deprecated)', 'TLS'],
      ],
    },
  ],
  examTraps: [
    'AH provides integrity/authentication but NO confidentiality — if a scenario needs encryption, ESP is required, not AH.',
    'Transport mode = payload only (host-to-host); tunnel mode = whole packet + new header (site-to-site VPN). Do not swap them.',
    'SSL is deprecated/insecure; TLS is its replacement — "use SSL" is a wrong answer.',
    'Match insecure protocols to secure replacements: Telnet→SSH, FTP→SFTP/FTPS, HTTP→HTTPS.',
    'Site-to-site VPN → IPsec tunnel mode; remote-access user VPN → often TLS-based (or IPsec) — pick by the scenario.',
    'A VPN protects data in transit over the untrusted network; it does not by itself secure the endpoints.',
  ],
  resources: [
    { label: 'Destination Certification – IPsec, TLS, VPNs', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+ipsec+tls+vpn' },
    { label: 'Kelly Handerhan – CISSP Secure Communication Channels', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+ipsec+vpn+secure+protocols' },
  ],
};

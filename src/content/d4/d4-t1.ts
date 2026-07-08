import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd4',
  topicId: 'd4-t1',
  overview: `Secure network architecture design starts with two reference models that CISSP expects you to know cold: the OSI model (7 layers) and the TCP/IP model (4 layers). OSI, from bottom to top, is Physical (Layer 1), Data Link (Layer 2), Network (Layer 3), Transport (Layer 4), Session (Layer 5), Presentation (Layer 6), and Application (Layer 7). TCP/IP collapses these into Link/Network Access, Internet, Transport, and Application. OSI is a conceptual teaching model used to reason about where a protocol, device, or attack operates; TCP/IP is the practical model the actual Internet runs on.

Each layer has characteristic protocols and devices. Layer 1 concerns cabling, signaling, and hubs. Layer 2 concerns MAC addressing, switches, ARP, and VLANs. Layer 3 concerns IP addressing and routing (routers, IP, ICMP). Layer 4 concerns end-to-end transport — TCP (connection-oriented, reliable, three-way handshake) versus UDP (connectionless, best-effort, lower overhead). Layers 5-7 handle session establishment, data formatting/encryption (e.g., SSL/TLS is often taught as spanning Presentation), and application protocols (HTTP, FTP, DNS, SMTP).

Secure network architecture design means applying defense-in-depth and segmentation principles across these layers: VLANs and subnetting to contain broadcast domains and limit lateral movement, routing and firewalling to control traffic between zones, and the principle of least access enforced at multiple layers simultaneously (a Layer 2 ACL, a Layer 3 firewall rule, and a Layer 7 application gateway are not redundant — they defend different attack surfaces). CISSP also expects familiarity with encapsulation (each layer wraps the layer above's data in its own header, forming a PDU — bit, frame, packet, segment, data) and decapsulation as data moves down and up the stack.

Design also includes topology and zoning decisions: flat vs. segmented networks, DMZ placement, choke points for monitoring, and the idea that a well-designed network makes attacks visible and containable rather than merely "hard to get into." A converged, unsegmented network is a single-point-of-failure and lateral-movement risk regardless of how strong perimeter controls are.`,
  examFraming: `(ISC)² tests this topic by giving you a protocol, device, or attack (e.g., "an attacker floods a switch's MAC address table," "a packet has a corrupted checksum," "a device forwards based on IP address") and asking you to identify the correct OSI layer or contrast it against the TCP/IP model. Expect to be asked to map a device (hub, switch, router, firewall type) to its "native" layer, and to distinguish where a given firewall generation truly inspects traffic. Also expect questions on TCP vs. UDP trade-offs (reliability vs. speed) applied to a scenario (e.g., "which transport protocol suits real-time voice traffic"). Memorize layer numbers AND names — questions may reference either.`,
  keyTerms: [
    { term: 'OSI Model', definition: 'A 7-layer conceptual reference model (Physical, Data Link, Network, Transport, Session, Presentation, Application) used to describe how network communication functions are organized.' },
    { term: 'TCP/IP Model', definition: 'The practical 4-layer model (Link, Internet, Transport, Application) that the actual Internet protocol suite is built on; maps loosely onto OSI.' },
    { term: 'Encapsulation', definition: 'The process of wrapping data with a protocol header (and sometimes trailer) as it passes down the stack, forming layer-specific protocol data units (PDU): data, segment, packet, frame, bit.' },
    { term: 'TCP Three-Way Handshake', definition: 'The SYN, SYN-ACK, ACK sequence that establishes a reliable, connection-oriented TCP session at Layer 4.' },
    { term: 'MAC Address', definition: 'A Layer 2 hardware address burned into (or spoofable on) a network interface, used by switches to forward frames within a local segment.' },
    { term: 'Broadcast Domain', definition: 'A logical network segment in which a broadcast frame reaches all connected devices; VLANs are used to divide and contain broadcast domains.' },
    { term: 'VLAN (Virtual LAN)', definition: 'A Layer 2 logical segmentation technique that groups ports/devices into separate broadcast domains regardless of physical switch location.' },
    { term: 'Convergence (network)', definition: 'Carrying voice, video, and data over a single unified IP network infrastructure, increasing efficiency but also increasing shared-risk surface if not properly segmented.' },
  ],
  scenario: `A mid-size company runs all departments — finance, HR, guest Wi-Fi, and building automation/IoT — on one flat Layer 2 network with no VLAN segmentation. An intern connects a personal, malware-infected laptop to a conference-room jack. Because the network is flat, the malware performs ARP spoofing (Layer 2) to intercept traffic between the finance workstation and file server, and separately reaches the building's HVAC controller because nothing prevents Layer 3 routing between "zones" — there are no zones.

A CISSP-minded redesign would segment this network into VLANs by function (finance, HR, guest, OT/IoT) with inter-VLAN routing enforced through a Layer 3 firewall applying least-access rules, so that a compromised guest or IoT device cannot reach finance systems, and ARP-spoofing-style Layer 2 attacks are contained within a single VLAN's broadcast domain rather than the entire enterprise.`,
  comparisonTables: [
    {
      caption: 'OSI Model vs. TCP/IP Model',
      headers: ['OSI Layer (#, Name)', 'Typical Protocols/Devices', 'TCP/IP Model Equivalent'],
      rows: [
        ['7 – Application', 'HTTP, FTP, SMTP, DNS, gateways', 'Application'],
        ['6 – Presentation', 'Encryption/encoding, SSL/TLS (often taught here), JPEG, ASCII', 'Application'],
        ['5 – Session', 'Session establishment/teardown, NetBIOS, RPC', 'Application'],
        ['4 – Transport', 'TCP, UDP; firewalls (stateful)', 'Transport'],
        ['3 – Network', 'IP, ICMP, routers, Layer 3 firewalls', 'Internet'],
        ['2 – Data Link', 'MAC addressing, switches, ARP, VLANs', 'Link (Network Access)'],
        ['1 – Physical', 'Cabling, hubs, repeaters, signaling', 'Link (Network Access)'],
      ],
    },
    {
      caption: 'TCP vs. UDP',
      headers: ['Attribute', 'TCP', 'UDP'],
      rows: [
        ['Connection', 'Connection-oriented (three-way handshake)', 'Connectionless'],
        ['Reliability', 'Guaranteed delivery, sequencing, retransmission', 'Best-effort, no delivery guarantee'],
        ['Overhead', 'Higher (headers, ACKs, flow control)', 'Lower (minimal header)'],
        ['Typical Use', 'Web (HTTP/S), email, file transfer', 'DNS queries, streaming media, VoIP (RTP)'],
      ],
    },
  ],
  examTraps: [
    `Don't confuse the OSI teaching model with what actually runs on the wire — production networks run TCP/IP; OSI is used for conceptual layer analysis.`,
    `SSL/TLS placement is often tested as Presentation Layer (6) in OSI terms, even though in TCP/IP terms it's commonly discussed as sitting just above Transport — know both framings.`,
    `A switch operates at Layer 2 (MAC/frames), not Layer 3 — don't select "routing" as a switch's primary function unless it's explicitly a Layer 3 switch.`,
    `UDP is not "insecure" by definition — it's connectionless/unreliable, which is a design trade-off for speed (e.g., VoIP, DNS), not inherently a security weakness.`,
    `Encapsulation order is fixed (data > segment > packet > frame > bit going down); questions may test whether you know a "packet" specifically refers to the Layer 3 PDU, not a generic term for "network traffic."`,
  ],
  resources: [
    { label: 'Destination Certification – OSI and TCP/IP Model', url: 'https://www.youtube.com/results?search_query=destination+certification+OSI+model+cissp' },
    { label: 'Kelly Handerhan – Network Fundamentals CISSP', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+network+fundamentals+OSI' },
  ],
};

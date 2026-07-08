import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd4',
  topicId: 'd4-t2',
  overview: `Secure network components — firewalls, intrusion detection/prevention systems (IDS/IPS), wireless infrastructure, and VoIP systems — are the building blocks CISSP expects you to place correctly and evaluate for appropriate use. Firewalls have evolved through generations: packet-filtering firewalls (Layer 3/4, inspect header fields like IP/port with no session awareness), stateful inspection firewalls (track connection state, understand a reply belongs to an established session), and next-generation firewalls (NGFW), which add application-layer awareness (Layer 7), deep packet inspection, user identity awareness, and integrated intrusion prevention.

IDS and IPS are frequently confused on the exam. An IDS is passive/out-of-band — it monitors a copy of traffic (via a SPAN/mirror port or tap) and alerts, but cannot itself block a packet in real time. An IPS is inline/active — it sits directly in the traffic path and can drop or block malicious traffic in real time, at the cost of being a potential single point of failure/latency. Both come in signature-based (matches known attack patterns, low false positives but blind to novel attacks) and anomaly/behavior-based (baselines normal behavior and flags deviations, can catch zero-days but has higher false-positive rates) variants. Host-based (HIDS/HIPS) versus network-based (NIDS/NIPS) is a separate but related axis — placement (host vs. network segment) rather than detection method.

Wireless security has progressed from the badly broken WEP (weak, crackable, uses a static/weak IV+RC4 approach) through WPA (TKIP, a stopgap), WPA2 (AES-CCMP, still widely deployed, using a four-way handshake vulnerable to offline dictionary attacks against weak pre-shared keys, e.g., KRACK), to WPA3 (mandates SAE — Simultaneous Authentication of Equals — replacing the PSK four-way handshake with a Diffie-Hellman-based exchange resistant to offline dictionary attacks, and forward secrecy). CISSP expects you to know WPA3/SAE is the current best practice and why WEP/WPA are deprecated.

VoIP introduces its own risks distinct from data-only networks: it typically uses SIP (Session Initiation Protocol) for call setup/signaling and RTP (Real-time Transport Protocol) for the actual media stream, both of which are vulnerable to eavesdropping, toll fraud, spoofing, and DoS unless secured (SRTP for encrypted media, TLS for SIP signaling). VoIP traffic is latency- and jitter-sensitive, so it is typically segmented onto its own VLAN with QoS (Quality of Service) prioritization — a design and availability concern layered on top of the confidentiality/integrity concerns of encrypting the signaling and media.`,
  examFraming: `(ISC)² wants you to correctly place a described security control (a device blocking/dropping vs. only alerting; inline vs. out-of-band; signature vs. anomaly detection) into the right category, and to reason about trade-offs (false positives vs. false negatives, availability risk of inline devices, why NGFWs consolidate multiple functions). For wireless, expect to be tested on why WEP/WPA are wrong answers and WPA3/SAE is the modern correct answer, and on the practical difference between an evil twin AP and legitimate rogue AP detection. For VoIP, expect questions on segmentation (own VLAN), encryption (SRTP/TLS), and recognizing toll fraud or eavesdropping scenarios.`,
  keyTerms: [
    { term: 'Stateful Inspection Firewall', definition: 'A firewall that tracks the state of active connections (e.g., TCP handshake state) and permits return traffic that matches an established session, rather than evaluating each packet in isolation.' },
    { term: 'Next-Generation Firewall (NGFW)', definition: 'A firewall that combines traditional packet filtering/stateful inspection with application-layer awareness, deep packet inspection, user/identity context, and often integrated IPS.' },
    { term: 'IDS vs. IPS', definition: 'IDS is a passive, out-of-band monitoring system that detects and alerts on suspicious traffic; IPS is an active, inline system that can block/drop malicious traffic in real time.' },
    { term: 'Signature-Based Detection', definition: 'Detection method that matches traffic/behavior against a database of known attack patterns; effective against known threats but blind to novel/zero-day attacks.' },
    { term: 'Anomaly-Based Detection', definition: 'Detection method that establishes a baseline of normal behavior and flags statistically significant deviations; can catch novel attacks but has a higher false-positive rate.' },
    { term: 'WPA3 / SAE', definition: 'The current wireless security standard, mandating Simultaneous Authentication of Equals (SAE), a Diffie-Hellman-based key exchange that replaces the WPA2 four-way handshake and resists offline dictionary attacks.' },
    { term: 'SIP (Session Initiation Protocol)', definition: 'The VoIP signaling protocol used to set up, modify, and tear down calls; vulnerable to spoofing and DoS if unencrypted/unauthenticated.' },
    { term: 'SRTP (Secure Real-time Transport Protocol)', definition: 'An encrypted variant of RTP used to protect the confidentiality and integrity of VoIP media streams from eavesdropping.' },
  ],
  scenario: `A company deploys a traditional stateful-inspection firewall at its perimeter along with a network-based IDS on a SPAN port monitoring inbound traffic. An attacker uses an encrypted, application-layer exploit against the company's web application that the firewall permits (correct port/protocol, established session) and that the IDS detects several minutes later — but by then the exploit has already executed, and the IDS could only alert, not block, because it sits out-of-band.

A CISSP-aligned improvement replaces the perimeter with an NGFW capable of inspecting decrypted application-layer traffic and integrates an inline IPS to block matching exploit signatures in real time, while accepting the added latency and availability risk of an inline device — a deliberate trade-off between "detect after the fact" and "prevent inline," made explicit rather than accidental.`,
  comparisonTables: [
    {
      caption: 'Firewall Generations',
      headers: ['Generation', 'Primary Layer(s)', 'Key Capability', 'Key Limitation'],
      rows: [
        ['Packet-Filtering', 'Layer 3/4', 'Filters on IP, port, protocol per packet', 'No session/state awareness; easily bypassed with fragmented/spoofed packets'],
        ['Stateful Inspection', 'Layer 3/4', 'Tracks connection state; permits valid return traffic', 'No visibility into application-layer content/payload'],
        ['Next-Generation (NGFW)', 'Layer 3-7', 'App-awareness, deep packet inspection, identity/user context, integrated IPS', 'Higher cost/complexity; performance overhead from deep inspection'],
      ],
    },
    {
      caption: 'IDS vs. IPS',
      headers: ['Attribute', 'IDS', 'IPS'],
      rows: [
        ['Placement', 'Out-of-band (monitors a copy via SPAN/tap)', 'Inline (in the direct traffic path)'],
        ['Action', 'Detects and alerts only', 'Detects and can actively block/drop traffic'],
        ['Risk', 'Cannot stop an attack in progress', 'Can become a single point of failure/bottleneck'],
      ],
    },
    {
      caption: 'Wireless Security Standards',
      headers: ['Standard', 'Encryption', 'Key Exchange', 'Status'],
      rows: [
        ['WEP', 'RC4 (weak, static/reused IV)', 'Shared static key', 'Broken; deprecated, should never be used'],
        ['WPA', 'TKIP (stopgap over WEP hardware)', 'Improved but still weak', 'Deprecated'],
        ['WPA2', 'AES-CCMP', 'Four-way handshake (PSK)', 'Widely deployed; vulnerable to offline dictionary attacks on weak PSKs, KRACK'],
        ['WPA3', 'AES-GCMP (stronger modes)', 'SAE (Diffie-Hellman-based)', 'Current best practice; resists offline dictionary attacks, offers forward secrecy'],
      ],
    },
  ],
  examTraps: [
    `An IDS cannot block traffic — if a question describes a device "blocking" or "dropping" malicious packets in real time, it is describing an IPS, not an IDS, even if the question calls it "detection."`,
    `Signature-based detection cannot catch a true zero-day attack by definition (no signature exists yet) — anomaly/behavior-based detection is the answer when a question describes catching "never-before-seen" attacks.`,
    `WPA2 is not automatically "insecure" — it remains widely deployed and reasonably strong with AES-CCMP and a strong passphrase; the exam trap is treating WPA2 as equivalent to broken WEP rather than recognizing WPA3/SAE as the upgrade path.`,
    `A stateful firewall permitting "established" traffic does not mean it inspects application-layer payload/content — that capability requires an NGFW or a proxy/application-layer gateway.`,
    `VoIP is not automatically secure just because it's "just voice" — unencrypted SIP/RTP is vulnerable to eavesdropping and toll fraud; SRTP and TLS are required controls, not optional extras.`,
  ],
  resources: [
    { label: 'Destination Certification – Firewalls, IDS, IPS Explained', url: 'https://www.youtube.com/results?search_query=destination+certification+firewalls+IDS+IPS+cissp' },
    { label: 'Kelly Handerhan – Wireless Security and VoIP CISSP', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+wireless+security+WPA3+VoIP' },
  ],
};

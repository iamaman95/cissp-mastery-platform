import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t13',
  overview: `Site and facility security controls are the concrete physical safeguards that implement the design principles: barriers, entry controls, environmental protections, and detection/response systems. CISSP expects familiarity with the common controls and, importantly, the environmental systems that keep equipment and people safe.

Perimeter and entry controls include fences (height guides: ~3–4 ft deters casual trespass, 6–7 ft too high to climb easily, 8 ft with barbed wire deters determined intruders), gates, bollards (barriers stopping vehicles), lighting, security guards and dogs, locks (and their vulnerability to picking/bumping), turnstiles, and mantraps/access-control vestibules (two interlocking doors that prevent tailgating/piggybacking by allowing only one person through at a time). Badging, biometric readers, and CCTV support monitoring and accountability.

Environmental controls are heavily tested. Power protection uses UPS (battery backup for short outages and clean power) and generators (for extended outages), guarding against sags/brownouts, spikes/surges, and blackouts. HVAC maintains temperature and humidity (too dry → static discharge; too humid → condensation/corrosion) and should use positive pressure so air flows out, keeping contaminants and smoke from entering. Fire needs its own controls: know the fire classes (A: ordinary combustibles; B: flammable liquids; C: electrical; D: combustible metals; K: kitchen/cooking oils) and suppression types — water sprinklers (wet, dry, preaction, deluge) and clean agents/gas systems (e.g., inert gases, FM-200) that suppress fire without water damage or (unlike legacy Halon, now banned) ozone harm, suitable for electrical/computer rooms.`,
  examFraming: `(ISC)² tests: mantraps/access-control vestibules defeat tailgating; know fence height guidance; know that clean-agent/gas suppression (not water) is preferred for electronic/computer rooms to avoid equipment damage, and that Halon is banned (ozone-depleting) with replacements like FM-200. Match the fire class to the extinguisher (Class C = electrical). Understand power terms (UPS for short-term/clean power + generator for long-term; brownout = prolonged low voltage). HVAC positive pressure keeps contaminants out. Above all, life safety first — suppression and egress must protect people before assets.`,
  keyTerms: [
    { term: 'Mantrap / Access-Control Vestibule', definition: 'Two interlocking doors allowing one person through at a time to prevent tailgating/piggybacking.' },
    { term: 'Bollard', definition: 'A sturdy post/barrier that stops vehicles from ramming a building or entrance.' },
    { term: 'UPS', definition: 'Uninterruptible Power Supply; battery backup providing clean power and short-term outage coverage.' },
    { term: 'Generator', definition: 'Provides electrical power during extended outages, beyond UPS battery runtime.' },
    { term: 'Brownout', definition: 'A prolonged drop in voltage (as opposed to a momentary sag or a full blackout).' },
    { term: 'Positive Pressure (HVAC)', definition: 'Air pressure that pushes air outward, keeping smoke/contaminants from entering protected spaces.' },
    { term: 'Fire Classes (A–K)', definition: 'A: ordinary combustibles; B: flammable liquids; C: electrical; D: metals; K: cooking oils.' },
    { term: 'Clean Agent Suppression', definition: 'Gas/inert-agent fire suppression (e.g., FM-200) that protects electronics without water damage; Halon is banned.' },
  ],
  scenario: `A data center implements layered controls. Vehicles are stopped by bollards; visitors enter through a monitored access-control vestibule (mantrap) that admits one person at a time, defeating tailgating. Inside, the server hall is protected by a clean-agent (FM-200) fire suppression system rather than water sprinklers, so a fire can be suppressed without destroying equipment; smoke detection triggers an alarm and pre-alerts staff before discharge, and egress doors fail safe so people can leave. Power is conditioned by a UPS that also covers brief outages, with a diesel generator for extended blackouts. HVAC keeps humidity in range (avoiding static and condensation) and maintains positive pressure so smoke and dust are pushed out. A CISSP question might ask which fire-suppression choice best fits a computer room — a clean agent/gas system, because water would damage the electronics, and Halon is banned.`,
  comparisonTables: [
    {
      caption: 'Fire Classes and Suppression',
      headers: ['Class', 'Fuel Type', 'Note'],
      rows: [
        ['A', 'Ordinary combustibles (wood, paper)', 'Water is acceptable'],
        ['B', 'Flammable liquids/gases', 'Do not use water; use CO2/foam'],
        ['C', 'Electrical equipment', 'Use non-conductive agent (gas/clean agent), not water'],
        ['D', 'Combustible metals', 'Special dry-powder agents'],
        ['K', 'Cooking oils/fats', 'Wet chemical agents (kitchens)'],
      ],
    },
    {
      caption: 'Power Disturbances',
      headers: ['Term', 'Meaning'],
      rows: [
        ['Sag / Dip', 'Momentary low voltage'],
        ['Brownout', 'Prolonged low voltage'],
        ['Spike / Surge', 'Momentary / prolonged high voltage'],
        ['Fault / Blackout', 'Momentary / prolonged complete loss of power'],
      ],
    },
  ],
  examTraps: [
    'A mantrap/access-control vestibule defeats tailgating/piggybacking by admitting one person at a time — the right answer for that threat.',
    'For computer/electrical rooms, use clean-agent/gas suppression, NOT water; Halon is banned (ozone-depleting) — FM-200 and inert gases replace it.',
    'Match fire class to agent: Class C is electrical (non-conductive agent), Class K is kitchen oils — a common mismatch trap.',
    'Know power terms: brownout = prolonged low voltage; a UPS handles short outages + clean power, a generator handles extended outages.',
    'HVAC positive pressure pushes air OUT to keep contaminants/smoke from entering — negative pressure would draw them in.',
    'Life safety still governs: pre-action/pre-alarm and safe egress protect people before suppression protects equipment.',
  ],
  resources: [
    { label: 'Destination Certification – Physical Controls & Fire Suppression', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+fire+suppression+physical+controls' },
    { label: 'Kelly Handerhan – CISSP Physical Security Controls', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+physical+security+controls+fire' },
  ],
};

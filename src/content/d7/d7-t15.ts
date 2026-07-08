import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd7',
  topicId: 'd7-t15',
  overview: `Personnel safety and security concerns address the protection of people — employees, contractors, and visitors — which CISSP consistently ranks as the highest priority: human life takes precedence over assets, data, and facilities. Security operations must safeguard people during normal work, emergencies, and higher-risk situations such as travel.

Key areas include emergency management and evacuation (clearly marked exits, drills, assembly points, and headcount/roll-call procedures to confirm everyone is accounted for), and duress systems — panic buttons or duress codes that let a person covertly signal they are being coerced (for example, an alternate PIN that appears to grant access while silently alerting security). Travel security protects staff traveling to higher-risk locations: pre-travel briefings, minimizing sensitive data carried, awareness of surveillance and theft, and guarding against social engineering. Workplace safety and violence prevention, secure lone-working procedures, and safe handling of terminations (which can provoke hostility) also fall here.

Operationally, life-safety controls must never be defeated by security controls: exits must remain usable, and safety systems take precedence over asset protection. Awareness training ensures staff know evacuation routes, how to use duress signals, and how to respond to emergencies. The unifying principle for the exam: when a scenario pits protecting people against protecting property or information, protecting people always wins.`,
  examFraming: `(ISC)² makes this almost a values question: safety of human life is the FIRST priority, above assets, data, and continuity. Expect scenarios where a security measure would endanger people (locked exits, delayed evacuation) — the correct answer preserves life safety. Know duress codes/panic buttons let a coerced person covertly summon help; know evacuation procedures include roll call/headcount at assembly points to account for everyone; and know travel security involves pre-travel briefings and minimizing sensitive data carried. If an answer choice sacrifices people to protect property, it is wrong.`,
  keyTerms: [
    { term: 'Life Safety Priority', definition: 'The principle that protecting human life outranks protecting assets, data, or facilities.' },
    { term: 'Evacuation Procedures', definition: 'Marked exits, drills, assembly points, and headcount to safely clear and account for people.' },
    { term: 'Roll Call / Headcount', definition: 'Confirming all personnel are accounted for at the assembly point after evacuation.' },
    { term: 'Duress Code / Panic Button', definition: 'A covert signal (alternate PIN or button) indicating a person is being coerced, silently alerting security.' },
    { term: 'Travel Security', definition: 'Protecting traveling staff via briefings, minimized sensitive data, and threat awareness.' },
    { term: 'Workplace Violence Prevention', definition: 'Measures and procedures to prevent and respond to threats/violence against staff.' },
    { term: 'Safe Termination Practices', definition: 'Handling terminations to protect staff safety and prevent hostile reactions.' },
    { term: 'Lone-Worker Safety', definition: 'Procedures protecting employees working alone or in isolated conditions.' },
  ],
  scenario: `A company reviews personnel safety. Its data center has a strict access control, but management confirms all secured doors fail safe so people can evacuate during a fire — life safety over asset protection. Reception staff, who occasionally face aggressive visitors, are given a silent panic button and a duress code: entering an alternate PIN appears to proceed normally while silently alerting security that they are being coerced. Evacuation drills run twice a year, with marked routes, an outdoor assembly point, and a roll-call headcount so no one is left inside. Employees traveling to a higher-risk region receive a pre-travel briefing, carry minimal sensitive data on loaner devices, and are coached on theft and social-engineering risks. A CISSP question might pit a security lockdown against occupant escape and ask the right call — preserve life safety and allow egress — or ask what control lets a coerced employee covertly summon help: a duress code/panic button.`,
  comparisonTables: [
    {
      caption: 'Personnel Safety Concern → Control',
      headers: ['Concern', 'Control'],
      rows: [
        ['Emergency evacuation', 'Marked exits, drills, assembly point, roll call'],
        ['Coercion at access points', 'Duress code / silent panic button'],
        ['High-risk travel', 'Pre-travel briefing, minimize sensitive data, awareness'],
        ['Workplace violence / hostile termination', 'Violence-prevention procedures, safe termination handling'],
        ['Locked exits endangering people', 'Fail-safe egress; life safety over assets'],
      ],
    },
  ],
  examTraps: [
    'Human life safety is the FIRST priority — above assets, data, facilities, and continuity. Any answer sacrificing people for property is wrong.',
    'Security controls must never block emergency egress; exits must remain usable and fail safe.',
    'A duress code/panic button lets a coerced person covertly signal for help while appearing to comply.',
    'Evacuation includes roll call/headcount at the assembly point to confirm everyone is accounted for.',
    'Travel security emphasizes pre-travel briefings and minimizing sensitive data carried, not just physical protection.',
  ],
  resources: [
    { label: 'Destination Certification – Personnel Safety & Duress', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+personnel+safety+duress+life+safety' },
    { label: 'Kelly Handerhan – CISSP Life Safety and Personnel Security', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+life+safety+personnel+security' },
  ],
};

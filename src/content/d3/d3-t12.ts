import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd3',
  topicId: 'd3-t12',
  overview: `Site and facility security design applies security thinking to the physical world: where you place a facility, how you lay it out, and how the environment itself deters and delays attackers. The guiding philosophy is Crime Prevention Through Environmental Design (CPTED), which shapes the physical environment to reduce crime through three principles: natural surveillance (design so people can be seen — good sightlines, lighting, windows), natural access control (guide movement with pathways, landscaping, and entrances that funnel visitors), and territorial reinforcement (make ownership clear with signage, fences, and defined boundaries so intruders feel out of place).

Design also follows defense in depth / layered defense (concentric rings of protection from the perimeter inward to the most sensitive assets) and the concept of security zones (public, reception, operational, restricted/high-security). Site selection considers external factors: proximity to hazards (flood plains, fault lines, chemical plants), crime rates, visibility (a data center that does not advertise itself is harder to target), accessibility for emergency services, and utility reliability. Critical facilities are often designed to be unobtrusive.

The overall goal of physical security design is expressed as Deter, Delay, Detect, and Respond (some add Deny/Assess): make targets unattractive, slow attackers down, notice intrusions, and enable a timely response.`,
  examFraming: `(ISC)² wants you to recognize CPTED and its three elements (natural surveillance, natural access control, territorial reinforcement) and to apply defense-in-depth/layered physical security. Expect site-selection questions weighing hazards, crime, visibility, and utilities. Understand the deter-delay-detect-respond model and that physical controls should be layered from the perimeter inward. Also remember that life safety takes precedence over asset protection — a design that traps people to protect assets is wrong; people come first.`,
  keyTerms: [
    { term: 'CPTED', definition: 'Crime Prevention Through Environmental Design; shaping the environment to reduce crime.' },
    { term: 'Natural Surveillance', definition: 'Designing spaces so activity is visible (sightlines, lighting, windows), deterring wrongdoing.' },
    { term: 'Natural Access Control', definition: 'Using layout, landscaping, and entrances to guide and limit movement.' },
    { term: 'Territorial Reinforcement', definition: 'Making ownership and boundaries clear so intruders stand out (fences, signage).' },
    { term: 'Defense in Depth (Physical)', definition: 'Concentric layers of protection from the perimeter inward to sensitive assets.' },
    { term: 'Security Zones', definition: 'Graduated areas (public, reception, operational, restricted) with increasing controls.' },
    { term: 'Site Selection', definition: 'Choosing a location considering hazards, crime, visibility, utilities, and emergency access.' },
    { term: 'Deter-Delay-Detect-Respond', definition: 'The physical-security objective model: discourage, slow, notice, and react to intrusions.' },
  ],
  scenario: `A company designs a new data center. Following CPTED, they keep landscaping low near entrances for natural surveillance, funnel all visitors through a single monitored reception (natural access control), and clearly mark property boundaries with fencing and signage (territorial reinforcement). They choose a site away from a flood plain and a nearby chemical facility, in a low-crime area with reliable power and good emergency-services access, and deliberately make the building unmarked so it does not advertise its contents. Inside, protection is layered — perimeter fence, then building access control, then a restricted server hall requiring separate credentials — embodying defense in depth. Critically, all secure doors still allow safe egress in an emergency, because life safety takes precedence over asset protection. A CISSP question might ask which principle explains funneling visitors through one monitored entrance: natural access control (a CPTED element).`,
  comparisonTables: [
    {
      caption: 'CPTED Principles',
      headers: ['Principle', 'What It Does', 'Example'],
      rows: [
        ['Natural surveillance', 'Increases visibility of activity', 'Good lighting, clear sightlines, windows'],
        ['Natural access control', 'Guides and restricts movement', 'Single funneled entrance, landscaping'],
        ['Territorial reinforcement', 'Signals ownership/boundaries', 'Fences, signage, defined property lines'],
      ],
    },
    {
      caption: 'Physical Security Objectives',
      headers: ['Objective', 'Meaning'],
      rows: [
        ['Deter', 'Discourage attempts (visible controls, signage)'],
        ['Delay', 'Slow the attacker (locks, barriers, layers)'],
        ['Detect', 'Notice the intrusion (sensors, CCTV, guards)'],
        ['Respond', 'React in time (guards, alarms, procedures)'],
      ],
    },
  ],
  examTraps: [
    'Know the three CPTED elements — natural surveillance, natural access control, territorial reinforcement — and match a scenario to the right one.',
    'Life safety takes precedence over asset protection; a design that blocks emergency egress to protect assets is wrong.',
    'Physical security should be layered (defense in depth) from the perimeter inward, not a single barrier.',
    'Site selection weighs hazards, crime, visibility, utilities, and emergency access — a "cheapest location" answer that ignores these is wrong.',
    'Making a critical facility unobtrusive (not advertising it) is a valid design choice, not "security through obscurity" in the pejorative sense.',
  ],
  resources: [
    { label: 'Destination Certification – CPTED & Facility Design', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+cpted+physical+security+design' },
    { label: 'Kelly Handerhan – CISSP Physical Security Design', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+physical+security+cpted' },
  ],
};

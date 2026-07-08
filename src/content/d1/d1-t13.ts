import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t13',
  overview: `People are consistently the most targeted and most fallible element of a security program, which is why (ISC)² treats security awareness, education, and training as a governance-level control, not a nicety. The goal is to change behavior so that employees recognize threats (phishing, social engineering, tailgating) and act according to policy.

CISSP distinguishes three related but different terms. Awareness reinforces what people already broadly know and keeps security top-of-mind (posters, reminders, simulated phishing) — its goal is attention. Training teaches specific skills needed to perform a role securely (e.g., how developers do secure code review) — its goal is skill/competency. Education is broader, longer-term learning that develops understanding and decision-making (e.g., a degree or professional certification) — its goal is insight and the "why."

Effective programs are role-based (a developer, an executive, and a help-desk agent need different content), delivered regularly rather than once, measured for effectiveness (e.g., phishing click-rate trends), and refreshed as threats evolve.`,
  examFraming: `(ISC)² wants you to correctly match a scenario to awareness vs training vs education — this distinction is a frequent exam item. Remember: Awareness = keep it top of mind (recognition), Training = build a specific skill (how-to), Education = develop deep understanding (why). Also expect questions on why programs must be role-based, ongoing, and measured, and on management's responsibility to fund and mandate them. Simulated phishing is an awareness/measurement tool; a rising click-rate signals the program needs improvement, not that it should be abandoned.`,
  keyTerms: [
    { term: 'Security Awareness', definition: 'Activities that keep security top-of-mind and help staff recognize threats; goal is attention/recognition.' },
    { term: 'Security Training', definition: 'Instruction that builds the specific skills needed to perform a role securely; goal is competency.' },
    { term: 'Security Education', definition: 'Broader, longer-term learning that develops deep understanding and judgment; goal is insight.' },
    { term: 'Role-Based Training', definition: 'Tailoring content to a job function so each audience learns what is relevant to their duties.' },
    { term: 'Simulated Phishing', definition: 'Controlled fake phishing campaigns used to measure and improve employee resistance to real attacks.' },
    { term: 'Security Culture', definition: 'The shared attitudes and behaviors that make secure choices the organizational norm.' },
    { term: 'Program Metrics', definition: 'Measurements (e.g., phishing click-rate, completion rate) used to evaluate awareness-program effectiveness.' },
  ],
  scenario: `A company suffers repeated phishing compromises. Leadership funds a program with three parts: monthly reminder emails and posters keep phishing recognition top-of-mind (awareness); the finance team receives specific instruction on verifying wire-transfer requests out-of-band (training); and the incident-response staff pursue professional certifications to deepen their expertise (education). The security team runs simulated phishing quarterly and tracks the click-rate, which falls from 22% to 4% over a year. When an exam asks which activity is 'training' versus 'awareness,' the wire-transfer skill session is training (a specific how-to skill), the posters are awareness (recognition), and the certifications are education (broad understanding).`,
  comparisonTables: [
    {
      caption: 'Awareness vs Training vs Education',
      headers: ['Attribute', 'Awareness', 'Training', 'Education'],
      rows: [
        ['Goal', 'Recognition / attention', 'Skill / competency', 'Understanding / insight'],
        ['Question answered', '"What to watch for"', '"How to do it"', '"Why it matters"'],
        ['Example', 'Phishing posters, reminders', 'Secure coding workshop', 'Degree or certification'],
        ['Depth / duration', 'Short, ongoing reinforcement', 'Focused, role-specific', 'Broad, long-term'],
      ],
    },
  ],
  examTraps: [
    'Do not confuse awareness (recognition/top-of-mind) with training (specific skill) or education (deep understanding) — the exam tests this distinction directly.',
    'A rising phishing click-rate means the program needs strengthening, not that awareness training is useless.',
    'Awareness/training must be ongoing and role-based; a single onboarding session is insufficient.',
    'Management is responsible for funding and mandating the program — "the users just need to be more careful" is not an acceptable exam answer.',
    'Measuring effectiveness (metrics) is part of a mature program; an unmeasured program cannot demonstrate value or improvement.',
  ],
  resources: [
    { label: 'Destination Certification – Awareness, Training, Education', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+awareness+training+education' },
    { label: 'Kelly Handerhan – Security Awareness CISSP', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+security+awareness+training' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t1',
  overview: `Every CISSP candidate agrees, in writing, to abide by the (ISC)² Code of Ethics as a condition of certification. It is not a soft "best practices" document — violating it can result in revocation of your certification. The Code consists of a Preamble and four Canons, listed in mandatory priority order: (1) Protect society, the common good, necessary public trust and confidence, and the infrastructure; (2) Act honorably, honestly, justly, responsibly, and legally; (3) Provide diligent and competent service to principals; and (4) Advance and protect the profession. When canons conflict, you resolve the conflict by applying them in that order — protecting society outranks even legal obligations to your employer.

Beyond the (ISC)² Code, CISSP also expects familiarity with organizational ethics concepts: codes of conduct, the "ethics vs. law" distinction (an act can be legal but unethical, or illegal but arguably ethical), and frameworks like the Ten Commandments of Computer Ethics (Computer Ethics Institute) as background knowledge. The exam is less interested in you memorizing canon text verbatim and more interested in you correctly applying the priority ordering and the underlying "protect the greater good first" philosophy to a messy scenario.

A subtle but heavily tested point: the (ISC)² Code applies to the certified professional's conduct in their professional capacity, not to unrelated personal behavior, and reporting a suspected ethics violation to (ISC)² is itself an expected professional obligation, not optional whistleblowing.`,
  examFraming: `(ISC)² wants you to apply the four canons in strict priority order when a scenario presents a conflict — for example, an employer instruction that would violate the law or endanger public safety must yield to Canon I/II even if it costs you your job or violates Canon III (duty to your employer/principal). Expect scenario questions that dress up a canon conflict as a business problem: "Your manager tells you to conceal a known vulnerability that could harm customers — what do you do FIRST/BEST?" The correct answer nearly always honors the higher-priority canon, escalates appropriately, and does not involve silently complying, resigning immediately without escalating, or going straight to the media/public without exhausting internal and legitimate channels.`,
  keyTerms: [
    { term: '(ISC)² Code of Ethics Preamble', definition: 'States that safety of the commonwealth, duty to principals, and to each other requires adherence to high ethical standards of behavior — it frames the "why" behind the canons.' },
    { term: 'Canon I', definition: 'Protect society, the common good, necessary public trust and confidence, and the infrastructure — the highest-priority canon.' },
    { term: 'Canon II', definition: 'Act honorably, honestly, justly, responsibly, and legally.' },
    { term: 'Canon III', definition: 'Provide diligent and competent service to principals (employers, clients, contracting parties).' },
    { term: 'Canon IV', definition: 'Advance and protect the profession — includes not bringing the profession into disrepute and mentoring/sharing knowledge appropriately.' },
    { term: 'Ethics vs. Law', definition: 'The recognition that legality and ethicality are not the same thing — an action can be legal but unethical (or vice versa), and CISSP expects professionals to hold themselves to the ethical standard even where law is silent or lenient.' },
    { term: 'Code of Conduct', definition: 'An organization-specific set of behavioral rules (distinct from the (ISC)² Code of Ethics), often narrower and tied to employment policy rather than professional certification.' },
  ],
  scenario: `A CISSP-certified security engineer discovers that her employer's flagship product has a critical, easily exploitable vulnerability that could expose customer financial data. Her director instructs her to stay quiet until the next major release "fixes it as a side effect," which is eight months away, and explicitly tells her not to document the issue in the defect tracker.

Applying the (ISC)² Code of Ethics canons in priority order, the engineer recognizes that Canon I (protect society, public trust, and infrastructure) and Canon II (act honorably, honestly, and legally) outrank Canon III (diligent service to her employer/principal). The correct professional response is to escalate within appropriate channels — documenting the risk formally, raising it through internal risk/compliance escalation paths, and if the organization refuses to act and the risk to the public is serious, pursuing further legitimate escalation (e.g., legal, regulatory disclosure obligations, or ultimately reporting to (ISC)² if her own certification-relevant conduct is implicated) — rather than silently complying or leaking data externally without exhausting legitimate channels first.`,
  comparisonTables: [
    {
      caption: 'The Four Canons — Priority Order and What They Mean',
      headers: ['Canon', 'Short Name', 'Priority', 'Practical Meaning'],
      rows: [
        ['Canon I', 'Protect society, the common good, public trust, infrastructure', 'Highest', 'When in conflict with any other canon, this wins.'],
        ['Canon II', 'Act honorably, honestly, justly, responsibly, legally', '2nd', 'Personal/professional integrity and legal compliance.'],
        ['Canon III', 'Provide diligent and competent service to principals', '3rd', 'Duty of competence and loyalty to employer/client.'],
        ['Canon IV', 'Advance and protect the profession', 'Lowest', 'Avoid discrediting the profession; mentor responsibly.'],
      ],
    },
    {
      caption: 'Ethics vs. Law vs. Organizational Policy',
      headers: ['Concept', 'Source of Authority', 'Enforcement', 'Example'],
      rows: [
        ['Law', 'Government/regulator', 'Courts, fines, criminal penalty', 'Data breach notification statutes'],
        ['(ISC)² Code of Ethics', '(ISC)² professional body', 'Certification revocation', 'Reporting a known ethics violation'],
        ['Organizational Code of Conduct', 'Employer policy', 'HR discipline, termination', 'Acceptable use of company email'],
      ],
    },
  ],
  examTraps: [
    `Questions test whether you apply canon priority order correctly — "loyalty to my employer" (Canon III) is a tempting distractor answer when Canon I or II is actually at stake.`,
    `"Report to the media immediately" and "resign without escalating" are both classic overcorrection distractors — the expected path is internal escalation through legitimate channels first.`,
    `An action can be legal but still violate the Code of Ethics (or vice versa) — do not assume "it's not illegal" means "it's the ethical choice" on the exam.`,
    `The exam may present a Code of Conduct violation (organizational policy) and a Code of Ethics violation (professional/(ISC)² level) in the same scenario — read carefully to determine which is actually being tested.`,
    `Silently complying with an unethical instruction "because it's my job" is almost never the correct answer when Canon I/II conflicts with Canon III.`,
  ],
  resources: [
    { label: 'Destination Certification – (ISC)² Code of Ethics', url: 'https://www.youtube.com/results?search_query=destination+certification+isc2+code+of+ethics' },
    { label: 'Kelly Handerhan – CISSP Professional Ethics', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+professional+ethics' },
  ],
};

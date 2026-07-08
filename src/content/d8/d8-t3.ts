import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd8',
  topicId: 'd8-t3',
  overview: `Assessing the effectiveness of software security means verifying that the security built into an application actually works, using the right testing techniques at the right stages. CISSP expects you to distinguish the main application-security testing methods and when each applies.

Static Application Security Testing (SAST) analyzes source code (or bytecode) WITHOUT executing it. It is a white-box technique used early in development, catches issues like insecure coding patterns and can pinpoint the exact line, but tends to produce false positives and cannot see runtime/deployment issues. Dynamic Application Security Testing (DAST) tests the RUNNING application from the outside (black-box), sending inputs and observing responses. It finds runtime and configuration issues (and confirms exploitability) but usually cannot pinpoint the source line and runs later, once the app is deployable. Interactive Application Security Testing (IAST) instruments the running application to combine inside knowledge with runtime testing, improving accuracy. Software Composition Analysis (SCA) checks third-party dependencies for known vulnerabilities.

Other assessment methods include manual code review, fuzzing (malformed input to find crashes), penetration testing of the application, and abuse/misuse case testing. Effective programs 'shift left' — testing early and often — while still validating the deployed application. Database security assessment (checking for SQL injection exposure, excessive privileges, and inference/aggregation risks) is part of the picture. The theme: match the technique to what you need to find and when.`,
  examFraming: `(ISC)² tests SAST vs DAST crisply: SAST = static, analyzes source without running it, early, white-box, pinpoints lines, more false positives; DAST = dynamic, tests the running app from outside, later, black-box, finds runtime/config issues, confirms exploitability but not the source line. IAST combines both via instrumentation; SCA handles dependencies. Know that 'shift left' means testing earlier in the SDLC, and that no single method finds everything — layer them. A common scenario asks which method finds a coding flaw in source before deployment (SAST) versus a runtime misconfiguration in the live app (DAST).`,
  keyTerms: [
    { term: 'SAST', definition: 'Static Application Security Testing; analyzes source/bytecode without running it (white-box, early).' },
    { term: 'DAST', definition: 'Dynamic Application Security Testing; tests the running application externally (black-box, later).' },
    { term: 'IAST', definition: 'Interactive testing; instruments the running app to combine inside knowledge with runtime analysis.' },
    { term: 'SCA', definition: 'Software Composition Analysis; identifies known-vulnerable third-party/open-source components.' },
    { term: 'Fuzzing', definition: 'Feeding malformed/random input to an app to trigger crashes and reveal flaws.' },
    { term: 'Shift Left', definition: 'Moving security testing earlier in the SDLC to catch issues sooner and cheaper.' },
    { term: 'Manual Code Review', definition: 'Human inspection of source to find logic and security flaws automation may miss.' },
    { term: 'False Positive (SAST)', definition: 'A reported issue that is not actually exploitable — common with static analysis.' },
  ],
  scenario: `A team assesses a web app's security at multiple stages. During coding, SAST scans the source and flags a potential SQL injection at a specific line — caught early, before deployment, though a few flagged items turn out to be false positives that engineers triage. Once a test build is deployed, DAST probes the running application from the outside and confirms a runtime misconfiguration (a verbose error page leaking stack traces) that SAST could not see. IAST, running with the app instrumented during QA, correlates a request to the exact vulnerable code path for higher accuracy. Meanwhile SCA flags a vulnerable version of a logging library. A CISSP question might ask which technique finds a source-code flaw before the app runs (SAST) versus which confirms an exploitable runtime issue in the deployed app (DAST) — and note that layering them provides the best coverage.`,
  comparisonTables: [
    {
      caption: 'SAST vs DAST vs IAST',
      headers: ['Attribute', 'SAST', 'DAST', 'IAST'],
      rows: [
        ['What it tests', 'Source/bytecode (not running)', 'Running app (external)', 'Running app (instrumented)'],
        ['Box type / timing', 'White-box, early', 'Black-box, later', 'Combined, during runtime tests'],
        ['Strength', 'Pinpoints source lines early', 'Finds runtime/config issues, exploitability', 'Higher accuracy, links runtime to code'],
        ['Weakness', 'False positives; misses runtime issues', "Can't pinpoint source line; needs deployable app", 'Requires instrumentation/setup'],
      ],
    },
  ],
  examTraps: [
    'SAST = static/early/analyzes source without running it (pinpoints lines, more false positives); DAST = dynamic/later/tests the running app (finds runtime issues, confirms exploitability). Do not swap them.',
    'DAST needs a deployable, running application; SAST can run before the app is runnable.',
    'IAST combines SAST/DAST via instrumentation; SCA specifically addresses third-party dependency vulnerabilities.',
    "'Shift left' means testing earlier in the SDLC — not eliminating later testing of the deployed app.",
    'No single technique finds everything — layer SAST, DAST, SCA, and manual review for coverage.',
  ],
  resources: [
    { label: 'Destination Certification – SAST vs DAST vs IAST', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+sast+dast+iast' },
    { label: 'Kelly Handerhan – CISSP Software Security Testing', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+application+security+testing+sast+dast' },
  ],
};

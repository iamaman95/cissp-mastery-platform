import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd8',
  topicId: 'd8-t1',
  overview: `Integrating security into the Software Development Life Cycle (SDLC) means treating security as a first-class requirement at every phase — requirements, design, development, testing, deployment, and maintenance — rather than bolting it on after the fact. Traditional "waterfall" models push security testing to the end (often as a pre-release gate), which is exactly the anti-pattern CISSP wants you to recognize as costly and late. The later a defect is found, the more expensive it is to fix: a flaw caught in requirements review costs orders of magnitude less to remediate than the same flaw discovered in production.

Modern development has shifted toward Agile and DevOps/DevSecOps models, which iterate in short cycles (sprints) and integrate automated security tooling directly into the CI/CD pipeline. DevSecOps is the philosophy of "shifting left" — moving security activities (threat modeling, static analysis, dependency scanning) as early as possible in the pipeline so vulnerabilities are caught before they are compiled, merged, or deployed. This does not eliminate the need for governance; it changes how governance is enforced — through automated gates, security champions embedded in development teams, and continuous compliance checks rather than a single end-of-project audit.

CISSP also expects familiarity with formal SDLC/security models used to structure this integration: the Microsoft Security Development Lifecycle (SDL), NIST SP 800-64 (Security Considerations in the SDLC), and maturity models like OWASP SAMM (Software Assurance Maturity Model) and BSIMM (Building Security In Maturity Model), which let organizations benchmark and improve their software security practices over time. Change management and configuration management processes (formal approval, versioning, rollback capability) are also part of this domain — they ensure that once security is built in, it isn't silently undone by an unreviewed change.

Finally, understand the difference between the SDLC (the full lifecycle of a software product, including maintenance and eventual retirement/disposal) and a single "development methodology" (waterfall, spiral, agile, scrum, XP). The SDLC is the overarching framework; the methodology is how work is organized within it. CISSP scenario questions often describe a specific methodology's characteristics and ask you to name it, or describe a failure mode (e.g., security requirements gathered only at the end) and ask which phase was skipped.`,
  examFraming: `(ISC)² frames this topic around the principle that security is cheapest and most effective when integrated early and continuously, not appended at the end. Expect scenarios describing a project that suffered a costly late-stage security finding, and you must identify which earlier SDLC phase should have caught it (usually requirements or design, via threat modeling). You should also be able to distinguish SDLC phases generically (requirements → design → development → testing → deployment → maintenance/disposal) from named methodologies (waterfall, agile, spiral, DevOps/DevSecOps) and named maturity/reference models (Microsoft SDL, NIST 800-64, OWASP SAMM, BSIMM). Exam questions frequently test "shift left" as a FIRST/BEST answer when the scenario shows security being addressed too late.`,
  keyTerms: [
    { term: 'SDLC (Software Development Life Cycle)', definition: 'The full lifecycle of a software system: requirements, design, development, testing, deployment, maintenance, and disposal/retirement.' },
    { term: 'Shift Left', definition: 'The practice of moving security activities (threat modeling, static analysis, secure design review) earlier in the development timeline to catch defects before they become expensive to fix.' },
    { term: 'DevSecOps', definition: 'An evolution of DevOps that embeds automated security testing and controls directly into the CI/CD pipeline, making security a continuous, shared responsibility rather than a final gate.' },
    { term: 'Microsoft SDL (Security Development Lifecycle)', definition: 'A structured, phase-based process (training, requirements, design, implementation, verification, release, response) for building security into software from the start.' },
    { term: 'OWASP SAMM (Software Assurance Maturity Model)', definition: 'A maturity model organizations use to assess and improve their software security practices across governance, design, implementation, verification, and operations.' },
    { term: 'BSIMM (Building Security In Maturity Model)', definition: 'A descriptive (not prescriptive) model built from observed security practices across many real organizations, used to benchmark an organization\'s software security program.' },
    { term: 'Change Management', definition: 'The formal process of requesting, reviewing, approving, and documenting changes to a system to ensure changes do not introduce unreviewed risk.' },
    { term: 'Configuration Management', definition: 'The discipline of tracking and controlling changes to software/system configurations, including versioning and the ability to roll back to a known-good state.' },
  ],
  scenario: `A mid-size fintech company follows a waterfall model: business analysts gather requirements, developers build the entire application over six months, and only after code-complete does the security team perform a single penetration test before launch. That test finds a critical SQL injection flaw in the core payment module — fixing it now requires redesigning the data access layer, delaying launch by eight weeks and costing far more than if the flaw had been caught during design review or via automated static analysis during development.

A CISSP-style question would ask what the organization should change: the answer is not "test harder at the end" but to integrate security earlier — threat modeling during design, secure coding standards and SAST scanning during development, and moving toward an iterative or DevSecOps model where security checks run continuously rather than as a single terminal gate.`,
  comparisonTables: [
    {
      caption: 'SDLC Methodologies: Waterfall vs. Agile vs. DevSecOps',
      headers: ['Model', 'Structure', 'When Security Is Addressed', 'Key Risk'],
      rows: [
        ['Waterfall', 'Sequential phases, each completed before the next begins', 'Typically at the end (pre-release testing/audit)', 'Late discovery of flaws is expensive and can delay release'],
        ['Agile/Scrum', 'Iterative short sprints producing incremental releases', 'Ideally each sprint, via security user stories and iterative testing', 'Security can be deprioritized under sprint time pressure if not embedded in Definition of Done'],
        ['DevOps/DevSecOps', 'Continuous integration/continuous delivery (CI/CD) pipeline', 'Continuously and automatically (SAST/SCA gates in the pipeline, IaC scanning)', 'Requires mature automation; poorly tuned gates create alert fatigue or false confidence'],
      ],
    },
    {
      caption: 'Common Security-in-SDLC Reference Models',
      headers: ['Model', 'Type', 'Purpose'],
      rows: [
        ['Microsoft SDL', 'Prescriptive process', 'Defines specific phase-by-phase security activities (training, requirements, design, verification, release, response)'],
        ['NIST SP 800-64', 'Guidance document', 'Describes how to incorporate security considerations throughout the SDLC'],
        ['OWASP SAMM', 'Maturity model (prescriptive levels)', 'Lets an organization assess and improve software assurance practices against defined maturity levels'],
        ['BSIMM', 'Maturity model (descriptive/observational)', 'Benchmarks an organization\'s practices against data observed across many real-world firms'],
      ],
    },
  ],
  examTraps: [
    `Don't confuse the SDLC (the whole product lifecycle including maintenance/disposal) with a development methodology (waterfall, agile, spiral) — the SDLC is the container, the methodology is how work is organized within it.`,
    `BSIMM is descriptive (built from observed real-world data), while OWASP SAMM is prescriptive (a maturity framework you assess yourself against) — the exam may test this distinction directly.`,
    `"Shift left" does not mean skipping testing at the end; it means adding earlier security activities in addition to (not instead of) later verification.`,
    `A scenario showing security bolted on only at the final testing/release phase is the classic setup for a "which phase failed" or "what should have happened earlier" question — the answer is almost always requirements/design-phase activities like threat modeling, not "test more thoroughly at the end."`,
    `Agile does not automatically mean secure — if security stories aren't part of the backlog/Definition of Done, agile teams can ship insecure code just as easily as waterfall teams.`,
  ],
  resources: [
    { label: 'Destination Certification – Security in the SDLC', url: 'https://www.youtube.com/results?search_query=destination+certification+security+in+the+sdlc+cissp' },
    { label: 'Kelly Handerhan – DevSecOps and Secure SDLC', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+devsecops+sdlc' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd8',
  topicId: 'd8-t2',
  overview: `Security controls in software development ecosystems address the entire toolchain and environment in which software is built — not just the code itself. Modern development involves source-code repositories, build servers, CI/CD pipelines, package registries, IDEs, and collaboration tools, each of which is a potential attack surface (the software supply chain).

Key controls include: securing the source-code repository with access control, branch protection, and code review/approval requirements; protecting the CI/CD pipeline (its credentials and signing keys are high-value — a compromised pipeline can inject malicious code into every build); managing dependencies via software composition analysis (SCA) and a software bill of materials (SBOM) to track and patch third-party/open-source components; and securing secrets (API keys, credentials) in a vault rather than hard-coded in source. Environment separation (dev/test/prod) with least privilege prevents test activity or credentials from reaching production. Signing artifacts and verifying integrity prevent tampering between build and deployment.

Governance controls include configuration/version management (tracking what changed and enabling rollback), separation of duties (the person who writes code should not be the sole approver of its deployment), and integrating security tooling (SAST/DAST/secrets scanning) into the pipeline so issues are caught automatically. The theme: secure the whole ecosystem, because attackers increasingly target build systems and dependencies rather than the finished application.`,
  examFraming: `(ISC)² frames this around software supply-chain risk and toolchain security. Expect: protect the CI/CD pipeline and its secrets/signing keys (a compromised pipeline poisons all builds); use SCA/SBOM to manage vulnerable third-party dependencies; never hard-code secrets — use a vault; separate dev/test/prod with least privilege; and apply separation of duties so developers cannot unilaterally push code to production. Version/configuration management enables tracking and rollback. A common scenario asks the best control for a specific ecosystem weakness — match it (dependency risk → SCA/SBOM; leaked keys → secrets vault; unreviewed code → mandatory code review/branch protection).`,
  keyTerms: [
    { term: 'CI/CD Pipeline', definition: 'Automated build/test/deploy workflow; a high-value target whose compromise can inject malicious code into all builds.' },
    { term: 'Software Composition Analysis (SCA)', definition: 'Tooling that inventories and flags vulnerabilities in third-party/open-source dependencies.' },
    { term: 'SBOM', definition: 'Software Bill of Materials; an inventory of components/dependencies for vulnerability visibility.' },
    { term: 'Secrets Management', definition: 'Storing credentials/keys in a vault rather than hard-coded in source or config.' },
    { term: 'Branch Protection / Code Review', definition: 'Requiring review/approval before code merges, preventing unreviewed changes.' },
    { term: 'Environment Separation', definition: 'Isolating dev/test/prod with least privilege so test activity cannot reach production.' },
    { term: 'Artifact Signing', definition: 'Cryptographically signing build outputs so tampering between build and deploy is detectable.' },
    { term: 'Separation of Duties (dev)', definition: 'The code author is not the sole approver of its deployment, reducing unilateral risk.' },
  ],
  scenario: `A software team hardens its ecosystem after a scare. It locks down the Git repository with branch protection so no code merges without peer review, moves all API keys and database credentials out of source into a secrets vault, and adds software composition analysis to flag vulnerable open-source libraries (generating an SBOM). It protects the CI/CD pipeline's signing keys in an HSM and signs build artifacts so any tampering before deployment is detected. Dev, test, and production are separated with distinct least-privilege credentials so a compromised test account cannot touch production. Separation of duties ensures the developer who writes a change is not the only person who can approve its release. A CISSP question might ask the best defense against a poisoned dependency — software composition analysis with an SBOM — or against a compromised build pipeline injecting code — protecting pipeline credentials/signing keys and verifying artifact integrity.`,
  comparisonTables: [
    {
      caption: 'Ecosystem Weakness → Control',
      headers: ['Weakness', 'Control'],
      rows: [
        ['Vulnerable third-party dependencies', 'SCA + SBOM tracking and patching'],
        ['Hard-coded secrets in source', 'Secrets vault / secrets management'],
        ['Unreviewed code merges', 'Branch protection + mandatory code review'],
        ['Compromised CI/CD pipeline', 'Protect pipeline creds/signing keys; sign & verify artifacts'],
        ['Test activity reaching production', 'Environment separation + least privilege'],
      ],
    },
  ],
  examTraps: [
    'A compromised CI/CD pipeline can inject malicious code into every build — protect its credentials and signing keys as crown jewels.',
    'Never hard-code secrets in source or config — use a secrets vault; hard-coded keys are a classic finding.',
    'Manage third-party/open-source risk with SCA and an SBOM, not by assuming dependencies are safe.',
    'Apply separation of duties so a developer cannot unilaterally push their own code to production.',
    'Separate dev/test/prod with least privilege so test credentials/data cannot compromise production.',
    'Security tooling (SAST/DAST/secrets scanning) should be integrated INTO the pipeline for automatic, early detection.',
  ],
  resources: [
    { label: 'Destination Certification – Secure Dev Ecosystem & Supply Chain', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+ci+cd+pipeline+software+supply+chain+security' },
    { label: 'Kelly Handerhan – CISSP Software Development Security', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+software+development+security+controls' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd5',
  topicId: 'd5-t2',
  overview: `Identification, authentication, authorization, and accountability (IAAA) are the sequence at the heart of access control. Identification is a claim of identity (a username). Authentication proves that claim. Authorization determines what the authenticated identity may do. Accountability ties actions back to the identity (via logging). This topic focuses on authentication.

Authentication factors fall into categories: something you know (password, PIN), something you have (token, smart card, phone), something you are (biometrics — fingerprint, iris, face), and sometimes somewhere you are (location) and something you do (behavior/gait). Multi-factor authentication (MFA) requires two or more factors of DIFFERENT types — a password plus a hardware token is MFA, but a password plus a PIN is NOT (both are 'something you know').

Biometrics are measured by error rates: the False Rejection Rate (FRR, Type I error) is legitimate users wrongly denied; the False Acceptance Rate (FAR, Type II error) is impostors wrongly accepted. FAR (accepting an impostor) is generally the more security-critical error. The Crossover Error Rate (CER, or EER) is the point where FRR equals FAR — a lower CER indicates a more accurate biometric system. Devices and services also authenticate (device certificates, service accounts, mutual TLS).`,
  examFraming: `(ISC)² tests the IAAA order and the factor categories precisely. The classic trap: two authenticators of the SAME type are NOT multi-factor (password + security question = single factor). Know the biometric error terms cold: FRR = Type I = false reject (usability problem); FAR = Type II = false accept (security problem, worse); CER/EER = where the two cross, and lower CER = better system. Expect scenarios asking whether a scheme qualifies as MFA, or which biometric error is more security-relevant (FAR). Also know identification is just the claim; authentication proves it.`,
  keyTerms: [
    { term: 'Identification', definition: 'Claiming an identity (e.g., entering a username).' },
    { term: 'Authentication', definition: 'Proving the claimed identity (e.g., password, token, biometric).' },
    { term: 'Something You Know', definition: 'Knowledge factor — password, PIN, passphrase.' },
    { term: 'Something You Have', definition: 'Possession factor — hardware token, smart card, phone.' },
    { term: 'Something You Are', definition: 'Inherence factor — biometrics such as fingerprint or iris.' },
    { term: 'Multi-Factor Authentication (MFA)', definition: 'Using two or more factors of DIFFERENT categories.' },
    { term: 'FRR / FAR', definition: 'False Rejection Rate (Type I, legit user denied) / False Acceptance Rate (Type II, impostor accepted).' },
    { term: 'CER / EER', definition: 'Crossover (Equal) Error Rate — where FRR meets FAR; lower is a more accurate biometric.' },
  ],
  scenario: `A bank requires users to log in with a password (something you know) plus a one-time code from a hardware token (something you have) — genuine multi-factor authentication because the factors are different types. When it evaluates fingerprint readers, it compares their Crossover Error Rates; the reader with the lowest CER is the most accurate. Security staff note that while a high False Rejection Rate frustrates users (Type I error), a high False Acceptance Rate is more dangerous because it lets impostors in (Type II error). A CISSP question might present 'password + security question' and ask if it is MFA — the answer is no, because both are 'something you know,' making it single-factor despite two prompts.`,
  comparisonTables: [
    {
      caption: 'Authentication Factor Categories',
      headers: ['Category', 'Examples'],
      rows: [
        ['Something you know', 'Password, PIN, passphrase, security question'],
        ['Something you have', 'Hardware/soft token, smart card, phone'],
        ['Something you are', 'Fingerprint, iris, face, palm vein'],
        ['Somewhere you are / something you do', 'Geolocation; gait, typing rhythm'],
      ],
    },
    {
      caption: 'Biometric Error Rates',
      headers: ['Term', 'Meaning', 'Concern'],
      rows: [
        ['FRR (Type I)', 'Legitimate user wrongly rejected', 'Usability/frustration'],
        ['FAR (Type II)', 'Impostor wrongly accepted', 'Security (more critical)'],
        ['CER / EER', 'FRR = FAR crossover point', 'Lower = more accurate system'],
      ],
    },
  ],
  examTraps: [
    'Two authenticators of the SAME category are NOT MFA (password + PIN + security question = still one factor: something you know).',
    'FRR = Type I = false reject (usability); FAR = Type II = false accept (security). FAR is generally the more dangerous error.',
    'A LOWER Crossover Error Rate (CER/EER) means a MORE accurate biometric — do not pick the higher CER as "better."',
    'Identification is only the claim of identity; authentication is the proof — do not conflate them.',
    'Devices and services authenticate too (certificates, service accounts, mutual TLS), not just human users.',
  ],
  resources: [
    { label: 'Destination Certification – Authentication Factors & Biometrics', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+authentication+factors+biometrics+far+frr' },
    { label: 'Kelly Handerhan – CISSP Identification and Authentication', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+authentication+biometrics' },
  ],
};

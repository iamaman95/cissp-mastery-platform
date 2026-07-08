import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd5',
  topicId: 'd5-t3',
  overview: `Single Sign-On (SSO) lets a user authenticate once and access multiple systems without re-authenticating to each. Federated identity extends this across organizational/trust boundaries, so an identity from one domain (the identity provider) can be trusted by another (the service/relying party) without the user having a separate account there.

Key protocols and their purposes (a frequent exam distinction): SAML (Security Assertion Markup Language) is an XML-based standard for exchanging authentication and authorization assertions, widely used for enterprise web SSO — the Identity Provider (IdP) issues a signed assertion the Service Provider (SP) trusts. OAuth 2.0 is an authorization framework that lets an application obtain delegated access to resources (access tokens) on a user's behalf — it is about authorization/delegation, NOT authentication by itself. OpenID Connect (OIDC) is an authentication layer built on top of OAuth 2.0, adding an identity (ID) token so it can actually authenticate users. Kerberos is a network authentication protocol using a trusted Key Distribution Center (KDC) that issues tickets (a Ticket-Granting Ticket, then service tickets), enabling SSO within a domain; it relies on symmetric cryptography and time synchronization.

The main benefit of SSO is user convenience and centralized authentication management; the main risk is that a single compromised credential can unlock many systems — the "keys to the kingdom" problem — which is why SSO is paired with strong authentication (MFA).`,
  examFraming: `(ISC)² loves the OAuth-vs-OIDC and SAML distinctions: OAuth = authorization/delegation (access tokens); OIDC = authentication on top of OAuth (ID token); SAML = XML assertions for enterprise web SSO (IdP → SP). Know Kerberos uses a KDC issuing a TGT then service tickets, depends on symmetric keys and clock synchronization (a skewed clock breaks it), and provides SSO within a realm. Understand the SSO trade-off: convenience and central control vs. the single-point-of-compromise risk (mitigate with MFA). A classic trap: treating OAuth as an authentication protocol — by itself it authorizes, it does not authenticate.`,
  keyTerms: [
    { term: 'Single Sign-On (SSO)', definition: 'Authenticate once to access multiple systems without re-authenticating to each.' },
    { term: 'Federated Identity', definition: 'Trusting identities across organizational boundaries (IdP trusted by relying parties).' },
    { term: 'SAML', definition: 'XML-based standard exchanging signed authentication/authorization assertions (IdP → SP) for web SSO.' },
    { term: 'OAuth 2.0', definition: 'An authorization framework granting delegated access via tokens — not authentication by itself.' },
    { term: 'OpenID Connect (OIDC)', definition: 'An authentication layer on top of OAuth 2.0, adding an ID token to authenticate users.' },
    { term: 'Kerberos', definition: 'Network authentication protocol using a KDC that issues tickets (TGT then service tickets); uses symmetric keys.' },
    { term: 'KDC / TGT', definition: 'Key Distribution Center; issues a Ticket-Granting Ticket used to obtain service tickets in Kerberos.' },
    { term: 'Identity Provider (IdP)', definition: 'The authority that authenticates users and issues assertions/tokens trusted by service providers.' },
  ],
  scenario: `An employee logs into the corporate identity provider once in the morning. When she opens the cloud HR app, the app (a SAML Service Provider) redirects her to the IdP, which returns a signed SAML assertion confirming her identity, and she is logged in without re-entering credentials — federated SSO. A mobile app she uses requests permission to read her calendar; it uses OAuth 2.0 to obtain a delegated access token (authorization) and OIDC to actually confirm who she is (authentication via an ID token). Inside the Windows domain, Kerberos issues her a Ticket-Granting Ticket at logon, which she uses to obtain service tickets for file servers — but only because her workstation clock is synchronized with the KDC. A CISSP question might ask which protocol provides authentication vs. delegated authorization: OIDC/SAML authenticate, OAuth authorizes.`,
  comparisonTables: [
    {
      caption: 'Federation / SSO Protocols',
      headers: ['Protocol', 'Primary Purpose', 'Note'],
      rows: [
        ['SAML', 'Authentication + authorization assertions (web SSO)', 'XML; IdP issues signed assertion to SP'],
        ['OAuth 2.0', 'Delegated authorization (access tokens)', 'NOT authentication by itself'],
        ['OpenID Connect', 'Authentication (identity) on top of OAuth', 'Adds ID token'],
        ['Kerberos', 'Network authentication + intra-domain SSO', 'KDC issues TGT/service tickets; symmetric keys, needs time sync'],
      ],
    },
  ],
  examTraps: [
    'OAuth 2.0 is authorization/delegation, NOT authentication — treating it as an authentication protocol is a classic trap. OIDC adds authentication on top.',
    'SAML is XML-based enterprise web SSO (IdP issues a signed assertion to the SP) — know the IdP/SP roles.',
    'Kerberos depends on time synchronization; a clock skew beyond tolerance breaks ticket validation.',
    'Kerberos uses symmetric cryptography and a KDC issuing a TGT then service tickets — do not describe it as public-key based.',
    'SSO’s risk is single-credential compromise unlocking many systems (keys to the kingdom) — mitigate with MFA, not by avoiding SSO.',
  ],
  resources: [
    { label: 'Destination Certification – SSO, SAML, OAuth, OIDC', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+saml+oauth+oidc+federation' },
    { label: 'Kelly Handerhan – CISSP Kerberos and Federation', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+kerberos+federated+identity' },
  ],
};

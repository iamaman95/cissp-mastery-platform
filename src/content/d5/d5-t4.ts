import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd5',
  topicId: 'd5-t4',
  overview: `Authorization mechanisms decide what an authenticated subject is allowed to do with an object. CISSP centers on four access control models, and being able to match a scenario to the right one is a high-value exam skill.

Discretionary Access Control (DAC): the data owner decides who gets access, typically via access control lists (ACLs). It is flexible but relies on owners' discretion, making it more prone to error/over-sharing. Standard file permissions on most operating systems are DAC.

Mandatory Access Control (MAC): access is enforced by the system based on labels/clearances (e.g., Top Secret) and classifications, not owner discretion. Used in high-security/military environments; a subject can access an object only if its clearance dominates the object's label AND there is need-to-know. It is rigid and secure — owners cannot override the policy.

Role-Based Access Control (RBAC): permissions are assigned to roles (e.g., 'Nurse', 'Accountant'), and users get permissions by being placed in roles. It scales well in organizations and simplifies administration (change the role, not each user). This is the most common enterprise model.

Attribute-Based Access Control (ABAC): decisions use policies evaluating attributes of the subject, object, action, and environment (e.g., 'allow if department=Finance AND time is business hours AND device is managed'). It is the most granular and dynamic, enabling fine-grained, context-aware policies. Rule-based access control (a related idea) applies global rules such as firewall ACLs.`,
  examFraming: `(ISC)² wants you to pick the model from the scenario: owner decides = DAC; system enforces via labels/clearances = MAC (military/high-security); permissions via job roles = RBAC (scales in enterprises); decisions from multiple attributes/context = ABAC (most granular/dynamic). Remember MAC is not owner-overridable and is the most rigid/secure; DAC is the most flexible but riskiest. RBAC eases administration at scale. ABAC enables context-aware rules. A classic trap confuses RBAC (role) with rule-based access control (global rules like firewall ACLs) — 'RBAC' on the exam usually means role-based.`,
  keyTerms: [
    { term: 'DAC (Discretionary)', definition: 'Owner decides access, typically via ACLs; flexible but discretion-dependent.' },
    { term: 'MAC (Mandatory)', definition: 'System enforces access via labels/clearances; rigid, high-security, not owner-overridable.' },
    { term: 'RBAC (Role-Based)', definition: 'Permissions assigned to roles; users gain access through role membership; scales well.' },
    { term: 'ABAC (Attribute-Based)', definition: 'Policies evaluate subject/object/action/environment attributes; most granular and dynamic.' },
    { term: 'Access Control List (ACL)', definition: 'A list specifying which subjects have which permissions on an object (common in DAC).' },
    { term: 'Rule-Based Access Control', definition: 'Access governed by global rules (e.g., firewall/ACL conditions); not the same as role-based.' },
    { term: 'Clearance / Classification', definition: 'The subject label vs object label used by MAC to decide access.' },
    { term: 'Least Privilege', definition: 'Granting only the minimum access needed — a goal all these models aim to support.' },
  ],
  scenario: `A hospital evaluates access control models. For general file shares, staff use standard OS permissions where a document owner grants colleagues access — that is DAC. For a classified research system handling government data, access is enforced by clearance and classification labels the users cannot override — MAC. For the main clinical application, permissions are tied to job roles ('Nurse', 'Physician', 'Billing'), so onboarding a nurse instantly grants the nurse role's rights — RBAC, which scales across thousands of staff. For a new API, they want rules like 'allow if role=Physician AND on-network AND during shift hours AND accessing own-department records' — that granular, context-aware policy is ABAC. A CISSP question might describe permissions granted by job function and ask which model applies: RBAC.`,
  comparisonTables: [
    {
      caption: 'DAC vs MAC vs RBAC vs ABAC',
      headers: ['Model', 'Who/What Decides Access', 'Best For', 'Trade-off'],
      rows: [
        ['DAC', 'Data owner (via ACLs)', 'Flexible, general file sharing', 'Owner discretion → over-sharing risk'],
        ['MAC', 'System, via labels/clearances', 'Military/high-security', 'Rigid; not owner-overridable'],
        ['RBAC', 'Role membership (job function)', 'Enterprises at scale', 'Role explosion if poorly designed'],
        ['ABAC', 'Policies over multiple attributes', 'Fine-grained, context-aware access', 'Complex to design/manage'],
      ],
    },
  ],
  examTraps: [
    'Owner decides access = DAC; system enforces via labels/clearances = MAC; job roles = RBAC; multiple attributes/context = ABAC. Match the scenario carefully.',
    'MAC cannot be overridden by the data owner — it is the most rigid and secure; DAC is the most flexible but riskiest.',
    'RBAC (role-based) is NOT the same as rule-based access control (global rules like firewall ACLs) — a classic naming trap.',
    'RBAC scales administration by changing the role, not each user; ABAC is the most granular and dynamic.',
    'Standard OS file permissions are DAC — a common concrete example the exam uses.',
  ],
  resources: [
    { label: 'Destination Certification – DAC MAC RBAC ABAC', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+dac+mac+rbac+abac' },
    { label: 'Kelly Handerhan – CISSP Access Control Models', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+access+control+models+dac+mac+rbac' },
  ],
};

import type { TopicContent } from '../../data/types';

export const content: TopicContent = {
  domainId: 'd1',
  topicId: 'd1-t10',
  overview: `Risk management is the disciplined process of identifying, assessing, treating, and monitoring risk so that the organization spends its limited resources where they reduce the most meaningful exposure. In CISSP terms, risk is the intersection of a threat, a vulnerability the threat can exploit, and the resulting impact — expressed loosely as Risk = Threat × Vulnerability × Impact (or likelihood × impact).

Assessment can be quantitative (assigning monetary values) or qualitative (using relative ratings like high/medium/low), and mature programs blend both. The core quantitative formulas are: Single Loss Expectancy (SLE) = Asset Value × Exposure Factor; Annualized Loss Expectancy (ALE) = SLE × Annualized Rate of Occurrence (ARO). These let you compare the cost of a control against the loss it prevents.

Once risk is understood, the organization chooses a treatment: mitigate (reduce), transfer (e.g., insurance), avoid (stop the risky activity), or accept (formally acknowledge and retain). What remains after controls are applied is residual risk, which must be formally accepted by an appropriate risk owner.`,
  examFraming: `(ISC)² wants you to reason as a risk manager, not a technician. Expect questions that give SLE/ARO figures and ask for ALE, or that ask whether a control is justified (compare annualized control cost to ALE reduction — never spend more to protect an asset than the asset/loss is worth). Know that risk can never be reduced to zero, that management (the business/data owner) — not the security team — owns the accept decision, and that the correct treatment depends on cost/benefit and risk appetite. Watch for the distinction between total risk, residual risk, and the control gap.`,
  keyTerms: [
    { term: 'Asset Value (AV)', definition: 'The monetary worth assigned to an asset, used as the basis for quantitative loss calculations.' },
    { term: 'Exposure Factor (EF)', definition: 'The percentage of an asset’s value that would be lost if a specific threat is realized.' },
    { term: 'Single Loss Expectancy (SLE)', definition: 'Expected monetary loss from a single occurrence of a risk; SLE = AV × EF.' },
    { term: 'Annualized Rate of Occurrence (ARO)', definition: 'The estimated number of times a threat is expected to occur in a year.' },
    { term: 'Annualized Loss Expectancy (ALE)', definition: 'Expected yearly loss from a risk; ALE = SLE × ARO. Drives cost-benefit control decisions.' },
    { term: 'Residual Risk', definition: 'The risk that remains after controls have been applied; must be formally accepted by the risk owner.' },
    { term: 'Risk Appetite', definition: 'The amount and type of risk an organization is willing to pursue or retain to meet its objectives.' },
    { term: 'Total Risk', definition: 'The risk faced if no controls are implemented (threats × vulnerabilities × asset value).' },
  ],
  scenario: `A company values a customer database at $500,000. A ransomware event is estimated to destroy 40% of that value (EF = 0.4), so the SLE is $200,000. Analysts estimate such an event occurs about once every four years (ARO = 0.25), giving an ALE of $50,000. A proposed backup-and-recovery control costs $20,000 per year and would cut the ARO substantially. Because the annualized cost of the control ($20,000) is well below the ALE it addresses ($50,000), the control is financially justified. If instead the control cost $80,000/year, spending more than the annual expected loss would not be justified on pure cost-benefit grounds — a classic CISSP calculation trap.`,
  comparisonTables: [
    {
      caption: 'The Four Risk Treatment Options',
      headers: ['Treatment', 'What It Means', 'Example'],
      rows: [
        ['Mitigate (Reduce)', 'Apply controls to lower likelihood or impact', 'Deploy MFA to reduce account-takeover risk'],
        ['Transfer (Share)', 'Shift financial impact to a third party', 'Purchase cyber-insurance'],
        ['Avoid', 'Stop or do not undertake the risky activity', 'Decline to launch a feature that stores regulated data'],
        ['Accept', 'Formally acknowledge and retain the risk', 'Accept low residual risk of a minor legacy system'],
      ],
    },
    {
      caption: 'Quantitative vs Qualitative Risk Assessment',
      headers: ['Aspect', 'Quantitative', 'Qualitative'],
      rows: [
        ['Basis', 'Monetary values and formulas (SLE, ALE)', 'Relative ratings (high/medium/low)'],
        ['Objectivity', 'More objective, data-driven', 'More subjective, expert judgment'],
        ['Effort', 'Time-consuming, needs reliable data', 'Faster, easier to perform'],
        ['Best for', 'Cost-benefit / control justification', 'Prioritizing when precise data is scarce'],
      ],
    },
  ],
  examTraps: [
    'Never spend more on a control than the expected annual loss (ALE) it addresses — a control costing more than the ALE is usually not justified on cost-benefit grounds.',
    'ALE = SLE × ARO, and SLE = AV × EF. Mixing these up (e.g., multiplying by AV twice) is a common calculation trap.',
    'Risk acceptance is a business/management decision made by the risk (data/system) owner, not by the security team.',
    'Risk can be reduced but never eliminated entirely — answers claiming a control brings risk to zero are wrong.',
    'Distinguish transfer (insurance shares financial impact but you still own the risk) from avoidance (you eliminate the activity).',
  ],
  resources: [
    { label: 'Destination Certification – Risk Management (SLE/ALE)', url: 'https://www.youtube.com/results?search_query=destination+certification+cissp+risk+management+ale+sle' },
    { label: 'Kelly Handerhan – CISSP Risk Management', url: 'https://www.youtube.com/results?search_query=kelly+handerhan+cissp+risk+management' },
  ],
};

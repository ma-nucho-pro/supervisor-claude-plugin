# Scoring and Quality Gates

## Scores

- 0-49: unacceptable
- 50-69: weak
- 70-79: acceptable but not release quality for a critical dimension
- 80-89: good
- 90-94: excellent
- 95-100: exceptional

Critical dimensions must be >=90 by default and >=95 when the user explicitly asks for exceptional/best-possible/AAA/premium quality.

## Veto

A concrete critical defect outweighs aggregate score. Veto examples: broken core flow, material false claim, missing critical requirement, exploitable security issue, data-loss risk, invalid integration, major visual breakage, untested claim presented as verified.

## Gates

1. Requirements — all critical requirements satisfied?
2. Correctness — does it actually work / is it actually true?
3. Integration — do components work together?
4. Robustness — expected edge/failure cases handled?
5. Evidence — material claims and success claims supported?
6. Quality — implementation/craft meets target standard?
7. User Intent — does this solve the real request?
8. Final Council — should it be released now?

Any critical FAIL returns the work to the loop.

## Diminishing returns

Do not chase P3/P4 indefinitely. Stop when they do not violate requirements, do not materially reduce quality, and another iteration is unlikely to improve the user outcome.

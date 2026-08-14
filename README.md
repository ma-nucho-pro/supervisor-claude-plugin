<p align="center">
  <a href="https://ibb.co/d10HBcy">
    <img
      src="https://i.ibb.co/nZsKr0S/Chat-GPT-Image-13-ago-2026-20-57-12.png"
      alt="Supervisor"
      width="520"
    />
  </a>
</p>

<h1 align="center">Supervisor</h1>

<p align="center">
  A multi-agent quality gate for Claude Code that researches, challenges, tests, verifies, and judges before release.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/RELEASE-v1.0.0-7c3aed?style=for-the-badge" alt="Release v1.0.0">
  <img src="https://img.shields.io/badge/CLAUDE_CODE-PLUGIN-d97706?style=for-the-badge" alt="Claude Code Plugin">
  <img src="https://img.shields.io/badge/WEB-GROUNDED-0284c7?style=for-the-badge" alt="Web Grounded">
  <img src="https://img.shields.io/badge/AGENTS-27-0f766e?style=for-the-badge" alt="27 Agents">
  <img src="https://img.shields.io/badge/QUALITY-GATE-111827?style=for-the-badge" alt="Quality Gate">
</p>

<p align="center">
  <code>WEB RESEARCH · MULTI-AGENT REVIEW · FINAL RELEASE GATE</code>
</p>

<p align="center">
  <a href="#why">Why</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="#web-verification">Web verification</a> ·
  <a href="#coding">Coding</a> ·
  <a href="#frontend">Frontend</a> ·
  <a href="#agents">Agents</a> ·
  <a href="#quality-gates">Quality gates</a> ·
  <a href="#installation">Install</a> ·
  <a href="#usage">Usage</a>
</p>

---

Supervisor is a quality-control layer for Claude Code built around one simple principle:

> The first answer should not automatically become the final answer.

It researches externally verifiable claims, delegates work to specialized agents, challenges the result with independent reviewers, searches for hallucinations, runs applicable tests, fixes defects, and submits the result to a final release judge before delivery.

### How it works, in 3 steps

1. **You work normally** — give Claude Code a task, project, feature, bug, research question, or frontend request.
2. **Supervisor investigates and reviews the work** — it selects specialists, searches the web when verification is needed, tests applicable claims, challenges assumptions, and sends defects back for correction.
3. **A final judge decides whether the result can be released** — critical defects, unsupported claims, missing requirements, or failed checks return the work to the review loop.

---

## Why

AI-generated work can look correct while still containing:

- outdated documentation
- invented APIs or packages
- unsupported factual claims
- broken code
- incomplete requirements
- hidden edge cases
- security issues
- weak architecture
- poor frontend decisions
- untested assumptions
- false claims of verification

Supervisor is designed to find those problems **before the answer reaches you**.

Without Supervisor:

```text
USER
  |
  v
CLAUDE
  |
  v
FIRST ANSWER
  |
  v
USER
```

With Supervisor:

```text
USER
  |
  v
UNDERSTAND
  |
  v
RESEARCH
  |
  v
FAN-OUT SPECIALISTS
  |
  v
BUILD
  |
  v
TEST
  |
  v
INDEPENDENT REVIEW
  |
  v
ANTI-HALLUCINATION
  |
  v
RED TEAM
  |
  v
JUDGES
  |
  v
FIX
  |
  v
RE-TEST
  |
  v
FINAL RELEASE JUDGE
  |
  v
USER
```

---

## Web verification

Supervisor treats web research as part of the quality system rather than an optional afterthought.

For substantive answers containing externally verifiable claims, the Supervisor skill is configured to use real web research unless browsing is explicitly prohibited or the task is exclusively a transformation of user-provided material.

The process is:

```text
SEARCH
  |
  v
FIND AUTHORITATIVE SOURCES
  |
  v
CHECK FRESHNESS
  |
  v
CROSS-VERIFY
  |
  v
COMPARE WITH THE DRAFT
  |
  v
REJECT UNSUPPORTED CLAIMS
```

Supervisor prioritizes:

- official documentation
- primary sources
- current information
- repository evidence
- executed tests
- observable runtime results

A failed search does not become a fabricated conclusion.

```text
NOT FOUND != DOES NOT EXIST
```

If something cannot be verified, Supervisor should mark it as:

```text
UNVERIFIED
```

instead of inventing an answer.

---

## Anti-hallucination

Supervisor includes an independent truth-verification layer.

It checks potentially fabricated or unsupported:

```text
APIs
PACKAGES
FUNCTIONS
METHODS
FLAGS
VERSIONS
URLs
DATES
NUMBERS
BENCHMARKS
CITATIONS
TEST RESULTS
RUNTIME CLAIMS
TECHNICAL CLAIMS
```

Important factual and technical work can be challenged by several independent roles:

```text
EVIDENCE RESEARCHER
        |
        v
SOURCE AUTHORITY JUDGE
        |
        v
HALLUCINATION HUNTER
        |
        v
CITATION ENTAILMENT JUDGE
        |
        v
NUMERICAL AUDITOR
        |
        v
SKEPTIC JUDGE
```

The objective is not to make an answer sound more confident.

The objective is to make confidence depend on evidence.

---

## Coding

Supervisor includes a dedicated code implementation specialist:

```text
SUPERVISOR CODE EXPERT
```

The Code Expert can inspect the repository, understand the existing architecture, implement changes, investigate current documentation, identify root causes, and run available validation.

But the implementer is not allowed to be the only reviewer.

```text
CODE EXPERT
    |
    v
CODE REVIEWER
    |
    v
TEST JUDGE
    |
    v
CORRECTNESS JUDGE
    |
    v
ARCHITECTURE JUDGE
    |
    v
SECURITY JUDGE
    |
    v
PERFORMANCE JUDGE
    |
    v
INTEGRATION JUDGE
```

Depending on the project, Supervisor can validate with:

```text
BUILD
TYPECHECK
LINT
UNIT TESTS
INTEGRATION TESTS
E2E
RUNTIME
LOGS
STATIC ANALYSIS
```

The following statements are not treated as proof:

```text
"should work"
"probably works"
"looks correct"
"likely fixed"
```

If stronger evidence is available, Supervisor is expected to obtain it.

---

## Frontend

Supervisor also contains a dedicated frontend implementation specialist:

```text
SUPERVISOR FRONTEND EXPERT
```

Frontend work can be evaluated across:

- visual hierarchy
- typography
- spacing
- composition
- responsive behavior
- accessibility
- interaction states
- loading states
- empty states
- error states
- animation
- motion
- usability
- performance
- design-system consistency
- visual polish

The frontend implementer does not approve its own result.

When rendering or browser inspection is available:

```text
IMPLEMENT
  |
  v
RENDER
  |
  v
INSPECT
  |
  v
VISUAL JUDGE
  |
  v
ACCESSIBILITY JUDGE
  |
  v
FIND DEFECTS
  |
  v
FIX
  |
  v
RENDER AGAIN
  |
  v
RE-JUDGE
```

Source code looking correct is not considered proof that the actual interface looks correct.

---

## Agents

Supervisor currently ships with **27 specialized agents**.

| Area | Specialists |
|---|---|
| Implementation | Code Expert, Frontend Expert |
| Research | Researcher, Evidence |
| Requirements | Requirements, Completeness, User Intent |
| Engineering | Code Reviewer, Architecture, Test, Integration |
| Quality | Correctness, Quality, Robustness |
| Risk | Security, Performance |
| Frontend | Visual, Frontend Visual Judge, Accessibility Judge |
| Verification | Source Authority, Hallucination Hunter, Citation Entailment, Numerical Auditor |
| Adversarial | Skeptic, Red Team, Devil's Advocate |
| Release | Final Judge |

Supervisor does not blindly run every agent for every request.

It uses **adaptive fan-out**.

```text
SIMPLE TASK
    |
    v
SMALL SPECIALIST GROUP


MEDIUM TASK
    |
    v
MULTIPLE INDEPENDENT REVIEWERS


COMPLEX TASK
    |
    v
BROADER SPECIALIST PANEL


HIGH-RISK CODE / FRONTEND TASK
    |
    v
IMPLEMENTATION
+ TESTING
+ REVIEW
+ ADVERSARIAL CHECK
+ FINAL RELEASE GATE
```

The important rule is:

```text
IMPLEMENTER != REVIEWER
IMPLEMENTER != FINAL JUDGE
```

---

## Red Team

Supervisor contains an adversarial reviewer whose purpose is not to justify the work.

Its purpose is to try to break it.

The Red Team searches for:

```text
HIDDEN BUGS
UNSUPPORTED ASSUMPTIONS
MISSING REQUIREMENTS
EDGE CASES
INCORRECT LOGIC
FRAGILE IMPLEMENTATIONS
FAKE FUNCTIONALITY
INTEGRATION FAILURES
SECURITY RISKS
BAD UX
HARDCODED SHORTCUTS
UNVERIFIED CLAIMS
```

Its central question is:

> What would have to go wrong to prove that this result should not be released yet?

---

## Quality gates

Supervisor uses multiple gates before release.

```text
GATE 1  REQUIREMENTS
GATE 2  CORRECTNESS
GATE 3  INTEGRATION
GATE 4  ROBUSTNESS
GATE 5  QUALITY
GATE 6  USER INTENT
GATE 7  EVIDENCE
GATE 8  FINAL RELEASE
```

Any material failure can return the work to the correction loop.

### Judge scoring

Specialist judges can score their dimensions from:

```text
0 - 49    Unacceptable
50 - 69   Weak
70 - 79   Acceptable
80 - 89   Good
90 - 94   Excellent
95 - 100  Exceptional
```

Default critical threshold:

```text
>= 90
```

Exceptional-quality target:

```text
>= 95
```

---

## Defect priority

Supervisor classifies problems by severity:

```text
P0  BLOCKING / CRITICAL
P1  MAJOR
P2  MODERATE
P3  MINOR
P4  COSMETIC
```

Before release:

```text
ALL P0 MUST BE FIXED
ALL P1 MUST BE FIXED
```

Material P2 issues should also be corrected when they significantly affect quality, reliability, correctness, or user experience.

---

## Root-cause fixes

Supervisor discourages patch stacking.

Instead of:

```text
BUG
 |
 v
PATCH
 |
 v
PATCH
 |
 v
PATCH
```

it prefers:

```text
BUG
 |
 v
ROOT CAUSE
 |
 v
FIX ARCHITECTURE / LOGIC
 |
 v
REMOVE WORKAROUNDS
 |
 v
RETEST
```

After significant corrections it should also ask:

```text
Why did this happen?

Could the same class of bug exist elsewhere?

Which assumption failed?

Should the tests be expanded?

Did the fix break previously working behavior?
```

---

## Final release gate

The plugin includes a `Stop` hook with an independent final release judge.

When Claude is about to finish:

```text
CLAUDE WANTS TO RESPOND
          |
          v
FINAL RELEASE JUDGE
          |
          v
CHECK USER INTENT
CHECK REQUIREMENTS
CHECK WEB EVIDENCE
CHECK TEST EVIDENCE
CHECK REVIEW STATUS
CHECK HALLUCINATIONS
CHECK P0 / P1 DEFECTS
          |
          v
        READY?
       /      \
     NO        YES
     |          |
     v          v
   BLOCK      RELEASE
     |
     v
CONTINUE WORKING
```

A response should not be released while a known critical blocker remains.

---

## Verification Receipt

Substantive Supervisor responses are expected to include a concise verification summary.

Example:

```text
Verification Receipt

Web
- Official documentation checked
- Current API behavior verified

Local
- Build passed
- Typecheck passed
- Tests passed

Independent review
- Code review completed
- Correctness review completed
- Hallucination check completed
- Final release gate passed

Unverified
- None known
```

Supervisor must not claim that a search, test, build, render, screenshot, benchmark, subagent, or verification occurred if it did not actually happen.

---

## Installation

Clone or download the repository.

Validate the plugin:

```bash
claude plugin validate ./supervisor
```

Load Supervisor locally:

```bash
claude --plugin-dir ./supervisor
```

Then start Claude Code normally.

You can verify the loaded components with:

```text
/help
/agents
```

Plugin skills use a namespace.

---

## Usage

Run Supervisor explicitly:

```text
/supervisor:supervisor <your task>
```

Example:

```text
/supervisor:supervisor Build this React dashboard and do not release it until the implementation, responsive design, accessibility, tests and visual quality have been independently reviewed.
```

Research example:

```text
/supervisor:supervisor Research the current API implementation using authoritative sources, verify the claims, implement the solution, test it and challenge the final result before answering.
```

Code example:

```text
/supervisor:supervisor Find the root cause of this bug, verify the framework behavior against current documentation, fix it, run the relevant tests and submit the result to independent review.
```

---

## Plugin architecture

```text
supervisor/
|
|-- .claude-plugin/
|   `-- plugin.json
|
|-- skills/
|   `-- supervisor/
|       |-- SKILL.md
|       `-- references/
|
|-- agents/
|   |-- supervisor-code-expert.md
|   |-- supervisor-frontend-expert.md
|   |-- supervisor-code-reviewer.md
|   |-- supervisor-correctness.md
|   |-- supervisor-security.md
|   |-- supervisor-red-team.md
|   |-- supervisor-hallucination-hunter.md
|   |-- supervisor-final-judge.md
|   `-- ...
|
|-- hooks/
|   |-- hooks.json
|   `-- hooks.prompt-only.example.json
|
|-- scripts/
|   |-- inject-supervision.mjs
|   `-- validate.mjs
|
|-- CHANGELOG.md
`-- README.md
```

---

## Core principle

Supervisor is not designed to find reasons to approve the first result.

It is designed to find reasons **why the result should not be approved yet**.

Only after the important reasons for rejection have been eliminated should the result reach the user.

```text
DON'T TRUST
     |
     v
VERIFY

DON'T ASSUME
     |
     v
TEST

DON'T SELF-APPROVE
     |
     v
USE INDEPENDENT REVIEW

DON'T SHIP THE FIRST DRAFT
     |
     v
SUPERVISE IT
```

---

<p align="center">
  <strong>SUPERVISOR</strong>
</p>

<p align="center">
  Research. Challenge. Test. Verify. Judge. Release.
</p>

<p align="center">
  <sub>The answer is not ready because it exists. It is ready when it survives review.</sub>
</p>

---

## Documentation

Claude Code plugin documentation:

https://code.claude.com/docs/en/plugins

Claude Code plugin reference:

https://code.claude.com/docs/en/plugins-reference

Claude Code hooks:

https://code.claude.com/docs/en/hooks

Claude Code skills:

https://code.claude.com/docs/en/skills
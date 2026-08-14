# Orchestration Reference

## Purpose

The parent conversation owns orchestration. Subagents are specialists, never recursive coordinators.

## Task classification

Classify the task across applicable dimensions: requirements, architecture, implementation, logic, data, research/evidence, UX, visual quality, security, performance, reliability, testing, integration, edge cases, documentation, user intent, final presentation.

Only create roles for dimensions that can materially affect the result.

## First-wave fan-out

Use first-wave agents to reduce blind spots before or during drafting. Good patterns:

- requirement analyst + domain specialist + alternative-solution analyst;
- architecture + implementation-risk + test-strategy;
- evidence researcher + source-quality analyst;
- visual direction + UX + technical feasibility.

If multiple agents would edit the same files, prefer proposals/diffs over concurrent mutation unless isolated worktrees are deliberately used.

## Reviewer fan-out

Reviewers receive the original request, acceptance criteria, latest private candidate, and relevant evidence. They should not see other reviewers' scores before forming their own verdict.

## Cross-review

For high-value work, have A inspect B's assumptions, B inspect C's, and C inspect A's. The parent resolves conflicts with a fresh judge and evidence.

## Context preservation

After every material loop preserve:

```yaml
requested: ...
implemented: ...
failed: ...
fixed: ...
remaining: ...
judge_scores: ...
open_defects: ...
next_action: ...
```

Re-run USER_INTENT_JUDGE after major changes to prevent scope drift.

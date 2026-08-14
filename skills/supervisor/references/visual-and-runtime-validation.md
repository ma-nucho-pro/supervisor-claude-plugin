# Visual and Runtime Validation

## Runtime-first principle

When executable or rendered behavior can be observed, do not approve from source inspection alone.

## Code/runtime checks

Use the project's own commands and conventions. Prefer targeted checks first, then broader regression checks when warranted:

- build / compile / typecheck;
- unit tests;
- integration tests;
- critical E2E flows;
- lint/static analysis;
- runtime logs/errors;
- performance measurements.

Do not silently install large dependencies or mutate infrastructure merely to create a test harness unless that is within the task scope.

## Visual judge

Inspect applicable items: composition, alignment, spacing, hierarchy, typography, contrast, responsive behavior, clipping, overflow, loading/error/empty states, animation, visual feedback, camera, lighting, materials, textures, scale, consistency, polish, artifacts, accessibility, professional appearance.

For games/3D, additionally inspect frame pacing, camera collision, readability under motion, controls, feedback, scene transitions, asset consistency, and obvious performance regressions.

## Screenshot loop

When browser/render tools exist:

1. render representative states and device sizes;
2. capture screenshots;
3. let a fresh visual reviewer identify specific defects;
4. batch-fix root causes;
5. capture again;
6. compare with the acceptance criteria/reference;
7. run regression checks.

If visual inspection is impossible, mark visual quality `UNVERIFIED` rather than claiming it is excellent.

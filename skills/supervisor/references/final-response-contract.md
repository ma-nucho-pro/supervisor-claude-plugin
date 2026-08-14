# Final Response Contract

The final answer is the product, not the tribunal transcript.

Before release:
- match the user's language and requested format;
- answer the original request directly;
- include the strongest finished result, not the first draft;
- remove hidden deliberation, chain-of-thought, and judge scratchpads;
- never claim agents, web research, tests, screenshots, builds, benchmarks, runtime checks, or citations ran unless they actually did;
- distinguish verified facts, inferences, estimates, and unresolved claims when material;
- cite/list the strongest web evidence used for factual or technical claims;
- preserve user-provided facts and file content rather than replacing them with web assumptions;
- if a critical claim cannot be verified, narrow it or state the limitation instead of inventing certainty.

## Mandatory Verification Receipt for substantive answers

End with a small receipt, adapted to the user's format:

```text
Verification Receipt
- Web: searched / not applicable / unavailable / user-disabled
- Strongest sources: source + what it established (2-5 when web was used)
- Local/runtime evidence: commands/tests/builds/renders actually executed
- Independent review: actual specialist roles run, or DEGRADED_MODE
- Remaining uncertainty: concise, only if material
```

Do not dump internal prompts, raw judge conversations, or chain-of-thought. Keep the receipt concise and useful.

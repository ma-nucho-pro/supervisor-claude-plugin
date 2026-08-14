#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
const root = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(new URL('..', import.meta.url).pathname);
const required = [
  '.claude-plugin/plugin.json','skills/supervisor/SKILL.md','hooks/hooks.json','scripts/inject-supervision.mjs'
];
let ok = true;
for (const rel of required) {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) { console.error(`MISSING ${rel}`); ok = false; }
}
for (const rel of ['.claude-plugin/plugin.json','hooks/hooks.json','hooks/hooks.prompt-only.example.json']) {
  try { JSON.parse(fs.readFileSync(path.join(root, rel),'utf8')); }
  catch (e) { console.error(`INVALID JSON ${rel}: ${e.message}`); ok = false; }
}
const agentsDir = path.join(root,'agents');
const agents = fs.readdirSync(agentsDir).filter(x=>x.endsWith('.md'));
if (agents.length < 25) { console.error(`EXPECTED >=25 agents, found ${agents.length}`); ok = false; }
if (ok) console.log(`Supervisor static validation PASS (${agents.length} agents)`);
process.exit(ok ? 0 : 1);

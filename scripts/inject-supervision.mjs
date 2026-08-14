#!/usr/bin/env node
import fs from 'node:fs';
let raw=''; try { raw=fs.readFileSync(0,'utf8'); } catch {}
let input={}; try { input=JSON.parse(raw||'{}'); } catch {}
const prompt=String(input.prompt||''); const n=prompt.toLowerCase();
const factual=['latest','current','actual','hoy','2026','price','precio','law','ley','api','version','versión','framework','library','librería','benchmark','research','investiga','busca','internet','web','source','fuente','citation','cita','verify','verifica'];
const code=['code','codigo','código','implement','debug','bug','function','class','typescript','javascript','python','react','next','node','sql','api','repo','github','build','test'];
const front=['frontend','fronted','ui','ux','website','web app','landing','dashboard','component','css','html','tailwind','responsive','diseño','design','interfaz','visual'];
const substantive=prompt.length>=120 || factual.some(x=>n.includes(x)) || code.some(x=>n.includes(x)) || front.some(x=>n.includes(x));
const mode=front.some(x=>n.includes(x))?'FRONTEND':code.some(x=>n.includes(x))?'CODE':substantive?'SUBSTANTIVE':'LIGHT';
const context = substantive
 ? `SUPERVISOR STRICT MODE (${mode}). Keep the first draft private. For externally verifiable claims run WEB_PREFLIGHT with real WebSearch and fetch strong primary/official sources when useful. For code use a Code Expert implementer and independent code/test/correctness reviewers; for frontend add Frontend Design Expert + rendered visual/accessibility review. Use multiple real Agent calls, adversarial anti-hallucination review, and a real supervisor-final-judge before release when available. End the answer with a concise Verification Receipt listing web sources/checks actually used. Never invent searches, agents, tests, screenshots, citations, APIs or results.`
 : `Supervisor light mode. Do not fabricate facts. Use only proportional review for trivial conversation.`;
process.stdout.write(JSON.stringify({hookSpecificOutput:{hookEventName:'UserPromptSubmit',additionalContext:context}}));

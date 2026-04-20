#!/usr/bin/env node
// Reads JSON from stdin, writes JSON to stdout. Python calls us via subprocess.
// Input schema:
//   { "action": "search" | "reviews" | "app", "params": { ... } }
// Output schema:
//   { "ok": true, "data": ... }  OR  { "ok": false, "error": "..." }

const store = require('app-store-scraper');

async function main() {
  let raw = '';
  for await (const chunk of process.stdin) raw += chunk;
  let req;
  try {
    req = JSON.parse(raw || '{}');
  } catch (e) {
    console.log(JSON.stringify({ ok: false, error: `bad_json: ${e.message}` }));
    process.exit(1);
  }

  const { action, params = {} } = req;
  try {
    let data;
    if (action === 'search') data = await store.search(params);
    else if (action === 'reviews') data = await store.reviews(params);
    else if (action === 'app') data = await store.app(params);
    else throw new Error(`unknown_action: ${action}`);
    console.log(JSON.stringify({ ok: true, data }));
  } catch (err) {
    console.log(JSON.stringify({ ok: false, error: err.message || String(err) }));
    process.exit(1);
  }
}

main();

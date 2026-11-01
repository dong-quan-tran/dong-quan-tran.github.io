'use strict';

const github = 'https://github.com/dong-quan-tran/';
const projects = {
  sentinel: {
    name: 'SentinelTI', category: 'Security · Applied ML · Full stack',
    lede: 'A URL risk assessment should explain itself.',
    problem: 'A suspicious link is easy to share and harder to judge. SentinelTI brings model predictions, structured rules, and threat intelligence into one investigation workflow.',
    build: 'The platform connects a React interface to a FastAPI service, XGBoost classification, and a SQLite-backed URLhaus store. A CLI supports ingestion and scoring workflows.',
    decision: 'Keep the deterministic scoring pipeline in control. Optional AI summaries can explain the evidence, but cannot change the model score, final label, or risk level.',
    evidence: 'The repository documents a historical 135,053-URL held-out evaluation and separate scoring benchmarks. Its evaluation notes also examine URL-format shortcuts and limits to generalization. These are scoped measurements, not a guarantee for unseen links.',
    flow: 'URL → normalization → model + heuristics → risk fusion → explanation',
    repo: 'SentinelTI',
    scope: 'The card is a hand-built illustration using a reserved .example domain; it does not run the classifier.'
  },
  infer: {
    name: 'InferSQL', category: 'Data systems · AI · Full stack',
    lede: 'Make the path from a question to an answer inspectable.',
    problem: 'Natural-language queries are useful only if the generated SQL respects the actual schema and the intended operation. InferSQL makes validation and execution visible in one workbench.',
    build: 'A React workbench and FastAPI API sit over Apache Arrow datasets and DataFusion execution. SQLGlot checks SQL, while a schema-aware copilot supports local Ollama and optional external providers.',
    decision: 'Validate before executing. Generated SQL passes intent, parsing, and schema checks, with bounded repair attempts rather than unlimited retries.',
    evidence: 'The README reports 33/33 execution-equivalent passes on a small curated, two-table copilot evaluation. It also documents local 1M-row query benchmarks. Both results are limited to their recorded test conditions.',
    flow: 'Question → schema context → SQL candidate → validation → DataFusion → rows',
    repo: 'InferSQL',
    scope: 'The homepage query demo uses preset questions and sample results. It does not call an AI provider or execute SQL.'
  },
  book: {
    name: 'Bookforge', category: 'C++20 · Systems · Market research',
    lede: 'Understand a market by rebuilding its events.',
    problem: 'Studying market behavior requires replay that is repeatable and preserves order-book rules. Bookforge connects that systems problem to a Python research workflow.',
    build: 'A price-time-priority C++20 matching engine supports deterministic event replay, multi-symbol routing, snapshots, and feature export. Python tools support temporal evaluation, with FastAPI and React for inspection.',
    decision: 'Make isolation explicit. Events are filtered by symbol before feature replay, so one instrument’s liquidity cannot leak into another instrument’s features.',
    evidence: 'The README records approximately 4.48 million replay events per second on a 10,000-event in-memory fixture in a local Release build. The benchmark documentation explains its scope and reproduction steps.',
    flow: 'Market events → symbol routing → matching engine → snapshots → research features',
    repo: 'Bookforge',
    scope: 'An educational market replay platform. The homepage order book is an illustration, not live market data or a running C++ engine.'
  },
  due: {
    name: 'DueScope', category: 'Product engineering · HackRice 16 · Early beta',
    lede: 'A changed deadline should come with evidence.',
    problem: 'Academic deadlines and job-search updates arrive through different sources. DueScope brings them into one reviewable workflow while retaining the original evidence.',
    build: 'The project covers academic imports, pasted updates, deadline extraction, conflict detection, history, ICS export, and locally configured Gmail and Google Calendar integrations.',
    decision: 'Require a review before external calendar changes. Conflicting dates become proposals, and accepted changes retain the previous deadline in history.',
    evidence: 'The public demo uses sample data. Real integrations require a privately configured instance. The linked repository documents what works locally and what remains early beta.',
    flow: 'Source → evidence + date extraction → conflict check → review → approved export',
    repo: 'DueScope-HackRice16', demo: 'https://due-scope-hack-rice.vercel.app/demo',
    scope: 'Both DueScope repositories are presented as one project. The homepage shows a sample workflow, not a personal inbox.'
  }
};

const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    document.querySelector('#dialog-content').innerHTML = `
      <h2 id="dialog-title">${project.name}</h2>
      <div class="tags"><span>${project.category}</span></div>
      <p class="dialog-lede">${project.lede}</p>
      <h3>The problem</h3><p>${project.problem}</p>
      <h3>The build</h3><p>${project.build}</p>
      <div class="dialog-flow">${project.flow}</div>
      <h3>A decision that matters</h3><p>${project.decision}</p>
      <h3>Evidence & limits</h3><p>${project.evidence}</p>
      <div class="dialog-links"><a class="button primary" href="${github}${project.repo}" target="_blank" rel="noopener noreferrer">Explore the repository ↗</a>${project.demo ? `<a class="text-link" href="${project.demo}" target="_blank" rel="noopener noreferrer">Sample-data demo ↗</a>` : ''}</div>
      <p class="dialog-source">${project.scope} Project details are based on the linked repository documentation.</p>`;
    dialog.showModal();
    dialog.scrollTop = 0;
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

const labStage = document.querySelector('#lab-stage');
const signalMarkup = labStage.innerHTML;
const questions = [
  { label: 'Which products earned the most?', sql: 'SELECT product, SUM(revenue)\nFROM sales GROUP BY product\nORDER BY SUM(revenue) DESC;', headers: ['product', 'revenue'], rows: [['Notebook', '$1,240'], ['Desk lamp', '$860'], ['Pen set', '$320']] },
  { label: 'Which regions placed the most orders?', sql: 'SELECT region, COUNT(*)\nFROM orders GROUP BY region\nORDER BY COUNT(*) DESC;', headers: ['region', 'orders'], rows: [['West', '42'], ['Central', '35'], ['East', '28']] },
  { label: 'What is the average order value?', sql: 'SELECT ROUND(AVG(total), 2)\nAS average_order_value\nFROM orders;', headers: ['metric', 'value'], rows: [['Average order value', '$76.40']] }
];
let replayIndex = 0;
const replayFrames = [
  { bids: [37,61,81,48,67], asks: [69,45,30,58,84], event: '00 / Initial sample snapshot' },
  { bids: [65,61,81,48,67], asks: [69,45,30,58,84], event: '01 / A new bid joins the book' },
  { bids: [65,61,81,48,67], asks: [38,45,30,58,84], event: '02 / A buy order reduces ask volume' },
  { bids: [65,32,81,48,67], asks: [38,45,30,58,84], event: '03 / A cancellation removes bid volume' },
  { bids: [65,32,81,48,67], asks: [38,45,59,58,84], event: '04 / A new ask joins the book' }
];
function renderQuery(index) {
  const query = questions[index];
  document.querySelector('#query-code').textContent = query.sql;
  document.querySelector('#query-result').innerHTML = `<thead><tr>${query.headers.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${query.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>`;
}
function renderMarket() {
  const frame = replayFrames[replayIndex];
  document.querySelector('#demo-book').innerHTML = frame.bids.map((bid,index) => `<div style="--bid:${bid}%;--ask:${frame.asks[index]}%"><i></i><span>${(104.05 - index * .01).toFixed(2)}</span><b></b></div>`).join('');
  document.querySelector('#market-event').textContent = frame.event;
  document.querySelector('#step-replay').textContent = replayIndex === replayFrames.length - 1 ? '↺ Restart replay' : 'Next event →';
}
document.querySelectorAll('[data-lab]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-lab]').forEach(tab => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    if (button.dataset.lab === 'signal') {
      labStage.innerHTML = signalMarkup;
    } else if (button.dataset.lab === 'query') {
      labStage.innerHTML = `<div class="lab-query"><span class="eyebrow accent">INSPIRED BY INFERSQL</span><h2>Ask. Inspect. Understand.</h2><label class="sr-only" for="demo-question">Choose a sample question</label><select id="demo-question" class="demo-select">${questions.map((q,index) => `<option value="${index}">${q.label}</option>`).join('')}</select><pre id="query-code" class="demo-code"></pre><table id="query-result" class="demo-table" aria-label="Preset sample query result"></table><p class="demo-note">Preset examples · no AI or SQL engine running</p></div>`;
      renderQuery(0);
      document.querySelector('#demo-question').addEventListener('change', event => renderQuery(Number(event.target.value)));
    } else {
      replayIndex = 0;
      labStage.innerHTML = `<div class="lab-market"><span class="eyebrow accent">INSPIRED BY BOOKFORGE</span><h2>A market, event by event.</h2><div class="order-labels"><span>BID VOLUME</span><span>PRICE</span><span>ASK VOLUME</span></div><div id="demo-book" class="order-book" aria-label="Illustrative order book"></div><p id="market-event" class="market-event" aria-live="polite"></p><button id="step-replay" class="replay-button">Next event →</button><p class="demo-note">A simplified illustration with fictional orders.</p></div>`;
      renderMarket();
      document.querySelector('#step-replay').addEventListener('click', () => {
        replayIndex = (replayIndex + 1) % replayFrames.length;
        renderMarket();
      });
    }
  });
});

// Exact Accuracy values from the bundled CSV. Fixed PadL100, pin0.015,
// pout0.045, L1; G varies. Each selected record covers 95 one-page tasks.
const research = {
  DF: [0.6003400000000001,0.5924178947368423,0.6117284210526316,0.5979126315789474,0.593682105263158],
  TikTok: [0.7192578947368423,0.6459063157894737,0.5928147368421055,0.5646905263157895,0.5611557894736844],
  VarCNN: [0.6792242105263159,0.6383263157894737,0.6188726315789475,0.5920757894736843,0.5835305263157898],
  RF: [0.7611905263157892,0.6910705263157894,0.6424105263157893,0.6157736842105264,0.593447368421053]
};
const colors = ['#b9f5ce','#bccba2','#b3b5da','#d5b992'];
const schedules = [1,3,5,7,9];
function renderResearch(index) {
  document.querySelector('#research-bars').innerHTML = Object.entries(research).map(([model,values],i) => `<div class="research-bar"><span>${model}</span><div class="bar-track" aria-hidden="true"><div class="bar-fill" style="--value:${values[index] * 100}%;--bar-color:${colors[i]}"></div></div><span class="bar-value">${(values[index] * 100).toFixed(1)}%</span></div>`).join('');
  document.querySelector('#schedule-value').textContent = schedules[index];
  document.querySelector('#schedule').setAttribute('aria-valuetext', `G equals ${schedules[index]}`);
}
document.querySelector('#schedule').addEventListener('input', event => renderResearch(Number(event.target.value)));
renderResearch(0);

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy-email').addEventListener('click', async event => {
  const button = event.currentTarget;
  const email = 'dongquan.tran.johnny@gmail.com';
  try {
    await navigator.clipboard.writeText(email);
    button.textContent = 'Copied ✓';
    document.querySelector('#copy-status').textContent = 'Email address copied.';
    setTimeout(() => { button.innerHTML = 'Copy email <span aria-hidden="true">⧉</span>'; }, 2500);
  } catch {
    document.querySelector('#copy-status').textContent = `Copy unavailable. The email address is ${email}.`;
    button.textContent = 'Select the email to copy';
  }
});

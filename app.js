'use strict';

const github = 'https://github.com/dong-quan-tran/';
const projects = {
  loanwick: {
    "name": "LoanWick",
    "displayCategory": "FINTECH / APPLIED AI / HACKUTD 2026",
    "category": "Commercial loan review / Team project",
    "summary": "Catch conflicting loan claims. Follow the evidence. Keep people in control.",
    "stack": [
        "TypeScript",
        "React",
        "Node.js",
        "SpacetimeDB",
        "NVIDIA Nemotron",
        "Zod",
        "Vite",
        "unpdf",
        "Vitest",
        "Playwright",
        "GitHub Actions"
    ],
    "problem": "Reviewing each loan in isolation can hide conflicting equipment ownership claims and connected businesses that need to be reviewed together.",
    "build": "A React workspace brings applications, source evidence, borrower clarifications, and human reviews together. SpacetimeDB manages authorized case data and subscriptions. A Node.js worker supports NVIDIA Nemotron tool calling alongside deterministic collateral and group checks.",
    "decision": "Let rules establish supported concerns and AI help explain them. Relevant document or payment changes invalidate earlier reviews, and the server rechecks current requirements before any simulated release.",
    "evidence": "Winner of the Goldman Sachs Track at HackUTD 2026. My contributions covered shared data contracts, analysis rules, synthetic fixtures, evaluation, CI, and database integration. Tests cover evidence references, changing source data, role isolation, and browser workflows.",
    "flow": "Loan documents -> evidence-backed checks -> borrower clarification -> human review",
    "repoUrl": "https://github.com/minhle211/LoanWick-HackUTD26",
    "demo": "https://loanmebro.vip/",
    "demoLabel": "Live demo",
    "linkedin": "https://lnkd.in/p/gDeg4yS6",
    "scope": "A four-person hackathon prototype using synthetic loan data. No money moves. The card illustrates a sample ownership conflict. Document extraction supports text PDFs, JSON, and CSV; scanned PDFs and DOCX extraction are unsupported."
},
  aegis: {
    "name": "AegisLog",
    "category": "SECURITY / LOG ANALYSIS",
    "lede": "Turn noisy logs into incidents worth investigating.",
    "problem": "Authentication and web logs contain useful evidence, but related events can be scattered across thousands of entries.",
    "build": "A Python pipeline normalizes SSH, Apache, JSONL, and syslog events. FastAPI and a React interface support incident grouping, investigation, and optional AI explanations.",
    "decision": "Group related events into incidents and keep structured evidence available alongside the explanation.",
    "evidence": "The repository documents normalization, source adapters, CLI and API workflows, and automated tests. Optional AI explanations depend on the configured backend.",
    "flow": "Raw logs -> normalized events -> grouped incidents -> evidence and explanations",
    "repo": "AegisLog",
    "stack": [
        "Python",
        "FastAPI",
        "React",
        "scikit-learn",
        "Pytest"
    ],
    "scope": "An analysis and triage project. Results depend on the supplied logs and configuration."
},
  cloud: {
    "name": "CloudLink",
    "category": "AWS / NETWORK TROUBLESHOOTING",
    "lede": "Make a failed connection easier to investigate.",
    "problem": "An unreachable service can have a routing, firewall, port, or application problem. CloudLink brings the first diagnostic checks together.",
    "build": "An AWS Academy lab tests connectivity between configured instances using ping, HTTP, HTTPS, an SSH banner check, and custom TCP ports. Results include a suggested next check.",
    "decision": "Run read-only checks from the selected source instance. Explain what each protocol-specific result means without changing the network.",
    "evidence": "The README records manual baseline checks for ping and TCP port 8080. It distinguishes those checks from the newer hosted setup, which still needs end-to-end verification.",
    "flow": "Choose instances -> run a connectivity check -> interpret the result -> suggested next step",
    "repo": "cloudlink",
    "stack": [
        "AWS",
        "VPC",
        "EC2",
        "Python",
        "ICMP",
        "TCP",
        "HTTP"
    ],
    "scope": "A configured lab prototype, not an account-wide network monitoring service."
},
  lumen: {
    "name": "Lumen",
    "category": "TEAM PROJECT / FULL STACK",
    "lede": "Explore markets and portfolio accounting through paper trading.",
    "problem": "A paper-trading workflow needs consistent market data, order handling, and portfolio accounting without placing real trades.",
    "build": "A Next.js frontend connects to a Python FastAPI backend for equities and crypto data, simulated market orders, positions, and portfolio values. The repository also documents PostgreSQL persistence.",
    "decision": "Keep the client connected to backend APIs for trading and accounting, with caching and fallback data fetching to manage provider load.",
    "evidence": "The repository documents the frontend/backend monorepo, market data providers, account and position workflows, and local setup.",
    "flow": "Market data -> simulated order -> account and position updates -> portfolio dashboard",
    "repo": "Lumen-Trading-Platform",
    "stack": [
        "Python",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "SQLAlchemy",
        "PostgreSQL",
        "yfinance",
        "Binance API"
    ],
    "scope": "A team paper-trading project. It does not execute real trades."
},
  flight: {
    "name": "JSBSim",
    "category": "COURSE PROJECT / JAVA",
    "lede": "Extend a flight simulator through a shared engineering project.",
    "problem": "A class-wide flight simulation project provides a setting for turning requirements and aircraft specifications into working software.",
    "build": "The CSE 3310 project reimplements a Java desktop flight simulation tool and extends it with an XML-configured F-16 aircraft model covering aerodynamics, mass, controls, and engine behavior.",
    "decision": "Represent the aircraft through structured model configuration while working within a shared course codebase.",
    "evidence": "The README identifies the Fall 2025 Fundamentals of Software Engineering course and documents Maven commands for compiling, testing, packaging, and launching the application.",
    "flow": "Aircraft configuration -> flight dynamics model -> desktop simulation",
    "repo": "jsbsimedit2",
    "stack": [
        "Java",
        "Maven",
        "XML",
        "JSBSim",
        "Git"
    ],
    "scope": "A class-wide course project. This entry describes the shared project scope, not sole authorship."
},

  chess: {
    displayCategory: "SOFTWARE / COMPUTER VISION / HACKTX 2026",
    summary: "Chess captures become webcam-controlled battles. Even a pawn can fight back.",
    stack: ["TypeScript", "React", "Three.js", "React Three Fiber", "MediaPipe", "Node.js", "WebSockets", "Vite", "Vultr", "Muse Spark"],
    name: 'Let Him Rook', category: 'HackTX 2026 / Team project / Multiplayer',
    lede: 'Plan your move. Fight for the capture.',
    problem: 'What if capturing a chess piece required winning a real-time battle? Let Him Rook turns chess into a physical, shared experience controlled through a webcam.',
    build: 'React, TypeScript, and Three.js render the board and arenas. MediaPipe tracks hands and body movement locally. A Node.js server validates moves and combat over WebSockets, with optional Muse Spark advice.',
    decision: 'Keep the server in charge of game rules. Camera tracking provides player input, while the server validates actions and resolves combat. Optional AI advice cannot change the rules or outcomes.',
    evidence: 'I led a four-person team at HackTX 2026. The repository includes PvP, bot practice, calibration, sandbox modes, and keyboard controls. The live game is hosted on Vultr.',
    flow: 'Chess move -> capture attempt -> webcam-controlled duel -> server-validated result',
    repo: 'LetHimRook-HackTX26', linkedin: 'https://lnkd.in/p/gap5sGcY', demo: 'https://pawnhub.tech/', demoLabel: 'Play now',
    scope: 'A hackathon prototype. Tracking quality depends on lighting, framing, browser, and hardware.'
  },
  blink: {
    displayCategory: "COMPUTER VISION / ACCESSIBILITY / ROWDYHACKS XII",
    summary: "A blink becomes a letter. A letter becomes a way to communicate.",
    stack: ["Python", "OpenCV", "MediaPipe", "Flask", "JavaScript", "Morse decoding", "SymSpell", "Pytest"],
    name: 'BlinkChilling', category: 'RowdyHacks XII / Team project / Accessibility',
    lede: 'A blink becomes a letter. A letter becomes a message.',
    problem: 'Speaking or typing is not always possible. BlinkChilling explores intentional eye blinks as an alternative way to compose and confirm messages.',
    build: 'Python, OpenCV, and MediaPipe track eye landmarks. A calibrated blink state machine recognizes shortcuts and Morse input. A Flask interface supports shortcut editing and a local text room.',
    decision: 'Keep the user in control of the final message. Corrections are optional, and the camera is processed locally. Only confirmed text is shared with the text room.',
    evidence: 'Built as a team prototype for RowdyHacks XII. The project documents calibration, blink timing, local messaging, and tests for decoding and correction choices.',
    flow: 'Webcam -> eye landmarks -> blink patterns -> message review -> confirmed text',
    repo: 'BlinkChilling-RowdyHacksXII', linkedin: 'https://lnkd.in/p/gCyKhfMy',
    scope: 'Alerts are simulated. This prototype does not call emergency services and is not a medical device.'
  },
  rift: {
    name: 'PhaseRift', category: 'Browser game / Three.js / Multiplayer',
    lede: 'A browser FPS with another way through.',
    problem: 'PhaseRift explores how portals and real-time multiplayer combat can work together in a browser game.',
    build: 'Three.js renders the 3D world, while Node.js and WebSocket networking synchronize game state and combat.',
    decision: 'Connect portal movement and hitscan combat to shared real-time game state.',
    evidence: 'The repository describes a browser multiplayer FPS with portals, hitscan combat, and synchronized state. Explore the source for implementation details.',
    flow: 'Player input -> networked game state -> combat and portals -> 3D rendering',
    repo: 'phaserift',
    scope: 'An experimental project. No public deployment URL is listed in the repository metadata.'
  },
  sentinel: {
    displayCategory: "SECURITY / MACHINE LEARNING",
    summary: "From a suspicious link to an understandable risk assessment.",
    stack: ["Python", "React", "FastAPI", "XGBoost", "scikit-learn", "SQLite", "URLhaus", "Pandas", "Vite", "Pytest", "Vitest"],
    name: 'SentinelTI', category: 'Security · Applied ML · Full stack',
    lede: 'A URL risk assessment should explain itself.',
    problem: 'A suspicious link is easy to share and harder to judge. SentinelTI brings model predictions, structured rules, and threat intelligence into one investigation workflow.',
    build: 'The platform connects a React interface to a FastAPI service, XGBoost classification, and a SQLite-backed URLhaus store. A CLI supports ingestion and scoring workflows.',
    decision: 'Keep the deterministic scoring pipeline in control. Optional AI summaries can explain the evidence, but cannot change the model score, final label, or risk level.',
    evidence: 'The repository documents a historical 135,053-URL held-out evaluation and separate scoring benchmarks. Its evaluation notes also examine URL-format shortcuts and limits to generalization. These are scoped measurements, not a guarantee for unseen links.',
    flow: 'URL → normalization → model + heuristics → risk fusion → explanation',
    repo: 'SentinelTI', demo: 'https://sentinelti.vercel.app/', demoLabel: 'Live demo',
    scope: 'The card is a hand-built illustration using a reserved .example domain; it does not run the classifier.'
  },
  infer: {
    displayCategory: "DATA SYSTEMS / APPLIED AI",
    summary: "Ask a question. Inspect the SQL. Understand your data.",
    stack: ["Python", "TypeScript", "React", "FastAPI", "Apache Arrow", "DataFusion", "SQLGlot", "Ollama", "Gemini API", "OpenTelemetry", "Vite", "Pytest"],
    name: 'InferSQL', category: 'Data systems · AI · Full stack',
    lede: 'Make the path from a question to an answer inspectable.',
    problem: 'Natural-language queries are useful only if the generated SQL respects the actual schema and the intended operation. InferSQL makes validation and execution visible in one workbench.',
    build: 'A React workbench and FastAPI API sit over Apache Arrow datasets and DataFusion execution. SQLGlot checks SQL, while a schema-aware copilot supports local Ollama and optional external providers.',
    decision: 'Validate before executing. Generated SQL passes intent, parsing, and schema checks, with bounded repair attempts rather than unlimited retries.',
    evidence: 'The README reports 33/33 execution-equivalent passes on a small curated, two-table copilot evaluation. It also documents local 1M-row query benchmarks. Both results are limited to their recorded test conditions.',
    flow: 'Question → schema context → SQL candidate → validation → DataFusion → rows',
    repo: 'InferSQL',
    scope: 'The card uses an illustrative query and sample results. It does not call an AI provider or execute SQL.'
  },
  book: {
    displayCategory: "C++ / MARKET SYSTEMS",
    summary: "Replay a market, one event at a time. See what emerges.",
    stack: ["C++20", "Python", "pybind11", "CMake", "FastAPI", "React", "XGBoost", "MLflow", "SHAP", "GoogleTest", "Docker Compose", "GitHub Actions"],
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
    displayCategory: "PRODUCT / HACKRICE 16",
    summary: "Scattered deadlines, brought together with their evidence.",
    stack: ["Python", "TypeScript", "Next.js", "React", "Tailwind CSS", "FastAPI", "SQLAlchemy", "SQLite", "Ollama", "Gemini API", "Google OAuth", "Google Calendar API", "Gmail API", "Canvas API"],
    name: 'DueScope', category: 'Product engineering · HackRice 16 · Early beta',
    lede: 'A changed deadline should come with evidence.',
    problem: 'Academic deadlines and job-search updates arrive through different sources. DueScope brings them into one reviewable workflow while retaining the original evidence.',
    build: 'The project covers academic imports, pasted updates, deadline extraction, conflict detection, history, ICS export, and locally configured Gmail and Google Calendar integrations.',
    decision: 'Require a review before external calendar changes. Conflicting dates become proposals, and accepted changes retain the previous deadline in history.',
    evidence: 'The public demo uses sample data. Real integrations require a privately configured instance. The linked repository documents what works locally and what remains early beta.',
    flow: 'Source → evidence + date extraction → conflict check → review → approved export',
    repo: 'DueScope-HackRice16', linkedin: 'https://lnkd.in/p/gvRdyX3w', demo: 'https://due-scope-hack-rice.vercel.app/demo',
    scope: 'Both DueScope repositories are presented as one project. The homepage shows a sample workflow, not a personal inbox.'
  }
};

const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    document.querySelector('#dialog-content').innerHTML = `
      <h2 id="dialog-title">${project.name}</h2>
      <div class="tags"><span>${project.displayCategory || project.category}</span></div>
      <p class="dialog-lede">${project.summary || project.lede}</p>
      ${project.stack ? `<h3>Tools & technologies</h3><div class="tags dialog-stack" aria-label="Tools and technologies">${project.stack.map(tool => `<span>${tool}</span>`).join('')}</div>` : ''}
      <h3>The problem</h3><p>${project.problem}</p>
      <h3>The build</h3><p>${project.build}</p>
      <div class="dialog-flow">${project.flow}</div>
      <h3>A decision that matters</h3><p>${project.decision}</p>
      <h3>Evidence & limits</h3><p>${project.evidence}</p>
      <div class="dialog-links"><a class="button primary" href="${project.repoUrl || github + project.repo}" target="_blank" rel="noopener noreferrer">Explore the repository</a>${project.demo ? `<a class="text-link" href="${project.demo}" target="_blank" rel="noopener noreferrer">${project.demoLabel || 'Sample-data demo'}</a>` : ''}</div>
      ${project.linkedin ? `<a class="project-post text-link" href="${project.linkedin}" target="_blank" rel="noopener noreferrer">Read the project post on LinkedIn</a>` : ''}
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

// Exact Accuracy values from the bundled CSV. Fixed PadL100, pin0.015,
// pout0.045, L1; G varies. Each selected record covers 95 one-page tasks.
const research = {
  DF: [0.6003400000000001,0.5924178947368423,0.6117284210526316,0.5979126315789474,0.593682105263158],
  TikTok: [0.7192578947368423,0.6459063157894737,0.5928147368421055,0.5646905263157895,0.5611557894736844],
  VarCNN: [0.6792242105263159,0.6383263157894737,0.6188726315789475,0.5920757894736843,0.5835305263157898],
  RF: [0.7611905263157892,0.6910705263157894,0.6424105263157893,0.6157736842105264,0.593447368421053]
};
const colors = ['#8ab4ff','#bccba2','#b3b5da','#d5b992'];
const schedules = [1,3,5,7,9];
function renderResearch(index) {
  document.querySelector('#research-bars').innerHTML = Object.entries(research).map(([model,values],i) => `<div class="research-bar"><span>${model}</span><div class="bar-track" aria-hidden="true"><div class="bar-fill" style="--value:${values[index] * 100}%;--bar-color:${colors[i]}"></div></div><span class="bar-value">${(values[index] * 100).toFixed(1)}%</span></div>`).join('');
  document.querySelector('#schedule-value').textContent = schedules[index];
  document.querySelector('#schedule').setAttribute('aria-valuetext', `G equals ${schedules[index]}`);
}
document.querySelector('#schedule').addEventListener('input', event => renderResearch(Number(event.target.value)));
renderResearch(0);

document.querySelector('#year').textContent = new Date().getFullYear();


// Always-visible horizontal projects with dot-and-pill navigation.
const moreTrack = document.querySelector('#more-projects-track');
const moreDots = [...document.querySelectorAll('.more-dot')];
const morePrevious = document.querySelector('#more-prev');
const moreNext = document.querySelector('#more-next');
let moreActivePosition = 0;
function updateMorePosition() {
  const maximum = Math.max(0, moreTrack.scrollWidth - moreTrack.clientWidth);
  const ratio = maximum ? Math.max(0, Math.min(1, moreTrack.scrollLeft / maximum)) : 0;
  moreActivePosition = Math.round(ratio * (moreDots.length - 1));
  moreDots.forEach((dot, index) => {
    const active = index === moreActivePosition;
    dot.classList.toggle('active', active);
    if (active) dot.setAttribute('aria-current', 'step');
    else dot.removeAttribute('aria-current');
    dot.disabled = maximum === 0;
  });
  morePrevious.disabled = maximum === 0 || moreTrack.scrollLeft <= 1;
  moreNext.disabled = maximum === 0 || moreTrack.scrollLeft >= maximum - 1;
}
function goToMorePosition(index) {
  const maximum = Math.max(0, moreTrack.scrollWidth - moreTrack.clientWidth);
  const target = Math.max(0, Math.min(moreDots.length - 1, index));
  moreTrack.scrollTo({
    left: maximum * target / (moreDots.length - 1),
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  });
}
moreDots.forEach((dot, index) => dot.addEventListener('click', () => goToMorePosition(index)));
morePrevious.addEventListener('click', () => goToMorePosition(moreActivePosition - 1));
moreNext.addEventListener('click', () => goToMorePosition(moreActivePosition + 1));
let moreScrollFrame = 0;
moreTrack.addEventListener('scroll', () => {
  if (moreScrollFrame) return;
  moreScrollFrame = requestAnimationFrame(() => { moreScrollFrame = 0; updateMorePosition(); });
}, { passive: true });
moreTrack.addEventListener('keydown', event => {
  if (event.target !== moreTrack) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    goToMorePosition(moreActivePosition + (event.key === 'ArrowRight' ? 1 : -1));
  } else if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault();
    goToMorePosition(event.key === 'Home' ? 0 : moreDots.length - 1);
  }
});
new ResizeObserver(updateMorePosition).observe(moreTrack);
updateMorePosition();

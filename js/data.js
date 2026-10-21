/* ============================================================
   NIGHTSHIFT GHOULS — content + config (a Project SAGE fork).
   THIS IS THE FILE YOU EDIT. Card content mirrors the SAGE
   household roles (docs/dashboard/cards.json).
   Fields:
     tagline  the bot's own words (verbatim, in quotes on the card)
     tag      lane chip: GATE · WATCH · KITCHEN · DOCS · LEDGER · MARKETS · HOME · HEALTH · SPEC
     lane     what the bot owns — one sentence, verb-first
     schedule when it runs (24h local time)
     limits   HARD LIMITS — what it must never do (rendered in red)
     reports  where its output lands
   ============================================================ */

const SITE = {
  name: "THE NIGHTSHIFT GHOULS",
  tagline: "// ai bot team roster — a Project SAGE fork",
  logo: "assets/nightshift-ghouls-logo.jpg",
  stripLeft: "NIGHTSHIFT GHOULS · CREW: 9 · PROJECT SAGE",
  stripRight: "dtg",
  lsPrefix: "gng:",
  footer: "THE NIGHTSHIFT GHOULS — static roster, no telemetry, no credentials. Every bot observes and reports; only humans approve.",
};

const PAGES = [
  { route: "/",         label: "Roster",   type: "custom", render: "roster" },
  { route: "/doctrine", label: "Doctrine", type: "custom", render: "doctrine" },
];

const BOTS = [
  {
    name: "Count Grokula", img: "assets/count-grokula.jpg", tag: "GATE",
    tagline: "The castle gate opens only by my word.",
    lane: "Chairs the crew — routes every request, keeps the task board, and writes the owner-facing digest.",
    schedule: "05:30 Morning Brief · 18:30 Evening Command Report · on-demand routing",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "Never stores credentials or full account numbers",
      "Never creates a bot without per-bot owner approval",
    ],
    reports: "Owner (only reporting line)",
  },
  {
    name: "Banshee", img: "assets/banshee.jpg", tag: "WATCH",
    tagline: "I wail before the storm arrives.",
    lane: "Sounds the early warning — weather briefs and watch / warning / advisory alerts for the home region.",
    schedule: "05:00 and 18:15 briefs · alerts as issued · hourly while severe",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "Briefs and alerts only — no device or home control",
    ],
    reports: "Count Grokula → owner",
  },
  {
    name: "Cauldron", img: "assets/cauldron.jpg", tag: "KITCHEN",
    tagline: "Something wicked good is simmering.",
    lane: "Brews the week — menus, pantry inventory, grocery lists, and price comparison across approved stores.",
    schedule: "Weekly grocery list Thu/Fri · Thursday review package",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "Never adds to cart, checks out, or changes pickup slots",
      "Never invents a price or pantry stock",
    ],
    reports: "Count Grokula → owner",
  },
  {
    name: "Scrollkeeper", img: "assets/scrollkeeper.jpg", tag: "DOCS",
    tagline: "Every deadline inked in the ancient scrolls.",
    lane: "Keeps the record — school calendars, forms, and deadlines, plus repo change audits and drafted issues.",
    schedule: "Evening school refresh · weekly repo update PR",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "Never replies to school, signs, or submits forms",
      "Never merges — drafts only",
    ],
    reports: "Count Grokula → owner",
  },
  {
    name: "Coin Goblin", img: "assets/coin-goblin.jpg", tag: "LEDGER",
    tagline: "I count every coin, and touch none.",
    lane: "Counts the hoard — cash flow, bills, budgets, and forecasts from read-only figures.",
    schedule: "Monday status · monthly forecast · priority bill alerts",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "Read-only finance access; sole holder of the finance connector",
      "Missing inputs render 'not supplied' — never invented",
    ],
    reports: "Count Grokula → owner",
  },
  {
    name: "Oracle Wisp", img: "assets/oracle-wisp.jpg", tag: "MARKETS",
    tagline: "I glimpse the market's mist, never its till.",
    lane: "Reads the mist — pre-market research and earnings flashes for the owner's watchlist.",
    schedule: "Daily pre-market report · earnings flashes (quiet-hours breaker)",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "No brokerage connection",
      "Research only — no buy/sell instructions",
    ],
    reports: "Count Grokula → owner",
  },
  {
    name: "Gremlin", img: "assets/gremlin.jpg", tag: "HOME",
    tagline: "I watch the wires so nothing goes bump.",
    lane: "Walks the wires — energy reports, device and network exceptions, and backups per the systems register.",
    schedule: "Daily and weekly reports · alerts on exception",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "Observe and report only — every control or setpoint change needs human approval",
    ],
    reports: "Count Grokula → owner",
  },
  {
    name: "Doc Phantom", img: "assets/doc-phantom.jpg", tag: "HEALTH",
    tagline: "A quiet presence keeping watch over the living.",
    lane: "Makes the rounds — health research, schedules, and briefs for opted-in members, stored locally.",
    schedule: "Periodic health briefs · urgent health routing",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "No clinical or booking action without owner approval",
      "Health data never enters git or team-wide artifacts",
    ],
    reports: "Count Grokula → owner (private)",
  },
  {
    name: "Specbuster", img: "assets/specbuster.jpg", tag: "SPEC",
    tagline: "I bust bad specs before they haunt production.",
    lane: "Special unit — reviews specs and security posture for owner-assigned projects and writes plans only.",
    schedule: "Idle — activates only under an owner-approved statement of work",
    limits: [
      "Never moves money, transfers funds, or trades — read-only",
      "Never sends, posts, pays, or orders without per-instance human approval",
      "Holds no credentials — owner-attached artifacts only",
      "Never pushes, merges, or deploys",
    ],
    reports: "Count Grokula → owner",
  },
];

/* Why the team works — rendered at the foot of the Roster and on Doctrine */
const DOCTRINE = [
  { title: "One Lane Each", tag: "DESIGN", body: "Every bot owns exactly one household lane. No bot's duties overlap another's authority, so a misbehaving agent is contained to its lane by construction — least privilege as an org chart." },
  { title: "Observe, Report, Propose", tag: "DESIGN", body: "Bots research, track, and draft. Humans approve, send, pay, and decide. No agent holds authority over money, messages, devices, or access — the hard limits on each card are enforced, not aspirational." },
  { title: "Hard Limits Are Contracts", tag: "CONTROL", body: "Each card's red list is the bot's permission boundary: read-only money access, no trades, and no send or payment without per-instance human approval. A limit that isn't enforced is just a wish." },
  { title: "Predictable Cadence", tag: "OPS", body: "Scheduled briefs instead of always-on autonomy, with quiet hours that only declared priority alerts may break. Output is predictable and auditable, and silence outside the schedule is itself a signal." },
  { title: "Overlapping Watch, Separate Voices", tag: "OPS", body: "Banshee watches the sky while Gremlin watches the house — a storm warning and a power or network exception are two independent signals, so one quiet watcher never means blindness." },
  { title: "One Reporting Line", tag: "AUDIT", body: "Every specialist reports through Count Grokula, who is the owner's single reporting line. Drafts, gap cards, and handoffs are recorded so every decision is attributable and reviewable." },
];

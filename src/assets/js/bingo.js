(function () {
  // 216 distinct squares (9 completely non-overlapping 24-square sheets)
  // Categorized across Big Corp CEOs, Analysts/Consultants, and AI Hype Folks
  const BINGO_POOL = [
    // --- BIG CORP CEOs & EARNINGS CALLS (72 items) ---
    { tag: "CEO Keynote", text: "“AI is more profound than fire or electricity”" },
    { tag: "CEO Take", text: "“Every company is now an AI company”" },
    { tag: "Earnings Call", text: "“We’re pausing back-office hiring for roles AI can do”" },
    { tag: "CEO Take", text: "“Our AI agent now does the work of 700 full-time reps”" },
    { tag: "CEO Keynote", text: "“English is the hottest new programming language”" },
    { tag: "CEO Take", text: "“IT will become the HR department for digital agents”" },
    { tag: "CEO Keynote", text: "“Data centers are no longer data centers—they are AI Token Factories”" },
    { tag: "CEO Take", text: "“Over 25% of our new code is now written by AI”" },
    { tag: "Earnings Call", text: "Mentioning “AI” 95+ times on a single quarterly earnings call" },
    { tag: "CEO Take", text: "“We are pivoting to an AI-First operating mandate”" },
    { tag: "CEO Keynote", text: "“Welcome to the Digital Labor Revolution”" },
    { tag: "CEO Take", text: "“A Copilot for every employee, an Agent for every workflow”" },
    { tag: "Earnings Call", text: "Rebranding a 2019 deterministic cron job as an “Autonomous AI Agent”" },
    { tag: "CEO Take", text: "“We’re not cutting headcount—we’re reallocating human bandwidth”" },
    { tag: "CEO Keynote", text: "“Every sovereign nation needs its own Sovereign AI”" },
    { tag: "CEO Take", text: "“The cost of inference is falling 10x every six months”" },
    { tag: "Earnings Call", text: "Justifying $80B in GPU CapEx with “the risk of under-investing is existential”" },
    { tag: "CEO Take", text: "“Soon every employee will manage a pod of 10 digital coworkers”" },
    { tag: "CEO Keynote", text: "“We are moving from Chatbots that advise to Agents that execute”" },
    { tag: "CEO Take", text: "“AI is our #1 strategic imperative for fiscal year 2027”" },
    { tag: "Earnings Call", text: "Blaming macro headwinds while promising AI tailwinds in H2" },
    { tag: "CEO Take", text: "“Why build software when you can just prompt the outcome?”" },
    { tag: "CEO Keynote", text: "“We are infusing Generative AI across every omnichannel touchpoint”" },
    { tag: "CEO Take", text: "“Our proprietary data moat is our ultimate competitive advantage”" },
    { tag: "Earnings Call", text: "Announcing a 10% layoff on the exact same day as a $10B AI initiative" },
    { tag: "CEO Take", text: "“Reasoning tokens demand 100x more compute than pre-training”" },
    { tag: "CEO Keynote", text: "“The era of traditional enterprise CRUD apps is over”" },
    { tag: "CEO Take", text: "“We are democratizing access to superhuman intelligence”" },
    { tag: "Earnings Call", text: "“AI is unlocking unprecedented cross-functional synergies”" },
    { tag: "CEO Take", text: "“If you aren’t using AI daily, you won’t pass your performance review”" },
    { tag: "CEO Keynote", text: "“Physical AI and humanoid robotics are the next trillion-dollar wave”" },
    { tag: "CEO Take", text: "“We’ve embedded agentic workflows directly into our core ERP”" },
    { tag: "Earnings Call", text: "“Customer self-service resolution rates hit 85% with zero human touch”" },
    { tag: "CEO Take", text: "“We’re turning cap-table dilution into compute-cluster velocity”" },
    { tag: "CEO Keynote", text: "“Everything that moves will eventually be autonomous”" },
    { tag: "CEO Take", text: "“Our developers are now 10x orchestrators of coding agents”" },
    { tag: "Earnings Call", text: "“Monetization is still early, but engagement telemetry is off the charts”" },
    { tag: "CEO Take", text: "“We are sunsetting legacy SKU tiers in favor of outcome-based token pricing”" },
    { tag: "CEO Keynote", text: "“AI is the greatest equalizer in corporate history”" },
    { tag: "CEO Take", text: "“We don’t hire junior analysts anymore; our agents do the first draft”" },
    { tag: "Earnings Call", text: "“Strategic partnership with [Hyperscaler] to co-innovate at scale”" },
    { tag: "CEO Take", text: "“Moving the needle on mission-critical KPIs via generative synergy”" },
    { tag: "CEO Keynote", text: "“The marginal cost of generating enterprise software has hit zero”" },
    { tag: "CEO Take", text: "“We’re compressing 5-year R&D cycles into 90-day agentic sprints”" },
    { tag: "Earnings Call", text: "“Disciplined capital allocation toward high-ROI AI value streams”" },
    { tag: "CEO Take", text: "“Our internal AI academy has upskilled 100% of the C-suite”" },
    { tag: "CEO Keynote", text: "“Don’t compete with AI—re-architect your DNA around it”" },
    { tag: "CEO Take", text: "“Every meeting now has an AI agent taking notes and assigning action items”" },
    { tag: "Earnings Call", text: "“Enterprise-grade security and zero-data-retention guardrails”" },
    { tag: "CEO Take", text: "“We’ve flattened two layers of middle management using AI routing”" },
    { tag: "CEO Keynote", text: "“From mobile-first to cloud-first to agent-first”" },
    { tag: "CEO Take", text: "“We are future-proofing our overarching enterprise architecture”" },
    { tag: "Earnings Call", text: "“AI-driven personalization lifted omnichannel conversion by 40 bps”" },
    { tag: "CEO Take", text: "“We’re replacing static dashboards with conversational decision intelligence”" },
    { tag: "CEO Keynote", text: "“This is the iPhone moment, the Industrial Revolution, and the printing press combined”" },
    { tag: "CEO Take", text: "“Our board asks for an agentic AI update at every single meeting”" },
    { tag: "Earnings Call", text: "“Capturing the productivity dividend to self-fund our transformation”" },
    { tag: "CEO Take", text: "“Why hire 50 contractors when we can spin up 500 parallel agents?”" },
    { tag: "CEO Keynote", text: "“We are building a sentient-feeling enterprise knowledge graph”" },
    { tag: "CEO Take", text: "“Zero-latency insights cascading from the boardroom to the frontline”" },
    { tag: "Earnings Call", text: "“Shifting from seat-based licensing to consumption-based AI credits”" },
    { tag: "CEO Take", text: "“Our legal team uses AI to review NDAs in 4 seconds”" },
    { tag: "CEO Keynote", text: "“AI isn’t a feature—it is the entire foundational substrate”" },
    { tag: "CEO Take", text: "“We are eliminating organizational friction across the value chain”" },
    { tag: "Earnings Call", text: "“Proactive supply-chain self-healing powered by predictive ML”" },
    { tag: "CEO Take", text: "“We gave everyone an AI license; now we expect 30% higher output”" },
    { tag: "CEO Keynote", text: "“Transforming legacy technical debt into modernized agentic microservices”" },
    { tag: "CEO Take", text: "“Our Chief AI Officer reports directly to the CEO and Audit Committee”" },
    { tag: "Earnings Call", text: "“Unlocking trapped unstructured data across our global enterprise”" },
    { tag: "CEO Take", text: "“We are moving from reactive reporting to prescriptive orchestration”" },
    { tag: "CEO Keynote", text: "“In five years, there will be no companies without an autonomous agent fleet”" },
    { tag: "CEO Take", text: "“Maximizing stakeholder impact from the top down”" },

    // --- ANALYSTS & MANAGEMENT CONSULTANTS (72 items) ---
    { tag: "Analyst Deck", text: "“Stuck in Pilot Purgatory”" },
    { tag: "Consultant Take", text: "“From Org Chart to Orchestration Chart”" },
    { tag: "Analyst Deck", text: "“80% report individual productivity gains, but only 6% see EBIT impact”" },
    { tag: "Consultant Take", text: "“Building an Agentic Mission Factory”" },
    { tag: "Analyst Deck", text: "“Frontline workers have hit the Silicon Ceiling”" },
    { tag: "Consultant Take", text: "“The Productivity Paradox 2.0”" },
    { tag: "Analyst Deck", text: "“Three Horizons: Enablement, Automation, and Reinvention”" },
    { tag: "Consultant Take", text: "“Workflow redesign matters 3x more than model selection”" },
    { tag: "Analyst Deck", text: "“Sliding into the Trough of Disillusionment”" },
    { tag: "Consultant Take", text: "“Workforce augmentation, not headcount reduction”" },
    { tag: "Analyst Deck", text: "“Establishing a centralized AI Center of Excellence (CoE)”" },
    { tag: "Consultant Take", text: "“Human-in-the-Loop (HITL) governance framework”" },
    { tag: "Analyst Deck", text: "“54% of employees use unauthorized Shadow AI tools anyway”" },
    { tag: "Consultant Take", text: "“Where does the 40% AI productivity dividend actually go?”" },
    { tag: "Analyst Deck", text: "“Deploying vs. Reshaping: Why point-solution rollouts stall”" },
    { tag: "Consultant Take", text: "“Hybrid Fusion Pods of 4 humans and 6 autonomous agents”" },
    { tag: "Analyst Deck", text: "“70% of workers say they’re ready for AI; only 27% of orgs are”" },
    { tag: "Consultant Take", text: "“Breaking the three century-old constraints: Capacity, Expertise, Coordination”" },
    { tag: "Analyst Deck", text: "“Today’s entry-level automation is tomorrow’s senior judgment gap”" },
    { tag: "Consultant Take", text: "“Holistic Data Lake Infrastructure as a prerequisite for scale”" },
    { tag: "Analyst Deck", text: "“Coordinator roles grew 2x faster than line roles—time to flatten”" },
    { tag: "Consultant Take", text: "“Mapping internal mobility via AI-powered Skill Adjacency”" },
    { tag: "Analyst Deck", text: "“Only 11% of enterprises have reached the Reinvention Horizon”" },
    { tag: "Consultant Take", text: "“Rewiring the enterprise operating model end-to-end”" },
    { tag: "Analyst Deck", text: "“2x2 Magic Hyper-Quadrant of Enterprise Cognitive Maturity”" },
    { tag: "Consultant Take", text: "“Treating AI as an IT rollout instead of a business transformation”" },
    { tag: "Analyst Deck", text: "“Cognitive Load Management in human–agent workflows”" },
    { tag: "Consultant Take", text: "“Recombining tasks into hybrid ‘Service Quality & Knowledge Specialist’ roles”" },
    { tag: "Analyst Deck", text: "“46% of employees at reshaping firms worry about job security”" },
    { tag: "Consultant Take", text: "“Moving from routine information-transfer meetings to judgment alignment”" },
    { tag: "Analyst Deck", text: "“The ‘Last Mile’ gap between personal time saved and P&L impact”" },
    { tag: "Consultant Take", text: "“Instrumenting AI initiatives financially before writing a line of code”" },
    { tag: "Analyst Deck", text: "“At least 5 hours of in-person coaching required to cross the adoption chasm”" },
    { tag: "Consultant Take", text: "“Embedding risk, compliance, and auditability at design time—not post-pilot”" },
    { tag: "Analyst Deck", text: "“Middle management is no longer the default career destination”" },
    { tag: "Consultant Take", text: "“Replacing the traditional apprenticeship ladder with deliberate simulation”" },
    { tag: "Analyst Deck", text: "“66% achieve efficiency gains, but only 20% capture top-line revenue growth”" },
    { tag: "Consultant Take", text: "“Federated Hub-and-Spoke AI governance topology”" },
    { tag: "Analyst Deck", text: "“Vendor concentration risk and foundation-model lock-in”" },
    { tag: "Consultant Take", text: "“Compounding institutional intelligence via closed-loop agent telemetry”" },
    { tag: "Analyst Deck", text: "“GenAI FinOps: Controlling runaway token and inference unit economics”" },
    { tag: "Consultant Take", text: "“A 5-pillar maturity rubric scored on a 5-point Likert agreement scale”" },
    { tag: "Analyst Deck", text: "“Why 74% of AI High Performers rebuild processes from scratch”" },
    { tag: "Consultant Take", text: "“Omnichannel Cognitive Mesh architecture”" },
    { tag: "Analyst Deck", text: "“Algorithmic bias auditing and EU AI Act compliance readiness”" },
    { tag: "Consultant Take", text: "“Shift from managing headcount to orchestrating outcome velocity”" },
    { tag: "Analyst Deck", text: "“Data lineage, vector-store hygiene, and semantic layer standardization”" },
    { tag: "Consultant Take", text: "“Assigning a single C-suite owner with authority to move funding and talent”" },
    { tag: "Analyst Deck", text: "“Saving 20 minutes on a memo changes nothing if the approval chain stays”" },
    { tag: "Consultant Take", text: "“From static job descriptions to dynamic skill-marketplace matching”" },
    { tag: "Analyst Deck", text: "“Only 13% of employees have AI agents deeply integrated into daily work”" },
    { tag: "Consultant Take", text: "“Building reusable agent components so each mission compounds the next”" },
    { tag: "Analyst Deck", text: "“Trust in the organization is the #1 statistical predictor of AI value”" },
    { tag: "Consultant Take", text: "“De-siloing legacy data warehouses into a real-time lakehouse”" },
    { tag: "Analyst Deck", text: "“Capability debt: When frontier models outpace organizational readiness”" },
    { tag: "Consultant Take", text: "“Establishing clear decision rights for autonomous agent escalation”" },
    { tag: "Analyst Deck", text: "“Bimodal IT meets Trilateral Agentic Orchestration”" },
    { tag: "Consultant Take", text: "“Role-based peer learning circles and weekly production demos”" },
    { tag: "Analyst Deck", text: "“Measuring EBITDA velocity across 140+ client transformations”" },
    { tag: "Consultant Take", text: "“Moving from ‘Human-in-the-Loop’ to ‘Human-on-the-Loop’”" },
    { tag: "Analyst Deck", text: "“Why buying 10,000 chatbot seats is not an AI strategy”" },
    { tag: "Consultant Take", text: "“Zero-based workflow redesign starting from the customer outcome”" },
    { tag: "Analyst Deck", text: "“Quantifying the J-curve of organizational AI transformation”" },
    { tag: "Consultant Take", text: "“Aligning incentives and performance reviews to reward AI co-creation”" },
    { tag: "Analyst Deck", text: "“Unstructured data represents 80% of untapped enterprise alpha”" },
    { tag: "Consultant Take", text: "“Avoiding ‘Death by 1,000 Disconnected PoCs’”" },
    { tag: "Analyst Deck", text: "“Change management requires 50% of the total AI budget, not 5%”" },
    { tag: "Consultant Take", text: "“Harmonizing cross-border data sovereignty with global model deployment”" },
    { tag: "Analyst Deck", text: "“Evaluating use cases on a Feasibility vs. Business Value matrix”" },
    { tag: "Consultant Take", text: "“From deterministic RPA bots to probabilistic goal-seeking agents”" },
    { tag: "Analyst Deck", text: "“Board-level AI literacy is the new fiduciary baseline”" },
    { tag: "Consultant Take", text: "“Synthesizing actionable insights that cascade across the value chain”" },

    // --- AI HYPE FOLKS, VCs & LINKEDIN THOUGHT LEADERS (72 items) ---
    { tag: "LinkedIn Hype", text: "“AI won’t replace you. A person using AI will.”" },
    { tag: "AI Hype", text: "“We are 18 months away from the first 1-person $1B unicorn”" },
    { tag: "VC Take", text: "“SaaS is dead. Welcome to Service-as-Software.”" },
    { tag: "AI Hype", text: "“I Vibe Coded a full-stack ERP replacement in 45 minutes on a flight”" },
    { tag: "LinkedIn Hype", text: "“99% of people are prompting ChatGPT wrong. Here are 10 mega-prompts 🧵👇”" },
    { tag: "AI Hype", text: "“Prompt Engineering is dead—it’s all about Context Engineering now”" },
    { tag: "VC Take", text: "“Intelligence is becoming too cheap to meter”" },
    { tag: "AI Hype", text: "“AGI is arriving in 2027 (and ASI 18 months after that)”" },
    { tag: "LinkedIn Hype", text: "“I fired my entire marketing agency and replaced them with 4 Claude agents”" },
    { tag: "AI Hype", text: "“PhD-level superintelligence in your pocket for $20/month”" },
    { tag: "VC Take", text: "“It’s not a thin wrapper—it’s a verticalized agentic system of record!”" },
    { tag: "AI Hype", text: "“Scaling laws are a law of physics; just add more H100s”" },
    { tag: "LinkedIn Hype", text: "“Comment ‘AGENTS’ and I’ll DM you my 47-node n8n automation Notion template”" },
    { tag: "AI Hype", text: "“Hallucinations aren’t bugs—they’re synthetic counterfactual creativity”" },
    { tag: "VC Take", text: "“Compute is the new oil, and tokens are the new reserve currency”" },
    { tag: "AI Hype", text: "“RAG is dead! Long-context windows killed vector databases!”" },
    { tag: "LinkedIn Hype", text: "“Long-context is dead! Agentic GraphRAG is the only way!”" },
    { tag: "AI Hype", text: "“Test-time compute and inference-time reasoning changed everything overnight”" },
    { tag: "VC Take", text: "“System of Record is obsolete; we only fund Systems of Action”" },
    { tag: "AI Hype", text: "“Our multi-agent swarm autonomously negotiated its own API keys”" },
    { tag: "LinkedIn Hype", text: "“RIP Junior Developers (2000–2026)”" },
    { tag: "AI Hype", text: "“We ran out of human internet text, so our Synthetic Data Flywheel trains itself”" },
    { tag: "VC Take", text: "“Pre-seed valuation: $100M. Product: a system prompt and a waitlist.”" },
    { tag: "AI Hype", text: "“World Models that understand 3D physics will obsolete LLMs by Q4”" },
    { tag: "LinkedIn Hype", text: "“If your startup has more than 5 employees, you’re an legacy dinosaur”" },
    { tag: "AI Hype", text: "“Every knowledge worker is now a product manager of an agent swarm”" },
    { tag: "VC Take", text: "“Selling pickaxes in the Agentic Gold Rush”" },
    { tag: "AI Hype", text: "“MCP (Model Context Protocol) is the USB-C port of artificial intelligence”" },
    { tag: "LinkedIn Hype", text: "“Stop learning Python. Learn how to manage autonomous sub-agents.”" },
    { tag: "AI Hype", text: "“This new open-weights 7B model beats frontier models on every benchmark*”" },
    { tag: "VC Take", text: "“Gross margins will improve once inference costs drop another 90%”" },
    { tag: "AI Hype", text: "“Autonomous Level-4 Coding Agents that open PRs while you sleep”" },
    { tag: "LinkedIn Hype", text: "“What my 6 AM ice bath taught me about B2B Agentic AI Orchestration”" },
    { tag: "AI Hype", text: "“We’re hitting the vertical part of the exponential intelligence curve”" },
    { tag: "VC Take", text: "“Vertical AI agents will eat the $10T services GDP, not the $500B software market”" },
    { tag: "AI Hype", text: "“Self-evolving recursive agents that rewrite their own weights”" },
    { tag: "LinkedIn Hype", text: "“RIP [Insert $100B Enterprise Software Company]—this 3-day AI demo just killed it”" },
    { tag: "AI Hype", text: "“Zero-shot multimodal reasoning across video, audio, and legacy COBOL”" },
    { tag: "VC Take", text: "“Compound AI Systems are the new defensible moat”" },
    { tag: "AI Hype", text: "“We’ve achieved 99.9% accuracy on our cherry-picked internal eval”" },
    { tag: "LinkedIn Hype", text: "“Today is the worst this AI will ever be. Let that sink in.”" },
    { tag: "AI Hype", text: "“Browser-use agents clicking buttons on websites built for humans”" },
    { tag: "VC Take", text: "“Annual Recurring Revenue (ARR) that’s actually 80% weekend trial churn”" },
    { tag: "AI Hype", text: "“Fine-tuning is dead; just dump 2 million tokens into the context window”" },
    { tag: "LinkedIn Hype", text: "“How I automated my entire C-suite with 6 custom GPTs and a Zapier webhook”" },
    { tag: "AI Hype", text: "“Agent-to-Agent (A2A) economy where bots pay each other in stablecoins”" },
    { tag: "VC Take", text: "“Our portfolio company hit $10M ARR in 60 days with 3 engineers”" },
    { tag: "AI Hype", text: "“Neuro-symbolic guardrails for deterministic hallucination suppression”" },
    { tag: "LinkedIn Hype", text: "“Unpopular opinion: Most ‘AI Strategies’ are just spicy autocomplete”" },
    { tag: "AI Hype", text: "“Ambient AI that listens to your entire workday and proactively drafts emails”" },
    { tag: "VC Take", text: "“Incumbents have distribution, but AI-native startups have workflow velocity”" },
    { tag: "AI Hype", text: "“100-step deep research agent that cites 400 sources in 90 seconds”" },
    { tag: "LinkedIn Hype", text: "“Why I’m replacing our entire SDR team with an AI voice clone”" },
    { tag: "AI Hype", text: "“Speculative decoding and MoE routing at 1,500 tokens per second”" },
    { tag: "VC Take", text: "“Forward-deployed AI engineers embedding directly with the Fortune 500”" },
    { tag: "AI Hype", text: "“Personal AI clones attending Zoom meetings on behalf of each other”" },
    { tag: "LinkedIn Hype", text: "“There are only two types of companies left: AI-native and soon-to-be-extinct”" },
    { tag: "AI Hype", text: "“Infinite memory context that remembers every Slack message since 2018”" },
    { tag: "VC Take", text: "“Outcome-based pricing: We only charge $50 per autonomous resolution”" },
    { tag: "AI Hype", text: "“Constitutional AI alignment via Reinforcement Learning from AI Feedback (RLAIF)”" },
    { tag: "LinkedIn Hype", text: "“I built a 12-agent Virtual Board of Directors to roast my pitch deck”" },
    { tag: "AI Hype", text: "“From Chat UI to Generative UI: The interface renders itself on the fly”" },
    { tag: "VC Take", text: "“The application layer is where 80% of the long-term value accrues”" },
    { tag: "AI Hype", text: "“Voice-to-code while walking the dog: I haven’t touched a keyboard in weeks”" },
    { tag: "LinkedIn Hype", text: "“Wake up babe, a new frontier model just dropped and changed humanity forever”" },
    { tag: "AI Hype", text: "“Distilling a 1-trillion-parameter frontier model into a toaster-sized edge model”" },
    { tag: "VC Take", text: "“Defensibility comes from proprietary workflow telemetry and RL loops”" },
    { tag: "AI Hype", text: "“Swarm intelligence: 50 micro-agents debating each other before answering”" },
    { tag: "LinkedIn Hype", text: "“Your 5-year career plan is irrelevant when AGI arrives next Tuesday”" },
    { tag: "AI Hype", text: "“Autonomous AI scientist discovering new materials during lunch break”" },
    { tag: "VC Take", text: "“Re-bundling the unbundled enterprise stack with an agentic orchestration layer”" },
    { tag: "AI Hype", text: "“Zero-human company: CEO, CTO, and Marketing are all autonomous loops”" }
  ];

  const FREE_SPACES = [
    "FREE SPACE: “AI won’t replace you—a person using AI will”",
    "FREE SPACE: “Paradigm-Shifting Agentic Synergy”",
    "FREE SPACE: “More Profound Than Fire or Electricity”",
    "FREE SPACE: “Stuck in Pilot Purgatory”",
    "FREE SPACE: “From Org Chart to Orchestration Chart”",
    "FREE SPACE: “Moving the Needle on Mission-Critical KPIs”",
    "FREE SPACE: “Workforce Augmentation, Not Headcount Reduction”",
    "FREE SPACE: “Holistic Data Lake Infrastructure”",
    "FREE SPACE: “1-Person Billion-Dollar Unicorn”",
    "FREE SPACE: “A Copilot for Every Employee”"
  ];

  const TOTAL_UNIQUE_SHEETS = Math.floor(BINGO_POOL.length / 24); // 9 completely disjoint sheets per deck cycle

  let deck = [];
  let deckCursor = 0;
  let sheetCount = 0;
  let currentCells = [];
  let marked = new Set([12]); // Center free space is always index 12

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function dealTwentyFour() {
    if (deck.length - deckCursor < 24) {
      deck = shuffle(BINGO_POOL);
      deckCursor = 0;
    }
    const slice = deck.slice(deckCursor, deckCursor + 24);
    deckCursor += 24;
    return slice;
  }

  function checkWinningLines() {
    const lines = [
      // Rows
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      // Cols
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      // Diagonals
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20]
    ];

    const winningIndices = new Set();
    let bingoCount = 0;

    for (const line of lines) {
      if (line.every((idx) => marked.has(idx))) {
        bingoCount++;
        line.forEach((idx) => winningIndices.add(idx));
      }
    }

    return { bingoCount, winningIndices };
  }

  function updateStatusUI() {
    const scoreEl = document.getElementById("bingo-score-status");
    const deckEl = document.getElementById("bingo-deck-status");
    const winBanner = document.getElementById("bingo-win-banner");
    const gridEl = document.getElementById("bingo-grid");

    if (scoreEl) {
      scoreEl.textContent = `${marked.size} / 25 Marked`;
    }

    const cycleSheet = ((sheetCount - 1) % TOTAL_UNIQUE_SHEETS) + 1;
    if (deckEl) {
      deckEl.textContent = `Unique Sheet ${cycleSheet} of ${TOTAL_UNIQUE_SHEETS} (${BINGO_POOL.length} Takes in Pool)`;
    }

    const { bingoCount, winningIndices } = checkWinningLines();
    if (winBanner) {
      winBanner.hidden = bingoCount === 0;
    }

    if (gridEl) {
      const buttons = gridEl.querySelectorAll(".bingo-cell");
      buttons.forEach((btn, idx) => {
        const isMarked = marked.has(idx);
        const isWin = winningIndices.has(idx);
        btn.classList.toggle("is-marked", isMarked);
        btn.classList.toggle("is-winning", isWin);
        btn.setAttribute("aria-pressed", isMarked ? "true" : "false");
      });
    }
  }

  function renderSheet() {
    const gridEl = document.getElementById("bingo-grid");
    const idEl = document.getElementById("bingo-sheet-id");
    if (!gridEl) return;

    sheetCount++;
    const picked = dealTwentyFour();
    const freeSpaceText = FREE_SPACES[(sheetCount - 1) % FREE_SPACES.length];

    currentCells = [];
    let poolIdx = 0;
    for (let i = 0; i < 25; i++) {
      if (i === 12) {
        currentCells.push({
          tag: "CENTER SQUARE",
          text: freeSpaceText,
          isFree: true
        });
      } else {
        currentCells.push({
          tag: picked[poolIdx].tag,
          text: picked[poolIdx].text,
          isFree: false
        });
        poolIdx++;
      }
    }

    marked = new Set([12]);

    if (idEl) {
      const serial = String(sheetCount).padStart(2, "0");
      const hash = Math.floor(1000 + Math.random() * 9000);
      idEl.textContent = `SHEET #${serial} · SERIAL BS-${hash}`;
    }

    gridEl.innerHTML = "";
    currentCells.forEach((cell, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "bingo-cell" + (cell.isFree ? " is-free is-marked" : "");
      btn.setAttribute("role", "gridcell");
      btn.setAttribute("aria-pressed", cell.isFree ? "true" : "false");

      const tagSpan = document.createElement("span");
      tagSpan.className = "bingo-cell-tag";
      tagSpan.textContent = cell.tag;

      const textSpan = document.createElement("span");
      textSpan.className = "bingo-cell-text";
      textSpan.textContent = cell.text;

      btn.appendChild(tagSpan);
      btn.appendChild(textSpan);

      btn.addEventListener("click", () => {
        if (cell.isFree) return; // Keep free space marked
        if (marked.has(idx)) {
          marked.delete(idx);
        } else {
          marked.add(idx);
        }
        updateStatusUI();
      });

      gridEl.appendChild(btn);
    });

    updateStatusUI();
  }

  function clearMarks() {
    marked = new Set([12]);
    updateStatusUI();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const genBtn = document.getElementById("bingo-generate-btn");
    const printBtn = document.getElementById("bingo-print-btn");
    const clearBtn = document.getElementById("bingo-clear-btn");

    if (genBtn) {
      genBtn.addEventListener("click", renderSheet);
    }
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", clearMarks);
    }

    deck = shuffle(BINGO_POOL);
    renderSheet();
  });
})();

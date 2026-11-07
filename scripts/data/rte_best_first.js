export const rteBestFirst = [
  // -------------------------------------------------------------
  // Best Approach (10 Questions: rte-q-66 to rte-q-75)
  // -------------------------------------------------------------
  {
    id: "rte-q-66",
    role: "RTE",
    archetype: "Best Approach",
    category: "PI Planning & Cadence",
    difficulty: "Advanced",
    question: "What is the best approach for an RTE when facilitating the Day 1 Management Review and Problem-Solving meeting?",
    answer: "The best approach is structured, objective, and timeboxed: (1) Start with an explicit 10-minute synthesis of train status: capacity vs. load, unresolved cross-team dependencies, and flagged risks; (2) Display the Program Board visually; (3) Facilitate decisions in three strict categories: Scope Adjustments (converting features to uncommitted or moving them to next PI), Resource/Capacity Swaps (reallocating stories or engineers across teams), and Architectural Pivots; (4) Document every agreed trade-off in writing; (5) Present the consolidated adjustments to the entire train first thing on Day 2 morning.",
    keyTakeaway: "Run Management Review with data-driven trade-off categories (Scope, People, Architecture) and transparent written agreements.",
    safeReference: "SAFe 6.0: PI Planning - Day 1 Management Review",
    tags: ["Management Review", "Facilitation", "Trade-Offs"]
  },
  {
    id: "rte-q-67",
    role: "RTE",
    archetype: "Best Approach",
    category: "Flow & DORA Metrics",
    difficulty: "Master / Principal",
    question: "What is the best approach to introduce WIP (Work in Process) limits to teams resistant to Kanban principles?",
    answer: "The best approach is empirical rather than dogmatic: (1) Run an experiential simulation (like the Lean Coin Game or Okaloa Flowlab) to physically demonstrate how high WIP bottlenecks everyone; (2) Analyze the team's existing CFD or cycle time data to highlight the exact queue where work spends 80% of its time waiting; (3) Propose an experimental WIP limit for just ONE iteration on the single most congested column (e.g., Code Review or Staging Test); (4) Review cycle time improvements at the retrospective to validate the benefit empirically before standardizing.",
    keyTakeaway: "Introduce WIP limits incrementally through experiential simulations and temporary single-column experiments.",
    safeReference: "SAFe 6.0: Principle #6 - Visualize and Limit WIP",
    tags: ["WIP Limits", "Kanban Adoption", "Change Management"]
  },
  {
    id: "rte-q-68",
    role: "RTE",
    archetype: "Best Approach",
    category: "Servant Leadership & Governance",
    difficulty: "Advanced",
    question: "What is the best approach for managing and mentoring underperforming Scrum Masters across an ART?",
    answer: "The best approach combines collaborative coaching, objective competency models, and peer learning: (1) Utilize the SAFe Scrum Master / Team Coach Assessment radar to collaboratively assess strengths and gaps; (2) Pair newer or struggling Scrum Masters with seasoned mentors across the ART; (3) Establish a vibrant Scrum Master Community of Practice (CoP) that meets bi-weekly to share real facilitation challenges and playbooks; (4) Observe ceremonies with permission and conduct private, constructive 1-on-1 debriefs focused on growth.",
    keyTakeaway: "Elevate Scrum Masters through structured competency assessments, peer pairing, and active Communities of Practice.",
    safeReference: "SAFe 6.0: Scrum Master Coaching & Competencies",
    tags: ["Scrum Master Coaching", "Community of Practice", "Mentorship"]
  },
  {
    id: "rte-q-69",
    role: "RTE",
    archetype: "Best Approach",
    category: "Risk & Dependency Management",
    difficulty: "Intermediate",
    question: "What is the best approach to visualize and track cross-team dependencies in a hybrid or remote PI execution model?",
    answer: "The best approach leverages dynamic digital boards combined with cadenced Coach Sync reviews: (1) Maintain an authoritative digital Program Board (in Jira Align, Azure DevOps, or Miro) where dependency strings are color-coded by status (Green = on track, Amber = at risk, Red = blocked); (2) Ensure every dependency has a named provider team, consumer team, and target iteration; (3) Review red/amber dependency strings weekly in the Coach Sync; (4) Archive resolved dependencies immediately to keep the board clean and actionable.",
    keyTakeaway: "Combine dynamic digital boards with color-coded dependency strings and weekly Coach Sync inspection.",
    safeReference: "SAFe 6.0: Program Board & Dependency Tracking",
    tags: ["Dependency Management", "Digital Tools", "Visual Management"]
  },
  {
    id: "rte-q-70",
    role: "RTE",
    archetype: "Best Approach",
    category: "Economic Prioritization & WSJF",
    difficulty: "Advanced",
    question: "What is the best approach to establish baseline reference features for WSJF scoring across multiple business units?",
    answer: "The best approach is collaborative calibration: (1) Assemble Product Managers, System Architects, and Business Owners in a dedicated WSJF Calibration Workshop; (2) Review historical features delivered in previous PIs and select 3 reference anchor features representing small (1), medium (5), and large (13) Cost of Delay and Job Size; (3) Document these anchor features in a reference rubric; (4) When scoring new candidate features, compare them against the established anchor references rather than debating scores in isolation.",
    keyTakeaway: "Anchor WSJF scoring against a calibrated reference rubric of historically delivered small, medium, and large features.",
    safeReference: "SAFe 6.0: WSJF Calibration & Relative Sizing",
    tags: ["WSJF", "Calibration", "Prioritization"]
  },
  {
    id: "rte-q-71",
    role: "RTE",
    archetype: "Best Approach",
    category: "Continuous Delivery & DevOps",
    difficulty: "Master / Principal",
    question: "What is the best approach for an RTE to champion and fund DevOps toolchain improvements when business leadership only wants new features?",
    answer: "The best approach translates technical improvements into quantifiable business economics: (1) Map the ART Value Stream to prove how manual deployments and environment bottlenecks directly delay time-to-market for revenue features; (2) Frame DevOps investments as 'Enabler Epics' that expand the Architectural Runway; (3) Show how automated testing directly reduces production outages and customer churn; (4) Partner with Product Management to agree on a fixed train capacity allocation (e.g., 20% enablers/DevOps, 80% features) locked into every PI.",
    keyTakeaway: "Quantify the Cost of Delay caused by manual toolchains and secure a non-negotiable capacity allocation for enablers.",
    safeReference: "SAFe 6.0: Capacity Allocation & DevOps Enablers",
    tags: ["DevOps Investment", "Capacity Allocation", "Lean Economics"]
  },
  {
    id: "rte-q-72",
    role: "RTE",
    archetype: "Best Approach",
    category: "Inspect & Adapt & Problem Solving",
    difficulty: "Intermediate",
    question: "What is the best approach to ensure that the Problem-Solving Workshop in I&A produces lasting, systemic fixes rather than superficial band-aids?",
    answer: "The best approach follows rigorous Lean root-cause methodology: (1) Formulate an objective, data-backed Problem Statement (e.g., 'In PI 3, staging environment downtime caused 42 story days of lost velocity across 4 teams'); (2) Conduct an Ishikawa (fishbone) diagram session across people, process, tools, and environments; (3) Run the 5-Whys on the primary spine to reach systemic root causes; (4) Brainstorm solutions and select the top Pareto countermeasure; (5) Formulate it into a measurable Enabler story assigned to an owner for the next PI.",
    keyTakeaway: "Base problem solving on objective data, execute structured 5-Whys root-cause analysis, and create measurable enabler stories.",
    safeReference: "SAFe 6.0: Problem-Solving Workshop & Root Cause Analysis",
    tags: ["Root Cause Analysis", "5 Whys", "Continuous Improvement"]
  },
  {
    id: "rte-q-73",
    role: "RTE",
    archetype: "Best Approach",
    category: "Servant Leadership & Governance",
    difficulty: "Advanced",
    question: "What is the best approach to prepare an organization for launching its very first Agile Release Train (ART)?",
    answer: "The best approach follows the SAFe Implementation Roadmap systematically: (1) Train Lean-Agile Change Agents and Enterprise Executives; (2) Identify the Value Stream and define ART boundaries; (3) Prepare the Program Backlog with a prioritized list of Definition of Ready features; (4) Train teams together in SAFe for Teams to create a common language; (5) Align tooling and cadence; (6) Launch the ART with a fully supported 2-day PI Planning event; (7) Coach the train through its first execution iterations.",
    keyTakeaway: "Follow the SAFe Implementation Roadmap: train leaders and teams together, refine the backlog, and launch on synchronized cadence.",
    safeReference: "SAFe 6.0: Implementation Roadmap & ART Launch Readiness",
    tags: ["ART Launch", "Change Management", "Implementation Roadmap"]
  },
  {
    id: "rte-q-74",
    role: "RTE",
    archetype: "Best Approach",
    category: "Flow & DORA Metrics",
    difficulty: "Advanced",
    question: "What is the best approach to prevent 'Agile vanity metrics' and report genuine business value to the C-suite?",
    answer: "The best approach pairs flow metrics with economic and customer outcomes: (1) Replace story point burn-down charts in executive briefings with Flow Metrics (Flow Velocity, Flow Time, Flow Efficiency, Flow Load); (2) Report the ART Predictability Index to demonstrate reliable delivery of committed business value; (3) Present DORA metrics to showcase release reliability and automated engineering maturity; (4) Connect delivered features to measurable business KPIs (e.g., customer acquisition cost reduction, revenue throughput, NPS).",
    keyTakeaway: "Report business outcomes, Flow Metrics, and ART Predictability rather than internal developer vanity metrics.",
    safeReference: "SAFe 6.0: Measure and Grow & Flow Metrics",
    tags: ["Executive Reporting", "Flow Metrics", "Business Value"]
  },
  {
    id: "rte-q-75",
    role: "RTE",
    archetype: "Best Approach",
    category: "Risk & Dependency Management",
    difficulty: "Master / Principal",
    question: "What is the best approach to handle regulatory and audit compliance during agile sprint iterations?",
    answer: "The best approach is Lean Compliance automation: (1) Involve compliance and legal officers directly in the ART as active stakeholders during backlog refinement; (2) Decompose monolithic compliance gates into continuous, incremental Definition of Done criteria; (3) Automate audit artifact generation (e.g., traceability matrices between user stories, test executions, and git commit hashes); (4) Use automated pipeline gates (SonarQube, vulnerability scans) that produce signed, immutable audit logs upon deployment.",
    keyTakeaway: "Automate compliance validation into CI/CD pipelines and decompose compliance gates into iteration Definition of Done criteria.",
    safeReference: "SAFe 6.0: Lean Quality Management System (QMS)",
    tags: ["Lean Compliance", "Automated Auditing", "Governance"]
  },

  // -------------------------------------------------------------
  // First Approach (10 Questions: rte-q-76 to rte-q-85)
  // -------------------------------------------------------------
  {
    id: "rte-q-76",
    role: "RTE",
    archetype: "First Approach",
    category: "Servant Leadership & Governance",
    difficulty: "Intermediate",
    question: "What is the very first approach an RTE should take upon stepping into an existing ART that has a toxic, finger-pointing culture?",
    answer: "The very first approach is to listen, observe, and establish psychological safety without rushing to enforce process rules: (1) Conduct confidential 1-on-1 discovery interviews with Scrum Masters, Tech Leads, POs, and developers to hear their pain points; (2) Shadow ceremonies silently to observe communication dynamics; (3) Declare an immediate moratorium on public blame during ART events; (4) In the next retrospective, run a blameless Prime Directive exercise to reaffirm that everyone is doing their best given their constraints and tools.",
    keyTakeaway: "First listen and rebuild psychological safety through confidential 1-on-1s before attempting any process changes.",
    safeReference: "SAFe 6.0: Lean-Agile Leadership & Psychological Safety",
    tags: ["First Steps", "Psychological Safety", "Culture Repair"]
  },
  {
    id: "rte-q-77",
    role: "RTE",
    archetype: "First Approach",
    category: "PI Planning & Cadence",
    difficulty: "Intermediate",
    question: "What is the first approach an RTE should take when an Agile team reports during PI Planning that their capacity is 50% overbooked by draft features?",
    answer: "The first approach is to help the team protect their capacity boundary: (1) Review the team's historical velocity to validate that the capacity estimate is accurate and not overly conservative; (2) Instruct the team to halt planning additional stories; (3) Facilitate an immediate conversation between the team's Product Owner and Product Management to prioritize features using WSJF and identify which features must be removed from the team's draft plan or shifted to Uncommitted status.",
    keyTakeaway: "First validate capacity data, then facilitate an immediate de-scoping discussion between the PO and Product Management.",
    safeReference: "SAFe 6.0: Capacity Allocation & Team Breakouts",
    tags: ["Capacity Management", "First Steps", "PI Planning"]
  },
  {
    id: "rte-q-78",
    role: "RTE",
    archetype: "First Approach",
    category: "Risk & Dependency Management",
    difficulty: "Advanced",
    question: "What is the first approach when a critical cross-team dependency is discovered on Day 2 of PI Planning that cannot be resolved within the train?",
    answer: "The first approach is to log and escalate the dependency transparently: (1) Post the dependency on the Program Board with a distinct red dependency tag; (2) Bring the issue directly to the Day 2 Management Review or immediate sync with the Solution Train Engineer / Business Owners; (3) Frame the escalation with the specific trade-off: 'If Team A cannot receive this service from Team B, Feature X will not ship this PI. Does leadership approve shifting Team B's priority, or should Feature X be de-scoped?'",
    keyTakeaway: "First tag the dependency transparently on the board, then escalate to leadership with a concrete trade-off statement.",
    safeReference: "SAFe 6.0: Resolving Escalated Program Board Dependencies",
    tags: ["Dependencies", "First Steps", "Escalation"]
  },
  {
    id: "rte-q-79",
    role: "RTE",
    archetype: "First Approach",
    category: "Flow & DORA Metrics",
    difficulty: "Intermediate",
    question: "What is the first approach when an ART's deployment to staging fails due to an unintegrated merge conflict across three teams?",
    answer: "The first approach is to stop the line and assemble the relevant engineers: (1) Activate the Andon cord—temporarily pause further merges into the staging trunk; (2) Convene a rapid 15-minute swarming session with the three Tech Leads and the System Architect; (3) Isolate the conflicting branches and run a collaborative rebase; (4) Update the continuous integration pipeline to enforce daily trunk merging and automated pre-merge contract tests so conflicts are caught within hours rather than at sprint end.",
    keyTakeaway: "First stop further merges to prevent compounding errors, then swarm the tech leads to isolate and resolve the conflict.",
    safeReference: "SAFe 6.0: Built-in Quality & Continuous Integration",
    tags: ["Merge Conflicts", "First Steps", "Andon Cord"]
  },
  {
    id: "rte-q-80",
    role: "RTE",
    archetype: "First Approach",
    category: "Servant Leadership & Governance",
    difficulty: "Intermediate",
    question: "What is the first approach an RTE should take when an executive announces a major corporate reorganization in the middle of a PI?",
    answer: "The first approach is to shield the execution cadence while seeking strategic clarity: (1) Meet immediately with the executive sponsor and Business Owners to understand the timeline and scope of the reorganization; (2) Advocate strongly to keep team structures intact until the end of the current PI to protect current delivery commitments; (3) Reassure Scrum Masters and teams during Coach Sync, transparently sharing what is known and squashing unfounded rumors to prevent panic and loss of focus.",
    keyTakeaway: "First seek direct clarity from executive leadership and shield teams from disruptive mid-PI re-staffing.",
    safeReference: "SAFe 6.0: Cadence Shields Teams from Chaos",
    tags: ["Reorganization", "First Steps", "Shielding Teams"]
  },
  {
    id: "rte-q-81",
    role: "RTE",
    archetype: "First Approach",
    category: "Continuous Delivery & DevOps",
    difficulty: "Advanced",
    question: "What is the first approach when developer feedback indicates that local build and test execution environments take 4 hours to spin up?",
    answer: "The first approach is to measure and quantify the economic developer tax: (1) Calculate the total hours lost per sprint across the 80+ developers (e.g., 80 devs * 4 hrs * twice a week = 640 lost engineering hours per sprint); (2) Present this economic data to the ART Trio; (3) Prioritize an immediate Infrastructure Enabler Story for containerization (Docker dev containers) and cloud-based pre-warmed dev environments; (4) Dedicate senior DevOps capacity in the next iteration to build the automated container image.",
    keyTakeaway: "First calculate the aggregated economic cost of lost engineering hours, then prioritize containerized self-service enablers.",
    safeReference: "SAFe 6.0: Developer Ergonomics & Continuous Delivery",
    tags: ["Dev Environments", "First Steps", "Economic Sizing"]
  },
  {
    id: "rte-q-82",
    role: "RTE",
    archetype: "First Approach",
    category: "Economic Prioritization & WSJF",
    difficulty: "Intermediate",
    question: "What is the first approach when Product Management presents a feature backlog for PI Planning that has zero enabler features for technical debt?",
    answer: "The first approach is to advocate for architectural balance before planning begins: (1) Review the backlog alongside the System Architect and examine historical defect and cycle-time trends; (2) Remind Product Management of the agreed ART Capacity Allocation agreement (e.g., 75% business, 25% enablers); (3) Have the System Architect present the top 2-3 technical enablers with their Cost of Delay (Risk Reduction & Opportunity Enablement) explicitly scored; (4) Insert the enablers into the candidate backlog before Day 1 kicks off.",
    keyTakeaway: "First enforce the capacity allocation guideline and partner with the System Architect to inject prioritized enablers.",
    safeReference: "SAFe 6.0: Capacity Allocation & Architectural Runway",
    tags: ["Enablers", "First Steps", "Capacity Allocation"]
  },
  {
    id: "rte-q-83",
    role: "RTE",
    archetype: "First Approach",
    category: "Inspect & Adapt & Problem Solving",
    difficulty: "Intermediate",
    question: "What is the first approach when an ART's Predictability Index drops from 90% down to 55% in a single PI?",
    answer: "The first approach is an empirical and empathetic post-mortem investigation: (1) Do not panic or assign blame; (2) Analyze the specific PI Objectives that were missed—did they fail due to external third-party blockers, unrealistic initial capacity, scope creep, or technical discovery? (3) Group the failed objectives into thematic buckets; (4) Dedicate the upcoming I&A Problem-Solving Workshop specifically to dissecting the root causes behind those missed objectives.",
    keyTakeaway: "First dissect the objective data behind missed commitments without assigning blame, and focus the I&A workshop on the top driver.",
    safeReference: "SAFe 6.0: Analyzing the ART Predictability Index",
    tags: ["Predictability Drop", "First Steps", "Root Cause"]
  },
  {
    id: "rte-q-84",
    role: "RTE",
    archetype: "First Approach",
    category: "Servant Leadership & Governance",
    difficulty: "Advanced",
    question: "What is the first approach when two Scrum Masters consistently argue loudly and derail the weekly Coach Sync?",
    answer: "The first approach is to address the interpersonal friction privately outside the sync: (1) Intervene calmly in the meeting to table the heated topic and keep the agenda moving for the rest of the train; (2) Schedule an immediate 1-on-1 with each Scrum Master to listen to their individual perspectives; (3) Facilitate a joint 3-way conversation focusing on shared train outcomes rather than personal defensiveness; (4) Reiterate the Coach Sync ground rules and communication agreements.",
    keyTakeaway: "First de-escalate the meeting by tabling the dispute, then address the conflict privately through neutral 1-on-1 mediation.",
    safeReference: "SAFe 6.0: Coach Sync Facilitation & Conflict Resolution",
    tags: ["Conflict De-escalation", "First Steps", "Coach Sync"]
  },
  {
    id: "rte-q-85",
    role: "RTE",
    archetype: "First Approach",
    category: "PI Planning & Cadence",
    difficulty: "Intermediate",
    question: "What is the first approach when an unexpected regional holiday reduces one team's capacity by 3 days during the upcoming PI?",
    answer: "The first approach is accurate capacity normalization: (1) Calculate the team's available capacity by deducting the holiday days from each individual member's planned capacity before sizing stories; (2) Ensure the team does not use historical average velocity without adjusting for the lost days; (3) Sizing the team's draft iteration commitments strictly to match the reduced capacity; (4) Notify Product Management during Day 1 breakouts so scope expectations are aligned early.",
    keyTakeaway: "First deduct the holiday hours from individual capacity worksheets before allocating any user stories to sprints.",
    safeReference: "SAFe 6.0: Calculating Iteration and PI Capacity",
    tags: ["Capacity Normalization", "First Steps", "Holidays"]
  }
];

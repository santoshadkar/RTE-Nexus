export const steBestFirst = [
  // -------------------------------------------------------------
  // Best Approach (10 Questions: ste-q-151 to ste-q-160)
  // -------------------------------------------------------------
  {
    id: "ste-q-151",
    role: "STE",
    archetype: "Best Approach",
    category: "Pre & Post PI Planning",
    difficulty: "Advanced",
    question: "What is the best approach for facilitating Pre-PI Planning across 8 ARTs and multiple external vendors?",
    answer: "The best approach combines asynchronous preparation with tightly structured synchronous alignment: (1) 2 weeks prior, publish the draft Solution Vision, prioritized Capabilities (with WSJF scores), and top-level Solution Context as an interactive executive briefing packet; (2) Conduct Pre-PI Planning as a focused half-day or 1-day event; (3) Present the Solution Roadmap and highlight cross-ART dependency focal points; (4) Provide clear capacity allocation guidelines (e.g., 65% business, 25% enablers/cross-train dependencies, 10% innovation/tech debt); (5) Ensure all RTEs leave with unambiguous context to brief their respective ARTs.",
    keyTakeaway: "Publish vision and prioritized capabilities asynchronously 2 weeks prior, and run a focused half-day Pre-PI event focused on capacity guidance.",
    safeReference: "SAFe 6.0: Pre-PI Planning Facilitation",
    tags: ["Pre-PI Planning", "Asynchronous Prep", "Multi-ART Alignment"]
  },
  {
    id: "ste-q-152",
    role: "STE",
    archetype: "Best Approach",
    category: "Cross-ART Dependency Governance",
    difficulty: "Master / Principal",
    question: "What is the best approach to eliminate systemic, recurring cross-ART dependencies that persist across multiple PIs?",
    answer: "The best approach tackles root architectural coupling using the Inverse Conway Maneuver and Team Topologies: (1) Perform dependency cluster analysis on the historical Program Board data to identify which ARTs are perpetually entangled; (2) Partner with the Solution Architect to redesign subsystem boundaries—either converting tightly coupled dependencies into standardized platform services or creating a new stream-aligned ART; (3) Mandate asynchronous event-driven architectures with published contract schemas (Protobuf/JSON Schema) so trains can develop independently; (4) Establish self-service test mock registries.",
    keyTakeaway: "Eliminate chronic dependencies through dependency cluster analysis, value stream reorganization, and event-driven decoupling.",
    safeReference: "SAFe 6.0: Team Topologies & Dependency Elimination",
    tags: ["Dependency Elimination", "Cluster Analysis", "Inverse Conway"]
  },
  {
    id: "ste-q-153",
    role: "STE",
    archetype: "Best Approach",
    category: "Solution Demo & Integration",
    difficulty: "Advanced",
    question: "What is the best approach for running an integrated Solution Demo for high-stakes executive and customer stakeholders?",
    answer: "The best approach focuses on real customer journeys, working software, and transparent telemetry: (1) Rehearse the integration flows 48 hours prior in the staging environment to identify narrative rough spots; (2) Anchor the demo around 2-3 end-to-end customer workflows rather than showing disjointed component demos train-by-train; (3) Have engineers demonstrate real working capabilities in live staging or hardware-in-the-loop labs, not static slides; (4) Present empirical flow and predictability metrics alongside the demo; (5) Capture stakeholder questions and feedback directly into the Solution Backlog.",
    keyTakeaway: "Rehearse 48 hours prior, anchor the demo around end-to-end user journeys, and demonstrate live working software in unified staging.",
    safeReference: "SAFe 6.0: Solution Demo Excellence",
    tags: ["Solution Demo", "Executive Alignment", "User Journeys"]
  },
  {
    id: "ste-q-154",
    role: "STE",
    archetype: "Best Approach",
    category: "Solution Intent & Compliance",
    difficulty: "Master / Principal",
    question: "What is the best approach to transition a traditional waterfall safety-critical enterprise to SAFe Large Solution?",
    answer: "The best approach is an evolutionary, evidence-based Lean-Agile transition: (1) Train executive and regulatory compliance officers in SAFe Lean-Agile principles to dispel the myth that Agile ignores safety; (2) Map the legacy phase-gate compliance requirements into automated Solution Intent and CI/CD validation pipelines; (3) Run a pilot Solution Train with 2-3 core ARTs while maintaining legacy interfaces; (4) Invite regulatory auditors to attend bi-weekly System Demos, providing early transparency; (5) Prove that automated verification delivers higher quality and fewer recalls than manual paper audits.",
    keyTakeaway: "Educate regulators, convert static compliance gates into automated continuous validation pipelines, and prove safety via working increments.",
    safeReference: "SAFe 6.0: Lean Quality Management System & Safety Transitions",
    tags: ["Safety Transition", "Waterfall to Agile", "Regulatory Proof"]
  },
  {
    id: "ste-q-155",
    role: "STE",
    archetype: "Best Approach",
    category: "Supplier & Multi-Vendor Management",
    difficulty: "Advanced",
    question: "What is the best approach to align external suppliers with differing contract types (Time & Materials vs. Fixed Price) on a Solution Train?",
    answer: "The best approach uses Agile Contracts with Progressive Milestones: (1) For Fixed-Price contracts, restructure milestone deliverables around working software increments integrated into the Solution CI pipeline at PI boundaries rather than document phase gates; (2) For T&M vendors, embed developers directly into internal cross-functional ART feature teams to eliminate handoffs; (3) Provide suppliers with access to shared digital tooling, automated test suites, and mock gateways; (4) Treat supplier leads as equal partners in Pre/Post-PI Planning and the bi-weekly STE Sync.",
    keyTakeaway: "Structure contracts around working software integrated at PI boundaries, and embed supplier leads as full partners in cadence events.",
    safeReference: "SAFe 6.0: Agile Contracts & Supplier Collaboration",
    tags: ["Agile Contracts", "Fixed Price vs T&M", "Supplier Integration"]
  },
  {
    id: "ste-q-156",
    role: "STE",
    archetype: "Best Approach",
    category: "Large Solution SAFe Architecture",
    difficulty: "Advanced",
    question: "What is the best approach for mentoring a group of 6-10 Release Train Engineers across a diverse Solution Train?",
    answer: "The best approach is a structured community of practice combined with peer coaching: (1) Establish an active, bi-weekly RTE Community of Practice (CoP) focused on shared challenges, facilitation techniques, and toolchain improvements; (2) Conduct monthly 1-on-1 coaching sessions using the SAFe RTE Competency Assessment; (3) Facilitate peer shadowing: have newer RTEs observe experienced RTEs during PI Planning and I&A; (4) Foster a culture of psychological safety where RTEs can openly share train failures and ask for help without judgment.",
    keyTakeaway: "Elevate RTE capabilities through a vibrant Community of Practice, competency benchmarking, and structured peer shadowing.",
    safeReference: "SAFe 6.0: RTE Community of Practice & Mentorship",
    tags: ["RTE Mentorship", "Community of Practice", "Coaching"]
  },
  {
    id: "ste-q-157",
    role: "STE",
    archetype: "Best Approach",
    category: "Solution Backlog & Capabilities",
    difficulty: "Advanced",
    question: "What is the best approach to decompose a multi-million dollar Solution Epic into actionable Capabilities and Features?",
    answer: "The best approach uses Lean MVP slicing and collaborative decomposition workshops: (1) Formulate an Epic Hypothesis Statement with measurable business outcome indicators; (2) Convene Solution Management, System Architecture, and RTEs in a Capability Decomposition Workshop; (3) Slice the Epic vertically by customer workflow or persona into a Minimum Viable Product (MVP) Capability and subsequent incremental Capabilities; (4) Ensure each Capability has explicit acceptance criteria and an estimated WSJF score; (5) Distribute constituent Features to individual ART backlogs.",
    keyTakeaway: "Slice Epics vertically into MVP and incremental Capabilities with clear outcome hypotheses, then decompose into ART-level Features.",
    safeReference: "SAFe 6.0: Epic to Capability Decomposition",
    tags: ["Epic Decomposition", "MVP Slicing", "Solution Backlog"]
  },
  {
    id: "ste-q-158",
    role: "STE",
    archetype: "Best Approach",
    category: "Cross-ART Dependency Governance",
    difficulty: "Intermediate",
    question: "What is the best approach for running the bi-weekly STE Sync with all RTEs?",
    answer: "The best approach is crisp, outcome-driven, and strictly timeboxed to 45-60 minutes: (1) Follow a standardized agenda: 10 mins macro milestone review, 20 mins critical path red/amber cross-ART dependency review, 15 mins new systemic impediment escalation, 10 mins action items; (2) Keep discussions focused strictly on cross-train flow—prohibit localized single-ART discussions that don't impact other trains; (3) Display the live digital Solution Program Board; (4) Assign unambiguous single-owner action items with deadlines for every identified blocker.",
    keyTakeaway: "Keep STE Sync tightly timeboxed, focused strictly on cross-ART blockers and critical-path dependencies, using a live visual board.",
    safeReference: "SAFe 6.0: STE Sync Facilitation",
    tags: ["STE Sync", "Timeboxing", "Impediment Escalation"]
  },
  {
    id: "ste-q-159",
    role: "STE",
    archetype: "Best Approach",
    category: "Solution Intent & Compliance",
    difficulty: "Master / Principal",
    question: "What is the best approach to balance long-term enterprise architecture governance with decentralized team autonomy?",
    answer: "The best approach implements 'Guardrails and Paved Roads': (1) Define clear, lightweight architectural guardrails (e.g., standard authentication tokens, zero-trust network policies, telemetry formats) in the Fixed Solution Intent; (2) Provide 'Paved Roads' (pre-approved CI/CD pipeline templates, container base images, and SDKs) that make doing the right thing the easiest path for teams; (3) Grant teams complete autonomous freedom to choose frameworks and internal designs within the guardrails; (4) Review architectural exceptions transparently in the Architecture CoP.",
    keyTakeaway: "Balance governance and autonomy through architectural guardrails and paved-road developer infrastructure.",
    safeReference: "SAFe 6.0: Architectural Guardrails & Paved Roads",
    tags: ["Guardrails", "Paved Roads", "Autonomy vs Alignment"]
  },
  {
    id: "ste-q-160",
    role: "STE",
    archetype: "Best Approach",
    category: "Pre & Post PI Planning",
    difficulty: "Advanced",
    question: "What is the best approach to synthesize the Solution PI Objectives during Post-PI Planning?",
    answer: "The best approach is collaborative roll-up and thematic synthesis: (1) Gather all finalized ART PI Objectives and their assigned Planned Business Values; (2) In a dedicated 90-minute session with Solution Management and System Architecture, cluster ART objectives around the overarching Solution Capabilities; (3) Draft 5 to 10 clear, high-level Solution PI Objectives expressing integrated business and technical outcomes; (4) Assign planned business value (1-10) with Solution Business Owners; (5) Present the synthesized objectives to the entire multi-ART leadership prior to the Solution Confidence Vote.",
    keyTakeaway: "Cluster ART objectives around overarching Solution Capabilities into 5-10 synthesized Solution PI Objectives with business value scores.",
    safeReference: "SAFe 6.0: Synthesizing Solution PI Objectives",
    tags: ["Solution PI Objectives", "Post-PI Synthesis", "Business Value"]
  },

  // -------------------------------------------------------------
  // First Approach (10 Questions: ste-q-161 to ste-q-170)
  // -------------------------------------------------------------
  {
    id: "ste-q-161",
    role: "STE",
    archetype: "First Approach",
    category: "Large Solution SAFe Architecture",
    difficulty: "Advanced",
    question: "What is the very first approach an STE should take when stepping into a newly created Solution Train spanning 8 disconnected ARTs?",
    answer: "The very first approach is to establish alignment and map the macro value stream: (1) Conduct discovery sessions with the Solution Train Trio, all 8 RTEs, and Business Owners to understand current friction points and shared goals; (2) Map the end-to-end Solution Value Stream to visualize how customer value flows across the 8 ARTs; (3) Align all 8 ARTs to a common cadence and synchronized PI boundary schedule; (4) Establish the bi-weekly STE Sync to build relational trust across the RTE community.",
    keyTakeaway: "First map the end-to-end Value Stream, synchronize all ARTs to a common cadence, and stand up the STE Sync.",
    safeReference: "SAFe 6.0: Launching a Solution Train & Cadence Alignment",
    tags: ["First Steps", "Value Stream Mapping", "Cadence Alignment"]
  },
  {
    id: "ste-q-162",
    role: "STE",
    archetype: "First Approach",
    category: "Cross-ART Dependency Governance",
    difficulty: "Intermediate",
    question: "What is the first approach when an RTE reports during the STE Sync that a dependent ART's API is 3 weeks late and blocking an entire feature stream?",
    answer: "The first approach is to verify the impact and convene a targeted swarming session: (1) Quantify the exact downstream impact and confirm whether the delay blocks active sprints or upcoming iterations; (2) Convene an immediate 30-minute breakout with both RTEs and their Tech Leads; (3) Assess whether an API mock or contract stub can be deployed immediately to unblock local development; (4) If unresolvable at the team level, update the Solution Program Board risk to Red and escalate to Solution Management for priority realignment.",
    keyTakeaway: "First verify downstream impact, deploy an API mock stub to unblock developers immediately, and escalate if priority shifts are required.",
    safeReference: "SAFe 6.0: Cross-ART Blocker Triage",
    tags: ["Blocker Triage", "First Steps", "API Mocking"]
  },
  {
    id: "ste-q-163",
    role: "STE",
    archetype: "First Approach",
    category: "Pre & Post PI Planning",
    difficulty: "Advanced",
    question: "What is the first approach an STE should take if Solution Management arrives at Pre-PI Planning with an unprioritized, 50-item Capability backlog?",
    answer: "The first approach is to halt the presentation and protect the agenda: (1) Intervene respectfully to explain that presenting 50 unranked capabilities will paralyze ART planning and create chaos; (2) Request an immediate 60-minute executive caucus with Solution Management and Business Owners; (3) Facilitate a rapid WSJF triage to identify the top 10-12 candidate Capabilities; (4) Park the remaining 38 items in the backlog funnel; (5) Resume Pre-PI Planning with the trimmed, prioritized candidate list.",
    keyTakeaway: "First pause the session to avoid train confusion, facilitate an urgent WSJF triage with leadership, and present only the top 10-12 capabilities.",
    safeReference: "SAFe 6.0: Backlog Readiness for Pre-PI Planning",
    tags: ["Backlog Triage", "First Steps", "Pre-PI Planning"]
  },
  {
    id: "ste-q-164",
    role: "STE",
    archetype: "First Approach",
    category: "Supplier & Multi-Vendor Management",
    difficulty: "Intermediate",
    question: "What is the first approach when an external component supplier fails to deliver their scheduled integration build on the agreed iteration date?",
    answer: "The first approach is immediate communication and risk assessment: (1) Contact the Supplier Account Executive and Lead Engineer within 2 hours to ascertain the root cause and revised delivery date; (2) Evaluate the ripple effect on dependent internal ARTs; (3) Provide internal ARTs with instructions on whether to continue working with the previous stable build or switch to a simulated test stub; (4) Log the occurrence in the Solution Risk Register; (5) Convene Procurement if this is part of a recurring contractual SLA breach.",
    keyTakeaway: "First contact supplier leadership to determine revised delivery, activate internal test stubs, and isolate downstream impact.",
    safeReference: "SAFe 6.0: Supplier Delivery Triage",
    tags: ["Supplier Failure", "First Steps", "Risk Containment"]
  },
  {
    id: "ste-q-165",
    role: "STE",
    archetype: "First Approach",
    category: "Solution Demo & Integration",
    difficulty: "Intermediate",
    question: "What is the first approach when the primary integration test environment goes offline 24 hours before the scheduled Solution Demo?",
    answer: "The first approach is transparent triage and contingency execution: (1) Mobilize the Platform/DevOps engineering team to diagnose and restore the environment; (2) Check the availability of secondary failover environments or recorded telemetry from the staging rehearsal run 48 hours earlier; (3) Brief Solution Management and Business Owners on the situation with an honest status assessment; (4) If recovery is imminent, proceed with the live demo; if delayed, pivot the demo to show verified subsystem integration test telemetry and recorded runs rather than canceling.",
    keyTakeaway: "First mobilize DevOps triage, leverage 48-hour rehearsal artifacts as backup, and communicate transparently to executive sponsors.",
    safeReference: "SAFe 6.0: Solution Demo Contingency Management",
    tags: ["Environment Outage", "First Steps", "Contingency Plan"]
  },
  {
    id: "ste-q-166",
    role: "STE",
    archetype: "First Approach",
    category: "Solution Intent & Compliance",
    difficulty: "Advanced",
    question: "What is the first approach when an internal audit reveals that 3 of your ARTs have bypassed mandatory regulatory security scans for the past two iterations?",
    answer: "The first approach is to contain the exposure and address the governance loophole: (1) Quarantine the unverified code branches immediately to prevent deployment to staging or production; (2) Convene the 3 RTEs and Lead Security Architect to understand why the scans were bypassed (e.g., pipeline timeouts, broken scan rules, or intentional shortcuts); (3) Trigger immediate automated security scans on all quarantined artifacts; (4) Re-lock the CI/CD pipeline so that bypassing security gates is technically impossible; (5) Brief the Compliance Officer with a complete audit trail and corrective action plan.",
    keyTakeaway: "First quarantine unverified code branches immediately, run retroactive scans, and hard-lock the CI/CD pipeline against bypasses.",
    safeReference: "SAFe 6.0: Built-in Quality & Automated Audit Enforcement",
    tags: ["Security Audit", "First Steps", "Quarantine"]
  },
  {
    id: "ste-q-167",
    role: "STE",
    archetype: "First Approach",
    category: "Large Solution SAFe Architecture",
    difficulty: "Advanced",
    question: "What is the first approach when two ARTs strongly disagree on which team should own a new cross-cutting microservice component?",
    answer: "The first approach is architectural and domain analysis rather than political arbitration: (1) Facilitate a joint session between both System Architects and the Solution Architect; (2) Evaluate the component against Team Topologies principles: which team has the lowest cognitive load, closest domain expertise, and direct alignment to the downstream consumer journey? (3) If neither is an ideal fit, evaluate whether the component belongs in a shared Platform ART; (4) Ensure the decision is documented in an Architectural Decision Record (ADR) in the Solution Intent.",
    keyTakeaway: "First evaluate cognitive load and domain alignment using Team Topologies principles with the Solution Architect.",
    safeReference: "SAFe 6.0: Team Topologies & Component Ownership",
    tags: ["Ownership Dispute", "First Steps", "Architectural Decision Record"]
  },
  {
    id: "ste-q-168",
    role: "STE",
    archetype: "First Approach",
    category: "Cross-ART Dependency Governance",
    difficulty: "Intermediate",
    question: "What is the first approach when the digital Solution Program Board shows an orphaned dependency with no consumer or provider assigned?",
    answer: "The first approach is immediate clarification during the next sync: (1) Flag the orphaned item on the digital board; (2) Raise it during the STE Sync or Coach Sync: identify who wrote the card and which team was intended as the recipient; (3) Assign an unambiguous Provider Team, Consumer Team, and Target Iteration; (4) If no team claims ownership or requires the deliverable, verify with Product Management and delete the redundant dependency card to keep the board clean.",
    keyTakeaway: "First surface orphaned cards during the daily/weekly sync, assign explicit provider/consumer owners, or delete obsolete items.",
    safeReference: "SAFe 6.0: Program Board Hygiene & Ownership",
    tags: ["Board Hygiene", "First Steps", "Orphaned Dependencies"]
  },
  {
    id: "ste-q-169",
    role: "STE",
    archetype: "First Approach",
    category: "Pre & Post PI Planning",
    difficulty: "Advanced",
    question: "What is the first approach when an RTE announces during Post-PI Planning that their train completed planning with zero dependencies identified, despite 4 other trains listing dependencies on them?",
    answer: "The first approach is a targeted dependency reconciliation check: (1) Intervene during the ART review to point out the discrepancy: 'Other trains have identified dependencies on your deliverables that do not appear in your plan'; (2) Convene the RTE, their Product Manager, and the dependent RTEs in an immediate 20-minute breakout; (3) Trace each dependent feature to ensure the provider ART has corresponding stories in their iteration backlogs; (4) Update the provider ART's plan to formally incorporate the dependent commitments before finalizing the Solution Program Board.",
    keyTakeaway: "First halt finalization, convene an immediate reconciliation breakout, and verify that the provider train has allocated capacity for dependent commitments.",
    safeReference: "SAFe 6.0: Post-PI Planning Dependency Reconciliation",
    tags: ["Dependency Reconciliation", "First Steps", "Post-PI Planning"]
  },
  {
    id: "ste-q-170",
    role: "STE",
    archetype: "First Approach",
    category: "Solution Backlog & Capabilities",
    difficulty: "Intermediate",
    question: "What is the first approach when an executive requests adding a major new Capability to the active PI midway through execution?",
    answer: "The first approach is to preserve the execution cadence while evaluating the economic trade-off: (1) Clarify that the active PI capacity across all ARTs is committed and in flight; (2) Engage Solution Management to score the requested Capability using WSJF; (3) Present the economic reality to the executive: to inject this Capability now requires canceling or de-scoping an existing in-flight Capability of equivalent size; (4) If not an existential emergency, place the Capability into the Solution Kanban for prioritization in the upcoming Pre-PI Planning.",
    keyTakeaway: "First enforce the capacity trade-off: injecting a new Capability mid-PI requires de-scoping an existing commitment of equal size.",
    safeReference: "SAFe 6.0: Managing Mid-PI Scope Changes in Large Solutions",
    tags: ["Scope Injection", "First Steps", "Economic Trade-Off"]
  }
];

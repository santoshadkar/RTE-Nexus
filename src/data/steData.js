/**
 * Solution Train Engineer (STE) & Large Solution SAFe 6.0 Data Repository
 * Full parity and specialized large-solution depth for the STE Role
 */

export const STE_ROLES_DATA = {
  title: "Solution Train Engineer (STE) Foundations & Enterprise Alignment",
  subtitle: "Mastering Large Solution Coordination, Multi-ART Alignment, and the Solution Train 0-90 Day Launch Playbook",
  overview: "In the Scaled Agile Framework (SAFe), the Solution Train Engineer (STE) is the chief servant leader and coach for the Solution Train, orchestrating multiple Agile Release Trains (ARTs) and coordinating external suppliers, hardware/firmware teams, and enterprise systems to deliver massive, complex cyber-physical or multi-platform software solutions (often 500 to 2,000+ engineers).",
  servantLeaderParadox: [
    {
      myth: "Myth 1: The STE is just an executive manager telling the RTEs what to do.",
      reality: "Reality: The STE does not manage RTEs hierarchically. The STE serves as a coach of coaches, aligning independent ARTs around shared Solution Intent, systemic flow, and enterprise architecture milestones."
    },
    {
      myth: "Myth 2: The STE only shows up twice per PI for Pre- and Post-PI Planning.",
      reality: "Reality: The STE leads continuous cross-ART coordination, facilitates bi-weekly Solution Syncs, tracks multi-train dependency paths, unblocks supplier integration delays, and optimizes the Solution Demo."
    },
    {
      myth: "Myth 3: Solution Trains are just bigger ARTs with the same meetings.",
      reality: "Reality: Large Solutions introduce Solution Intent (fixed vs variable), compliance/regulatory validation, complex supplier contracts, and asynchronous PI planning cycles across time zones."
    }
  ],
  interactionProtocols: [
    {
      direction: "How RTEs & Trains Approach the STE",
      scenarios: [
        { scenario: "Cross-ART Dependency Deadlock", action: "RTE alerts STE during or after Scrum of Scrums (SoS). STE facilitates an immediate joint session with both ART triads (PM/Arch/RTE) to renegotiate delivery iterations." },
        { scenario: "Supplier Firmware Delivery Slippage", action: "Supplier delivery lead and impacted RTE escalate to STE. STE coordinates with Solution Management to adjust Solution Milestones and re-sequence integration testing." },
        { scenario: "Solution Intent Architectural Conflict", action: "System Architect alerts Solution Architect and STE. STE schedules an Architecture Sync to agree on fixed vs variable interface contracts." }
      ]
    },
    {
      direction: "How the STE Approaches the Solution Train",
      scenarios: [
        { scenario: "Pre-PI Planning Alignment Drift", action: "6 weeks prior to PI Planning, STE reviews Solution Capabilities with Solution Management and convenes all RTEs to map train capacity vs capability allocation." },
        { scenario: "Solution Demo Integration Failure", action: "STE gathers DevOps/Infrastructure leads, Solution Architect, and System Team to evaluate test automation environments and staging harness failures." },
        { scenario: "Multi-ART Predictability Divergence", action: "STE diagnoses variance across trains where Train A has 95% predictability but Train B has 55%, preventing integrated capability releases." }
      ]
    }
  ],
  freshSolutionTrainPlaybook: [
    {
      phase: "Days 1 – 30: Multi-ART Discovery & Baseline",
      focus: "Train Topography & Value Stream Mapping",
      items: [
        "Map the Large Solution Value Stream: identify all ARTs, shared services, and third-party suppliers.",
        "Establish 1:1 trust rhythms with all constituent RTEs, Solution Managers, and Solution Architects.",
        "Audit ALM tooling interoperability (Jira Align / ADO multi-project linking) for cross-train visibility.",
        "Charter the Solution Train Sync cadence and Solution Architecture Working Group."
      ]
    },
    {
      phase: "Days 31 – 60: Pre-PI Orchestration & Solution Intent",
      focus: "Capability WSJF & Pre-PI Briefings",
      items: [
        "Facilitate Solution Backlog refinement: break Epics into Solution Capabilities with WSJF scores.",
        "Define Fixed vs Variable Solution Intent documentation protocols for safety/regulatory compliance.",
        "Host the enterprise Pre-PI Planning event with all ART leadership teams and executive business sponsors.",
        "Establish common cross-train integration milestones and System Team test harness environments."
      ]
    },
    {
      phase: "Days 61 – 90: Execution, Post-PI Alignment & Solution Demo",
      focus: "Cross-Train Flow, Post-PI ROAM & Solution Demo",
      items: [
        "Orchestrate Post-PI Planning to consolidate cross-ART dependencies, aggregate ROAM risks, and finalize Solution Objectives.",
        "Launch the bi-weekly Solution Sync and cross-train Impediment Escalation Board.",
        "Facilitate the enterprise-wide Solution Demo showcasing end-to-end integrated capability outcomes.",
        "Lead the Solution Train Inspect & Adapt (I&A) workshop, including multi-train quantitative metric reviews."
      ]
    }
  ],
  corePillars: [
    { id: "ste-servant-leader", title: "Enterprise Servant Coach", icon: "HeartHandshake", color: "from-sky-600 to-indigo-800", description: "Fosters servant leadership across RTEs and enterprise stakeholders, breaking down political silos and cultivating cross-train psychological safety.", keyAction: "Empowers RTEs and value streams to collaborate without hierarchical bureaucracy." },
    { id: "ste-solution-navigator", title: "Large Solution Flow Navigator", icon: "TrendingUp", color: "from-blue-600 to-cyan-700", description: "Steers multi-ART capabilities through the Solution Kanban, monitoring cross-train Flow Velocity, Flow Efficiency, and Lead Time.", keyAction: "Accelerates integrated time-to-market for massive systems." },
    { id: "ste-pre-post-facilitator", title: "Pre- & Post-PI Orchestrator", icon: "Calendar", color: "from-indigo-600 to-violet-800", description: "Directs Pre-PI Planning, Post-PI Planning, Solution Syncs, and integrated Solution Demos across all participating trains.", keyAction: "Synchronizes 500+ engineers into a unified delivery cadence." },
    { id: "ste-enterprise-roam", title: "Multi-ART Dependency & ROAM Master", icon: "ShieldAlert", color: "from-rose-600 to-amber-700", description: "Visualizes and neutralizes enterprise critical-path dependencies, supplier integration blocks, and regulatory risks.", keyAction: "Protects enterprise solution milestones from systemic derailment." }
  ],
  roleComparison: [
    { aspect: "Scale & People", sm: "1 Agile Team (5–9 people)", rte: "1 ART (50–125+ people, 5–12 teams)", ste: "1 Solution Train (500–2,000+ people, 3–10+ ARTs + Suppliers)" },
    { aspect: "Backlog Item Level", sm: "User Stories & Enablers", rte: "Features & Enablers (WSJF)", ste: "Capabilities & Enablers (WSJF)" },
    { aspect: "Cadence Events", sm: "Daily Standup, Iteration Planning, Retro", rte: "PI Planning, SoS, ART Sync, System Demo, I&A", ste: "Pre- & Post-PI Planning, Solution Sync, Solution Demo, Solution I&A" },
    { aspect: "Primary Triad Partners", sm: "Product Owner & Tech Lead", rte: "Product Management & System Architect", ste: "Solution Management & Solution Architect/Engineering" },
    { aspect: "Architectural Focus", sm: "Component code design & unit testing", rte: "ART Architectural Runway & API decoupling", ste: "Solution Intent, Multi-System Interfaces, Regulatory Compliance" },
    { aspect: "Key Flow Metric", sm: "Team Velocity & Burndown", rte: "ART Predictability Index & Flow Efficiency", ste: "Solution Predictability Index & Capability Lead Time" }
  ]
};

export const STE_DAY_IN_LIFE_DATA = [
  {
    phaseId: "pre-pi-large-solution",
    phaseName: "Pre-PI Planning Orchestration (Weeks 1 – 6)",
    badge: "Enterprise Alignment",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    summary: "Aligning Solution Management, Solution Architects, RTEs, and Suppliers before individual ART PI Plannings.",
    activities: [
      { time: "Weeks 1-3", title: "Capability Refinement & WSJF", desc: "Collaborate with Solution Management & Solution Architects to prioritize top Capabilities and update Solution Intent." },
      { time: "Week 4", title: "RTE Pre-PI Alignment Briefing", desc: "Convene all train RTEs to map preliminary train capacity allocations and identify cross-ART architectural enablers." },
      { time: "Week 5", title: "Supplier & Shared Services Sync", desc: "Validate hardware delivery schedules, third-party vendor APIs, and regulatory audit timeboxes." },
      { time: "Week 6", title: "Pre-PI Planning Event Facilitation", desc: "Conduct 1-day Pre-PI event with Business Owners, Solution Triad, and all ART leadership teams to establish the Solution Context." }
    ]
  },
  {
    phaseId: "art-pi-coordination",
    phaseName: "ART PI Planning Days (Cross-Train Support)",
    badge: "Synchronized Execution",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    summary: "Supporting ARTs during their breakout rooms and capturing multi-train dependency friction.",
    activities: [
      { time: "Day 1 (AM)", title: "Opening Address & Solution Vision", desc: "Deliver opening remarks alongside Solution Management setting overall enterprise objectives." },
      { time: "Day 1 (PM)", title: "Cross-ART Roaming & Dependency Mapping", desc: "Visit each ART breakout room to verify multi-train dependency cards on Program Boards." },
      { time: "Day 1 (EOD)", title: "Multi-ART Management Review", desc: "Participate in joint management problem-solving sessions resolving cross-train resource and scope clashes." },
      { time: "Day 2", title: "Preliminary Plan Aggregation", desc: "Collate draft ART objectives and unresolved dependencies for the Post-PI Planning consolidation." }
    ]
  },
  {
    phaseId: "post-pi-large-solution",
    phaseName: "Post-PI Planning (Consolidation & Commitment)",
    badge: "Enterprise Commitment",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    summary: "Consolidating all ART plans, finalizing Solution Objectives, and securing Enterprise Business Owner sign-off.",
    activities: [
      { time: "09:00 AM", title: "ART Plan Summaries", desc: "Each RTE presents their ART's committed PI Objectives, capacity utilization, and key delivery milestones." },
      { time: "11:00 AM", title: "Solution Dependency Board Reconciliation", desc: "Map critical path dependencies across trains, suppliers, and external partner dates." },
      { time: "01:30 PM", title: "Enterprise ROAMing Session", desc: "Facilitate ROAMing of risks that cannot be addressed at the single ART level with Executive Business Owners." },
      { time: "03:30 PM", title: "Solution Confidence Vote", desc: "Conduct Solution Train Fist-of-Five confidence vote. Target: average >= 3.5 across all train leadership." },
      { time: "04:30 PM", title: "Final Solution Objectives Publish", desc: "Synthesize and broadcast finalized Solution Objectives to enterprise leadership and portfolio management." }
    ]
  },
  {
    phaseId: "solution-cadence",
    phaseName: "Solution Execution Cadence (Weeks 1 – 10)",
    badge: "Cross-Train Flow",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-300/30",
    summary: "Bi-weekly Solution Syncs, continuous integration governance, and System Team synchronization.",
    activities: [
      { time: "Bi-Weekly (Wed)", title: "Solution Train Sync (Solution Sync)", desc: "STE leads meeting with all RTEs, Solution Managers, and Solution Architects to review cross-train progress and blockers." },
      { time: "Bi-Weekly (Alt)", title: "Solution Architecture Sync", desc: "Sync with Enterprise Architects to ensure Architectural Runway and NFR compliance across platforms." },
      { time: "Continuous", title: "Enterprise Impediment Removal", desc: "Escalate enterprise blockers to Portfolio/LPM and coordinate shared laboratory/cloud environment slots." },
      { time: "Monthly", title: "Supplier Governance & SLA Review", desc: "Inspect milestone commitments with third-party vendors and hardware engineering leads." }
    ]
  },
  {
    phaseId: "solution-demo-ia",
    phaseName: "Solution Demo & Solution Inspect & Adapt",
    badge: "Integrated Verification",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    summary: "Proving end-to-end capability delivery and driving systemic multi-train continuous improvement.",
    activities: [
      { time: "End of PI", title: "Enterprise Solution Demo", desc: "Facilitate live, end-to-end integration demo of full Solution Capabilities to C-level executives and customers." },
      { time: "I&A Part 1", title: "Multi-ART Solution Metric Telemetry", desc: "Present aggregated Solution Predictability Index, Cross-ART Flow Efficiency, and Capability Lead Time." },
      { time: "I&A Part 2", title: "Systemic Problem-Solving Workshop", desc: "Convene representatives from all ARTs, suppliers, and architecture to tackle large systemic impediments." },
      { time: "IP Iteration", title: "Improvement Backlog & Next Pre-PI Prep", desc: "Ensure root-cause action items are scheduled into ART enablers for the upcoming Program Increment." }
    ]
  }
];

export const STE_OPERATIONAL_PILLARS_DATA = [
  {
    id: "ste-pillar-1",
    title: "1. Pre- & Post-PI Planning Orchestration",
    tagline: "Synchronizing Multi-Train Cadence & Enterprise Context",
    icon: "Layers",
    color: "from-blue-600 to-indigo-700",
    description: "The STE leads Pre-PI and Post-PI Planning events that sandwich individual ART PI Plannings. Flawless orchestration aligns 3 to 10+ ARTs, aligns executive strategic intent, and produces unified Solution Objectives.",
    highlights: [
      "Solution Capability WSJF refinement & capacity allocation across trains",
      "Executive Context & Solution Vision alignment before team breakouts",
      "Post-PI Planning coordination to resolve cross-train planning mismatches",
      "Aggregated Enterprise Fist-of-Five Confidence Vote protocol"
    ],
    proTip: "Never permit ARTs to finalize commitments in isolation. Post-PI Planning is mandatory to ensure Train A didn't plan an API for Iteration 4 when Train B needed it in Iteration 2.",
    checklist: [
      "Solution Management finalized Top 10 Capabilities with accepted Benefit Hypotheses",
      "Pre-PI briefing conducted with all RTEs 2 weeks prior to planning",
      "Multi-ART dependency board schema standardized across all Jira/ADO instances",
      "Post-PI Planning date locked with all Business Owners and Executive Sponsors"
    ]
  },
  {
    id: "ste-pillar-2",
    title: "2. Cross-ART Dependency & Multi-Train ROAMing",
    tagline: "Eliminating Enterprise Bottlenecks & Critical Path Delays",
    icon: "ShieldAlert",
    color: "from-amber-600 to-rose-600",
    description: "Multi-train solutions fail when cross-ART dependencies are neglected. The STE creates an overarching Solution Dependency Board, tracks critical-path inter-train handoffs, and facilitates enterprise-level ROAMing.",
    highlights: [
      "Enterprise Solution Dependency Board visualization & SLA enforcement",
      "Escalation pathways for dependencies that cannot be resolved in single ART SoS",
      "ROAM framework applied at the Large Solution level with Enterprise Business Owners",
      "Supplier milestone integration and contract deliverable monitoring"
    ],
    proTip: "If a cross-ART dependency sits 'unowned' for more than 48 hours following PI Planning, it automatically becomes an Enterprise Critical Risk.",
    checklist: [
      "Every cross-train dependency has clear sending and receiving ART contacts",
      "Supplier delivery dates buffer-mapped against integration test milestones",
      "All 'Accepted' Solution Risks signed off by Portfolio Executives",
      "Critical path dependencies reviewed weekly in Solution Sync"
    ]
  },
  {
    id: "ste-pillar-3",
    title: "3. Solution Intent & Compliance Engineering",
    tagline: "Balancing Fixed Requirements with Agile Variability",
    icon: "FileCheck",
    color: "from-emerald-600 to-teal-700",
    description: "Large Solutions frequently operate in regulated environments (aerospace, automotive, medical, banking). The STE ensures the train maintains Solution Intent—a single source of truth capturing both fixed and variable requirements and compliance artifacts.",
    highlights: [
      "Fixed vs. Variable Solution Intent documentation governance",
      "Regulatory, security, and safety compliance integration into Agile cadences",
      "Continuous compliance verification replacing monolithic end-of-year audits",
      "Traceability between Capabilities, System Enablers, and Test Evidence"
    ],
    proTip: "Integrate compliance and audit verification into each iteration's Definition of Done instead of leaving it as a massive gate before production release.",
    checklist: [
      "Solution Intent repository established with version-controlled specifications",
      "Compliance officers and auditors embedded in Solution Demo reviews",
      "Non-Functional Requirements (NFRs) verified continuously across all ARTs",
      "Traceability matrix automated via ALM tooling"
    ]
  },
  {
    id: "ste-pillar-4",
    title: "4. Multi-Train Flow Telemetry & Solution Metrics",
    tagline: "Governing Enterprise Value Stream Velocity & Predictability",
    icon: "BarChart3",
    color: "from-purple-600 to-indigo-700",
    description: "The STE evaluates end-to-end solution throughput. Measuring single-team or single-ART metrics is insufficient; the STE tracks Solution Predictability Index, Multi-ART Flow Velocity, Capability Lead Time, and Systemic Queue Wait Times.",
    highlights: [
      "Solution Predictability Index (Aggregated across all ARTs)",
      "Capability Lead Time from portfolio approval to integrated Solution Demo",
      "Multi-ART Flow Load balancing to prevent train starvation or saturation",
      "Cross-train Cumulative Flow Diagrams (CFD) identifying shared-service bottlenecks"
    ],
    proTip: "If individual ARTs boast 90% predictability but the overall Solution Predictability is 60%, cross-train handoffs and integration failures are masking the real bottleneck.",
    checklist: [
      "Solution Predictability Index reported at every Solution I&A",
      "Capability cycle time measured continuously across Solution Kanban",
      "Shared services (Infra, Cloud, Security) WIP limits enforced",
      "Executive flow telemetry dashboards shared with Portfolio / VMO"
    ]
  },
  {
    id: "ste-pillar-5",
    title: "5. Supplier & High-Assurance Integration",
    tagline: "Coordinating External Vendors, Hardware, and Subsystems",
    icon: "Truck",
    color: "from-cyan-600 to-blue-700",
    description: "Most Large Solutions rely on external suppliers, specialized hardware, or third-party platforms. The STE acts as the primary Agile liaison, aligning supplier milestone cycles with Solution Train cadences.",
    highlights: [
      "Supplier integration cadences aligned with ART Iteration schedules",
      "Contractual milestones translated into Agile Capabilities and enablers",
      "Joint Solution Demo testing with third-party software and firmware",
      "Risk mitigation for single-source vendor vulnerabilities"
    ],
    proTip: "Invite key supplier leads into Pre-PI Planning and the Solution Sync. Treating vendors as distant contractors creates blind spots; treating them as train partners ensures predictability.",
    checklist: [
      "Supplier delivery dates mapped to specific PI iteration test slots",
      "Joint integration testing harness operational with System Team",
      "Supplier SLA escalation matrix established with Procurement / Legal",
      "Vendor attendance confirmed for Pre-PI Planning and Solution Demos"
    ]
  },
  {
    id: "ste-pillar-6",
    title: "6. Solution Portfolio & LPM Strategic Sync",
    tagline: "Connecting Strategic Themes & Lean Budgets to Mega-Trains",
    icon: "Compass",
    color: "from-violet-600 to-indigo-900",
    description: "The STE bridges the Solution Train to Lean Portfolio Management (LPM) and Enterprise Architecture, ensuring Lean Budget Guardrails, Participatory Budgeting, and Strategic Themes guide train investment.",
    highlights: [
      "Portfolio Epic to Solution Capability decomposition sync",
      "Lean Budget Guardrail compliance across multi-train capacity pools",
      "Participatory Budgeting facilitation representing large solution investments",
      "Enterprise VMO and Agile Center of Excellence (LACE) alignment"
    ],
    proTip: "Protect capacity allocation for System Enablers and Architectural Runway. Without enablers, Large Solutions accumulate massive technical debt that halts multi-train velocity.",
    checklist: [
      "Portfolio Epic progress reviewed monthly with LPM",
      "Capacity allocation agreements (New Value vs Enablers vs Tech Debt) honored",
      "Participatory Budgeting inputs prepared with Solution Management",
      "LACE improvements scaled across all participating ARTs"
    ]
  }
];

export const STE_AI_PROMPT_LIBRARY = [
  {
    id: "ste-p1",
    title: "Cross-ART Dependency Resolution Engine",
    category: "Dependency & Negotiation",
    tags: ["Dependencies", "Cross-ART", "Negotiation", "SoS"],
    promptText: `Act as a veteran SAFe Solution Train Engineer (STE) facilitating a multi-ART dependency deadlock. 

Context:
- Solution Train: {SOLUTION_NAME}
- Impacted ARTs: {TRAIN_A} (Sending) and {TRAIN_B} (Receiving)
- Core Dependency: {DEPENDENCY_DESCRIPTION}
- Delivery Conflict: {TRAIN_A} cannot deliver until Iteration 4, but {TRAIN_B} requires it by Iteration 2 to meet a critical customer release.

Instructions:
1. Provide an hour-by-hour mediation agenda between both ART triads (RTE, PM, System Architect).
2. Offer 3 viable compromise architectures (e.g. API stubbing/mocking, scope de-scoping, pairing swarms).
3. Draft the formal Cross-ART Dependency Agreement with concrete SLAs.
4. Define the escalation script if consensus is not reached within 24 hours.`
  },
  {
    id: "ste-p2",
    title: "Post-PI Planning Master Synthesis Deck",
    category: "PI Planning & Consolidation",
    tags: ["Post-PI", "Executive Reporting", "ROAM", "Confidence Vote"],
    promptText: `Act as an expert Solution Train Engineer (STE). Draft the comprehensive Executive Post-PI Planning Summary Report for Portfolio Leadership.

Details:
- Solution Train: {SOLUTION_NAME} | Target PI: {PI_NAME}
- Participating ARTs: {ART_LIST}
- Total Solution Planned Capacity: {TOTAL_CAPACITY_PTS} pts
- High-Priority Solution Capabilities: {CAPABILITY_LIST}
- Aggregated Cross-Train ROAM Risks: {ROAM_RISK_SUMMARY}
- Solution Confidence Vote Score: {CONFIDENCE_SCORE} / 5.0

Provide:
1. Executive Summary with overall readiness evaluation.
2. Capability Delivery Horizon by Iteration across all trains.
3. Cross-ART Critical Path Dependency Map.
4. Top 3 Unresolved Enterprise ROAM Risks requiring Business Owner intervention.
5. Immediate 7-day post-planning action plan for all RTEs.`
  },
  {
    id: "ste-p3",
    title: "Supplier Integration Crisis Playbook",
    category: "Supplier & Vendor Management",
    tags: ["Suppliers", "Vendors", "SLA", "Integration Delay"],
    promptText: `Act as a Solution Train Engineer (STE) managing a critical third-party vendor delivery failure.

Context:
- Solution: {SOLUTION_NAME}
- External Vendor: {VENDOR_NAME}
- Missing Deliverable: {DELIVERABLE_NAME} (e.g., Firmware SDK v2.4 / Cloud Connector)
- Impact: 3 internal ARTs are blocked, risking the end-of-PI Solution Demo and compliance certification.

Provide:
1. Urgent 48-Hour Supplier Remediation Action Protocol.
2. Alternative technical path to unblock internal development (mock harnesses, feature flags).
3. Contractual escalation notice to Procurement and Enterprise Legal.
4. Revised Solution Milestone adjustment communication for C-level Business Owners.`
  },
  {
    id: "ste-p4",
    title: "Solution Demo & Capability Acceptance Script",
    category: "Solution Demo & Governance",
    tags: ["Solution Demo", "Governance", "Acceptance", "Stakeholders"],
    promptText: `Act as an Enterprise Solution Train Engineer (STE) hosting the end-of-PI Solution Demo.

Parameters:
- Solution Name: {SOLUTION_NAME}
- Completed Capabilities: {COMPLETED_CAPABILITIES}
- Executive Attendees: Business Owners, Portfolio Managers, Lead Architects, Customer Champions.

Generate:
1. Minute-by-minute facilitation script for the 90-minute live demonstration.
2. Capability Acceptance Scoring Criteria for Business Owners (Planned Value vs Actual Value).
3. Q&A handling protocol for unexpected defects or performance gaps discovered live.
4. Transition script moving into the Solution Inspect & Adapt (I&A) workshop.`
  }
];

export const STE_AI_SIMULATOR_SCENARIOS = [
  {
    id: "ste-sim-1",
    title: "The Multi-ART Post-PI Deadlock Crisis",
    context: "During Post-PI Planning, Train Alpha (Core Platform) and Train Beta (Customer Portal) have reached an impasse. Train Alpha de-scoped the Authentication v2 API that Train Beta needs for its top committed PI Objective. Train Beta's RTE threatens a Confidence Vote of 1.",
    choices: [
      {
        id: "a",
        text: "Direct Train Alpha to cancel their technical enabler features and force them to deliver the API in Iteration 1.",
        verdict: "Sub-Optimal (Command-and-Control): Forcing Train Alpha destroys their technical runway, builds resentment, and risks architectural collapse.",
        score: 40
      },
      {
        id: "b",
        text: "Convene an immediate Management Review with Solution Management, Solution Architect, and both RTEs. Negotiate an API mock contract in Iteration 1 so Train Beta can develop against stubs while Train Alpha builds the production service in Iteration 3.",
        verdict: "Optimal (Servant Solution Leadership): Balances architectural health with customer value delivery, unblocking both trains through collaborative contract mocking.",
        score: 98
      },
      {
        id: "c",
        text: "Tell Train Beta to mark their objective as Uncommitted and re-plan their entire PI around other low-priority features.",
        verdict: "Defeatist: Abandons customer commitments without attempting cross-train technical compromise or scope restructuring.",
        score: 30
      }
    ]
  },
  {
    id: "ste-sim-2",
    title: "Supplier Delivery Breach on Critical Path",
    context: "Two weeks before the integrated Solution Demo, a major third-party hardware supplier notifies you that their specialized sensor units will be delayed by 5 weeks due to customs holds, blocking 4 ARTs from testing end-to-end integration.",
    choices: [
      {
        id: "a",
        text: "Cancel the Solution Demo and postpone the entire enterprise release by 2 months.",
        verdict: "Disproportionate Overreaction: Halting all train momentum for an external delay destroys enterprise predictability.",
        score: 35
      },
      {
        id: "b",
        text: "Engage the System Team and Solution Architect to deploy a hardware-in-the-loop software emulator for the sensor, proceed with the Solution Demo using the simulator, and transparently log the hardware verification as an Owned ROAM risk for the next iteration.",
        verdict: "Masterful (Resilient Large Solution Engineering): Demonstrates Agile adaptability, keeps software trains flowing, and manages physical risks transparently.",
        score: 100
      },
      {
        id: "c",
        text: "Demand that procurement sue the vendor immediately and refuse to approve their invoices.",
        verdict: "Adversarial & Unhelpful: Escalating to legal does not solve the engineering bottleneck or protect the customer release.",
        score: 25
      }
    ]
  }
];

export const STE_CAPTURE_TEMPLATES = {
  solutionFlowTelemetry: `# LARGE SOLUTION FLOW TELEMETRY SCORECARD
**Solution Train**: {SOLUTION_NAME} | **Target PI**: {PI_NAME} | **Date**: {DATE}
**Lead STE**: {STE_NAME} | **Participating ARTs**: {ART_COUNT} Trains ({TOTAL_ENGINEERS} Practitioners)

---

## 1. Executive Solution Flow Summary
| Metric | Solution Target | Current PI Actual | Status | Trend |
|---|---|---|---|---|
| **Solution Predictability Index** | 80% – 100% | {PREDICTABILITY_PCT}% | Benchmark Met | ↗ Upward |
| **Cross-ART Flow Efficiency** | > 35% | {FLOW_EFFICIENCY}% | Optimization Needed | → Stable |
| **Capability Lead Time (Avg)** | < 45 Days | {LEAD_TIME_DAYS} Days | On Target | ↘ Decreasing |
| **Solution Load (Active WIP)** | < 12 Capabilities | {ACTIVE_CAPABILITIES} Items | Healthy WIP | → Stable |
| **Multi-Train Flow Velocity** | 1,800 Pts | {TOTAL_VELOCITY} Pts | High Throughput | ↗ Upward |

---

## 2. Constituent ART Performance Matrix
| Agile Release Train (ART) | RTE Lead | Planned Pts | Delivered Pts | Predictability % | Open Blockers |
|---|---|---|---|---|---|
| Cloud Core Platform ART | RTE Dave | 480 | 455 | 94.8% | 1 External |
| Mobile & Customer UX ART | RTE Sarah | 520 | 480 | 92.3% | 0 |
| Data Analytics & AI ART | RTE Marcus | 390 | 360 | 92.3% | 2 Internal |
| Cyber-Physical Hardware ART | RTE Elena | 410 | 340 | 82.9% | 3 Supplier |

---

## 3. Top Systemic Bottlenecks & Queue Delays
- **Bottleneck 1**: Staging Environment contention during cross-ART regression runs (Average wait time: 3.8 days).
- **Bottleneck 2**: Third-Party Regulatory Approval lead time on cryptographic modules (Queue wait: 14 days).

---
*Generated via STE Nexus Telemetry Engine*`,

  crossArtRoamBoard: `# MULTI-ART SOLUTION DEPENDENCY & ROAM RISK REPORT
**Solution Train**: {SOLUTION_NAME} | **PI Cadence**: {PI_NAME} | **Date**: {DATE}

---

## 1. Enterprise ROAM Summary
- **Resolved**: {RESOLVED_COUNT} Risks
- **Owned**: {OWNED_COUNT} Risks (With named Executive Owners)
- **Accepted**: {ACCEPTED_COUNT} Risks (Business Owner Signed-Off)
- **Mitigated**: {MITIGATED_COUNT} Risks (Contingency Plans Active)

---

## 2. Critical Path Cross-Train Dependencies
| ID | Sending Train | Receiving Train | Capability / Feature | Required Iteration | Status | Impact if Missed |
|---|---|---|---|---|---|---|
| DEP-01 | Cloud Core ART | Mobile UX ART | OAuth Token Refresh v3 | Iteration 2 | On Schedule | Blocks Mobile Login |
| DEP-02 | Cyber-Physical ART | Analytics ART | Telemetry Bus Driver | Iteration 3 | At Risk | Delays ML Pipeline |
| DEP-03 | Vendor SDK Lead | Cloud Core ART | Sensor Driver v1.2 | Iteration 2 | Critical Block | Halts Regression Demo |

---

## 3. High-Severity ROAM Items Requiring Executive Action
- **RISK-101 [OWNED]**: Cloud infrastructure quota limit in EU region. (Owner: VP Infrastructure, SLA: 3 Days).
- **RISK-102 [MITIGATED]**: Sensor supplier shipping delay. (Contingency: Hardware emulator activated for demo).

---
*Generated via STE Nexus Enterprise Governance Engine*`,

  solutionDemoAcceptance: `# SOLUTION DEMO & CAPABILITY ACCEPTANCE SCORECARD
**Solution Train**: {SOLUTION_NAME} | **Target PI**: {PI_NAME} | **Demo Date**: {DATE}
**Solution Management**: {SOL_MGR} | **Solution Architect**: {SOL_ARCH}

---

## 1. Capability Acceptance Roster
| Capability ID | Capability Summary | Primary ARTs | Planned Value (PV 1-10) | Actual Value (AV 1-10) | Business Owner Sign-Off |
|---|---|---|---|---|---|
| CAP-101 | End-to-End Autonomous Vehicle Telemetry Streaming | Cloud + Hardware | 10 | 10 | Approved (VP Eng) |
| CAP-102 | Customer Mobile Telematics Dashboard | Mobile UX | 9 | 9 | Approved (VP Product) |
| CAP-103 | Real-Time Fleet Predictive Maintenance AI | Analytics + Cloud | 8 | 7 | Conditionally Approved |

---

## 2. Solution Demo Overall Score
- **Total Planned Business Value**: {PLANNED_BV} pts
- **Total Actual Business Value Delivered**: {ACTUAL_BV} pts
- **Overall Solution Achievement %**: {ACHIEVEMENT_PCT}%

---
*Generated via STE Nexus Solution Demo Studio*`
};

export const STE_CAREER_DATA = {
  assessmentQuestions: [
    { id: 'ste-q1', category: 'Large Solution Leadership', text: 'How comfortably can you facilitate high-stakes alignment across 5 to 10 independent Agile Release Trains simultaneously?' },
    { id: 'ste-q2', category: 'Large Solution Leadership', text: 'How effectively do you coach and mentor individual RTEs without interfering in their internal ART autonomy?' },
    { id: 'ste-q3', category: 'Pre/Post-PI Orchestration', text: 'How proficient are you in designing and orchestrating enterprise Pre-PI and Post-PI Planning events?' },
    { id: 'ste-q4', category: 'Pre/Post-PI Orchestration', text: 'How reliably can you resolve multi-train dependency deadlocks during Post-PI Planning sessions?' },
    { id: 'ste-q5', category: 'Supplier & Vendor Alignment', text: 'How effectively do you translate traditional third-party vendor contracts and milestones into Agile flow cadences?' },
    { id: 'ste-q6', category: 'Supplier & Vendor Alignment', text: 'How proactively do you handle hardware/firmware integration delays using software emulation and mock testing?' },
    { id: 'ste-q7', category: 'Enterprise Architecture & NFRs', text: 'How well do you collaborate with Solution Architects on Solution Intent, fixed vs variable specifications, and compliance traceability?' },
    { id: 'ste-q8', category: 'Multi-Train Flow Telemetry', text: 'How accurately can you diagnose enterprise flow bottlenecks across multi-train Cumulative Flow Diagrams (CFDs)?' },
    { id: 'ste-q9', category: 'Multi-Train Flow Telemetry', text: 'How consistently do you report aggregated Solution Predictability and Capability Lead Time to C-suite sponsors?' },
    { id: 'ste-q10', category: 'LPM & Enterprise Strategy', text: 'How comfortably do you participate in Lean Portfolio Management (LPM) and Participatory Budgeting forums?' }
  ],
  candidateProfiles: [
    {
      role: "Senior Release Train Engineer (RTE)",
      matchScore: "95% Prime Natural Trajectory",
      strengths: "Deep mastery of PI planning, servant coaching, flow telemetry, and ROAM risk governance at the ART level.",
      gapsToBridge: "Coordinating multiple ARTs concurrently, managing third-party supplier contracts, Fixed vs Variable Solution Intent.",
      transitionStrategy: "Co-facilitate Pre/Post-PI Planning alongside existing STE, complete SAFe Practice Consultant (SPC) certification, shadow Solution Syncs."
    },
    {
      role: "Enterprise Program Director / Portfolio Manager (PgMP)",
      matchScore: "85% High Structural Fit",
      strengths: "Enterprise budget governance, multi-vendor stakeholder management, executive board reporting, regulatory compliance.",
      gapsToBridge: "Unlearning traditional waterfall stage-gates, coaching servant leadership across Agile leaders, Lean flow principles.",
      transitionStrategy: "Master SAFe Large Solution dynamics, practice non-hierarchical influence, champion Solution Demo cadence over static status decks."
    },
    {
      role: "Chief Solutions Architect / Systems Engineering Director",
      matchScore: "80% Deep Technical Alignment",
      strengths: "Multi-platform system architecture, cyber-physical integration, NFR compliance, interface contract management.",
      gapsToBridge: "Facilitating 500+ person events, resolving cross-train political conflicts, servant coaching of non-technical leaders.",
      transitionStrategy: "Partner with Lead RTE to develop facilitation mastery, co-lead Solution Train Sync, obtain SAFe RTE/SPC credentials."
    },
    {
      role: "Agile Transformation Director / Enterprise Coach",
      matchScore: "78% Coaching Alignment",
      strengths: "Enterprise change management, LACE leadership, executive mindset coaching, value stream identification.",
      gapsToBridge: "Operational mechanics of multi-train ALM tooling, supplier contract delivery cycles, deep technical dependency paths.",
      transitionStrategy: "Immerse in Solution Kanban governance, shadow Post-PI Planning dependency reconciliation, lead Solution I&A workshops."
    }
  ],
  certifications: [
    {
      name: "SAFe 6.0 Solution Train Engineer (STE) Mastery Track",
      issuingBody: "Scaled Agile, Inc. (SAFe 6.0)",
      targetAudience: "Practicing RTEs, Large Solution Coaches, Enterprise Program Directors.",
      prerequisites: "SAFe RTE certification or SAFe Practice Consultant (SPC), experience facilitating at least 4 ART PI Planning cycles.",
      coreDomains: [
        "Large Solution Value Stream Coordination",
        "Pre- and Post-PI Planning Mastery",
        "Solution Intent & Continuous Compliance Verification",
        "Managing Suppliers & Multi-Vendor Agile Cadences",
        "Enterprise ROAMing & Multi-Train Flow Telemetry"
      ],
      examFormat: "Scenario-based enterprise questions, multiple choice, 90 mins, 75%+ passing score."
    },
    {
      name: "SAFe 6.0 Practice Consultant (SPC 6.0)",
      issuingBody: "Scaled Agile, Inc.",
      targetAudience: "Enterprise Change Agents, Transformation Leaders, STEs.",
      prerequisites: "Deep Agile background, 5+ years enterprise coaching experience.",
      coreDomains: [
        "Leading SAFe & Implementing SAFe",
        "Value Stream Identification & ART Topography",
        "Launching Large Solution Trains",
        "Lean Portfolio Management (LPM) Alignment"
      ],
      examFormat: "Comprehensive 60-question exam, 120 mins, 80%+ passing score."
    },
    {
      name: "PMI Program Management Professional (PgMP)",
      issuingBody: "Project Management Institute (PMI)",
      targetAudience: "Senior Directors managing complex multi-program initiatives.",
      prerequisites: "Secondary degree with 7+ years of program management experience.",
      coreDomains: [
        "Strategic Program Management",
        "Program Life Cycle & Enterprise Alignment",
        "Benefits Realization & Stakeholder Engagement",
        "Governance & Multi-Vendor Oversight"
      ],
      examFormat: "170 multiple-choice questions, 4 hours duration."
    }
  ],
  careerRoadmap: [
    {
      stage: "Foundation: Lead RTE",
      years: "Years 0 – 2",
      roleTitle: "Senior Release Train Engineer",
      focus: "Demonstrate elite flow predictability (>90%) on a single ART of 100+ practitioners. Master SoS, System Demos, and DORA telemetry.",
      milestone: "Facilitate 8+ flawless PI Plannings, achieve SAFe RTE 6.0 certification."
    },
    {
      stage: "Step 1: Associate STE / Cross-ART Coach",
      years: "Years 2 – 3",
      roleTitle: "Co-STE / Multi-Train Alignment Coach",
      focus: "Shadow the primary STE on a Large Solution Train. Co-facilitate Pre- and Post-PI Planning, manage the cross-ART dependency board.",
      milestone: "Resolve at least 10 critical multi-train dependencies, launch multi-ART Solution Sync."
    },
    {
      stage: "Step 2: Full Solution Train Engineer (STE)",
      years: "Years 3 – 5",
      roleTitle: "Principal Solution Train Engineer",
      focus: "Full ownership of a multi-thousand person Solution Train. Direct Pre-PI, Post-PI, Solution Demo, and multi-vendor supplier integration.",
      milestone: "Achieve SPC 6.0 certification, establish enterprise Solution Flow telemetry scorecards."
    },
    {
      stage: "Executive Summit: Enterprise VMO / Agile VP",
      years: "Year 5+",
      roleTitle: "VP of Enterprise Agility / Value Management Office (VMO) Director",
      focus: "Drive enterprise transformation across all Solution Trains and portfolios. Partner with C-suite on Lean Portfolio Management.",
      milestone: "Direct multi-portfolio participatory budgeting, author enterprise agile standards."
    }
  ]
};

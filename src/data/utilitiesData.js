/**
 * High-Stakes Crisis Playbook & Multi-ALM Query Data for RTEs and STEs
 */

export const TOUGH_SPOT_SCENARIOS = [
  {
    id: "crisis-1",
    title: "The Mid-PI Executive Scope Injection",
    severity: "Critical Governance Breach",
    category: "Scope & Lean Budgets",
    trigger: "A senior Business Vice President approaches a team directly during Iteration 3 demanding a new 'emergency' feature be delivered by the end of the PI, without involving Product Management or offering any scope trade-offs.",
    psychologicalDynamics: "Teams feel intimidated and say 'yes' out of fear of executive retaliation, silently sacrificing their committed PI Objectives and causing burnout.",
    safeGuardrail: "SAFe Principle #1 (Take an economic approach) & Principle #6 (Visualize and limit WIP, reduce batch sizes). PI commitments are a closed-loop covenant.",
    verbatimScript: `"VP [Name], I completely appreciate the commercial urgency of this initiative. In SAFe, our teams commit to Business PI Objectives with full capacity allocated. If we inject this scope mid-stream without adjustment, it guarantees the failure of our existing committed Objectives [X and Y]. Let us convene an emergency 20-minute alignment session with Product Management and our Business Owners today. We will evaluate whether to swap out an equivalent WSJF feature or treat this as the #1 priority for the upcoming PI planning."`,
    actionSteps: [
      "Shield the team immediately: Instruct the Scrum Master and PO to politely redirect the VP to the RTE.",
      "Calculate the Economic Trade-off: Work with PM to determine which in-flight committed feature must be canceled or deferred.",
      "Convene Business Owners: Host an emergency 20-minute Management Review to sign off on the scope swap.",
      "Update ALM & Program Board: Log the change transparently in the PI change audit log."
    ]
  },
  {
    id: "crisis-2",
    title: "Product Management vs System Architecture Feud",
    severity: "High Structural Conflict",
    category: "Triad Alignment",
    trigger: "Product Management demands 100% feature capacity to hit an aggressive commercial marketing date. System Architecture insists on allocating 40% capacity for architectural runway and technical debt reduction to prevent system outages.",
    psychologicalDynamics: "PM views Arch as a blocker delaying customer revenue; Arch views PM as reckless and creating unsustainable fragility.",
    safeGuardrail: "Capacity Allocation Guardrails (Lean Portfolio Management) and SAFe Principle #5 (Base milestones on objective evaluation of working systems).",
    verbatimScript: `"Let us look at our empirical telemetry over the last 3 PIs rather than opinions. Our Defect Leakage is up 14% and Lead Time for Changes has lengthened by 6 days directly due to legacy database bottlenecks. If we allocate 0% for Enablers, customer features in PI+1 will take twice as long. Our established Capacity Allocation Guardrail is 70% Features, 20% Enablers, and 10% Technical Debt. Let us prioritize the Enabler backlog using WSJF so only the highest-ROI architectural enablers enter this PI."`,
    actionSteps: [
      "Establish Objective Telemetry: Present DORA Change Failure Rate and Lead Time data to make the technical debt visible.",
      "Enforce Capacity Allocation: Hold the triad to pre-agreed portfolio guardrails (e.g. 70/20/10).",
      "Apply WSJF to Enablers: Require Architects to calculate Cost of Delay and Risk Reduction for enablers alongside business features.",
      "Document in PI Objectives: Ensure top enablers are written as formal PI Objectives scored by Business Owners."
    ]
  },
  {
    id: "crisis-3",
    title: "Offshore Team Disconnect & Time-Zone Delay",
    severity: "High Operational Drag",
    category: "Team Dynamics & Flow",
    trigger: "An offshore team in another time zone is consistently missing Scrum of Scrums (SoS), failing to raise critical API dependencies until the day of release, and reporting 100% green status until the day before the System Demo.",
    psychologicalDynamics: "Offshore team operates in low psychological safety, fearing punitive action if they report red status or ask for help across cultural barriers.",
    safeGuardrail: "SAFe Core Value of Transparency and Respect for People. Decentralized decision-making with centralized cadence.",
    verbatimScript: `"Team, green status that turns red at the 11th hour hurts everyone. In our Agile Release Train, raising a blocker or dependency early is celebrated—it is proof of professional diligence, not failure. We are shifting our SoS cadence by 1 hour to align with your core working hours, pairing you with a dedicated onshore co-SM, and tracking dependency lead times visually on our digital board rather than in status calls."`,
    actionSteps: [
      "Inspect Working Hours: Shift Scrum of Scrums or establish a rotating time-zone schedule so offshore leads are not attending at midnight.",
      "Promote Psychological Safety: The RTE visits the team (virtually or Gemba Walk) to model blameless impediment logging.",
      "Digital Dependency Pairing: Enforce daily ALM dependency link tracking instead of relying on verbal status meetings.",
      "Pair with Onshore Mentor: Assign an experienced onshore Scrum Master to partner with the offshore SM during breakouts."
    ]
  },
  {
    id: "crisis-4",
    title: "Hostile Business Owner at System Demo",
    severity: "Executive Friction",
    category: "Stakeholder Engagement",
    trigger: "During the integrated System Demo, a key Business Owner publicly gives an Actual Value (AV) score of 2/10 for a committed PI Objective, stating that what was demonstrated is completely different from what they expected.",
    psychologicalDynamics: "Lack of mid-PI feedback loops between the PO and Business Owner resulted in divergent assumptions, culminating in public embarrassment and damaged morale.",
    safeGuardrail: "SAFe Principle #4 (Build incrementally with fast, integrated learning cycles) and Bi-Weekly System Demo protocol.",
    verbatimScript: `"Thank you for the frank feedback [Business Owner]. The purpose of this System Demo is exactly this: to inspect objective working software early rather than at end-of-year delivery. Let us schedule a 30-minute deep dive tomorrow morning with the Feature PO and System Architect. We will unpack the exact gap between the Benefit Hypothesis and what was built, and formulate an immediate adjustment in our IP Iteration backlog."`,
    actionSteps: [
      "Acknowledge with Dignity: Prevent defensive team arguments during the public demonstration.",
      "Conduct Gap Audit: Review the initial acceptance criteria agreed upon during PI Planning Day 2.",
      "Establish Mid-Iteration PO/BO Checkpoints: Require bi-weekly 15-minute wireframe/feature walkthroughs between the PO and BO to eliminate end-of-PI surprises.",
      "Account for Objective Variance: Document the score accurately in the ART Predictability Index to ensure metric transparency."
    ]
  },
  {
    id: "crisis-5",
    title: "Confidence Vote Collapse (< 2.5) on PI Day 2",
    severity: "Critical Planning Emergency",
    category: "PI Event Facilitation",
    trigger: "On PI Planning Day 2 at 03:00 PM, the train Fist-of-Five confidence vote averages 2.2 across 8 teams, with 3 teams holding up 1s and 2s due to unmanaged cross-train dependencies and unrealistic capacity expectations.",
    psychologicalDynamics: "Teams feel exhausted, pressured by management to accept unrealistic plans, and are speaking up at the final safety gate.",
    safeGuardrail: "SAFe Planning Guardrail: Never exit PI Planning with an average confidence vote under 3.0. Forcing commitment is an anti-pattern.",
    verbatimScript: `"Train, thank you for your brutal honesty. The Fist-of-Five vote is our ultimate safety brake, and it just worked as intended. We are not committing to an impossible plan. We are pausing the clock. All Scrum Masters, Product Managers, and Business Owners will convene in the main room right now for a 45-minute Scope-Trimming and Dependency Rebalancing session. Teams, take a 30-minute break. We will not leave today until we have a plan the train genuinely believes in."`,
    actionSteps: [
      "Do Not Override the Vote: Under no circumstances pressure teams to re-vote without altering the underlying plan.",
      "Convene 45-Min Emergency Triage: Assemble PMs, Archs, and BOs to identify low-WSJF committed objectives.",
      "Shift Committed to Uncommitted: Move 15–20% of committed scope to Uncommitted Objectives, giving teams capacity buffer.",
      "Re-vote: Present the revised scope adjustments and re-take the confidence vote."
    ]
  },
  {
    id: "crisis-6",
    title: "Discovery of Secret 'Shadow Projects'",
    severity: "Capacity & Transparency Breach",
    category: "Governance & Flow",
    trigger: "The RTE discovers that 2 senior developers on Team Alpha have been spending 50% of their iteration capacity on an off-the-books side project requested by an IT director, hiding work in miscellaneous tasks.",
    psychologicalDynamics: "Director bypasses the Lean Portfolio funnel; developers feel conflicted between their team commitment and pleasing a functional manager.",
    safeGuardrail: "SAFe Principle #6 (Visualize and limit WIP) and Zero-Dark-Work policy. All work must flow through the Portfolio Backlog.",
    verbatimScript: `"In SAFe, there is zero tolerance for dark work—not because the initiative is unworthy, but because unvisualized work starves our committed value streams of capacity. If this project has commercial merit, it must enter our Portfolio Funnel, receive a WSJF score, and compete transparently for train capacity. Until it is approved by Lean Portfolio Management, all team capacity returns 100% to committed PI Objectives."`,
    actionSteps: [
      "Visualize the Dark Work: Immediately create an Epic / Feature card in the ALM system capturing the work.",
      "Notify Functional Manager: Clarify the boundary between functional management (people development) and value stream leadership (content prioritization).",
      "Escalate to LACE / Portfolio: If the director persists, bring the conflict to the Lean Portfolio Management (LPM) sync.",
      "Rebalance Team Capacity: Adjust iteration burndown baselines to account for the diverted hours."
    ]
  }
];

export const ALM_QUERY_CHEATSHEET_DATA = [
  {
    category: "Dependency & Program Board Hygiene",
    tool: "Jira (JQL)",
    title: "Cross-Team Dependencies Missing Target Iterations",
    description: "Identifies dependency issue links that lack target delivery iterations, leading to hidden pipeline collisions.",
    query: `issueFunction in linkedIssuesOf("status not in (Closed, Done)", "is blocked by") AND fixVersion is EMPTY`
  },
  {
    category: "Dependency & Program Board Hygiene",
    tool: "Azure DevOps (WIQL)",
    title: "Cross-Team Links Missing Target Iteration Path",
    description: "Detects unassigned or misaligned successor links between team projects in Azure DevOps.",
    query: `SELECT [System.Id], [System.Title], [System.AssignedTo], [System.IterationPath] 
FROM WorkItemLinks 
WHERE ([Source].[System.WorkItemType] = 'Feature' AND [Source].[System.State] <> 'Done') 
  AND ([System.Links.LinkType] = 'System.LinkTypes.Dependency-Forward') 
  AND ([Target].[System.IterationPath] = @CurrentIteration) 
MODE (MustContain)`
  },
  {
    category: "Backlog & WSJF Readiness",
    tool: "Jira (JQL)",
    title: "Features Scheduled for PI Planning Missing WSJF or Estimates",
    description: "Finds features queued for the upcoming PI that lack Business Value, Time Criticality, or Story Point sizing.",
    query: `project = "ART" AND issuetype = Feature AND "Target PI" = "PI-2026.3" AND ("Cost of Delay" is EMPTY OR "Job Size" is EMPTY OR "Story Points" is EMPTY)`
  },
  {
    category: "Flow & Kanban Blockers",
    tool: "Jira (JQL)",
    title: "Work Item Age (WIA) Alert (> 14 Days In Progress)",
    description: "Surfaces active user stories or features that have been idling 'In Progress' for over two weeks.",
    query: `project in ("ART_TEAMS") AND status = "In Progress" AND status changed to "In Progress" before -14d ORDER BY updated ASC`
  },
  {
    category: "Flow & Kanban Blockers",
    tool: "Azure DevOps (WIQL)",
    title: "Stale Active Work Items (> 14 Days without Update)",
    description: "Finds user stories in ADO that have had no state changes or commits in the last 14 days.",
    query: `SELECT [System.Id], [System.Title], [System.State], [System.ChangedDate] 
FROM WorkItems 
WHERE [System.WorkItemType] in ('User Story', 'Product Backlog Item') 
  AND [System.State] = 'Active' 
  AND [System.ChangedDate] < @Today - 14`
  },
  {
    category: "PI Alignment & Dark Work",
    tool: "Jira (JQL)",
    title: "Orphan Stories (Stories Not Rolling Up to a Feature)",
    description: "Finds rogue team user stories that are not linked to any approved ART Feature or Strategic Objective.",
    query: `project in ("ART_TEAMS") AND issuetype = Story AND "Epic Link" is EMPTY AND parent is EMPTY AND sprint in openSprints()`
  },
  {
    category: "PI Objectives & Predictability",
    tool: "Jira (JQL)",
    title: "Committed Business PI Objectives at Risk of Slippage",
    description: "Tracks committed PI Objectives whose underlying features or stories are blocked or incomplete in Iteration 4/5.",
    query: `issuetype = "PI Objective" AND "Objective Type" = "Committed" AND "Target PI" = "PI-2026.3" AND status not in (Completed, Achieved)`
  }
];

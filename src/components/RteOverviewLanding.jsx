import React from 'react';
import { RTE_ROLES_DATA } from '../data/rteData';
import { 
  Sparkles, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Layers, 
  ShieldAlert, 
  TrendingUp, 
  Calendar,
  HeartHandshake,
  Clock,
  Briefcase,
  AlertOctagon,
  Target,
  Workflow,
  CheckSquare
} from 'lucide-react';

export default function RteOverviewLanding({ onNavigateTab }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake': return HeartHandshake;
      case 'TrendingUp': return TrendingUp;
      case 'Calendar': return Calendar;
      case 'ShieldAlert': return ShieldAlert;
      default: return HeartHandshake;
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* IMPRESSIVE HERO BANNER - Direct hit to RTE */}
      <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-sapphire-500/30 overflow-hidden bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-sapphire-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-12 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sapphire-400" />
            <span>The Ultimate One-Stop RTE Portal</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Welcome to <span className="text-gradient">RTE Nexus</span>: The Chief Command Center for Release Train Engineers
          </h1>

          {/* Definition Box */}
          <div className="p-6 rounded-2xl bg-navy-950/90 border border-slate-800 space-y-3 shadow-xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sapphire-400 flex items-center space-x-1.5">
              <Compass className="w-4 h-4" />
              <span>What is a Release Train Engineer (RTE)?</span>
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              In the Scaled Agile Framework (SAFe), the <strong>Release Train Engineer (RTE)</strong> is the chief servant leader, master coach, and operational facilitator for an <strong>Agile Release Train (ART)</strong>—a cross-functional team of 50 to 125+ practitioners delivering continuous value stream outcomes.
            </p>
          </div>

          {/* Quick Action Launchpad */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button 
              onClick={() => onNavigateTab('servant-leadership')}
              className="px-6 py-3.5 rounded-2xl bg-sapphire-600 hover:bg-sapphire-500 text-white font-bold text-xs flex items-center space-x-2 shadow-glow-sapphire transition-all transform hover:scale-105"
            >
              <span>Servant Leadership & Fresh ART</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigateTab('day-in-life')}
              className="px-6 py-3.5 rounded-2xl bg-navy-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 flex items-center space-x-2 transition-all"
            >
              <span>Day in the Life Playbook</span>
            </button>
            <button 
              onClick={() => onNavigateTab('wsjf-calculator')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <span>WSJF Priority Calculator</span>
            </button>
            <button 
              onClick={() => onNavigateTab('ai-copilot')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-md flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch AI Suite</span>
            </button>
          </div>
        </div>
      </div>

      {/* CORE RTE RESPONSIBILITIES GRID */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sapphire-500/10 border border-sapphire-500/30 text-sapphire-300 text-xs font-semibold mb-2">
            <Award className="w-3.5 h-3.5 text-sapphire-400" />
            <span>SAFe 6.0 Core Role Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center space-x-2">
            <span>The 4 Core Responsibilities of a Release Train Engineer</span>
          </h2>
          <p className="text-xs text-slate-400">Exhaustive operational breakdown covering day-to-day duties, key governance artifacts, and quantitative success KPIs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RTE_ROLES_DATA.corePillars.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <div 
                key={pillar.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-5 bg-navy-900/90"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider uppercase text-sapphire-400 block">{pillar.tagline}</span>
                        <h3 className="text-lg font-heading font-bold text-white">{pillar.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed">{pillar.description}</p>

                  {/* Day-to-Day Responsibilities List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200 block">Core Operational Duties:</span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {pillar.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Artifacts Produced */}
                  <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 text-[11px] space-y-1">
                    <span className="text-slate-400 block">Key Governance Artifacts:</span>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {pillar.keyArtifacts.map((art, aIdx) => (
                        <span key={aIdx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                          {art}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="p-3 rounded-2xl bg-navy-950 border border-slate-800 text-xs text-sapphire-300 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Primary Impact:</strong> {pillar.keyAction}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 font-mono">
                    <strong>Success Metric:</strong> {pillar.governanceKPI}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NEW DEEP-DIVE: THE RTE ARTIFACT & CADENCE OPERATING SYSTEM */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-bold text-sapphire-400 uppercase tracking-wider block">Operational Rigor</span>
          <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
            <Workflow className="w-5 h-5 text-sapphire-400" />
            <span>The RTE's 5 Sacred Cadence Artifacts</span>
          </h2>
          <p className="text-xs text-slate-400">Key contractual outputs an RTE must produce and govern throughout the 10-week PI cycle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Artifact 1</span>
            <h3 className="text-sm font-bold text-white">The ART Program Board</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Visual roadmap mapping Features, Enablers, and Milestones against Iterations 1–5. Connected by red dependency strings that expose critical path bottlenecks.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
              <strong>Owner:</strong> RTE & Scrum Masters | <strong>Audience:</strong> Entire ART
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Artifact 2</span>
            <h3 className="text-sm font-bold text-white">Business PI Objectives Sheet</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Synthesized list of Committed and Uncommitted Objectives written in business language, scored by Business Owners for Planned Value (1–10) and Actual Value (1–10).
            </p>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
              <strong>Owner:</strong> Teams & RTE | <strong>Sign-Off:</strong> Business Owners
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Artifact 3</span>
            <h3 className="text-sm font-bold text-white">The Enterprise ROAM Risk Board</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Consolidated register of all train-level risks classified into Resolved, Owned, Accepted, and Mitigated. Guarantees zero unowned impediments exit Day 2.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
              <strong>Owner:</strong> RTE | <strong>Audit Requirement:</strong> Signed off in Breakout 2
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Artifact 4</span>
            <h3 className="text-sm font-bold text-white">Scrum of Scrums (SoS) Blocker Log</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Weekly active impediment register tracking cross-team blockers with age (in days), SLA status, individual assigned owners, and root-cause categories.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
              <strong>Cadence:</strong> Twice weekly | <strong>Escalation Target:</strong> LACE / VP
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Artifact 5</span>
            <h3 className="text-sm font-bold text-white">I&A Problem-Solving Backlog</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Output of the 5-Whys and Ishikawa Fishbone session conducted at Inspect & Adapt. Formulates concrete continuous improvement stories prioritized into the next IP Iteration.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
              <strong>Target:</strong> IP Iteration Enablers | <strong>Sponsor:</strong> RTE & LACE
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">Safety Gate</span>
            <h3 className="text-sm font-bold text-white">Confidence Vote Record</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Official tally of the Fist-of-Five vote across all teams. A permanent governance artifact proving the train stood behind the delivery plan before code began.
            </p>
            <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
              <strong>Threshold:</strong> Avg &gt;= 3.0 | <strong>Timing:</strong> PI Day 2 (03:30 PM)
            </div>
          </div>
        </div>
      </div>

      {/* NEW DEEP-DIVE: RTE ANTI-PATTERNS & FIELD CORRECTIVES */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">Field Mastery</span>
          <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
            <AlertOctagon className="w-5 h-5 text-rose-400" />
            <span>Top 4 RTE Anti-Patterns & Corrective Coaching</span>
          </h2>
          <p className="text-xs text-slate-400">Common failure modes observed in enterprise Agile transformations and how the elite RTE corrects them.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-400 uppercase">Anti-Pattern 1: The 'Status Police' RTE</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-500/30">Dysfunctional</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Behavior:</strong> Running Scrum of Scrums like a 1990s status meeting, grilling Scrum Masters on why tasks aren't closed in Jira rather than discussing systemic flow impediments.
            </p>
            <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-xs text-emerald-300 space-y-1">
              <span className="font-bold text-[10px] uppercase text-emerald-400 block">The Corrective Action:</span>
              <p className="text-slate-200">Shift the focus exclusively to the <strong>Program Board</strong> and inter-team dependencies. Ask: <em>"What cross-team impediment is slowing you down, and how can I clear the path?"</em></p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-400 uppercase">Anti-Pattern 2: The 'Lone Wolf' Problem Solver</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-500/30">Dysfunctional</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Behavior:</strong> The RTE takes every single blocker onto their own shoulders, privately chasing managers and becoming a single-point-of-failure bottleneck.
            </p>
            <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-xs text-emerald-300 space-y-1">
              <span className="font-bold text-[10px] uppercase text-emerald-400 block">The Corrective Action:</span>
              <p className="text-slate-200">Coach the Scrum Masters to self-organize. Facilitate triad problem-solving between SMs, PMs, and Archs so resolution capacity is decentralized across the train.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-400 uppercase">Anti-Pattern 3: Skipping the IP Iteration</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-500/30">Dysfunctional</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Behavior:</strong> Treating the Innovation & Planning (IP) iteration as a catch-up buffer for delayed user stories because the train overcommitted.
            </p>
            <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-xs text-emerald-300 space-y-1">
              <span className="font-bold text-[10px] uppercase text-emerald-400 block">The Corrective Action:</span>
              <p className="text-slate-200">The IP iteration is sacred. If user stories spill into the IP iteration, record them as incomplete in the Predictability Index. Protect IP time for Hackathons, I&A, and PI Planning prep.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-400 uppercase">Anti-Pattern 4: Toothless ROAMing</span>
              <span className="text-[9px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-500/30">Dysfunctional</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>The Behavior:</strong> Putting 30 risks into 'Accepted' or assigning 'Owned' to generic teams (e.g. 'DevOps Team') with no named human or delivery deadline.
            </p>
            <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-xs text-emerald-300 space-y-1">
              <span className="font-bold text-[10px] uppercase text-emerald-400 block">The Corrective Action:</span>
              <p className="text-slate-200">Every Owned risk must have a named individual and an SLA date. Every Accepted risk must have a written financial/commercial consequence approved by a Business Owner.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ROLE COMPARISON MATRIX: SM vs RTE vs STE */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <Users className="w-6 h-6 text-sky-400" />
              <span>Agile Leadership Comparison: SM vs RTE vs STE (12 Operational Dimensions)</span>
            </h2>
            <p className="text-xs text-slate-400">Deep-dive structural boundaries, handoffs, metrics, and authority levels across Team, Train, and Large Solution scales.</p>
          </div>
          <span className="text-xs font-bold text-sapphire-300 bg-sapphire-500/10 px-3 py-1.5 rounded-full border border-sapphire-500/30 w-fit">
            SAFe 6.0 Role Architecture Matrix
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-navy-950 text-slate-300 uppercase tracking-wider">
                <th className="p-4 rounded-tl-xl font-bold w-1/5">Operational Dimension</th>
                <th className="p-4 font-bold text-slate-300 w-1/4">Scrum Master (SM)</th>
                <th className="p-4 font-bold text-sapphire-300 bg-sapphire-500/10 w-1/3">Release Train Engineer (RTE)</th>
                <th className="p-4 rounded-tr-xl font-bold text-sky-300 w-1/4">Solution Train Engineer (STE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {RTE_ROLES_DATA.roleComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-navy-900/60 transition-colors">
                  <td className="p-4 font-bold text-white flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sapphire-400 shrink-0 mt-1.5"></span>
                    <span className="leading-snug">{row.aspect}</span>
                  </td>
                  <td className="p-4 text-slate-300 leading-relaxed">{row.sm}</td>
                  <td className="p-4 text-sapphire-200 font-medium bg-sapphire-500/5 border-x border-sapphire-500/10 leading-relaxed">{row.rte}</td>
                  <td className="p-4 text-sky-200 leading-relaxed">{row.ste}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

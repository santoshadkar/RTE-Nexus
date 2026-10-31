import React, { useState } from 'react';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCw, 
  ShieldAlert, 
  Check, 
  Copy, 
  Lightbulb,
  ArrowRight,
  TrendingDown,
  Sparkles
} from 'lucide-react';

export default function ConfidenceVoteEngine() {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Team Alpha (Core Services)', vote: 4, notes: 'Dependencies mapped with Team Beta' },
    { id: 2, name: 'Team Beta (Payment API)', vote: 3, notes: 'Tight iteration 3 testing window' },
    { id: 3, name: 'Team Gamma (Mobile UX)', vote: 2, notes: 'Waiting on auth endpoint spec from Arch' },
    { id: 4, name: 'Team Delta (DevOps & Infra)', vote: 4, notes: 'CI/CD pipeline test harness ready' },
    { id: 5, name: 'Team Epsilon (Analytics & AI)', vote: 2, notes: 'Overcapacity by 25 story points' },
    { id: 6, name: 'Team Zeta (Reporting)', vote: 4, notes: 'Clear acceptance criteria' }
  ]);

  const [copied, setCopied] = useState(false);

  // Calculate Average Vote
  const totalVotes = teams.reduce((acc, t) => acc + t.vote, 0);
  const averageVote = Number((totalVotes / teams.length).toFixed(2));
  const isPassing = averageVote >= 3.0;

  const handleVoteChange = (id, newVote) => {
    setTeams(teams.map(t => t.id === id ? { ...t, vote: Number(newVote) } : t));
  };

  const handleNotesChange = (id, newNotes) => {
    setTeams(teams.map(t => t.id === id ? { ...t, notes: newNotes } : t));
  };

  const lowVoteTeams = teams.filter(t => t.vote < 3);

  const handleExportMarkdown = () => {
    const report = `# PI PLANNING FIST-OF-FIVE CONFIDENCE VOTE AUDIT
Date: ${new Date().toLocaleDateString()}
Train Status: ${isPassing ? '✅ PASSING (Commitment Accepted)' : '🚨 FAILED (Remediation Protocol Triggered)'}
Average Confidence Vote: **${averageVote} / 5.0** (SAFe Minimum Threshold: 3.0)

## Team-by-Team Confidence Breakdown
${teams.map(t => `- **${t.name}**: ${t.vote}/5 (${t.vote < 3 ? '🚨 LOW CONFIDENCE' : '✅ CONFIDENT'}) — Notes: ${t.notes || 'None'}`).join('\n')}

${!isPassing ? `\n## 🚨 MANDATORY REMEDIATION PROTOCOL ACTIVE
1. Freeze planning clock immediately. Do not exit PI Planning.
2. Convene 45-minute Emergency Scope-Trimming triage with Business Owners and Product Management.
3. Identify low-WSJF committed features from Teams ${lowVoteTeams.map(t => t.name).join(', ')} and convert to Uncommitted Objectives.
4. Resolve critical cross-train dependency blocks before re-taking the vote.` : '\n## Commitment Finalized\nThe Agile Release Train has achieved consensus and committed to its PI Objectives.'}
`;
    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span>PI Day 2 Safety Gate</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Fist-of-Five <span className="text-gradient">Confidence Vote & Remediation Engine</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          At the conclusion of PI Planning Day 2, the RTE facilitates the Fist-of-Five Confidence Vote across all teams. If the average vote is <strong>below 3.0</strong>, the plan is rejected and the RTE triggers the mandatory Scope-Trimming Remediation Playbook.
        </p>
      </div>

      {/* Live Vote Dashboard Gauge */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
        isPassing 
          ? 'bg-gradient-to-r from-emerald-950/40 via-navy-950 to-navy-900 border-emerald-500/40' 
          : 'bg-gradient-to-r from-rose-950/50 via-navy-950 to-navy-900 border-rose-500/50 shadow-glow-rose'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">PI Commitment Consensus Status</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center space-x-2 justify-center md:justify-start">
              {isPassing ? (
                <>
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  <span>Consensus Achieved: Plan Committed!</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-7 h-7 text-rose-400 animate-pulse" />
                  <span>Vote Below 3.0: Remediation Required</span>
                </>
              )}
            </h2>
            <p className="text-xs text-slate-300 max-w-xl">
              {isPassing 
                ? 'Average confidence meets the SAFe threshold (>= 3.0). The train has committed to its Business PI Objectives.' 
                : `${lowVoteTeams.length} teams have raised 1s or 2s. The plan cannot be finalized without scope trimming or dependency unblocking.`}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 text-center min-w-[140px]">
              <span className={`text-4xl font-extrabold font-mono block ${isPassing ? 'text-emerald-400' : 'text-rose-400'}`}>
                {averageVote}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Average Vote (1-5)</span>
            </div>

            <button
              onClick={handleExportMarkdown}
              className="px-4 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center space-x-2 shadow-glow-sapphire shrink-0"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Audit Copied!' : 'Export Audit Log'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Team Votes Input Table */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-lg font-heading font-bold text-white flex items-center space-x-2">
            <Users className="w-5 h-5 text-sky-400" />
            <span>Team-by-Team Fist-of-Five Tally</span>
          </h2>
          <span className="text-xs text-slate-400">Scale: 1 (No Confidence) to 5 (Absolute Confidence)</span>
        </div>

        <div className="space-y-3">
          {teams.map((t) => (
            <div key={t.id} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="md:w-64 space-y-0.5">
                <span className="text-xs font-bold text-white block">{t.name}</span>
                <span className={`text-[10px] font-bold ${t.vote < 3 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {t.vote < 3 ? '🚨 High Risk / Unconfident' : '✅ Confident'}
                </span>
              </div>

              {/* Vote Selector 1 to 5 */}
              <div className="flex items-center space-x-1.5 shrink-0">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleVoteChange(t.id, num)}
                    className={`w-9 h-9 rounded-xl font-bold text-xs font-mono transition-all ${
                      t.vote === num
                        ? num < 3
                          ? 'bg-rose-600 text-white shadow-md'
                          : num === 3
                          ? 'bg-amber-600 text-white shadow-md'
                          : 'bg-emerald-600 text-white shadow-md'
                        : 'bg-navy-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Notes */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Root cause or justification for vote..."
                  value={t.notes}
                  onChange={(e) => handleNotesChange(t.id, e.target.value)}
                  className="w-full bg-navy-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:border-sky-400 focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Remediation Playbook (Appears if average < 3 or low votes exist) */}
      {!isPassing && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-rose-500/40 bg-navy-950/90 space-y-6">
          <div className="flex items-center space-x-3 border-b border-rose-500/30 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">Emergency Protocol</span>
              <h3 className="text-xl font-heading font-bold text-white">RTE Remediation Playbook: Low Confidence Vote</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-navy-900 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs uppercase">
                <span>Step 1: Pause & Protect</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Do not allow leadership to pressure teams into changing their fingers. Congratulate the train for honesty: <em>"The safety brake worked."</em>
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase">
                <span>Step 2: 45-Min Scope Triage</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Convene PM, System Architect, and Business Owners. Identify bottom 15–20% WSJF items and shift them to <strong>Uncommitted Objectives</strong> to free team capacity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900 border border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase">
                <span>Step 3: Re-take Vote</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Present adjusted scope openly to the train. Re-run the Fist-of-Five vote. Target: average &gt;= 3.0 across all teams.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

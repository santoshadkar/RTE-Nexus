import React, { useState } from 'react';
import { TOUGH_SPOT_SCENARIOS } from '../data/utilitiesData';
import { 
  ShieldAlert, 
  MessageSquare, 
  CheckCircle2, 
  Search, 
  Copy, 
  Check, 
  Lightbulb, 
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Scale
} from 'lucide-react';

export default function ToughSpotPlaybook() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(TOUGH_SPOT_SCENARIOS[0].id);
  const [copiedId, setCopiedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentScenario = TOUGH_SPOT_SCENARIOS.find(s => s.id === selectedScenarioId) || TOUGH_SPOT_SCENARIOS[0];

  const filteredScenarios = TOUGH_SPOT_SCENARIOS.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.trigger.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopyScript = (script, id) => {
    navigator.clipboard.writeText(script);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
          <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
          <span>RTE & STE Crisis Emergency Kit</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          The <span className="text-gradient">"Tough Spot" Crisis Playbook</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          Real-world leadership isn't textbook perfection. When rogue executives inject scope mid-PI, Product Management feuds with Architecture, or offshore teams drop off, you need <strong>word-for-word diplomatic scripts</strong>, psychological grounding, and unassailable SAFe governance citations.
        </p>
      </div>

      {/* Search & Scenario Selector */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {filteredScenarios.map(s => {
            const isActive = s.id === selectedScenarioId;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedScenarioId(s.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-glow-rose'
                    : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search crisis scenarios..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-navy-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-rose-500"
          />
        </div>
      </div>

      {/* Selected Crisis Deep Dive Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-8 bg-navy-900/90">
        
        {/* Scenario Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                {currentScenario.severity}
              </span>
              <span className="text-xs text-slate-400 font-bold">{currentScenario.category}</span>
            </div>
            <h2 className="text-2xl font-heading font-extrabold text-white mt-1">{currentScenario.title}</h2>
          </div>
        </div>

        {/* Trigger & Psychology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">The Flashpoint (Trigger)</span>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">{currentScenario.trigger}</p>
          </div>

          <div className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Underlying Psychology & Fear</span>
            <p className="text-xs text-slate-300 leading-relaxed">{currentScenario.psychologicalDynamics}</p>
          </div>
        </div>

        {/* Verbatim Script Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-950 via-slate-900 to-indigo-950 border border-sky-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center space-x-1.5">
              <MessageSquare className="w-4 h-4" />
              <span>Word-For-Word Diplomatic Leadership Script</span>
            </span>

            <button
              onClick={() => handleCopyScript(currentScenario.verbatimScript, currentScenario.id)}
              className="px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md"
            >
              {copiedId === currentScenario.id ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedId === currentScenario.id ? 'Script Copied!' : 'Copy Script'}</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm font-medium text-slate-100 italic leading-relaxed bg-navy-950/80 p-4 rounded-xl border border-slate-800">
            {currentScenario.verbatimScript}
          </p>

          <div className="flex items-center space-x-2 text-[11px] text-sky-300">
            <Scale className="w-3.5 h-3.5 shrink-0" />
            <span><strong>Governance Authority Cited:</strong> {currentScenario.safeGuardrail}</span>
          </div>
        </div>

        {/* 4 Action Steps */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>RTE Action Protocol & Escalation Pathway</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentScenario.actionSteps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs text-slate-200 flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

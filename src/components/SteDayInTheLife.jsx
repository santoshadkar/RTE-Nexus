import React, { useState } from 'react';
import { STE_DAY_IN_LIFE_DATA } from '../data/steData';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Layers, 
  ChevronRight, 
  Compass, 
  Users, 
  ShieldAlert, 
  Activity,
  FileSpreadsheet
} from 'lucide-react';

export default function SteDayInTheLife() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const currentPhase = STE_DAY_IN_LIFE_DATA[activePhaseIndex];

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* HEADER */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
          <Clock className="w-4 h-4 text-sky-400" />
          <span>Cadence of Large Solution Execution</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Day in the Life of a <span className="text-gradient">Solution Train Engineer (STE)</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          Follow the operational timeline of an STE across Pre-PI Planning, multi-train breakout support, Post-PI consolidation, the bi-weekly Solution Sync rhythm, and the enterprise-wide Solution Demo & Inspect & Adapt.
        </p>
      </div>

      {/* PHASE STEPPER */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {STE_DAY_IN_LIFE_DATA.map((phase, idx) => {
          const isActive = idx === activePhaseIndex;
          return (
            <button
              key={phase.phaseId}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all space-y-2 flex flex-col justify-between ${
                isActive
                  ? 'bg-sky-600/20 border-sky-500/60 shadow-glow-sapphire text-white'
                  : 'bg-navy-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-navy-900'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border w-fit ${phase.badgeColor}`}>
                {phase.badge}
              </span>
              <span className="text-xs font-bold leading-tight block">{phase.phaseName}</span>
            </button>
          );
        })}
      </div>

      {/* TIMELINE ACTIVITIES EXPANDED */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6 bg-navy-900/90">
        <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">Phase Deep Dive</span>
            <h2 className="text-2xl font-heading font-bold text-white">{currentPhase.phaseName}</h2>
          </div>
          <p className="text-xs text-slate-300 italic">{currentPhase.summary}</p>
        </div>

        <div className="space-y-4">
          {currentPhase.activities.map((act, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-navy-950 border border-slate-800 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-sky-500/40 transition-colors">
              <div className="sm:w-36 shrink-0">
                <span className="px-3 py-1 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-mono font-bold block text-center">
                  {act.time}
                </span>
              </div>
              <div className="space-y-1 flex-1">
                <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{act.title}</span>
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

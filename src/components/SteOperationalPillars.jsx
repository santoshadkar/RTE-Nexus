import React, { useState } from 'react';
import { STE_OPERATIONAL_PILLARS_DATA } from '../data/steData';
import { 
  Layers, 
  ShieldAlert, 
  FileCheck, 
  BarChart3, 
  Truck, 
  Compass, 
  CheckSquare, 
  Sparkles, 
  Lightbulb,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function SteOperationalPillars({ onOpenAiSuite }) {
  const [activePillarId, setActivePillarId] = useState(STE_OPERATIONAL_PILLARS_DATA[0].id);
  const [checkedItems, setCheckedItems] = useState({});

  const activePillar = STE_OPERATIONAL_PILLARS_DATA.find(p => p.id === activePillarId) || STE_OPERATIONAL_PILLARS_DATA[0];

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'ShieldAlert': return ShieldAlert;
      case 'FileCheck': return FileCheck;
      case 'BarChart3': return BarChart3;
      case 'Truck': return Truck;
      case 'Compass': return Compass;
      default: return Layers;
    }
  };

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({
      ...prev,
      [`${activePillarId}-${idx}`]: !prev[`${activePillarId}-${idx}`]
    }));
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* HEADER BANNER */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-4 h-4 text-sky-400" />
          <span>Large Solution Architecture Framework</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          6 Core Operational Areas for the <span className="text-gradient">Solution Train Engineer</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          From Pre- & Post-PI orchestration and cross-ART dependency ROAMing to Fixed/Variable Solution Intent, Supplier integration, and Multi-Train Flow Telemetry. Master the 6 operational pillars required to govern thousands of engineering practitioners in harmony.
        </p>
      </div>

      {/* PILLAR SELECTOR TABS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {STE_OPERATIONAL_PILLARS_DATA.map((pillar) => {
          const Icon = getPillarIcon(pillar.icon);
          const isActive = pillar.id === activePillarId;

          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-sky-600/20 border-sky-500/60 shadow-glow-sapphire text-white'
                  : 'bg-navy-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-navy-900'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-sky-500 text-white' : 'bg-navy-950 text-slate-400'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold leading-tight block">{pillar.title}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE PILLAR EXPANDED VIEW */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-8 bg-navy-900/90">
        
        {/* Pillar Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">{activePillar.tagline}</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">{activePillar.title}</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">{activePillar.description}</p>
          </div>

          {onOpenAiSuite && (
            <button
              onClick={onOpenAiSuite}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-bold flex items-center space-x-2 shrink-0 shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate AI Prompt for this Pillar</span>
            </button>
          )}
        </div>

        {/* Highlights & Pro-Tip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left: Key Focus Highlights */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>Core Operational Deliverables</span>
            </h3>

            <div className="space-y-3">
              {activePillar.highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-2xl bg-navy-950 border border-slate-800 text-xs text-slate-200 flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pro-Tip & Interactive Checklist */}
          <div className="space-y-6">
            
            {/* Pro-Tip Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-navy-950 to-navy-950 border border-amber-500/30 space-y-2">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Enterprise STE Field Pro-Tip</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed italic">{activePillar.proTip}</p>
            </div>

            {/* Checklist */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-400" />
                <span>Pillar Execution Readiness Checklist</span>
              </h3>

              <div className="space-y-2">
                {activePillar.checklist.map((item, idx) => {
                  const isChecked = checkedItems[`${activePillarId}-${idx}`];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className="p-3.5 rounded-xl bg-navy-950 border border-slate-800 flex items-start space-x-3 cursor-pointer hover:border-sky-500/40 transition-colors"
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-slate-700 bg-navy-900'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs ${isChecked ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

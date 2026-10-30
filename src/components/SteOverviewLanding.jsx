import React from 'react';
import { STE_ROLES_DATA } from '../data/steData';
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
  Network,
  Truck,
  FileCheck
} from 'lucide-react';

export default function SteOverviewLanding({ onNavigateTab }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake': return HeartHandshake;
      case 'TrendingUp': return TrendingUp;
      case 'Calendar': return Calendar;
      case 'ShieldAlert': return ShieldAlert;
      case 'Truck': return Truck;
      case 'FileCheck': return FileCheck;
      default: return HeartHandshake;
    }
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* STE HERO BANNER */}
      <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-sky-500/30 overflow-hidden bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-sky-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-12 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Enterprise Large Solution Scale (500–2,000+ Engineers)</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Welcome to <span className="text-gradient">STE Nexus</span>: The Chief Command Center for Solution Train Engineers
          </h1>

          {/* Definition Box */}
          <div className="p-6 rounded-2xl bg-navy-950/90 border border-slate-800 space-y-3 shadow-xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center space-x-1.5">
              <Network className="w-4 h-4" />
              <span>What is a Solution Train Engineer (STE)?</span>
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              In SAFe Large Solution delivery, the <strong>Solution Train Engineer (STE)</strong> is the chief servant leader, enterprise orchestrator, and coach of coaches. The STE aligns multiple Agile Release Trains (ARTs), third-party suppliers, hardware/firmware subsystems, and regulatory compliance into a unified delivery stream.
            </p>
          </div>

          {/* Quick Action Launchpad */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button 
              onClick={() => onNavigateTab('ste-pillars')}
              className="px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center space-x-2 shadow-glow-sapphire transition-all transform hover:scale-105"
            >
              <span>6 Large Solution Pillars</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigateTab('ste-day-in-life')}
              className="px-6 py-3.5 rounded-2xl bg-navy-900 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-slate-800 flex items-center space-x-2 transition-all"
            >
              <span>Pre/Post-PI Playbook</span>
            </button>
            <button 
              onClick={() => onNavigateTab('ste-tools')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xs shadow-md flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Layers className="w-4 h-4" />
              <span>Multi-ART Tools & Templates</span>
            </button>
          </div>
        </div>
      </div>

      {/* CORE STE RESPONSIBILITIES */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-heading font-bold text-white flex items-center space-x-2">
            <Award className="w-6 h-6 text-sky-400" />
            <span>4 Core Responsibilities of an STE</span>
          </h2>
          <p className="text-xs text-slate-400">The foundational large-solution leadership pillars that define the STE role.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STE_ROLES_DATA.corePillars.map((pillar) => {
            const Icon = getIcon(pillar.icon);
            return (
              <div 
                key={pillar.id}
                className="glass-panel p-6 rounded-3xl border border-slate-800 glass-panel-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-navy-950 border border-slate-800 text-sky-300">
                      Enterprise Pillar
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white">{pillar.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{pillar.description}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-navy-950 border border-slate-800 text-xs text-sky-300 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Enterprise Impact:</strong> {pillar.keyAction}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 0-90 DAY FRESH SOLUTION TRAIN PLAYBOOK */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            <span>Launch Blueprint</span>
          </div>
          <h2 className="text-xl font-heading font-bold text-white">
            Fresh Solution Train Launch: 0 – 90 Day Playbook
          </h2>
          <p className="text-xs text-slate-400">Step-by-step strategy for the STE when chartering and synchronizing a new Large Solution Train.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STE_ROLES_DATA.freshSolutionTrainPlaybook.map((phase, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-4">
              <div className="border-b border-slate-800 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">{phase.phase}</span>
                <h3 className="text-sm font-bold text-white mt-1">{phase.focus}</h3>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {phase.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* LEADERSHIP COMPARISON TABLE */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
              <Users className="w-6 h-6 text-sky-400" />
              <span>Full Leadership Comparison: SM vs RTE vs STE</span>
            </h2>
            <p className="text-xs text-slate-400">Clear boundary demarcations across Team, ART, and Large Solution scales.</p>
          </div>
          <span className="text-xs font-bold text-sky-300 bg-sky-500/10 px-3 py-1.5 rounded-full border border-sky-500/30 w-fit">
            SAFe 6.0 Large Solution Spec
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-navy-950 text-slate-300 uppercase tracking-wider">
                <th className="p-4 rounded-tl-xl font-bold">Dimension</th>
                <th className="p-4 font-bold text-slate-300">Scrum Master (SM)</th>
                <th className="p-4 font-bold text-sapphire-300">Release Train Engineer (RTE)</th>
                <th className="p-4 rounded-tr-xl font-bold text-sky-300 bg-sky-500/10">Solution Train Engineer (STE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {STE_ROLES_DATA.roleComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-navy-900/60 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    <span>{row.aspect}</span>
                  </td>
                  <td className="p-4 text-slate-300">{row.sm}</td>
                  <td className="p-4 text-sapphire-200">{row.rte}</td>
                  <td className="p-4 text-sky-200 font-semibold bg-sky-500/5 border-x border-sky-500/10">{row.ste}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

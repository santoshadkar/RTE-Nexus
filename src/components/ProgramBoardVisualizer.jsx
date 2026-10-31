import React, { useState } from 'react';
import { 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  ArrowRight, 
  HelpCircle,
  Flag,
  Share2,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function ProgramBoardVisualizer() {
  const [selectedIteration, setSelectedIteration] = useState('All');

  // Teams on the ART
  const teams = [
    { id: 't1', name: 'Team Alpha (Core Services)' },
    { id: 't2', name: 'Team Beta (Payment API)' },
    { id: 't3', name: 'Team Gamma (Mobile UX)' },
    { id: 't4', name: 'Team Delta (DevOps & Cloud)' }
  ];

  // Iterations 1-5 + IP Iteration
  const iterations = ['Iter 1', 'Iter 2', 'Iter 3', 'Iter 4', 'Iter 5', 'IP Iter'];

  // Work items placed on the Program Board
  const [items, setItems] = useState([
    { id: 'item-1', title: 'Payment API v3.0 Spec', teamId: 't2', iteration: 'Iter 1', type: 'Feature' },
    { id: 'item-2', title: 'OAuth Token Service v2', teamId: 't1', iteration: 'Iter 2', type: 'Enabler' },
    { id: 'item-3', title: 'Mobile Checkout Screen', teamId: 't3', iteration: 'Iter 3', type: 'Feature' },
    { id: 'item-4', title: 'Kubernetes Cluster Refresh', teamId: 't4', iteration: 'Iter 2', type: 'Enabler' },
    { id: 'item-5', title: 'Biometrics Authentication', teamId: 't3', iteration: 'Iter 2', type: 'Feature' },
    { id: 'item-6', title: 'Payment Gateway Integration Test', teamId: 't2', iteration: 'Iter 4', type: 'Feature' }
  ]);

  // Dependencies: fromItemId depends on toItemId
  const [dependencies, setDependencies] = useState([
    { id: 'dep-1', fromId: 'item-3', toId: 'item-1', note: 'Mobile Checkout needs Payment API Spec' },
    { id: 'dep-2', fromId: 'item-5', toId: 'item-2', note: 'Biometrics requires OAuth Token Service' } // Conflicting if both in Iter 2!
  ]);

  // Form state
  const [newTitle, setNewTitle] = useState('');
  const [newTeamId, setNewTeamId] = useState('t1');
  const [newIteration, setNewIteration] = useState('Iter 1');
  const [newType, setNewType] = useState('Feature');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setItems([
      ...items,
      {
        id: `item-${Date.now()}`,
        title: newTitle,
        teamId: newTeamId,
        iteration: newIteration,
        type: newType
      }
    ]);
    setNewTitle('');
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(i => i.id !== id));
    setDependencies(dependencies.filter(d => d.fromId !== id && d.toId !== id));
  };

  // Helper to determine if a dependency is in conflict (receiving team scheduled in same or earlier iteration than sending team)
  const iterIndex = (iter) => iterations.indexOf(iter);

  const getDependencyStatus = (dep) => {
    const fromItem = items.find(i => i.id === dep.fromId);
    const toItem = items.find(i => i.id === dep.toId);
    if (!fromItem || !toItem) return { valid: true };

    const fromIdx = iterIndex(fromItem.iteration);
    const toIdx = iterIndex(toItem.iteration);

    // If 'from' (the dependent work) is scheduled before or same as 'to' (the deliverable needed), it's a conflict!
    if (fromIdx <= toIdx) {
      return {
        conflict: true,
        message: `🚨 Conflict: "${fromItem.title}" (${fromItem.iteration}) is scheduled before or concurrently with prerequisite "${toItem.title}" (${toItem.iteration})!`
      };
    }
    return { conflict: false };
  };

  const conflictCount = dependencies.filter(d => getDependencyStatus(d).conflict).length;

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
          <Share2 className="w-3.5 h-3.5 text-rose-400" />
          <span>PI Planning Artifact</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Visual <span className="text-gradient">Program Board & Dependency String Engine</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          The Program Board is the visual heartbeat of PI Planning. Teams post Features and Enablers across iterations, connecting them with string dependencies. This engine automatically detects <strong>red string conflicts</strong> when receiving teams plan work concurrently or before prerequisites are delivered!
        </p>
      </div>

      {/* Conflict Status Alert */}
      {conflictCount > 0 ? (
        <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
          <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-5 h-5 text-rose-400 animate-pulse" />
            <span>{conflictCount} Cross-Team Dependency Collision Detected!</span>
          </div>
          <ul className="space-y-1 text-xs text-rose-200">
            {dependencies.map(d => {
              const status = getDependencyStatus(d);
              if (status.conflict) {
                return <li key={d.id}>• {status.message}</li>;
              }
              return null;
            })}
          </ul>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center space-x-3 text-xs text-emerald-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>All cross-team dependency paths are properly sequenced across iterations. No scheduling deadlocks!</span>
        </div>
      )}

      {/* Add Item Form */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <h2 className="text-sm font-bold text-white flex items-center space-x-2">
          <Plus className="w-4 h-4 text-sky-400" />
          <span>Place Feature or Enabler on Program Board</span>
        </h2>

        <form onSubmit={handleAddItem} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <input
            type="text"
            placeholder="Work item title (e.g. Auth Token API)"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="lg:col-span-2 bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
          />

          <select
            value={newTeamId}
            onChange={(e) => setNewTeamId(e.target.value)}
            className="bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-bold"
          >
            {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>

          <select
            value={newIteration}
            onChange={(e) => setNewIteration(e.target.value)}
            className="bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-bold"
          >
            {iterations.map(i => <option key={i} value={i}>{i}</option>)}
          </select>

          <div className="flex space-x-2">
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
              className="flex-1 bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-bold"
            >
              <option value="Feature">Feature</option>
              <option value="Enabler">Enabler</option>
              <option value="Milestone">Milestone</option>
            </select>
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {/* Visual Program Board Grid */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-lg font-heading font-bold text-white flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-sky-400" />
            <span>Interactive Program Board Grid (Teams × Iterations)</span>
          </h2>
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded bg-sky-500 inline-block"></span>
              <span className="text-slate-300">Feature</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded bg-indigo-500 inline-block"></span>
              <span className="text-slate-300">Enabler</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded bg-rose-500 inline-block"></span>
              <span className="text-rose-300 font-bold">Dependency String</span>
            </span>
          </div>
        </div>

        <div className="min-w-[800px]">
          {/* Header row with Iteration columns */}
          <div className="grid grid-cols-7 gap-2 border-b border-slate-800 pb-2 text-xs font-bold text-slate-300 text-center uppercase tracking-wider">
            <div className="text-left pl-2">Agile Team</div>
            {iterations.map(i => (
              <div key={i} className={`p-1.5 rounded-lg ${i === 'IP Iter' ? 'bg-purple-950/40 text-purple-300 border border-purple-500/30' : 'bg-navy-950'}`}>
                {i}
              </div>
            ))}
          </div>

          {/* Team Rows */}
          <div className="divide-y divide-slate-800/60 pt-2">
            {teams.map(team => (
              <div key={team.id} className="grid grid-cols-7 gap-2 py-3 items-start min-h-[90px]">
                <div className="text-xs font-bold text-white pr-2 space-y-1">
                  <span>{team.name}</span>
                </div>

                {iterations.map(iter => {
                  const cellItems = items.filter(i => i.teamId === team.id && i.iteration === iter);

                  return (
                    <div key={iter} className="p-1.5 rounded-xl bg-navy-950/60 border border-slate-800/80 min-h-[80px] space-y-1.5">
                      {cellItems.map(item => {
                        const hasConflict = dependencies.some(d => (d.fromId === item.id || d.toId === item.id) && getDependencyStatus(d).conflict);

                        return (
                          <div
                            key={item.id}
                            className={`p-2 rounded-lg text-[10px] font-medium border space-y-1 relative group ${
                              item.type === 'Enabler'
                                ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-200'
                                : 'bg-sky-950/60 border-sky-500/40 text-sky-200'
                            } ${hasConflict ? 'ring-2 ring-rose-500' : ''}`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold truncate">{item.title}</span>
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-400"
                              >
                                ×
                              </button>
                            </div>
                            <span className="text-[8px] uppercase tracking-wider text-slate-400 block">{item.type}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

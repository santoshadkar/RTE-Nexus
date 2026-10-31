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
  Sparkles,
  Database,
  RefreshCw,
  FileJson,
  UploadCloud,
  Check,
  Copy,
  SlidersHorizontal,
  Link2
} from 'lucide-react';

export default function ProgramBoardVisualizer() {
  // ALM Data Source Configuration State
  const [almSource, setAlmSource] = useState('jira-dc'); // 'jira-dc' | 'jira-cloud' | 'azure-devops' | 'json-import'
  const [jqlQuery, setJqlQuery] = useState('project = "TITAN" AND issuetype in (Feature, Enabler) AND "Target PI" = "PI-2026.3"');
  const [wiqlQuery, setWiqlQuery] = useState('SELECT [System.Id], [System.Title], [System.IterationPath] FROM WorkItems WHERE [System.WorkItemType] = "Feature" AND [IterationPath] UNDER "Titan\\PI-2026.3"');
  const [serverUrl, setServerUrl] = useState('https://jira.enterprise.corp/rest/api/2/search');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState('Synced: Jira Data Center (REST API v2)');
  const [showAlmModal, setShowAlmModal] = useState(false);
  const [jsonImportText, setJsonImportText] = useState('');

  // Teams on the ART
  const teams = [
    { id: 't1', name: 'Team Alpha (Core Services)', key: 'ALPHA' },
    { id: 't2', name: 'Team Beta (Payment API)', key: 'BETA' },
    { id: 't3', name: 'Team Gamma (Mobile UX)', key: 'GAMMA' },
    { id: 't4', name: 'Team Delta (DevOps & Cloud)', key: 'DELTA' }
  ];

  // Iterations 1-5 + IP Iteration
  const iterations = ['Iter 1', 'Iter 2', 'Iter 3', 'Iter 4', 'Iter 5', 'IP Iter'];

  // Work items placed on the Program Board with ALM metadata
  const [items, setItems] = useState([
    { 
      id: 'item-1', 
      key: 'TITAN-104', 
      title: 'Payment API v3.0 Spec', 
      teamId: 't2', 
      iteration: 'Iter 1', 
      type: 'Feature',
      status: 'In Progress',
      points: 13,
      assignee: 'Dave (Arch Lead)',
      source: 'Jira Data Center'
    },
    { 
      id: 'item-2', 
      key: 'TITAN-219', 
      title: 'OAuth Token Service v2', 
      teamId: 't1', 
      iteration: 'Iter 2', 
      type: 'Enabler',
      status: 'Ready',
      points: 8,
      assignee: 'Sarah (Sec Arch)',
      source: 'Jira Data Center'
    },
    { 
      id: 'item-3', 
      key: 'TITAN-312', 
      title: 'Mobile Checkout Screen', 
      teamId: 't3', 
      iteration: 'Iter 3', 
      type: 'Feature',
      status: 'Planned',
      points: 8,
      assignee: 'Alex (UX Lead)',
      source: 'Jira Data Center'
    },
    { 
      id: 'item-4', 
      key: 'TITAN-405', 
      title: 'Kubernetes Cluster Refresh', 
      teamId: 't4', 
      iteration: 'Iter 2', 
      type: 'Enabler',
      status: 'Ready',
      points: 5,
      assignee: 'DevOps Ops',
      source: 'Jira Data Center'
    },
    { 
      id: 'item-5', 
      key: 'TITAN-315', 
      title: 'Biometrics Authentication', 
      teamId: 't3', 
      iteration: 'Iter 2', 
      type: 'Feature',
      status: 'Planned',
      points: 13,
      assignee: 'Elena (Mobile Lead)',
      source: 'Jira Data Center'
    },
    { 
      id: 'item-6', 
      key: 'TITAN-118', 
      title: 'Payment Gateway Integration Test', 
      teamId: 't2', 
      iteration: 'Iter 4', 
      type: 'Feature',
      status: 'Planned',
      points: 8,
      assignee: 'QA Automation',
      source: 'Jira Data Center'
    }
  ]);

  // Dependencies: fromItemId depends on toItemId
  const [dependencies, setDependencies] = useState([
    { id: 'dep-1', fromId: 'item-3', toId: 'item-1', note: 'Mobile Checkout needs Payment API Spec' },
    { id: 'dep-2', fromId: 'item-5', toId: 'item-2', note: 'Biometrics requires OAuth Token Service' } // Red Collision: Both scheduled in Iter 2!
  ]);

  // Form state
  const [newKey, setNewKey] = useState('TITAN-');
  const [newTitle, setNewTitle] = useState('');
  const [newTeamId, setNewTeamId] = useState('t1');
  const [newIteration, setNewIteration] = useState('Iter 1');
  const [newType, setNewType] = useState('Feature');
  const [newPoints, setNewPoints] = useState(8);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setItems([
      ...items,
      {
        id: `item-${Date.now()}`,
        key: newKey || `MANUAL-${Date.now().toString().slice(-4)}`,
        title: newTitle,
        teamId: newTeamId,
        iteration: newIteration,
        type: newType,
        status: 'Planned',
        points: Number(newPoints),
        assignee: 'Train Engineer',
        source: almSource === 'jira-dc' ? 'Jira Data Center' : almSource === 'azure-devops' ? 'Azure DevOps' : 'Manual Entry'
      }
    ]);
    setNewTitle('');
    setNewKey('TITAN-');
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(i => i.id !== id));
    setDependencies(dependencies.filter(d => d.fromId !== id && d.toId !== id));
  };

  // Helper to determine if a dependency is in conflict
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
        message: `🚨 Conflict: [${fromItem.key}] "${fromItem.title}" (${fromItem.iteration}) is scheduled before or concurrently with prerequisite [${toItem.key}] "${toItem.title}" (${toItem.iteration})!`
      };
    }
    return { conflict: false };
  };

  const conflictCount = dependencies.filter(d => getDependencyStatus(d).conflict).length;

  // Simulate Pulling Live Data from Jira / ADO
  const handleSimulateAlmPull = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncStatus(`Live Sync Complete from ${almSource === 'jira-dc' ? 'Jira Data Center v9.4' : almSource === 'azure-devops' ? 'Azure DevOps Server 2022' : 'Jira Cloud'} at ${new Date().toLocaleTimeString()}`);
      setShowAlmModal(false);
    }, 1200);
  };

  // JSON Import Parser
  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonImportText);
      if (Array.isArray(parsed.items)) {
        setItems(parsed.items);
      }
      if (Array.isArray(parsed.dependencies)) {
        setDependencies(parsed.dependencies);
      }
      setSyncStatus(`Imported ${parsed.items?.length || 0} items from Custom JSON payload.`);
      setShowAlmModal(false);
      setJsonImportText('');
    } catch (err) {
      alert("Invalid JSON format. Please ensure it has { items: [...], dependencies: [...] } structure.");
    }
  };

  // Copy sample payload for testing
  const sampleJsonPayload = JSON.stringify({
    items: [
      { id: "j-101", key: "TITAN-801", title: "Cloud Database Partitioning", teamId: "t1", iteration: "Iter 1", type: "Enabler", points: 13, assignee: "Dave (DBA)", source: "Jira Data Center" },
      { id: "j-102", key: "TITAN-802", title: "Apple Pay Tokenization Service", teamId: "t2", iteration: "Iter 2", type: "Feature", points: 8, assignee: "Sarah (Payment)", source: "Jira Data Center" },
      { id: "j-103", key: "TITAN-803", title: "iOS Quick Checkout Widget", teamId: "t3", iteration: "Iter 3", type: "Feature", points: 5, assignee: "Alex (iOS)", source: "Jira Data Center" }
    ],
    dependencies: [
      { id: "dep-j1", fromId: "j-103", toId: "j-102", note: "Widget needs Apple Pay Tokenization" }
    ]
  }, null, 2);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-2">
              <Share2 className="w-3.5 h-3.5 text-rose-400" />
              <span>PI Planning Program Board & ALM Connector</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Visual <span className="text-gradient">Program Board & ALM Data Hub</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Connected to enterprise ALM data sources (Jira Data Center, Jira Cloud, Azure DevOps, or REST API payloads). Automatically visualizes feature delivery cadences and detects <strong>red string dependency collisions</strong> across teams.
            </p>
          </div>

          {/* ALM Source Status Card & Trigger */}
          <div className="flex flex-col items-start md:items-end space-y-2 shrink-0">
            <button
              onClick={() => setShowAlmModal(true)}
              className="px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white flex items-center space-x-2 shadow-md transition-all"
            >
              <Database className="w-4 h-4 text-sky-400" />
              <span>Configure ALM Data Source</span>
            </button>
            <div className="flex items-center space-x-1.5 text-[11px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{syncStatus}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ALM Source Configuration Modal */}
      {showAlmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/40 bg-navy-900 max-w-2xl w-full space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2.5">
                <Database className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold text-white">ALM Data Source Configuration</h3>
              </div>
              <button
                onClick={() => setShowAlmModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">Target ALM Platform</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'jira-dc', label: 'Jira Data Center' },
                    { id: 'jira-cloud', label: 'Jira Cloud' },
                    { id: 'azure-devops', label: 'Azure DevOps' },
                    { id: 'json-import', label: 'Custom JSON Payload' }
                  ].map(p => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setAlmSource(p.id)}
                      className={`p-2.5 rounded-xl font-bold border transition-all text-center ${
                        almSource === p.id 
                          ? 'bg-sky-600 text-white border-sky-400 shadow-md' 
                          : 'bg-navy-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {almSource !== 'json-import' ? (
                <>
                  <div>
                    <label className="font-bold text-slate-300 block mb-1">REST API Endpoint URL</label>
                    <input
                      type="text"
                      value={serverUrl}
                      onChange={(e) => setServerUrl(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-mono focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-300 block mb-1">
                      {almSource.includes('jira') ? 'JQL Filter Query' : 'WIQL Filter Query'}
                    </label>
                    <textarea
                      rows={3}
                      value={almSource.includes('jira') ? jqlQuery : wiqlQuery}
                      onChange={(e) => almSource.includes('jira') ? setJqlQuery(e.target.value) : setWiqlQuery(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-sky-300 font-mono focus:border-sky-400 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-slate-400">Authenticates via OAuth 2.0 / Bearer Token</span>
                    <button
                      onClick={handleSimulateAlmPull}
                      disabled={isSyncing}
                      className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold flex items-center space-x-2 shadow-glow-sapphire"
                    >
                      <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                      <span>{isSyncing ? 'Fetching ALM Payload...' : 'Pull Live ALM Data'}</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-slate-300">Paste Board JSON Payload</label>
                    <button
                      type="button"
                      onClick={() => setJsonImportText(sampleJsonPayload)}
                      className="text-[11px] text-sky-400 hover:underline"
                    >
                      Load Sample Payload
                    </button>
                  </div>
                  <textarea
                    rows={6}
                    placeholder='{ "items": [...], "dependencies": [...] }'
                    value={jsonImportText}
                    onChange={(e) => setJsonImportText(e.target.value)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-emerald-300 font-mono focus:border-sky-400 focus:outline-none resize-none"
                  />
                  <button
                    onClick={handleImportJson}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center space-x-2 shadow-md"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>Import JSON Payload onto Program Board</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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

      {/* Add Item Form with ALM Key & Points */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-sm font-bold text-white flex items-center space-x-2">
            <Plus className="w-4 h-4 text-sky-400" />
            <span>Add Work Item with ALM Jira/ADO Key</span>
          </h2>
          <span className="text-xs text-slate-400">Connected Source: <strong>{almSource === 'jira-dc' ? 'Jira Data Center' : almSource === 'azure-devops' ? 'Azure DevOps' : 'Direct Entry'}</strong></span>
        </div>

        <form onSubmit={handleAddItem} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Issue Key</label>
            <input
              type="text"
              placeholder="TITAN-107"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-sky-300 font-mono focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div className="lg:col-span-2">
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Title / Summary</label>
            <input
              type="text"
              placeholder="e.g. Auth Token API v2.0"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Assigned Team</label>
            <select
              value={newTeamId}
              onChange={(e) => setNewTeamId(e.target.value)}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-bold"
            >
              {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Delivery Iteration</label>
            <select
              value={newIteration}
              onChange={(e) => setNewIteration(e.target.value)}
              className="w-full bg-navy-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white font-bold"
            >
              {iterations.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">Type & Points</label>
            <div className="flex space-x-1.5">
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="flex-1 bg-navy-950 border border-slate-800 rounded-xl p-2 text-xs text-white font-bold"
              >
                <option value="Feature">Feature</option>
                <option value="Enabler">Enabler</option>
                <option value="Milestone">Milestone</option>
              </select>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Visual Program Board Grid */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-heading font-bold text-white flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-sky-400" />
              <span>Program Board (Teams × Iterations)</span>
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-navy-950 border border-slate-800 text-slate-400 font-mono">
              Total Work Items: {items.length}
            </span>
          </div>

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
              <span className="text-rose-300 font-bold">Red String Collision</span>
            </span>
          </div>
        </div>

        <div className="min-w-[850px]">
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
              <div key={team.id} className="grid grid-cols-7 gap-2 py-3 items-start min-h-[95px]">
                <div className="text-xs font-bold text-white pr-2 space-y-1">
                  <span>{team.name}</span>
                  <span className="text-[10px] text-slate-500 block font-mono">Key: {team.key}</span>
                </div>

                {iterations.map(iter => {
                  const cellItems = items.filter(i => i.teamId === team.id && i.iteration === iter);

                  return (
                    <div key={iter} className="p-1.5 rounded-xl bg-navy-950/60 border border-slate-800/80 min-h-[85px] space-y-1.5">
                      {cellItems.map(item => {
                        const hasConflict = dependencies.some(d => (d.fromId === item.id || d.toId === item.id) && getDependencyStatus(d).conflict);

                        return (
                          <div
                            key={item.id}
                            className={`p-2.5 rounded-xl text-[10px] font-medium border space-y-1.5 relative group transition-all ${
                              item.type === 'Enabler'
                                ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-200 hover:border-indigo-400'
                                : 'bg-sky-950/60 border-sky-500/40 text-sky-200 hover:border-sky-400'
                            } ${hasConflict ? 'ring-2 ring-rose-500 border-rose-500 bg-rose-950/40' : ''}`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono font-bold text-[9px] text-sky-400 bg-navy-950 px-1 py-0.5 rounded border border-slate-800">
                                {item.key}
                              </span>
                              <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-400 text-xs"
                              >
                                ×
                              </button>
                            </div>
                            
                            <p className="font-bold text-white text-[11px] leading-tight truncate" title={item.title}>
                              {item.title}
                            </p>

                            <div className="flex items-center justify-between text-[9px] text-slate-400 pt-0.5 border-t border-slate-800/60">
                              <span>{item.type}</span>
                              <span className="font-mono font-bold text-slate-300">{item.points} pts</span>
                            </div>
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

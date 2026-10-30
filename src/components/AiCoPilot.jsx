import React, { useState } from 'react';
import { AI_PROMPT_LIBRARY, RTE_AI_SIMULATOR_SCENARIOS } from '../data/rteData';
import { STE_AI_PROMPT_LIBRARY, STE_AI_SIMULATOR_SCENARIOS } from '../data/steData';
import { 
  Bot, 
  Sparkles, 
  Copy, 
  Check, 
  Wand2, 
  Search, 
  Play, 
  Sliders, 
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  Tag,
  Layers,
  Network
} from 'lucide-react';

export default function AiCoPilot() {
  const [roleMode, setRoleMode] = useState('all'); // 'all' | 'rte' | 'ste'
  const [activeSubTab, setActiveSubTab] = useState('workbench'); // 'library' | 'workbench' | 'simulator'
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Workbench Form Inputs
  const [workbenchRole, setWorkbenchRole] = useState('RTE');
  const [artName, setArtName] = useState('Titan Value Stream');
  const [targetPi, setTargetPi] = useState('PI-2026.3');
  const [featureName, setFeatureName] = useState('Real-Time Payment Gateway Integration');
  const [rawRisks, setRawRisks] = useState('1. Third-party OAuth API spec is unreleased.\n2. Team Beta lacks AWS Lambda expertise.\n3. Shared DBA resource bottleneck in Iteration 2.');
  const [capacityLoad, setCapacityLoad] = useState('Total Capacity: 450 pts | Planned Load: 490 pts (Overcapacity by 40 pts)');
  const [generatedCustomPrompt, setGeneratedCustomPrompt] = useState('');

  // Simulator State
  const [simRole, setSimRole] = useState('all');
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);

  // Combine RTE and STE prompt libraries with role tagging
  const combinedPrompts = [
    ...AI_PROMPT_LIBRARY.map(p => ({ ...p, role: 'RTE' })),
    ...STE_AI_PROMPT_LIBRARY.map(p => ({ ...p, role: 'STE', description: p.tags.join(', ') }))
  ];

  // Filter prompt library
  const filteredPrompts = combinedPrompts.filter(p => {
    const matchesRole = roleMode === 'all' || p.role.toLowerCase() === roleMode.toLowerCase();
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesRole && matchesSearch;
  });

  const [selectedPrompt, setSelectedPrompt] = useState(combinedPrompts[0]);

  // Combined scenarios
  const combinedScenarios = [
    ...RTE_AI_SIMULATOR_SCENARIOS.map(s => ({ ...s, role: 'RTE' })),
    ...STE_AI_SIMULATOR_SCENARIOS.map(s => ({ ...s, role: 'STE' }))
  ];

  const filteredScenarios = combinedScenarios.filter(s => simRole === 'all' || s.role.toLowerCase() === simRole.toLowerCase());
  const currentScenario = filteredScenarios[activeScenarioIndex] || filteredScenarios[0];

  const handleCopyPrompt = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleGenerateCustomPrompt = () => {
    const prompt = workbenchRole === 'STE' 
      ? `Act as an Enterprise SAFe Solution Train Engineer (STE) facilitating Large Solution synchronization.

Solution Train Parameters:
- Solution Train Name: ${artName}
- Target Program Increment: ${targetPi}
- Core Solution Capability: ${featureName}
- High-Risk Multi-ART Dependencies & Blockers:
${rawRisks}
- Multi-Train Capacity Telemetry: ${capacityLoad}

Generate:
1. Executive Pre/Post-PI Alignment Strategy balancing all participating ARTs.
2. Cross-Train Dependency SLA contract draft with explicit iteration milestones.
3. Multi-Train ROAMing Strategy for Business Owners and Solution Architects.
4. Risk mitigation script to resolve cross-train environment/supplier deadlocks.`
      : `Act as an expert SAFe 6.0 Release Train Engineer (RTE) and Agile Coach.

ART Parameters:
- Agile Release Train Name: ${artName}
- Target Program Increment: ${targetPi}
- Key Strategic Feature: ${featureName}
- Identified Team Risks & Blockers:
${rawRisks}
- Capacity vs Load Status: ${capacityLoad}

Generate:
1. Executive Briefing Summary for PI Day 1 Management Review.
2. Structured ROAM Risk Categorization (Resolved, Owned, Accepted, Mitigated) with recommended owners.
3. Scope-Trimming Recommendations converting low-WSJF items to Uncommitted Objectives.
4. Facilitation coaching tips for Scrum of Scrums (SoS) to unblock the critical dependencies.`;

    setGeneratedCustomPrompt(prompt);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* HEADER BANNER */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>RTE & STE AI Intelligence Suite</span>
            </div>
            <h1 className="text-3xl font-heading font-extrabold text-white">
              AI Prompts, Workbench & <span className="text-gradient">Leadership Simulator</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mt-1">
              Field-tested GenAI prompt engineering, dynamic prompt generator, and interactive situational simulators for both Release Train Engineers (RTEs) and Solution Train Engineers (STEs).
            </p>
          </div>

          {/* Sub-Tab Navigation */}
          <div className="flex items-center space-x-2 bg-navy-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveSubTab('workbench')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'workbench'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Prompt Workbench
            </button>
            <button
              onClick={() => setActiveSubTab('library')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'library'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Prompt Library ({combinedPrompts.length})
            </button>
            <button
              onClick={() => setActiveSubTab('simulator')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'simulator'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Leadership Simulator
            </button>
          </div>
        </div>
      </div>

      {/* SUB TAB 1: PROMPT WORKBENCH */}
      {activeSubTab === 'workbench' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Form Controls */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-heading font-bold text-white">Interactive Super-Prompt Builder</h2>
                  <p className="text-xs text-slate-400">Tailored for both Single ART (RTE) and Multi-ART Large Solution (STE).</p>
                </div>
              </div>

              {/* Role Switcher */}
              <div className="flex items-center space-x-1 bg-navy-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setWorkbenchRole('RTE')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    workbenchRole === 'RTE' ? 'bg-sapphire-600 text-white' : 'text-slate-400'
                  }`}
                >
                  RTE Mode
                </button>
                <button
                  onClick={() => setWorkbenchRole('STE')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                    workbenchRole === 'STE' ? 'bg-sky-600 text-white' : 'text-slate-400'
                  }`}
                >
                  STE Mode
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    {workbenchRole === 'STE' ? 'Solution Train Name' : 'ART Name'}
                  </label>
                  <input
                    type="text"
                    value={artName}
                    onChange={(e) => setArtName(e.target.value)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Target PI</label>
                  <input
                    type="text"
                    value={targetPi}
                    onChange={(e) => setTargetPi(e.target.value)}
                    className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {workbenchRole === 'STE' ? 'High-Impact Solution Capability' : 'Key Strategic Feature'}
                </label>
                <input
                  type="text"
                  value={featureName}
                  onChange={(e) => setFeatureName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  {workbenchRole === 'STE' ? 'Cross-ART Dependencies & Supplier Risks' : 'Identified Team Risks & Blockers'}
                </label>
                <textarea
                  rows={3}
                  value={rawRisks}
                  onChange={(e) => setRawRisks(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-500 focus:outline-none resize-none font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Capacity vs Load</label>
                <input
                  type="text"
                  value={capacityLoad}
                  onChange={(e) => setCapacityLoad(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <button
                onClick={handleGenerateCustomPrompt}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                <Wand2 className="w-4 h-4" />
                <span>Synthesize {workbenchRole} Executive Prompt</span>
              </button>
            </div>
          </div>

          {/* Prompt Output */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-navy-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Generated System Prompt</span>
                {generatedCustomPrompt && (
                  <button
                    onClick={() => handleCopyPrompt(generatedCustomPrompt, 'workbench')}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
                  >
                    {copiedId === 'workbench' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'workbench' ? 'Copied!' : 'Copy Prompt'}</span>
                  </button>
                )}
              </div>

              {generatedCustomPrompt ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-4 rounded-xl border border-slate-800 max-h-[380px] overflow-y-auto">
                  {generatedCustomPrompt}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <Bot className="w-12 h-12 text-slate-700" />
                  <p className="text-xs">Adjust your parameters and click <strong>"Synthesize Prompt"</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUB TAB 2: PROMPT LIBRARY */}
      {activeSubTab === 'library' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Role Filter Tabs */}
            <div className="flex items-center space-x-1.5 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => setRoleMode('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold ${roleMode === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              >
                All Prompts ({combinedPrompts.length})
              </button>
              <button
                onClick={() => setRoleMode('rte')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold ${roleMode === 'rte' ? 'bg-sapphire-600 text-white' : 'text-slate-400'}`}
              >
                RTE Prompts ({AI_PROMPT_LIBRARY.length})
              </button>
              <button
                onClick={() => setRoleMode('ste')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold ${roleMode === 'ste' ? 'bg-sky-600 text-white' : 'text-slate-400'}`}
              >
                STE Prompts ({STE_AI_PROMPT_LIBRARY.length})
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search prompts or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-navy-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPrompts.map((p) => (
              <div key={p.id} className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      p.role === 'STE' ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' : 'bg-sapphire-500/20 text-sapphire-300 border-sapphire-500/30'
                    }`}>
                      {p.role} Spec
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">{p.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>

                  <pre className="p-3 rounded-xl bg-navy-950 border border-slate-800 text-[11px] font-mono text-slate-300 max-h-36 overflow-y-auto whitespace-pre-wrap">
                    {p.promptText}
                  </pre>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1">
                    {p.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCopyPrompt(p.promptText, p.id)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-navy-950 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 font-semibold"
                  >
                    {copiedId === p.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === p.id ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB TAB 3: LEADERSHIP SIMULATOR */}
      {activeSubTab === 'simulator' && (
        <div className="space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-slate-400">Filter Scenarios:</span>
            {['all', 'rte', 'ste'].map(role => (
              <button
                key={role}
                onClick={() => {
                  setSimRole(role);
                  setActiveScenarioIndex(0);
                  setSelectedChoiceIndex(null);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold uppercase ${
                  simRole === role ? 'bg-cyan-600 text-white' : 'bg-navy-950 text-slate-400 border border-slate-800'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {currentScenario && (
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-6 bg-navy-900/90">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                  currentScenario.role === 'STE' ? 'bg-sky-500/20 text-sky-300 border-sky-500/30' : 'bg-sapphire-500/20 text-sapphire-300 border-sapphire-500/30'
                }`}>
                  {currentScenario.role} Challenge
                </span>
                <span className="text-xs text-slate-400">Scenario {activeScenarioIndex + 1} of {filteredScenarios.length}</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-heading font-bold text-white">{currentScenario.title}</h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-navy-950 p-4 rounded-2xl border border-slate-800">
                  {currentScenario.context}
                </p>
              </div>

              {/* Choices */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">How do you respond?</h3>

                {currentScenario.choices ? (
                  currentScenario.choices.map((c, idx) => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedChoiceIndex(idx)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        selectedChoiceIndex === idx
                          ? 'bg-cyan-950/40 border-cyan-500 text-white'
                          : 'bg-navy-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <p className="text-xs font-medium">{c.text}</p>
                      {selectedChoiceIndex === idx && (
                        <div className="mt-3 pt-3 border-t border-slate-800 space-y-1">
                          <span className="text-[10px] font-bold text-cyan-300 uppercase block">Expert Leadership Verdict:</span>
                          <p className="text-xs text-slate-200">{c.verdict}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  currentScenario.options.map((opt, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedChoiceIndex(idx)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        selectedChoiceIndex === idx
                          ? 'bg-cyan-950/40 border-cyan-500 text-white'
                          : 'bg-navy-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <p className="text-xs font-medium">{opt.choice}</p>
                      {selectedChoiceIndex === idx && (
                        <div className="mt-3 pt-3 border-t border-slate-800 space-y-1">
                          <span className={`text-[10px] font-bold uppercase block ${opt.recommended ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {opt.recommended ? 'Recommended Path' : 'Feedback'}
                          </span>
                          <p className="text-xs text-slate-200">{opt.feedback}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  disabled={activeScenarioIndex === 0}
                  onClick={() => {
                    setActiveScenarioIndex(prev => prev - 1);
                    setSelectedChoiceIndex(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-navy-950 border border-slate-800 text-xs font-bold text-slate-300 disabled:opacity-40"
                >
                  Previous Scenario
                </button>

                <button
                  disabled={activeScenarioIndex >= filteredScenarios.length - 1}
                  onClick={() => {
                    setActiveScenarioIndex(prev => prev + 1);
                    setSelectedChoiceIndex(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold disabled:opacity-40"
                >
                  Next Scenario
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

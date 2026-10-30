import React, { useState } from 'react';
import { STE_CAPTURE_TEMPLATES } from '../data/steData';
import { 
  Wrench, 
  ShieldAlert, 
  FileSpreadsheet, 
  Check, 
  Copy, 
  Plus, 
  Trash2, 
  Layers, 
  Activity, 
  BookOpen, 
  Network,
  Truck,
  CheckCircle2
} from 'lucide-react';

export default function SteInteractiveTools() {
  const [activeTool, setActiveTool] = useState('ste-roam'); // 'ste-roam' | 'ste-templates' | 'solution-metrics'

  // ==========================================
  // 1. MULTI-ART ROAM RISK ENGINE
  // ==========================================
  const [steRisks, setSteRisks] = useState([
    { id: 1, text: 'Customs delay for specialized automotive sensor hardware from tier-1 supplier', train: 'Cyber-Physical ART', owner: 'VP Global Supply', status: 'Mitigated' },
    { id: 2, text: 'Cross-ART staging environment pipeline locking between Core Cloud and Mobile UX', train: 'Multi-Train', owner: 'DevOps Lead', status: 'Owned' },
    { id: 3, text: 'Federal regulatory compliance cryptographic audit scheduled during PI Breakout week', train: 'Security Train', owner: 'Chief Compliance Officer', status: 'Accepted' },
    { id: 4, text: 'Cross-train microservice API schema mismatch between Identity and Billing ARTs', train: 'Cloud Core ART', owner: 'Solution Architect', status: 'Resolved' }
  ]);
  const [newRiskText, setNewRiskText] = useState('');
  const [newRiskTrain, setNewRiskTrain] = useState('Multi-Train');
  const [newRiskOwner, setNewRiskOwner] = useState('');
  const [newRiskStatus, setNewRiskStatus] = useState('Owned');
  const [copiedRoam, setCopiedRoam] = useState(false);

  const handleAddSteRisk = (e) => {
    e.preventDefault();
    if (!newRiskText.trim()) return;
    setSteRisks([
      ...steRisks,
      { id: Date.now(), text: newRiskText, train: newRiskTrain, owner: newRiskOwner || 'Unassigned', status: newRiskStatus }
    ]);
    setNewRiskText('');
    setNewRiskOwner('');
  };

  const handleMoveRisk = (id, newStatus) => {
    setSteRisks(steRisks.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  const handleDeleteRisk = (id) => setSteRisks(steRisks.filter(r => r.id !== id));

  const handleExportRoam = () => {
    const report = `# MULTI-ART SOLUTION TRAIN ROAM RISK REPORT\nDate: ${new Date().toLocaleDateString()}\n\n## RESOLVED (${steRisks.filter(r => r.status === 'Resolved').length})\n${steRisks.filter(r => r.status === 'Resolved').map(r => `- [${r.train}] ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n\n## OWNED (${steRisks.filter(r => r.status === 'Owned').length})\n${steRisks.filter(r => r.status === 'Owned').map(r => `- [${r.train}] ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n\n## ACCEPTED (${steRisks.filter(r => r.status === 'Accepted').length})\n${steRisks.filter(r => r.status === 'Accepted').map(r => `- [${r.train}] ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n\n## MITIGATED (${steRisks.filter(r => r.status === 'Mitigated').length})\n${steRisks.filter(r => r.status === 'Mitigated').map(r => `- [${r.train}] ${r.text} (Owner: ${r.owner})`).join('\n') || '- None'}\n`;
    navigator.clipboard.writeText(report);
    setCopiedRoam(true);
    setTimeout(() => setCopiedRoam(false), 2500);
  };

  // ==========================================
  // 2. STE METRIC CAPTURE TEMPLATES
  // ==========================================
  const [selectedTemplateKey, setSelectedTemplateKey] = useState('solutionFlowTelemetry');
  const [solutionName, setSolutionName] = useState('Autonomous Vehicle Platform');
  const [targetPi, setTargetPi] = useState('PI-2026.3');
  const [generatedTemplate, setGeneratedTemplate] = useState('');
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const handleGenerateTemplate = () => {
    let raw = STE_CAPTURE_TEMPLATES[selectedTemplateKey] || STE_CAPTURE_TEMPLATES.solutionFlowTelemetry;
    const filled = raw
      .replace(/{SOLUTION_NAME}/g, solutionName)
      .replace(/{PI_NAME}/g, targetPi)
      .replace(/{DATE}/g, new Date().toLocaleDateString())
      .replace(/{STE_NAME}/g, 'STE Alex Morgan')
      .replace(/{ART_COUNT}/g, '4')
      .replace(/{TOTAL_ENGINEERS}/g, '750')
      .replace(/{PREDICTABILITY_PCT}/g, '91.8')
      .replace(/{FLOW_EFFICIENCY}/g, '36.5')
      .replace(/{LEAD_TIME_DAYS}/g, '38')
      .replace(/{ACTIVE_CAPABILITIES}/g, '9')
      .replace(/{TOTAL_VELOCITY}/g, '1,840')
      .replace(/{RESOLVED_COUNT}/g, steRisks.filter(r => r.status === 'Resolved').length.toString())
      .replace(/{OWNED_COUNT}/g, steRisks.filter(r => r.status === 'Owned').length.toString())
      .replace(/{ACCEPTED_COUNT}/g, steRisks.filter(r => r.status === 'Accepted').length.toString())
      .replace(/{MITIGATED_COUNT}/g, steRisks.filter(r => r.status === 'Mitigated').length.toString())
      .replace(/{SOL_MGR}/g, 'VP Product Management')
      .replace(/{SOL_ARCH}/g, 'Chief Solution Architect')
      .replace(/{PLANNED_BV}/g, '270')
      .replace(/{ACTUAL_BV}/g, '248')
      .replace(/{ACHIEVEMENT_PCT}/g, '91.8');

    setGeneratedTemplate(filled);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* HEADER TOOL SWITCHER */}
      <div className="glass-panel p-6 rounded-3xl border border-sky-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center space-x-2">
            <Layers className="w-6 h-6 text-sky-400" />
            <span>Interactive STE <span className="text-gradient">Power Tools</span></span>
          </h1>
          <p className="text-xs text-slate-400">Multi-ART ROAM Risk Board, Solution Flow Metrics & Large Solution Template Studio.</p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTool('ste-roam')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'ste-roam' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            📌 Multi-ART ROAM Board
          </button>
          <button
            onClick={() => setActiveTool('ste-templates')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'ste-templates' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            📋 Solution Template Studio (3)
          </button>
          <button
            onClick={() => setActiveTool('solution-metrics')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'solution-metrics' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            📊 Large Solution Flow Guide
          </button>
        </div>
      </div>

      {/* TOOL 1: MULTI-ART ROAM BOARD */}
      {activeTool === 'ste-roam' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Enterprise ROAM Engine</span>
                <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
                  <ShieldAlert className="w-5 h-5 text-amber-400" />
                  <span>Multi-ART & Supplier ROAM Board</span>
                </h2>
              </div>

              <button
                onClick={handleExportRoam}
                className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center space-x-2 shadow-glow-sapphire"
              >
                {copiedRoam ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedRoam ? 'Report Copied!' : 'Export Solution ROAM Report'}</span>
              </button>
            </div>

            {/* Add Multi-ART Risk Form */}
            <form onSubmit={handleAddSteRisk} className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <input
                type="text"
                placeholder="Enterprise Risk Description..."
                value={newRiskText}
                onChange={(e) => setNewRiskText(e.target.value)}
                className="md:col-span-2 bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sky-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Impacted Train (e.g. Cloud Core)"
                value={newRiskTrain}
                onChange={(e) => setNewRiskTrain(e.target.value)}
                className="bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sky-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Owner (e.g. VP Tech / Supplier Lead)"
                value={newRiskOwner}
                onChange={(e) => setNewRiskOwner(e.target.value)}
                className="bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-sky-400 focus:outline-none"
              />

              <div className="flex space-x-2">
                <select
                  value={newRiskStatus}
                  onChange={(e) => setNewRiskStatus(e.target.value)}
                  className="bg-navy-950 border border-slate-800 rounded-xl p-3 text-xs text-white font-bold flex-1"
                >
                  <option value="Owned">Owned</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Mitigated">Mitigated</option>
                </select>
                <button type="submit" className="px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* 4 ROAM Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Resolved', 'Owned', 'Accepted', 'Mitigated'].map((colStatus) => {
              const colRisks = steRisks.filter(r => r.status === colStatus);
              const headerColor = 
                colStatus === 'Resolved' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' :
                colStatus === 'Owned' ? 'text-sky-400 border-sky-500/30 bg-sky-950/20' :
                colStatus === 'Accepted' ? 'text-amber-400 border-amber-500/30 bg-amber-950/20' :
                'text-purple-400 border-purple-500/30 bg-purple-950/20';

              return (
                <div key={colStatus} className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-4">
                  <div className={`p-2 rounded-xl border text-center font-bold text-xs ${headerColor}`}>
                    {colStatus} ({colRisks.length})
                  </div>

                  <div className="space-y-3 min-h-[220px]">
                    {colRisks.map((r) => (
                      <div key={r.id} className="p-4 rounded-2xl bg-navy-900 border border-slate-800 space-y-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 block w-fit">
                          {r.train}
                        </span>
                        <p className="text-xs text-white font-medium">{r.text}</p>
                        <span className="text-[11px] text-slate-400 block">Owner: <strong className="text-slate-300">{r.owner}</strong></span>

                        {/* Move Actions */}
                        <div className="pt-2 flex flex-wrap gap-1 border-t border-slate-800/80">
                          {['Resolved', 'Owned', 'Accepted', 'Mitigated'].filter(s => s !== colStatus).map(targetStatus => (
                            <button
                              key={targetStatus}
                              onClick={() => handleMoveRisk(r.id, targetStatus)}
                              className="text-[9px] px-1.5 py-0.5 rounded bg-navy-950 border border-slate-800 text-slate-400 hover:text-white"
                            >
                              → {targetStatus[0]}
                            </button>
                          ))}
                          <button
                            onClick={() => handleDeleteRisk(r.id)}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-rose-950/40 text-rose-300 ml-auto hover:bg-rose-900"
                          >
                            Del
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TOOL 2: SOLUTION CAPTURE TEMPLATES */}
      {activeTool === 'ste-templates' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Large Solution Telemetry Logs</span>
              <h2 className="text-xl font-heading font-bold text-white flex items-center space-x-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                <span>STE Metric Capture Studio</span>
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTemplateKey('solutionFlowTelemetry')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'solutionFlowTelemetry' ? 'bg-sky-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  📊 Multi-ART Flow Scorecard
                </button>
                <button
                  onClick={() => setSelectedTemplateKey('crossArtRoamBoard')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'crossArtRoamBoard' ? 'bg-sky-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  🛡️ Multi-ART ROAM Report
                </button>
                <button
                  onClick={() => setSelectedTemplateKey('solutionDemoAcceptance')}
                  className={`px-3 py-2 rounded-xl font-bold transition-all ${
                    selectedTemplateKey === 'solutionDemoAcceptance' ? 'bg-sky-600 text-white shadow-md' : 'bg-navy-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  🏆 Solution Demo Acceptance
                </button>
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Solution Train Name</label>
                <input
                  type="text"
                  value={solutionName}
                  onChange={(e) => setSolutionName(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Target PI</label>
                <input
                  type="text"
                  value={targetPi}
                  onChange={(e) => setTargetPi(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-800 rounded-xl p-3 text-white focus:border-sky-400 focus:outline-none"
                />
              </div>

              <button
                onClick={handleGenerateTemplate}
                className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold flex items-center justify-center space-x-2 shadow-glow-sapphire transition-all"
              >
                <Copy className="w-4 h-4" />
                <span>Synthesize Solution Capture Log</span>
              </button>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 bg-navy-950/80">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Markdown Output</span>
                {generatedTemplate && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedTemplate);
                      setCopiedTemplate(true);
                      setTimeout(() => setCopiedTemplate(false), 2500);
                    }}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold"
                  >
                    {copiedTemplate ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedTemplate ? 'Copied Log!' : 'Copy Markdown'}</span>
                  </button>
                )}
              </div>

              {generatedTemplate ? (
                <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed bg-navy-900 p-4 rounded-xl border border-slate-800 max-h-[380px] overflow-y-auto">
                  {generatedTemplate}
                </pre>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-3 text-slate-500">
                  <FileSpreadsheet className="w-10 h-10 text-slate-700" />
                  <p className="text-xs">Select a template above and click <strong>"Synthesize Solution Capture Log"</strong>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TOOL 3: SOLUTION FLOW METRICS GUIDE */}
      {activeTool === 'solution-metrics' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 space-y-4">
            <h2 className="text-2xl font-heading font-extrabold text-white">Large Solution Flow Telemetry Blueprint</h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
              Measuring Large Solutions requires distinct metrics that aggregate multi-train throughput while pinpointing inter-train friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Metric 1</span>
              <h3 className="text-base font-bold text-white">Solution Predictability Index (SPI)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calculates aggregate achievement of Solution Objectives across all participating ARTs and suppliers. Target benchmark: <strong>80% – 100%</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Metric 2</span>
              <h3 className="text-base font-bold text-white">Capability Lead Time</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Elapsed duration from Solution Kanban portfolio acceptance to integrated validation at the enterprise Solution Demo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Metric 3</span>
              <h3 className="text-base font-bold text-white">Cross-ART Flow Efficiency</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active work time vs multi-train waiting queues (e.g., API contract mocking delay, hardware lab scheduling).
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

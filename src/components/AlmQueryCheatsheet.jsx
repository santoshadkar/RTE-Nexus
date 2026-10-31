import React, { useState } from 'react';
import { ALM_QUERY_CHEATSHEET_DATA } from '../data/utilitiesData';
import { 
  Database, 
  Search, 
  Copy, 
  Check, 
  Terminal, 
  Settings, 
  Layers, 
  Filter,
  CheckCircle2
} from 'lucide-react';

export default function AlmQueryCheatsheet() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedTool, setSelectedTool] = useState('All'); // 'All' | 'Jira (JQL)' | 'Azure DevOps (WIQL)'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQueries = ALM_QUERY_CHEATSHEET_DATA.filter(q => {
    const matchesTool = selectedTool === 'All' || q.tool.toLowerCase().includes(selectedTool.toLowerCase());
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTool && matchesSearch;
  });

  const handleCopy = (query, idx) => {
    navigator.clipboard.writeText(query);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>ALM Stack Query Engine</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Multi-ALM <span className="text-gradient">Query & Board Hygiene Cheatsheet</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          Field-tested, copy-pasteable <strong>Jira JQL</strong> and <strong>Azure DevOps WIQL</strong> queries engineered specifically for RTEs and STEs to detect orphan stories, missing WSJF ratings, unlinked dependencies, and aging WIP.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
          {['All', 'Jira', 'Azure DevOps'].map(tool => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedTool === tool ? 'bg-sky-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search queries or diagnostics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-navy-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      {/* Query Cards Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredQueries.map((item, idx) => (
          <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 bg-navy-900/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  item.tool.includes('Jira') ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' : 'bg-sky-500/20 text-sky-300 border-sky-500/30'
                }`}>
                  {item.tool}
                </span>
                <span className="text-xs text-slate-400 font-bold ml-2">{item.category}</span>
                <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
              </div>

              <button
                onClick={() => handleCopy(item.query, idx)}
                className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shrink-0 w-fit"
              >
                {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === idx ? 'Copied Query!' : 'Copy Query'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

            <pre className="p-4 rounded-2xl bg-navy-950 border border-slate-800 text-xs font-mono text-sky-300 whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {item.query}
            </pre>
          </div>
        ))}
      </div>

    </div>
  );
}

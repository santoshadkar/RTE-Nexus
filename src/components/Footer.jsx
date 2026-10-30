import React from 'react';
import { Sparkles, ExternalLink, Network, Layers } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 mt-20 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Col 1 */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-sapphire-600 flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-heading font-extrabold text-lg text-white">RTE & STE NEXUS</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            The ultimate executive AI command center for SAFe Release Train Engineers (RTEs) and Solution Train Engineers (STEs) coordinating complex multi-ART enterprise value streams.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">RTE Leadership</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('foundations')} className="hover:text-sapphire-400 transition-colors">RTE Definition & Roles</button></li>
            <li><button onClick={() => setActiveTab('servant-leadership')} className="hover:text-sapphire-400 transition-colors">Servant Leadership & Fresh ART</button></li>
            <li><button onClick={() => setActiveTab('rte-career-hub')} className="hover:text-sapphire-400 transition-colors">RTE 360° Diagnostic & Certs</button></li>
            <li><button onClick={() => setActiveTab('day-in-life')} className="hover:text-sapphire-400 transition-colors">Day in the Life Playbook</button></li>
          </ul>
        </div>

        {/* Col 3: STE Suite */}
        <div>
          <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-4 flex items-center space-x-1">
            <Network className="w-3.5 h-3.5" />
            <span>STE Large Solution</span>
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('ste-overview')} className="hover:text-sky-400 transition-colors">STE Foundations & Launch</button></li>
            <li><button onClick={() => setActiveTab('ste-pillars')} className="hover:text-sky-400 transition-colors">6 Large Solution Pillars</button></li>
            <li><button onClick={() => setActiveTab('ste-day-in-life')} className="hover:text-sky-400 transition-colors">Pre/Post-PI Cadence</button></li>
            <li><button onClick={() => setActiveTab('ste-tools')} className="hover:text-sky-400 transition-colors">Multi-ART ROAM & Tools</button></li>
            <li><button onClick={() => setActiveTab('ste-career-hub')} className="hover:text-sky-400 transition-colors">STE Diagnostic & Certs</button></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Tools & Cadence</h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => setActiveTab('power-tools')} className="hover:text-emerald-400 transition-colors">Interactive Tools & RAID</button></li>
            <li><button onClick={() => setActiveTab('reporting-engine')} className="hover:text-emerald-400 transition-colors">Cadence Reporting Engine</button></li>
            <li><button onClick={() => setActiveTab('workshop-studio')} className="hover:text-emerald-400 transition-colors">ART Canvas Studio</button></li>
            <li><button onClick={() => setActiveTab('ai-copilot')} className="hover:text-emerald-400 transition-colors">AI Prompts & Simulator</button></li>
          </ul>
        </div>

        {/* Col 5 */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">SAFe 6.0 Official</h4>
          <div className="space-y-2 text-xs">
            <a href="https://scaledagileframework.com/release-train-engineer-and-solution-train-engineer/" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-sapphire-400">
              <span>RTE & STE Official Spec</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://scaledagileframework.com/large-solution-safe/" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-sky-400">
              <span>Large Solution SAFe Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://scaledagileframework.com/pre-and-post-pi-planning/" target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-sky-400">
              <span>Pre/Post-PI Planning</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800/60 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2026 RTE & STE Nexus. Enterprise Command Center for Scaled Agile Practitioners Worldwide.</p>
        <p className="flex items-center space-x-1 mt-2 sm:mt-0">
          <span>Engineered for SAFe 6.0 Large Solutions & ARTs</span>
        </p>
      </div>
    </footer>
  );
}

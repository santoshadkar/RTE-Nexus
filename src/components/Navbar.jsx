import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Grid, 
  FileSpreadsheet, 
  Users, 
  Layout, 
  Settings, 
  Wrench, 
  Bot, 
  Award,
  Menu,
  X,
  Layers,
  Network,
  Calculator,
  AlertTriangle,
  Share2,
  Terminal,
  ShieldAlert,
  Zap
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('leadership');

  // Categories including the 5 New Field Utilities
  const categories = [
    {
      id: 'leadership',
      label: 'RTE Leadership',
      icon: Compass,
      items: [
        { id: 'foundations', label: 'RTE Definition & Roles', icon: Compass },
        { id: 'servant-leadership', label: 'Servant Leadership & Fresh ART', icon: HeartHandshake },
        { id: 'rte-career-hub', label: 'RTE Career & Certs', icon: Award },
        { id: 'art-dynamics', label: 'ART Dynamics & Tuckman', icon: TrendingUp },
        { id: 'lace-guide', label: 'LACE Synergy', icon: ShieldCheck },
      ]
    },
    {
      id: 'ste-suite',
      label: 'STE Large Solution Suite',
      icon: Network,
      badge: 'STE',
      items: [
        { id: 'ste-overview', label: 'STE Definition & Launch', icon: Network },
        { id: 'ste-pillars', label: '6 Large Solution Pillars', icon: Layers },
        { id: 'ste-day-in-life', label: 'Pre/Post-PI Playbook', icon: Clock },
        { id: 'ste-tools', label: 'Multi-ART ROAM & Tools', icon: Wrench },
        { id: 'ste-career-hub', label: 'STE Career & Certs', icon: Award },
      ]
    },
    {
      id: 'utilities',
      label: 'Field Utilities',
      icon: Zap,
      badge: 'NEW',
      items: [
        { id: 'wsjf-calculator', label: 'WSJF Calculator', icon: Calculator },
        { id: 'confidence-vote', label: 'Confidence Vote Engine', icon: AlertTriangle },
        { id: 'program-board', label: 'Program Board Visualizer', icon: Share2 },
        { id: 'tough-spot', label: 'Tough Spot Playbook', icon: ShieldAlert },
        { id: 'alm-cheatsheet', label: 'ALM JQL/WIQL Cheatsheet', icon: Terminal },
      ]
    },
    {
      id: 'execution',
      label: 'Execution & Cadence',
      icon: Clock,
      items: [
        { id: 'day-in-life', label: 'Day in the Life', icon: Clock },
        { id: 'pillars', label: '6 RTE Operational Areas', icon: Grid },
        { id: 'reporting-engine', label: 'Reporting Engine', icon: FileSpreadsheet },
        { id: 'cop-masterclass', label: 'CoP Toolkit', icon: Users },
      ]
    },
    {
      id: 'workshops',
      label: 'Workshops & Tools',
      icon: Wrench,
      items: [
        { id: 'power-tools', label: 'Interactive Tools & RAID', icon: Wrench },
        { id: 'workshop-studio', label: 'ART & Team Canvas', icon: Layout },
        { id: 'alm-tools', label: 'ALM Stack & Dashboards', icon: Settings },
      ]
    },
    {
      id: 'ai',
      label: 'AI Co-Pilot Suite',
      icon: Bot,
      items: [
        { id: 'ai-copilot', label: 'RTE & STE AI Prompts & Simulator', icon: Bot }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.items.some(i => i.id === activeTab)) || categories[0];

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    const cat = categories.find(c => c.id === catId);
    if (cat && cat.items.length > 0) {
      setActiveTab(cat.items[0].id);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 backdrop-blur-md">
      
      {/* LEVEL 1: Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-slate-800/60">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer shrink-0" 
            onClick={() => {
              setSelectedCategory('leadership');
              setActiveTab('foundations');
            }}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-sapphire-600 to-sky-400 p-0.5 shadow-glow-sapphire">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sapphire-400" />
              </div>
            </div>
            <div>
              <span className="font-heading font-extrabold text-lg tracking-tight text-white block leading-none">
                RTE <span className="text-gradient">& STE NEXUS</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block mt-0.5">
                SAFe 6.0 Enterprise Portal
              </span>
            </div>
          </div>

          {/* Level 1 Category Pills */}
          <nav className="hidden xl:flex items-center space-x-1.5 bg-navy-950 p-1.5 rounded-2xl border border-slate-800">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = (selectedCategory === cat.id) || currentCategory.id === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold transition-all relative ${
                    isActive
                      ? 'bg-sapphire-600 text-white shadow-glow-sapphire'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  {cat.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-navy-950 text-slate-300 border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* LEVEL 2: Sub-Navigation Bar */}
      <div className="hidden xl:block bg-navy-950/60 border-t border-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-0.5">
            {currentCategory.items.map((item) => {
              const ItemIcon = item.icon;
              const isCurrent = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isCurrent
                      ? 'bg-navy-900 text-white border border-slate-700 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  <ItemIcon className={`w-3.5 h-3.5 ${isCurrent ? 'text-sapphire-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-navy-950 px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {categories.map((cat) => (
            <div key={cat.id} className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3">
                {cat.label}
              </span>
              <div className="grid grid-cols-1 gap-1">
                {cat.items.map((item) => {
                  const ItemIcon = item.icon;
                  const isCurrent = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSelectedCategory(cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium w-full text-left transition-colors ${
                        isCurrent
                          ? 'bg-sapphire-600/20 text-sapphire-300 font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <ItemIcon className="w-4 h-4 text-slate-400" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

    </header>
  );
}

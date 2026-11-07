import React, { useState, useMemo, useEffect } from 'react';
import { 
  INTERVIEW_QUESTIONS, 
  INTERVIEW_ARCHETYPES, 
  INTERVIEW_ROLES, 
  INTERVIEW_STATS 
} from '../data/interviewData';
import { 
  Search, 
  Filter, 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Award, 
  Compass, 
  Layers, 
  BrainCircuit, 
  Target, 
  ArrowRight, 
  RotateCcw, 
  Download, 
  Eye, 
  EyeOff,
  Flame,
  ShieldCheck,
  Zap,
  Tag
} from 'lucide-react';

export default function InterviewMasterStudio() {
  // Filters & State
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedArchetype, setSelectedArchetype] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Study Modes
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [copiedId, setCopiedId] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('rte_nexus_interview_bookmarks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [masteredIds, setMasteredIds] = useState(() => {
    try {
      const saved = localStorage.getItem('rte_nexus_interview_mastered');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [activeTabFilter, setActiveTabFilter] = useState('all'); // 'all' | 'bookmarked' | 'mastered'

  // Persist bookmarks & mastered
  useEffect(() => {
    try {
      localStorage.setItem('rte_nexus_interview_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.warn("Could not save bookmarks to localStorage", e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem('rte_nexus_interview_mastered', JSON.stringify(masteredIds));
    } catch (e) {
      console.warn("Could not save mastered list to localStorage", e);
    }
  }, [masteredIds]);

  // Categories list extracted from data
  const categories = useMemo(() => {
    const cats = new Set();
    INTERVIEW_QUESTIONS.forEach(q => cats.add(q.category));
    return ['All', ...Array.from(cats).sort()];
  }, []);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return INTERVIEW_QUESTIONS.filter(q => {
      // Role filter
      if (selectedRole !== 'All' && q.role !== selectedRole) return false;
      
      // Archetype filter
      if (selectedArchetype !== 'All' && q.archetype !== selectedArchetype) return false;
      
      // Category filter
      if (selectedCategory !== 'All' && q.category !== selectedCategory) return false;
      
      // Difficulty filter
      if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;
      
      // Bookmarked / Mastered filter
      if (activeTabFilter === 'bookmarked' && !bookmarkedIds[q.id]) return false;
      if (activeTabFilter === 'mastered' && !masteredIds[q.id]) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(query);
        const matchesA = q.answer.toLowerCase().includes(query);
        const matchesKey = q.keyTakeaway.toLowerCase().includes(query);
        const matchesRef = q.safeReference.toLowerCase().includes(query);
        const matchesTags = q.tags && q.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesQ && !matchesA && !matchesKey && !matchesRef && !matchesTags) return false;
      }

      return true;
    });
  }, [selectedRole, selectedArchetype, selectedCategory, selectedDifficulty, activeTabFilter, bookmarkedIds, masteredIds, searchQuery]);

  // Toggle card expansion
  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const next = {};
    filteredQuestions.forEach(q => { next[q.id] = true; });
    setExpandedCards(next);
  };

  const collapseAll = () => {
    setExpandedCards({});
  };

  // Toggle Bookmark
  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarkedIds(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  };

  // Toggle Mastered
  const toggleMastered = (id, e) => {
    e.stopPropagation();
    setMasteredIds(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  };

  // 1-Click Copy
  const copyToClipboard = (q, e) => {
    e.stopPropagation();
    const text = `ROLE: ${q.role} | ARCHETYPE: ${q.archetype} | DIFFICULTY: ${q.difficulty}\nCATEGORY: ${q.category}\n\nQUESTION:\n${q.question}\n\nSTRATEGIC ANSWER:\n${q.answer}\n\nKEY TAKEAWAY:\n${q.keyTakeaway}\n\nSAFe REFERENCE:\n${q.safeReference}`;
    navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Export filtered as Markdown
  const exportAsMarkdown = () => {
    let md = `# SAFe 6.0 RTE & STE Interview Question Bank\n`;
    md += `Exported from RTE-Nexus (${filteredQuestions.length} Questions)\n\n`;
    filteredQuestions.forEach((q, idx) => {
      md += `### ${idx + 1}. [${q.role} | ${q.archetype}] ${q.question}\n`;
      md += `**Category:** ${q.category} | **Difficulty:** ${q.difficulty}\n\n`;
      md += `**Answer:**\n${q.answer}\n\n`;
      md += `> **Key Takeaway:** ${q.keyTakeaway}\n\n`;
      md += `*SAFe Reference:* ${q.safeReference}\n\n---\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SAFe_Interview_Vault_${selectedRole}_${filteredQuestions.length}Q.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Archetype Badge Styles
  const getArchetypeStyle = (arch) => {
    switch (arch) {
      case 'Concept':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Scenario':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'What-If':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'Best Approach':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'First Approach':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  // Mastery percentage
  const totalMastered = Object.keys(masteredIds).length;
  const masteryPercentage = Math.round((totalMastered / INTERVIEW_STATS.total) * 100);
  const totalBookmarked = Object.keys(bookmarkedIds).length;

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950 p-6 md:p-10 border border-indigo-900/40 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              SAFe® 6.0 Enterprise Knowledge Engine
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
              RTE & STE <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Interview Master Vault</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              170 rigorous, executive-vetted interview questions and strategic responses for Release Train Engineers (85 Qs) and Solution Train Engineers (85 Qs). Master foundational concepts, situational crisis handling, what-if dilemmas, and first-response execution.
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3 min-w-[280px]">
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 p-3.5 rounded-xl text-center shadow-lg">
              <div className="text-2xl font-black text-white">170</div>
              <div className="text-xs text-slate-400 font-medium">Master Q&As</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-blue-500/30 p-3.5 rounded-xl text-center shadow-lg">
              <div className="text-2xl font-black text-blue-400">85 : 85</div>
              <div className="text-xs text-slate-400 font-medium">RTE vs STE</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-purple-500/30 p-3.5 rounded-xl text-center shadow-lg">
              <div className="text-2xl font-black text-purple-400">5</div>
              <div className="text-xs text-slate-400 font-medium">Archetypes</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur border border-emerald-500/30 p-3.5 rounded-xl text-center shadow-lg">
              <div className="text-2xl font-black text-emerald-400">{masteryPercentage}%</div>
              <div className="text-xs text-slate-400 font-medium">Mastery Progress</div>
            </div>
          </div>
        </div>

        {/* Global Mastery Progress Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-emerald-400" />
                Vault Mastery Tracker ({totalMastered} of {INTERVIEW_STATS.total} Mastered)
              </span>
              <span className="text-emerald-400 font-bold">{masteryPercentage}% Complete</span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${masteryPercentage}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTabFilter(activeTabFilter === 'mastered' ? 'all' : 'mastered')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                activeTabFilter === 'mastered' 
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                  : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Mastered ({totalMastered})
            </button>
            <button
              onClick={() => setActiveTabFilter(activeTabFilter === 'bookmarked' ? 'all' : 'bookmarked')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                activeTabFilter === 'bookmarked' 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                  : 'bg-slate-800/60 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
              Saved ({totalBookmarked})
            </button>
            <button
              onClick={exportAsMarkdown}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
              title="Export Current Filtered List as Markdown"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              Export MD
            </button>
          </div>
        </div>
      </div>

      {/* Filter Control Center */}
      <div className="bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl p-5 shadow-xl space-y-4">
        {/* Top Controls: Role Selection & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Role Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start">
            <button
              onClick={() => setSelectedRole('All')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedRole === 'All' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              All Roles ({INTERVIEW_STATS.total})
            </button>
            <button
              onClick={() => setSelectedRole('RTE')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedRole === 'RTE' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-blue-300" />
              RTE Track ({INTERVIEW_STATS.rteTotal})
            </button>
            <button
              onClick={() => setSelectedRole('STE')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedRole === 'STE' 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-purple-300" />
              STE Large Solution ({INTERVIEW_STATS.steTotal})
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 170 Q&As by keyword, topic, or SAFe reference..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 pl-10 pr-4 py-2 rounded-xl text-xs md:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Archetype Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
            <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" />
            Archetype:
          </span>
          {INTERVIEW_ARCHETYPES.map((arch) => {
            const count = arch === 'All' 
              ? INTERVIEW_STATS.total 
              : (INTERVIEW_STATS.archetypes[arch] || 0);
            const isSelected = selectedArchetype === arch;
            return (
              <button
                key={arch}
                onClick={() => setSelectedArchetype(arch)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  isSelected 
                    ? 'bg-slate-100 text-slate-950 border-white font-bold shadow' 
                    : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {arch} <span className="opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Category & Difficulty Dropdowns & Utility Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80 text-xs">
          {/* Category Select */}
          <div>
            <label className="block text-slate-400 text-[11px] font-medium mb-1">Knowledge Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Select */}
          <div>
            <label className="block text-slate-400 text-[11px] font-medium mb-1">Seniority Level</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Levels</option>
              <option value="Intermediate">Intermediate (Practitioner)</option>
              <option value="Advanced">Advanced (Senior Leader)</option>
              <option value="Master / Principal">Master / Principal STE</option>
            </select>
          </div>

          {/* Flashcard / Study Mode Toggle */}
          <div>
            <label className="block text-slate-400 text-[11px] font-medium mb-1">Interactive Study Mode</label>
            <button
              onClick={() => setIsFlashcardMode(!isFlashcardMode)}
              className={`w-full py-1.5 px-3 rounded-lg border font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                isFlashcardMode 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {isFlashcardMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {isFlashcardMode ? "Flashcard Mode (Answers Hidden)" : "Standard Mode (Expandable)"}
            </button>
          </div>

          {/* Expand / Collapse All */}
          <div>
            <label className="block text-slate-400 text-[11px] font-medium mb-1">Bulk View Controls</label>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={expandAll}
                className="py-1.5 px-2 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800 transition-colors text-center font-medium"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="py-1.5 px-2 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800 transition-colors text-center font-medium"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Meta Info */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div>
          Showing <span className="font-bold text-white">{filteredQuestions.length}</span> questions 
          {selectedRole !== 'All' && <span> for <span className="text-indigo-400 font-semibold">{selectedRole}</span></span>}
          {selectedArchetype !== 'All' && <span> under <span className="text-amber-400 font-semibold">{selectedArchetype}</span></span>}
          {activeTabFilter !== 'all' && <span> ({activeTabFilter})</span>}
        </div>
        {(selectedRole !== 'All' || selectedArchetype !== 'All' || selectedCategory !== 'All' || selectedDifficulty !== 'All' || searchQuery || activeTabFilter !== 'all') && (
          <button
            onClick={() => {
              setSelectedRole('All');
              setSelectedArchetype('All');
              setSelectedCategory('All');
              setSelectedDifficulty('All');
              setSearchQuery('');
              setActiveTabFilter('all');
            }}
            className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3 h-3" /> Reset Filters
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-600 mx-auto" />
            <div className="text-lg font-bold text-slate-200">No matching interview questions found</div>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Try broadening your search query or resetting filters to explore the full 170-question vault.
            </p>
            <button
              onClick={() => {
                setSelectedRole('All');
                setSelectedArchetype('All');
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
                setActiveTabFilter('all');
              }}
              className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredQuestions.map((q, index) => {
            const isExpanded = expandedCards[q.id] || false;
            const isBookmarked = bookmarkedIds[q.id] || false;
            const isMastered = masteredIds[q.id] || false;
            const isRevealed = !isFlashcardMode || isExpanded;

            return (
              <div 
                key={q.id}
                className={`group rounded-xl border transition-all duration-200 overflow-hidden ${
                  isMastered 
                    ? 'bg-slate-900/60 border-emerald-900/40 shadow-sm' 
                    : isBookmarked 
                    ? 'bg-slate-900/90 border-amber-900/40 shadow-md' 
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                {/* Card Header & Question Bar */}
                <div 
                  onClick={() => toggleCard(q.id)}
                  className="p-5 cursor-pointer select-none space-y-3 hover:bg-slate-850/50 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Role Badge */}
                      <span className={`px-2.5 py-0.5 rounded-full font-bold text-[11px] border ${
                        q.role === 'RTE' 
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' 
                          : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                      }`}>
                        {q.role}
                      </span>

                      {/* Archetype Badge */}
                      <span className={`px-2.5 py-0.5 rounded-full font-semibold text-[11px] border ${getArchetypeStyle(q.archetype)}`}>
                        {q.archetype}
                      </span>

                      {/* Category */}
                      <span className="text-slate-400 font-medium text-[11px] hidden sm:inline">
                        • {q.category}
                      </span>

                      {/* Difficulty Badge */}
                      <span className="text-slate-500 text-[10px] bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {q.difficulty}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {/* 1-Click Copy */}
                      <button
                        onClick={(e) => copyToClipboard(q, e)}
                        className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
                        title="Copy Question & Answer"
                      >
                        {copiedId === q.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => toggleBookmark(q.id, e)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isBookmarked 
                            ? 'text-amber-400 bg-amber-500/10' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                        }`}
                        title={isBookmarked ? "Remove Bookmark" : "Save for Study"}
                      >
                        {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
                      </button>

                      {/* Mastered Button */}
                      <button
                        onClick={(e) => toggleMastered(q.id, e)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isMastered 
                            ? 'text-emerald-400 bg-emerald-500/10' 
                            : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800'
                        }`}
                        title={isMastered ? "Mark as In-Progress" : "Mark as Mastered"}
                      >
                        <CheckCircle2 className={`w-4 h-4 ${isMastered ? 'text-emerald-400' : 'text-slate-400'}`} />
                      </button>

                      {/* Accordion Chevron */}
                      <div className="p-1.5 text-slate-400 group-hover:text-slate-200">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Question Text */}
                  <div className="flex items-start gap-3">
                    <span className="text-slate-500 font-mono text-xs mt-0.5">#{index + 1}</span>
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                      {q.question}
                    </h3>
                  </div>

                  {/* Flashcard prompt indicator when answer is hidden */}
                  {isFlashcardMode && !isExpanded && (
                    <div className="text-xs text-amber-400/80 font-medium flex items-center gap-1.5 pt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Flashcard Mode: Click to test your answer & reveal strategic solution
                    </div>
                  )}
                </div>

                {/* Expandable Strategic Answer Section */}
                {isRevealed && (
                  <div className="p-5 pt-0 border-t border-slate-800/80 bg-slate-950/40 space-y-4 text-sm animate-fade-in">
                    {/* The Answer Narrative */}
                    <div className="space-y-2 pt-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-indigo-400" />
                        Executive Strategic Answer:
                      </div>
                      <p className="text-slate-200 leading-relaxed text-sm md:text-base whitespace-pre-line">
                        {q.answer}
                      </p>
                    </div>

                    {/* Key Strategic Takeaway Callout */}
                    <div className="bg-indigo-950/30 border-l-4 border-indigo-500 p-3.5 rounded-r-xl space-y-1">
                      <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-indigo-400" />
                        Key Interview Takeaway:
                      </div>
                      <p className="text-indigo-100 text-xs md:text-sm font-medium">
                        "{q.keyTakeaway}"
                      </p>
                    </div>

                    {/* Footer Meta: Reference & Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5 font-medium">
                        <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                        <span>Source: <span className="text-slate-300 font-semibold">{q.safeReference}</span></span>
                      </div>

                      {q.tags && q.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-1.5">
                          <Tag className="w-3 h-3 text-slate-500" />
                          {q.tags.map(tag => (
                            <span key={tag} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[10px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Sticky Helper for Long Browsing */}
      {filteredQuestions.length > 5 && (
        <div className="text-center pt-8 border-t border-slate-800">
          <p className="text-xs text-slate-500">
            End of question list • Showing {filteredQuestions.length} of 170 master Q&As • Updated for SAFe® 6.0
          </p>
        </div>
      )}
    </div>
  );
}

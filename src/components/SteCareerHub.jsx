import React, { useState } from 'react';
import { STE_CAREER_DATA } from '../data/steData';
import { 
  Award, 
  Compass, 
  UserCheck, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  HelpCircle, 
  BookOpen, 
  Briefcase, 
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Layers,
  BarChart3,
  Star,
  Network
} from 'lucide-react';

export default function SteCareerHub() {
  const [activeTab, setActiveTab] = useState('assessment'); // 'assessment' | 'eligibility' | 'certifications' | 'roadmap'

  // STE SELF ASSESSMENT STATE
  const [answers, setAnswers] = useState({
    'ste-q1': 3, 'ste-q2': 3, 'ste-q3': 3, 'ste-q4': 3, 'ste-q5': 3,
    'ste-q6': 3, 'ste-q7': 3, 'ste-q8': 3, 'ste-q9': 3, 'ste-q10': 3
  });

  const handleScoreChange = (qId, value) => {
    setAnswers(prev => ({ ...prev, [qId]: Number(value) }));
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0); // Max 50
  const scorePct = Math.round((totalScore / 50) * 100);

  const getReadinessLevel = () => {
    if (scorePct >= 90) return { title: "Master Solution Train Engineer (VMO / Enterprise Ready)", color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/30", badge: "Enterprise Gold", text: "You demonstrate complete mastery of multi-train governance, supplier agility, and enterprise portfolio synchronization. You are ready to lead massive cyber-physical Solution Trains or head an Enterprise VMO." };
    if (scorePct >= 75) return { title: "Practicing STE (Senior Multi-Train Lead)", color: "text-sky-400 border-sky-500/40 bg-sky-950/30", badge: "High Performing STE", text: "You have strong capabilities in Pre/Post-PI facilitation and cross-train dependency management. Focus on deepening Fixed vs Variable Solution Intent and Lean Portfolio Budgeting." };
    if (scorePct >= 60) return { title: "Emerging STE (Senior RTE Transition Phase)", color: "text-amber-400 border-amber-500/40 bg-amber-950/30", badge: "Transitioning Lead", text: "You have solid single-ART RTE excellence. Deepen your understanding of large solution supplier contracts, enterprise compliance, and multi-train flow telemetry." };
    return { title: "RTE Foundation Phase", color: "text-rose-400 border-rose-500/40 bg-rose-950/30", badge: "Developing", text: "Continue building experience facilitating single Agile Release Trains (ARTs) and mastering Scrum of Scrums before stepping into multi-train orchestration." };
  };

  const readiness = getReadinessLevel();

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* HEADER BANNER */}
      <div className="glass-panel p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-navy-950 via-navy-900 to-indigo-950 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
          <Network className="w-4 h-4 text-sky-400" />
          <span>Solution Train Engineer Career & Growth</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          STE Diagnostic, Certifications & <span className="text-gradient">Career Roadmap</span>
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
          Evaluate your readiness to orchestrate thousands of engineers on a SAFe Large Solution Train, explore transition paths from Senior RTE to STE, review elite certifications (SPC, STE Mastery Track), and chart your 5-year trajectory to Enterprise VMO Director.
        </p>

        {/* Navigation Switcher */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: 'assessment', label: '🎯 360° STE Diagnostic', icon: Target },
            { id: 'eligibility', label: '👥 Who Can Become an STE?', icon: Users },
            { id: 'certifications', label: '🏆 Certification Matrix', icon: Award },
            { id: 'roadmap', label: '🚀 5-Year STE Roadmap', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-glow-sapphire'
                    : 'bg-navy-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SUB-VIEW 1: STE SELF-ASSESSMENT */}
      {activeTab === 'assessment' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* Live Scorecard */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-navy-900/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Diagnostic Result</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center space-x-2 justify-center md:justify-start">
                <span>{readiness.title}</span>
              </h2>
              <p className="text-xs text-slate-300 max-w-xl">{readiness.text}</p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-navy-950 border border-slate-800 shrink-0 min-w-[180px]">
              <span className="text-3xl font-extrabold text-gradient">{scorePct}%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Readiness Score</span>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full border mt-2 font-bold ${readiness.color}`}>
                {readiness.badge}
              </span>
            </div>
          </div>

          {/* 10 Assessment Questions */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-sky-400" />
              <span>10-Question Large Solution Diagnostic</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {STE_CAREER_DATA.assessmentQuestions.map((q, idx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-navy-950 border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 w-fit">
                      {q.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Rating: {answers[q.id]} / 5</span>
                  </div>

                  <p className="text-xs text-white font-medium">{idx + 1}. {q.text}</p>

                  <div className="flex items-center space-x-3 pt-1">
                    <span className="text-[10px] text-slate-500 font-bold">Developing (1)</span>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={answers[q.id]}
                      onChange={(e) => handleScoreChange(q.id, e.target.value)}
                      className="flex-1 accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                    <span className="text-[10px] text-emerald-400 font-bold">Mastery (5)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* SUB-VIEW 2: WHO CAN BECOME AN STE? */}
      {activeTab === 'eligibility' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-heading font-bold text-white">Who Can Become a Solution Train Engineer?</h2>
            <p className="text-xs text-slate-400">Analysis of feeder roles, natural transition strengths, and capability gaps to bridge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STE_CAREER_DATA.candidateProfiles.map((p, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{p.role}</h3>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      {p.matchScore}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">Core Strengths</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.strengths}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Gaps to Bridge</span>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.gapsToBridge}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-950/40 border border-sky-500/30 text-xs text-sky-200">
                  <strong>Recommended Transition Path:</strong> {p.transitionStrategy}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 3: CERTIFICATIONS */}
      {activeTab === 'certifications' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-heading font-bold text-white">Official Large Solution Certification Matrix</h2>
            <p className="text-xs text-slate-400">Accredited certifications that validate Large Solution orchestration expertise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STE_CAREER_DATA.certifications.map((cert, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block">{cert.issuingBody}</span>
                  <h3 className="text-base font-bold text-white">{cert.name}</h3>
                  <p className="text-xs text-slate-300 italic">{cert.targetAudience}</p>

                  <div className="space-y-1 text-xs">
                    <strong className="text-slate-200 block text-[11px]">Prerequisites:</strong>
                    <span className="text-slate-400">{cert.prerequisites}</span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <strong className="text-slate-200 block text-[11px]">Core Exam Domains:</strong>
                    <ul className="space-y-1 text-[11px] text-slate-300">
                      {cert.coreDomains.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 text-[10px] text-slate-400">
                  <strong>Format:</strong> {cert.examFormat}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 4: ROADMAP */}
      {activeTab === 'roadmap' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-2xl font-heading font-bold text-white">The 5-Year STE Career Trajectory</h2>
            <p className="text-xs text-slate-400">From Lead RTE to Solution Train Engineer and Enterprise VMO Director.</p>
          </div>

          <div className="space-y-4">
            {STE_CAREER_DATA.careerRoadmap.map((stage, idx) => (
              <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-sky-500/40 transition-colors">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">{stage.years}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-navy-950 border border-slate-800 text-[10px] font-bold text-slate-300">
                      {stage.stage}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{stage.roleTitle}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{stage.focus}</p>
                </div>

                <div className="p-4 rounded-2xl bg-navy-950 border border-slate-800 md:max-w-xs shrink-0 space-y-1">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">Key Graduation Milestone</span>
                  <p className="text-xs text-slate-200">{stage.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RteOverviewLanding from './components/RteOverviewLanding';
import ServantLeadershipDeepDive from './components/ServantLeadershipDeepDive';
import ArtDynamicsHighPerf from './components/ArtDynamicsHighPerf';
import DayInTheLife from './components/DayInTheLife';
import OperationalPillars from './components/OperationalPillars';
import WorkshopStudio from './components/WorkshopStudio';
import AlmToolsGuide from './components/AlmToolsGuide';
import ReportingEngine from './components/ReportingEngine';
import AiCoPilot from './components/AiCoPilot';
import CopMasterclass from './components/CopMasterclass';
import LaceGuide from './components/LaceGuide';
import InteractiveTools from './components/InteractiveTools';
import RteCareerHub from './components/RteCareerHub';

// STE Components
import SteOverviewLanding from './components/SteOverviewLanding';
import SteOperationalPillars from './components/SteOperationalPillars';
import SteDayInTheLife from './components/SteDayInTheLife';
import SteInteractiveTools from './components/SteInteractiveTools';
import SteCareerHub from './components/SteCareerHub';

export default function App() {
  const [activeTab, setActiveTab] = useState('foundations');

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 font-sans">
      
      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* RTE FOUNDATIONS & LEADERSHIP */}
        {activeTab === 'foundations' && (
          <RteOverviewLanding onNavigateTab={setActiveTab} />
        )}

        {activeTab === 'servant-leadership' && (
          <ServantLeadershipDeepDive />
        )}

        {activeTab === 'rte-career-hub' && (
          <RteCareerHub />
        )}

        {activeTab === 'art-dynamics' && (
          <ArtDynamicsHighPerf />
        )}

        {activeTab === 'lace-guide' && (
          <LaceGuide />
        )}

        {/* STE LARGE SOLUTION SUITE */}
        {activeTab === 'ste-overview' && (
          <SteOverviewLanding onNavigateTab={setActiveTab} />
        )}

        {activeTab === 'ste-pillars' && (
          <SteOperationalPillars onOpenAiSuite={() => setActiveTab('ai-copilot')} />
        )}

        {activeTab === 'ste-day-in-life' && (
          <SteDayInTheLife />
        )}

        {activeTab === 'ste-tools' && (
          <SteInteractiveTools />
        )}

        {activeTab === 'ste-career-hub' && (
          <SteCareerHub />
        )}

        {/* EXECUTION & CADENCE */}
        {activeTab === 'day-in-life' && (
          <DayInTheLife />
        )}

        {activeTab === 'pillars' && (
          <OperationalPillars onOpenAiSuite={() => setActiveTab('ai-copilot')} />
        )}

        {activeTab === 'reporting-engine' && (
          <ReportingEngine />
        )}

        {activeTab === 'cop-masterclass' && (
          <CopMasterclass />
        )}

        {/* WORKSHOPS & TOOLS */}
        {activeTab === 'workshop-studio' && (
          <WorkshopStudio />
        )}

        {activeTab === 'alm-tools' && (
          <AlmToolsGuide />
        )}

        {activeTab === 'power-tools' && (
          <InteractiveTools />
        )}

        {/* AI CO-PILOT SUITE (RTE + STE COMBINED) */}
        {activeTab === 'ai-copilot' && (
          <AiCoPilot />
        )}

      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}

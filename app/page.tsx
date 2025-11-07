'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Header } from './components/Header';
import { ProblemsList } from './components/ProblemsList';
import { SolutionView } from './components/SolutionView';
import { AnalyticsView } from './components/AnalyticsView';
import { ProposeProblemModal } from './components/ProposeProblemModal';

type View = 'problems' | 'solution' | 'analytics';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('problems');
  const [showProposeModal, setShowProposeModal] = useState(false);
  const [selectedProblemId, setSelectedProblemId] = useState<string | null>(null);

  // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const handleViewSolution = (problemId: string) => {
    setSelectedProblemId(problemId);
    setCurrentView('solution');
  };

  return (
    <main className="min-h-screen bg-bg">
      <Header 
        currentView={currentView}
        onViewChange={setCurrentView}
        onPropose={() => setShowProposeModal(true)}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {currentView === 'problems' && (
          <ProblemsList onViewSolution={handleViewSolution} />
        )}
        
        {currentView === 'solution' && selectedProblemId && (
          <SolutionView 
            problemId={selectedProblemId}
            onBack={() => setCurrentView('problems')}
          />
        )}
        
        {currentView === 'analytics' && (
          <AnalyticsView />
        )}
      </div>

      {showProposeModal && (
        <ProposeProblemModal onClose={() => setShowProposeModal(false)} />
      )}
    </main>
  );
}

'use client';

import { ChevronLeft, X, Plus, BarChart3 } from 'lucide-react';

interface HeaderProps {
  currentView: 'problems' | 'solution' | 'analytics';
  onViewChange: (view: 'problems' | 'solution' | 'analytics') => void;
  onPropose: () => void;
}

export function Header({ currentView, onViewChange, onPropose }: HeaderProps) {
  const getTitle = () => {
    switch (currentView) {
      case 'problems':
        return 'Collective problems';
      case 'solution':
        return 'Solution Proposals';
      case 'analytics':
        return 'Analytics';
      default:
        return 'Collective Intelligence';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {currentView !== 'problems' && (
              <button
                onClick={() => onViewChange('problems')}
                className="p-2 hover:bg-bg rounded-lg transition-smooth"
                aria-label="Go back"
              >
                <ChevronLeft className="w-5 h-5 text-fg" />
              </button>
            )}
            <h1 className="text-xl font-semibold text-fg">{getTitle()}</h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewChange('analytics')}
              className="p-2 hover:bg-bg rounded-lg transition-smooth"
              aria-label="View analytics"
            >
              <BarChart3 className="w-5 h-5 text-muted" />
            </button>
            
            {currentView === 'problems' && (
              <button
                onClick={onPropose}
                className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-smooth"
              >
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Propose</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

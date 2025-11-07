'use client';

import { useState } from 'react';
import { Globe, MapPin, Building2, ChevronRight, TrendingUp } from 'lucide-react';

interface Problem {
  id: string;
  title: string;
  level: 'international' | 'national' | 'local';
  theme: string;
  weight: number;
  status: 'proposed' | 'solution_phase' | 'analyzing' | 'resolved';
}

const mockProblems: Problem[] = [
  {
    id: '1',
    title: 'Truly international/threat/Gmu',
    level: 'international',
    theme: 'Theme 3',
    weight: 167555,
    status: 'solution_phase',
  },
  {
    id: '2',
    title: 'International',
    level: 'international',
    theme: 'Theme 1',
    weight: 8655,
    status: 'proposed',
  },
  {
    id: '3',
    title: 'Theme Angrily is local',
    level: 'local',
    theme: 'Theme 2',
    weight: 411730,
    status: 'analyzing',
  },
  {
    id: '4',
    title: 'Falcis Theme',
    level: 'national',
    theme: 'Theme 4',
    weight: 184897,
    status: 'proposed',
  },
];

interface ProblemsListProps {
  onViewSolution: (problemId: string) => void;
}

export function ProblemsList({ onViewSolution }: ProblemsListProps) {
  const [selectedLevel, setSelectedLevel] = useState<'international' | 'national' | 'local'>('international');

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'international':
        return <Globe className="w-4 h-4" />;
      case 'national':
        return <Building2 className="w-4 h-4" />;
      case 'local':
        return <MapPin className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'international':
        return 'text-blue-400';
      case 'national':
        return 'text-green-400';
      case 'local':
        return 'text-orange-400';
      default:
        return 'text-muted';
    }
  };

  const filteredProblems = mockProblems.filter(p => p.level === selectedLevel);

  return (
    <div className="animate-fade-in">
      {/* Level Tabs */}
      <div className="mb-6">
        <div className="inline-flex gap-2 p-1 bg-surface rounded-lg">
          {(['international', 'national', 'local'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth capitalize ${
                selectedLevel === level
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-fg'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${getLevelColor(selectedLevel)}`}>
              {getLevelIcon(selectedLevel)}
              <span className="text-sm font-medium capitalize">{selectedLevel}</span>
            </div>
            <div className="text-sm text-muted">
              Level: <span className="text-accent font-semibold">8,655</span>
            </div>
            <div className="text-sm text-muted">
              Total: <span className="text-fg font-semibold">167,555</span>
            </div>
          </div>
          <div className="text-xs text-muted">Layer 1</div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3 h-2 bg-bg rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full" style={{ width: '35%' }} />
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-fg mb-4">Layer 1 bullets</h2>
        
        {filteredProblems.map((problem) => (
          <button
            key={problem.id}
            onClick={() => onViewSolution(problem.id)}
            className="w-full p-4 bg-surface rounded-lg border border-border hover:border-accent transition-smooth text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className={`p-2 rounded-lg bg-bg ${getLevelColor(problem.level)}`}>
                  {getLevelIcon(problem.level)}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-fg mb-1">{problem.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>{problem.theme}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {problem.weight.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted group-hover:text-accent transition-smooth" />
            </div>
          </button>
        ))}
      </div>

      {/* Solution Proposals Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-fg mb-4">Solution proposals</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border cursor-pointer hover:border-accent transition-smooth">
            <input type="checkbox" className="w-4 h-4 rounded accent-accent" />
            <span className="text-sm text-fg">Italianization of the national</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border cursor-pointer hover:border-accent transition-smooth">
            <input type="checkbox" className="w-4 h-4 rounded accent-accent" />
            <span className="text-sm text-fg">Dalton closure of two partitions</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border cursor-pointer hover:border-accent transition-smooth">
            <input type="checkbox" className="w-4 h-4 rounded accent-accent" />
            <span className="text-sm text-muted">Ding the is a consensus think million and the sampling as an off the farmer a post exercise algorithmic</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full mt-6 py-4 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-lg font-medium hover:opacity-90 transition-smooth">
        Submit Winners
      </button>
    </div>
  );
}

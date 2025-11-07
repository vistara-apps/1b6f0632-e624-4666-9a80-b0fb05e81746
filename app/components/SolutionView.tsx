'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share2, Copy, Award, TrendingUp } from 'lucide-react';

interface SolutionViewProps {
  problemId: string;
  onBack: () => void;
}

export function SolutionView({ problemId }: SolutionViewProps) {
  const [activeTab, setActiveTab] = useState<'solution' | 'deliberation'>('solution');

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="text-xs text-muted mb-2">Layer 1</div>
        <h1 className="text-2xl font-bold text-fg mb-4">Submit Problems</h1>
        <h2 className="text-xl font-semibold text-fg">Solution Proposals <span className="text-muted">Layer</span></h2>
      </div>

      {/* Vote Count */}
      <div className="mb-8 text-center">
        <div className="text-6xl font-bold text-fg mb-4">17,56,085</div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg">
            <div className="w-8 h-8 rounded-full bg-orange-500" />
            <span className="text-sm text-fg">Callencity</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gray-600" />
            <span className="text-sm text-fg">Pons</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="inline-flex gap-2 p-1 bg-surface rounded-lg">
          <button
            onClick={() => setActiveTab('solution')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-smooth ${
              activeTab === 'solution'
                ? 'bg-accent text-white'
                : 'text-muted hover:text-fg'
            }`}
          >
            Solution
          </button>
          <button
            onClick={() => setActiveTab('deliberation')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-smooth ${
              activeTab === 'deliberation'
                ? 'bg-accent text-white'
                : 'text-muted hover:text-fg'
            }`}
          >
            Deliberation
          </button>
        </div>
      </div>

      {/* Pros and Cons Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Pros Card */}
        <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-4">
            <ThumbsUp className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-fg">Pros in Cons Pros Cons</h3>
          </div>
          <div className="text-4xl font-bold text-fg mb-2">186,479.</div>
          <div className="text-xs text-green-400">Edited by Building</div>
        </div>

        {/* Cons Card */}
        <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg border border-border">
          <div className="flex items-center gap-2 mb-4">
            <ThumbsDown className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-fg">Pros and Cons</h3>
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-fg">16.4%</span>
            <span className="text-sm text-red-400">Edited by Building</span>
          </div>
        </div>
      </div>

      {/* Weight Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button className="p-4 bg-surface rounded-lg border border-border hover:border-accent transition-smooth flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500" />
            <span className="text-sm font-medium text-fg">Upl ece weightnc</span>
          </div>
          <TrendingUp className="w-5 h-5 text-muted group-hover:text-accent transition-smooth" />
        </button>

        <button className="p-4 bg-surface rounded-lg border border-border hover:border-accent transition-smooth flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-600" />
            <span className="text-sm font-medium text-fg">Lweight of Un</span>
          </div>
          <TrendingUp className="w-5 h-5 text-muted group-hover:text-accent transition-smooth" />
        </button>
      </div>

      {/* Final Winner Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-fg mb-4">Final Winner</h3>
        <div className="flex items-center justify-around py-4 bg-surface rounded-lg border border-border">
          <button className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-smooth">
            <Share2 className="w-5 h-5" />
            <span className="text-xs">Share</span>
          </button>
          <button className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-smooth">
            <Copy className="w-5 h-5" />
            <span className="text-xs">Recast</span>
          </button>
          <button className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-smooth">
            <ThumbsUp className="w-5 h-5" />
            <span className="text-xs">Quote</span>
          </button>
          <button className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-smooth">
            <Award className="w-5 h-5" />
            <span className="text-xs">Awards</span>
          </button>
          <button className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-smooth">
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs">Attention</span>
          </button>
        </div>
      </div>

      {/* Final Winner Button */}
      <button className="w-full py-4 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-lg font-medium hover:opacity-90 transition-smooth">
        Final Winner
      </button>
    </div>
  );
}

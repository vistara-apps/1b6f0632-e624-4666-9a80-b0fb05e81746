'use client';

import { TrendingUp, Users, Award, Activity } from 'lucide-react';

export function AnalyticsView() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-fg mb-8">Analytics</h1>

      {/* Solution Proposals Stats */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-fg mb-4">Solution proposals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="text-xs text-muted mb-1">Layer 2</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-orange-400" />
              <span className="text-sm text-fg">International</span>
            </div>
            <div className="text-xs text-muted">Pros and coins varier of tagging</div>
          </div>

          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="text-xs text-muted mb-1">Layer 2</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-orange-400" />
              <span className="text-sm text-fg">Curve A cons</span>
            </div>
          </div>

          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="text-xs text-muted mb-1">Layer 2</div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-sm text-fg">Curve le carbon</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="p-6 bg-surface rounded-lg border border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-muted mb-1">Solutions</div>
              <div className="text-2xl font-bold text-fg">13.27%</div>
            </div>
            <div className="text-xs text-muted">Flock Noonan Feds Sox</div>
          </div>
          
          {/* Bar Chart Visualization */}
          <div className="flex items-end justify-between h-32 gap-2">
            {[40, 60, 45, 70, 55, 80, 65, 50, 75, 60, 85, 70].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-pink-400 to-orange-400 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Metrics */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-fg mb-4">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="text-xs text-muted mb-2">Cat Leans</div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-fg">Markline</span>
              <span className="text-sm text-muted">Prons</span>
              <span className="text-sm text-muted">Patterns</span>
            </div>
          </div>

          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="text-xs text-muted mb-2">Analytic</div>
            <div className="text-sm text-fg">Value</div>
          </div>

          <div className="p-4 bg-surface rounded-lg border border-border">
            <div className="text-xs text-muted mb-2">Metric</div>
            <div className="text-sm text-fg">Data</div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="p-6 bg-surface rounded-lg border border-border">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-bg"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  strokeDashoffset={`${2 * Math.PI * 70 * 0.4}`}
                  className="text-accent"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-fg">17</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-fg">11</div>
              <div className="text-xs text-muted">DA-lions</div>
              <div className="text-xs text-muted mt-1">116%</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-fg">356</div>
              <div className="text-xs text-muted">Posing</div>
              <div className="text-xs text-muted mt-1">108%</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-fg">170</div>
              <div className="text-xs text-muted">Feds</div>
              <div className="text-xs text-accent mt-1">Flock: -16,636</div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-fg">1095</div>
            <div className="text-xs text-muted">Cons</div>
          </div>
        </div>
      </div>

      {/* Final Winner Button */}
      <button className="w-full py-4 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-lg font-medium hover:opacity-90 transition-smooth">
        Final Winner
      </button>
    </div>
  );
}

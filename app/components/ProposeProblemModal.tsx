'use client';

import { useState } from 'react';
import { X, Globe, Building2, MapPin } from 'lucide-react';

interface ProposeProblemModalProps {
  onClose: () => void;
}

export function ProposeProblemModal({ onClose }: ProposeProblemModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState<'international' | 'national' | 'local'>('international');
  const [theme, setTheme] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement OnchainKit transaction for submitting problem
    console.log('Submitting problem:', { title, description, level, theme });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-surface rounded-lg border border-border shadow-card">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-fg">Propose a Problem</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg rounded-lg transition-smooth"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-muted" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-fg mb-2">
              Problem Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a clear, concise title"
              className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-fg placeholder-muted focus:outline-none focus:border-accent transition-smooth"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-fg mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the problem in detail"
              rows={4}
              className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-fg placeholder-muted focus:outline-none focus:border-accent transition-smooth resize-none"
              required
            />
          </div>

          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-fg mb-3">
              Problem Level
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'international', icon: Globe, label: 'International' },
                { value: 'national', icon: Building2, label: 'National' },
                { value: 'local', icon: MapPin, label: 'Local' },
              ].map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLevel(value as typeof level)}
                  className={`p-4 rounded-lg border transition-smooth ${
                    level === value
                      ? 'bg-accent border-accent text-white'
                      : 'bg-bg border-border text-muted hover:border-accent'
                  }`}
                >
                  <Icon className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-xs font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div>
            <label htmlFor="theme" className="block text-sm font-medium text-fg mb-2">
              Content Theme
            </label>
            <input
              id="theme"
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="e.g., Environment, Economy, Health"
              className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-fg placeholder-muted focus:outline-none focus:border-accent transition-smooth"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-smooth"
          >
            Submit Problem
          </button>
        </form>
      </div>
    </div>
  );
}

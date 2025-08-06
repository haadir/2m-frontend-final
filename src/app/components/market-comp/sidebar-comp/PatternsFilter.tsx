'use client';

import React, { useState } from 'react';
import { ChevronDown, Asterisk } from 'lucide-react';

export default function PatternsFilter() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [paintSeed, setPaintSeed] = useState('');

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setSectionOpen(!sectionOpen)}
        className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h3 className="text-white font-bold">Patterns</h3>
          <Asterisk className="w-7 h-7 text-white" />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform ${sectionOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {sectionOpen && (
        <div className="space-y-4 pt-2 opacity-0 animate-[fadeInUp_0.15s_ease-out_forwards]">
          <label className="text-gray-400 text-sm" htmlFor="paintSeed">Paint Seed</label>
          <input
            id="paintSeed"
            type="number"
            min={0}
            placeholder="e.g. 100"
            value={paintSeed}
            onChange={(e) => setPaintSeed(e.target.value)}
            className="w-full bg-[#1E1E1E] border border-[#464646] rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-300"
          />
        </div>
      )}
    </div>
  );
} 
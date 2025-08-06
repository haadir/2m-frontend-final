'use client';

import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

export default function CharmsFilter() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [charm, setCharm] = useState('');

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setSectionOpen(!sectionOpen)}
        className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Charms</h3>
          <Star className="w-5 h-5 text-white" />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform ${sectionOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {sectionOpen && (
        <div className="pt-2 opacity-0 animate-[fadeInUp_0.15s_ease-out_forwards]">
          <input
            type="text"
            placeholder="Applied Charm"
            value={charm}
            onChange={(e) => setCharm(e.target.value)}
            className="w-full bg-[#1E1E1E] border border-[#464646] rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-300"
          />
        </div>
      )}
    </div>
  );
}
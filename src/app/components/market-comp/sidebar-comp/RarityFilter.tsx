'use client';

import React, { useState } from 'react';
import { ChevronDown, Gem } from 'lucide-react';

const rarities = [
  { label: 'Any', value: '', color: '#3b82f6' },
  { label: 'Consumer', value: 'consumer', color: '#d4d4d8' },
  { label: 'Industrial', value: 'industrial', color: '#38bdf8' },
  { label: 'Mil-Spec', value: 'mil-spec', color: '#2563eb' },
  { label: 'Restricted', value: 'restricted', color: '#ec4899' },
  { label: 'Classified', value: 'classified', color: '#d946ef' },
  { label: 'Covert', value: 'covert', color: '#ef4444' },
  { label: 'Contraband', value: 'contraband', color: '#facc15' },
];

export default function RarityFilter() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [selected, setSelected] = useState(rarities[0]);

  const selectOption = (opt: (typeof rarities)[0]) => {
    setSelected(opt);
    setListOpen(false);
  };

  return (
    <div className="space-y-2 relative">
      {/* Header to collapse whole section */}
      <button
        type="button"
        onClick={() => setSectionOpen(!sectionOpen)}
        className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Rarity</h3>
          <Gem className="w-5 h-5 text-white" />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform ${sectionOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {sectionOpen && (
      <div className="relative opacity-0 animate-[fadeInUp_0.15s_ease-out_forwards]">
        <button
          onClick={() => setListOpen(!listOpen)}
          className="bg-[#1E1E1E] border border-[#464646] rounded-md px-3 py-2 w-full flex items-center justify-between text-gray-300 hover:border-gray-400">
          <span style={{ color: selected.color }}>{selected.label}</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {/* Options list */}
        {listOpen && (
          <ul
            className="absolute bottom-full mb-2 left-0 z-10 w-full max-h-60 overflow-auto bg-[#1E1E1E] border border-[#464646] rounded-md shadow-lg opacity-0 animate-[fadeInUp_0.15s_ease-out_forwards]"
            style={{
              // keyframes inline for quick usage
              //@ts-ignore
              '--tw-animate-from': 'translateY(8px)',
            }}
          >
            {rarities.map((opt) => (
              <li
                key={opt.value}
                onClick={() => selectOption(opt)}
                className={`cursor-pointer px-3 py-2 text-sm flex justify-between hover:bg-[#2A2A2A] ${
                  selected.value === opt.value ? 'bg-[#2A2A2A]' : ''
                }`}
              >
                <span style={{ color: opt.color }}>{opt.label}</span>
                {selected.value === opt.value && <span className="text-blue-500">✔</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
      )}
    </div>
  );
} 
'use client';

import React, { useState } from 'react';
import { ChevronDown, Layers } from 'lucide-react';

const collections = [
  'Any',
  'Limited Edition Item',
  'The 2018 Inferno Collection',
  'The 2018 Nuke Collection',
  'The 2021 Dust 2 Collection',
  'The 2021 Mirage Collection',
  'The 2021 Train Collection',
  'The 2021 Vertigo Collection',
  'The Alpha Collection',
  'The Ancient Collection',
  'The Anubis Collection',
  'The Arms Deal 2 Collection',
  'The Arms Deal 3 Collection',
  'The Arms Deal Collection',
  'The Ascent Collection',
  'The Assault Collection',
  'The Aztec Collection',
  'The Baggage Collection',
  'The Bank Collection',
  'The Blacksite Collection',
  'The Bravo Collection',
  'The Breakout Collection',
  'The Cache Collection',
  'The Canals Collection',
  'The Chop Shop Collection',
  'The Chroma 2 Collection',
  'The Chroma 3 Collection',
  'The Chroma Collection',
  'The Clutch Collection',
  'The Cobblestone Collection',
  'The Control Collection',
  'The CS20 Collection',
  'The Danger Zone Collection',
  'The Dreams & Nightmares Collection',
  'The Dust 2 Collection',
  'The Dust Collection',
  'The eSports 2013 Collection',
  'The eSports 2013 Winter Collection',
  'The eSports 2014 Summer Collection',
  'The Falchion Collection',
  'The Fever Collection',
  'The Fracture Collection',
  'The Gallery Collection',
  'The Gamma 2 Collection',
  'The Gamma Collection',
  'The Glove Collection',
  'The Gods and Monsters Collection',
  'The Graphic Design Collection',
  'The Havoc Collection',
  'The Horizon Collection',
  'The Huntsman Collection',
  'The Inferno Collection',
  'The Italy Collection',
  'The Kilowatt Collection',
  'The Lake Collection',
  'The Militia Collection',
  'The Mirage Collection',
  'The Norse Collection',
  'The Nuke Collection',
  'The Office Collection',
  'The Operation Broken Fang Collection',
  'The Operation Hydra Collection',
  'The Operation Riptide Collection',
  'The Overpass 2024 Collection',
  'The Overpass Collection',
  'The Phoenix Collection',
  'The Prisma 2 Collection',
  'The Prisma Collection',
  'The Radiant Collection',
  'The Recoil Collection',
  'The Revolution Collection',
  'The Revolver Case Collection',
  'The Rising Sun Collection',
  'The Safehouse Collection',
  'The Shadow Collection',
  'The Shattered Web Collection',
  'The Snakebite Collection',
  'The Spectrum 2 Collection',
  'The Spectrum Collection',
  'The Sport & Field Collection',
  'The St. Marc Collection',
  'The Train 2025 Collection',
  'The Train Collection',
  'The Vanguard Collection',
  'The Vertigo Collection',
  'The Wildfire Collection',
  'The Winter Offensive Collection',
  'The X-Ray Collection',
];

export default function CollectionFilter() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [selected, setSelected] = useState(collections[0]);

  const selectOption = (opt: string) => {
    setSelected(opt);
    setListOpen(false);
  };

  return (
    <div className="space-y-2 relative">
      <button
        type="button"
        onClick={() => setSectionOpen(!sectionOpen)}
        className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Collection</h3>
          <Layers className="w-5 h-5 text-white" />
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
            <span>{selected}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {listOpen && (
            <ul
              className="absolute bottom-full mb-2 left-0 z-10 w-full max-h-72 overflow-auto bg-[#1E1E1E] border border-[#464646] rounded-md shadow-lg opacity-0 animate-[fadeInUp_0.15s_ease-out_forwards]">
              {collections.map((opt) => (
                <li
                  key={opt}
                  onClick={() => selectOption(opt)}
                  className={`cursor-pointer px-3 py-2 text-sm hover:bg-[#2A2A2A] ${selected === opt ? 'bg-[#2A2A2A]' : ''}`}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
} 
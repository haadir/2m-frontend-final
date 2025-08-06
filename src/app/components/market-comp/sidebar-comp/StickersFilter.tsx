'use client';

import React, { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

const slotOptions = ['Any Slot', 'Slot 1', 'Slot 2', 'Slot 3', 'Slot 4', 'Slot 5'];

export default function StickersFilter() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [rows] = useState([0, 1, 2, 3, 4]);
  const [selectedSlots, setSelectedSlots] = useState<string[]>(Array(5).fill('Any Slot'));
  const [openRow, setOpenRow] = useState<number | null>(null);

  const toggleSlotList = (idx: number) => {
    setOpenRow(openRow === idx ? null : idx);
  };

  const chooseSlot = (idx: number, slot: string) => {
    const copy = [...selectedSlots];
    copy[idx] = slot;
    setSelectedSlots(copy);
    setOpenRow(null);
  };

  return (
    <div className="space-y-2 relative">
      <button
        type="button"
        onClick={() => setSectionOpen(!sectionOpen)}
        className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Stickers</h3>
          <Star className="w-5 h-5 text-white" />
        </div>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform ${sectionOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {sectionOpen && (
        <div className="space-y-3 pt-2">
          {rows.map((i) => (
            <div
              key={i}
              className="relative opacity-0 animate-[fadeInUp_0.25s_ease-out_forwards]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Sticker"
                  className="flex-1 bg-[#1E1E1E] border border-[#464646] rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => toggleSlotList(i)}
                  className="w-32 bg-[#1E1E1E] border border-[#464646] rounded-md px-3 py-2 flex items-center justify-between text-gray-300 hover:border-gray-400">
                  <span>{selectedSlots[i]}</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              {openRow === i && (
                <ul className="absolute right-0 top-full z-10 mt-1 w-32 max-h-48 overflow-auto bg-[#1E1E1E] border border-[#464646] rounded-md shadow-lg animate-[fadeIn_0.1s_ease-out]">
                  {slotOptions.map((opt) => (
                    <li
                      key={opt}
                      onClick={() => chooseSlot(i, opt)}
                      className={`cursor-pointer px-3 py-2 text-sm hover:bg-[#2A2A2A] ${selectedSlots[i] === opt ? 'bg-[#2A2A2A]' : ''}`}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 
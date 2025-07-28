'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../Button';

interface WearOption {
  id: string;
  label: string;
  color: string;
}

const wearOptions: WearOption[] = [
  { id: 'factory-new', label: 'Factory New', color: '#4ade80' }, // Green
  { id: 'minimal-wear', label: 'Minimal Wear', color: '#22c55e' }, // Light Green
  { id: 'field-tested', label: 'Field-Tested', color: '#eab308' }, // Yellow
  { id: 'well-worn', label: 'Well-Worn', color: '#f97316' }, // Orange
  { id: 'battle-scarred', label: 'Battle-Scarred', color: '#ef4444' }, // Red
  { id: 'select-all', label: 'Select All', color: '#ffffff' }, // White
];

interface WearFilterProps {
  selectedWears: string[];
  setSelectedWears: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function WearFilter({ selectedWears, setSelectedWears }: WearFilterProps) {

  const handleWearToggle = (wearId: string) => {
    if (wearId === 'select-all') {
      if (selectedWears.length === wearOptions.length - 1) {
        setSelectedWears([]);
      } else {
        setSelectedWears(wearOptions.filter(wear => wear.id !== 'select-all').map(wear => wear.id));
      }
    } else {
      setSelectedWears(prev => 
        prev.includes(wearId) 
          ? prev.filter(id => id !== wearId)
          : [...prev, wearId]
      );
    }
  };

  const isSelected = (wearId: string) => selectedWears.includes(wearId);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-white font-bold">Wear</h3>
        <Image src="/icons/wrench-icon.svg" alt="Wear" width={22} height={22} />
      </div>
      
      {/* Wear Buttons Grid */}
      <div className="grid grid-cols-2 gap-2">
        {wearOptions.map((wear) => (
          <button
            key={wear.id}
            onClick={() => handleWearToggle(wear.id)}
            className={`
              px-3 py-2 rounded-md text-md font-regular transition-all duration-200
              border border-[#464646] bg-[#1E1E1E] hover:bg-[#2A2A2A]
              ${isSelected(wear.id) 
                ? 'border-opacity-100' 
                : 'border-opacity-50 text-gray-400'
              }
            `}
            style={{
              color: isSelected(wear.id) ? wear.color : undefined,
              borderColor: isSelected(wear.id) ? wear.color : undefined,
            }}
          >
            {wear.label}
          </button>
        ))}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../../Button';

interface SpecialOption {
  id: string;
  label: string;
  color: string;
}

const specialOptions: SpecialOption[] = [
  { id: 'startrak', label: 'StarTrak', color: '#8b5cf6' }, // Purple
  { id: 'souvenir', label: 'Souvenir', color: '#f59e0b' }, // Amber
];

interface SpecialFilterProps {
  selectedSpecials: string[];
  setSelectedSpecials: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SpecialFilter({ selectedSpecials, setSelectedSpecials }: SpecialFilterProps) {

  const handleSpecialToggle = (specialId: string) => {
    setSelectedSpecials(prev => 
      prev.includes(specialId) 
        ? prev.filter(id => id !== specialId)
        : [...prev, specialId]
    );
  };

  const isSelected = (specialId: string) => selectedSpecials.includes(specialId);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-white font-bold">Special</h3>
        <Sparkles className="w-5 h-5 text-white" />
      </div>
      
      {/* Special Buttons */}
      <div className="flex gap-2">
        {specialOptions.map((special) => (
          <Button
            key={special.id}
            variant="wear-filter"
            selected={isSelected(special.id)}
            customColor={special.color}
            onClick={() => handleSpecialToggle(special.id)}
            className="flex-1"
          >
            {special.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

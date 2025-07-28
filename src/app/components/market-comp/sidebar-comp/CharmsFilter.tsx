'use client';

import React from 'react';
import { ChevronDown, Medal } from 'lucide-react';

export default function CharmsFilter() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Charms</h3>
          <Medal className="w-5 h-5 text-white" />
        </div>
        <ChevronDown className="w-4 h-4 text-white cursor-pointer" />
      </div>
      
      {/* Content will be added later when implementing dropdown */}
      <div className="hidden">
        {/* Charm options will go here */}
      </div>
    </div>
  );
} 
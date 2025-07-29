'use client';

import React from 'react';
import { ChevronDown, Asterisk } from 'lucide-react';

export default function PatternsFilter() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h3 className="text-white font-bold">Patterns</h3>
          <Asterisk className="w-7 h-7 text-white" />
        </div>
        <ChevronDown className="w-4 h-4 text-white cursor-pointer" />
      </div>
      
      {/* Content will be added later when implementing dropdown */}
      <div className="hidden">
        {/* Pattern options will go here */}
      </div>
    </div>
  );
} 
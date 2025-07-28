'use client';

import React from 'react';
import { ChevronDown, Layers } from 'lucide-react';

export default function CollectionFilter() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Collection</h3>
          <Layers className="w-5 h-5 text-white" />
        </div>
        <ChevronDown className="w-4 h-4 text-white cursor-pointer" />
      </div>
      
      {/* Content will be added later when implementing dropdown */}
      <div className="hidden">
        {/* Collection options will go here */}
      </div>
    </div>
  );
} 
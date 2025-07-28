'use client';

import React from 'react';
import { ChevronDown, Filter, Plus } from 'lucide-react';

export default function ListingFilter() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Listing</h3>
          <div className="relative">
            <Filter className="w-5 h-5 text-white" />
            <Plus className="w-3 h-3 text-white absolute -bottom-1 -right-1" />
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-white cursor-pointer" />
      </div>
      
      {/* Content will be added later when implementing dropdown */}
      <div className="hidden">
        {/* Listing options will go here */}
      </div>
    </div>
  );
} 
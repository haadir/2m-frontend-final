'use client';

import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

export default function StickersFilter() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-bold">Stickers</h3>
          <Star className="w-5 h-5 text-white" />
        </div>
        <ChevronDown className="w-4 h-4 text-white cursor-pointer" />
      </div>
      
      {/* Content will be added later when implementing dropdown */}
      <div className="hidden">
        {/* Sticker options will go here */}
      </div>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { Search, Info, Wrench, Star, ChevronDown, Trash2 } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    patterns: false,
    stickers: false,
    charms: false,
    rarity: false,
    collection: false,
    listing: false
  });

  const toggleSection = (section: string) => {
    setIsOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-[400px] h-screen bg-[#121212] text-white p-4 flex flex-col gap-6 overflow-y-auto">
      
      {/* Search Bar */}
      <div className="space-y-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search 2Marketplace"
            className="w-full pl-10 pr-4 py-3 bg-[#1E1E1E] text-white rounded-lg border border-[#464646] focus:outline-none focus:border-[#3b82f6]"
          />
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-medium">Price</h3>
          <Info className="text-gray-400" size={16} />
        </div>
        
        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-xs text-gray-400 mb-1">Min.</label>
            <input
              type="text"
              defaultValue="$0.00"
              className="w-full px-3 py-2 bg-[#2C2C2C] text-white rounded-lg border border-[#464646] text-sm focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-gray-400 mb-1">Max.</label>
            <input
              type="text"
              defaultValue="$10000.00"
              className="w-full px-3 py-2 bg-[#2C2C2C] text-white rounded-lg border border-[#464646] text-sm focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
        </div>
        
        {/* Slider placeholder */}
        <div className="w-full h-2 bg-[#2C2C2C] rounded-full relative">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#3b82f6] rounded-full"></div>
        </div>
      </div>

      {/* Wear Filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-medium">Wear</h3>
          <Wrench className="text-gray-400" size={16} />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred', 'Select All'].map((wear) => (
            <button
              key={wear}
              className="px-3 py-2 bg-[#2C2C2C] text-white text-sm rounded-full hover:bg-[#3b82f6] transition-colors"
            >
              {wear}
            </button>
          ))}
        </div>
      </div>

      {/* Special Filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-medium">Special</h3>
          <Star className="text-gray-400" size={16} />
        </div>
        
        <div className="flex gap-2">
          {['StarTrak', 'Souvenir'].map((special) => (
            <button
              key={special}
              className="flex-1 px-3 py-2 bg-[#2C2C2C] text-white text-sm rounded-full hover:bg-[#3b82f6] transition-colors"
            >
              {special}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-2">
        {[
          { key: 'patterns', title: 'Patterns', icon: '✶' },
          { key: 'stickers', title: 'Stickers', icon: '✩' },
          { key: 'charms', title: 'Charms', icon: '⑱' },
          { key: 'rarity', title: 'Rarity', icon: '💎' },
          { key: 'collection', title: 'Collection', icon: '☰' },
          { key: 'listing', title: 'Listing', icon: '☷' }
        ].map((section) => (
          <div key={section.key} className="border border-[#464646] rounded-lg">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full px-4 py-3 flex items-center justify-between text-white hover:bg-[#2C2C2C] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>{section.icon}</span>
                <span className="font-medium">{section.title}</span>
              </div>
              <ChevronDown 
                className={`transform transition-transform ${isOpen[section.key] ? 'rotate-180' : ''}`} 
                size={16} 
              />
            </button>
            {isOpen[section.key] && (
              <div className="px-4 pb-3 text-gray-400 text-sm">
                Content for {section.title}...
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reset Filters Button */}
      <div className="mt-auto">
        <button className="w-full px-4 py-3 bg-red-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
          <Trash2 size={16} />
          Reset Filters
        </button>
      </div>
    </aside>
  );
}

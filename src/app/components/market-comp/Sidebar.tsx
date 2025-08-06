'use client';

import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import PriceFilter from './sidebar-comp/PriceFilter';
import WearFilter from './sidebar-comp/WearFilter';
import SpecialFilter from './sidebar-comp/SpecialFilter';
import PatternsFilter from './sidebar-comp/PatternsFilter';
import StickersFilter from './sidebar-comp/StickersFilter';
import CharmsFilter from './sidebar-comp/CharmsFilter';
import RarityFilter from './sidebar-comp/RarityFilter';
import CollectionFilter from './sidebar-comp/CollectionFilter';
// import ListingFilter from './sidebar-comp/ListingFilter';

export default function Sidebar() {
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 10000 });
  const [selectedWears, setSelectedWears] = React.useState<string[]>([]);
  const [selectedSpecials, setSelectedSpecials] = React.useState<string[]>([]);

  const handleResetFilters = () => {
    setPriceRange({ min: 0, max: 10000 });
    setSelectedWears([]);
    setSelectedSpecials([]);
  };

  return (
    <aside
      className="w-[400px] bg-[#181818] border border-[#464646] rounded-md"
      style={{ height: 'calc(100vh - 220px)', minHeight: '790px' }}
    >
      <div className="h-full overflow-y-auto space-y-6 px-4 pt-4 pb-2">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search 2Marketplace"
            className="w-full pl-10 pr-4 py-3 bg-[#1E1E1E] border border-[#464646] rounded-md text-white placeholder:text-gray-400 placeholder:font-thin focus:outline-none focus:border-gray-300 transition-colors"
            style={{ caretColor: 'transparent' }}
          />
        </div>

        {/* Price Filter */}
        <PriceFilter 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        
        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4"></div>
        
        {/* Wear Filter */}
        <WearFilter 
          selectedWears={selectedWears}
          setSelectedWears={setSelectedWears}
        />

        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4"></div>
        
        {/* Special Filter */}
        <SpecialFilter 
          selectedSpecials={selectedSpecials}
          setSelectedSpecials={setSelectedSpecials}
        />

        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4"></div>
        
        {/* Patterns Filter */}
        <PatternsFilter />
        
        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4"></div>
        
        {/* Stickers Filter */}
        <StickersFilter />
        
        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4 px-4"></div>
        
        {/* Charms Filter */}
        <CharmsFilter />
        
        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4"></div>
        
        {/* Rarity Filter */}
        <RarityFilter />
        
        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4"></div>
        
        {/* Collection Filter */}
        <CollectionFilter />
        
        {/* End of filters */}
        
        {/* Divider Line */}
        <div className="border-b border-[#464646] my-4 -mx-4"></div>
        
        {/* Reset Filters Button */}
        <div className="flex justify-center">
          <button 
            onClick={handleResetFilters}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-[#292126] border border-[#494247] text-[#EB4B4C] rounded-md transition-all duration-200 hover:bg-[#332a2f] w-full max-w-[200px]"
          >
            <Image src="/icons/reset.svg" alt="Reset" width={22} height={22} />
            <span className="font-medium text-md">Reset Filters</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
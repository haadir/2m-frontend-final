'use client';

import { Search } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="w-full bg-[#181818] border border-[#464646] rounded-md px-4 py-3 flex items-center justify-between">
      {/* Left - stats */}
      <div className="flex items-center gap-10 text-base" style={{ fontFamily: 'var(--font-gt-america-standard)', fontWeight:700 }}>
        <div className="flex items-center gap-2">
          <span>Inventory Cost:</span>
          <span className="text-green-400" style={{ fontFamily: 'var(--font-gt-america-mono)', fontWeight: 100 }}><span className="inline-block transform scale-75 translate-y-0.5" >$</span>10,561.34</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Inventory Count:</span>
          <span className="text-white font-normal">31 Items</span>
        </div>
      </div>
      {/* Right - search */}
      <div className="relative w-full max-w-[260px]">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Search Inventory"
          className="w-full pl-10 pr-4 py-2 bg-[#1E1E1E] border border-[#464646] rounded-md text-white placeholder:text-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
} 
'use client';

import { ChevronDown } from 'lucide-react';

const categories = [
  'Rifles',
  'Pistols', 
  'SMGs',
  'Heavy',
  'Knives',
  'Gloves',
  'Agents',
  'Containers',
  'Stickers',
  'Keychains',
  'Patches',
  'Collectables'
];

export default function CategoryBar() {
  return (
    <nav className="bg-[#181818] border border-[#464646] h-[50px] rounded-md" style={{backgroundColor: '#181818', border: '1px solid #464646'}}>
      <div className="h-full overflow-x-auto">
        <ul className="flex items-center h-full px-6 min-w-max justify-between lg:justify-between md:gap-4 sm:gap-4">
          {categories.map((category) => (
            <li key={category}>
              <button
                className="h-full px-4 text-[#9F9F9F] text-sm transition-colors duration-200 ease-in-out hover:text-[#3b82f6] focus:outline-none flex items-center gap-1"
                style={{fontWeight: '100'}}
              >
                {category}
                <ChevronDown size={16} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
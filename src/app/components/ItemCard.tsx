import React, { useMemo } from 'react';
import Image from 'next/image';
import { Star, Eye, Search, Camera, Info, Circle } from 'lucide-react';

// TODO: Move this interface to a separate types file when you add API calls
interface CSGOItem {
  id: string;
  name: string;
  condition: string;
  price: number;
  rank: number;
  float: number;
  floatRank: number;
  views: number;
  status: 'online' | 'offline';
  imageUrl: string;
  pattern?: string;
  rarity?: string;
  // TODO: Add more fields as needed for your API
  // - patternId?: number;
  // - stickers?: Sticker[];
  // - wear?: string;
  // - collection?: string;
  // - tradeUp?: boolean;
}

// TODO: Replace with real API data
const dummyItem: CSGOItem = {
  id: '1',
  name: 'AK-47 | Case Hardened',
  condition: 'Factory New',
  price: 11000.00,
  rank: 1,
  float: 0.063,
  floatRank: 26,
  views: 102,
  status: 'offline',
  imageUrl: '/images/AK-CaseHardened.svg', // TODO: Replace with actual image path
  pattern: 'Case Hardened',
  rarity: 'Covert'
};

export default function ItemCard() {
  // TODO: Replace with props when you add API calls
  // interface ItemCardProps {
  //   item: CSGOItem;
  //   onBuy?: (itemId: string) => void;
  //   onInspect?: (itemId: string) => void;
  // }
  
  const item = dummyItem; // TODO: Replace with props.item

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  const getFloatColor = (float: number) => {
    if (float < 0.07) return '#4ade80'; // Green for very low wear
    if (float < 0.15) return '#22c55e'; // Light green
    if (float < 0.38) return '#eab308'; // Yellow
    if (float < 0.45) return '#f97316'; // Orange
    return '#ef4444'; // Red for high wear
  };

  const getFloatPercentage = (float: number) => {
    // Convert float to percentage (0.063 = 6.3%)
    return (float * 100).toFixed(1);
  };

  return (
    <div className="bg-[#181818] border border-[#464646] rounded-md w-full max-w-[308px] flex flex-col overflow-hidden">
      {/* Top Section - Item Details */}
      <div className="p-3 bg-[#1E1E1E] rounded-t-md">
        {/* Item Name and Star */}
        <div className="mb-1">
          <h3 className="text-white font-bold text-sm">★ {item.name}</h3>
        </div>
        
        {/* Condition */}
        <p className="text-gray-400 text-xs">{item.condition}</p>
      </div>
      
      {/* Middle Section - Image with Animated Red Gradient */}
      {(() => {
        const delay = useMemo(() => Math.random() * 8, []);
        return (
          <div
            className="relative flex-1 animate-subtle-gradient"
            style={{
              background: 'linear-gradient(90deg, rgba(235,75,75,0.7) 0%, #1A1B20 100%)',
              animationDelay: `${delay}s`,
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src={item.imageUrl}
                alt={item.name}
                width={260}
                height={260}
                className="object-contain"
              />
              
              {/* Interaction Icons - Bottom Left */}
              <div className="absolute bottom-2 left-2 flex gap-2">
                <Search className="w-5 h-5 text-[#9F9F9F] cursor-pointer" />
                <Camera className="w-5 h-5 text-[#9F9F9F] cursor-pointer" />
              </div>
              
              {/* View Count - Bottom Right */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1">
                <Eye className="w-4 h-4 text-[#9F9F9F]" />
                <span className="text-[#9F9F9F] text-sm">{item.views}</span>
              </div>
            </div>
          </div>
        );
      })()}
      {/* Bottom Section - Pricing & Status */}
      <div className="p-3 bg-[#1E1E1E] rounded-b-md border-t border-[#EB4B4B]">
        {/* Price and Rank Row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-bold text-lg">
            {formatPrice(item.price)}
          </span>
          <div className="bg-[#2A2A2A] rounded-md px-2 py-1">
            <span className="text-white text-xs">#{item.rank}</span>
          </div>
        </div>
        
        {/* Float Value and Progress Bar */}
        <div className="mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white text-sm">{item.float}</span>
            <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
              <Info className="w-2 h-2 text-white" />
            </div>
            <span className="text-gray-400 text-xs">({item.floatRank})</span>
          </div>
          <div className="w-full bg-[#2A2A2A] rounded-full h-1 mb-1">
            <div 
              className="h-1 rounded-full transition-all duration-200"
              style={{ 
                width: `${getFloatPercentage(item.float)}%`,
                backgroundColor: getFloatColor(item.float)
              }}
            />
          </div>
        </div>
        
        {/* Status and Action Button */}
        <div className="flex items-center gap-2">
          <Circle className={`w-2 h-2 ${item.status === 'online' ? 'text-green-500' : 'text-gray-400'}`} />
          <span className="text-white text-xs capitalize">{item.status}</span>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors w-8 h-8 rounded-md flex items-center justify-center ml-auto -mt-4">
            <Image src="/icons/cart-icon.svg" alt="cart" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

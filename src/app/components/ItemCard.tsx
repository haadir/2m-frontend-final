"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Star, Eye, Search, Camera, Info, Circle } from 'lucide-react';

export interface CSGOItem {
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

interface ItemCardProps {
  item: CSGOItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  const getFloatColor = (float?: number) => {
    if (float === undefined) return '#71717a';
    if (float < 0.07) return '#4ade80'; // Green for very low wear
    if (float < 0.15) return '#22c55e'; // Light green
    if (float < 0.38) return '#eab308'; // Yellow
    if (float < 0.45) return '#f97316'; // Orange
    return '#ef4444'; // Red for high wear
  };

  const getFloatPercentage = (float?: number) => {
    // Convert float to percentage (0.063 = 6.3%)
    return float !== undefined ? (float * 100).toFixed(1) : '0';
  };

  const getRaritySolidColor = (rarity: string): string => {
    const r = rarity.toLowerCase();
    if (["covert", "extraordinary", "master"].some(g => r.includes(g))) return "#ef4444"; // red
    if (r.includes("classified")) return "#ec4899"; // pink
    if (r.includes("restricted")) return "#a21caf"; // purple
    if (r.includes("mil-spec")) return "#2563eb"; // blue
    if (r.includes("industrial")) return "#38bdf8"; // sky
    if (r.includes("base grade")) return "#d4d4d8"; // grey
    return "#71717a";
  };

  // Interactive background position
  const [bgPos, setBgPos] = useState<string>('0% 0%');

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0..1
    const relY = (e.clientY - rect.top) / rect.height;
    const offsetX = (relX - 0.5) * 20; // range -10..10
    const offsetY = (relY - 0.5) * 20;
    setBgPos(`${50 + offsetX}% ${50 + offsetY}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setBgPos('0% 0%');
  }, []);

  // Stable animation delay to avoid hydration mismatch
  const delayRef = useRef<number>(0);
  useEffect(() => {
    delayRef.current = Math.random() * 8;
  }, []);

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
        return (
          <div
            className="relative flex-1 animate-subtle-gradient"
            style={{
              background: `linear-gradient(90deg, ${getRaritySolidColor(item.rarity || '')}b3 0%, #1A1B20 100%)`,
              animationDelay: `${delayRef.current}s`,
              backgroundPosition: bgPos,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src={item.imageUrl || '/placeholder-item.png'}
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

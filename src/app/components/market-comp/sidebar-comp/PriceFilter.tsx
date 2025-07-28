'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface PriceFilterProps {
  priceRange: { min: number; max: number };
  setPriceRange: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
}

export default function PriceFilter({ priceRange, setPriceRange }: PriceFilterProps) {
  const { min: minPrice, max: maxPrice } = priceRange;
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const minValue = 0;
  const maxValue = 10000;

  const getPercentage = (value: number) => {
    return ((value - minValue) / (maxValue - minValue)) * 100;
  };

  const getValueFromPosition = (clientX: number) => {
    if (!sliderRef.current) return 0;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    return Math.round((percentage / 100) * (maxValue - minValue) + minValue);
  };

  const handleMouseDown = (type: 'min' | 'max') => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(type);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const newValue = getValueFromPosition(e.clientX);
    
    if (isDragging === 'min') {
      setPriceRange(prev => ({ ...prev, min: Math.min(newValue, maxPrice - 1) }));
    } else {
      setPriceRange(prev => ({ ...prev, max: Math.max(newValue, minPrice + 1) }));
    }
  }, [isDragging, minPrice, maxPrice]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  // Add event listeners for mouse move and up
  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="space-y-4 ml-1">
      <div className="flex items-center gap-2">
        <h3 className="text-white font-bold">Price</h3>
        <Image src="/icons/price-icon.svg" alt="Price" width={22} height={22} />
      </div>
      
      {/* Dual Range Slider */}
      <div>
        <div className="relative mb-4 mx-2">
          {/* Slider Track */}
          <div 
            ref={sliderRef}
            className="relative h-1 bg-[#6A6A6A] rounded-full cursor-pointer"
          >
            {/* Active Range */}
            <div 
              className="absolute h-1 bg-[#6A6A6A] rounded-full"
              style={{
                left: `${getPercentage(minPrice)}%`,
                width: `${getPercentage(maxPrice) - getPercentage(minPrice)}%`
              }}
            />
            
            {/* Min Handle */}
            <div
              className="absolute w-3 h-3 bg-[#181818] border border-[#6A6A6A] rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2 hover:scale-110 transition-transform"
              style={{ left: `${getPercentage(minPrice)}%` }}
              onMouseDown={handleMouseDown('min')}
            />
            
            {/* Max Handle */}
            <div
              className="absolute w-3 h-3 bg-[#181818] border border-[#6A6A6A] rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2 hover:scale-110 transition-transform"
              style={{ left: `${getPercentage(maxPrice)}%` }}
              onMouseDown={handleMouseDown('max')}
            />
          </div>
        </div>
        
        {/* Price Input Fields */}
        <div className="flex justify-between">
          <div className="w-20">
            <label className="block text-sm text-gray-400 mb-1">Min.</label>
            <input
              type="text"
              inputMode="numeric"
              value={minPrice}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                if (value <= maxPrice) {
                  setPriceRange(prev => ({ ...prev, min: Math.max(minValue, Math.min(value, maxValue)) }));
                }
              }}
              className="w-full px-2 py-1.5 bg-[#1E1E1E] border border-[#464646] rounded text-white text-md focus:outline-none focus:border-gray-300"
              style={{ caretColor: 'transparent', fontFamily: 'var(--font-gt-america-mono)' }}
            />
          </div>
          <div className="w-20">
            <label className="block text-sm text-gray-400 mb-1">Max.</label>
            <input
              type="text"
              inputMode="numeric"
              value={maxPrice}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                if (value >= minPrice) {
                  setPriceRange(prev => ({ ...prev, max: Math.min(maxValue, Math.max(value, minValue)) }));
                }
              }}
              className="w-full px-2 py-1.5 bg-[#1E1E1E] border border-[#464646] rounded text-white text-md focus:outline-none focus:border-gray-300"
              style={{ caretColor: 'transparent', fontFamily: 'var(--font-gt-america-mono)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
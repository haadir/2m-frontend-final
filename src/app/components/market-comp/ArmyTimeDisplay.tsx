'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CityTime {
  city: string;
  timezone: string;
}

const cities: CityTime[] = [
  { city: 'NYC', timezone: 'America/New_York' },
  { city: 'Moscow', timezone: 'Europe/Moscow' },
  { city: 'Stockholm', timezone: 'Europe/Stockholm' },
  { city: 'Seoul', timezone: 'Asia/Seoul' },
];

export default function ArmyTimeDisplay() {
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      
      cities.forEach(({ city, timezone }) => {
        const now = new Date();
        const cityTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
        
        // Format as 24-hour army time (HH:MM)
        const hours = cityTime.getHours().toString().padStart(2, '0');
        const minutes = cityTime.getMinutes().toString().padStart(2, '0');
        newTimes[city] = `${hours}:${minutes}`;
      });
      
      setTimes(newTimes);
    };

    // Update immediately
    updateTimes();
    
    // Update every minute
    const interval = setInterval(updateTimes, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-20">
      {/* Left side - NYC and Moscow */}
      <div className="flex items-center gap-12">
        {cities.slice(0, 2).map(({ city }) => (
          <div key={city} className="flex flex-col items-center gap-1">
            <div className="text-xs text-gray-400 font-medium">{city}</div>
            <div 
              className="px-3 py-1 rounded-md text-md font-regular border border-[#464646] bg-[#1E1E1E]"
              style={{ fontFamily: 'var(--font-gt-america-mono)' }}
            >
              <span className="text-sm text-white font-regular">
                {times[city] || '--:--'}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Center - AK image */}
      <div className="flex items-center justify-center mt-3">
        <Image src="/images/AK.svg" alt="AK" width={90} height={90} />
      </div>
      
      {/* Right side - Stockholm and Seoul */}
      <div className="flex items-center gap-20">
        {cities.slice(2, 4).map(({ city }) => (
          <div key={city} className="flex flex-col items-center gap-1">
            <div className="text-xs text-gray-400 font-medium">{city}</div>
            <div 
              className="px-3 py-1 rounded-md text-md font-regular border border-[#464646] bg-[#1E1E1E]"
              style={{ fontFamily: 'var(--font-gt-america-mono)' }}
            >
              <span className="text-sm text-white font-regular">
                {times[city] || '--:--'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
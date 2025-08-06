'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/lib/authContext';
import Button from '@/app/components/Button';

const fallbackAvatar = 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png';

export default function ProfileOverview() {
  const { user } = useAuth();

  const avatar = user?.photos?.[0]?.value || (user as any)?._json?.avatarfull || fallbackAvatar;
  const username = user?.displayName || (user as any)?._json?.personaname || 'Username';

  // TODO: Replace with real earnings once backend available
  const earnings = {
    sales: 0,
    purchases: 0,
    net: 0,
  };

  return (
    <section className="px-6 w-full">
      <div className="bg-[#181818] border border-[#464646] rounded-md p-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left – profile info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
          {/* Avatar */}
          <Image src={avatar} alt="Steam avatar" width={80} height={80} className="w-20 h-20 rounded-md object-cover" />

          {/* Name & badges */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white leading-none" style={{ fontFamily: 'var(--font-gt-america-mono)' }}>{username}</h2>
            <div className="flex items-center gap-2">
              <span className="bg-[#2E2E2E] text-gray-300 text-xs px-3 py-1 rounded-full">Verified</span>
              <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full">Seller</span>
            </div>
          </div>
        </div>

        {/* Right – earnings */}
        <div className="w-full md:w-72 bg-[#1E1E1E] border border-[#2A2A2A] rounded-md p-4 text-sm text-gray-300">
          <h3 className="text-white font-semibold mb-3">Earnings</h3>
          <div className="flex justify-between py-1 border-b border-[#2A2A2A]">
            <span>Sales</span>
            <span className="text-white font-medium" style={{ fontFamily: 'var(--font-gt-america-mono)' }}>${earnings.sales.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-[#2A2A2A]">
            <span>Purchases</span>
            <span className="text-white font-medium" style={{ fontFamily: 'var(--font-gt-america-mono)' }}>${earnings.purchases.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Net</span>
            <span className="text-white font-medium" style={{ fontFamily: 'var(--font-gt-america-mono)' }}>${earnings.net.toFixed(2)}</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="sm:ml-auto">
          <Button variant="primary" className="gap-2 !h-10">
            Complete KYC
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
} 
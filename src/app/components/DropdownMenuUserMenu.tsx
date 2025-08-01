'use client';

import * as React from 'react';
import { User, Settings, Bell, LogOut, ShoppingCart, Package } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Button from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/app/components/dropdown-menu';
import { useAuth } from '@/lib/authContext';

const listItems = (
  logout: () => void,
  goInventory: () => void,
  goCart: () => void,
): { icon: React.ElementType; property: string; onSelect?: () => void }[] => [
  {
    icon: User,
    property: 'Profile',
  },
  {
    icon: Settings,
    property: 'Settings',
  },
  {
    icon: Package,
    property: 'Inventory',
    onSelect: goInventory,
  },
  {
    icon: ShoppingCart,
    property: 'Cart',
    onSelect: goCart,
  },
  {
    icon: Bell,
    property: 'Notifications',
  },
  {
    icon: LogOut,
    property: 'Sign Out',
    onSelect: logout,
  },
];

const DropdownMenuUserMenu = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  if (!isAuthenticated) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' className='h-10 w-10 overflow-hidden rounded-full p-0'>
          {(() => {
            const steamAvatar = (user as any)?._json?.avatarfull as string | undefined;
            const photoAvatar = user?.photos && user.photos[0] ? user.photos[0].value : undefined;
            const src = steamAvatar || photoAvatar || 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png';
            return (
              <Image
                src={src}
                alt="User avatar"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
              />
            );
          })()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          {listItems(logout, () => router.push('/inventory'), () => router.push('/cart')).map((item, index) => (
            <DropdownMenuItem key={index} onSelect={item.onSelect} className='gap-3'>
              <item.icon size={16} />
              <span className='text-popover-foreground'>{item.property}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuUserMenu; 
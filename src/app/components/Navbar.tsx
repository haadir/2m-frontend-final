"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import DropdownMenuUserMenu from "./DropdownMenuUserMenu";
import ArmyTimeDisplay from "./market-comp/ArmyTimeDisplay";

import { useAuth } from "../../lib/authContext";

interface NavbarProps {
  currentPage?: 'market' | 'agent';
}

export default function Navbar({ currentPage = 'market' }: NavbarProps) {
  const { isAuthenticated, isLoading } = useAuth();

  return <section className="border-b border-[#464646] relative">
    <div className="w-full px-6 py-1">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and navigation */}
        <div className="flex items-center gap-8">
          <div className="relative h-16 w-16">
            <Image src="/images/2M-logo.svg" alt="2M Logo" fill className="object-contain mt-1"/>
          </div>
            <div className="flex flex-col items-center">
              <Link
                href="/market"
                className={`text-xl transition-colors ${
                  currentPage==='market' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Market
              </Link>
              {currentPage==='market' && (
                <div className="h-0.5 w-full bg-white mt-1 rounded-full" />
              )}
            </div>
            <div className="relative group flex flex-col items-center">
              <Link
                href="/agent"
                className={`text-xl transition-colors hover-gradient ${currentPage==='agent'?'':'opacity-70'}`}
              >
                Agent
              </Link>
              {currentPage==='agent' && (
                <div className="h-0.5 w-full gradient-underline mt-1 rounded-full" />
              )}
              <span className="sparkle">✨</span>
            </div>
        </div>
        
        {/* Center - Army Time Display (hidden on md and below) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
          <ArmyTimeDisplay />
        </div>
                
        {/* Right side - Price and icons */}
        <div className="flex items-center gap-8">
          {/* The cart icon, notification, and funds appear when user logged in */}
          {/* <div className="font-medium">$0.00</div>
          <div>
            <Image src="/icons/cart-icon.svg" alt="cart" width={35} height={35} />
          </div>
          <div>
            <Image src="/icons/notification-icon.svg" alt="notification" width={35} height={35} />
          </div> */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {/* Funds, cart, bell hidden on mobile */}
              <div className="hidden sm:flex items-center gap-4">
                <div className="font-medium">$0.00</div>
                <Image src="/icons/cart-icon.svg" alt="cart" width={35} height={35} />
                <Image src="/icons/notification-icon.svg" alt="notification" width={35} height={35} />
              </div>
              <DropdownMenuUserMenu />
            </div>
          ) : (
            <a href="http://localhost:3001/auth/steam" className="cursor-pointer">
              <Button variant="primary" icon="/icons/steam-logo.svg" iconAlt="Steam">Sign In</Button>
            </a>
          )}
          {/* <div>
            <Image src="/icons/account-icon.svg" alt="account" width={35} height={35} />
          </div> */}
        </div>
      </div>
    </div>
  </section>
}
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import ArmyTimeDisplay from "./ArmyTimeDisplay";

interface NavbarProps {
  currentPage?: 'market' | 'agent';
}

export default function Navbar({ currentPage = 'market' }: NavbarProps) {
  return <section className="border-b border-[#464646] relative">
    <div className="w-full px-6 py-1">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and navigation */}
        <div className="flex items-center gap-8">
          <div className="relative h-16 w-16">
            <Image src="/images/2M-logo.svg" alt="2M Logo" fill className="object-contain mt-1"/>
          </div>
                             <Link
                     href="/market"
                     className={`text-xl transition-colors ${
                       currentPage === 'market'
                         ? 'text-white font-bold'
                         : 'text-gray-400 hover:text-white font-normal'
                     }`}
                   >
                     Market
                   </Link>
                   <Link
                     href="/agent"
                     className={`text-xl transition-colors ${
                       currentPage === 'agent'
                         ? 'text-white font-bold'
                         : 'text-gray-400 hover:text-white font-normal'
                     }`}
                   >
                     Agent
                   </Link>
        </div>
        
        {/* Center - Army Time Display with AK */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
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
          <Button variant="primary" icon="/icons/steam-logo.svg" iconAlt="Steam">Sign In</Button>
          {/* <div>
            <Image src="/icons/account-icon.svg" alt="account" width={35} height={35} />
          </div> */}
        </div>
      </div>
    </div>
  </section>
}
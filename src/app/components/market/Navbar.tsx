import Image from "next/image";

const navLinks = [
    { label: "Market", href: "#" },
    { label: "Agent", href: "#" },
]

export default function Navbar() {
  return <section className="border-b border-[#464646] relative">
    <div className="w-full px-6">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and navigation */}
        <div className="flex items-center gap-8">
          <div className="relative h-16 w-16 mt-1">
            <Image src="/images/2M-logo.svg" alt="2M Logo" fill className="object-contain"/>
          </div>
          <div className="text-xl text-white font-bold">Market</div>
          <div className="text-xl text-gray-400">Agent</div>
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
          <div>
            <Image src="/icons/account-icon.svg" alt="account" width={35} height={35} />
          </div>
        </div>
      </div>
      
      {/* Center - AK image (absolutely positioned to center of navbar) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-3">
        <Image src="/images/AK.svg" alt="AK" width={80} height={80} />
      </div>
    </div>
  </section>
}
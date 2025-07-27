import Image from "next/image";

const navLinks = [
    { label: "Market", href: "#" },
    { label: "Agent", href: "#" },
]

export default function Navbar() {
  return <section className="border-b border-[#464646]">
    <div className="w-full px-6">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and navigation */}
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14">
            <Image src="/images/2M-logo.svg" alt="2M Logo" fill className="object-contain"/>
          </div>
          <div>Market</div>
          <div>Agent</div>
        </div>
        
        {/* Center - AK image */}
        <div className="flex items-center justify-center flex-1">
          <Image src="/images/AK.svg" alt="AK" width={80} height={80} />
        </div>
        
        {/* Right side - Price and icons */}
        <div className="flex items-center gap-4">
          <div>$1.00</div>
          <div>
            <Image src="/icons/cart-icon.svg" alt="cart" width={30} height={30} />
          </div>
          <div>
            <Image src="/icons/notification-icon.svg" alt="notification" width={30} height={30} />
          </div>
          <div>
            <Image src="/icons/account-icon.svg" alt="account" width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  </section>
}
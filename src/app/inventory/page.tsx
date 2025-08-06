'use client';

import Navbar from "../components/Navbar";
import TopBar from "../components/inventory-comp/TopBar";
import ItemQueue from "../components/inventory-comp/ItemQueue";
import InventoryGrid from "../components/inventory-comp/InventoryGrid";
import useSteamInventory from "@/lib/useSteamInventory";

export default function InventoryPage() {
  const { items, loading } = useSteamInventory();

  return (
    <div className="h-screen flex flex-col">
      <Navbar currentPage="inventory" />
      <div className="px-8 py-4 space-y-4 flex-1 overflow-hidden">
        <div className="flex gap-4 h-full overflow-hidden">
          {/* Left column: TopBar + grid */}
          <div className="flex flex-col flex-1 gap-4 overflow-hidden">
            <TopBar />
            <div className="flex-1 overflow-y-auto pr-2">
              <InventoryGrid items={items} loading={loading} cardWidth={210} />
            </div>
          </div>
          {/* Right column: Item queue aligns with TopBar */}
          <ItemQueue />
        </div>
      </div>
    </div>
  );
}

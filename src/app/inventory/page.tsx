import Navbar from "../components/Navbar";
import TopBar from "../components/inventory-comp/TopBar";
import ItemQueue from "../components/inventory-comp/ItemQueue";
import InventoryGrid from "../components/inventory-comp/InventoryGrid";

export default function InventoryPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="px-8 py-4 space-y-4 flex-1 overflow-hidden">
        <TopBar />
        <div className="flex gap-4 h-full overflow-hidden">
          <div className="flex-1 overflow-y-auto pr-2">
            <InventoryGrid />
          </div>
          <ItemQueue />
        </div>
      </div>
    </div>
  );
}

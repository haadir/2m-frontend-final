import Navbar from "../components/Navbar";
import CategoryBar from "../components/market-comp/CategoryBar";
import Sidebar from "../components/market-comp/Sidebar";
import ItemGrid from "../components/market-comp/ItemGrid";

export default function MarketPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="space-y-4">
        <Navbar currentPage="market" />
        <CategoryBar />
      </div>
      <div className="flex gap-4 px-4 flex-1 overflow-hidden mt-4">
        <div className="w-[400px] flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <ItemGrid />
        </div>
      </div>
    </div>
  );
}

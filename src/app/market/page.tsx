import Navbar from "../components/market-comp/Navbar";
import CategoryBar from "../components/market-comp/CategoryBar";
import Sidebar from "../components/market-comp/Sidebar";
import ItemGrid from "../components/market-comp/ItemGrid";

export default function MarketPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <Navbar currentPage="market" />
        <CategoryBar />
      </div>
      <div className="flex gap-4 px-4">
        <Sidebar />
        <div className="flex-1">
          <ItemGrid />
        </div>
      </div>
    </div>
  );
}

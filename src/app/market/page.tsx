import Navbar from "../components/market/Navbar";
import CategoryBar from "../components/market/CategoryBar";
import Sidebar from "../components/market/Sidebar";
import ItemGrid from "../components/ItemGrid";

export default function MarketPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <Navbar />
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

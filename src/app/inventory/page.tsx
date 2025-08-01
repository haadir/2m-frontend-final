import Navbar from "../components/Navbar";

export default function InventoryPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="p-8 flex-1 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white">Inventory</h1>
      </div>
    </div>
  );
}

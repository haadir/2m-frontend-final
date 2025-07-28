export default function ItemCard() {
  return (
    <div className="bg-[#181818] border border-[#464646] rounded-md p-4 w-[308px] h-[387px]">
      {/* Card content will go here */}
      <div className="text-white">
        <h3 className="text-lg font-medium mb-4">Item Name</h3>
        <p className="text-gray-400 text-sm">Item description</p>
      </div>
    </div>
  );
}

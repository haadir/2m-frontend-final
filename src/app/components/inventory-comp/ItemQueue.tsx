'use client';

export default function ItemQueue() {
  return (
    <aside className="w-[300px] bg-[#181818] border border-[#464646] rounded-md flex flex-col h-full">
      <div className="p-4 flex-1 text-center flex flex-col justify-center items-center gap-4">
        <h2 className="text-lg font-bold text-white">No Items Listed</h2>
        <p className="text-gray-400 text-sm max-w-[200px]">Select items on your inventory to sell</p>
      </div>
      <div className="p-4 border-t border-[#464646]">
        <button className="w-full py-3 bg-[#1E1E1E] border border-[#464646] rounded-md text-white hover:bg-[#2A2A2A] transition-colors">Sell Items</button>
      </div>
    </aside>
  );
} 
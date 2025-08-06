'use client';

import ItemCard, { CSGOItem } from '../ItemCard';

interface Props {
  items: CSGOItem[];
  loading?: boolean;
  cardWidth?: number;
}

export default function InventoryGrid({ items, loading=false, cardWidth=200 }: Props) {
  if(loading){
    return (
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {Array.from({length:8}).map((_,i)=>(
          <div key={i} className="h-[360px] w-full max-w-[260px] rounded-md border border-[#464646] skeleton" />
        ))}
      </div>
    );
  }
  return (
    <div className="grid gap-4 overflow-visible justify-start" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${cardWidth}px, ${cardWidth}px))` }}>
      {items.map((item,i) => (
        <ItemCard key={item.id} item={item} className="card-enter" style={{animationDelay:`${i*60}ms`, maxWidth:cardWidth }} />
      ))}
    </div>
  );
} 
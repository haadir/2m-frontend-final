'use client';

import ItemCard, { CSGOItem } from '../ItemCard';

interface Props {
  items: CSGOItem[];
}

export default function InventoryGrid({ items }: Props) {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
} 
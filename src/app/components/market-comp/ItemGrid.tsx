import ItemCard from '../ItemCard';

export default function ItemGrid() {
  // Mock data for demonstration - increased to 12 items for an extra row
  const items = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} />
      ))}
    </div>
  );
} 
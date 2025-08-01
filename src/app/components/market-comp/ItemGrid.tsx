import ItemCard from '../ItemCard';

export default function ItemGrid() {
  // Mock data for demonstration - increased to 12 items for an extra row
  const items = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      }}
    >
      {items.map((item) => (
        <ItemCard key={item.id} />
      ))}
    </div>
  );
} 
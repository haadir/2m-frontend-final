import Navbar from '../components/Navbar';
import CategoryBar from '../components/CategoryBar';

export default function MarketplaceHeader() {
  return (
    <header className="space-y-4">
      <Navbar />
      <CategoryBar />
    </header>
  );
}

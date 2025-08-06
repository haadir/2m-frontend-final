import ItemCard, { CSGOItem } from '../ItemCard';

export default function ItemGrid() {
  const dummyItems: CSGOItem[] = [
    { id:'1', name:'AK-47 | Case Hardened', condition:'Factory New', price:11000, rank:1, float:0.063, floatRank:26, views:102, status:'offline', imageUrl:'/images/AK-CaseHardened.svg', rarity:'Covert' },
    { id:'2', name:'M4A1-S | Printstream', condition:'Minimal Wear', price:500, rank:2, float:0.12, floatRank:100, views:50, status:'offline', imageUrl:'/images/AK.svg', rarity:'Classified' },
    { id:'3', name:'P250 | Valence', condition:'Field-Tested', price:5, rank:3, float:0.25, floatRank:500, views:20, status:'offline', imageUrl:'/images/AK.svg', rarity:'Restricted' },
    { id:'4', name:'Glock-18 | Candy Apple', condition:'Factory New', price:3, rank:4, float:0.01, floatRank:300, views:10, status:'offline', imageUrl:'/images/AK.svg', rarity:'Mil-Spec' },
    { id:'5', name:'AWP | Dragon Lore', condition:'Minimal Wear', price:15000, rank:5, float:0.11, floatRank:5, views:200, status:'offline', imageUrl:'/images/AK.svg', rarity:'Covert' },
    { id:'6', name:'Desert Eagle | Blaze', condition:'Factory New', price:800, rank:6, float:0.02, floatRank:20, views:80, status:'offline', imageUrl:'/images/AK.svg', rarity:'Classified' },
    { id:'7', name:'USP-S | Kill Confirmed', condition:'Field-Tested', price:60, rank:7, float:0.25, floatRank:150, views:60, status:'offline', imageUrl:'/images/AK.svg', rarity:'Classified' },
    { id:'8', name:'AK-47 | Redline', condition:'Minimal Wear', price:30, rank:8, float:0.10, floatRank:500, views:40, status:'offline', imageUrl:'/images/AK.svg', rarity:'Restricted' },
    { id:'9', name:'MP9 | Starlight Protector', condition:'Factory New', price:15, rank:9, float:0.03, floatRank:700, views:25, status:'offline', imageUrl:'/images/AK.svg', rarity:'Mil-Spec' },
    { id:'10', name:'P90 | Emerald Dragon', condition:'Well-Worn', price:25, rank:10, float:0.45, floatRank:900, views:19, status:'offline', imageUrl:'/images/AK.svg', rarity:'Restricted' },
    { id:'11', name:'M4A4 | Howl', condition:'Battle-Scarred', price:13000, rank:11, float:0.60, floatRank:2, views:250, status:'offline', imageUrl:'/images/AK.svg', rarity:'Contraband' },
    { id:'12', name:'MAC-10 | Neon Rider', condition:'Factory New', price:50, rank:12, float:0.05, floatRank:400, views:30, status:'offline', imageUrl:'/images/AK.svg', rarity:'Classified' },
  ];

  return (
    <div
      className="grid gap-4 overflow-visible"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      }}
    >
      {dummyItems.map((item,i) => (
        <ItemCard key={item.id} item={item} className="card-enter" style={{animationDelay:`${i*60}ms`}} />
      ))}
    </div>
  );
} 
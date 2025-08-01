'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { CSGOItem } from '@/app/components/ItemCard';

export default function useSteamInventory() {
  const { user, isAuthenticated } = useAuth();
  const [items, setItems] = useState<CSGOItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    const fetchInv = async () => {
      if (!isAuthenticated || !user?.id) return;
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3001/api/steam/inventory/${user.id}`,{ credentials:'include'});
        if(!res.ok){ throw new Error('Failed to fetch inventory'); }
        const data = await res.json();
        const items: CSGOItem[] = (data.items??[]).map((it:any,index:number)=>({
          id: it.id || `${index}`,
          name: it.name || 'Unknown',
          condition: it.exterior || 'Unknown',
          price: 0,
          rank: index+1,
          float: it.floatvalue ?? 0,
          floatRank: index+1,
          views: 0,
          status:'offline',
          imageUrl: it.image || '/placeholder-item.png',
          rarity: it.rarity || 'Common'
        }));
        setItems(items);
      }catch(err:any){
        setError(err.message||'error');
      }finally{setLoading(false);}
    }
    fetchInv();
  },[isAuthenticated,user]);

  // simple sort by rarity order
  const rarityOrder = ['covert','extraordinary','master','classified','restricted','mil-spec','industrial','consumer','base grade','common'];
  const sorted = [...items].sort((a,b)=>{
    const aIdx = rarityOrder.findIndex(r=>a.rarity?.toLowerCase().includes(r));
    const bIdx = rarityOrder.findIndex(r=>b.rarity?.toLowerCase().includes(r));
    return (aIdx===-1?99:aIdx)-(bIdx===-1?99:bIdx);
  });

  return { items: sorted, loading, error };
} 
'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Movie } from '@/lib/tmdb';
type Saved = {watchlist:Movie[];favorites:Movie[];toggleWatchlist:(m:Movie)=>void;toggleFavorite:(m:Movie)=>void};
const Ctx=createContext<Saved|null>(null);
export function Providers({children}:{children:React.ReactNode}){
 const [watchlist,setWatchlist]=useState<Movie[]>([]),[favorites,setFavorites]=useState<Movie[]>([]),[ready,setReady]=useState(false);
 useEffect(()=>{try{setWatchlist(JSON.parse(localStorage.getItem('cs-watchlist')||'[]'));setFavorites(JSON.parse(localStorage.getItem('cs-favorites')||'[]'));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)localStorage.setItem('cs-watchlist',JSON.stringify(watchlist))},[watchlist,ready]);
 useEffect(()=>{if(ready)localStorage.setItem('cs-favorites',JSON.stringify(favorites))},[favorites,ready]);
 const value=useMemo(()=>({watchlist,favorites,toggleWatchlist:(m:Movie)=>setWatchlist(old=>old.some(x=>x.id===m.id)?old.filter(x=>x.id!==m.id):[m,...old]),toggleFavorite:(m:Movie)=>setFavorites(old=>old.some(x=>x.id===m.id)?old.filter(x=>x.id!==m.id):[m,...old])}),[watchlist,favorites]);
 return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export function useSaved(){const c=useContext(Ctx);if(!c)throw new Error('useSaved must be used inside Providers');return c}

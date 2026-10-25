const BASE = 'https://api.themoviedb.org/3';
export const IMG = 'https://image.tmdb.org/t/p/';
export type Movie = {id:number; title?:string; name?:string; overview:string; poster_path:string|null; backdrop_path:string|null; vote_average:number; release_date?:string; first_air_date?:string; media_type?:string; genre_ids?:number[]};
export async function tmdb<T>(path:string, params:Record<string,string>={}) : Promise<T> {
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!key || key.includes('PASTE_')) throw new Error('Add your TMDB API key in .env.local');
  const url = new URL(BASE + path); url.searchParams.set('api_key', key); url.searchParams.set('language','en-US');
  Object.entries(params).forEach(([k,v])=>url.searchParams.set(k,v));
  const res = await fetch(url.toString(), { cache:'no-store' });
  if(!res.ok) throw new Error(`TMDB request failed (${res.status})`);
  return res.json() as Promise<T>;
}
export const imageUrl = (path:string|null,size='w500') => path ? `${IMG}${size}${path}` : '';

export async function tmdbDiscover(path:string, params:Record<string,string>={}) { return tmdb<{results:Movie[]}>(path,params); }

import type { Metadata } from 'next';import './globals.css';import SiteShell from '@/components/SiteShell';import {Providers} from '@/components/Providers';
export const metadata:Metadata={title:'CineSearch — Discover Movies & TV Shows',description:'Discover movies and TV shows, watch trailers and keep track of everything you want to watch.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Providers><SiteShell>{children}</SiteShell></Providers></body></html>}

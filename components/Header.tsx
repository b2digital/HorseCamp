'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
codex/create-next.js-base-for-horsecamp-application
import { useMemo } from 'react';
import TabsType from './TabsType';

const routes = [
  { href: '/', label: 'Accueil' },
  { href: '/recherche', label: 'Recherche' },
  { href: '/ajouter', label: 'Publier un stage' },
  { href: '/tableau-de-bord', label: 'Mon espace' }
];

export default function Header() {
  const pathname = usePathname();
  const active = useMemo(() => routes.find((route) => pathname?.startsWith(route.href)), [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-brand-primary">
          <span>🐎 HorseCamp</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`relative px-2 py-1 transition-colors ${
                active?.href === route.href ? 'text-brand-primary' : 'hover:text-brand-primary'
              }`}
            >
              {route.label}
              {active?.href === route.href ? (
                <span className="absolute inset-x-1 -bottom-1 block h-0.5 rounded-full bg-brand-accent" />
              ) : null}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-slate-100 bg-white px-4 py-2 sm:px-6 lg:px-8">
        <TabsType />

import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/recherche', label: 'Recherche' },
  { href: '/ajouter', label: 'Ajouter' },
  { href: '/tableau-de-bord', label: 'Tableau de bord' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-display text-xl font-semibold">
          HorseCamp
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-accent',
                pathname === item.href ? 'text-accent' : 'text-slate-600'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/connexion"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 md:inline-flex"
        >
          Se connecter
        </Link>
main
      </div>
    </header>
  );
}

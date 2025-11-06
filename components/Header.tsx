'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      </div>
    </header>
  );
}

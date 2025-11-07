'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
 codex/create-next.js-base-for-horsecamp-application
import { HomeIcon, MapPinIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline';

const items = [
  { href: '/', label: 'Accueil', Icon: HomeIcon },
  { href: '/recherche', label: 'Explorer', Icon: MapPinIcon },
  { href: '/ajouter', label: 'Ajouter', Icon: PlusCircleIcon },
  { href: '/tableau-de-bord', label: 'Profil', Icon: UserIcon }
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/70 bg-white/95 backdrop-blur md:hidden">
      <ul className="grid grid-cols-4">
        {items.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center justify-center gap-1 py-2 text-xs font-medium ${
                  isActive ? 'text-brand-primary' : 'text-slate-500'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'stroke-brand-primary' : 'stroke-current'}`} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
=======
import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9 12 3l8.25 6v10.5a1.5 1.5 0 0 1-1.5 1.5h-3.75v-6h-6v6H5.25a1.5 1.5 0 0 1-1.5-1.5z"
      />
    </svg>
  );
}

function MapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 4.5 3 6.75v12l6-2.25 6 2.25 6-2.25v-12L15 6.75 9 4.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6.75v12" />
    </svg>
  );
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 18.75a5.25 5.25 0 0 0-10.5 0M12 12.75a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25Z"
      />
    </svg>
  );
}

const items = [
  { href: '/', label: 'Accueil', icon: HomeIcon },
  { href: '/recherche', label: 'Explorer', icon: MapIcon },
  { href: '/ajouter', label: 'Ajouter', icon: PlusIcon },
  { href: '/tableau-de-bord', label: 'Profil', icon: UserIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-2 text-xs font-medium text-slate-500">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn('flex flex-col items-center gap-1 rounded-full px-3 py-2', active && 'text-accent')}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
 main
    </nav>
  );
}

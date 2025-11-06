'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
    </nav>
  );
}

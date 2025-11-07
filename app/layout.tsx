import type { Metadata } from 'next';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
codex/create-next.js-base-for-horsecamp-application
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'HorseCamp',
  description: 'Trouvez votre prochain stage ou randonnée équestre en quelques clics.'

import React from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'HorseCamp',
  description: 'Trouvez le stage équestre idéal en France.',
 main
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
codex/create-next.js-base-for-horsecamp-application
      <body className="min-h-screen bg-brand-background">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 pt-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
      <body>{children}</body>
 main
    </html>
  );
}

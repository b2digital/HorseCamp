import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import React from 'react';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6 pb-24">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

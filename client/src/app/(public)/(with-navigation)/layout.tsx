import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { NavBar } from '@/components/nav-bar';
import { SideBar } from '@/components/side-bar';

export default function PublicWithNavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh_-_128px)] px-8">
        <NavBar />
        <section className="flex min-h-[calc(100vh_-_156px)] gap-4 py-4">
          <SideBar />
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}

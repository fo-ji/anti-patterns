import type { ReactNode } from 'react';

import { getServerSession } from 'next-auth';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { NavBar } from '@/components/nav-bar';
import { SideBar } from '@/components/side-bar';
import { options } from '@/lib/next-auth';

export default async function PublicWithNavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <>
      <Header isLoggedIn={!!session} />
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

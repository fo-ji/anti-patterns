import type { ReactNode } from 'react';

import { getServerSession } from 'next-auth';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { options } from '@/lib/next-auth';

export default async function PublicWithoutNavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <>
      <Header isLoggedIn={!!session} />
      <main className="min-h-[calc(100vh_-_112px)] px-8">{children}</main>
      <Footer />
    </>
  );
}

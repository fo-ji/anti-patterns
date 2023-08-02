import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function PublicWithoutNavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh_-_112px)] px-8">{children}</main>
      <Footer />
    </>
  );
}

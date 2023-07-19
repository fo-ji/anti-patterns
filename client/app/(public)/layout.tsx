import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

// TODO: component&Storybook化
const Header = () => {
  return (
    <header className="flex h-14 items-center px-4 py-2">
      <Link href="/" className="inline-block">
        <Image
          src="/logo.png"
          alt="Anti-Patterns"
          width={120}
          height={34}
          priority
        />
      </Link>
    </header>
  );
};

// TODO: component&Storybook化
const Footer = () => {
  return (
    <footer className="flex h-14 items-center justify-center bg-primary px-4 py-2 text-secondary">
      [仮置]footer
    </footer>
  );
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh_-_112px)] py-8">{children}</main>
      <Footer />
    </>
  );
}

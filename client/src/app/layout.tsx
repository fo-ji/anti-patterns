import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@/styles/globals.css';
import { AppProvider } from '@/providers/app';

export const metadata: Metadata = {
  title: 'Anti-Patterns',
  description:
    'アンチパターンを共有するサービスです。他の人が同様の課題や問題に対処するために役立つことができます。アンチパターンを共有することで、人々は失敗から学び、より良いアプローチを見つけることができます。',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

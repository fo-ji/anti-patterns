'use client';

import type { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

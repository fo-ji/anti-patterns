'use client';

import type { ReactNode } from 'react';

import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          keepPreviousData: true,
        }}
      >
        {children}
      </SWRConfig>
    </SessionProvider>
  );
};

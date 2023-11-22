import type { ReactNode } from 'react';

import { Error } from '../error';
import { Loading } from '../loading';

export type SWRFallbackWrapperProps = {
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  children: ReactNode;
};
export const SWRFallbackWrapper = ({
  isLoading,
  error,
  children,
}: SWRFallbackWrapperProps) => {
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <>{children}</>;
};

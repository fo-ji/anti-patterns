import type { ReactNode } from 'react';

import Link from 'next/link';

export type NavLinkProps = {
  children: ReactNode;
  href: string;
  isCurrent?: boolean;
};

export const NavLink = ({
  children,
  href,
  isCurrent = false,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      aria-current={isCurrent && 'page'}
      className={
        isCurrent
          ? 'decoration-accent font-semibold underline decoration-2 underline-offset-4'
          : 'hover:underline hover:font-semibold underline-offset-4'
      }
    >
      {children}
    </Link>
  );
};

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
          ? 'font-semibold underline decoration-accent decoration-2 underline-offset-4'
          : 'underline-offset-4 hover:font-semibold hover:underline'
      }
    >
      {children}
    </Link>
  );
};

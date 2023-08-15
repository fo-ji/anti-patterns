import Link from 'next/link';
import type { ReactNode } from 'react';

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
          ? 'font-semibold underline decoration-primary decoration-2 underline-offset-4'
          : 'hover:opacity-90'
      }
    >
      {children}
    </Link>
  );
};
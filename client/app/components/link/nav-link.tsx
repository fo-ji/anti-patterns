import Link from 'next/link';
import type { ReactNode } from 'react';

export type NavLinkProps = {
  children: ReactNode;
  href: string;
  isActive?: boolean;
};

export const NavLink = ({ children, href, isActive = false }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={
        isActive
          ? 'underline decoration-primary font-semibold underline-offset-4 decoration-2'
          : 'hover:opacity-90'
      }
    >
      {children}
    </Link>
  );
};

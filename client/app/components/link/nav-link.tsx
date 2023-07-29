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
          ? 'font-semibold underline decoration-primary decoration-2 underline-offset-4'
          : 'hover:opacity-90'
      }
    >
      {children}
    </Link>
  );
};

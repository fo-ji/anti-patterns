'use client';

import { usePathname } from 'next/navigation';

import { NavLink } from '../link';

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-4">
      <ul className="flex gap-6">
        <li>
          <NavLink href="/" isActive={pathname === '/'}>
            トレンド
          </NavLink>
        </li>
        <li>
          <NavLink href="/ranking" isActive={pathname === '/ranking'}>
            ランキング
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

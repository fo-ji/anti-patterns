'use client';

import { usePathname } from 'next/navigation';

import { NavLink } from '../link';

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="ナビゲーション" className="mt-4 border-b border-b-neutral">
      <ul className="flex gap-6">
        <li>
          <NavLink href="/" isCurrent={pathname === '/'}>
            ホーム
          </NavLink>
        </li>
        <li>
          <NavLink href="/ranking" isCurrent={pathname === '/ranking'}>
            ランキング
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

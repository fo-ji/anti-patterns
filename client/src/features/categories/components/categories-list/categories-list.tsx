'use client';

import { usePathname } from 'next/navigation';

import { NavLink } from '@/components/link';

export const CategoriesList = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      <li className="indent-4">
        <NavLink
          href="/categories/lifestyle"
          isCurrent={pathname === '/categories/lifestyle'}
        >
          暮らし
        </NavLink>
      </li>
      <li className="indent-4">
        <NavLink
          href="/categories/work"
          isCurrent={pathname === '/categories/work'}
        >
          仕事
        </NavLink>
      </li>
      <li className="indent-4">
        <NavLink
          href="/categories/learn"
          isCurrent={pathname === '/categories/learn'}
        >
          学び
        </NavLink>
      </li>
      <li className="indent-4">
        <NavLink
          href="/categories/love"
          isCurrent={pathname === '/categories/love'}
        >
          恋愛
        </NavLink>
      </li>
      <li className="indent-4">
        <NavLink
          href="/categories/tech"
          isCurrent={pathname === '/categories/tech'}
        >
          テクノロジー
        </NavLink>
      </li>
    </ul>
  );
};

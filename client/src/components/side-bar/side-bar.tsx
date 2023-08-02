'use client';

import { usePathname } from 'next/navigation';

import { Link, NavLink } from '../link';
import { Tag } from '../tag';

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="block w-1/4 border-r border-neutral py-6">
      <h4 className="mb-2 font-semibold">最近登録されたタグ</h4>
      <ul className="flex flex-wrap gap-2">
        <li>
          <Tag href="/tags/hoge">hoge</Tag>
        </li>
        <li>
          <Tag href="/tags/foo">foo</Tag>
        </li>
        <li>
          <Tag href="/tags/bar">bar</Tag>
        </li>
        <li>
          <Tag href="/tags/fooBar">fooBar</Tag>
        </li>
      </ul>
      <div className="text-right text-xs">
        <Link href="/tags">もっとみる</Link>
      </div>
      <hr className="mx-2 my-4 text-neutral" />
      <h4 className="mb-2 font-semibold">カテゴリ</h4>
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
    </aside>
  );
};

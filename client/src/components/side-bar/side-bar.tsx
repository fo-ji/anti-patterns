'use client';

import { usePathname } from 'next/navigation';

import { Link, NavLink } from '../link';
import { Tag } from '../tag';

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex w-1/4 flex-col gap-4">
      <section className="rounded-md bg-plain px-6 py-4">
        <h4 className="mb-4 font-semibold">最近登録されたタグ</h4>
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
        <div className="mt-2 text-right text-xs">
          <Link href="/tags">もっとみる</Link>
        </div>
      </section>
      <section className="rounded-md bg-plain px-6 py-4">
        <h4 className="mb-4 font-semibold">カテゴリ</h4>
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
      </section>
    </aside>
  );
};

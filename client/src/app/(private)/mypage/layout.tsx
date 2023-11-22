import type { ReactNode } from 'react';

import { getServerSession } from 'next-auth';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Link } from '@/components/link';
// import { NavBar } from '@/components/nav-bar';
import { options } from '@/lib/next-auth';

export default async function PrivateWithNavigationLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <>
      <Header isLoggedIn={!!session} />
      <main className="min-h-[calc(100vh_-_112px)] px-8">
        {/* <NavBar /> */}
        <section className="flex min-h-[calc(100vh_-_156px)] gap-4 py-6">
          <aside className="flex w-1/4 flex-col gap-4">
            <ul className="space-y-4 rounded bg-white px-2 py-4">
              <li>
                <Link href="#">投稿した記事</Link>
              </li>
              <li>
                <Link href="/mypage/articles/create">記事作成</Link>
              </li>
              <li>
                <Link href="#">下書き記事</Link>
              </li>
            </ul>
            {/* <section className="rounded-md bg-white px-6 py-4">
              <h4 className="mb-4 font-semibold">最近登録されたタグ</h4>
              <TagsList tags={tags} />
              <div className="mt-2 text-right text-xs">
                <Link href="/tags">もっとみる</Link>
              </div>
            </section> */}
            {/* <section className="rounded-md bg-white px-6 py-4">
              <h4 className="mb-4 font-semibold">カテゴリ</h4>
              <CategoriesList categories={categories} />
            </section> */}
          </aside>
          {children}
        </section>
      </main>
      <Footer />
    </>
  );
}

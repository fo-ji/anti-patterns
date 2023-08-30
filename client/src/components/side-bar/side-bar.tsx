import { CategoriesList, getCategories } from '@/features/categories';
import { TagsList, getTags } from '@/features/tags';

import { Link } from '../link';

export const SideBar = async () => {
  const tags = await getTags(10);
  const categories = await getCategories();

  return (
    <aside className="flex w-1/4 flex-col gap-4">
      <section className="rounded-md bg-plain px-6 py-4">
        <h4 className="mb-4 font-semibold">最近登録されたタグ</h4>
        <TagsList tags={tags} />
        <div className="mt-2 text-right text-xs">
          <Link href="/tags">もっとみる</Link>
        </div>
      </section>
      <section className="rounded-md bg-plain px-6 py-4">
        <h4 className="mb-4 font-semibold">カテゴリ</h4>
        <CategoriesList categories={categories} />
      </section>
    </aside>
  );
};

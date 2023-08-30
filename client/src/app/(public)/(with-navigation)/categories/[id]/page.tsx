import { CategoryInfo, getCategory } from '@/features/categories';

type PublickCategoryPageProps = {
  params: { id: string };
};

export default async function PublicCategoryPage({
  params,
}: PublickCategoryPageProps) {
  const category = await getCategory(params.id);

  return (
    <section className="flex w-3/4 flex-col gap-4">
      <section>
        <CategoryInfo category={category} />
      </section>
      <section>
        {/* <ArticlesList articles={articles} /> */}
        TODO: 記事一覧
      </section>
    </section>
  );
}

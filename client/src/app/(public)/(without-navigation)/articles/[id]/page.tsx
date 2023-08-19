import { ArticleInfo, AuthorInfo, getArticle } from '@/features/articles';

type PublickArticlePageProps = {
  params: { id: string };
};

export default async function PublicArticlePage({
  params,
}: PublickArticlePageProps) {
  const article = await getArticle(params.id);

  return (
    <section className="flex min-h-[calc(100vh_-_112px)] items-center justify-center gap-4 py-6">
      <ArticleInfo article={article} />
      <AuthorInfo article={article} />
    </section>
  );
}

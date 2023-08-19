import { ArticlesList, getArticles } from '@/features/articles';

export default async function Home() {
  const articles = await getArticles();

  return (
    <section className="w-3/4 flex-1">
      <ArticlesList articles={articles} />
    </section>
  );
}

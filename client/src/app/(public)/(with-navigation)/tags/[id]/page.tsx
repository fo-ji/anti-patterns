import { getArticleTags } from '@/features/article-tags';
import { ArticlesList } from '@/features/articles';
import { TagInfo, getTag } from '@/features/tags';

type PublickTagPageProps = {
  params: { id: string };
};

export default async function PublicTagPage({ params }: PublickTagPageProps) {
  const tag = await getTag(params.id);
  const articleTags = await getArticleTags(params.id);
  const articles = !articleTags.length
    ? []
    : articleTags.map((at) => at.article);

  return (
    <section className="flex w-3/4 flex-col gap-4">
      <section>
        <TagInfo tag={tag} relatedArticleSize={articleTags.length} />
      </section>
      <section>
        <ArticlesList articles={articles} />
      </section>
    </section>
  );
}

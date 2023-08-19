import { StarIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/button';
import { NoData } from '@/components/no-data';

import type { ArticleWithRelations } from '../../types';

export type ArticleInfoProps = {
  article?: ArticleWithRelations;
};

export const ArticleInfo = ({ article }: ArticleInfoProps) => {
  if (!article) return <NoData />;
  return (
    <article className="flex min-h-[calc(100vh_-_156px)] w-3/4 flex-col gap-12 p-4">
      <h1 className="text-center">{article.title}</h1>
      <section className="text-right">
        <Button variant="circle" icon={<StarIcon />}>
          お気に入り登録
        </Button>
      </section>
      <section className="rounded-md bg-plain p-8">
        <h2 className="mb-4">本文</h2>
        <p>{article.content}</p>
      </section>
      <section className="rounded-md bg-plain p-8">
        <h2 className="mb-4">コメント</h2>
        <p>
          {article.comments.map((comment) => (
            <span key={comment.id}>{comment.content}</span>
          ))}
        </p>
      </section>
    </article>
  );
};

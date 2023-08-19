import type { Article } from '@prisma/client';
import { format } from 'date-fns';
import NextLink from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/card';
import { NoData } from '@/components/no-data';

export type ArticlesListProps = {
  articles: Article[];
};

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  if (!articles.length) return <NoData />;
  return (
    <ul className="flex flex-col gap-4">
      {articles.map((article) => (
        <li key={article.id}>
          <NextLink href={`/articles/${article.id}`}>
            <Card>
              <CardHeader
                title={article.title}
                supplement={format(new Date(article.updatedAt), 'yyyy/MM/dd')}
              />
              <CardContent>{article.content}</CardContent>
            </Card>
          </NextLink>
        </li>
      ))}
    </ul>
  );
};

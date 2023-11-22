import { client } from '@/lib/http/client';

import type { ArticleWithRelations } from '../types';

export const getArticle = (
  articleId: string,
): Promise<ArticleWithRelations> => {
  return client<ArticleWithRelations>(`/api/proxy/articles/${articleId}`, {
    cache: 'no-store',
  });
};

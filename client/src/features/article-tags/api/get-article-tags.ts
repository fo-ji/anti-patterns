import { client } from '@/lib/http/client';

import type { ArticleTagWithRelations } from '../types';

export const getArticleTags = (
  tagId: string
): Promise<ArticleTagWithRelations[]> => {
  return client<ArticleTagWithRelations[]>(`/api/proxy/article-tags/${tagId}`);
};

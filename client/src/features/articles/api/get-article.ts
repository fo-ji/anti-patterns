import { apiClient } from '@/lib/api-client';

import type { ArticleWithRelations } from '../types';

export const getArticle = (
  articleId: string,
): Promise<ArticleWithRelations> => {
  return apiClient.get(`/articles/${articleId}`);
};

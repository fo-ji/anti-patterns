import { apiClient } from '@/lib/api-client';

import type { ArticleTagWithRelations } from '../types';

export const getArticleTags = (
  tagId: string,
): Promise<ArticleTagWithRelations[]> => {
  return apiClient.get(`/article-tags/${tagId}`);
};

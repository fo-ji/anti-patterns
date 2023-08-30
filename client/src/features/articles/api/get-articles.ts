import { apiClient } from '@/lib/api-client';

import type { Article } from '@prisma/client';

export const getArticles = (): Promise<Article[]> => {
  return apiClient.get('/articles');
};

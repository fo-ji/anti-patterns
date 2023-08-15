import type { Article } from '@prisma/client';

import { apiClient } from '@/lib/api-client';

export const getArticles = (): Promise<Article[]> => {
  return apiClient.get('/articles');
};

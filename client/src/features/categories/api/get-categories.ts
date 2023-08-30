import { apiClient } from '@/lib/api-client';

import type { Category } from '@prisma/client';

export const getCategories = (): Promise<Category[]> => {
  return apiClient.get('/categories');
};

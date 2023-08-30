import { apiClient } from '@/lib/api-client';

import type { Category } from '@prisma/client';

export const getCategory = (categoryId: string): Promise<Category | null> => {
  return apiClient.get(`/categories/${categoryId}`);
};

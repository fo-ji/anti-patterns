import { client } from '@/lib/http/client';

import type { Category } from '@prisma/client';

export const getCategory = (categoryId: string): Promise<Category | null> => {
  return client<Category>(`/api/proxy/categories/${categoryId}`, {
    cache: 'no-store',
  });
};

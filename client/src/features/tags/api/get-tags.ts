import type { Tag } from '@prisma/client';

import { apiClient } from '@/lib/api-client';

export const getTags = (take = 10): Promise<Tag[]> => {
  return apiClient.get('/tags', { params: { take } });
};

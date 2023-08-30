import { apiClient } from '@/lib/api-client';

import type { Tag } from '@prisma/client';

export const getTag = (tagId: string): Promise<Tag | null> => {
  return apiClient.get(`/tags/${tagId}`);
};

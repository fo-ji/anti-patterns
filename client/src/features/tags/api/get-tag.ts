import { client } from '@/lib/http/client';

import type { Tag } from '@prisma/client';

export const getTag = (tagId: string): Promise<Tag | null> => {
  return client<Tag>(`/api/proxy/tags/${tagId}`, {
    cache: 'no-store',
  });
};

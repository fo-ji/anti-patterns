import { client } from '@/lib/http/client';

import type { Tag } from '@prisma/client';

export const getTags = (take = 10): Promise<Tag[]> => {
  const params = new URLSearchParams();
  params.append('take', take.toString());

  return client<Tag[]>(`/api/proxy/tags?${params}`, {
    cache: 'no-store',
  });
};

// import { cookies } from 'next/headers';

import { client } from '@/lib/http/client';

import type { Article } from '@prisma/client';

export const getArticles = (categoryId?: string): Promise<Article[]> => {
  const params = new URLSearchParams();
  categoryId && params.append('categoryId', categoryId);

  return client<Article[]>(`/api/proxy/articles?${params}`, {
    cache: 'no-store',
    // headers: {
    //   Cookie: cookies()
    //     .getAll()
    //     .map(({ name, value }) => `${name}=${value}`)
    //     .join(';'),
    // },
  });
};

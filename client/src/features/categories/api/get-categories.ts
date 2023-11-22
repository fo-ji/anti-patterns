import useSWR from 'swr';

import { client } from '@/lib/http/client';

import type { Category } from '@prisma/client';

export const getCategories = (): Promise<Category[]> => {
  return client<Category[]>('/api/proxy/categories');
};

export const useGetCategories = () => {
  return useSWR('/api/proxy/categories', getCategories, { fallbackData: [] });
};

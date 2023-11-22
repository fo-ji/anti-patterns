'use client';

import useSWRMutation from 'swr/mutation';

import { client } from '@/lib/http/client';

import type { Article } from '@prisma/client';

export type CreateArticleDTO = {
  title: string;
  content: string;
  categoryId: string;
};

export const createArticle = (
  url: string,
  { arg }: { arg: CreateArticleDTO },
): Promise<Article> => {
  const formData = JSON.stringify(arg);

  return client<Article>(url, {
    method: 'POST',
    body: formData,
  });
};

export const useCreateArticle = () => {
  return useSWRMutation('/api/proxy/articles', createArticle, {
    rollbackOnError: true,
    onSuccess: () => console.log('記事を作成しました'),
    onError: () => console.error('記事の作成に失敗しました'),
  });
};

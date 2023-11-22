'use client';

// import { useRouter } from 'next/navigation';

import * as z from 'zod';

import { Button } from '@/components/button';
import { Form, InputField, SelectField } from '@/components/form';
import { SWRFallbackWrapper } from '@/components/wrapper';
import { useGetCategories } from '@/features/categories';

import {
  useCreateArticle,
  type CreateArticleDTO,
} from '../../api/create-article';

const schema = z.object({
  title: z
    .string()
    .min(1, { message: '必須項目です' })
    .max(255, { message: '255文字以内で入力してください' }),
  content: z.string().min(1, { message: '必須項目です' }),
  // .max(255, { message: '255文字以内で入力してください' }),
  categoryId: z.string(),
});

export const CreateArticle = () => {
  const { data, error, isLoading } = useGetCategories();
  const { trigger, isMutating } = useCreateArticle();
  // const router = useRouter();

  return (
    <SWRFallbackWrapper isLoading={isLoading} error={error}>
      <Form<CreateArticleDTO, typeof schema>
        onSubmit={async (values) => {
          try {
            console.log({ values });
            await trigger(values);
            // router.refresh();
            // router.back();
          } catch (error) {
            console.log({ error });
          }
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <div className="flex w-full flex-col gap-6 rounded bg-white p-4">
            <InputField
              label="タイトル"
              error={formState.errors.title}
              registration={register('title')}
            />
            <InputField
              label="本文"
              error={formState.errors.content}
              registration={register('content')}
            />
            <SelectField
              label="カテゴリ"
              error={formState.errors.categoryId}
              options={data.map((d) => ({ label: d.name, value: d.id }))}
              registration={register('categoryId')}
            />
            <div className="text-center">
              <Button type="submit" disabled={isMutating}>
                保存して公開する
              </Button>
            </div>
          </div>
        )}
      </Form>
    </SWRFallbackWrapper>
  );
};

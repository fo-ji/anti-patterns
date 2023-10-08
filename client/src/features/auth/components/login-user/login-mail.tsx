'use client';

import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';
import * as z from 'zod';

import { Button } from '@/components/button';
import { Form, InputField } from '@/components/form';

import { LoginDTO } from '../../api/login';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: '必須項目です' })
    .max(255, { message: '255文字以内で入力してください' })
    .email({ message: '不正なメールアドレスです' }),
  password: z
    .string()
    .min(8, { message: '8文字以上で入力してください' })
    .max(32, { message: '32文字以内で入力してください' })
    .regex(
      /((?=.*\d)|(?=.*\W+))(?![.\s\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      '英数字（大・小文字）を含めて入力してください'
    ),
});

export const LoginMail = () => {
  const router = useRouter();

  return (
    <Form<LoginDTO, typeof schema>
      onSubmit={async (values) => {
        try {
          await signIn('credentials', {
            ...values,
            redirect: false,
          });
          router.refresh();
          router.back();
        } catch (error) {
          console.log({ error });
        }
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <div className="flex flex-col gap-6">
          <InputField
            type="email"
            label="メールアドレス"
            placeholder="user@example.com"
            error={formState.errors.email}
            registration={register('email')}
          />
          <InputField
            type="password"
            label="パスワード"
            placeholder="Test12345!"
            error={formState.errors.password}
            registration={register('password')}
          />
          <div className="text-center">
            <Button type="submit">ログイン</Button>
          </div>
        </div>
      )}
    </Form>
  );
};

'use client';

import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

import { signUp } from '@/features/auth';

export default function AuthSignUpPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between gap-12 p-24">
      <h1>サインアップページ</h1>
      {/* TODO: メールサインアップフォーム実装 */}
      <button
        onClick={async () => {
          const password = 'password';
          try {
            const newUser = await signUp({
              email: 'user14@example.com',
              password,
              name: 'user14',
              avatar: '',
            });
            await signIn('credentials', {
              email: newUser?.email,
              password,
              redirect: false,
            });
            router.refresh();
            router.back();
          } catch (error) {
            console.log({ error });
          }
        }}
      >
        メールアドレス
      </button>
    </div>
  );
}

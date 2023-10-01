'use client';

import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

export default function AuthLoginPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between gap-12 p-24">
      <h1>ログインページ</h1>
      {/* TODO: Githubボタン実装 */}
      <button
        onClick={async () => {
          try {
            await signIn('github', {
              redirect: false,
            });
            router.refresh();
            router.back();
          } catch (error) {
            console.log({ error });
          }
        }}
      >
        GitHub
      </button>
      {/* TODO: メールログインフォーム実装 */}
      <button
        onClick={async () => {
          try {
            await signIn('credentials', {
              email: 'user2@example.com',
              password: 'password',
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

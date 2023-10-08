'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen px-6">
      <div className="container m-auto flex max-h-96 min-w-[340px] flex-col items-center justify-center gap-12 rounded bg-white p-12">
        <h3 className="font-semibold">システムエラーが発生しました</h3>
        <div>
          <span>恐れ入りますが、</span>
          <Button variant="underline" onClick={() => reset()}>
            ページ再読み込み
          </Button>
          <span>をして改善しない場合、時間をおいて再度お試しください</span>
        </div>
        <div>
          <Button
            onClick={() => {
              router.push('/');
              location.reload();
            }}
            variant="underline"
          >
            トップページにもどる
          </Button>
        </div>
      </div>
    </div>
  );
}

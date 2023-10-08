'use client';

import { useEffect } from 'react';

import { Button } from '@/components/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-h-96 w-full min-w-[340px] flex-col items-center justify-center gap-12 rounded bg-white p-12">
      <h3 className="font-semibold">システムエラーが発生しました</h3>
      <div>
        <span>恐れ入りますが、</span>
        <Button variant="underline" onClick={() => reset()}>
          ページ再読み込み
        </Button>
        <span>をして改善しない場合、時間をおいて再度お試しください</span>
      </div>
    </div>
  );
}

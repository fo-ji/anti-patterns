'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/button';

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12">
      <h3>システムエラーが発生しました</h3>
      <p>恐れ入りますが、時間をおいて再度お試しください</p>
      <p>
        <Button
          onClick={() => {
            router.push('/');
            location.reload();
          }}
          variant="outline"
        >
          トップページにもどる
        </Button>
      </p>
    </div>
  );
}

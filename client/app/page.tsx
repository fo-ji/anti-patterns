import { BeakerIcon } from '@heroicons/react/24/solid';

import { Button } from './components/button';
import { Link } from './components/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>登録する</Button>
      <Button variant="outline" icon={<BeakerIcon />}>
        編集する
      </Button>
      <Link href="/">ページ遷移(リンク)</Link>
      <Link href="/" variant="solid">
        ページ遷移(ボタン)
      </Link>
      <Link href="/" variant="outline" icon={<BeakerIcon />}>
        ページ遷移(ボタン)
      </Link>
    </main>
  );
}

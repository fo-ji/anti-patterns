import Image from 'next/image';
import NextLink from 'next/link';

import { Link } from '../link';

export const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between px-8 py-2">
      <NextLink href="/" className="inline-block">
        <Image
          src="/logo.png"
          alt="Anti-Patterns"
          width={120}
          height={34}
          priority
        />
      </NextLink>
      <div className="flex gap-4">
        <Link href="/login" variant="outline">
          ログイン
        </Link>
        <Link href="/signup" variant="solid">
          新規登録
        </Link>
      </div>
    </header>
  );
};

'use client';

import Image from 'next/image';
import NextLink from 'next/link';

import { signOut } from 'next-auth/react';

import { Button } from '../button';
import { Link } from '../link';

export type HeaderProps = {
  isLoggedIn: boolean;
};

export const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <header className="flex h-14 items-center justify-between bg-white px-8 py-2">
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
        {isLoggedIn ? (
          <>
            <Button
              variant="outline"
              onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
            >
              ログアウト
            </Button>
            <Link href="/mypage" variant="solid">
              マイページ
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" variant="outline">
              ログイン
            </Link>
            <Link href="/signup" variant="solid">
              新規登録
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

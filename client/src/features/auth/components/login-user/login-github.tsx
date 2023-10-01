'use client';

import { useRouter } from 'next/navigation';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/button';

export const LoginGithub = () => {
  const router = useRouter();

  return (
    <Button
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
    </Button>
  );
};

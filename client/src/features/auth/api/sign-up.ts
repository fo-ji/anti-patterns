import { client } from '@/lib/http/client';

import type { User } from '@prisma/client';

export const signUp = ({
  email,
  name,
  avatar,
  password,
}: {
  email: string;
  name: string;
  avatar: string;
  password: string;
}): Promise<Omit<User, 'password'> | null> => {
  const formData = JSON.stringify({ email, name, avatar, password });

  return client<Omit<User, 'password'> | null>('/api/proxy/auth/signup', {
    method: 'POST',
    body: formData,
  });
};

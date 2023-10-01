import { client } from '@/lib/http/client';

import type { User } from '@prisma/client';

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Omit<User, 'password'> | null> => {
  const formData = JSON.stringify({ email, password });

  return client<Omit<User, 'password'> | null>('/api/proxy/auth/login', {
    method: 'POST',
    body: formData,
  });
};

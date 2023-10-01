import { client } from '@/lib/http/client';

import type { User } from '@prisma/client';

export type LoginDTO = {
  email: string;
  password: string;
};

export const login = ({
  email,
  password,
}: LoginDTO): Promise<Omit<User, 'password'> | null> => {
  const formData = JSON.stringify({ email, password });

  return client<Omit<User, 'password'> | null>('/api/proxy/auth/login', {
    method: 'POST',
    body: formData,
  });
};

import type { NextRequest } from 'next/server';

import { server } from '@/lib/http/server';

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const formData = JSON.stringify(requestBody);

  return await server('/auth/signup', {
    method: 'POST',
    // headers: {
    // 'API-Key': process.env.DATA_API_KEY,
    // },
    body: formData,
  });
}

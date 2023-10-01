// import { getServerSession } from 'next-auth';

import type { NextRequest } from 'next/server';

import { server } from '@/lib/http/server';
// import { options } from '@/lib/next-auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  // const session = await getServerSession(options);
  return await server(`/tags/${params.id}`, {
    // headers: {
    // Authorization: `Bearer ${session?.encodedToken}`,
    // },
    cache: 'no-cache',
  });
}

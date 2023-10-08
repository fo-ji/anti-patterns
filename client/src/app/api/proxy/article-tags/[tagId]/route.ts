// import { getServerSession } from 'next-auth';

import type { NextRequest } from 'next/server';

import { server } from '@/lib/http/server';
// import { options } from '@/lib/next-auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { tagId: string } }
) {
  // const session = await getServerSession(options);
  return await server(`/article-tags/${params.tagId}`, {
    // headers: {
    // Authorization: `Bearer ${session?.encodedToken}`,
    // },
    cache: 'no-store',
  });
}

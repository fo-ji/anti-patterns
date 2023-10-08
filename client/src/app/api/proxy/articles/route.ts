import type { NextRequest } from 'next/server';

// import { getServerSession } from 'next-auth';

import { server } from '@/lib/http/server';
// import { options } from '@/lib/next-auth';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  // const session = await getServerSession(options);

  return await server(`/articles?${searchParams}`, {
    // headers: {
    // Authorization: `Bearer ${session?.encodedToken}`,
    // },
    cache: 'no-store',
  });
}

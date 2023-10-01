// import { getServerSession } from 'next-auth';

import { server } from '@/lib/http/server';
// import { options } from '@/lib/next-auth';

export async function GET() {
  // const session = await getServerSession(options);
  return await server('/categories', {
    // headers: {
    // Authorization: `Bearer ${session?.encodedToken}`,
    // },
  });
}

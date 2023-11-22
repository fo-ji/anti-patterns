import { NextRequest, NextResponse } from 'next/server';

import { getServerSession } from 'next-auth';

import { server } from '@/lib/http/server';
import { options } from '@/lib/next-auth';
import { removeProxyPrefix } from '@/utils/remove-proxy-prefix';

// MEMO: 認証必要・不要の2パターンでエンドポイント作成する？
//       api/proxy/protected/[...all]/route.ts
//       api/proxy/public   /[...all]/route.ts

export async function GET(request: Request) {
  const requestUrl = removeProxyPrefix(request.url);
  return await server(requestUrl, {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${session?.encodedToken}`,
    },
    cache: 'no-store',
  });
}

export async function POST(request: NextRequest) {
  // TODO: 共通関数にする？=----
  const session = await getServerSession(options);
  if (!session || !session.encodedToken)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  // -------------------------

  const requestBody = await request.json();
  const formData = JSON.stringify({ ...requestBody, userId: session.user?.id });
  const requestUrl = removeProxyPrefix(request.url);

  return await server(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.encodedToken}`,
      // 'API-Key': process.env.DATA_API_KEY,
    },
    body: formData,
  });
}

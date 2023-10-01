import { NextResponse } from 'next/server';

import { SERVER_API_URL } from '@/config/constants';

export const server = async (
  url: RequestInfo,
  options?: RequestInit,
): Promise<NextResponse> => {
  console.log({ options });
  try {
    const res = await fetch(`${SERVER_API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': process.env.DATA_API_KEY,
        ...options?.headers,
      },
      ...options,
    });

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return Promise.reject(error);
  }
};

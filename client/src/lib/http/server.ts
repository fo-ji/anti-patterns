import { NextResponse } from 'next/server';

import { SERVER_API_URL } from '@/config/constants';

export const server = async (
  url: RequestInfo,
  options?: RequestInit,
): Promise<NextResponse> => {
  try {
    const res = await fetch(`${SERVER_API_URL}${url}`, options);

    if (!res.ok) {
      return NextResponse.json(
        { error: res.statusText },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return Promise.reject(error);
  }
};

import { CLIENT_API_URL } from '@/config/constants';

export const client = async <T>(
  url: RequestInfo,
  options?: RequestInit,
): Promise<T> => {
  try {
    const res = await fetch(`${CLIENT_API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!res.ok) throw new Error(res.statusText);

    const { data } = await res.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

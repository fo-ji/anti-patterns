import { CLIENT_API_URL } from '@/config/constants';

export const removeProxyPrefix = (url: string) => {
  const prefix = `${CLIENT_API_URL}/api/proxy`;

  if (url.startsWith(prefix)) {
    return url.substring(prefix.length);
  } else {
    return url;
  }
};

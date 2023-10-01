export const CLIENT_API_URL = process.env.NEXT_PUBLIC_CLIENT_API_URL as string;
export const SERVER_API_URL = process.env.SERVER_API_URL as string;
export const NEXTAUTH_URL = process.env.NEXTAUTH_URL as string;
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET as string;
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID as string;
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET as string;

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_TEST = process.env.NODE_ENV === 'test';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';

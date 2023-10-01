import { encode } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  NEXTAUTH_SECRET,
} from '@/config/constants';
import { login } from '@/features/auth';

import type { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  secret: NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
  providers: [
    GitHubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          return await login({ ...credentials });
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // jwt: async ({ token }) => {
    //   return token;
    // },
    session: async ({ session, token }) => {
      const encodedToken = await encode({
        token,
        secret: NEXTAUTH_SECRET,
      });

      // MEMO: GitHubProviderの時、token.sub にはこのアプリケーションで扱う値が入らない

      return {
        ...session,
        user: {
          id: token.sub,
          ...session.user,
        },
        encodedToken,
      };
    },
  },
  pages: {
    signIn: '/login',
    // error: '/api/auth/error',
  },
};

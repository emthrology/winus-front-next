/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthOptions } from 'next-auth/';
import CredentialsProvider from 'next-auth/providers/credentials';
import { query } from '@/lib/db'; // DB 연결 함수

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: '아이디', type: 'text' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials) {
        // DB에서 사용자 조회
        const users = (await query('SELECT * FROM users WHERE name = ?', [
          credentials!.username,
        ])) as any[]; // 쿼리 결과를 배열로 타입 단언
        const user = users[0];
        if (user && user.password === credentials!.password) {
          // 실제 서비스에서는 비밀번호 해시 비교 필수!
          return { id: user.id, name: user.name };
        }
        return null; // 로그인 실패
      },
    }),
  ],
  session: {
    //prettier-ignore
    strategy: "jwt",
  },
  pages: {
    signIn: '/login', // 커스텀 로그인 페이지 경로
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      // 로그인 시 user.id를 token에 넣음
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // token.id를 session.user.id에 넣음
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

export default authOptions;

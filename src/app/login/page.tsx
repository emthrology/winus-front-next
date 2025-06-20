// app/login/page.tsx
'use client';

import LoginComponent from '@/components/auth/LoginCopmonent';
import TitleComponent from '@/components/common/TitleComponent';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

export default function Page() {
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement)
      .value;
    const password = (form.elements.namedItem('password') as HTMLInputElement)
      .value;
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    } else {
      window.location.href = '/notice'; // 로그인 성공 시 메인으로 이동
    }
  };

  return (
    <div className="w-screen">
      <TitleComponent title="Login" />
      <SessionProvider>
        <LoginComponent handleSubmit={handleSubmit} error={error} />
      </SessionProvider>
    </div>
  );
}

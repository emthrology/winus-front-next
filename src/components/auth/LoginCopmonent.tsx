'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

export default function LoginComponent({ handleSubmit, error }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'authenticated') {
      // 이미 로그인된 경우 원하는 경로로 리다이렉트
      router.replace('/');
    }
  }, [status, session, router]);
  return (
    <div className="min-h-[80vh] bg-white flex flex-col justify-center items-center">
      <h1 className="py-4 text-black text-2xl">관리자 로그인</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 min-w-sm"
      >
        <div className="w-[90%] flex items-center justify-end space-x-4 pr-[15%]">
          <label htmlFor="username" className="text-black">
            아이디
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="text-gray-700 border border-[#032FF4] placeholder-gray-400 rounded px-2 py-1 text-sm w-48"
          />
        </div>
        <div className="w-[90%] flex items-center justify-end space-x-4 pr-[15%]">
          <label htmlFor="password" className="text-black">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="text-gray-700 border border-[#032FF4] placeholder-gray-400 rounded px-2 py-1 text-sm w-48"
          />
        </div>
        <button
          className="bg-[#2563eb] text-white px-4 py-1 rounded text-sm"
          type="submit"
        >
          로그인
        </button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  );
}

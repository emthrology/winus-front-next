'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function WriteButton() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // 세션 정보를 불러오는 중에는 아무것도 렌더링하지 않거나 로딩 표시 가능
    return null;
  }

  // 로그인된 사용자만 버튼 노출
  if (status === 'authenticated' && session?.user?.name) {
    return (
      <>
        <button
          className="bg-[#2563eb] text-white h-full px-4 py-2 rounded text-base"
          onClick={() => router.push('/notice/edit')}
        >
          글쓰기
        </button>
        <button
          onClick={() => signOut({ callbackUrl: '/' })} // 로그아웃 후 메인으로 이동
          className="bg-gray-400 text-white h-full px-4 py-2 rounded"
        >
          로그아웃
        </button>
      </>
    );
  }

  // 그 외(비로그인 등)에는 아무것도 렌더링하지 않음
  return null;
}

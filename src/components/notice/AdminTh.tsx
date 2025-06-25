import React from 'react';
import { useSession } from 'next-auth/react';
export default function AdminTh() {
  const { data: session, status } = useSession();
  if (status === 'authenticated' && session?.user?.name) {
    return <th className="w-2/12 py-2 border-b border-[#d1d5db]">관리</th>;
  }
  return null;
}

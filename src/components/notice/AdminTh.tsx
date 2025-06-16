import React from 'react';
import { useSession } from 'next-auth/react';
export default function AdminTh() {
  const { data: session, status } = useSession();
  if (status === 'authenticated' && session?.user?.name) {
    return <th className="py-2 border-b border-[#d1d5db] w-64">관리</th>;
  }
  return null;
}

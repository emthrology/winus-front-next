import React from 'react';
import { useSession } from 'next-auth/react';
import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';

interface Props {
  postId: number;
  handleDelete: (postId: number) => void;
}

export default function AdminTd({ postId, handleDelete }: Props) {
  const { data: session, status } = useSession();
  if (status === 'authenticated' && session?.user?.name) {
    return (
      <td className="h-[64px] py-2 border-b border-[#e5e7eb] text-center align-middle">
        <div
          className="inline-flex justify-center items-center"
          onClick={(e) => {
            e.stopPropagation(); // ← 이벤트 버블링 방지!
            handleDelete(postId);
          }}
        >
          <Icon path={mdiDeleteOutline} size={1.2} color="#E61E2B" />
        </div>
      </td>
    );
  }
  return null;
}

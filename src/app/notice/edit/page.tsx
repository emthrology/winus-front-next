'use client';
import TitleComponent from '@/components/common/TitleComponent';
import React from 'react';
// import NoticeEditor from '@/components/notice/NoticeEditor';
import EditComponent from '@/components/notice/edit/EditComponent';
export default function Page() {
  return (
    <div className="w-screen">
      <TitleComponent title="notice." />
      <div className="px-6 sm:px-32 py-4 min-h-[700px] bg-white">
        {/* <NoticeEditor /> */}
        <EditComponent />
      </div>
    </div>
  );
}

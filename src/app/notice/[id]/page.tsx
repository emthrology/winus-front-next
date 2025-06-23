// app/board/[id]/page.tsx
import { SNoticeDetail } from '@/actions/notice/SNoticeDetail';
import Footer from '@/components/common/Footer';
import TitleComponent from '@/components/common/TitleComponent';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import NoticeDetail from './NoticeDetail';
// interface PageProps {
//   params: { [key: string]: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }
export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notice = await SNoticeDetail(Number(id));

  // const NoticeDetailPage = async () => {
  //   const notice = await SNoticeDetail(1);

  if (!notice) return notFound();

  return (
    <div className="w-screen">
      <TitleComponent title="Notice." />
      <Suspense>
        <NoticeDetail notice={notice} />
      </Suspense>
      <Footer contactTheme={'blue'} />
    </div>
  );
}

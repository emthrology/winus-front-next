// app/board/[id]/page.tsx
import { SNoticeDetail } from '@/actions/notice/SNoticeDetail';
import Footer from '@/components/common/Footer';
import TitleComponent from '@/components/common/TitleComponent';
import { notFound } from 'next/navigation';
import React from 'react';
import NoticeDetail from './NoticeDetail';

interface NoticeDetailPageProps {
  params: { id: string };
}
// const NoticeDetailPage = async ({ params }: DetailPageProps) => {
const NoticeDetailPage = async ({ params }: NoticeDetailPageProps) => {
  const awaitParams = await params;
  const notice = await SNoticeDetail(Number(awaitParams.id));

  if (!notice) return notFound();

  return (
    <>
      <TitleComponent title="Notice." />
      <NoticeDetail notice={notice} />
      <Footer contactTheme={'blue'} />
    </>
  );
};

export default NoticeDetailPage;

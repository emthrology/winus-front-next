// app/board/[id]/page.tsx

import Footer from '@/components/common/Footer';
import TitleComponent from '@/components/common/TitleComponent';
import { notFound } from 'next/navigation';
import React from 'react';

// 예시 데이터 타입
type Notice = {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  content: string;
  imageUrl: string;
  fileName: string;
  fileUrl: string;
};

// 실제 서비스에서는 fetch로 API에서 데이터 받아오기
const dummyNotice: Notice = {
  id: 1,
  title: '주식회사 원어스의 공지사항 입니다.',
  author: '원어스',
  date: '2025-05-15',
  views: 122,
  content: `주식회사 원어스의 공지사항 입니다.
주식회사 원어스의 공지사항 입니다.주식회사 원어스의 공지사항 입니다.
주식회사 원어스의 공지사항 입니다.주식회사 원어스의 공지사항 입니다.
주식회사 원어스의 공지사항 입니다.주식회사 원어스의 공지사항 입니다.`,
  imageUrl: '/sample-notice.jpg', // public 폴더에 이미지 위치
  fileName: '국가별_비례대표_선거_정치관계법_사례예시집.PDF',
  fileUrl: '/sample.pdf', // public 폴더에 파일 위치
};

// interface DetailPageProps {
//   params: { id: string };
// }

// const NoticeDetailPage = async ({ params }: DetailPageProps) => {
const NoticeDetailPage = async () => {
  // 실제로는 params.id로 fetch 등 데이터 조회
  const notice = dummyNotice; // 예시

  if (!notice) return notFound();

  return (
    <>
      <TitleComponent title="Notice." />
      <div className="min-h-screen bg-white font-pretendard px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-1/6 border-t border-gray-300 mb-18"></div>
          </div>
          <div className="w-fit mx-auto">
            {/* 타이틀 */}
            <h1 className="text-3xl font-bold text-center mb-2 text-black">
              {notice.title}
            </h1>
            {/* 메타 정보 */}
            <div className="flex items-start gap-8 text-sm text-gray-500 mb-2">
              <div>
                <span className="font-semibold">작성자</span> {notice.author}
              </div>
              <div>
                <span className="font-semibold">날짜</span> {notice.date}
              </div>
              <div>
                <span className="font-semibold">조회수</span> {notice.views}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-6" />

          {/* 본문 */}
          <div className="mt-8 mb-8 min-h-[400px] text-[15px] leading-relaxed whitespace-pre-line text-[#23263b]">
            {notice.content}
          </div>
          {/* 이미지 */}
          <div className="flex justify-center mb-8">
            {/* <img
              src={notice.imageUrl}
              alt="첨부 이미지"
              className="rounded-lg shadow max-w-xs"
            /> */}
          </div>
          {/* 첨부파일 */}
          <a
            href={notice.fileUrl}
            download
            className="ml-2 text-[#23263b] hover:text-blue-600"
            aria-label="파일 다운로드"
          >
            <div className="bg-[#e7eaf5] rounded-md px-4 py-3 flex items-center mb-8">
              <span className="flex-1 text-[#23263b] text-sm truncate">
                {notice.fileName}
              </span>

              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path
                  d="M10 3v10m0 0l4-4m-4 4l-4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="4"
                  y="17"
                  width="12"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
          {/* 목록 버튼 */}
          <div className="flex justify-center">
            <a
              href="/board"
              className="bg-[#2563eb] text-white px-8 py-2 rounded font-semibold text-lg hover:bg-[#1749b2] transition"
            >
              목록
            </a>
          </div>
        </div>
      </div>
      <Footer contactTheme={'blue'} />
    </>
  );
};

export default NoticeDetailPage;

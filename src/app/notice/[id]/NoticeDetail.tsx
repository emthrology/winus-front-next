// app/board/[id]/page.tsx

import { Notice } from '@/types/notice';
import React from 'react';

interface Props {
  notice: Notice;
}

// const NoticeDetailPage = async ({ params }: DetailPageProps) => {
const NoticeDetail = async ({ notice }: Props) => {
  return (
    <>
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
                <span className="font-semibold">날짜</span>{' '}
                {notice.created_at.getFullYear()}-
                {notice.created_at.getMonth() + 1}-{notice.created_at.getDate()}
              </div>
              <div>
                <span className="font-semibold">조회수</span>{' '}
                {notice.view_count}
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
            href={notice.file_url}
            download
            className="ml-2 text-[#23263b] hover:text-blue-600"
            aria-label="파일 다운로드"
          >
            <div className="bg-[#e7eaf5] rounded-md px-4 py-3 flex items-center mb-8">
              <span className="flex-1 text-[#23263b] text-sm truncate">
                {notice.file_url}
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
    </>
  );
};

export default NoticeDetail;

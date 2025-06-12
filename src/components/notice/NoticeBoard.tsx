// NoticeBoard.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // app router 기준
import Pagination from './Pagination';

type Notice = {
  id: number;
  title: string;
  author: string;
  date: string;
};

const dummyNotices: Notice[] = Array.from({ length: 102 }, (_, i) => ({
  id: 102 - i,
  title: '주식회사 윈어스의 공지사항 입니다.',
  author: '윈어스',
  date: '25.05.15',
}));

const PER_PAGE = 15;

const NoticeBoard: React.FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [searchType, setSearchType] = useState('제목');
  const [keyword, setKeyword] = useState('');

  // 검색 필터링
  const filtered = dummyNotices.filter((notice) => {
    if (!keyword.trim()) return true;
    if (searchType === '제목') return notice.title.includes(keyword);
    if (searchType === '작성자') return notice.author.includes(keyword);
    return true;
  });

  // 페이지네이션
  // const totalPage = Math.ceil(filtered.length / PER_PAGE);
  const startIdx = (page - 1) * PER_PAGE;
  const paged = filtered.slice(startIdx, startIdx + PER_PAGE);

  return (
    <div className="min-h-screen bg-white px-32 py-10 font-pretendard">
      {/* 검색 영역 */}
      <div className="flex justify-end mb-4 gap-2">
        <select
          className="border rounded px-2 py-1 text-sm text-[#23263b]"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="제목">제목</option>
          <option value="작성자">작성자</option>
        </select>
        <input
          className="border border-[#032FF4] placeholder-gray-400 rounded px-2 py-1 text-sm w-48"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setPage(1);
          }}
        />
        <button
          className="bg-[#2563eb] text-white px-4 py-1 rounded text-sm"
          onClick={() => setPage(1)}
        >
          검색
        </button>
      </div>
      {/* 테이블 */}
      <table className="w-full border-t border-[#d1d5db] text-center ">
        <thead>
          <tr className="bg-[#fff] text-[#727272] text-md">
            <th className="py-2 border-b border-[#d1d5db] w-36">NO.</th>
            <th className="py-2 border-b border-[#d1d5db]">제목</th>
            <th className="py-2 border-b border-[#d1d5db] w-64">작성자</th>
            <th className="py-2 border-b border-[#d1d5db] w-64">날짜</th>
          </tr>
        </thead>
        <tbody>
          {paged.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-8 text-gray-400">
                검색 결과가 없습니다.
              </td>
            </tr>
          ) : (
            paged.map((notice, idx) => (
              <tr
                key={notice.id}
                className={`${
                  idx % 2 == 0 ? 'bg-[#E1E6FE4D]' : 'bg-white'
                } text-[#000] cursor-default h-[64px]`}
                onClick={() => router.push(`/notice/${notice.id}`)}
              >
                <td className="py-2 border-b border-[#e5e7eb]">{notice.id}</td>
                <td className="py-2 border-b border-[#e5e7eb] text-left pl-4">
                  {notice.title}
                </td>
                <td className="py-2 border-b border-[#e5e7eb] text-[#727272]">
                  {notice.author}
                </td>
                <td className="py-2 border-b border-[#e5e7eb] text-[#727272]">
                  {notice.date}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* 페이지네이션 */}
      <Pagination
        total={filtered.length}
        page={page}
        setPage={setPage}
        perPage={PER_PAGE}
        visibleCount={4}
      />
    </div>
  );
};

export default NoticeBoard;

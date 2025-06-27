'use client';
import { SessionProvider } from 'next-auth/react';
import { Notice } from '@/types/notice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Pagination from './Pagination';
import WriteButton from './WriteButton';
import AdminTh from './AdminTh';
import AdminTd from './AdminTd';

interface Props {
  notices: Notice[];
  total: number;
  page: number;
  searchType: 'title' | 'author';
  keyword: string;
}

const PER_PAGE = 15;

export default function NoticeBoard({
  notices,
  total,
  page,
  searchType,
  keyword,
}: Props) {
  const router = useRouter();
  const [selectSearchType, setSelectSearchType] = useState(searchType);
  const [inputKeyword, setInputKeyword] = useState(keyword);

  // 검색/필터 변경 시 URL 쿼리 갱신
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (inputKeyword) params.set('keyword', inputKeyword);
    if (searchType)
      params.set('searchType', searchType === 'author' ? '내용' : '제목');
    params.set('page', '1');
    router.push(`/notice?${params.toString()}`);
  };

  const handlePageChange = (nextPage: number) => {
    const params = new URLSearchParams();
    if (inputKeyword) params.set('keyword', inputKeyword);
    if (searchType)
      params.set('searchType', searchType === 'author' ? '내용' : '제목');
    params.set('page', String(nextPage));
    router.push(`/notice?${params.toString()}`);
  };

  async function deletePost(postId: number) {
    const res = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      credentials: 'include', // 세션 인증 필요 시
    });
    if (res.ok) {
      alert('삭제되었습니다.');
      // 필요시 목록 갱신 등 추가 처리
      router.refresh();
    } else {
      alert('삭제 실패');
    }
  }

  return (
    <div className="min-h-screen max-w-[1536px] mx-auto px-6 bg-white py-10 ">
      {/* 검색 영역 */}
      <div className="flex flex-col items-end md:items-baseline md:flex-row justify-end mb-6 h-10 gap-2">
        <div className="h-full space-x-2">
          <SessionProvider>
            <WriteButton />
          </SessionProvider>
        </div>
        <div className="flex gap-2 h-full">
          <select
            className="border rounded px-2 py-1 text-sm text-[#23263b]"
            value={selectSearchType}
            onChange={(e) =>
              setSelectSearchType(e.target.value as 'title' | 'author')
            }
          >
            <option value="title">제목</option>
            <option value="author">내용</option>
          </select>
          <input
            className="border border-[#032FF4] placeholder-gray-400 rounded px-2 py-1 text-black text-sm w-48"
            placeholder="검색어를 입력하세요"
            value={inputKeyword}
            onChange={(e) => setInputKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <button
            className="bg-[#2563eb] text-white px-4 py-1 rounded text-sm"
            onClick={handleSearch}
          >
            검색
          </button>
        </div>
      </div>
      {/* 테이블 */}
      <table className="w-full border-t border-[#d1d5db] mt-4 text-center table-fixed">
        <thead>
          <tr className="bg-[#fff] text-[#727272] text-base">
            <th className="w-1/12 py-2 border-b border-[#d1d5db]">NO.</th>
            <th className="w-5/12 py-2 border-b border-[#d1d5db]">제목</th>

            <th className="w-2/12 py-2 border-b border-[#d1d5db]">날짜</th>
            <SessionProvider>
              <AdminTh />
            </SessionProvider>
          </tr>
        </thead>
        <tbody>
          {notices.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-8 text-gray-400">
                검색 결과가 없습니다.
              </td>
            </tr>
          ) : (
            notices.map((notice, idx) => (
              <tr
                key={notice.id}
                className={`${
                  idx % 2 == 0 ? 'bg-[#E1E6FE4D]' : 'bg-white'
                } text-[#000] cursor-pointer h-[64px]`}
                onClick={() => router.push(`/notice/${notice.id}`)}
              >
                <td className="py-2 border-b border-[#e5e7eb]">{notice.id}</td>
                <td className="py-2 border-b border-[#e5e7eb] text-left pl-4">
                  {notice.title}
                </td>
                <td className="py-2 border-b border-[#e5e7eb] text-[#727272]">
                  {notice.created_at.getFullYear().toString().slice(2)}.
                  {notice.created_at.getMonth() + 1}.
                  {notice.created_at.getDate()}
                </td>
                <SessionProvider>
                  <AdminTd postId={notice.id} handleDelete={deletePost} />
                </SessionProvider>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* 페이지네이션 */}
      <Pagination
        total={total}
        page={page}
        setPage={handlePageChange}
        perPage={PER_PAGE}
        visibleCount={4}
      />
    </div>
  );
}

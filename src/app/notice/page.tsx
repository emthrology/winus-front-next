// app/notice/page.tsx
import Footer from '@/components/common/Footer';
import TitleComponent from '@/components/common/TitleComponent';
import { SNoticeTableBody } from '@/actions/notice/SNoticeTableBody';
import { Suspense } from 'react';
import NoticeBoard from '@/components/notice/NoticeBoard';

// interface NoticePageProps {
//   searchParams: {
//     page?: string;
//     searchType?: string;
//     keyword?: string;
//   };
// }

export default async function NoticePage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    searchType?: string;
    keyword?: string;
  }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const searchType = params.searchType === '작성자' ? 'author' : 'title';
  const keyword = params.keyword || '';

  // 서버에서 데이터 패칭
  const { notices, total } = await SNoticeTableBody({
    page,
    perPage: 15,
    searchType,
    keyword,
  });

  return (
    <div className="w-screen">
      <TitleComponent title="Notice." />
      <Suspense fallback={<div>로딩 중...</div>}>
        <NoticeBoard
          notices={notices}
          total={total}
          page={page}
          searchType={searchType}
          keyword={keyword}
        />
      </Suspense>
      <Footer contactTheme={'blue'} />
    </div>
  );
}

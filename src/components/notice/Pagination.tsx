import React from 'react';

interface PaginationProps {
  total: number;
  page: number;
  setPage: (page: number) => void;
  perPage?: number;
  visibleCount?: number; // 한 번에 보여줄 페이지 개수 (기본값 4)
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  page,
  setPage,
  perPage = 10,
  visibleCount = 4,
}) => {
  const totalPage = Math.ceil(total / perPage);

  // 현재 페이지 그룹 계산
  const group = Math.floor((page - 1) / visibleCount);
  const start = group * visibleCount + 1;
  const end = Math.min(start + visibleCount - 1, totalPage);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleNext = () => {
    if (page < totalPage) setPage(page + 1);
  };

  return (
    <div className="flex justify-center mt-6 gap-1 select-none">
      <button
        className="w-8 h-8 rounded border bg-white text-gray-400 hover:text-blue-500 flex items-center justify-center"
        onClick={handlePrev}
        disabled={page === 1}
        aria-label="이전"
      >
        <span className="text-lg">&#60;</span>
      </button>
      {pages.map((num) => (
        <button
          key={num}
          className={`w-8 h-8 rounded border text-sm ${
            num === page
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
          }`}
          onClick={() => setPage(num)}
          disabled={num === page}
        >
          {num}
        </button>
      ))}
      <button
        className="w-8 h-8 rounded border bg-white text-gray-400 hover:text-blue-500 flex items-center justify-center"
        onClick={handleNext}
        disabled={page === totalPage}
        aria-label="다음"
      >
        <span className="text-lg">&#62;</span>
      </button>
    </div>
  );
};

export default Pagination;

import Image from 'next/image';
import React from 'react';
import { useIsLgUp } from '@/hooks/usePageSize';
export default function ElectionIntroFourthSection() {
  const isLgUp = useIsLgUp();
  return (
    <div className="w-full lg:min-h-[600px] h-fit pb-12 lg:pb-24 flex flex-col items-start bg-white">
      <div className=" max-w-[1536px] h-full px-6 mx-auto">
        {/* 상단 텍스트/버튼 등 */}
        <div className="flex w-full flex-col items-center sm:items-start mt-28 space-y-4">
          <p className="text-[#E93541] text-3xl sm:text-5xl font-normal leading-1 sm:leading-none">
            선거 시작 전
          </p>
          <p className="text-[#E93541] text-3xl sm:text-6xl font-semibold">
            메뉴얼북을 꼭 체크하세요
          </p>
        </div>
        <div className="w-full max-w-[1400px] mx-auto mt-20 flex flex-col lg:flex-row justify-center items-center gap-4 px-2 overflow-x-auto">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={`/images/election/intro/eletion_intro_book${
                isLgUp ? '1' : '2'
              }.png`}
              width={700}
              height={400}
              alt="books"
              className="w-full max-w-[700px] h-auto"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={`/images/election/intro/eletion_intro_book${
                isLgUp ? '2' : '1'
              }.png`}
              width={700}
              height={400}
              alt="books"
              className="w-full max-w-[700px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';

export default function ElectionIntroFourthSection() {
  return (
    <div className="w-full h-[900px] pt-12 flex flex-col items-start bg-white">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-28 space-y-4">
        <p className="text-[#E93541] text-5xl font-normal">선거 시작 전</p>
        <p className="text-[#E93541] text-6xl font-semibold">
          메뉴얼북을 꼭 체크하세요
        </p>
      </div>
      <div className="w-full mt-20">
        <Image
          src="/images/election/intro/eletion_intro_fourth.png"
          width={1582}
          height={462}
          alt="books"
        />
      </div>
    </div>
  );
}

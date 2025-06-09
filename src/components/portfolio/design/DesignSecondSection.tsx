'use client';
import React, { useState } from 'react';
import CarouselSecond from '../CarouselSecond';

export default function SecondSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  // 버튼 클릭 시 해당 인덱스 슬라이드로 이동
  const handleButtonClick = (idx: number) => {
    setActiveIndex(idx);
  };
  return (
    <div className="relative w-screen h-[900px] bg-white overflow-hidden">
      {/* 파란색 배경 (아래 깔림) */}
      <div className="absolute bottom-20 right-0 w-[80%] h-[45%] bg-[#032FF4] z-0" />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex flex-row w-full h-full pl-32">
        {/* 좌측: 버튼 + 텍스트 */}
        <div className="flex flex-col justify-start items-start min-w-[400px] mr-12">
          <p className="text-black text-lg font-[100] pb-4">DISPLAY</p>
          <p className="text-black text-5xl font-semibold mb-6">
            다각도의 디스플레이
          </p>
          <hr className="my-12 border-t-3 border-black w-[90%]" />
          <p className="font-thin text-zinc-500 mb-8">
            단순한 디스플레이 전시가 아닌
            <br />
            다각도에서 아름다움을 선사합니다.
          </p>
          {/* 버튼 그룹 */}
          <div className="flex flex-col gap-4">
            {['PRODUCT', 'EVENT', 'VIP LOUNGE'].map((label, idx) => (
              <button
                key={label}
                className={`border-2 border-[#0052ff] px-6 py-2 rounded-full font-semibold transition ${
                  activeIndex === idx
                    ? 'bg-[#0052ff] text-white'
                    : 'text-[#0052ff] hover:bg-[#0052ff] hover:text-white'
                }`}
                onClick={() => handleButtonClick(idx)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 우측: 슬라이더 (파란 배경 위에 겹치게) */}
        <div className="flex-1 flex items-end justify-end relative z-10">
          <div className="mb-[8rem]">
            {/* 파란 배경 위로 겹치게 마진 조정 */}
            <CarouselSecond
              activeIndex={activeIndex}
              onSlideClick={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

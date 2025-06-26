'use client';
import React, { useState } from 'react';
import DesolveImages from '../DesolveImages';
import Image from 'next/image';

export default function SecondSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      src: '/images/portfolio/design/swiper/portfolio_display_product.png',
      label: 'PRODUCT',
    },
    {
      src: '/images/portfolio/design/swiper/portfolio_display_event.png',
      label: 'EVENT',
    },
    {
      src: '/images/portfolio/design/swiper/portfolio_display_vipRounge.png',
      label: 'VIP LOUNGE',
    },
  ];
  // 버튼 클릭 시 해당 인덱스 슬라이드로 이동
  const handleButtonClick = (idx: number) => {
    setActiveIndex(idx);
  };
  return (
    <div className="w-screen relative min-h-[900px] bg-white">
      {/* 파란색 배경 (아래 깔림) */}
      <div className="hidden lg:block absolute bottom-35 right-0 max-w-[1350px] w-[80%] h-[45%] bg-[#032FF4] z-0" />
      {/* 우측: motion으로 사진 */}
      <div className="hidden absolute bottom-45 -right-[7%] lg:flex flex-row justify-center items-end space-x-4 min-w-[340px] lg:min-w-[700px] xl:min-w-[1000px]">
        <DesolveImages activeIndex={activeIndex} />
      </div>
      {/* 메인 콘텐츠 */}
      <div className="max-w-[1536px] px-6 mx-auto">
        <div className="relative z-10 flex flex-row w-full h-full">
          {/* 좌측: 버튼 + 텍스트 */}
          <div className="flex flex-col justify-start items-start min-w-[400px]">
            <p className="text-black text-2xl lg:text-lg font-noto font-[300] pb-2 lg:pb-4">
              DISPLAY
            </p>
            <p className="text-black text-[26px] sm:text-3xl lg:text-5xl font-semibold mb-6">
              다각도의 디스플레이
            </p>
            <hr className="hidden lg:inline my-12 border-t-3 border-black w-[90%]" />
            <p className="hidden lg:block font-thin text-zinc-500 mb-8">
              단순한 디스플레이 전시가 아닌
              <br />
              다각도에서 아름다움을 선사합니다.
            </p>
            {/* 버튼 그룹 */}
            <div className="hidden lg:flex flex-col gap-4">
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
        </div>
        {/* 모바일 사진들 */}
        <div className=" w-full lg:hidden flex flex-col items-center gap-6 ">
          {images.map((item, idx) => (
            <div
              key={item.label}
              className="relative rounded-2xl overflow-hidden  shadow-lg bg-white"
            >
              {/* 이미지 */}
              <Image
                src={item.src}
                alt={item.label}
                width={400}
                height={400}
                className="w-[400px] md:w-[600px] h-auto object-cover scale-100"
                priority={idx === 0}
              />
              {/* 레이블 버튼 */}
              <div className="absolute left-4 bottom-4 flex gap-2">
                <button
                  className="bg-[#032FF4] text-white text-lg font-semibold rounded-full w-36 py-1 shadow-md"
                  style={{ letterSpacing: '0.02em' }}
                >
                  {item.label}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

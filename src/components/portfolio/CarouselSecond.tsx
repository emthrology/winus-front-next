'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import Image from 'next/image';
// 샘플 이미지 배열
const images = [
  '/images/portfolio/design/swiper/portfolio_display_product.png',
  '/images/portfolio/design/swiper/portfolio_display_event.png',
  '/images/portfolio/design/swiper/portfolio_display_vipRounge.png',
];

interface SwiperSlideProps {
  activeIndex: number;
  onSlideClick: (idx: number) => void;
}

export default function CarouselSecond({
  activeIndex,
  onSlideClick,
}: SwiperSlideProps) {
  const sliderWidth = 720; // 슬라이드 너비
  const sliderHeight = 720; // 슬라이드 높이
  const swiperRef = useRef<SwiperClass | null>(null);
  // activeIndex가 바뀔 때마다 슬라이드 이동
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(activeIndex);
    }
  }, [activeIndex]);
  return (
    <div className="w-screen pt-8">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, EffectCreative]}
        loop
        slidesPerView="auto"
        spaceBetween={220}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          onSlideClick(swiper.realIndex);
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
            scale: 0.95,
          },
          next: {
            shadow: true,
            translate: ['100%', 70, 100],
            scale: 0.75,
          },
        }}
        onInit={(swiper) => {
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="!overflow-visible"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            style={{ width: `${sliderWidth}px` }}
            onClick={() => {
              if (idx === activeIndex) {
                // 현재 슬라이드 클릭: 다음 슬라이드로 이동
                const nextIdx = (activeIndex + 1) % images.length;
                onSlideClick(nextIdx);
              } else {
                // 다른 슬라이드 클릭: 해당 인덱스로 이동
                onSlideClick(idx);
              }
            }}
          >
            {/* SwiperSlide의 children을 함수로 받아 상태별로 렌더링 */}
            {({ isActive, isNext }) => (
              <div
                className="flex justify-end items-center bg-transparent "
                style={{
                  width: `${sliderWidth}px`,
                  height: `${sliderHeight - 20}px`,
                  display: isActive || isNext ? 'flex' : 'none', // 현재/다음만 보이게
                  borderRadius: '16px',
                  overflow: 'hidden',
                  // boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                }}
              >
                <Image
                  width={sliderWidth}
                  height={sliderHeight}
                  src={src}
                  alt={`slide-${idx}`}
                  objectFit="cover"
                  style={{
                    filter: isActive ? 'none' : 'brightness(1)',
                  }}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

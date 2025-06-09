'use client';

import React, { useRef } from 'react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import Image from 'next/image';
import { useSwiperRef } from '@/utils/useSwiperRef'; // 위에서 만든 훅
import Icon from '@mdi/react';
// 샘플 이미지 배열
const images = [
  '/images/portfolio/design/swiper/portfolio_design_carousel_1.png',
  '/images/portfolio/design/swiper/portfolio_design_carousel_2.png',
  '/images/portfolio/design/swiper/portfolio_design_carousel_3.png',
  '/images/portfolio/design/swiper/portfolio_design_carousel_4.png',
];

export default function CarouselFirst() {
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="w-screen pt-16">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, EffectCreative]}
        loop
        centeredSlides
        slidesPerView="auto"
        spaceBetween={14}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
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
            translate: ['120%', 0, -500],
            scale: 0.95,
          },
        }}
        navigation={{
          prevEl,
          nextEl,
        }}
        onInit={(swiper) => {
          // 커스텀 버튼 연결
          // @ts-expect-error Swiper navigation expects HTMLElement, but ref is possibly null at first render
          swiper.params.navigation.prevEl = prevElRef.current;
          // @ts-expect-error Swiper navigation expects HTMLElement, but ref is possibly null at first render
          swiper.params.navigation.nextEl = nextElRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="!overflow-visible"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[1020px]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <div className="w-[1020px] h-[500px] bg-transparent rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
              <Image
                src={src}
                alt={`slide-${idx}`}
                width={1020}
                height={500}
                className="w-full h-full object-cover mask-center"
                style={{ filter: 'brightness(0.95)' }}
              />
              {/* 오버레이 */}
              <div
                className={`overlay absolute inset-0 pointer-events-none transition-opacity`}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 커스텀 네비게이션 버튼 */}
      <button
        ref={prevElRef}
        className="absolute left-32 top-50 z-10 w-12 h-12 border-1 border-white  bg-transparent rounded-full flex items-center justify-center shadow-lg"
        aria-label="이전"
      >
        <Icon path={mdiChevronLeft} size={1.5} color="white" />
      </button>
      <button
        ref={nextElRef}
        className="absolute left-52 top-50 z-10 w-12 h-12 border-1 border-white bg-transparent rounded-full flex items-center justify-center shadow-lg"
        aria-label="다음"
      >
        <Icon path={mdiChevronRight} size={1.5} color="white" />
      </button>
    </div>
  );
}

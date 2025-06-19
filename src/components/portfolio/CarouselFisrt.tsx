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
  '/images/portfolio/design/swiper/portfolio_design_carousel_5.png',
  '/images/portfolio/design/swiper/portfolio_design_carousel_6.png',
];

export default function CarouselFirst() {
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <>
      {/* 커스텀 네비게이션 버튼 */}
      <div className="w-full flex justify-center lg:justify-start space-x-8 pt-4">
        <button
          ref={prevElRef}
          className="z-10 w-10 h-10 sm:w-12 sm:h-12 border-1 border-white  bg-transparent rounded-full flex items-center justify-center shadow-lg"
          aria-label="이전"
        >
          <Icon path={mdiChevronLeft} size={1.5} color="white" />
        </button>
        <button
          ref={nextElRef}
          className="z-10 w-10 h-10 sm:w-12 sm:h-12 border-1 border-white bg-transparent rounded-full flex items-center justify-center shadow-lg"
          aria-label="다음"
        >
          <Icon path={mdiChevronRight} size={1.5} color="white" />
        </button>
      </div>

      <div className="w-screen pt-4">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, EffectCreative]}
          loop
          centeredSlides
          slidesPerView="auto"
          spaceBetween={14}
          allowTouchMove={true}
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
              className="w-[90vw] max-w-[280px] sm:max-w-[475px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1000px] "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <div className="w-full h-[160px] sm:h-[260px] md:h-[300px] lg:h-[450px] xl:h-[500px] bg-transparent rounded-2xl shadow-xl overflow-hidden flex items-center justify-center relative">
                <Image
                  src={src}
                  alt={`slide-${idx}`}
                  fill
                  className="w-full h-full object-cover object-positionz mask-center scale-110"
                  style={{ filter: 'brightness(0.95)', objectPosition: 'top' }}
                />
                {/* 오버레이 */}
                <div
                  className={`overlay absolute inset-0 pointer-events-none transition-opacity`}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

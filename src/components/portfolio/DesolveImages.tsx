'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const images = [
  '/images/portfolio/design/swiper/portfolio_display_product.png',
  '/images/portfolio/design/swiper/portfolio_display_event.png',
  '/images/portfolio/design/swiper/portfolio_display_vipRounge.png',
];
export default function DesolveImages({
  activeIndex,
}: {
  activeIndex: number;
}) {
  // 나머지를 활용하여 다음 이미지src 찾아야함
  const [nextIndex, setNextIndex] = useState((activeIndex + 1) % images.length);
  useEffect(() => {
    setNextIndex((activeIndex + 1) % images.length);
  }, [activeIndex]);
  return (
    <>
      <div className="relative lg:w-[480px] lg:h-[480px] xl:w-[580px] xl:h-[580px] 2xl:w-[720px] 2xl:h-[720px]">
        <AnimatePresence>
          <motion.img
            key={`cur-${images[activeIndex]}`}
            src={images[activeIndex]}
            alt={`Display ${activeIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg z-20"
          />
        </AnimatePresence>
      </div>
      {/* 두 번째(오른쪽) 이미지 */}
      <div className="relative lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[540px] 2xl:h-[540px] ">
        <AnimatePresence>
          <motion.img
            key={`next-cur-${images[(nextIndex + 1) % images.length]}`}
            src={images[(nextIndex + 1) % images.length]}
            alt={`Display ${activeIndex + 2}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg z-2"
          />
        </AnimatePresence>
        <div
          className={`bg-[#001ea366] rounded-md z-12 absolute inset-0 pointer-events-none `}
        ></div>
      </div>
    </>
  );
}

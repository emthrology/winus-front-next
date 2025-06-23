import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ThirdSectionProps {
  images: string[] | undefined;
}

export default function ThirdSection({ images }: ThirdSectionProps) {
  return (
    <div className="w-screen relative flex flex-col justify-between pb-6 h-fit sm:h-[750px] md:h-[900px] lg:h-[1050px] xl:h-[1150px] 2xl:h-[1350px] bg-[linear-gradient(to_bottom,#fff_60%,#032FF4_40%)]">
      <div className="w-full h-full">
        {/* 상단 텍스트/버튼 등 */}
        <div className="flex w-full max-w-[1536px]  flex-col items-start mx-auto mt-12 sm:mt-28  px-6 ">
          <p className="text-black text-2xl lg:text-lg font-noto font-[300] pb-4">
            INTERIOR
          </p>
          <div className="flex justify-between w-full">
            <p className="text-black text-[26px] sm:text-3xl lg:text-5xl font-semibold">
              기성의 편리함, 맞춤의 감성으로
            </p>
          </div>
        </div>
        {/* 이미지 motions */}
        <div className="flex gap-2 sm:gap-4 justify-center py-8 sm:py-24">
          {images?.map((image, idx) => (
            <motion.div
              key={image}
              className="flex-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2,
                ease: 'easeInOut',
              }}
            >
              <div>
                {idx == 0 || idx == images.length - 1 ? (
                  <div className="w-full h-8 sm:h-16"></div>
                ) : null}
                <Image
                  src={image}
                  width={1146}
                  height={859}
                  alt={`Interior ${idx + 1}`}
                  className="w-full h-auto max-h-[900px] object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ThirdSectionProps {
  images: string[] | undefined;
}

export default function ThirdSection({ images }: ThirdSectionProps) {
  return (
    <div className="relative flex flex-col items-start w-full  h-[1350px] bg-[linear-gradient(to_bottom,#fff_50%,#032FF4_50%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-28 ">
        <p className="text-black text-lg font-[100] pb-4">INTERIOR</p>
        <div className="flex justify-between w-full">
          <p className="text-black text-5xl font-semibold">
            기성의 편리함, 맞춤의 감성으로
          </p>
        </div>
      </div>
      {/* 이미지 motions */}
      <div className="relative w-full flex gap-6 justify-center py-24">
        {images?.map((image, idx) => (
          <motion.div
            key={image}
            className="flex "
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
                <div className="h-16"></div>
              ) : null}
              <Image
                src={image}
                width={1146}
                height={859}
                alt={`Interior ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FourthSectionProps {
  images: string[] | undefined;
}

export default function FourthSection({ images }: FourthSectionProps) {
  return (
    <div className="flex items-center justify-center w-wcreen min-h-[800px] bg-white">
      <div className="max-w-[1536px] px-6 mx-auto">
        {/* 이미지 motions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 my-8 lg:my-0 ">
          {images?.map((image, idx) => (
            <motion.div
              key={image}
              className="relative w-[170px] h-[170px] sm:w-[260px] sm:h-[260px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] 2xl:w-[340px] 2xl:h-[340px] overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'easeInOut',
              }}
            >
              <Image
                src={image}
                fill
                alt={`Interior ${idx + 1}`}
                className="object-cover scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

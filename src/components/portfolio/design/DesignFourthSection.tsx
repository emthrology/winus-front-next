import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FourthSectionProps {
  images: string[] | undefined;
}

export default function FourthSection({ images }: FourthSectionProps) {
  return (
    <div className="flex items-center justify-center w-screen h-[1100px] bg-white">
      {/* 이미지 motions */}
      <div className="grid grid-cols-4 grid-rows-2 gap-0 w-fit mx-auto">
        {images?.map((image, idx) => (
          <motion.div
            key={image}
            className="relative flex justify-center items-center w-[370px] h-[370px] overflow-hidden rounded-lg"
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
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

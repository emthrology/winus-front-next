import Image from 'next/image';
import React from 'react';
import { useIsMdUp } from '@/hooks/usePageSize';
interface ImageData {
  title: string;
  image: string;
  description: string;
}

interface EventSecondSectionProps {
  images: ImageData[];
}
export default function EventSecondSection({
  images,
}: EventSecondSectionProps) {
  const isMdUp = useIsMdUp();
  return (
    <div className="relative w-screen h-fit bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 mb-8 md:mb-16">
        <p className="text-black text-lg font-[300] lg:pb-4">DISPLAY</p>
        <div className="flex items-center">
          <p className="text-black text-3xl lg:text-5xl font-semibold mr-4">
            경험에서 나오는 신뢰
          </p>
          <div className="basis-1/5 border-t-2 border-black"></div>
        </div>
      </div>
      {/* 이미지 */}
      <div className="flex flex-col md:flex-row">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="relative flex  items-start overflow-hidden justify-start w-full min-h-[480px] lg:min-h-[500px] xl:min-h-[600px] 2xl:min-h-[740px] px-32 md:mb-16 group"
          >
            <div className="w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover bg-bottom transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(0,19,105,0)] via-[rgba(0,19,105,0.3)] to-[rgba(0,19,105,0.65)] transition-opacity duration-300 group-hover:opacity-0 pointer-events-none
                ${
                  isMdUp
                    ? 'bg-gradient-to-b from-[rgba(0,19,105,0)] via-[rgba(0,19,105,0.3)] to-[rgba(0,19,105,0.65)]'
                    : ''
                }`}
              style={
                !isMdUp
                  ? {
                      background:
                        'linear-gradient(180deg, rgba(0, 19, 105, 0.00) 59.86%, rgba(0, 19, 105, 0.65) 100%)',
                    }
                  : {}
              }
            />
            {/* 텍스트는 항상 보이게 */}
            <div className="absolute bottom-0 left-0 p-8 w-full h-full flex flex-col justify-end z-10">
              <p className="text-white text-xl font-semibold">{item.title}</p>
              <p className="text-white text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

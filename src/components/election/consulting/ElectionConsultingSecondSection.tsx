import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIsMdUp } from '@/hooks/usePageSize';
interface Box {
  subtitle: string;
  title: string;
  image: string;
  defs: string[];
}

interface SecondSectionProps {
  boxData: Box[];
}

export default function ElectionConsultingSecondSection({
  boxData,
}: SecondSectionProps) {
  const isMdUp = useIsMdUp();
  return (
    <div className="w-full min-h-[1100px] py-12 mt-24 flex flex-col items-start bg-white">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center sm:my-16 space-y-4 ">
        <p className="text-[#E93541] text-4xl sm:text-5xl font-normal leading-[0.5] sm:leading-none lg:leading-none">
          후보님께 약속드리는
        </p>
        <p className="text-[#E93541] text-4xl sm:text-6xl font-bold">
          윈어스가 이기는 방식
        </p>
      </div>
      {/* boxes */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-12 w-fit mx-auto px-6">
        {boxData.map((box, idx) => (
          <motion.div
            key={box.title}
            className="relative flex flex-col justify-center md:justify-evenly items-center pt-12 pb-4 sm:py-12  
            md:w-[400px] aspect-[11/7] md:aspect-[3/4] lg:w-[320px]  xl:w-[400px] 2xl:w-[500px]  bg-white shadow-[0_1px_4px_2px_rgba(230,30,43,0.75)] rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.148,
              ease: 'easeInOut',
            }}
          >
            {!isMdUp && (
              <Image
                src={box.image}
                width={248}
                height={189}
                alt="box_icon"
                className="w-1/5 sm:w-1/3 h-auto mt-[-30px] mb-8"
              />
            )}
            {!isMdUp && (
              <div className="flex flex-col items-center">
                <p className="text-[26px] 2xl:text-[32px] font-[400] text-[#E93541] leading-none">
                  {box.subtitle}
                </p>
                <p className="text-[30px] lg:text-[38px] 2xl:text-[42px] font-bold text-[#E93541] mb-2">
                  {box.title}
                </p>
              </div>
            )}
            <div className="hidden md:flex flex-col items-center">
              <p className="text-[26px] 2xl:text-[32px] font-[400] text-[#E93541] mb-2">
                {box.subtitle}
              </p>
              <p className="text-[30px] lg:text-[38px] 2xl:text-[42px] font-bold text-[#E93541]">
                {box.title}
              </p>
            </div>

            <Image
              src={box.image}
              width={248}
              height={189}
              alt="box_icon"
              className="hidden md:block w-1/3 h-auto mt-[-30px]"
            />

            {/* defs-pc */}
            <div className="hidden md:flex flex-col items-center">
              {box.defs.map((definition, innerIdx) => (
                <p key={innerIdx} className="text-xl text-[#727272]">
                  {definition}
                </p>
              ))}
            </div>
            {/* defs-mobile */}
            <div className="md:hidden text-center">
              {box.defs.map((definition, innerIdx) => (
                <>
                  <span
                    className="text-xl text-[#727272] font-[300]"
                    key={innerIdx}
                  >
                    {definition}
                  </span>
                  {innerIdx == 0 && <br key={`br-${innerIdx}`} />}
                </>
              ))}
            </div>

            {/* 가운데 짧은 hr(구분선) */}
            <hr
              className="
              hidden 
              md:inline
      absolute left-1/2 bottom-10 
      -translate-x-1/2 
      w-48 border-t-2 border-[#E61E2B] opacity-80
      z-10
    "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

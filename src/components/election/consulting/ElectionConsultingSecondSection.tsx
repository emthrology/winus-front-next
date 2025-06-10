import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
  return (
    <div className="w-full h-[1100px] pt-12 flex flex-col items-start bg-white">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center pl-32 my-16 space-y-4 ">
        <p className="text-[#E93541] text-5xl font-normal">
          후보님께 약속드리는
        </p>
        <p className="text-[#E93541] text-6xl font-semibold">
          윈어스가 이기는 방식
        </p>
      </div>
      {/* boxes */}
      <div className="mt-12 grid grid-cols-3 grid-rows-1 gap-12 w-fit mx-auto">
        {boxData.map((box, idx) => (
          <motion.div
            key={box.title}
            className="relative flex flex-col justify-evenly items-center w-[500px] h-[654px] bg-white shadow-[0_1px_4px_2px_rgba(230,30,43,0.75)] rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.148,
              ease: 'easeInOut',
            }}
          >
            <div className="flex flex-col items-center">
              <p className="text-[32px] font-[400] text-[#E93541] mb-2">
                {box.subtitle}
              </p>
              <p className="text-[42px] font-bold text-[#E93541]">
                {box.title}
              </p>
            </div>

            <Image
              src={box.image}
              width={248}
              height={189}
              alt="box_icon"
              className="mt-[-30px]"
            />

            <div className="flex flex-col items-center">
              {box.defs.map((definition, innerIdx) => (
                <p key={innerIdx} className="text-xl text-[#727272]">
                  {definition}
                </p>
              ))}
            </div>

            {/* 가운데 짧은 hr(구분선) */}
            <hr
              className="
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

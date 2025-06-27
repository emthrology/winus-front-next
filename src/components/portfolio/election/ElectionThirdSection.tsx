import React from 'react';
import { motion } from 'framer-motion';
interface boxData {
  title: string;
  defs: string[];
}

interface FourthSectionProps {
  list: boxData[];
}

export default function ElectionThirdSection({ list }: FourthSectionProps) {
  return (
    <div className="w-screen h-fit px-6 py-16 bg-[linear-gradient(180deg,#FFE5E7_0%,#FFF_100%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="max-w-[1536px] mx-auto ">
        <p className="text-black text-lg font-[300] lg:pb-4">SINCERITY</p>
        <div className="flex justify-between w-full pb-16">
          <p className="text-black text-3xl lg:text-5xl font-semibold">
            후보님이 인정하는 윈어스
          </p>
        </div>
      </div>
      {/* boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 sm:gap-12 w-fit mx-auto">
        {list.map((item, idx) => (
          <motion.div
            key={item.title}
            className="relative flex flex-col justify-center items-start p-8 sm:pl-20 min-w-[340px] sm:w-[480px] xl:w-[550px] 2xl:w-[654px] min-h-[200px] sm:h-[310px] bg-white shadow-[0_1px_4px_2px_rgba(230,30,43,0.75)] rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: 'easeInOut',
            }}
          >
            <p className="text-2xl sm:text-4xl font-bold text-[#E93541] mb-2 sm:mb-8">
              {item.title}
            </p>
            {item.defs.map((definition, innerIdx) => (
              <p key={innerIdx} className="text-base sm:text-xl text-gray-700">
                {definition}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

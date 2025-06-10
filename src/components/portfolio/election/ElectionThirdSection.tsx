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
    <div className="w-full h-[1100px] flex flex-col items-start bg-[linear-gradient(180deg,#FFE5E7_0%,#FFF_100%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-28">
        <p className="text-black text-lg font-[100]">SINCERITY</p>
        <div className="flex justify-between w-full pb-16">
          <p className="text-black text-[60px] font-semibold">
            후보님이 인정하는 윈어스
          </p>
        </div>
      </div>
      {/* boxes */}
      <div className="grid grid-cols-2 grid-rows-2 gap-12 w-fit mx-auto">
        {list.map((item, idx) => (
          <motion.div
            key={item.title}
            className="relative flex flex-col justify-center items-start pl-20 w-[654px] h-[310px] bg-white shadow-[0_1px_4px_2px_rgba(230,30,43,0.75)] rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: 'easeInOut',
            }}
          >
            <p className="text-4xl font-bold text-[#E93541] mb-8">
              {item.title}
            </p>
            {item.defs.map((definition, innerIdx) => (
              <p key={innerIdx} className="text-xl text-gray-700">
                {definition}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

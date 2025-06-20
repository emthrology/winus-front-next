import React from 'react';
import OverlapImages from './OverlapImages';
import { motion } from 'framer-motion';
export default function ElectionMovementThirdSection() {
  return (
    <div className="w-screen min-h-[1700px] bg-[linear-gradient(180deg,#FFF_0%,#FFE5E7_50%,#FFF_70%)] py-18">
      <div className="max-w-[1536px] mx-auto">
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-start px-6 py-24">
          <p className="text-[#E61E2B] text-[42px] font-normal">
            선거운동의 심장
          </p>
          <p className="text-[#E61E2B] text-[60px] font-bold mb-4">
            에너지가 넘치는 젊은 선거운동원
          </p>
        </div>
      </div>
      <OverlapImages />
      {/* buttons */}
      <div className="grid grid-cols-3 grid-rows-2 gap-12 w-fit mt-64 mx-auto">
        {[
          '선거운동원 확보',
          '유세댄스 제작',
          '청년층 선거운동원',
          '에너지와 현장 활력',
          '전국구 활동 가능',
          '선거 이미지 개선',
        ].map((button, idx) => (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.2,
              ease: 'easeInOut',
            }}
            className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[60px] w-[400px] font-[500] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]"
            onClick={() => {}}
            key={idx}
          >
            {button}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

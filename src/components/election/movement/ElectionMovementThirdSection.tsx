import React from 'react';
import OverlapImages from './OverlapImages';
import { motion } from 'framer-motion';
export default function ElectionMovementThirdSection() {
  return (
    <div className="w-screen h-fit bg-[linear-gradient(180deg,#FFF_0%,#FFE5E7_50%,#FFF_70%)] lg:py-18 px-6">
      <div className="max-w-[1536px] mx-auto">
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-start pb-12 lg:py-24">
          <p className="text-[#E93541] text-[24px] sm:text-[40px] md:text-[48px] font-normal pt-4 leading-[1.0]">
            선거운동의 심장
          </p>
          <p className="text-[#E93541] tracking-tight text-[27px] sm:text-[46px] md:text-[60px] font-semibold sm:pb-4">
            에너지가 넘치는 젊은 선거운동원
          </p>
        </div>
      </div>
      <OverlapImages />
      {/* buttons */}
      <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4 xl:gap-12 w-fit mt-32 lg:mt-64 mx-auto">
        {[
          '선거운동원 확보',
          '유세댄스 제작',
          '청년층 선거운동원',
          '에너지와 현장활력',
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
            className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[60px] lg:w-[330px] xl:w-[400px] font-[500] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]"
            onClick={() => {}}
            key={idx}
          >
            {button}
          </motion.button>
        ))}
      </div>
      {/* buttons-mobile */}
      <div className="lg:hidden flex flex-col gap-2 w-full max-w-[410px] py-12 mx-auto">
        {[
          ['선거운동원 확보', '유세댄스 제작'],
          ['청년층 선거운동원'],
          ['에너지와 현장활력', '전국구 활동 가능'],
          ['선거 이미지 개선'],
        ].map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex justify-evenly w-full gap-4 ${
              row.length === 1 ? 'justify-center' : ''
            }`}
          >
            {row.map((label, idx) => (
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.2,
                  ease: 'easeInOut',
                }}
                className={`${
                  row.length == 1 ? 'min-w-[200px]' : 'flex-1'
                } border border-[#E93541] bg-[#E93541] text-white text-[15px] xl:text-[30px] rounded-[40px] h-[40px] max-w-[400px] px-6 font-[500] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]`}
                onClick={() => {}}
                key={idx}
              >
                {label}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';
import SecondSectionBottomImages from './secondSection/SecondSectionBottomImages';
import { motion } from 'framer-motion';
export default function ElectionMovementSecondSection() {
  return (
    <div className="w-screen min-h-[700px] overflow-hidden bg-white py-18">
      <div className="max-w-[1536px] mx-auto">
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-start px-6 pb-12 lg:py-24">
          <p className="text-[#E93541] text-[30px] sm:text-[48px] font-normal pt-4 leading-[1.0]">
            선거운동의 꽃
          </p>
          <p className="text-[#E93541] text-[36px] sm:text-[60px] font-semibold sm:pb-4">
            선거 차량 자체보유
          </p>
        </div>
      </div>

      {/* 차량 소개 */}
      <div className="flex justify-center items-center w-full lg:py-0 px-6">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-4 mx-auto px-4 w-full">
          {/* 이미지 영역 */}
          <div className="relative w-full lg:min-w-[630px] max-w-[1070px] aspect-[1070/560]">
            <Image
              src="/images/election/movement/election_movement_second_1.png"
              alt="car"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1070px) 100vw, 1070px"
            />
          </div>
          {/* lg 이상에서는 기존처럼 옆에 버튼 */}
          <div className="hidden lg:flex flex-col justify-center gap-8 w-fit min-w-[410px]">
            {[
              { label: '보유차량으로', strong: '빠르고 유연한 대응' },
              { label: '외주가 없어', strong: '비용 부담 최소화' },
              { label: '차량부터 운용까지', strong: '원스톱 관리' },
            ].map((button, idx) => (
              <motion.button
                key={idx}
                className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[70px] w-full font-[400] max-w-[460px] mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.148,
                  ease: 'easeInOut',
                }}
                onClick={() => {}}
              >
                {button.label} <b>{button.strong}</b>
              </motion.button>
            ))}
          </div>
          {/* lg 이하에서만 겹치게 */}
          <div className="flex flex-col items-center w-full mt-[-15%] sm:mt-[-10%] lg:hidden z-10">
            {[
              { label: '보유차량으로', strong: '빠르고 유연한 대응' },
              { label: '외주가 없어', strong: '비용 부담 최소화' },
              { label: '차량부터 운용까지', strong: '원스톱 관리' },
            ].map((button, idx) => (
              <motion.button
                key={idx}
                className="border border-[#E93541] bg-[#E93541] text-white text-xl sm:text-2xl rounded-[40px] h-[55px] w-full font-[400] mx-auto mb-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.148,
                  ease: 'easeInOut',
                }}
                onClick={() => {}}
              >
                {button.label} <b>{button.strong}</b>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      {/* bottom images */}
      <SecondSectionBottomImages />
    </div>
  );
}

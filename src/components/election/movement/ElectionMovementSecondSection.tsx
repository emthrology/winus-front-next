import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
export default function ElectionMovementSecondSection() {
  return (
    <div className="w-screen min-h-[700px] bg-white py-18">
      <div className="max-w-[1536px] mx-auto">
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-start px-6 py-24">
          <p className="text-[#E61E2B] text-[42px] font-normal">
            선거운동의 꽃
          </p>
          <p className="text-[#E61E2B] text-[60px] font-bold mb-4">
            선거 차량 자체보유
          </p>
        </div>
      </div>

      {/* 차량 소개 */}
      <div className="flex justiy-center gap-24 items-center px-32">
        <Image
          src="/images/election/movement/election_movement_second_1.png"
          width={1070}
          height={560}
          alt="car"
        />
        <div className="flex flex-col justify-center gap-8">
          {[
            {
              label: '보유차량으로',
              strong: '빠르고 유연한 대응',
            },
            {
              label: '외주가 없어',
              strong: '비용 부담 최소화',
            },
            {
              label: '차량부터 운용까지',
              strong: '원스톱 관리',
            },
          ].map((button, idx) => (
            <motion.button
              key={idx}
              className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[70px] w-[450px] font-[400]"
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
      {/* mv images */}
      <div className="w-full flex justify-between gap-4 my-16">
        {[
          'election_movement_second_2.png',
          'election_movement_second_3.png',
          'election_movement_second_4.png',
        ].map((image, idx) => (
          <Image
            key={idx}
            src={`/images/election/movement/${image}`}
            width={650}
            height={368}
            alt="mvs"
          />
        ))}
      </div>
    </div>
  );
}

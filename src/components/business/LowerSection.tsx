import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import ShadowCircle from '../common/ShadowCircle';
interface CircleProps {
  title: string;
  image: string;
}

interface SectionTheme {
  theme: string;
  circleData: CircleProps[];
}

export default function LowerSection({ theme, circleData }: SectionTheme) {
  const bgThemeClass =
    {
      blue: 'bg-[#032FF4]',
      red: 'bg-[#E61E2B]',
    }[theme] || 'bg-black';
  const textThemeClass =
    {
      blue: 'text-[#032FF4]',
      red: 'text-[#E61E2B]',
    }[theme] || 'text-black';
  return (
    <div
      className={`w-screen min-h-[550px] ${bgThemeClass} flex flex-col items-center justify-evenly`}
    >
      <h1 className="text-[60px] font-bold text-white">DESIGN PROCESS</h1>
      <div className="flex justify-center items-center py-10 gap-[-32px]">
        {circleData.map((item, idx) => (
          <div
            key={item.title}
            className="flex flex-col items-center w-[180px] mx-2"
            style={{ zIndex: circleData.length - idx }} // 왼쪽이 더 높은 z-index
          >
            <motion.div
              // className={`w-[220px] h-[220px] rounded-full bg-white ${shadowThemeClass} flex flex-col items-center justify-center`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.43,
                delay: (idx + 1) * 0.145,
                ease: 'easeInOut',
              }}
            >
              <ShadowCircle color={theme} diameter={220}>
                {/* item 타이틀 */}
                <p className="font-bold text-lg text-black mb-3">
                  {`STEP ${idx + 1}`}
                </p>
                {/* 아이콘 */}
                <Image
                  width={55}
                  height={60}
                  src={item.image}
                  alt={item.title}
                />
                {/* 설명 라벨 */}
                <p className={`mt-6 font-bold ${textThemeClass}`}>
                  {item.title}
                </p>
              </ShadowCircle>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
interface Procon {
  cons: string;
  pros1: string;
  pros2: string;
}

interface FirstSectionProsConsProps {
  proscons: Procon[];
}

export default function firstSectionProsCons({
  proscons,
}: FirstSectionProsConsProps) {
  return (
    <div className="w-full max-w-[1500px] mx-auto my-16 px-6">
      {/* 비교 항목 */}
      <div className="flex flex-col gap-6">
        {/* 헤더 */}
        <div className="hidden md:flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
          <div className="w-full md:w-[300px] text-[#727272] text-xl md:text-2xl font-semibold text-center">
            타 선거기획사
          </div>
          <div className="hidden md:block w-[220px]"></div>
          <div className="ml-0 md:ml-12 flex justify-center items-center w-full md:w-[730px]">
            <div className="w-full h-[60px] md:h-[100px] flex justify-center items-center px-2 md:px-6 bg-white">
              <span className="ml-2 text-[#E61E2B] text-2xl md:text-3xl font-bold">
                윈어스 자체제작
              </span>
            </div>
          </div>
        </div>
        {proscons.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0"
          >
            {/* 왼쪽 cons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2,
                ease: 'easeInOut',
              }}
              className="w-full md:w-[300px] text-[#727272] text-xl md:text-xl xl:text-2xl text-center"
            >
              {item.cons}
            </motion.div>
            {/* 가운데 화살표-pc */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2,
                ease: 'easeInOut',
              }}
              className="hidden md:block w-[220px]"
            >
              <Image
                src="/images/half_right_arrow.png"
                width={220}
                height={27}
                alt="half arrow right"
              />
            </motion.div>
            {/* 가운데 화살표-mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.2,
                ease: 'easeInOut',
              }}
              className="md:hidden block"
            >
              <Image
                src="/images/half_down_arrow_mobile.png"
                width={10}
                height={4}
                alt="half arrow right"
              />
            </motion.div>
            {/* 오른쪽 pros */}
            <div className="ml-0 md:ml-12 flex justify-center items-center w-full md:w-[730px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.2,
                  ease: 'easeInOut',
                }}
                className="w-full h-[60px] md:h-[100px] flex justify-center items-center border-2 border-[#E61E2B] rounded-2xl px-2 md:px-6 bg-white md:shadow-none shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
              >
                <span className="text-[#E61E2B] text-xl lg:text-2xl xl:text-3xl font-normal">
                  {item.pros1}
                </span>
                <span className="ml-2 text-[#E61E2B] text-xl lg:text-2xl xl:text-3xl font-bold">
                  {item.pros2}
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

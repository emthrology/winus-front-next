import NestingCircle from '@/components/common/NestingCircle';
import React from 'react';
import { motion } from 'framer-motion';
import ShadowCircle from '@/components/common/ShadowCircle';
import Image from 'next/image';
const circleData = [
  {
    title: '경영관리본부',
    def: 'Business Management Division',
  },
  {
    title: '전략기획실',
    def: 'Strategy Office',
  },
  {
    title: '비주얼디자인본부',
    def: 'Visual Strategy Lab',
  },
  {
    title: '미디어연출본부',
    def: 'Media Direction Division',
  },
  {
    title: '공보전략본부',
    def: 'Press Strategy Office',
  },
];
export default function Organizatino_component() {
  return (
    <>
      <div className="flex flex-col w-screen">
        <div className="mt-[-60px] flex flex-col items-start pl-32">
          <p className="text-black text-[42px] font-normal">
            가치를 찾아내는 시작점,
          </p>
          <p className="text-black text-[60px] font-bold">
            믿을 수 있는 든든한 전문가
          </p>
        </div>
        <div className="mt-32 flex flex-col items-center">
          <NestingCircle
            src={'/images/winus_logo_simple.png'}
            iconWidth={160}
            color="blue"
          />
          <Image
            className="z-1 mt-12 mb-[-50px]"
            src={'/images/Rectangle_25.png'}
            alt=""
            width={780}
            height={76}
          />
          <div className="z-2 flex justify-center items-center py-10">
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
                  <ShadowCircle color={'blue'} diameter={220}>
                    {/* item 타이틀 */}
                    <p className="font-bold text-[22px] text-[#032FF4] mb-2">
                      {item.title}
                    </p>
                    {/* 설명 라벨 */}
                    <p className={`text-zinc-400 font-[100] text-sm`}>
                      {item.def}
                    </p>
                  </ShadowCircle>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useIsLgUp, useIsMdUp } from '@/hooks/usePageSize';
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
    title: '비주얼\n디자인본부',
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
  const isMdUp = useIsMdUp();
  const isLgUp = useIsLgUp();
  return (
    <>
      <div className="w-full max-w-[1536px] px-6 mx-auto flex flex-col ">
        <div className="flex flex-col items-start">
          <p className="text-black text-3xl lg:text-[42px] font-normal">
            가치를 찾아내는 시작점,
          </p>
          <p className="text-black text-3xl lg:text-5xl font-bold">
            믿을 수 있는 든든한 전문가
          </p>
        </div>
        <div className="mt-8 lg:mt-32 flex flex-col items-center">
          {/* <NestingCircle
            src={'/images/winus_logo_simple.png'}
            iconWidth={160}
            color="blue"
          />*/}
          <Image
            src={'/images/about/about_organ_logo.png'}
            alt="Organization Logo"
            width={isMdUp ? 270 : 200}
            height={isMdUp ? 260 : 195}
          />
          <Image
            className="z-1 mt-12 mb-[-45px]"
            src={'/images/Rectangle_25.png'}
            alt=""
            width={isLgUp ? 780 : 320}
            height={76}
          />
          {/* pc */}
          <div className="hidden z-2 lg:not-last:flex justify-center items-center py-10">
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
          {/* mobile */}
          <div className="py-8 w-full">
            <div className="lg:hidden z-2 flex justify-center items-center">
              {circleData.map(
                (item, idx) =>
                  idx < 3 && (
                    <div
                      key={item.title}
                      className="flex flex-col items-center min-w-[160px] mx-[-20px]"
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
                        <ShadowCircle color={'blue'} diameter={140}>
                          {/* item 타이틀 */}
                          <p className="font-bold text-[15px] text-[#032FF4] whitespace-pre-line text-center mb-2">
                            {item.title}
                          </p>
                          {/* 설명 라벨 */}
                          {/* <p className={`text-zinc-400 font-[100] text-sm`}>
                            {item.def}
                          </p> */}
                        </ShadowCircle>
                      </motion.div>
                    </div>
                  )
              )}
            </div>
            <div className="lg:hidden z-2 flex justify-center items-center">
              {circleData.map(
                (item, idx) =>
                  idx >= 3 && (
                    <div
                      key={item.title}
                      className="flex flex-col items-center min-w-[160px] mx-[-20px]"
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
                        <ShadowCircle color={'blue'} diameter={140}>
                          {/* item 타이틀 */}
                          <p className="font-bold text-[15px] text-[#032FF4] whitespace-pre-line text-center mb-2">
                            {item.title}
                          </p>
                          {/* 설명 라벨 */}
                          {/* <p className={`text-zinc-400 font-[100] text-sm`}>
                            {item.def}
                          </p> */}
                        </ShadowCircle>
                      </motion.div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

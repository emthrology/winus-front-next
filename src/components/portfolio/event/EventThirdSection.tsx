import NestingCircle from '@/components/common/NestingCircle';
import { useIsLgUp, useIsSmUp } from '@/hooks/usePageSize';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import React from 'react';

interface PropsData {
  def1: string;
  def2: string;
}

interface EventThirdSectionProps {
  circleData: PropsData[];
}
export default function EventThirdSection({
  circleData,
}: EventThirdSectionProps) {
  const isLgUp = useIsLgUp();
  const isSmUp = useIsSmUp();
  return (
    <>
      <div className="w-screen bg-[#e1e6fe] h-[500px] flex flex-row justify-center items-center sm:space-x-4 2xl:space-x-8">
        <div className="hidden xl:block">
          <NestingCircle
            src={'/images/portfolio/logo_portfolio_circle.png'}
            iconWidth={160}
            color="blue"
            diameterOutter={isLgUp ? 200 : 120}
            diameterInner={isLgUp ? 180 : 110}
          />
        </div>
        <div className="hidden xl:block">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.43,
              delay: 0.145,
              ease: 'easeInOut',
            }}
          >
            <Icon path={mdiArrowRight} size={3} color="#032ff4" />
          </motion.div>
        </div>

        <div className="z-2 flex justify-center items-center py-10">
          {circleData.map((item, idx) => (
            <div
              key={item.def1}
              className={`flex flex-col items-center ${
                isSmUp ? ' w-[180px] mx-2' : 'min-w-[150px] mx-[-9px]'
              }`}
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
                <div
                  style={{
                    width: isSmUp ? 220 : 145,
                    height: isSmUp ? 220 : 145,
                  }}
                  className={` rounded-full bg-transparent border-2 sm:border-3 border-[#032ff4] flex flex-col items-center justify-center`}
                >
                  {/* item 타이틀 */}
                  <p className="font-bold text-base sm:text-xl text-[#032FF4]">
                    {item.def1}
                  </p>
                  {/* 설명 라벨 */}
                  <p className="font-bold text-base sm:text-xl text-[#032FF4]">
                    {item.def2}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="hidden xl:block">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.43,
              delay: circleData.length * 0.145,
              ease: 'easeInOut',
            }}
          >
            <Icon path={mdiArrowRight} size={3} color="#032ff4" />
          </motion.div>
        </div>
        <div className="hidden xl:block">
          <NestingCircle
            iconWidth={160}
            color="blue"
            diameterOutter={isLgUp ? 200 : 120}
            diameterInner={isLgUp ? 180 : 110}
          >
            <b className="text-white text-4xl font-normal">행사</b>
          </NestingCircle>
        </div>
      </div>
    </>
  );
}

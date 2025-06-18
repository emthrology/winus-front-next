import React from 'react';
import NestingCircle from '../common/NestingCircle';
import { useIsLgUp } from '@/hooks/usePageSize';
import { motion } from 'framer-motion';

interface CirclePropData {
  title: string;
  def1: string;
  def2: string;
  image: string;
}

interface UpperSectionData {
  title: string;
  subtitle: string;
  circleData: CirclePropData[];
  theme: string;
}
export default function UpperSection({
  title,
  subtitle,
  circleData,
  theme,
}: UpperSectionData) {
  const isLgUp = useIsLgUp();
  const themeClass =
    {
      blue: 'text-[#032FF4]',
      red: 'text-[#E61E2B]',
    }[theme] || 'bg-black';
  return (
    <div className="w-screen bg-white py-12 md:py-0">
      <div className=" min-h-[600px]  max-w-[1536px] px-6 space-y-8 mx-auto flex flex-col justify-between">
        <div className="flex flex-col justify-start items-start">
          <p className="text-black text-[32px] md:text-[42px] font-normal">
            {subtitle}
          </p>
          <p className="text-black text-[32px] md:text-[60px] font-bold">
            {title}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center text-center md:space-x-32 space-y-4 text-black font-thin">
          {circleData.map((item, idx) => (
            <motion.div
              className="flex flex-row md:flex-col md:justify-start md:items-center justify-center items-center space-x-4 "
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (idx + 1) * 0.2,
                ease: 'easeInOut',
              }}
            >
              <NestingCircle
                iconWidth={isLgUp ? 100 : 70}
                src={item.image}
                color={theme}
                diameterOutter={isLgUp ? 240 : 160}
                diameterInner={isLgUp ? 220 : 140}
              />
              <div className="md:w-fit w-[200px] text-left md:text-center text-[16px]">
                <p className={`${themeClass} font-noto font-bold md:mt-4`}>
                  {item.title}
                </p>
                <p className="text-[14px] sm:text-[16px]">{item.def1}</p>
                <p className="text-[14px] sm:text-[16px]">{item.def2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

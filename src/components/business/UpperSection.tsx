import React from 'react';
import NestingCircle from '../common/NestingCircle';
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
  const themeClass =
    {
      blue: 'text-[#032FF4]',
      red: 'text-[#E61E2B]',
    }[theme] || 'bg-black';
  return (
    <div className="w-screen min-h-[600px] bg-white flex flex-col justify-evenly">
      <div className="flex flex-col justify-start items-start pl-32">
        <p className="text-black text-[42px] font-normal">{subtitle}</p>
        <p className="text-black text-[60px] font-bold">{title}</p>
      </div>
      <div className="flex justify-center space-x-36 text-center space-y-4 text-black font-thin">
        {circleData.map((item, idx) => (
          <motion.div
            className="flex flex-col items-center"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: (idx + 1) * 0.2,
              ease: 'easeInOut',
            }}
          >
            <NestingCircle iconWidth={100} src={item.image} color={theme} />
            <p className={`${themeClass} font-bold mt-4`}>{item.title}</p>
            <p>{item.def1}</p>
            <p>{item.def2}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
interface Box {
  title: string;
  defs: string[];
}
interface Step {
  num: string;
  label: string;
}

interface ThirdSectionProps {
  boxData: Box[];
  steps: Step[];
}
export default function ElectionConsultingThirdSection({
  boxData,
  steps,
}: ThirdSectionProps) {
  return (
    <div className="relative w-full h-[1150px] pt-12 flex flex-col items-start bg-white">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={`flex justify-center items-center w-[516px] h-[516px] rounded-[50%] bg-[#e61e2ba8] opacity-30`}
        >
          <div
            className={`flex justify-center items-center w-[400px] h-[400px]  rounded-[50%] bg-[#e61e2b86]`}
          ></div>
        </div>
      </div>
      <div className="flex w-full space-x-28 justify-center my-16">
        <div className="w-[43px] opacity-20">
          <Image
            src="/images/blackdot_upper.png"
            width={40}
            height={13}
            alt="blackdot-upper"
          />
        </div>
        <p className="text-[#E93541] text-5xl pt-4 font-normal">
          후보님들의&nbsp;
          <span className="text-[#E93541] text-5xl font-semibold">
            이유있는 선택
          </span>
        </p>
        <div className="w-[43px] opacity-20">
          <Image
            src="/images/blackdot_lower.png"
            width={40}
            height={13}
            alt="blackdot-lower"
          />
        </div>
      </div>
      {/* boxes */}
      <div className="grid grid-cols-2 grid-rows-2 gap-12 w-fit mx-auto">
        {boxData.map((box, idx) => (
          <motion.div
            key={box.title}
            className="relative flex flex-col justify-center items-start pl-20 w-[654px] h-[310px] bg-white/80 shadow-[0_1px_4px_2px_rgba(230,30,43,0.75)] rounded-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.148,
              ease: 'easeInOut',
            }}
          >
            <p className="text-4xl font-bold text-[#E93541] mb-8">
              {box.title}
            </p>
            {box.defs.map((definition, innerIdx) => (
              <p key={innerIdx} className="text-xl text-gray-700">
                {definition}
              </p>
            ))}
          </motion.div>
        ))}
      </div>

      {/* steps */}
      <div className="w-full py-12 bg-white flex flex-col items-center">
        <div className="relative w-full  flex items-center justify-between">
          {/* 점선 */}
          <div className="absolute left-0 right-0 top-12 h-0.5 border-t-2 border-dotted border-[#e61e2b] opacity-50 z-0" />
          {/* 단계별 아이템 */}
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              className="flex flex-col items-center z-10 w-1/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.148,
                ease: 'easeInOut',
              }}
            >
              {/* 번호 */}
              <p className="text-2xl text-[#e61e2b]">{step.num}</p>
              {/* 원형 */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#E61E2B4D] flex items-center justify-center mb-1">
                  <div className=" w-4 h-4 rounded-full bg-[#E61E2B] flex items-center justify-center"></div>
                </div>
              </div>
              {/* 텍스트 */}
              <div className="mt-3 h-[0px] text-center w-[149px]">
                <span className="text-[#e61e2b] font-semibold">
                  {step.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

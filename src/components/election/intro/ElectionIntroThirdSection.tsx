import React from 'react';
import { motion } from 'framer-motion';
interface Circle {
  title: string;
  def: string;
}
interface ThirdSectionProps {
  circleData: Circle[];
}
export default function ElectionIntroThirdSection({
  circleData,
}: ThirdSectionProps) {
  return (
    <div className="relative w-full h-[900px] pt-12 flex flex-col items-start bg-[linear-gradient(180deg,#FFE5E7_0%,#FFF_100%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center mt-28 space-y-4">
        <p className="text-[#E93541] text-5xl font-normal">
          균형있는 업무 분담으로
        </p>
        <p className="text-[#E93541] text-6xl font-semibold">
          선거에 더욱 전문적으로 접근 합니다
        </p>

        <p className="text-[#727272] text-2xl font-[300] pt-2">
          한명의 후보님만 전담하여 전문적으로 케어 합니다.
        </p>
      </div>
      {/* 하단 원 */}
      <div className="flex items-center mx-auto w-fit mt-12">
        {circleData.map((circle, idx) => (
          <div
            key={`${circle.title}`}
            className="flex flex-col items-center w-[350px] mx-2"
            style={{ zIndex: circleData.length - idx }} // 왼쪽이 더 높은 z-index
          >
            <motion.div
              key={`${circle.title}-${idx}`}
              className="w-[400px] h-[400px] rounded-full bg-[rgba(255,255,255,0.80)] shadow-[0px_4px_6px_0px_rgba(128,2,2,0.15)] border-[#E61E2B] border-4 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.43,
                delay: (idx + 2) * 0.145,
                ease: 'easeInOut',
              }}
            >
              <p className="font-[500] text-4xl text-[#E61E2B] mb-2">
                {circle.title}
              </p>
              <p
                className="text-[26px] text-zinc-600"
                style={{ fontWeight: 300 }}
              >
                {circle.def}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      {/* 가운데 짧은 hr(구분선) */}
      <hr
        className="
      absolute left-1/2 bottom-0 
      -translate-x-1/2 
      w-64 border-t-2 border-[#323232] opacity-80
      z-10
    "
      />
    </div>
  );
}

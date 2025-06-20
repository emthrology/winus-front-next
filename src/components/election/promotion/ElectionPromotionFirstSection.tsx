import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
interface FirstSectionProps {
  buttonData: string[];
}

export default function ElectionPromotionFirstSection({
  buttonData,
}: FirstSectionProps) {
  return (
    <div className="w-full h-[1400px] pt-12 flex flex-col items-start bg-[linear-gradient(180deg,#FFF_60%,#FFE5E7_100%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center mt-28 space-y-4">
        <button className="border-2 border-[#E93541] bg-white text-[#E93541] rounded-[40px] h-[40px] w-[170px] text-2xl font-bold">
          공보
        </button>
        <p className="text-[#E93541] text-5xl font-normal">
          눈길을 사로잡는 비결
        </p>
        <p className="text-[#E93541] text-6xl font-semibold pb-4">선거 공보</p>

        <p className="text-[#727272] text-center text-2xl font-[300] pt-2">
          이제는 버려지는 선거 공보가 아닌,
          <br />
          핵심이 한눈에 들어오는 살아 있는 메시지를 담았습니다.
        </p>
      </div>
      <div className="w-full mt-24 flex flex-col justify-center items-center space-y-4">
        <Image
          src="/images/election/promotion/election_promotion_first_1.png"
          width={1504}
          height={766}
          alt="pamplet"
        />
      </div>
      <div className="w-full flex justify-center gap-3">
        {buttonData!.map((item, idx) => (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.2,
              ease: 'easeInOut',
            }}
            className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[60px] w-[400px] font-[600] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]"
            onClick={() => {}}
            key={idx}
          >
            <span className="font-[400]"># </span>
            {item}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

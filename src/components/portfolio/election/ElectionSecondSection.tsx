import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
export default function ElectionSecondSection() {
  return (
    <div className="w-full h-[890px] flex flex-col items-start bg-white">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-28">
        <p className="text-black text-lg font-[100]">AUTHENTICITY</p>
        <div className="flex justify-between w-full pb-16">
          <p className="text-black text-[60px] font-semibold">
            후보님을 위해 움직입니다
          </p>
        </div>
      </div>

      {/* 겹치는 레이어 그리드 */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        {/* 따옴표 이미지 */}
        <div className="absolute left-24 top-0 z-10 ml-12 pointer-events-none select-none">
          <Image
            src="/images/portfolio/election/portfolio_election_reddots.png"
            width={210}
            height={170}
            alt="따옴표"
            priority
          />
        </div>

        {/* 투명박스 + 문구 */}
        <motion.div
          className="relative z-9 mr-60 mt-12 flex flex-col justify-start pt-16 pl-16 bg-white/80 shadow-[6px_6px_24px_0px_rgba(0,0,0,0.25)] px-12 py-10 h-[420px] w-[1076px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: 'easeInOut',
          }}
        >
          <div className="mb-8">
            <Image
              src="/images/portfolio/election/portfolio_election_reddot_100.png"
              width={35}
              height={35}
              alt="따옴표"
              priority
            />
          </div>
          <p className="font-bold text-black text-[32px] mb-3">
            후보님의 말 한마디, 걸음 하나에도 의미를 담아 움직입니다.
          </p>
          <p className="text-gray-700 text-[26px]">
            세상을 올바르게 바꾸려는 의지와 그 무게를 알기에,
            <br />
            저희는 그 여정의 모든 순간을 함께하며,
            <br />
            후보님께서 걸어가시는 길에 진심을 실어 전하는 손과 발이 되겠습니다.
          </p>
        </motion.div>

        {/* '1' 아이콘 이미지 */}
        <div
          className="absolute right-10 bottom-1 mr-64 z-0 pointer-events-none select-none"
          style={{ transform: 'translate(30%, 15%)' }}
        >
          <Image
            src="/images/main/main_4_1.png"
            width={610}
            height={620}
            alt="1"
            priority
          />
        </div>
      </div>
    </div>
  );
}

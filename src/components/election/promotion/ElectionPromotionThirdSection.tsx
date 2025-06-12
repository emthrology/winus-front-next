import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
export default function ElectionPromotionThirdSection() {
  return (
    <div className="relative border-2relative w-full h-[2000px] pt-12 flex flex-col items-start bg-[linear-gradient(180deg,#FFF_30%,#FFE5E7_60%,#FFF_100%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center mt-28 space-y-4">
        <button className="border-2 border-[#E93541] bg-white text-[#E93541] rounded-[40px] h-[40px] w-[170px] text-2xl font-bold">
          SNS 홍보
        </button>
        <p className="text-[#E93541] text-5xl font-normal">
          페이스북, 인스타그램, 블로그 등
        </p>
        <p className="text-[#E93541] text-6xl font-semibold pb-4">
          관리 대항 서비스
        </p>

        <p className="text-[#727272] text-center text-2xl font-[300] pt-2">
          각 SNS 마다 다른 속성을 가지고 있어
          <br />
          그에 맞는 게시글을 작성해 드립니다.
        </p>
      </div>
      {/* phone */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%]">
        <div className="w-full mt-24 pr-16 flex flex-col justify-center items-center space-y-4">
          <Image
            src="/images/election/promotion/election_promotion_third_iphone.png"
            width={700}
            height={1100}
            alt="phone"
          />
        </div>
      </div>
      {/* sns */}
      <div className="w-full mt-20 flex items-start justify-center gap-12 z-1">
        {[
          '/images/election/promotion/election_promotion_third_insta_1.png',
          '/images/election/promotion/election_promotion_third_insta_2.png',
          '/images/election/promotion/election_promotion_third_insta_3.png',
        ].map((image, idx) => (
          <div key={idx} className="">
            <Image
              src={image}
              alt="snss"
              width={idx == 1 ? 548 : 464}
              height={idx == 1 ? 700 : 600}
            />
          </div>
        ))}
      </div>
      {/* buttons */}
      <div className="grid grid-cols-3 grid-rows-2 gap-12 w-fit mt-64 mx-auto">
        {[
          '실시간 업로드',
          '매일 업로드',
          '네이버 인물 등록 관리 대행',
          '높은 조회수',
          '상단 노출',
          '감동과 재미의 스토리',
        ].map((button, idx) => (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.2,
              ease: 'easeInOut',
            }}
            className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[60px] w-[400px] font-[500] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]"
            onClick={() => {}}
            key={idx}
          >
            {button}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

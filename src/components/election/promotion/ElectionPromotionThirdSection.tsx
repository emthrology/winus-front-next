import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const mobileButtonRows = [
  ['실시간 업로드', '매일 업로드'],
  ['네이버 인물 등록 관리 대행'],
  ['높은 조회수', '상단 노출'],
  ['감동과 재미의 스토리'],
];
export default function ElectionPromotionThirdSection() {
  return (
    <div className="relative w-full h-fit md:pb-12 lg:py-24 flex flex-col items-start bg-[linear-gradient(180deg,#FFF_30%,#FFE5E7_60%,#FFF_100%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center mt-28 sm:mb-14 md:my-28 space-y-4">
        <button className="border-2 border-[#E93541] bg-white text-[#E93541] rounded-[40px] h-[40px] w-[120px] sm:w-[170px] text-2xl font-bold">
          SNS 홍보
        </button>
        <p className="text-[#E93541] text-3xl sm:text-5xl font-normal pt-4 leading-4 lg:leading-none">
          페이스북, 인스타그램, 블로그 등
        </p>
        <p className="text-[#E93541] text-4xl sm:text-6xl font-semibold lg:pb-4">
          관리 대행 서비스
        </p>

        <p className="text-[#727272] text-center text-base sm:text-2xl font-[300] pb-4">
          각 SNS 마다 다른 속성을 가지고 있어
          <br />
          그에 맞는 게시글을 작성해 드립니다.
        </p>
      </div>

      {/* SNS-pc */}
      <div className="w-full hidden sm:flex justify-center items-center overflow-x-hidden">
        <div
          className={`
      relative
      w-full
      max-w-[1620px]
      md:mx-0
      mx-[-30vw]
    `}
          style={{
            aspectRatio: '1620 / 961',
          }}
        >
          <Image
            src={`/images/election/promotion/election_promotion_third_pc.png`}
            alt="SNS"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 160vw, (max-width: 1620px) 100vw, 1620px"
            priority
          />
        </div>
      </div>
      {/* SNS-mobile */}
      <div className="w-full flex justify-center items-center overflow-x-hidden sm:hidden">
        <div className="relative w-full aspect-[961/1120] max-w-[900px] mx-auto">
          <Image
            src="/images/election/promotion/election_promotion_third_mobile.png"
            alt="SNS"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* buttons-pc */}
      <div className="hidden md:grid grid-cols-3 gap-12 w-fit mt-16 mx-auto px-6">
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
            className="border border-[#E93541] bg-[#E93541] text-white text-[22px] xl:text-[30px] rounded-[40px] h-[60px] max-w-[400px] px-6 font-[500] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]"
            onClick={() => {}}
            key={idx}
          >
            {button}
          </motion.button>
        ))}
      </div>
      {/* buttons-mobile */}
      <div className="md:hidden flex flex-col gap-2 w-full max-w-[400px] my-12 px-6 mx-auto">
        {mobileButtonRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex justify-evenly w-full gap-4 ${
              row.length === 1 ? 'justify-center' : ''
            }`}
          >
            {row.map((label, idx) => (
              <motion.button
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.2,
                  ease: 'easeInOut',
                }}
                className={`${
                  row.length == 1 ? '' : 'flex-1'
                } border border-[#E93541] bg-[#E93541] text-white text-[16px] xl:text-[30px] rounded-[40px] h-[40px] max-w-[400px] px-6 font-[500] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]`}
                onClick={() => {}}
                key={idx}
              >
                {label}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

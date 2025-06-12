import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ElectionPromotionSecondSection.module.css';
import OverlapImages from './OverlapImages';

export default function ElectionPromotionSecondSection() {
  return (
    <div className="relative border-2relative w-full h-[2200px] pt-12 flex flex-col items-start bg-[linear-gradient(180deg,#FFE5E7_0%,#FFF_20%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center mt-28 space-y-4">
        <button className="border-2 border-[#E93541] bg-white text-[#E93541] rounded-[40px] h-[40px] w-[170px] text-2xl font-bold">
          사진촬영
        </button>
        <p className="text-[#E93541] text-5xl font-normal">사진연출의 자신감</p>
        <p className="text-[#E93541] text-6xl font-semibold pb-4">
          후보님 전담 사진사
        </p>

        <p className="text-[#727272] text-center text-2xl font-[300] pt-2">
          전문적인 사진 연출로
          <br />
          감동과 재미를 담은 스토리형 사진 연출을 합니다.
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%]">
        <div className={styles.cornerBorder}>
          <div className={styles.topRight}></div>
          <div className={styles.bottomLeft}></div>
          <div className="w-full mt-24 flex flex-col justify-center items-center space-y-4">
            <Image
              src="/images/election/promotion/election_promotion_second_1.png"
              width={1050}
              height={1200}
              alt="pamplet"
            />
          </div>
        </div>
      </div>
      {/* buttons */}
      <div className="z-1 w-full h-192 px-24 flex justify-around items-center gap-12">
        {/* 왼쪽버튼 */}
        <div className="flex flex-col space-y-12">
          {['# 전담 사진사 배정', '# 전문적인 사진 연출'].map((item, idx) => (
            <div key={idx} className="flex w-[500px]">
              <React.Fragment>
                {idx % 2 == 1 && <div className="w-[100px]"></div>}
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    ease: 'easeInOut',
                  }}
                  className=" bg-[#FAD4D7] text-[#E61E2B] text-[30px] rounded-[40px] h-[60px] w-[400px] font-[500] shadow-[0_2px_4px_0_rgba(97,5,11,0.25)]"
                  onClick={() => {}}
                  key={idx}
                >
                  {item}
                </motion.button>
                {idx % 2 == 0 && <div className="w-[100px]"></div>}
              </React.Fragment>
            </div>
          ))}
        </div>
        {/* 오른쪽버튼 */}
        <div className="flex flex-col space-y-8">
          {[
            '3초로 결정되는 첫인상',
            '사진 한장으로 마음을 사로잡다',
            '스토리를 담은 사진연출',
          ].map((item, idx) => (
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
              {item}
            </motion.button>
          ))}
        </div>
      </div>
      {/* photos */}
      <OverlapImages />
    </div>
  );
}

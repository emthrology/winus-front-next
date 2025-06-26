import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ElectionPromotionSecondSection.module.css';
import OverlapImages from './OverlapImages';

export default function ElectionPromotionSecondSection() {
  return (
    <div className="relative w-full h-fit xl:min-h-[1100px] md:py-24 flex flex-col items-start bg-[linear-gradient(180deg,#FFE5E7_0%,#FFF_70%)] lg:bg-[linear-gradient(180deg,#FFE5E7_0%,#FFF_20%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-center mt-28 space-y-4">
        <button className="border-2 border-[#E93541] bg-white text-[#E93541] rounded-[40px] h-[40px] w-[120px] sm:w-[170px] text-2xl font-bold">
          사진촬영
        </button>
        <p className="text-[#E93541] text-3xl sm:text-5xl font-normal pt-4 leading-1 sm:leading-none">
          사진연출의 자신감
        </p>
        <p className="text-[#E93541] text-4xl sm:text-6xl font-semibold lg:pb-4">
          후보님 전담 사진사
        </p>

        <p className="text-[#727272] text-center text-lg sm:text-2xl font-[300] pb-4">
          전문적인 사진 연출로
          <br />
          감동과 재미를 담은 스토리형 사진 연출을 합니다.
        </p>
      </div>
      {/* 후보 사진 */}
      <div className="absolute top-[46%] sm:top-1/2 lg:top-[45%] xl:top-[54%] 2xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%]">
        <div className={styles.cornerBorder}>
          <div className={styles.topRight}></div>
          <div className={styles.bottomLeft}></div>
          <div className="w-full mt-6 lg:mt-24 flex flex-col justify-center items-center z-1">
            <Image
              src="/images/election/promotion/election_promotion_second_1.png"
              width={1050}
              height={1200}
              alt="pamplet"
            />
          </div>
        </div>
      </div>
      {/* button-pc */}
      <div className="hidden xl:flex z-1 w-full h-192 justify-around items-center gap-12">
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
      {/* button-left-mobile */}
      <div className="xl:hidden flex justify-center items-end w-full h-90 sm:h-140 md:h-160 lg:h-200 z-1">
        <div className="flex flex-col justify-center space-y-2 lg:space-y-12">
          {['# 전담 사진사 배정', '# 전문적인 사진 연출'].map((item, idx) => (
            <div key={idx} className="flex justify-center max-w-[500px]">
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
                  className="bg-[#FAD4D7E6] text-[#E61E2B] text-lg sm:text-2xl md:text-[30px] rounded-[40px] h-[40px] md:h-[60px] w-[200px] sm:w-[340px] md:w-[400px] font-[500] shadow-[0_2px_4px_0_rgba(97,5,11,0.25)]"
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
      </div>
      {/* photos */}
      <OverlapImages />
      {/* button-right-mobile */}
      <div className="xl:hidden flex justify-center items-end w-full pt-12 z-1">
        <div className="flex flex-col justify-center space-y-2 lg:space-y-6">
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
              className="border border-[#E93541] bg-[#E93541] text-white text-lg sm:text-2xl rounded-[40px] h-[40px] lg:h-[60px] max-w-[400px] px-6 font-[500] shadow-[0_2px_4px_0_rgba(230,30,43,0.75)]"
              onClick={() => {}}
              key={idx}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

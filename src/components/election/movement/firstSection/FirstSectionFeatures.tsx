import React from 'react';
import { motion } from 'framer-motion';
export default function FirstSectionFeatures() {
  return (
    <>
      {/* featuress-pc */}
      <div className="hidden lg:flex my-8 md:my-16 mx-6 px-3 bg-[#eee] max-w-screen h-[455px] rounded-3xl flex-row justify-center items-center gap-8 md:gap-16">
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0 * 0.2,
            ease: 'easeInOut',
          }}
        >
          <button
            className="border border-[#E93541] bg-[#E93541] text-white lg:text-2xl 2xl:text-[30px] rounded-[40px] h-[60px] lg:w-[280px] 2xl:w-[400px] font-[500]"
            onClick={() => {}}
          >
            # 메시지 완벽 전달
          </button>
          <p className="text-center lg:text-[18px] 2xl:text-2xl font-[400] text-[#323232]">
            기존에 있는 곡에 가사를
            <br />
            붙이는 것에는 제약이 있었으나
            <br />
            자체제작으로 <b>원하시는 메시지를</b>
            <br /> <b>완벽하게 전달</b> 할 수 있습니다.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1 * 0.2,
            ease: 'easeInOut',
          }}
        >
          <button
            className="border border-[#E93541] bg-[#E93541] text-white lg:text-2xl 2xl:text-[30px] rounded-[40px] h-[60px] lg:w-[280px] 2xl:w-[400px] font-[500]"
            onClick={() => {}}
          >
            # 저렴한 가격 높은 품질
          </button>
          <p className="text-center lg:text-[18px] 2xl:text-2xl font-[400] text-[#323232]">
            악기와 장비를 자체 보유하고,
            <br />
            AI기술을 활용해 외주없이
            <br />
            내부에서 전 과정을 소화해
            <br /> <b>저렴한 가격에 높은 품질을</b> 자랑합니다.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2 * 0.2,
            ease: 'easeInOut',
          }}
        >
          <button
            className="border border-[#E93541] bg-[#E93541] text-white lg:text-2xl 2xl:text-[30px] rounded-[40px] h-[60px] lg:w-[280px] 2xl:w-[400px] font-[500] "
            onClick={() => {}}
          >
            # 맞춤 유세송 MV 제작
          </button>
          <p className="text-center lg:text-[18px] 2xl:text-2xl font-[400] text-[#323232]">
            기존에 틀에서 벗어나
            <br />
            모션그래픽, 텍스트 애니메이션 등
            <br />
            다양한 기술을 활용해 사진이 부족한
            <br />
            후보님도 <b>입체적인 MV 제작</b>이 가능합니다.
          </p>
        </motion.div>
      </div>

      {/* features-mobile */}
      <div className="lg:hidden flex my-8 md:my-16 py-12 px-4 bg-[#eee] max-w-screen h-fit flex-col justify-center items-center gap-10 ">
        <motion.div
          className="flex flex-row justify-start items-center max-w-[400px] w-full h-24 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0 * 0.2,
            ease: 'easeInOut',
          }}
        >
          <button
            className="border border-[#E93541] bg-[#E93541] text-white rounded-[15px] h-full min-w-[160px] font-[500] shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
            onClick={() => {}}
          >
            #01
            <br /> 메시지 완벽 전달
          </button>
          <p className="text-left text-[13px] sm:text-base font-[400] text-[#323232]">
            기존에 있는 곡에 가사를
            <br />
            붙이는 것에는 제약이 있었으나
            <br />
            자체제작으로 <b>원하시는 메시지를</b>
            <br /> <b>완벽하게 전달</b> 할 수 있습니다.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-row justify-start items-center max-w-[400px] w-full h-24 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0 * 0.2,
            ease: 'easeInOut',
          }}
        >
          <button
            className="border border-[#E93541] bg-[#E93541] text-white rounded-[15px] h-full min-w-[160px] font-[500] shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
            onClick={() => {}}
          >
            #02
            <br />
            저렴한 가격 높은 품질
          </button>
          <p className="text-left text-[13px] sm:text-base font-[400] text-[#323232]">
            악기와 장비를 자체 보유하고,
            <br />
            AI기술을 활용해 외주없이 내부에서
            <br />전 과정을 소화해 <b>저렴한 가격에</b>
            <br /> <b> 높은 품질을</b> 자랑합니다.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-row justify-start items-center max-w-[400px] w-full h-24 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0 * 0.2,
            ease: 'easeInOut',
          }}
        >
          <button
            className="border border-[#E93541] bg-[#E93541] text-white rounded-[15px] h-full min-w-[160px] font-[500] shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
            onClick={() => {}}
          >
            #03
            <br /> 맞춤 유세송 MV 제작
          </button>
          <p className="text-left text-[13px] sm:text-base font-[400] text-[#323232]">
            기존에 틀에서 벗어나 모션그래픽,
            <br />
            텍스트 애니메이션 등 다양한
            <br />
            기술을 활용해 사진이 부족해도
            <br />
            <b>입체적인 MV 제작</b>이 가능합니다.
          </p>
        </motion.div>
      </div>
    </>
  );
}

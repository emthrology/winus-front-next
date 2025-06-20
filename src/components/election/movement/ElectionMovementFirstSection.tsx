import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
interface Procon {
  cons: string;
  pros1: string;
  pros2: string;
}

interface FirstSectionProps {
  proscons: Procon[];
  buttons: string[];
}

export default function ElectionMovementFirstSection({
  proscons,
  buttons,
}: FirstSectionProps) {
  return (
    <div className="w-screen min-h-[700px] bg-white">
      <div className="max-w-[1536px] mx-auto">
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-start px-6 pt-16">
          <p className="text-[#E61E2B] text-[42px] font-normal">
            선거운동의 핵심
          </p>
          <p className="text-[#E61E2B] text-[60px] font-bold mb-4">
            선거 유세송 자체제작
          </p>
        </div>
        {/* pros & cons */}
        <div className="w-full max-w-[1500px] mx-auto my-16">
          {/* 비교 항목 */}
          <div className="flex flex-col gap-6">
            {/* 헤더 */}
            <div className="flex justify-center items-center ">
              <div className="w-[300px] text-[#727272] text-2xl font-semibold text-center">
                타 선거기획사
              </div>
              <div className=" w-[220px]"></div>
              <div className="ml-12 flex justify-center items-center">
                <div className="w-[730px]  h-[100px] flex justify-center  items-center  px-6 bg-white">
                  <span className="ml-2 text-[#E61E2B] text-3xl font-bold">
                    윈어스 자체제작
                  </span>
                </div>
              </div>
            </div>
            {proscons.map((item, idx) => (
              <div key={idx} className="flex justify-center items-center ">
                {/* 왼쪽 cons */}
                <div className="w-[300px] text-[#727272] text-2xl text-center">
                  {item.cons}
                </div>
                {/* 가운데 화살표 */}
                <div className=" w-[220px]">
                  <Image
                    src="/images/half_right_arrow.png"
                    width={220}
                    height={27}
                    alt="half arrow right"
                  />
                </div>
                {/* 오른쪽 pros */}
                <div className="ml-12 flex justify-center items-center">
                  <div className="w-[730px]  h-[100px] flex justify-center  items-center   border-2 border-[#E61E2B] rounded-2xl px-6 bg-white">
                    <span className="text-[#E61E2B] text-3xl font-normal">
                      {item.pros1}
                    </span>
                    <span className="ml-2 text-[#E61E2B] text-3xl font-bold">
                      {item.pros2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* featuress */}
        <div className="my-16 bg-[#eee] h-[455px] rounded-3xl flex justify-center items-center gap-16">
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
              className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[60px] w-[400px] font-[500]"
              onClick={() => {}}
            >
              # 메시지 완벽 전달
            </button>
            <p className="text-center text-2xl font-[400] text-[#323232]">
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
              className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[60px] w-[400px] font-[500]"
              onClick={() => {}}
            >
              # 저렴한 가격 높은 품질
            </button>
            <p className="text-center text-2xl font-[400] text-[#323232]">
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
              className="border border-[#E93541] bg-[#E93541] text-white text-[30px] rounded-[40px] h-[60px] w-[400px] font-[500] "
              onClick={() => {}}
            >
              # 맞춤 유세송 MV 제작
            </button>
            <p className="text-center text-2xl font-[400] text-[#323232]">
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
      </div>
      {/* mv images */}
      <div className="w-screen flex justify-between gap-4 my-16">
        {[
          'election_movement_first_1.png',
          'election_movement_first_2.png',
          'election_movement_first_3.png',
        ].map((image, idx) => (
          <Image
            key={idx}
            src={`/images/election/movement/${image}`}
            width={650}
            height={368}
            alt="mvs"
          />
        ))}
      </div>
      {/* buttons */}
      <div className="w-full mx-auto flex justify-center gap-8 my-16">
        {buttons.map((button, idx) => (
          <motion.button
            key={idx}
            className="border border-[#FAD4D7] bg-[#FAD4D7] text-[#E61E2B] text-[30px] rounded-[40px] h-[70px] w-[190px] font-[500]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.148,
              ease: 'easeInOut',
            }}
            onClick={() => {}}
          >
            {button}
          </motion.button>
        ))}
      </div>
      {/* 선분(가로줄) */}
      <div className="flex justify-center">
        <hr className="flex border-t-2 border-[#E61E2B] w-3/4" />
      </div>
    </div>
  );
}

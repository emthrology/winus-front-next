import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
interface Circle {
  title: string;
  defs: string[];
}

interface SecondSectionProps {
  circleData: Circle[];
}

export default function ElectionIntroSecondSection({
  circleData,
}: SecondSectionProps) {
  return (
    <div className="relative flex w-full h-[920px] bg-white z-1">
      {/* 상단 overflow 투명원 */}
      <div className="absolute -top-[12.5%] left-1/2 transform -translate-x-1/2 flex space-x-16 ">
        {circleData.map((circle, idx) => (
          <>
            <motion.div
              key={`${circle.title}-${idx}`}
              className="w-[469px] h-[469px] rounded-full bg-[rgba(255,255,255,0.80)] shadow-[0px_4px_6px_0px_rgba(128,2,2,0.15)] border-white border-4 flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.43,
                delay: (idx + 2) * 0.145,
                ease: 'easeInOut',
              }}
            >
              <p className="font-bold text-6xl text-[#E61E2B] mb-8">
                {circle.title}
              </p>
              {circle.defs.map((definition, innerIdx) => (
                <>
                  <p
                    key={`${definition}-${innerIdx}`}
                    className="font-[300] text-2xl text-[#727272]"
                  >
                    {definition}
                  </p>
                </>
              ))}
            </motion.div>
          </>
        ))}
      </div>
      {/* 하단 */}
      <div className="z-10 w-[85%] h-full items-end max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-28 px-4">
        <div className="flex flex-col items-end justify-center h-1/2">
          <Image
            src="/images/election/intro/election_intro_second_lower_left.png"
            width={492}
            height={148}
            alt="lower logo"
          />
        </div>

        <div className="relative pl-28 w-[450px]">
          <Image
            className="z-10"
            src="/images/main/main_4_2.png"
            alt="WINUS"
            width={400}
            height={400}
            priority
            style={{
              maxWidth: '70vw',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

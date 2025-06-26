import React from 'react';
import { motion } from 'framer-motion';

interface Circle {
  title: string;
  defs: string[];
}

interface SecondSectionProps {
  circleData: Circle[];
}

export default function ElectionIntroFirstSection({
  circleData,
}: SecondSectionProps) {
  return (
    <div className="relative flex w-screen h-[400px] sm:h-[600px] md:h-[800px] xl:h-[600px] bg-white z-2">
      {/* 상단 overflow 투명원 */}
      <div className="hidden absolute -top-[12.5%] left-1/2 transform -translate-x-1/2 xl:flex space-x-10 xl:space-x-16 ">
        {/* pc */}
        {circleData.map((circle, idx) => (
          <motion.div
            key={`${circle.title}-${idx}`}
            className=" flex w-[300px] h-[300px] lg:w-[360px] lg:h-[360px] 2xl:w-[469px] 2xl:h-[469px] rounded-full bg-[rgba(255,255,255,0.80)] shadow-[0px_4px_6px_0px_rgba(128,2,2,0.15)] border-white border-4  flex-col items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.43,
              delay: (idx + 2) * 0.145,
              ease: 'easeInOut',
            }}
          >
            <p className="font-bold xl:text-5xl 2xl:text-6xl text-[#E61E2B] mb-8">
              {circle.title}
            </p>
            {circle.defs.map((definition, innerIdx) => (
              <p
                key={`${definition}-${innerIdx}`}
                className="font-[300] xl:text-xl 2xl:text-2xl text-[#727272]"
              >
                {definition}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
      {/* mobile */}
      <div className="xl:hidden absolute -top-[12.5%] h-fit left-1/2 transform -translate-x-1/2 w-full flex xl:space-x-16 ">
        <div className="w-full">
          <div className=" flex justify-center items-center">
            {circleData.map(
              (circle, idx) =>
                idx == 0 && (
                  <motion.div
                    key={`${circle.title}-${idx}`}
                    className="xl:hidden flex w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] 2xl:w-[469px] 2xl:h-[469px] rounded-full bg-[rgba(255,255,255,0.80)] shadow-[0px_4px_6px_0px_rgba(128,2,2,0.15)] border-white border-4  flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.43,
                      delay: (idx + 2) * 0.145,
                      ease: 'easeInOut',
                    }}
                  >
                    <p className="font-bold text-3xl sm:text-4xl text-[#E61E2B] mb-4 sm:mb-8">
                      {circle.title}
                    </p>
                    {circle.defs.map((definition, innerIdx) => (
                      <p
                        key={`${definition}-${innerIdx}`}
                        className="font-[300] text-xs sm:text-base text-[#727272]"
                      >
                        {definition}
                      </p>
                    ))}
                  </motion.div>
                )
            )}
          </div>
          <div className="flex justify-center items-center gap-2 md:space-x-10">
            {circleData.map(
              (circle, idx) =>
                idx > 0 && (
                  <motion.div
                    key={`${circle.title}-${idx}`}
                    className="xl:hidden flex w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] 2xl:w-[469px] 2xl:h-[469px] rounded-full bg-[rgba(255,255,255,0.80)] shadow-[0px_4px_6px_0px_rgba(128,2,2,0.15)] border-white border-4  flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.43,
                      delay: (idx + 2) * 0.145,
                      ease: 'easeInOut',
                    }}
                  >
                    <p className="font-bold text-3xl sm:text-4xl text-[#E61E2B] mb-4 sm:mb-8">
                      {circle.title}
                    </p>
                    {circle.defs.map((definition, innerIdx) => (
                      <p
                        key={`${definition}-${innerIdx}`}
                        className="font-[300] text-xs sm:text-base text-[#727272]"
                      >
                        {definition}
                      </p>
                    ))}
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

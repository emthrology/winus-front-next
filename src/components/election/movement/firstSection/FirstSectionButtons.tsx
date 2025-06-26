import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveButtonsProps {
  buttons: string[];
}

const ResponsiveButtons: React.FC<ResponsiveButtonsProps> = ({ buttons }) => {
  // 4개, 3개로 분할
  const firstRow = buttons.slice(0, 4);
  const secondRow = buttons.slice(4);

  return (
    <>
      {/* lg 이상: 한 줄 */}
      <div className="hidden lg:flex w-full mx-auto  flex-row justify-center gap-8 my-16 px-2">
        {buttons.map((button, idx) => (
          <motion.button
            key={idx}
            className="border border-[#FAD4D7] bg-[#FAD4D7] text-[#E61E2B] text-[22px] 2xl:text-[30px] rounded-[40px] h-[70px] w-[190px] font-[500]"
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
      {/* lg 이하: 두 줄 */}
      <div
        className="
          w-full max-w-[900px] mx-auto
          flex flex-col gap-2 my-8 pb-4
          overflow-hidden
          lg:hidden
        "
      >
        <div className="flex flex-row justify-center gap-2 w-full">
          {firstRow.map((button, idx) => (
            <motion.button
              key={idx}
              className="border border-[#FAD4D7] bg-[#FAD4D7] text-[#E61E2B] text-[20px] sm:text-[22px] rounded-[40px] h-[50px] w-[110px] sm:w-[170px] font-[500] flex-shrink-0 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
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
        <div className="flex flex-row justify-center gap-2 w-full">
          {secondRow.map((button, idx) => (
            <motion.button
              key={idx}
              className="border border-[#FAD4D7] bg-[#FAD4D7] text-[#E61E2B] text-[20px] sm:text-[22px] rounded-[40px] h-[50px] w-[110px] sm:w-[170px] font-[500] flex-shrink-0 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (idx + 4) * 0.148,
                ease: 'easeInOut',
              }}
              onClick={() => {}}
            >
              {button}
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResponsiveButtons;

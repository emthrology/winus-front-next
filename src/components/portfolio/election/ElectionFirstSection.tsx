import React from 'react';
import { easeIn, motion } from 'framer-motion';

export default function ElectionFirstSection() {
  return (
    <div
      className={`relative w-screen min-h-[768px] bg-[url('/images/portfolio/election/portfolio_election_1.png')] bg-cover bg-center
      flex justify-center items-center
    `}
    >
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.50)]">
        <div className="flex items-center justify-center w-full h-full ">
          <motion.p
            initial={{ backgroundPosition: '100% 50%' }}
            animate={{ backgroundPosition: '0% 50%' }}
            transition={{ duration: 2.5, ease: easeIn }} // sharp한 커브
            style={{
              WebkitTextStroke: '1px black',
              background:
                'linear-gradient(90deg,#fff 0%,#fff 50%, #959595 50%,#959595 100%',
              backgroundSize: '300% 100%',
              backgroundPosition: '0% 50%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            className="drop-shadow-[0px_2px_2px_rgba(0,0,0,1)] text-[60px] font-bold"
          >
            후보님의 모든
            [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
            이 빛날 수 있도록
          </motion.p>
        </div>
      </div>
    </div>
  );
}

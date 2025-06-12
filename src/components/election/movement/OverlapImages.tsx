import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OverlapImages() {
  return (
    <div className="relative w-full min-h-[820px] mx-auto mt-32">
      {/* 좌상단 */}
      <motion.div
        className="absolute top-0 left-32 border-8 border-[#FAD4D7] bg-white shadow-xl w-[660px] h-[380px] z-9 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 * 0.13, ease: 'easeInOut' }}
      >
        <Image
          src="/images/election/movement/election_movement_third_1.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 우상단 */}
      <motion.div
        className="absolute top-0 right-32 border-8 border-[#FAD4D7] bg-white shadow-xl w-[660px] h-[380px] z-9 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 * 0.13, ease: 'easeInOut' }}
      >
        <Image
          src="/images/election/movement/election_movement_third_2.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 중앙(가장 위) */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 border-8 border-[#FAD4D7] bg-white shadow-2xl w-[660px] h-[380px] z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 * 0.13, ease: 'easeInOut' }}
      >
        <Image
          src="/images/election/movement/election_movement_third_3.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 좌하단 */}
      <motion.div
        className="absolute bottom-0 left-32 border-8 border-[#FAD4D7] bg-white shadow-lg w-[660px] h-[380px] z-9 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 * 0.13, ease: 'easeInOut' }}
      >
        <Image
          src="/images/election/movement/election_movement_third_4.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 우하단 */}
      <motion.div
        className="absolute bottom-0 right-32 border-8 border-[#FAD4D7] bg-white shadow-lg w-[660px] h-[380px] z-9 "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 4 * 0.13, ease: 'easeInOut' }}
      >
        <Image
          src="/images/election/movement/election_movement_third_5.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 중앙 하단(가장 위) */}
      <motion.div
        className="absolute top-3/4 left-1/2 -translate-x-1/2 border-8 border-[#FAD4D7] bg-white shadow-2xl w-[660px] h-[380px] z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 4 * 0.13, ease: 'easeInOut' }}
      >
        <Image
          src="/images/election/movement/election_movement_third_6.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

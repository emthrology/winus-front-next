import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/images/election/movement/election_movement_third_1_mobile.png',
  '/images/election/movement/election_movement_third_2_mobile.png',
  '/images/election/movement/election_movement_third_3_mobile.png',
  '/images/election/movement/election_movement_third_4_mobile.png',
  '/images/election/movement/election_movement_third_5_mobile.png',
  '/images/election/movement/election_movement_third_6_mobile.png',
];
export default function OverlapImages() {
  return (
    <div className="max-w-[1536px] mx-auto">
      {/* pc */}
      <div className="hidden lg:block relative  aspect-[1512/840] mt-4 ">
        {/* 좌상단 */}
        <motion.div
          className="absolute top-0 left-0 border-8 border-[#FAD4D7] bg-white shadow-xl 
        w-3/7 aspect-[660/380]
        z-9 "
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
          className="absolute top-0 right-0 border-8 border-[#FAD4D7] bg-white shadow-xl 
        w-3/7 aspect-[660/380] z-9 "
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
          className="absolute top-1/4 left-1/2 -translate-x-1/2 border-8 border-[#FAD4D7] bg-white shadow-2xl 
        w-3/7 aspect-[660/380] z-10"
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
          className="absolute bottom-0 left-0 border-8 border-[#FAD4D7] bg-white shadow-lg 
        w-3/7 aspect-[660/380] z-9 "
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
          className="absolute bottom-0 right-0 border-8 border-[#FAD4D7] bg-white shadow-lg 
        w-3/7 aspect-[660/380] z-9 "
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
          className="absolute top-3/4 left-1/2 -translate-x-1/2 border-8 border-[#FAD4D7] bg-white shadow-2xl 
        w-3/7 aspect-[660/380] z-10"
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
      {/* mobile */}
      <div className="lg:hidden flex items-center justify-center w-full">
        <div className="sm:px-6 mx-auto">
          {/* 이미지 motions */}
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 w-fit ">
            {images?.map((image, idx) => (
              <motion.div
                key={image}
                className="relative w-[170px] h-[170px] sm:w-[260px] sm:h-[260px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] 2xl:w-[340px] 2xl:h-[340px] overflow-hidden rounded-lg  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src={image}
                  fill
                  alt={`Interior ${idx + 1}`}
                  className="object-cover scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { motion } from 'framer-motion';
export default function OverlapImages() {
  return (
    <div className="relative 2xl:w-[1536px] 2xl:h-[840px] w-[95vw] h-[50vw] mt-4 mx-auto">
      {/* 왼쪽 위 */}
      <motion.div
        className="
      absolute
      top-0 left-0
      2xl:w-[500px] 2xl:h-[500px] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px]
      border-5 md:border-10 border-[#FAD4D7] bg-white shadow-lg
      z-7
    "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0 * 0.148,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/images/election/promotion/election_promotion_second_gallery_1.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 중앙 위 */}
      <motion.div
        className="
      absolute
      top-0 left-1/2 -translate-x-1/2
      2xl:w-[500px] 2xl:h-[500px] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px]
      border-5 md:border-10 border-[#FAD4D7] bg-white shadow-lg
      z-8
    "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1 * 0.148,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/images/election/promotion/election_promotion_second_gallery_2.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 오른쪽 위 */}
      <motion.div
        className="
      absolute
      top-0 right-0
      2xl:w-[500px] 2xl:h-[500px] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px]
      border-5 md:border-10 border-[#FAD4D7] bg-white shadow-lg
      z-9
    "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2 * 0.148,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/images/election/promotion/election_promotion_second_gallery_3.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 왼쪽 아래 */}
      <motion.div
        className="
      absolute
      bottom-0 left-[17%]
      2xl:w-[500px] 2xl:h-[500px] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px]
      border-5 md:border-10 border-[#FAD4D7] bg-white shadow-lg
      z-9
    "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1 * 0.148,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/images/election/promotion/election_promotion_second_gallery_4.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
      {/* 오른쪽 아래 */}
      <motion.div
        className="
      absolute
      bottom-0 right-[17%]
      2xl:w-[500px] 2xl:h-[500px] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px]
      border-5 md:border-10 border-[#FAD4D7] bg-white shadow-lg
      z-9
    "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2 * 0.148,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/images/election/promotion/election_promotion_second_gallery_5.png"
          alt=""
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

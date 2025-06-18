import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Intro_component_lower() {
  return (
    <div className="w-screen max-w-[1536px] md:px-6 mx-auto">
      <div className="hidden md:flex justify-between w-screen">
        {/* 글 자리 */}
        <div className="flex flex-col justify-around pb-12">
          <div className="flex flex-col justify-start items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: 'easeInOut',
              }}
            >
              <h1 className="text-5xl font-bold text-white">
                윈어스 오시는 길
              </h1>
              <h5 className="text-lg font-[300] text-white pt-2">
                서울특별시 성북구 화랑로19길 68, 대건빌딩 3층
              </h5>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: 'easeInOut',
              }}
            >
              <p className="pt-12 text-lg text-white">대표전화. 02-915-3702</p>
              <p className="text-lg text-white">
                이 메 일. cat302302@wewinus.com
              </p>
              <p className=" text-md font-thin text-white">
                [ 평일 : 09:00 ~ 18:00 주말, 공휴일 휴무 ]
              </p>
            </motion.div>
          </div>
          <div className="ml-[-10%]">
            <Image
              src={'/images/about/about_logo.png'}
              alt="winus_logo"
              width={700}
              height={130}
            />
          </div>
        </div>
        {/* 약도 자리 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: 'easeInOut',
          }}
        >
          <Image
            src={'/images/about/sketchmap.png'}
            alt="약도"
            width={800}
            height={500}
          />
        </motion.div>
      </div>
      <div className="relative md:hidden flex flex-col min-h-[500px] justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: 'easeInOut',
          }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-white">윈어스 오시는 길</h1>
          <h5 className="text-lg font-[200] text-white pt-2">
            서울특별시 성북구 화랑로19길 68, 대건빌딩 3층
          </h5>
        </motion.div>
        {/* 약도 자리 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: 'easeInOut',
          }}
          className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src={'/images/about/sketchmap.png'}
            alt="약도"
            width={600}
            height={300}
          />
        </motion.div>
        <div className="absolute right-0 bottom-18 w-[300px]">
          <Image
            src={'/images/about/about_logo.png'}
            alt="winus_logo"
            width={700}
            height={130}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: 'easeInOut',
          }}
          className="space-y-2"
        >
          <p className="pt-12 text-lg text-white">대표전화. 02-915-3702</p>
          <p className="text-lg text-white">이 메 일. cat302302@wewinus.com</p>
          <p className=" text-md font-thin text-white">
            [ 평일 : 09:00 ~ 18:00 주말, 공휴일 휴무 ]
          </p>
        </motion.div>
      </div>
    </div>
  );
}

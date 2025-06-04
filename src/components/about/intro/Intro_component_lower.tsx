import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Intro_component_lower() {
  return (
    <>
      <div className="flex justify-between w-screen">
        {/* 글 자리 */}
        <div className="flex flex-col justify-around">
          <div className="pl-32 pt-36 flex flex-col justify-start items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: 'easeInOut',
              }}
            >
              <h1 className="text-5xl font-bold">윈어스 오시는 길</h1>
              <h5 className="text-lg font-[300]">
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
              <p className="pt-12 text-lg">대표전화. 02-915-3702</p>
              <p className="text-lg">이 메 일. cat302302@wewinus.com</p>
              <p className=" text-md font-thin">
                [ 평일 : 09:00 ~ 18:00 주말, 공휴일 휴무 ]
              </p>
            </motion.div>
          </div>
          <div>
            <Image
              className="pl-16"
              src={'/images/about/about_logo.png'}
              alt="winus_logo"
              width={700}
              height={130}
            />
          </div>
        </div>

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
            width={1000}
            height={600}
          />
        </motion.div>
      </div>
    </>
  );
}

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
interface EventFirstSectionProps {
  images: string[] | undefined;
  buttonData:
    | {
        label: string;
        theme: string;
      }[]
    | undefined;
}

export default function EventFirstSection({
  images,
  buttonData,
}: EventFirstSectionProps) {
  return (
    <div className="w-screen bg-white h-fit py-12 lg:py-24">
      <div className="max-w-[1536px] mx-auto">
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-start mb-10  px-6 ">
          <p className="text-black text-3xl lg:text-[42px] font-normal">
            특별함을 시작으로
          </p>
          <p className="text-black text-3xl lg:text-[60px] font-bold">
            아이디어를 도출하다
          </p>
        </div>
        <div className="max-w-8xl mx-auto w-full flex flex-col">
          {/* pc 이미지+텍스트 반복 */}
          <div className="hidden md:flex flex-col gap-24  px-6  ">
            {images?.map((image, idx) => (
              <div key={image}>
                <div className="flex flex-row items-center xl:space-x-20 2xl:space-x-28">
                  {idx % 2 == 1 ? (
                    <div className="w-1/2 flex flex-col items-end space-y-6 pr-8">
                      <p className="text-[#032ff4] text-xl font-bold">
                        CONFIDENCE
                      </p>
                      <p className="text-black text-right text-lg lg:text-xl font-thin">
                        공공기관과 기업행사에서 인정받은
                        <br />
                        준비력과 체계적인 운영으로, 만족도 높은 결과를
                        제공합니다.
                      </p>
                      <div className="flex justifty-start gap-3">
                        {buttonData!.map(
                          (item, idx) =>
                            idx >= 3 && (
                              <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: idx * 0.2,
                                  ease: 'easeInOut',
                                }}
                                className="border border-[#032FF4] bg-[#032FF4] text-white  rounded-[40px] h-[35px] w-[100px] lg:h-[40px] lg:w-[130px]  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
                                onClick={() => {}}
                                key={idx}
                              >
                                {item.label}
                              </motion.button>
                            )
                        )}
                      </div>
                    </div>
                  ) : null}
                  <div className="relative md:w-2xl lg:w-2xl xl:w-3xl 2xl:w-4xl aspect-[5/3]">
                    <Image
                      src={image}
                      fill
                      alt={`Interior ${idx + 1}`}
                      className="object-cover rounded-lg "
                      priority={idx === 0}
                    />
                  </div>

                  {idx % 2 == 0 ? (
                    <div className="w-1/2 flex flex-col items-start space-y-6 pl-8">
                      <p className="text-[#032ff4] text-xl font-bold">
                        JOVIALITY
                      </p>
                      <p className="text-black text-start text-lg lg:text-xl font-thin">
                        단순한 행사가 아닌 특별함을 느낄 수 있는
                        <br />
                        감동적인 즐거움을 느낄 수 있습니다.
                      </p>
                      <div className="flex justifty-start gap-3">
                        {buttonData!.map(
                          (item, idx) =>
                            idx < 3 && (
                              <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: idx * 0.2,
                                  ease: 'easeInOut',
                                }}
                                className="border border-[#032FF4] bg-white text-[#0052ff]  rounded-[40px]  h-[35px] w-[100px] lg:h-[40px] lg:w-[130px] font-bold shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
                                onClick={() => {}}
                                key={idx}
                              >
                                {item.label}
                              </motion.button>
                            )
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          {/* mobile  */}
          <div className="w-full md:hidden flex flex-col justify-center items-center">
            <div className="w-full h-auto aspect-auto relative overflow-hidden">
              <img
                src={images![0]}
                alt={`mobile event image1`}
                className="object-cover scale-130"
              />
              {/* 그라데이션 오버레이 */}
              <div
                className="absolute inset-0 pointer-events-none p-4 flex items-end"
                style={{
                  background:
                    'linear-gradient(32deg, rgba(3, 47, 244, 0.50) 33.7%, rgba(255, 255, 255, 0.00) 64.19%)',
                }}
              >
                <div>
                  <p className="text-white text-xl font-bold">JOVIALITY</p>
                  <p className="text-white text-start text-base font-thin">
                    단순한 행사가 아닌 특별함을 느낄 수 있는
                    <br />
                    감동적인 즐거움을 느낄 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-fit pt-8 pb-12 sm:pt-12 sm:pb-16 grid grid-cols-3 gap-3 sm:gap-6">
              {buttonData!.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.2,
                    ease: 'easeInOut',
                  }}
                  className={`${
                    idx % 2 == 0
                      ? 'bg-white text-[#0052ff]'
                      : 'bg-[#032FF4] text-white'
                  } border rounded-[40px] border-[#032FF4] h-[35px] w-[100px] lg:h-[40px] lg:w-[130px] font-light  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]`}
                  onClick={() => {}}
                  key={idx}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="w-full h-auto aspect-auto  relative overflow-hidden">
              <img
                src={images![1]}
                alt={`mobile event image2`}
                className="object-cover scale-130"
              />
              {/* 그라데이션 오버레이 */}
              <div
                className="absolute inset-0 pointer-events-none p-4 flex items-end"
                style={{
                  background:
                    'linear-gradient(32deg, rgba(3, 47, 244, 0.50) 33.7%, rgba(255, 255, 255, 0.00) 64.19%)',
                }}
              >
                <div>
                  <p className="text-white text-xl font-bold">CONFIDENCE</p>
                  <p className="text-white text-start text-base font-thin">
                    공공기관과 기업행사에서 인정받은
                    <br />
                    준비력과 체계적인 운영으로, 만족도 높은 결과를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

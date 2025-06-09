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
    <div className="relative flex flex-col items-start justify-start w-screen  h-[1350px] bg-white">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-16 ">
        <p className="text-black text-[42px] font-normal">특별함을 시작으로</p>
        <p className="text-black text-[60px] font-bold">아이디어를 도출하다</p>
      </div>
      <div className="relative w-full flex flex-col items-start py-16 pl-32">
        {images?.map((image, idx) => (
          <div key={image} className="flex">
            <div className="flex flex-row space-x-16">
              {idx % 2 == 1 ? (
                <div className="min-w-[760px] pr-12 w-full flex flex-col justify-center items-end space-y-8">
                  <p className="text-[#032ff4] text-xl font-bold">CONFIDENCE</p>
                  <p className="text-black text-right text-xl font-thin">
                    공공기관과 기업행사에서 인정받은
                    <br />
                    준비력과 체계적인 운영으로, 만족도 높은 결과를 제공합니다.
                  </p>
                  <div className="flex justifty-start gap-3">
                    {buttonData!.map((item, idx) => (
                      <motion.button
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.2,
                          ease: 'easeInOut',
                        }}
                        className="border border-[#032FF4] bg-[#032FF4] text-white  rounded-[40px] h-[40px] w-[130px]  shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
                        onClick={() => {}}
                        key={idx}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : null}
              <Image
                src={image}
                width={1146}
                height={859}
                alt={`Interior ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {idx % 2 == 0 ? (
                <div className="minw-[760px]  flex flex-col justify-center items-start space-y-8">
                  <p className="text-[#032ff4] text-xl font-bold">JOVIALITY</p>
                  <p className="text-black text-start text-xl font-thin">
                    단순한 행사가 아닌 특별함을 느낄 수 있는
                    <br />
                    감동적인 즐거움을 느낄 수 있습니다.
                  </p>
                  <div className="flex justifty-start gap-3">
                    {buttonData!.map((item, idx) => (
                      <motion.button
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.2,
                          ease: 'easeInOut',
                        }}
                        className="border border-[#032FF4] text-[#0052ff]  rounded-[40px] h-[40px] w-[130px] font-bold shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]"
                        onClick={() => {}}
                        key={idx}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

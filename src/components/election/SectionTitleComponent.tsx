import Image from 'next/image';
import React from 'react';

export default function SectionTitleComponent() {
  return (
    <div className='relative h-[300px] sm:h-[350px] md:h-[460px] overflow-hidden bg-cover bg-right-bottom bg-[url("/images/election/election_gradient.png")]'>
      <div className="flex justify-between max-w-[1536px] h-full px-6 mx-auto">
        {/* 상단 텍스트/버튼 등 */}
        <div className="flex flex-col justify-center lg:justify-start my-16 md:mt-16 z-2">
          <div>
            <p className="text-white text-3xl lg:text-[42px] font-normal">
              후보님의 든든한
            </p>
            <p className="text-white text-3xl lg:text-[60px] font-bold mb-4">
              파트너 윈어스입니다
            </p>
          </div>

          <div className="">
            <p className="flex-1 text-white text-base lg:text-2xl font-[300]">
              선거전략 / 선거기획 / 공보 / 여론조사 등
              <br />
              후보님의 손과 발이 되어 드립니다.
            </p>
          </div>
        </div>
        <div className="md:hidden absolute  right-[-10%] w-2/3 h-full z-1">
          <Image
            src="/images/main/main_4_1.png"
            alt="1"
            fill
            className="object-cover"
            objectPosition="top"
            priority
            draggable={false}
            sizes="493px"
          />
        </div>
        <div className="hidden md:flex flex-col justify-end items-end mr-[-13%] sm:mr-[-7%] md:mr-0">
          <div className="relative overflow-hidden w-[350px] h-[280px] md:w-[490px] md:h-[430px]">
            <Image
              src="/images/main/main_4_1.png"
              alt="1"
              fill
              className="object-cover"
              objectPosition="top"
              priority
              draggable={false}
              sizes="493px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

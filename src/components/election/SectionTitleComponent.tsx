import Image from 'next/image';
import React from 'react';

export default function SectionTitleComponent() {
  return (
    <div className='flex justify-between w-full h-[460px] bg-cover bg-[url("/images/election/election_gradient.png")]'>
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-16 ">
        <p className="text-white text-[42px] font-normal">후보님의 든든한</p>
        <p className="text-white text-[60px] font-bold mb-4">
          파트너 윈어스입니다
        </p>
        <div className="flex w-full justify-between items-center pr-32 ">
          <p className="flex-1 text-white text-2xl font-[300]">
            선거전략 / 선거기획 / 공보 / 여론조사 등
            <br />
            후보님의 손과 발이 되어 드립니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end mr-72 ">
        <div
          className="relative overflow-hidden"
          style={{ width: '493px', height: '428px' }}
        >
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
  );
}

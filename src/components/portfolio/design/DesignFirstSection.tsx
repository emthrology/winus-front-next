import React from 'react';
// import useThemeStore from '@/store/themeStore';
import CarouselFirst from '../CarouselFisrt';

export default function FirstSection() {
  // const blue = useThemeStore((state) => state.blue);
  return (
    <div className="relative overflow-x-hidden flex flex-col items-start w-full h-[900px] bg-[linear-gradient(to_bottom,#032FF4_60%,#fff_40%)]">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-24 ">
        <p className="text-white text-lg font-[100] pb-4">DESIGN</p>
        <div className="flex justify-between w-full">
          <p className="text-white text-5xl font-semibold">
            상상을 현실로 이루는 디자인
          </p>
          <p className="pr-64 font-thin">
            차별화된 감각과 아이디어로
            <br />
            상상에 생명을 불어넣습니다.
          </p>
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col items-center">
        <CarouselFirst />
      </div>
    </div>
  );
}

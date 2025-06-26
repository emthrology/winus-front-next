import React from 'react';
import CarouselFirst from '../CarouselFisrt';
// import useThemeStore from '@/store/themeStore';

export default function FirstSection() {
  // const blue = useThemeStore((state) => state.blue);
  return (
    <div className="w-screen relative flex flex-col items-start h-[480px] sm:h-[600px] md:h-[625px] lg:h-[800px] xl:h-[900px] bg-[linear-gradient(to_bottom,#032FF4_60%,#fff_40%)]">
      <div className="w-full max-w-[1536px] px-6 mx-auto">
        {/* 상단 텍스트/버튼 등 */}
        <div className="flex w-full flex-col items-start pt-12 lg:pt-0 lg:mt-24 ">
          <div className="flex justify-center lg:justify-between items-end w-full">
            <div className="text-center lg:text-left">
              <p className="text-white text-2xl lg:text-lg font-noto font-[300] pb-2 lg:pb-4">
                DESIGN
              </p>
              <p className="text-white text-[26px] sm:text-3xl lg:text-5xl font-semibold">
                상상을 현실로 이루는 디자인
              </p>
            </div>

            <p className="hidden lg:block font-thin text-white">
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
    </div>
  );
}

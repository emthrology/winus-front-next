import React from 'react';
// import { useIsLgUp } from '@/hooks/usePageSize';
interface ITitleProps {
  title: string;
  type?: string;
}

export default function TitleComponent({
  title,
  type = 'default',
}: ITitleProps) {
  // const isLgUp = useIsLgUp();
  return type == 'default' ? (
    <>
      <div
        className={`w-screen min-h-[300px]  lg:bg-cover lg:min-h-[400px] flex justify-center items-center lg:justify-start lg:items-end pt-8 lg:pl-36  text-[48px] lg:text-[72px] font-bold relative overflow-hidden
        bg-[url('/images/main/main_1.png')] bg-top    `}
      >
        <span className="z-1 text-white">{title}</span>
      </div>
    </>
  ) : (
    <>
      <div
        className={`hidden md:flex w-screen min-h-[300px]  lg:bg-cover lg:min-h-[400px]  justify-center items-center lg:justify-start lg:items-end pt-8 lg:pl-36  text-[48px] lg:text-[72px] font-bold relative overflow-hidden
        bg-[url('/images/guke.png')] bg-top lg:bg-[100%]`}
      >
        {/* 오버레이 레이어 */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        <span className="z-1 text-white">{title}</span>
      </div>
      <div
        className={`md:hidden flex w-full min-h-[300px] bg-right bg-cover justify-center items-center pt-8 text-[48px] font-bold relative overflow-hidden
        bg-[url('/images/guke_mobile.png')]`}
      >
        {/* 오버레이 레이어 */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        <span className="z-1 text-white">{title}</span>
      </div>
    </>
  );
}

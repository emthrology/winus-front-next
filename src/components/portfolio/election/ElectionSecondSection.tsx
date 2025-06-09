import Image from 'next/image';
import React from 'react';

export default function ElectionSecondSection() {
  return (
    <div className="w-full h-[890px] flex flex-col items-start bg-white ">
      {/* 상단 텍스트/버튼 등 */}
      <div className="flex w-full flex-col items-start pl-32 mt-28 ">
        <p className="text-black text-lg font-[100] ">AUTHENTICITY</p>
        <div className="flex justify-between w-full pb-16">
          <p className="text-black text-[60px] font-semibold">
            후보님을 위해 움직입니다
          </p>
        </div>
      </div>
      {/* 따옴표, 문구 컴포넌트, '1아이콘' */}
      <div className="grid grid-cols-[1fr_4fr_2fr] mx-32 overflow-visible">
        <div className="overflow-visible min-w-[50px]">
          <Image
            src="/images/portfolio/election/portfolio_election_reddots.png"
            width={210}
            height={170}
            alt="Red Dots"
          />
        </div>
        <div className="z-9 overflow-visible max-w-[500px]">
          <div className="ml-[-80px] mt-14 w-[1076px] h-[420px] bg-[rgba(255,255,255,0.74)] shadow-[6px_6px_24px_0px_rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="ml-[-150px] mt-[-120px] overflow-visible min-w-[100px] min-h-[500px]">
          <Image
            src="/images/main/main_4_1.png"
            alt="WINUS"
            width={580}
            height={770}
            priority
          />
        </div>
      </div>
    </div>
  );
}

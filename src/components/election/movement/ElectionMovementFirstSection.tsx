import React from 'react';
import FirstSectionFeatures from './firstSection/FirstSectionFeatures';
import FirstSectionMvImages from './firstSection/FirstSectionMvImages';
import FirstSectionProsCons from './firstSection/FirstSectionProsCons';
import FirstSectionButtons from './firstSection/FirstSectionButtons';
interface Procon {
  cons: string;
  pros1: string;
  pros2: string;
}

interface FirstSectionProps {
  proscons: Procon[];
  buttons: string[];
}

export default function ElectionMovementFirstSection({
  proscons,
  buttons,
}: FirstSectionProps) {
  return (
    <div className="w-screen min-h-[700px] bg-white">
      <div className="max-w-[1536px] mx-auto">
        {/* 상단 텍스트 */}
        <div className="flex flex-col items-start px-6 pt-16">
          <p className="text-[#E93541] text-[30px] sm:text-[48px] font-normal pt-4 leading-[1.0]">
            선거운동의 핵심
          </p>
          <p className="text-[#E93541] text-[36px] sm:text-[60px] font-semibold sm:pb-4">
            선거 유세송 자체제작
          </p>
        </div>
        {/* pros & cons */}
        <FirstSectionProsCons proscons={proscons} />
        {/* features */}
        <FirstSectionFeatures />
      </div>
      {/* mv images */}
      <FirstSectionMvImages />
      {/* buttons */}
      <FirstSectionButtons buttons={buttons} />
      {/* 선분(가로줄) */}
      <div className="hidden lg:flex justify-center">
        <hr className="flex border-t-2 border-[#E61E2B] w-3/4" />
      </div>
    </div>
  );
}

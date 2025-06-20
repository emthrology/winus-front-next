import React from 'react';

export default function ElectionTitle() {
  return (
    <div className="w-screen bg-white">
      <div className="max-w-[1536px] mx-auto not-last-of-type:flex flex-col items-start px-6 py-12 lg:py-16">
        <p className="text-black text-3xl lg:text-[42px] font-normal">
          가치를 찾아내는 시작점,
        </p>
        <p className="text-black text-3xl lg:text-[60px] font-bold">
          믿을 수 있는 든든한 전문가
        </p>
      </div>
    </div>
  );
}

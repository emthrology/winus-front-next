import React from 'react';
import { useIsLgUp } from '@/hooks/usePageSize';
interface ITitleProps {
  title: string;
  type?: string;
}

export default function TitleComponent({
  title,
  type = 'default',
}: ITitleProps) {
  const isLgUp = useIsLgUp();
  return (
    <div
      className="w-screen min-h-[300px] lg:min-h-[400px] flex justify-center items-center lg:justify-start lg:items-end py-4 lg:pl-36  text-[48px] lg:text-[72px] font-bold relative overflow-hidden"
      style={{
        backgroundImage:
          type === 'default'
            ? "url('/images/main/main_1.png')"
            : "url('/images/guke.png')",
        backgroundSize: `${isLgUp ? 'cover' : '200% 200%'}`,
        backgroundPosition: 'top',
      }}
    >
      {/* 오버레이 레이어 */}
      {type !== 'default' && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      )}
      <span className="z-1 text-white">{title}</span>
    </div>
  );
}

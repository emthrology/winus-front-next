import React from 'react';
interface ITitleProps {
  title: string;
  type?: string;
}

export default function TitleComponent({
  title,
  type = 'default',
}: ITitleProps) {
  return (
    <div
      className="w-screen min-h-[400px] flex justify-start items-end py-4 pl-36  text-[72px] font-bold relative overflow-hidden"
      style={{
        backgroundImage:
          type === 'default'
            ? "url('/images/main/main_1.png')"
            : "url('/images/guke.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      {/* 오버레이 레이어 */}
      {type !== 'default' && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      )}
      <span className="z-1">{title}</span>
    </div>
  );
}

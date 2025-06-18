import React, { ReactNode } from 'react';

interface CircleProps {
  color: string;
  diameter: number;
  children: ReactNode;
}

export default function ShadowCircle({
  diameter,
  color,
  children,
}: CircleProps) {
  const shadowThemeClass =
    {
      blue: 'shadow-[0_4px_16px_0_rgba(0,47,244,0.75)]',
      red: 'shadow-[0_4px_16px_0_rgba(230,30,43,0.75)]',
    }[color] || 'shadow-0';
  return (
    <>
      <div
        style={{ width: diameter, height: diameter }}
        className={` rounded-full bg-white ${shadowThemeClass} flex flex-col items-center justify-center`}
      >
        {children}
      </div>
    </>
  );
}

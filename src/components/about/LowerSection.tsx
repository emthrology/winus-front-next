import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  theme: string;
}

export default function LowerSection({ children, theme }: SectionProps) {
  const bgThemeClass =
    {
      blue: 'bg-[#032FF4]',
      red: 'bg-[#E61E2B]',
    }[theme] || 'bg-black';
  return (
    <div
      className={`w-screen min-h-[550px] ${bgThemeClass} flex flex-col items-center justify-evenly`}
    >
      {/* 여기에 children 을 선언하곳 싶음 */}
      {children}
    </div>
  );
}

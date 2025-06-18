import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  solitary: boolean;
}

export default function UpperSection({ children, solitary }: SectionProps) {
  return (
    <div
      className={`w-screen ${
        solitary ? 'min-h-[1000px]' : 'h-fit'
      } bg-white flex flex-col justify-between py-12 md:py-0`}
    >
      {/* 여기에 children 을 선언하곳 싶음 */}
      {children}
    </div>
  );
}

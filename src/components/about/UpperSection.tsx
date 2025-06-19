import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

export default function UpperSection({ children }: SectionProps) {
  return (
    <div
      className={`w-screen h-fit bg-white flex flex-col justify-between py-12 md:py-0`}
    >
      {/* 여기에 children 을 선언하곳 싶음 */}
      {children}
    </div>
  );
}

import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  solitary: boolean;
}

export default function UpperSection({ children, solitary }: SectionProps) {
  return (
    <div
      className={`w-screen ${
        solitary ? 'min-h-[1000px]' : 'min-h-[600px]'
      } bg-white flex flex-col justify-center`}
    >
      {/* 여기에 children 을 선언하곳 싶음 */}
      {children}
    </div>
  );
}

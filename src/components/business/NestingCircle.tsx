import Image from 'next/image';
import React from 'react';

interface CircleIcon {
  src: string;
  color: string;
}
export default function NestingCircle(props: CircleIcon) {
  const themeOutterClass =
    {
      blue: 'bg-[#e0e7ff]',
      red: 'bg-[#E61E2B4D]',
    }[props.color] || 'bg-grey';
  const themeClass =
    {
      blue: 'bg-[#032FF4]',
      red: 'bg-[#E61E2B]',
    }[props.color] || 'bg-black';
  return (
    <>
      <div
        className={`flex justify-center items-center w-60 h-60 rounded-[50%] ${themeOutterClass}`}
      >
        <div
          className={`flex justify-center items-center w-55 h-55  rounded-[50%] ${themeClass}`}
        >
          <Image src={props.src} alt="image" width={100} height={100} />
        </div>
      </div>
    </>
  );
}

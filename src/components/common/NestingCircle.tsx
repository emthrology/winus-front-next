import Image from 'next/image';
import React, { ReactNode } from 'react';

interface CircleIcon {
  src?: string | undefined;
  color: string;
  iconWidth: number;
  children?: ReactNode | undefined;
}
export default function NestingCircle(props: CircleIcon) {
  const themeOutterClass =
    {
      blue: 'bg-[#9eaffb]',
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
          {props.src && (
            <Image
              src={props.src}
              alt="image"
              width={props.iconWidth - 10}
              height={props.iconWidth - 10}
            />
          )}
          {props.children && <>{props.children}</>}
        </div>
      </div>
    </>
  );
}

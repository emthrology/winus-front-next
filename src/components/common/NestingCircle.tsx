import Image from 'next/image';
import React, { ReactNode } from 'react';

interface CircleIcon {
  src?: string | undefined;
  color: string;
  iconWidth: number;
  children?: ReactNode | undefined;
  diameterOutter?: number;
  diameterInner?: number;
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
      {/* w-60 h-60 (240px) */}
      <div
        style={{
          minWidth: props.diameterOutter,
          width: props.diameterOutter,
          height: props.diameterOutter,
        }}
        className={`flex justify-center items-center rounded-[50%] ${themeOutterClass}`}
      >
        {/* w-55 h-55 (220px) */}
        <div
          style={{ width: props.diameterInner, height: props.diameterInner }}
          className={`flex justify-center items-center rounded-[50%] ${themeClass}`}
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

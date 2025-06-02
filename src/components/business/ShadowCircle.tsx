import Image from 'next/image';
import React from 'react';

interface CircleProps {
  src: string;
  color: string;
}

export default function ShadowCircle(props: CircleProps) {
  // const themeClass =
  //   {
  //     blue: 'bg-[#032FF4]',
  //     red: 'bg-[#E61E2B]',
  //   }[props.color] || 'bg-black';
  return (
    <>
      <div
        className={`flex justify-center items-center w-55 h-55  rounded-[50%] bg-white`}
      >
        <Image src={props.src} alt="image" width={80} height={80} />
      </div>
    </>
  );
}

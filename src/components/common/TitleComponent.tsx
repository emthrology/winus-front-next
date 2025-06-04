import React from 'react';
interface ITitleProps {
  title: string;
}

export default function TitleComponent(props: ITitleProps) {
  return (
    <div
      className="w-screen min-h-[400px] flex justify-start items-end py-4 pl-36  text-[72px] font-bold"
      style={{
        backgroundImage: `url('/images/main/main_1.png')`,
        backgroundSize: 'cover', // bg-cover
        backgroundPosition: 'top', // bg-center
      }}
    >
      <span>{props.title}</span>
    </div>
  );
}

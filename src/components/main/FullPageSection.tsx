import React from 'react';

interface ISectionProps {
  pageNum: number;
  bgColor: string;
  bgImage: string | undefined;
  pageRefs: React.RefObject<HTMLDivElement[]>;
  isLast?: boolean; // 추가
  children?: React.ReactNode;
}

const Section = (props: ISectionProps) => {
  return (
    <div
      ref={(element) => {
        props.pageRefs.current[props.pageNum] = element!;
      }}
      className={`w-screen ${
        props.isLast ? 'h-auto' : `${'h-auto md:h-screen'}`
      } ${props.bgColor} snap-start`}
      style={
        props.bgImage
          ? {
              backgroundImage: `url(${props.bgImage})`,
              backgroundSize: 'cover', // bg-cover
              backgroundPosition: 'bottom', // bg-center
            }
          : {}
      }
    >
      {props.children}
    </div>
  );
};

export default Section;

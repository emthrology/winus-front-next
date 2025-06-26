import Image from 'next/image';
import React from 'react';

export default function SecondSectionBottomImages() {
  return (
    <>
      {/* mv images - pc */}
      <div className="hidden lg:flex max-w-screen overflow-hidden w-full flex-col md:flex-row justify-between gap-4 my-8 md:my-16 ">
        {[
          'election_movement_second_2.png',
          'election_movement_second_3.png',
          'election_movement_second_4.png',
        ].map((image, idx) => (
          <Image
            key={idx}
            src={`/images/election/movement/${image}`}
            width={650}
            height={368}
            alt="mvs"
            className="w-full md:w-1/3 h-auto object-cover "
          />
        ))}
      </div>
      {/* mv images - mobile */}
      <div className="lg:hidden flex max-w-screen overflow-hidden w-full my-8 md:my-16 ">
        <Image
          src={`/images/election/movement/election_movement_second_mobile.png`}
          width={650}
          height={368}
          alt="mvs"
          className="w-full h-auto object-cover "
        />
      </div>
    </>
  );
}

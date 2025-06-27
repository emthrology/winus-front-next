import React from 'react';
import Image from 'next/image';
export default function ElectionIntroSecondSection() {
  return (
    <div className=" w-screen mx-auto h-fit bg-white z-1">
      {/* 하단 */}
      <div className="z-10 w-full h-full flex items-end max-w-8xl px-4">
        <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-28">
          <div className="flex items-center lg:items-start justify-center lg:justify-end lg:h-1/2">
            {/* <Image
              src="/images/election/intro/election_intro_second_lower_left.png"
              width={492}
              height={148}
              alt="lower logo"
            /> */}
            <div className="flex flex-col bg-white">
              <div>
                <span
                  className="text-3xl sm:text-5xl text-[#E61E2B] font-semibold"
                  style={{ textEmphasis: 'filled #e61e2b' }}
                >
                  다시 찾아오는 기업
                </span>
                <span className="text-3xl sm:text-5xl text-[#E61E2B] font-semibold">
                  에는 <br />
                </span>
              </div>

              <span className="text-center sm:text-left text-3xl sm:text-5xl text-[#E61E2B] ">
                이유가 있습니다.
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Image
              className="z-10"
              src="/images/main/main_4_2.png"
              alt="WINUS"
              width={400}
              height={400}
              priority
              style={{
                maxWidth: '70vw',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

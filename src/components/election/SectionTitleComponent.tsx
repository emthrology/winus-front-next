import Image from 'next/image';
import React from 'react';

export default function SectionTitleComponent() {
  return (
    <div className='relative h-[270px] sm:h-[270px] lg:h-[460px] bg-cover bg-right-bottom bg-[url("/images/main/election_mobile_title_bg.png")] md:bg-[url("/images/election/election_gradient.png")] z-1'>
      <div className="flex flex-col md:flex-row justify-between items-start max-w-[1536px] h-full px-6 mx-auto relative">
        {/* 텍스트 영역 */}
        <div
          className="
        flex flex-col justify-center lg:justify-start min-w-[250px] space-y-8 sm:space-y-4 my-16 md:mt-16
        relative z-20
        md:static md:z-auto
      "
        >
          <div>
            <p className="text-white text-3xl lg:text-[42px] font-[400]">
              후보님의 든든한
            </p>
            <p className="text-white text-3xl lg:text-[60px] font-bold mb-4">
              파트너 윈어스입니다
            </p>
          </div>
          <div>
            <p className="flex-1 text-white text-sm md:text-base lg:text-2xl font-[100] md:font-[300]">
              선거전략 / 선거기획 / 공보 / 여론조사 등
              <br />
              후보님의 손과 발이 되어 드립니다.
            </p>
          </div>
        </div>
        {/* 이미지 영역 */}
        <div
          className="
        flex flex-col justify-end items-end h-full w-1/2 md:w-1/3 min-w-[200px] max-w-[300px] md:max-w-[400px]
        absolute bottom-0 right-0 z-10
        md:static md:z-auto
      "
        >
          <div className="relative w-full h-[220px] sm:h-[220px] md:h-[350px]">
            <Image
              src="/images/main/main_4_1.png"
              alt="1"
              fill
              className="object-cover"
              style={{ objectPosition: 'top' }}
              priority
              draggable={false}
              sizes="(max-width: 768px) 220px, (max-width: 1024px) 220px, 350px"
            />
          </div>
        </div>
      </div>
    </div>

    // <div className='relative h-[250px] sm:h-[250px] md:h-[460px] bg-cover bg-right-bottom bg-[url("/images/main/election_mobile_title_bg.png")] md:bg-[url("/images/election/election_gradient.png")] z-1'>
    //   <div className="flex justify-between items-center max-w-[1536px] h-full px-6 mx-auto">
    //     {/* 텍스트 영역 */}
    //     <div className="flex flex-col justify-center lg:justify-start min-w-[250px] space-y-4 my-16 md:mt-16 ">
    //       <div>
    //         <p className="text-white text-3xl lg:text-[42px] font-normal">
    //           후보님의 든든한
    //         </p>
    //         <p className="text-white text-3xl lg:text-[60px] font-bold mb-4">
    //           파트너 윈어스입니다
    //         </p>
    //       </div>
    //       <div>
    //         <p className="flex-1 text-white text-base lg:text-2xl font-[300]">
    //           선거전략 / 선거기획 / 공보 / 여론조사 등
    //           <br />
    //           후보님의 손과 발이 되어 드립니다.
    //         </p>
    //       </div>
    //     </div>
    //     {/* 이미지 영역 (PC/모바일 모두) */}
    //     <div className="flex flex-col justify-end items-end h-full w-1/3 min-w-[200px] max-w-[300px] md:max-w-[400px]  ">
    //       <div className="relative w-full h-[220px] sm:h-[220px] md:h-[350px]">
    //         <Image
    //           src="/images/main/main_4_1.png"
    //           alt="1"
    //           fill
    //           className="object-cover"
    //           style={{ objectPosition: 'top' }}
    //           priority
    //           draggable={false}
    //           sizes="(max-width: 768px) 220px, (max-width: 1024px) 220px, 350px"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

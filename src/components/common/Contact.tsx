'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
// interface IContactProps {
//   pageRef: React.RefObject<HTMLDivElement | null>;
// }
interface IContactProps {
  theme: string;
}

const Contact = (props: IContactProps) => {
  const pathname = usePathname();

  return (
    <div className="z-1 w-screen h-64 overflow-y-hidden bg-[#f4f3ff]">
      <div className="flex flex-col justify-around mt-6 mb-12 mx-36">
        <div className="flex justify-between px-2">
          <div className="left">
            <p className="text-2xl md:text-3xl font-bold mt-1 text-black">
              지금 무료로 상담받으세요!
            </p>
            <div className="space-x-2 my-1">
              <span className="text-md text-black">문의전화</span>
              <span
                className={`text-md font-bold ${
                  props.theme == 'blue' ? 'text-[#032ff4]' : 'text-[#e61e2b]'
                } `}
              >
                02-915-3702
              </span>
            </div>
          </div>
          {pathname != '/contact' && (
            <Link href="/contact" className="right">
              <button
                className={`shadow-2xl h-[50px] min-w-[200px] ${
                  props.theme == 'blue' ? 'bg-[#032ff4]' : 'bg-[#e61e2b]'
                }  text-white text-md rounded-[10px]`}
              >
                견 적 문 의
              </button>
            </Link>
          )}
        </div>

        <hr className="border-[#727272]" />
        {/* 4개 서비스 설명 */}
        <div className="relative mt-3 w-full max-w-8xl grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="flex flex-col items-start">
            <div className="font-bold text-black mb-1 text-lg">이메일</div>
            <div className=" text-[#727272] font-thin mb-2 text-left text-md">
              cat302302@wewinus.com
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold text-black mb-1 text-lg">카카오톡</div>
            <div className=" text-[#727272] mb-2 text-left text-md">
              cat302302
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold text-black mb-1 text-lg">업무시간</div>
            <div className=" text-[#727272] mb-2 text-left text-md">
              평일 09:00 ~ 18:00
              <br />
              주말, 공유일 휴무
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold text-black mb-1 text-lg">주소</div>
            <div className=" text-[#727272] mb-2 text-left text-md">
              서울특별시 성북구 화랑로19길 68
              <br />
              대건빌딩 3층
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

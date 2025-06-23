import React from 'react';
import Contact from './Contact';
import Image from 'next/image';
import Link from 'next/link';

interface IFooterProps {
  contactTheme: string;
}
const Footer = (props: IFooterProps) => {
  return (
    <footer className="w-screen bg-[#000] text-white flex flex-col items-center justify-center mb-12 pb-12 lg:pb-0">
      <Contact theme={props.contactTheme} />
      {/* PC: flex-row, 모바일: flex-col */}
      <div className="w-full px-4 py-4 lg:px-24 lg:py-0 flex flex-col lg:flex-row justify-between items-center lg:h-48">
        {/* 모바일 영역: 로고 */}
        <div
          id="mobile-logo"
          className=" lg:hidden flex flex-row justify-end items-center mt-4 lg:mt-0 lg:flex-col lg:justify-center lg:items-end "
        >
          <Link href="/">
            <Image
              src="/images/logo_bg_transparent.png"
              alt="WINUS"
              width={160}
              height={120}
              className="opacity-100 max-w-[60vw] lg:max-w-[200px] h-auto"
              priority
            />
          </Link>
        </div>
        {/* 왼쪽 영역 */}
        <div
          id="left"
          className="w-full flex flex-col lg:flex-row lg:justify-between lg:min-w-[700px]"
        >
          <div className="flex flex-col justify-between py-4 lg:py-8 w-full">
            {/* 링크 영역: 모바일/PC 모두 flex-row */}
            <div className="flex flex-row justify-center lg:justify-start space-x-2">
              <Link href={'/'}>회사소개서</Link>
              <span>|</span>
              <Link href={'/contact'}>견적문의</Link>
              <span>|</span>
              <Link href={'/'}>개인결제</Link>
            </div>
            {/* 회사 정보 */}
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start mt-4 text-xs text-[#727272] lg:text-base">
              <span>(주)윈어스 대표: 박상백</span>
              <span>
                TEL : 02-915-3702 &nbsp;&nbsp; Mail : wewinus302@gmail.com
              </span>
              <span className="hidden lg:inline">
                업무시간 : 평일 09:00 ~ 18:00 주말, 공휴일 휴무 | 주소 :
                서울특별시 성북구 화랑로19길 68, 대건빌딩 3층
              </span>
              <span className="lg:hidden">
                업무시간 : 평일 09:00 ~ 18:00 주말, 공휴일 휴무 <br /> 주소 :
                서울특별시 성북구 화랑로19길 68, 대건빌딩 3층
              </span>
            </div>
            {/* 저작권 */}
            <div className="flex justify-center lg:justify-start mt-2 text-xs text-[#727272] lg:text-base">
              Copyright 2025 주식회사 윈어스 All Right Reserved
            </div>
          </div>
        </div>
        {/* 오른쪽 영역: 로고 */}
        <div
          id="right"
          className="hidden lg:flex flex-row justify-end items-center lg:mt-0 lg:flex-col lg:justify-center lg:items-end "
        >
          <Link href="/">
            <Image
              src="/images/logo_bg_transparent.png"
              alt="WINUS"
              width={160}
              height={120}
              className="opacity-100 max-w-[60vw] lg:max-w-[200px] h-auto"
              priority
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Contact from './Contact';
import Image from 'next/image';
import Link from 'next/link';

interface IFooterProps {
  contactTheme: string;
}
const Footer = (props: IFooterProps) => {
  return (
    <>
      <footer className="w-full  bg-gray-800 text-white flex flex-col items-center justify-center mb-12">
        <Contact theme={props.contactTheme} />
        <div className="h-48 w-full px-24 flex flex-row justify-between">
          <div
            id="left"
            className="flex flex-1 flex-row justify-between min-w-[900px]"
          >
            <div className="flex flex-col jsutify-between py-8">
              <div className="flex flex-row justify-start space-x-2">
                <Link href={'/'}>회사소개서</Link>
                <span>|</span>
                <Link href={'/contact'}>견적문의</Link>
                <span>|</span>
                <Link href={'/'}>개인결제</Link>
              </div>
              <div className="flex flex-col justify-start mt-2">
                <span>(주)윈어스 대표: 박상백</span>
                <span>
                  TEL : 02-915-3702 &nbsp;&nbsp; Mail : cat302302@wewinus.com
                </span>
                <span>
                  업무시간 : 평일 09:00 ~ 18:00 주말, 공휴일 휴무 | 주소 :
                  서울특별시 성북구 화랑로19길 68, 대건빌딩 3층
                </span>
              </div>
              <div className="flex justify-start mt-2">
                Copyright 2025 주식회사 윈어스 All Right Reserved
              </div>
            </div>
          </div>
          <div
            id="right"
            className="flex flex-col justify-center items-end min-w-[480px]"
          >
            <Link href="/">
              <Image
                src="/images/logo_bg_transparent.png"
                alt="WINUS"
                width={200}
                height={150}
                className="opacity-100"
                priority
                style={{
                  maxWidth: '70vw',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

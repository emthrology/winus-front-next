'use client';
import Image from 'next/image';
import React from 'react';
import { usePageStore } from '@/store/pageStore';
import Icon from '@mdi/react';
import { mdiDownload } from '@mdi/js';
interface IFooterProps {
  bg: string;
}
const Footer = (props: IFooterProps) => {
  const scrollRef = usePageStore((state) => state.scrollRef);
  const handleScrollTop = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <>
      <footer
        className={`fixed bottom-0 w-full h-12 ${
          props.bg == 'blue' ? 'bg-[#032ff4]' : 'bg-[#e61e2b]'
        } text-white flex flex-col items-center justify-center`}
      >
        <div className="w-full px-24 flex flex-row justify-between">
          <div
            id="left"
            className="flex flex-fow justify-between min-w-[480px]"
          >
            <div className="flex items-center justify-center mr-4 h-12 w-[150px] bg-[#001ea3] text-xs">
              CONTACT US
            </div>
            <div className="flex flex-row flex-1 items-center justify-between text-sm">
              <a href="mailto:cat302302@wewinus.com">cat302302@wewinus.com</a>
              <span>|</span>
              <a href="tel:029153702" className="flex items-center">
                <Image
                  src={'/images/footer/footer_icon_phone.png'}
                  alt="phone"
                  width={16}
                  height={16}
                />
                &nbsp;&nbsp;02-915-3702
              </a>
            </div>
          </div>
          <div
            id="right"
            className="flex flex-fow justify-between min-w-[480px]"
          >
            <div className="flex flex-row items-center justify-between text-sm space-x-2">
              <a
                href="https://drive.google.com/file/d/1FeC5v_Bcn4THagUJjqVl_YE8AEoJUUZw/view"
                target="_blank"
                download
                className="flex justify-center items-center h-8 min-w-[160px] bg-white rounded-[10px] space-x-1"
              >
                <Icon path={mdiDownload} size={1} color={'blue'} />
                <b className="text-black">회사소개서</b>
                <span className="text-black">다운로드</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1T8QWAlQUUr-WHFakjZGGmAkl5bXEzQKS/view?usp=sharings"
                target="_blank"
                download
                className="flex justify-center items-center h-8 min-w-[160px] bg-white rounded-[10px] space-x-1"
              >
                <Icon path={mdiDownload} size={1} color={'red'} />
                <b className="text-black">선거소개서</b>
                <span className="text-black">다운로드</span>
              </a>
            </div>
            <div
              onClick={handleScrollTop}
              className="flex items-center justify-center px-4 h-12 bg-[#001ea3] text-xs"
            >
              <Image
                src="/images/footer/footer_top.png"
                alt="top"
                width={24}
                height={23}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { usePageStore } from '@/store/pageStore';
import Icon from '@mdi/react';
import { mdiDownload, mdiLoading } from '@mdi/js';
import useThemeStore from '@/store/themeStore';
import Link from 'next/link';

const Footer = () => {
  const [downloading, setDownloading] = useState(false);
  const [activeBtnKey, setActiveBtnKey] = useState<string | null>(null);
  const handleClick = (key: string) => {
    setActiveBtnKey(key);
    setDownloading(true);
    // 2초 후 아이콘 복구 (실제 다운로드 완료 감지는 불가)
    setTimeout(() => {
      setDownloading(false);
      setActiveBtnKey(null);
    }, 3000);
  };
  const scrollRef = usePageStore((state) => state.scrollRef);
  const handleScrollTop = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const themeColor = useThemeStore((state) => state.themeColor);
  const bgThemeClass =
    {
      blue: 'bg-[#001ea3]',
      red: 'bg-[#94161E]',
    }[themeColor] || 'bg-white';

  return (
    <>
      <footer
        className={`z-10 fixed bottom-0 w-full h-12 shadow-[0_4px_8px_2px_rgba(0,0,0,0.48)] ${
          themeColor == 'blue' ? 'bg-[#032ff4] ' : 'bg-[#e61e2b] '
        } text-white flex flex-col items-center justify-center`}
      >
        <div className="w-full px-24 flex flex-row justify-between">
          <div
            id="left"
            className="flex flex-fow justify-between min-w-[480px]"
          >
            <Link
              href="/contact"
              className={`flex items-center justify-center mr-4 h-12 w-[150px] ${bgThemeClass} text-xs`}
            >
              CONTACT US
            </Link>
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
                href="https://drive.google.com/uc?export=download&id=1FeC5v_Bcn4THagUJjqVl_YE8AEoJUUZw"
                // target="_blank"
                // rel="noopener noreferrer"
                download
                onClick={() => handleClick('company')}
                className="flex justify-center items-center h-8 min-w-[160px] bg-white rounded-[10px] space-x-1"
              >
                {downloading && activeBtnKey == 'company' ? (
                  <Icon
                    path={mdiLoading}
                    size={1}
                    color="blue"
                    spin // mdi/react의 spin prop (로딩 애니메이션)
                  />
                ) : (
                  <Icon path={mdiDownload} size={1} color="blue" />
                )}
                <b className="text-black text-[13px]">회사소개서</b>
                <span className="text-black text-[13px]">다운로드</span>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1T8QWAlQUUr-WHFakjZGGmAkl5bXEzQKS"
                // target="_blank"
                // rel="noopener noreferrer"
                download
                onClick={() => handleClick('election')}
                className="flex justify-center items-center h-8 min-w-[160px] bg-white rounded-[10px] space-x-1"
              >
                {downloading && activeBtnKey == 'election' ? (
                  <Icon
                    path={mdiLoading}
                    size={1}
                    color="red"
                    spin // mdi/react의 spin prop (로딩 애니메이션)
                  />
                ) : (
                  <Icon path={mdiDownload} size={1} color="red" />
                )}
                <b className="text-black text-[13px]">선거소개서</b>
                <span className="text-black text-[13px]">다운로드</span>
              </a>
            </div>
            <div
              onClick={handleScrollTop}
              className={`flex items-center justify-center px-4 h-12 ${bgThemeClass} text-xs`}
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

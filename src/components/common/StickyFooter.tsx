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
        className={`z-99 fixed bottom-0 w-full shadow-[0_4px_8px_2px_rgba(0,0,0,0.48)] ${
          themeColor == 'blue' ? 'bg-[#032ff4]' : 'bg-[#e61e2b]'
        } text-white`}
      >
        {/* PC: flex-row, 모바일: flex-col */}
        <div className="hidden lg:flex flex-row items-center justify-between px-24 h-12">
          {/* 좌측: CONTACT US + 연락처 */}
          <div className="flex flex-row items-center min-w-[150px]">
            <Link
              href="/contact"
              className={`flex items-center justify-center mr-4 h-12 w-[150px] ${bgThemeClass} text-xs`}
            >
              CONTACT US
            </Link>
            <div className="flex flex-row items-center text-sm space-x-2">
              <a
                href="mailto:cat302302@wewinus.com"
                className="flex items-center min-w-[190px]"
              >
                <Image
                  src={'/images/footer/footer_icon_mail.png'}
                  alt="phone"
                  width={16}
                  height={16}
                />
                &nbsp;cat302302@wewinus.com
              </a>
              <span>|</span>
              <a
                href="tel:029153702"
                className="flex items-center min-w-[110px] mr-2"
              >
                <Image
                  src={'/images/footer/footer_icon_phone.png'}
                  alt="phone"
                  width={16}
                  height={16}
                />
                &nbsp;02-915-3702
              </a>
            </div>
          </div>
          {/* 우측: 다운로드 버튼 + TOP */}
          <div className="flex flex-row items-center min-w-[150px] lg:space-x-8 xl:space-x-16">
            {/* 다운로드 버튼들 */}
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
              className={`flex items-center min-w-[56px] justify-center px-4 h-12 ${bgThemeClass} text-xs`}
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

        {/* 모바일: 2단, 각 단은 flex-row */}
        <div className="flex flex-col lg:hidden w-full px-4 py-2 space-y-2">
          {/* 1단: 연락처 */}
          <div className="flex flex-row items-center justify-center space-x-4 w-full">
            <Link
              href="mailto:cat302302@wewinus.com"
              className="flex items-center text-sm sm:text-base  justify-center"
            >
              <Image
                src={'/images/footer/footer_icon_mail.png'}
                alt="phone"
                width={16}
                height={16}
              />
              &nbsp;cat302302@wewinus.com
            </Link>
            <span>|</span>
            <Link
              href="tel:029153702"
              className="flex items-center text-sm sm:text-base  justify-center"
            >
              <Image
                src={'/images/footer/footer_icon_phone.png'}
                alt="phone"
                width={16}
                height={16}
              />
              <span className="ml-1">02-915-3702</span>
            </Link>
          </div>
          {/* 2단: 다운로드 버튼들 */}
          <div className="flex flex-row items-center justify-center w-full space-x-2">
            <a
              href="https://drive.google.com/uc?export=download&id=1FeC5v_Bcn4THagUJjqVl_YE8AEoJUUZw"
              download
              className="flex-1 flex justify-center items-center max-w-[155px] h-8 bg-white rounded-[10px] space-x-1"
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
              download
              className="flex-1 flex justify-center items-center max-w-[155px] h-8 bg-white rounded-[10px] space-x-1"
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
        </div>
      </footer>

      {/* <footer
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
              className={`hidden lg:flex items-center justify-center mr-4 h-12 w-[150px] ${bgThemeClass} text-xs`}
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
              className={`hidden lg:flex items-center justify-center px-4 h-12 ${bgThemeClass} text-xs`}
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
      </footer> */}
    </>
  );
};

export default Footer;

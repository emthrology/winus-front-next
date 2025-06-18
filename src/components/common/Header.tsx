'use client';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
const menuList = [
  { label: 'Business', href: '/business' },
  { label: 'About us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
  { label: 'Notice', href: '/notice' },
  { label: '선거', href: '/election' },
];
export default function Header() {
  const pathname = usePathname();
  //useEffect로 router의 현재 path와 일치하는 메뉴의 글자 색상을 변경
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-100 fixed top-0 left-0 w-screen bg-black text-white flex items-center justify-between px-4 lg:px-14 h-16 lg:h-auto">
      {/* 로고 및 전화번호 영역 */}
      <div className="flex justify-between items-center w-full lg:max-w-[320px] min-w-[150px] py-2">
        <Link href="/">
          <Image
            src="/images/logo_bg_transparent.png"
            alt="WINUS"
            width={120}
            height={40}
            priority
            className="max-w-[40vw] lg:max-w-[70vw] h-auto"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-2 lg:space-x-2  ">
          <Image
            src="/images/header/header_phone.png"
            alt="header_phone"
            width={22}
            height={22}
            className="lg:w-[30px] lg:h-[30px]"
          />
          <span className="text-base lg:text-xl font-bold">02-915-3702</span>
        </div>
        {/* 모바일 햄버거 메뉴 버튼 */}
        <button
          className="lg:hidden ml-4"
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="4" y1="7" x2="14" y2="7" />
            <line x1="4" y1="14" x2="24" y2="14" />
            <line x1="4" y1="21" x2="14" y2="21" />
          </svg>
        </button>
      </div>

      {/* PC 내비게이션: 데스크탑에서는 보이고, 모바일에서는 햄버거 메뉴 클릭 시만 보임 */}
      <nav
        className={`
          absolute top-16 left-0 w-full bg-black hidden lg:static lg:block lg:w-auto
        `}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8">
          {menuList.map((menu) => (
            <li key={menu.href}>
              <Link
                href={menu.href}
                className={`font-noto font-[300] block py-2 px-4 lg:py-0 lg:px-0
                  ${
                    pathname === menu.href
                      ? pathname !== '/election'
                        ? 'text-[#032FF4] font-semibold'
                        : 'text-[#E61E2B] font-semibold'
                      : 'text-white'
                  }
                `}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* 모바일 메뉴 오버레이 */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
          <button
            className="absolute top-20 right-8 text-black"
            aria-label="메뉴 닫기"
            onClick={() => setMenuOpen(false)}
          >
            <Icon path={mdiClose} size={1.5} />
          </button>
          <nav>
            <ul className="flex flex-col items-center space-y-6 pb-24 text-black text-xl font-noto font-medium">
              {menuList.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.href} onClick={() => setMenuOpen(false)}>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

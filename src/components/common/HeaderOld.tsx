import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <>
      {/* bg-[rgba(31,41,55,0.8)] */}
      <header className="z-100 fixed top-0 right-0 w-full bg-black text-white flex items-center justify-between px-24">
        <div className="flex flex-row justify-between min-w-[380px] py-2 ">
          <Link href="/">
            <Image
              src="/images/logo_bg_transparent.png"
              alt="WINUS"
              width={180}
              height={120}
              priority
              style={{
                maxWidth: '70vw',
                height: 'auto',
              }}
            />
          </Link>
          <div className="flex items-center space-x-2">
            <Image
              src="/images/header/header_phone.png"
              alt="header_phone"
              width={30}
              height={30}
            />
            <span className="text-xl font-bold">02-915-3702</span>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/business" className="font-sans hover:underline">
                Business
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-sans hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="font-sans hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-sans hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/notice" className="font-sans hover:underline">
                Notice
              </Link>
            </li>
            <li>
              <Link href="/election" className="font-sans hover:underline">
                선거
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

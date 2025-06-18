import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';
import StikcyFooter from '@/components/common/StickyFooter';
import Header from '@/components/common/Header';

const notoSans = localFont({
  src: [
    { path: './fonts/NotoSans-Thin.ttf', weight: '100', style: 'normal' },
    { path: './fonts/NotoSans-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: './fonts/NotoSans-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/NotoSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/NotoSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/NotoSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/NotoSans-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/NotoSans-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: './fonts/NotoSans-Black.ttf', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-noto-sans',
});

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'Winus',
  description: 'Winus 홈페이지입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable} ${notoSans.variable}`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        ></meta>
      </head>
      <body className="font-pretendard z-1 relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col  w-full max-w-screen-sm ">
          {children} {/* PullPage 등 메인 콘텐츠 */}
        </main>
        <StikcyFooter />
      </body>
    </html>
  );
}

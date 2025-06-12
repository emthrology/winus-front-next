import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/common/Header';
import StikcyFooter from '@/components/common/StickyFooter';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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
    <html
      lang="en"
      className={`${pretendard.variable} ${notoSansKr.className}`}
    >
      <head></head>
      <body className="font-pretendard z-1 relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">
          {children} {/* PullPage 등 메인 콘텐츠 */}
        </main>
        <StikcyFooter />
      </body>
    </html>
  );
}

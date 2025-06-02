import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import StikcyFooter from '@/components/common/StickyFooter';
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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body className="z-1 relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">
          {children} {/* PullPage 등 메인 콘텐츠 */}
        </main>
        {/* TODO zustand 설정해서 헤더 메뉴별로 색깔 동기화 */}
        <StikcyFooter bg={'blue'} />
      </body>
    </html>
  );
}

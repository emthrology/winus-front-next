import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/common/Header';
import StikcyFooter from '@/components/common/StickyFooter';

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
    <html lang="en" className={pretendard.variable}>
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

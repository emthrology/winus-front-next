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
        <meta
          name="description"
          content="우리가 이기는 방식, 윈어스 입니다. 기획, 마케팅, 디자인, 대행, 선거 홍보 등 다양한 영역에서 전략과 실행을 아우르는 종합 콘텐트 그룹입니다."
        />
        <meta
          name="keywords"
          content="선거, 행사, 마케팅, 디자인, 영상, 기획, 윈어스, 주식회사 윈어스, 대행사, 기획사, 홍보, 공공기업, 사기업, 네트워크마케팅, 문화, 기업행사, 전시, 전당대회, 코스메틱, 프로모션, VIP, 라운지, 이벤트, 교육장, 인테리어, 사무실, 방송실, 유튜브촬영, 교회, 수련회, 청소년, 청년, 총선, 대선, 대통령선거, 투표, 선거캠프, 기자회견, 보궐선거"
        />
        <meta name="author" content="윈어스"></meta>
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

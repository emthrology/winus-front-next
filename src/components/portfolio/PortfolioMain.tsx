'use client';
import { useSearchParams } from 'next/navigation';
import ButtonGroup from '@/components/common/ButtonGroup';
import TitleComponent from '@/components/common/TitleComponent';
import DesignFirstSection from '@/components/portfolio/design/DesignFirstSection';
import DesignSecondSection from '@/components/portfolio/design/DesignSecondSection';
import useThemeStore from '@/store/themeStore';
import React, { useState, useEffect, useMemo } from 'react';
import DesignThirdSection from '@/components/portfolio/design/DesignThirdSection';
import DesignFourthSection from '@/components/portfolio/design/DesignFourthSection';
import EventFirstSection from '@/components/portfolio/event/EventFirstSection';
import EventSecondSection from '@/components/portfolio/event/EventSecondSection';
import EventThirdSection from '@/components/portfolio/event/EventThirdSection';
import Footer from '@/components/common/Footer';
import ElectionTitle from '@/components/portfolio/election/ElectionTitle';
import ElectionFirstSection from '@/components/portfolio/election/ElectionFirstSection';
import ElectionSecondSection from '@/components/portfolio/election/ElectionSecondSection';
import ElectionThirdSection from '@/components/portfolio/election/ElectionThirdSection';
import { usePrevious } from '@/hooks';

export default function PartfolioMain() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  // const themeColor = useThemeStore((state) => state.themeColor);
  const setThemeColor = useThemeStore((state) => state.setThemeColor);
  const [idx, setIdx] = useState(0);
  const handleIdx = (idx: number) => {
    setThemeColor(pageData[idx].theme);
    if (idx === 3) {
      window.open(
        'https://www.youtube.com/watch?v=qDhfRjGMv7o&list=PLKAK7oej5Kto0UNj6UUJWUToy_UKW6PUM&index=1',
        '_blank'
      );
      return; // setIdx를 실행하지 않으려면 return
    }
    setIdx(idx);
  };

  const pageData = [
    {
      label: '디자인',
      theme: 'blue',
      sectionData: {
        design: {},
        display: {},
        interior: {
          images: [
            '/images/portfolio/design/portfolio_design_interior_1.png',
            '/images/portfolio/design/portfolio_design_interior_2.png',
            '/images/portfolio/design/portfolio_design_interior_3.png',
            '/images/portfolio/design/portfolio_design_interior_4.png',
          ],
        },
        gallery: {
          images: [
            '/images/portfolio/design/gallery/portfolio_design_gallery_1.png',
            '/images/portfolio/design/gallery/portfolio_design_gallery_2.png',
            '/images/portfolio/design/gallery/portfolio_design_gallery_3.png',
            '/images/portfolio/design/gallery/portfolio_design_gallery_4.png',
            '/images/portfolio/design/gallery/portfolio_design_gallery_5.png',
            '/images/portfolio/design/gallery/portfolio_design_gallery_6.png',
            '/images/portfolio/design/gallery/portfolio_design_gallery_7.png',
            '/images/portfolio/design/gallery/portfolio_design_gallery_8.png',
          ],
        },
      },
    },
    {
      label: '행사기획',
      theme: 'blue',
      sectionData: {
        first: {
          images: [
            '/images/portfolio/event/portfolio_event_upper_1.png',
            '/images/portfolio/event/portfolio_event_upper_2.png',
          ],
          buttonData: [
            { label: '#특별한', theme: 'blue' },
            { label: '#감동적인', theme: 'red' },
            { label: '#즐거움', theme: 'red' },
          ],
        },
        second: {
          images: [
            {
              title: 'GOVERMENT OFFICE',
              description: 'LH경기북부지역본부 사옥 이전 기념식',
              image: '/images/portfolio/event/portfolio_event_lower_1.png',
            },
            {
              title: 'PRIVATE ENTERPRISE',
              description: '애즈플레이 Bronze Moment Party',
              image: '/images/portfolio/event/portfolio_event_lower_2.png',
            },
            {
              title: 'CHURCH',
              description: '전국 교회 청년 연합 수련회',
              image: '/images/portfolio/event/portfolio_event_lower_3.png',
            },
          ],
        },
        third: {
          circleData: [
            {
              def1: '전문적인 기획 및',
              def2: '체계적인 준비',
            },
            {
              def1: '실외, 실내',
              def2: '다수 경헙',
            },
            {
              def1: '공기업, 사기업,',
              def2: '교회행사',
            },
          ],
        },
      },
    },
    {
      label: '선거',
      theme: 'red',
      sectionData: {
        fourth: {
          listData: [
            {
              title: '통합 홍보 솔루션 제안',
              defs: [
                '선거전략에 기반한 메시지 작성',
                '문자, 카드뉴스, 공보물의 기획안 작성',
                '유권자별 맞춤형 홍보 방안 제시',
              ],
            },
            {
              title: 'P.I 기획',
              defs: [
                '선거전략에 기반한 메시지 작성',
                '문자, 카드뉴스, 공보물의 기획안 작성',
                '유권자별 맞춤형 홍보 방안 제시',
              ],
            },
            {
              title: 'SWOT 분석',
              defs: [
                '후보자 분석',
                '경쟁후보 분석',
                '선거구도에 기반한 선거전략 수립',
                '유권자 맞춤형 선거전략 수립',
              ],
            },
            {
              title: '맞춤형 메시지 전략',
              defs: [
                '캐치프레이즈, 슬로건 작성',
                '출마의변 및 스피치 원고 작성',
                '스토리텔링에 기반한 선거전략 수립',
                '선거 홍보물 기획',
              ],
            },
          ],
        },
      },
    },
    {
      label: '영상',
      theme: 'blue',
    },
  ];

  const sectionComponents = useMemo(() => {
    if (idx === 0) {
      const data = pageData[0].sectionData;
      return [
        <DesignFirstSection key="design" />,
        <DesignSecondSection key="display" />,
        <DesignThirdSection key="interior" images={data?.interior?.images} />,
        <DesignFourthSection key="images" images={data?.gallery?.images} />,
      ];
    }
    if (idx === 1) {
      const data = pageData[1].sectionData;
      return [
        <EventFirstSection
          key="event_first"
          images={data?.first?.images}
          buttonData={data?.first?.buttonData}
        />,
        <EventSecondSection
          key="event_second"
          images={data!.second!.images!}
        />,
        <EventThirdSection
          circleData={data!.third!.circleData}
          key="event_third"
        />,
      ];
    }
    if (idx === 2) {
      const data = pageData[2].sectionData;
      return [
        <ElectionTitle key="election_title" />,
        <ElectionFirstSection key="election_first" />,
        <ElectionSecondSection key="election_second" />,
        <ElectionThirdSection
          key="election_third"
          list={data!.fourth!.listData}
        />,
      ];
    }
    // 다른 idx에 따라 다른 sections 반환
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);
  // usePrevious훅으로 idx 이전값 기억
  const prevIdx = usePrevious(idx);
  useEffect(() => {
    if (idx == 3) {
      window.open(
        'https://www.youtube.com/watch?v=qDhfRjGMv7o&list=PLKAK7oej5Kto0UNj6UUJWUToy_UKW6PUM&index=1',
        '_blank'
      );
      setIdx(Number(prevIdx)); // 직전 idx로 복원
    }
  }, [prevIdx, idx]);
  useEffect(() => {
    if (tab) setIdx(Number(tab));
  }, [tab]);
  useEffect(() => {
    // 마운트 시 실행지역
    setThemeColor(pageData[idx].theme);
    return () => {
      // 언마운트 시 실행지역 (페이지 이동, 컴포넌트 제거 등)
      setThemeColor(pageData[idx].theme);
    };
  }, [setThemeColor]);
  // const sectionComponents = pageData[idx].sections || [];
  return (
    <div>
      <TitleComponent title="Portfolio." />
      <ButtonGroup buttonData={pageData} activeIdx={idx} onChange={handleIdx} />
      {sectionComponents.map((section) => section)}
      <Footer contactTheme={pageData[idx].theme} />
    </div>
  );
}

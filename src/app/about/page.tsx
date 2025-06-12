'use client';
import History_component from '@/components/about/history/History_component';
import Intro_component_lower from '@/components/about/intro/Intro_component_lower';
import Intro_component_upper from '@/components/about/intro/Intro_component_upper';
import LowerSection from '@/components/about/LowerSection';
import Organizatino_component from '@/components/about/organization/Organizatino_component';
import UpperSection from '@/components/about/UpperSection';
import ButtonGroup from '@/components/common/ButtonGroup';
import Footer from '@/components/common/Footer';
import TitleComponent from '@/components/common/TitleComponent';
import React, { useState, useEffect } from 'react';
import useThemeStore from '@/store/themeStore';
export default function Page() {
  const pageTitle = 'About us.';
  const [idx, setIdx] = useState(0);
  const setThemeColor = useThemeStore((state) => state.setThemeColor);
  const handleIdx = (idx: number) => {
    setIdx(idx);
  };
  // useEffect 사용시 의존성 배열을 비운 채로 선언하면 마운트 시 한번, 언마운트시 한번 실행된다
  // 이를 활용해 vue의 omMounted, onBeforeUnmount 처럼 활용이 가능하다
  // 의존성배열은 빈 배열로 필수적인 듯하다. 없애라고 경고가 뜨는데, 없애보면 작동을 안한다
  useEffect(() => {
    // 마운트 시 실행
    return () => {
      // 언마운트 시 실행 (페이지 이동, 컴포넌트 제거 등)
      setThemeColor('blue');
    };
  }, [setThemeColor]);
  const pageData = [
    {
      label: '소개',
      theme: 'blue',
      showLower: true,
      upperSection: Intro_component_upper,
      lowerSection: Intro_component_lower,
    },
    {
      label: '조직도',
      theme: 'blue',
      showLower: false,
      upperSection: Organizatino_component,
    },
    {
      label: '연혁',
      theme: 'blue',
      showLower: false,
      upperSection: History_component,
    },
  ];
  const UpperSectionComponent = pageData[idx].upperSection;
  const LowerSectionComponent = pageData[idx].lowerSection;
  return (
    <>
      <TitleComponent title={pageTitle} />
      <ButtonGroup buttonData={pageData} activeIdx={idx} onChange={handleIdx} />
      <UpperSection solitary={!pageData[idx].showLower}>
        {/* 여기에 페이지별로 ReactComponent 넣으면 된다 */}
        {UpperSectionComponent && <UpperSectionComponent />}
      </UpperSection>
      {pageData[idx].showLower && LowerSectionComponent && (
        <LowerSection theme={'blue'}>
          {/* 여기에 페이지별로 ReactComponent 넣으면 된다 */}
          <LowerSectionComponent />
        </LowerSection>
      )}
      <Footer contactTheme={'blue'} />
    </>
  );
}

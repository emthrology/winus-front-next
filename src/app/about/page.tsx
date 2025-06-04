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
import React, { useState } from 'react';

export default function Page() {
  const pageTitle = 'About us.';
  const [idx, setIdx] = useState(0);

  const handleIdx = (idx: number) => {
    setIdx(idx);
  };
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

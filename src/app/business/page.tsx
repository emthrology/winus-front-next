'use client';
import ButtoGroup from '@/components/common/ButtonGroup';
import LowerSection from '@/components/business/LowerSection';
import TitleComponent from '@/components/common/TitleComponent';
import UpperSection from '@/components/business/UpperSection';
// import Contact from '@/components/common/Contact';
import useThemeStore from '@/store/themeStore';
import React, { useState, useEffect } from 'react';
import Footer from '@/components/common/Footer';

export default function Page() {
  const pageData = [
    {
      pageTitle: 'DESIGN.',
      label: '디자인',
      theme: 'blue',
      upperSectionData: {
        title: '크리에이티브하게 구현하다',
        subtitle: '고객님의 생각을',
        circleData: [
          {
            title: 'CLIENT NEEDS',
            def1: '고객님과 충분한 커뮤니케이션으로',
            def2: '니즈파악을 우선으로 합니다.',
            image: '/images/business/business_upper_design_1.png',
          },
          {
            title: 'CREATIVE IDEAS',
            def1: '차별화된 사고방식으로 표현한',
            def2: '디자인으로 접근합니다.',
            image: '/images/business/business_upper_design_2.png',
          },
          {
            title: 'HIGH QUALITY DESIGN',
            def1: '브랜드 아이덴티티를 고려하여',
            def2: '아이덴티티를 더욱 빛나게 만듭니다.',
            image: '/images/business/business_upper_design_3.png',
          },
        ],
      },
      lowerSectionData: [
        {
          title: '상담 및 계약',
          image: '/images/business/business_lower_design_1.png',
        },
        {
          title: '디자인 작업',
          image: '/images/business/business_lower_design_2.png',
        },
        {
          title: '업체 컨펌',
          image: '/images/business/business_lower_design_3.png',
        },
        {
          title: '디자인 수정',
          image: '/images/business/business_lower_design_4.png',
        },
        {
          title: '제작완료',
          image: '/images/business/business_lower_design_5.png',
        },
      ],
    },
    {
      pageTitle: 'EVENT.',
      label: '행사기획',
      theme: 'blue',
      upperSectionData: {
        title: '찾아내어 기획하다',
        subtitle: '특별한 즐거움을',
        circleData: [
          {
            title: 'EXPERIENCE',
            def1: '공기업 사기업 전시 등',
            def2: '다양한 행사 경력 보유하고 있습니다.',
            image: '/images/business/business_upper_event_1.png',
          },
          {
            title: 'COOPERATION',
            def1: '기획팀, 디자인팀, 전시팀, 영상팀과',
            def2: '협업으로 최상의 결과를 창출합니다.',
            image: '/images/business/business_upper_event_2.png',
          },
          {
            title: 'EXPERT',
            def1: '행사진행 전문가로',
            def2: '행사진행 중 의연한 대처가 가능합니다.',
            image: '/images/business/business_upper_event_3.png',
          },
        ],
      },
      lowerSectionData: [
        {
          title: '상담 및 계약',
          image: '/images/business/business_lower_design_1.png',
        },
        {
          title: '스토리보드제작',
          image: '/images/business/business_lower_design_2.png',
        },
        {
          title: '업체 컨펌',
          image: '/images/business/business_lower_design_3.png',
        },
        {
          title: '영상제작',
          image: '/images/business/business_lower_design_4.png',
        },
        {
          title: '제작완료',
          image: '/images/business/business_lower_design_5.png',
        },
      ],
    },
    {
      pageTitle: 'VERERINARIAE.',
      label: '선거',
      theme: 'red',
      upperSectionData: {
        title: '전문가의 신뢰를 주다',
        subtitle: '치열한 선거현장에서',
        circleData: [
          {
            title: 'KEY MESSAGING',
            def1: '유권자에게 한눈에 각인되는',
            def2: '메세지 연출 구성을 선사합니다.',
            image: '/images/business/business_upper_election_1.png',
          },
          {
            title: 'CONTENT STRATEGY',
            def1: '지역과 세대를 아우르는',
            def2: '전략적 콘텐츠를 기획합니다.',
            image: '/images/business/business_upper_election_2.png',
          },
          {
            title: 'FIELD RESPONSIVNESS',
            def1: '빠듯한 선거 일정 안에서 신속하게',
            def2: '현장 중심의 유연한 제작 대응이 가능합니다.',
            image: '/images/business/business_upper_election_3.png',
          },
        ],
      },
      lowerSectionData: [
        {
          title: '상담 및 계약',
          image: '/images/business/business_lower_election_1.png',
        },
        {
          title: '후보자 인터뷰 및 분석',
          image: '/images/business/business_lower_election_2.png',
        },
        {
          title: '홍보 기획 및 제작',
          image: '/images/business/business_lower_election_3.png',
        },
        {
          title: '선거운동',
          image: '/images/business/business_lower_election_4.png',
        },
        {
          title: '투표완료',
          image: '/images/business/business_lower_election_5.png',
        },
      ],
    },
    {
      pageTitle: 'STORYTELLING.',
      label: '영상',
      theme: 'blue',
      upperSectionData: {
        title: '치밀하게 스토리텔링하다',
        subtitle: '디테일을 설계해',
        circleData: [
          {
            title: 'CLIENT NEEDS',
            def1: '고객님과 충분한 커뮤니케이션으로',
            def2: '니즈파악을 우선으로 합니다.',
            image: '/images/business/business_upper_storytelling_1.png',
          },
          {
            title: 'STORYTELLING',
            def1: '탄탄한 스토리텔링으로',
            def2: '보는이들에게 감동을 선사합니다',
            image: '/images/business/business_upper_storytelling_2.png',
          },
          {
            title: 'DIRECTING',
            def1: '장면 구성, 시각적 흐름, 강약조절 등',
            def2: '완벽한 호흡을 선사합니다.',
            image: '/images/business/business_upper_storytelling_3.png',
          },
        ],
      },
      lowerSectionData: [
        {
          title: '상담 및 계약',
          image: '/images/business/business_lower_design_1.png',
        },
        {
          title: '사전조사',
          image: '/images/business/business_lower_design_2.png',
        },
        {
          title: '기획',
          image: '/images/business/business_lower_design_3.png',
        },
        {
          title: '디자인 및 마케팅',
          image: '/images/business/business_lower_design_4.png',
        },
        {
          title: '행사진행',
          image: '/images/business/business_lower_design_5.png',
        },
      ],
    },
  ];
  const [idx, setIdx] = useState(0);
  const themeColor = useThemeStore((state) => state.themeColor);
  const setThemeColor = useThemeStore((state) => state.setThemeColor);
  const handleIdx = (idx: number) => {
    setIdx(idx);
    setThemeColor(pageData[idx].theme);
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
  return (
    <>
      <TitleComponent title={pageData[idx].pageTitle} />
      <ButtoGroup buttonData={pageData} activeIdx={idx} onChange={handleIdx} />
      <UpperSection
        key={idx}
        title={pageData[idx].upperSectionData.title}
        subtitle={pageData[idx].upperSectionData.subtitle}
        circleData={pageData[idx].upperSectionData.circleData}
        theme={themeColor}
      />
      <LowerSection
        key={idx + 20}
        circleData={pageData[idx].lowerSectionData}
        theme={themeColor}
      />
      <Footer contactTheme={themeColor} />
    </>
  );
}

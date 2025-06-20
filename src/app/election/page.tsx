'use client';
import ButtonGroup from '@/components/common/ButtonGroup';
import Footer from '@/components/common/Footer';
import TitleComponent from '@/components/common/TitleComponent';
import ElectionIntroSecondSection from '@/components/election/intro/ElectionIntroSecondSection';
import SectionTitleComponent from '@/components/election/SectionTitleComponent';
import React, { useState, useEffect, useMemo } from 'react';
import useThemeStore from '@/store/themeStore';
import ElectionIntroThirdSection from '@/components/election/intro/ElectionIntroThirdSection';
import ElectionIntroFourthSection from '@/components/election/intro/ElectionIntroFourthSection';
import ElectionConsultingSecondSection from '@/components/election/consulting/ElectionConsultingSecondSection';
import ElectionConsultingThirdSection from '@/components/election/consulting/ElectionConsultingThirdSection';
import ElectionPromotionFirstSection from '@/components/election/promotion/ElectionPromotionFirstSection';
import ElectionPromotionSecondSection from '@/components/election/promotion/ElectionPromotionSecondSection';
import ElectionPromotionThirdSection from '@/components/election/promotion/ElectionPromotionThirdSection';
import ElectionMovementFirstSection from '@/components/election/movement/ElectionMovementFirstSection';
import ElectionMovementSecondSection from '@/components/election/movement/ElectionMovementSecondSection';
import ElectionMovementThirdSection from '@/components/election/movement/ElectionMovementThirdSection';
export default function Page() {
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
    setThemeColor('red');
    return () => {
      // 언마운트 시 실행 (페이지 이동, 컴포넌트 제거 등)
      setThemeColor('blue');
    };
  }, [setThemeColor]);
  const pageData = [
    {
      label: '소개',
      theme: 'red',
      sectionData: {
        second: {
          circleData: [
            {
              title: '다르다',
              defs: [
                '진부한 선거, 뻔한 연출이 아닙니다.',
                '다른 정당는 차별화된,',
                '후보님만의 강점을 살린 연출 입니다.',
              ],
            },
            {
              title: '맞추다',
              defs: [
                '매번 반복되는 선거 방식이 아닙니다.',
                '후보님의 강점과 개성을 반영한,',
                '맞춤형 선거 전략을 제안합니다.',
              ],
            },
            {
              title: '나누다',
              defs: [
                '형식적인 말이 아닌, 진심을 나눕니다.',
                '후보님의 진실함을 알기에,',
                '공감과 소통으로 마음을 연결합니다.',
              ],
            },
          ],
        },
        third: {
          circleData: [
            { title: '비주얼디자인본부', def: 'Visual Strategy Lab' },
            { title: '전략기획실', def: 'Strategy Office' },
            { title: '공보전략본부', def: 'Press Strategy Office' },
          ],
        },
      },
    },
    {
      label: '컨설팅',
      theme: 'red',
      sectionData: {
        second: {
          boxData: [
            {
              subtitle: '정도의 길만 걸어갑니다',
              title: '선거 시작부터 끝까지',
              image:
                '/images/election/consulting/election_consulting_second_1.png',
              defs: [
                '선거를 시작하는 순간부터',
                '마지막 그 순간까지',
                '언제나 함께 합니다.',
              ],
            },
            {
              subtitle: '신용을 잃지 않겠습니다',
              title: '철저한 후보자 분석',
              image:
                '/images/election/consulting/election_consulting_second_2.png',
              defs: [
                '나를 알고 적을 알아야',
                '이기는 법을 알아',
                '철저한 분석으로 시작합니다.',
              ],
            },
            {
              subtitle: '감동을 선사합니다',
              title: '각 분야 전문가 그룹',
              image:
                '/images/election/consulting/election_consulting_second_3.png',
              defs: [
                '각 분야의 전문가들을 모아',
                '후보님만을 위한',
                '전략팀을 갖춥니다.',
              ],
            },
          ],
        },
        third: {
          boxData: [
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
          steps: [
            { num: '01', label: '상담 / 계약' },
            { num: '02', label: '후보자 인터뷰 진행' },
            { num: '03', label: '경쟁 후보 및 금고 현황파악 및 분석' },
            { num: '04', label: '후보자 홍보 기획' },
            { num: '05', label: '선거 공보물 납품' },
          ],
        },
      },
    },
    {
      label: '홍보물',
      theme: 'red',
      sectionData: {
        first: {
          buttonData: [
            '# 읽기 쉬운 공보',
            '# 핵심이 쏙쏙 들어오는',
            '# 전담 디자이너 배정',
          ],
        },
      },
    },
    {
      label: '선거운동',
      theme: 'red',
      sectionData: {
        first: {
          proscons: [
            {
              cons: '가격 측면에서 부담스러움',
              pros1: '윈어스 자체제작으로',
              pros2: '저렴한 가격대',
            },
            {
              cons: '기존버전에 제한된 개사',
              pros1: '윈어스 자체제작으로',
              pros2: '자유로운 메시지',
            },
            {
              cons: '사진만 남발된 유세송MV',
              pros1: '입체적 구성인',
              pros2: '맞춤 유세송 MV 제작',
            },
          ],
          buttons: [
            '#중독성',
            '#트로트',
            '#댄스',
            '#노래방',
            '#록',
            '#동요',
            '#응원가',
          ],
        },
      },
    },
  ];

  const sectionComponents = useMemo(() => {
    if (idx == 0) {
      const data = pageData[0].sectionData;
      return [
        <SectionTitleComponent key={'election_title'} />,
        <ElectionIntroSecondSection
          key={'election_intro_second'}
          circleData={data.second!.circleData!}
        />,
        <ElectionIntroThirdSection
          key={'election_intro_third'}
          circleData={data.third!.circleData!}
        />,
        <ElectionIntroFourthSection key={'election_intro_fourth'} />,
      ];
    }
    if (idx == 1) {
      const data = pageData[1].sectionData;
      return [
        <SectionTitleComponent key={'election_title'} />,
        <ElectionConsultingSecondSection
          key={'election_consulting_second'}
          boxData={data.second!.boxData!}
        />,
        <ElectionConsultingThirdSection
          key={'election_consulting_third'}
          boxData={data.third!.boxData!}
          steps={data.third!.steps!}
        />,
      ];
    }
    if (idx == 2) {
      const data = pageData[2].sectionData;
      return [
        <ElectionPromotionFirstSection
          key={'election_promotion_first'}
          buttonData={data.first!.buttonData!}
        />,
        <ElectionPromotionSecondSection key={'election_promotion_second'} />,
        <ElectionPromotionThirdSection key={'election_promition_third'} />,
      ];
    }
    if (idx == 3) {
      const data = pageData[3].sectionData;
      return [
        <ElectionMovementFirstSection
          key={'election_movement_first'}
          proscons={data.first!.proscons!}
          buttons={data.first!.buttons!}
        />,
        <ElectionMovementSecondSection key={'election_movement_second'} />,
        <ElectionMovementThirdSection key={'election_movent_third'} />,
      ];
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);
  return (
    <div className="w-screen">
      <TitleComponent title="선거" type="election" />
      <ButtonGroup buttonData={pageData} activeIdx={idx} onChange={handleIdx} />
      {sectionComponents.map((section) => section)}
      <Footer contactTheme={'red'} />
    </div>
  );
}

'use client';
import Section from '@/components/main/FullPageSection';
import Buttons from '@/components/main/FullPageButton';
import Footer from '@/components/common/Footer';
import useThemeStore from '@/store/themeStore';
import { useEffect, useCallback, useRef, useState } from 'react';
import { usePageStore } from '@/store/pageStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import { useIsMdUp } from '@/hooks/usePageSize';
export interface IPageObj {
  pageNum: number;
  bgColor: string;
  btnColor: string;
}

export default function FullPage() {
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setScrollRef = usePageStore((state) => state.setScrollRef);

  const isMdUp = useIsMdUp();

  useEffect(() => {
    setScrollRef(scrollContainerRef as React.RefObject<HTMLDivElement>); // 마운트 시 등록
    return () => setScrollRef(null); // 언마운트 시 해제
  }, [setScrollRef]);
  const setThemeColor = useThemeStore((state) => state.setThemeColor);
  useEffect(() => {
    // 마운트 시 실행지역
    return () => {
      // 언마운트 시 실행지역 (페이지 이동, 컴포넌트 제거 등)
      setThemeColor('blue');
    };
  }, [setThemeColor]);

  const secondPageData = [
    {
      title: 'DESIGN',
      subtitle1: '고객님의 생각을',
      subrtitle2: '크리에이티브하게 구현하다.',
      def1: '디자인 기획부터',
      def2: '대중적이지만 독특한 차별화로',
    },
    {
      title: 'EVENT',
      subtitle1: '특별한 즐거움을',
      subrtitle2: '찾아내어 기획하다.',
      def1: '고객니즈에 부합하는',
      def2: '특별한 즐거움을 향한 시작',
    },
    {
      title: 'ELECTION',
      subtitle1: '가치를 찾아',
      subrtitle2: '완성도를 높이다.',
      def1: '후보님의 가치를 찾아',
      def2: '먼저 제시하고 아이디어를 제공',
    },
    {
      title: 'STORYTELLING',
      subtitle1: '디테일을 설계해',
      subrtitle2: '치밀하게 스토리텔링하다.',
      def1: '전문적인 기술로 시작자의',
      def2: '관점으로 시작된 스토리텔링',
    },
  ];

  // TODO 이 값은 페이지로부터 api로 받아와야함
  const pageObjArray = [
    {
      pageNum: 1,
      bgColor: 'bg-white',
      btnColor: 'bg-[#245dfa]',
      bgImage: '/images/main/main_1.png',
      innerSection: (
        <div className="flex flex-col items-center justify-center min-h-[600px] h-full">
          <motion.h2
            className="text-[27px] lg:text-[54px] font-[700] text-white font-pretendard text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
          >
            우리가 이기는 방식
          </motion.h2>
          <motion.h1
            className="text-[120px] lg:text-[210px] font-[700] text-white font-pretendard text-center leading-none"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
          >
            WINUS
          </motion.h1>
          <motion.h3
            className="text[16px] lg:text-[32px] font-noto font-extralight text-white text-center leading-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
          >
            Bring You Brand New Through Infinite Possibility
          </motion.h3>
        </div>
      ),
    },
    {
      pageNum: 2,
      bgColor: 'bg-white',
      btnColor: 'bg-[#245dfa]',
      innerSection: (
        <div className="relative w-full overflow-hidden sm:min-h-screen bg-white flex flex-col items-center justify-center py-16">
          {/* WINUS 로고 */}
          <div className="absolute inset-0 hidden sm:flex justify-center items-center pointer-events-none select-none z-0 w-full h-full max-w-full max-h-full">
            <Image
              src="/images/main/main_2.png"
              alt="WINUS"
              width={1400} // 원하는 고정 px
              height={500} // 원하는 고정 px
              className="opacity-70 max-w-[400px] sm:max-w-full h-auto"
              priority
              style={{
                minWidth: '561px',
                minHeight: '131px',
              }}
            />
          </div>
          {/* WINUS 로고 모바일 */}
          <div className="block sm:hidden absolute -left-5 bottom-[1/2] ">
            <Image
              src="/images/logo/winus3.png"
              alt="WINUS"
              width={500}
              height={1400}
              priority
              className="max-w-[165px] h-auto"
            />
          </div>
          {/* 공통 컨테이너 */}
          <div className="relative z-1 w-full max-w-[1536px] px-6 mx-auto flex flex-col">
            {/* 상단 메인 문구 */}
            <div className="text-left pb-20 lg:pb-55">
              <motion.div
                className="text-3xl lg:text-3xl font-semibold lg:font-bold text-[#000]"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{
                  root: scrollContainerRef,
                  once: false,
                  amount: 0.7,
                }}
              >
                가치를 찾는 시작점,
              </motion.div>
              <motion.div
                className="text-3xl lg:text-5xl font-bold mt-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{
                  root: scrollContainerRef,
                  once: false,
                  amount: 0.7,
                }}
              >
                <span className="font-black text-black">
                  믿을 수 있는 든든한 전문가
                </span>
              </motion.div>
            </div>
            {/* 4개 서비스 설명 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-0 sm:gap-x-4 gap-y-16">
              {/* DESIGN */}
              {secondPageData.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center lg:items-start"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.2,
                    ease: 'easeOut',
                  }}
                  viewport={{
                    root: scrollContainerRef,
                    once: false,
                    amount: 0.7,
                  }}
                >
                  <div className="font-bold text-blue-700 mb-1 text-center lg:text-left text-base sm:text-xl">
                    {item.title}
                  </div>
                  <div className="font-bold text-blue-700 mb-2 text-center text-sm sm:text-lg lg:text-left lg:text-xl">
                    {item.subtitle1}
                    <br />
                    {item.subrtitle2}
                  </div>
                  <div className="w-[20px] border-zinc-400"></div>
                  {/* 선분(가로줄) */}
                  <hr className="my-4 border-t-2 border-gray-200 w-1/2" />
                  <div className="text-sm sm:text-base text-gray-500 text-center lg:text-left">
                    {item.def1}
                    <br />
                    {item.def2}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNum: 3,
      bgColor: 'bg-[#f4f3ff]',
      btnColor: 'bg-[#245dfa]',
      innerSection: (
        <div className="flex flex-col items-center justify-center h-full space-y-0 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
          >
            <h2 className="text-[36px] md:text-[54px] text-black font-[700] font-pretendard text-center">
              PORTFOLIO
            </h2>
            <h3 className="text-md md:text-lg text-[#727272] font-extralight text-center leading-none">
              윈어스의 사업분야별 대표 포트폴리오를 소개합니다.
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12 mx-6 mb-12 md:mb-0">
            {[
              { src: '/images/main/main_3_1.png', title: '디자인 포트폴리오' },
              {
                src: '/images/main/main_3_2.png',
                title: '행사기획 포트폴리오',
              },
              { src: '/images/main/main_3_3.png', title: '선거 포트폴리오' },
              { src: '/images/main/main_3_4.png', title: '영상 포트폴리오' },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/portfolio?tab=${index}`}
                className="w-full bg-transparent rounded-[15px] flex items-center justify-center overflow-hidden relative group cursor-pointer"
              >
                <Image
                  src={`${item.src}`}
                  alt={`Portfolio ${index + 1}`}
                  width={500}
                  height={300}
                  className="object-cover transition-transform duration-300 scale-105 group-hover:scale-110"
                  priority
                />
                {/* PC 호버 오버레이 + 문구 */}
                <div className=" absolute inset-0 bg-[#032ff4]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col items-center justify-center">
                  <div className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </div>
                  <div className="text-white text-base font-light flex items-center gap-1">
                    더보기
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block ml-1"
                    >
                      <path
                        d="M8 5l8 7-8 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {/* 모바일 오버레이 + 문구 */}
                <div className="md:hidden absolute inset-0 bg-[linear-gradient(90deg,rgba(3,47,244,0.5)_2.25%,rgba(255,255,255,0)_59%)] flex flex-col items-start justify-center pl-4">
                  <div className="text-white text-2xl font-bold pl-4 ">
                    {item.title.split(' ')[0]}
                  </div>
                  <div className="text-white text-2xl font-noto font-[300] pl-4">
                    PORTFOLIO
                  </div>
                  <div className="text-white text-base font-light">
                    <Icon path={mdiChevronRight} size={2} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      pageNum: 4,
      bgColor: 'bg-white',
      btnColor: 'bg-[#245dfa]',
      innerSection: (
        <div className="relative overflow-hidden w-full md:h-auto min-h-[600px] md:min-h-screen bg-white flex flex-col items-center justify-between md:justify-evenly py-12 md:py-22">
          {/* '1' image */}
          <motion.div
            className="absolute bottom-0 left-[25%] sm:left-[40%] md:left-[30%] lg:left-[25%] w-[600px] aspect-[3/2] sm:aspect-square flex items-center justify-center pointer-events-none select-none "
            initial={isMdUp ? { opacity: 0, y: 40 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={
              isMdUp ? { duration: 0.8, delay: 0.2, ease: 'easeOut' } : {}
            }
            viewport={
              isMdUp
                ? { root: scrollContainerRef, once: false, amount: 0.7 }
                : {}
            }
          >
            <Image
              src="/images/main/main_4_1.png"
              alt="WINUS"
              fill
              className="object-contain max-w-[90vw] sm:max-w-[70vw] md:max-w-[70vw] h-auto"
              priority
            />
          </motion.div>
          {/* 상단 메인 문구 */}
          <div className="relative z-1 w-[90%] md:w-[85%]  text-left ">
            <motion.div
              className="text-[32px] md:text-3xl font-[500] text-[#e61e2b] leading-none"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              치열한 선거현장에서,
            </motion.div>
            <motion.div
              className="text-[32px] md:text-5xl font-bold lg:mt-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              <span className="font-black text-[#e61e2b]">
                믿을 수 있는 든든한 전문가
              </span>
            </motion.div>

            <motion.div
              className="xl:hidden flex flex-col items-start justify-end mt-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{
                root: scrollContainerRef,
                once: false,
                amount: 0.7,
              }}
            >
              <Link href="/election">
                <div className="flex justify-center items-center shadow-2xl h-[50px] w-[240px] bg-[#e61e2b] text-white text-xl font-[300] rounded-[10px]">
                  <span>선거 서비스 소개</span>
                  <Icon path={mdiChevronRight} size={1.3} />
                </div>
              </Link>
            </motion.div>
          </div>
          <div className="relative z-1 w-[90%] md:w-[85%] h-auto  max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-28">
            <div className="flex flex-col justify-end">
              <motion.div
                className="flex flex-col items-start justify-end"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                viewport={{
                  root: scrollContainerRef,
                  once: false,
                  amount: 0.7,
                }}
              >
                <hr className="my-4 border-t-3 border-[#e61e2b] w-[14%]" />
                <div className="text-sm sm:text-lg font-semibold text-[#e61e2b] text-left">
                  WINUS는 이해하고,
                  <br />
                  설계하고, 함께 이깁니다.
                </div>
              </motion.div>
            </div>

            <motion.div
              className="hidden xl:block relative pl-28 w-[450px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              <Image
                className="z-10"
                src="/images/main/main_4_2.png"
                alt="WINUS"
                width={400}
                height={400}
                priority
                style={{
                  maxWidth: '70vw',
                  height: 'auto',
                }}
              />
              <Link href="/election">
                <button className="absolute z-11 bottom-[-30] left-20 shadow-2xl h-[60px] w-full bg-[#e61e2b] text-white text-2xl rounded-[45px]">
                  선거 서비스 소개
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      ),
    },
  ];

  const totalNum = pageObjArray.length;
  // 👇 console 찍어보면 length가 5이고 0번 인덱스는 undefined가 출력됨. (이 배열 핸들링할때 1번 인덱스부터 시작해야함)
  const pageRefs = useRef<HTMLDivElement[]>([]);
  // 페이지 변경 함수
  const handlePageChange = useCallback(() => {
    const scroll = scrollContainerRef.current?.scrollTop ?? 0;
    for (let i = 1; i <= totalNum; i++) {
      if (
        scroll >
          pageRefs.current[i].offsetTop -
            scrollContainerRef.current!.offsetHeight / 3 &&
        scroll <
          pageRefs.current[i].offsetTop -
            scrollContainerRef.current!.offsetHeight / 3 +
            pageRefs.current[i].offsetHeight
      ) {
        setCurrentPageNum(i);
        break;
      }
    }
  }, [totalNum, pageRefs, scrollContainerRef, setCurrentPageNum]);

  // 버튼 클릭
  const handlePointClick = (pageNum: number) => {
    scrollContainerRef.current?.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handlePageChange);
    return () => {
      container?.removeEventListener('scroll', handlePageChange);
    };
  }, [handlePageChange]);

  return (
    <div className="w-screen overflow-x-hidden">
      <div
        ref={scrollContainerRef}
        className="relative md:snap-y md:snap-mandatory overflow-y-scroll w-screen h-screen"
      >
        {pageObjArray.map((item, index) => {
          return (
            <Section
              key={index}
              bgImage={item.bgImage}
              pageNum={item.pageNum}
              bgColor={item.bgColor}
              pageRefs={pageRefs}
              isLast={false}
            >
              {item.innerSection ?? item.innerSection}
            </Section>
          );
        })}
        <Section
          bgImage={undefined}
          pageNum={pageObjArray.length + 1}
          bgColor={'bg-white'}
          pageRefs={pageRefs}
          isLast={true}
        >
          <Footer contactTheme={'blue'} />
        </Section>
        <div className="hidden lg:flex flex-col space-y-4 fixed top-96 right-10 z-10">
          <Buttons
            pageObjArray={pageObjArray}
            currentPageNum={currentPageNum}
            handlePointClick={handlePointClick}
          />
        </div>
      </div>
    </div>
  );
}

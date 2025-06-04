'use client';
import Section from '@/components/main/FullPageSection';
import Buttons from '@/components/main/FullPageButton';
import Footer from '@/components/common/Footer';

import { useEffect, useCallback, useRef, useState } from 'react';
import { usePageStore } from '@/store/pageStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
export interface IPageObj {
  pageNum: number;
  bgColor: string;
  btnColor: string;
}

export default function FullPage() {
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const setScrollRef = usePageStore((state) => state.setScrollRef);
  useEffect(() => {
    setScrollRef(scrollContainerRef as React.RefObject<HTMLDivElement>); // 마운트 시 등록
    return () => setScrollRef(null); // 언마운트 시 해제
  }, [setScrollRef]);

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
        <div className="flex flex-col items-center justify-center h-full space-y-0">
          <motion.h2
            className="text-[54px] font-[700] font-pretendard text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
          >
            우리가 이기는 방식
          </motion.h2>
          <motion.h1
            className="text-[210px] font-[700] font-pretendard text-center leading-none"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
          >
            WINUS
          </motion.h1>
          <motion.h3
            className="text-[32px] font-extralight text-center leading-none"
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
        <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center py-16">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <Image
              src="/images/main/main_2.png"
              alt="WINUS"
              width={1400}
              height={500}
              className="opacity-70"
              priority
              style={{
                maxWidth: '70vw',
                height: 'auto',
              }}
            />
          </div>
          {/* 상단 메인 문구 */}
          <div className="relative z-10 w-[75%]  text-left mb-42 pb-5">
            <motion.div
              className="text-xl md:text-3xl font-bold text-gray-700"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              가치를 찾는 시작점,
            </motion.div>
            <motion.div
              className="text-2xl md:text-5xl font-bold mt-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              <span className="font-black text-black">
                믿을 수 있는 든든한 전문가
              </span>
            </motion.div>
          </div>
          {/* 4개 서비스 설명 */}
          <div className="relative z-10 w-[75%] max-w-8xl grid grid-cols-1 md:grid-cols-4 gap-16 px-4">
            {/* DESIGN */}
            {secondPageData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start min-w-[200px]"
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
                <div className="font-bold text-blue-700 mb-1 text-lg">
                  {item.title}
                </div>
                <div className="font-bold text-blue-700 mb-2 text-left text-lg">
                  {item.subtitle1}
                  <br />
                  {item.subrtitle2}
                </div>
                <div className="w-[20px] border-zinc-400"></div>
                {/* 선분(가로줄) */}
                <hr className="my-4 border-t-2 border-gray-200 w-1/2" />
                <div className="text-sm text-gray-500 text-left">
                  {item.def1}
                  <br />
                  {item.def2}
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-[54px] text-black font-[700] font-pretendard text-center">
              PORTFOLIO
            </h2>
            <h3 className="text-lg text-[#727272] font-extralight text-center leading-none">
              윈어스의 사업분야별 대표 포트폴리오를 소개합니다.
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-12">
            {[
              { src: '/images/main/main_3_1.png', title: '디자인 포트폴리오' },
              {
                src: '/images/main/main_3_2.png',
                title: '행사기획 포트폴리오',
              },
              { src: '/images/main/main_3_3.png', title: '선거 포트폴리오' },
              { src: '/images/main/main_3_4.png', title: '영상 포트폴리오' },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full bg-transparent rounded-[15px] flex items-center justify-center overflow-hidden relative group cursor-pointer"
              >
                <Image
                  src={`${item.src}`}
                  alt={`Portfolio ${index + 1}`}
                  width={500}
                  height={300}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                {/* 오버레이 + 문구 */}
                <div className="absolute inset-0 bg-[#032ff4]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
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
              </div>
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
        <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-evenly py-22">
          <motion.div
            className="absolute bottom-0 left-[25%] flex items-center justify-center pointer-events-none select-none z-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
          >
            <Image
              src="/images/main/main_4_1.png"
              alt="WINUS"
              width={550}
              height={500}
              priority
              style={{
                maxWidth: '70vw',
                height: 'auto',
              }}
            />
          </motion.div>
          {/* 상단 메인 문구 */}
          <div className="relative z-10 w-[85%]  text-left ">
            <motion.div
              className="text-xl md:text-3xl font-bold text-[#e61e2b]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              치열한 선거현장에서,
            </motion.div>
            <motion.div
              className="text-2xl md:text-5xl font-bold mt-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              <span className="font-black text-[#e61e2b]">
                믿을 수 있는 든든한 전문가
              </span>
            </motion.div>
          </div>
          <div className="relative z-10 w-[85%] h-auto  max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-28 px-4">
            <motion.div
              className="flex flex-col items-start justify-end"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              viewport={{ root: scrollContainerRef, once: false, amount: 0.7 }}
            >
              <hr className="my-4 border-t-3 border-[#e61e2b] w-[7%]" />
              <div className="text-lg font-semibold text-[#e61e2b] text-left">
                WINUS는 이해하고,
                <br />
                설계하고, 함께 이깁니다.
              </div>
            </motion.div>

            <motion.div
              className="relative pl-28 w-[450px]"
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
              <button className="absolute z-11 bottom-[-30] left-20 shadow-2xl h-[60px] w-full bg-[#e61e2b] text-white text-2xl rounded-[45px]">
                선거 서비스 소개
              </button>
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
    <>
      <div
        ref={scrollContainerRef}
        className="relative snap-y snap-mandatory overflow-y-scroll h-screen"
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
        <div className="flex flex-col space-y-4 fixed top-96 right-10 z-10">
          <Buttons
            pageObjArray={pageObjArray}
            currentPageNum={currentPageNum}
            handlePointClick={handlePointClick}
          />
        </div>
      </div>
    </>
  );
}

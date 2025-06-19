'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useIsLgUp } from '@/hooks/usePageSize';
const years = [2025, 2024, 2023];
export default function History_component() {
  const [activeIdx, setActiveIdx] = useState(0);
  const histories: { [key: number]: string[] } = {
    2025: [
      '신학원 졸업식',
      '통합 국민대회 거룩한 방파제',
      'OOO전당 대선승리를 위한 필승 결의대회',
      '하보우만의 약속 시사회',
      '시민단체 부산센터 설립 인테리어',
      'OOO전당 구로구청장 보궐선거 선거캠프',
      '엔잭타코리아 킥오프 행사',
      '고려대학교 최종성과 공유회 및 전체 교수 세미나',
      '포라이프리서치코리아 오크벨리 세미나',
      '라이피스 동안하루 런칭 세미나',
      'OOO기업 신년회 빛나는 NJ의 밤',
      'OOO 외신 기자회견',
      '포라이프리서치코리아 오크벨리 세미나',
    ],
    2024: [
      'LH거주수기 공모 우수상 시상식',
      '엔잭타코리아 송년회',
      '고려대학교 세종캠퍼스 연찬회',
      '애즈플레이 Bronze Moment Party',
      'BWB',
      '한국교회 200만 연합예배',
      '결혼 웨딩데이',
      '팝페라로 떠나는 시흥의 휴일 팝페라 피크닉',
      'GSMA',
      '2024 그릴마스터대회 경기도축산페스티벌',
      'OOO기업 모터사이클 페스티벌',
      '포라이프리서치코리아 컨벤션',
      '라이피스 런칭세미나',
      'OOO전당 역량강화 연수',
      '국민통합위원회 과학기술과의 동행',
      '엔잭타코리아 세상을 뒤집다 컨벤션',
      'LH경기북부지역본부 개소식',
      '포라이프리서치코리아 컨벤션',
      '알뜰폰 통신사 영업매니저 웹페이지 제작',
      '대형교회 비공개 설명회',
      '제22대 국회의원선거 OOO전당 선거캠프',
      '제22대 국회의원선거 부산광역시 부산진구 을',
      '제22대 국회의원선거 대구광역시 동구 군위군 을',
      '제22대 국회의원선거 대구광역시 서구 을',
      '제22대 국회의원선거 경기도 시흥시 갑',
      '제22대 국회의원선거 전라북도 익산시 을',
      '제22대 국회의원선거 전라북도 정읍시 고창군',
      '제22대 국회의원선거 경상북도 경주시',
      '제22대 국회의원선거 경상북도 안동시, 예천군',
      '제22대 국회의원선거 경상북도 구미시 을',
      'OOO전당 시민단체 범 연석회의',
      '제22대 국회의원선거 OOO전당 선거 웹페이지 제작',
      'OOO기업 신년회',
    ],
    2023: [
      '사회직능단체 총연합대회',
      '알뜰폰 통신사 홍보물 제작',
      '언론사 창간2주년 기념행사',
      '대형교회 광주지도자(목사, 장로부부) 초청대회',
      '언론사 사무실 및 스튜디오 이전 인테리어',
      '알뜰폰 통신사 홍보물 제작',
      '253지역구 추천자 대회',
      '알뜰폰 통신사 야외 홍보행사',
      '전국해병대 전우대회',
      '전국 장로*남여전도회 연합대회',
      'OOO대형교회 다큐멘터리 시사회',
      '전국 교회 제 1회 전국 청년 연합 집회',
      '알뜰폰 통신사 매뉴얼북 제작',
      '알뜰폰 통신사 대담방송 기획 운영 편집',
      '알뜰폰 통신사 안내 영상 제작',
      '알뜰폰 통신사 브랜딩 구축',
      'OOO기업 사무실 확장 인테리어',
      '시민단체 캐릭터 이모티콘 제작',
      '시민단체 캐릭터 제작',
      '시민단체 전용 차량 운영 및 운행 시스템 관리',
      '시민단체 브랜딩 구축',
    ],
  };
  const isLgUp = useIsLgUp();
  return (
    <>
      <div className="w-full max-w-[1536px] px-6 mx-auto flex flex-col ">
        <div className="flex flex-col items-center w-full">
          <div className="flex border-b border-gray-200 w-full">
            {years.map((year, idx) => (
              <button
                key={year}
                onClick={() => setActiveIdx(idx)}
                className={`
            flex-1 text-center text-[30px] font-bold pb-1 md:mx-16
            transition-colors
            ${
              activeIdx === idx
                ? 'text-[#0052ff] border-b-4 border-[#0052ff]'
                : 'text-gray-400 border-b-2 border-transparent'
            }
          `}
                style={{ outline: 'none' }}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="mt-12 md:mt-32 flex justify-center w-full">
            <div className="hidden md:flex justify-center w-1/2 min-w-[320px] pt-8">
              <div className="w-fit">
                <p className="text-black md:text-3xl lg:text-4xl font-normal">
                  함께 걸어온 시간,
                </p>
                <p className="text-black md:text-4xl lg:text-5xl font-bold">
                  앞으로 기대되는 여정.
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/logo/winus1.png"
                    width={isLgUp ? 400 : 300}
                    height={isLgUp ? 108 : 64}
                    alt="윈어스 로고"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full pl-4 pt-4 sm:w-2/3 md:w-1/2 sm:p-8 ml-2 sm:ml-0">
              <p className="hidden sm:block text-[#0052ff] text-3xl mt-[-30px] mb-8">
                {years[activeIdx]}
              </p>

              {/* 세로선 */}
              <div className="absolute left-0 top-6 w-px h-[calc(100%-1.5rem)] bg-[#e0e0e0] z-0" />
              {/* 파란 원 */}
              <div className="absolute left-[-8px] top-3 w-4 h-4 rounded-full bg-[#0052ff] z-10" />
              <div className="max-h-[420px] overflow-y-auto">
                <ul>
                  {histories[years[activeIdx]].map((item, idx) => (
                    <li key={idx} className="mb-2 text-md text-black">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 하단 그라디언트 오버레이 */}
              <div
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-32"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

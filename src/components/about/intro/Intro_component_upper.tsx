'use client';
import React, { useState } from 'react';
import useThemeStore from '@/store/themeStore';
import Icon from '@mdi/react';
import { mdiDownload, mdiLoading } from '@mdi/js';
import { useIsMdUp } from '@/hooks/usePageSize';
import Image from 'next/image';

export default function Intro_component_upper() {
  const [downloading, setDownloading] = useState(false);
  const [activeBtnKey, setActiveBtnKey] = useState<string | null>(null);
  const blue = useThemeStore((state) => state.blue);
  const red = useThemeStore((state) => state.red);
  const isMdUp = useIsMdUp();
  const handleClick = (key: string) => {
    setActiveBtnKey(key);
    setDownloading(true);
    // 2초 후 아이콘 복구 (실제 다운로드 완료 감지는 불가)
    setTimeout(() => {
      setDownloading(false);
      setActiveBtnKey(null);
    }, 3000);
  };
  return (
    <div className="w-full max-w-[1536px] px-6 mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-start items-start">
          <p className="text-black text-4xl font-bold mb-2">
            {'우리가 이기는 방식,'}
          </p>
          <div>
            <Image
              src="/images/logo/winus1.png"
              width={isMdUp ? 500 : 300}
              height={isMdUp ? 108 : 64}
              alt="윈어스 로고"
            />
          </div>
        </div>

        {/* 다운로드 */}
        <div className=" flex items-end">
          <div className="flex flex-col items-start  md:flex-row md:items-center justify-between text-sm space-x-2 space-y-4 md:space-y-0 py-4">
            <a
              href="https://drive.google.com/uc?export=download&id=1FeC5v_Bcn4THagUJjqVl_YE8AEoJUUZw"
              // target="_blank"
              // rel="noopener noreferrer"
              download
              onClick={() => handleClick('company')}
              className={`flex justify-center items-center h-12 px-4 min-w-[174px] bg-[${blue}] rounded-[10px] space-x-1 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]`}
            >
              {downloading && activeBtnKey == 'company' ? (
                <Icon
                  path={mdiLoading}
                  size={1}
                  color="white"
                  spin // mdi/react의 spin prop (로딩 애니메이션)
                />
              ) : (
                <Icon path={mdiDownload} size={1} color="white" />
              )}
              <b className="text-white">회사소개서</b>
              <span className="text-white">다운로드</span>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1T8QWAlQUUr-WHFakjZGGmAkl5bXEzQKS"
              // target="_blank"
              // rel="noopener noreferrer"
              download
              onClick={() => handleClick('election')}
              className={`flex justify-center items-center h-12 px-4 min-w-[174px] bg-[${red}] rounded-[10px] space-x-1 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]`}
            >
              {downloading && activeBtnKey == 'election' ? (
                <Icon
                  path={mdiLoading}
                  size={1}
                  color="white"
                  spin // mdi/react의 spin prop (로딩 애니메이션)
                />
              ) : (
                <Icon path={mdiDownload} size={1} color="white" />
              )}
              <b className="text-white ">선거소개서</b>
              <span className="text-white">다운로드</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start mt-12 ">
        <p className="text-[#000] font-pretendard font-[300]">
          주식회사 윈어스(WINUS)는 기획, 마케팅, 디자인, 대행, 선거 홍보 등
          다양한 영역에서 전략과 실행을 아우르는 종합 콘텐츠 그룹입니다.
          <br />
          윈어스는실전에서 체득한 노하우를 바탕으로 현장 중심의 감각과 전략적
          사고를겸비한 팀으로 자리매김했습니다.
          <br />
          작은 작업 하나, 간단한 요청 하나도가볍게 넘기지 않으며, 모든
          프로젝트에 책임감을 갖고 임하는 자세는 클라이언트와의 관계에서 가장
          중요한 기반이 되었습니다.
          <br />
          그 결과, 윈어스는 고객에게 단순한 ‘외주팀’이 아닌, 믿고 맡길 수 있는
          파트너로 기억되고 있습니다. <br />
          <br />
          우리는 늘 스스로에게 묻습니다 “이 일이 어떤 메시지를 전하고, 어떤
          가치를 남길 수 있을까?”
          <br /> 그 질문에 진심으로 답하기 위해 오늘도 우리는 현장에서 뛰고,
          부딪히며, 결과를 만들어갑니다.
          <br /> 경험보다 진정성, 규모보다 집중력. 앞으로도 윈어스는 진심과
          실행력으로 고객과 함께 성장하는 회사를 만들어가겠습니다.
        </p>
      </div>
    </div>
  );
}

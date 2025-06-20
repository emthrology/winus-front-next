'use client';
import Footer from '@/components/common/Footer';
import TitleComponent from '@/components/common/TitleComponent';
import React, { useEffect } from 'react';
import useThemeStore from '@/store/themeStore';
import PrivacyPolicy from '@/components/contact/PrivacyPolicy';
export default function Page() {
  const setThemeColor = useThemeStore((state) => state.setThemeColor);
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
    <div className="w-screen">
      <TitleComponent title="Contact." />
      <PrivacyPolicy />
      <Footer contactTheme={'blue'} />
    </div>
  );
}

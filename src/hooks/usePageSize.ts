import { useState, useEffect } from 'react';
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    // 768px 이상인지 체크
    const check = () =>
      setIsMdUp(window.matchMedia('(min-width: 768px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMdUp;
}

function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    // 768px 이상인지 체크
    const check = () =>
      setIsLgUp(window.matchMedia('(min-width: 1024px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isLgUp;
}

export { useIsMdUp, useIsLgUp };

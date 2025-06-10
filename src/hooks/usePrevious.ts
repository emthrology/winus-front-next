import { useRef, useEffect } from 'react';

/**
 * useState등에 저장하고 있는 직전값을 보관하고 불러올 수 있는 함수
 * @param value <T> 기억할 값
 * @returns 기억하고 있는 값
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

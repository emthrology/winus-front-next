import { useState, useRef, useEffect, Ref } from 'react';

export function useSwiperRef<T extends HTMLElement>(): [T | null, Ref<T>] {
  const [wrapper, setWrapper] = useState<T | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) setWrapper(ref.current);
  }, []);

  return [wrapper, ref];
}

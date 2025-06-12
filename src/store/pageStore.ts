import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RefObject } from 'react';

interface IPageState {
  scrollRef: RefObject<HTMLDivElement> | null;
  setScrollRef: (ref: RefObject<HTMLDivElement> | null) => void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stateCreator = (set: any) => ({
  scrollRef: null,
  setScrollRef: (ref: RefObject<HTMLDivElement> | null) =>
    set({ scrollRef: ref }),
});

//devtools적용과 create를 curry로 처리했는데..devtools가 작동을안함
const usePageStore = create<IPageState>()(
  process.env.NODE_ENV !== 'production'
    ? devtools(stateCreator, { name: 'ScrollRefStore' })
    : stateCreator
);

export { usePageStore };

'use client';
import { useState } from 'react';

interface ButtonProps {
  label: string;
  theme: string;
}
interface ButtonGroupProps {
  buttonData: ButtonProps[];
  activeIdx?: number; // 컨트롤드: 외부에서 관리
  defaultActiveIdx?: number; // 언컨트롤드: 내부에서 초기값만 받음
  onChange?: (idx: number) => void;
}

export default function ButtonGroup({
  buttonData,
  activeIdx: controlledActiveIdx,
  defaultActiveIdx = 0,
  onChange,
}: ButtonGroupProps) {
  // 내부 상태: 컨트롤드가 아니면 사용
  const [uncontrolledIdx, setUncontrolledIdx] = useState(defaultActiveIdx);

  // 실제로 사용할 인덱스
  const isControlled = controlledActiveIdx !== undefined;
  const activeIdx = isControlled ? controlledActiveIdx : uncontrolledIdx;
  const handleClick = (idx: number) => {
    if (!isControlled) setUncontrolledIdx(idx);
    onChange?.(idx);
  };
  return (
    <div className="w-screen min-h-[80px] bg-white  border-2 border-b-zinc-200 flex justify-start items-center pl-36">
      {buttonData.map((item, idx) => (
        <button
          className={`
            bg-white  font-medium text-[18px] outline-none w-[120px] h-[40px] rounded-[40px] mr-6 cursor-pointer transition-all duration-200
            border-1
            ${
              activeIdx === idx
                ? item.theme == 'blue'
                  ? 'border border-[#032FF4] text-[#0052ff] font-bold shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]'
                  : 'border border-[#E61E2B] text-[#E61E2B] font-bold shadow-[0_4px_8px_-2px_rgba(0,0,0,0.48)]'
                : 'text-[#222] border-transparent'
            }
          `}
          onClick={() => handleClick(idx)}
          key={idx}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

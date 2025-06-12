import React, { useRef, useState, useEffect } from 'react';

interface NoticeEditorProps {
  initialValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function NoticeEditor({
  initialValue = '',
  placeholder = '공지 내용을 입력하세요',
  onChange,
}: NoticeEditorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState(initialValue);

  // 입력 이벤트 핸들러
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const value = e.currentTarget.innerText;
    setContent(value);
    if (onChange) onChange(value);
  };

  // 외부에서 값 변경 시 동기화
  useEffect(() => {
    if (ref.current && ref.current.innerText !== initialValue) {
      ref.current.innerText = initialValue;
    }
    setContent(initialValue);
  }, [initialValue]);

  // placeholder 스타일 적용
  useEffect(() => {
    if (ref.current && !content) {
      ref.current.setAttribute('data-placeholder', placeholder || '');
    }
  }, [content, placeholder]);

  return (
    <div
      ref={ref}
      className={`
        max-w-9xl bg-white rounded-xl shadow-lg p-8
        min-h-[160px] border border-gray-300 
        focus:outline-none focus:border-blue-500 text-gray-900
        text-base leading-relaxed
        relative
        ${!content ? 'empty' : ''}
      `}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={handleInput}
      spellCheck={true}
      data-placeholder={placeholder}
      style={{
        outline: 'none',
      }}
    >
      {/* content를 직접 렌더링하지 않음 */}
      <style jsx>{`
        .empty:empty:before {
          content: attr(data-placeholder);
          color: #bbb;
          pointer-events: none;
          position: absolute;
        }
      `}</style>
    </div>
  );
}

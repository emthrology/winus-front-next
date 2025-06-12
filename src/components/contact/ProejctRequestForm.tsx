'use client';
import React, { useState } from 'react';
import { sendProjectRequest } from '@/actions/sendProjectRequest';
import Icon from '@mdi/react';
import { mdiMenuDown } from '@mdi/js'; // 원하는 caret 아이콘
import Link from 'next/link';
export default function ProjectRequestForm() {
  const [form, setForm] = useState({
    company: '',
    manager: '',
    phone: '',
    category: '',
    email: '',
    budget: '',
    message: '',
    agree: false,
  });
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState('');
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (target as HTMLInputElement).checked : value,
    }));
  };

  async function handleAction(formData: FormData) {
    setPending(true);
    setResult('');
    try {
      await sendProjectRequest(formData);
      setResult('문의가 성공적으로 발송되었습니다!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setResult(e.message || '오류가 발생했습니다.');
    }
    setPending(false);
  }
  return (
    <form className=" mx-auto p-12" action={handleAction} autoComplete="off">
      {/* 제목 */}
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12 tracking-wide">
        PROJECT REQUEST
      </h2>
      <hr className="border-t-2 border-gray-300 mb-10" />

      {/* 1행: 회사명, 담당자명, 연락처 */}
      <div className="grid grid-cols-3 gap-8 space-y-4 mb-8">
        {/* 회사명 */}
        <div>
          <div className="flex items-end border-b border-gray-300 pb-1">
            <label className="text-base text-gray-700 mr-2 whitespace-nowrap">
              회사명
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 text-base font-bold"
              required
            />
          </div>
        </div>
        {/* 담당자명 */}
        <div>
          <div className="flex items-end border-b border-gray-300 pb-1">
            <label className="text-base text-gray-700 mr-2 whitespace-nowrap">
              담당자명
            </label>
            <input
              type="text"
              name="manager"
              value={form.manager}
              onChange={handleChange}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 text-base font-bold"
              placeholder=""
              required
            />
          </div>
        </div>
        {/* 연락처 */}
        <div>
          <div className="flex items-end border-b border-gray-300 pb-1">
            <label className="text-base text-gray-700 mr-2 whitespace-nowrap">
              연락처
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 text-base font-medium"
              placeholder=""
              required
            />
          </div>
        </div>
      </div>

      {/* 2행: 프로젝트 구분, 이메일, 금액대 */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* 프로젝트 구분 */}
        <div>
          <div className="relative flex items-end border-b border-gray-300 pb-1">
            <label className="text-base text-gray-700 mr-2 whitespace-nowrap">
              프로젝트 구분
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full bg-transparentpr-8 appearance-none text-gray-700 font-bold focus:outline-none"
              required
            >
              <option value="" disabled className="text-gray-200">
                선택
              </option>
              <option value="디자인">디자인</option>
              <option value="행사기획">행사기획</option>
              <option value="선거">선거</option>
              <option value="영상제작">영상제작</option>
              <option value="기타">기타</option>
            </select>
            {/* 커스텀 caret 아이콘 */}
            <Icon
              path={mdiMenuDown}
              size={1}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
        {/* 이메일 */}
        <div>
          <div className="flex items-end border-b border-gray-300 pb-1">
            <label className="text-base text-gray-700 mr-2 whitespace-nowrap">
              이메일
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="flex-1 bg-transparent focus:outline-none text-gray-700 text-base font-bold"
              placeholder=""
              required
            />
          </div>
        </div>
        {/* 금액대 */}
        <div>
          <div className="relative flex items-end border-b border-gray-300 pb-1">
            <label className="text-base text-gray-700 mr-2 whitespace-nowrap">
              금액대
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full bg-transparentpr-8 appearance-none text-gray-700 font-bold focus:outline-none"
              required
            >
              <option value="" disabled className="text-gray-200">
                선택
              </option>
              <option value="500만원 미만">500만원 미만</option>
              <option value="1000만원 미만">1000만원 미만</option>
              <option value="1500만원 미만">1500만원 미만</option>
              <option value="2000만원 이상">2000만원 이상</option>
            </select>
            {/* 커스텀 caret 아이콘 */}
            <Icon
              path={mdiMenuDown}
              size={1}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* 문의사항 */}
      <div className="mb-6">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl p-4 min-h-[400px] resize-none focus:outline-none focus:border-blue-500 text-gray-700"
          placeholder="주요 문의사항을 작성해주세요."
        />
      </div>

      {/* 개인정보 동의 */}
      <div className="flex items-center mb-8">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="agree" className="text-sm text-gray-500">
          개인정보 수집, 이용 및 처리방침에 동의(약관)
        </label>

        <Link
          href={'/privacy'}
          className="ml-4 text-sm text-blue-500 cursor-pointer"
        >
          개인정보 처리방침
        </Link>
      </div>

      {/* 결과 메시지 */}
      {result && (
        <div className="mb-4 text-center text-red-600 font-semibold">
          {result}
        </div>
      )}

      {/* 버튼 */}
      <button
        type="submit"
        disabled={pending}
        className="w-48 h-12 bg-blue-600 text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition"
      >
        {pending ? '전송 중...' : '문의하기'}
      </button>
    </form>
  );
}

'use client';

import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';

const ALLOWED_EXTENSIONS = [
  'pdf',
  'ai',
  'psd',
  'hwp',
  'doc',
  'docx',
  'xls',
  'xlsx',
];

export default function EditComponent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    const invalid = selected.filter((file) => {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';
      return !ALLOWED_EXTENSIONS.includes(ext);
    });
    if (invalid.length) {
      setFileError('허용되지 않는 파일 형식입니다.');
      setFiles([]);
    } else {
      setFileError('');
      setFiles(selected);
    }
  };

  const uploadFiles = async (files: File[]): Promise<string[]> => {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      // 1. presigned URL 요청
      const res = await fetch(
        `/api/presigned?file=${encodeURIComponent(file.name)}&contentType=${
          file.type
        }`
      );
      const { presignedUrl } = await res.json();

      // 2. S3로 파일 직접 업로드
      const uploadRes = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type },
      });

      if (!uploadRes.ok) throw new Error('업로드 실패');

      // 3. 업로드된 파일의 S3 URL
      const fileUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.amazonaws.com/${file.name}`;
      uploadedUrls.push(fileUrl);
    }

    return uploadedUrls;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const content = contentRef.current?.innerHTML || '';

    // 1. 파일 업로드 (예시)
    let fileUrls: string[] = [];
    if (files.length > 0) {
      fileUrls = await uploadFiles(files);
    }

    // 2. 게시글 저장(서버 액션/라우트 호출)
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
        fileUrls,
      }),
      credentials: 'include', // ← 이 옵션이 반드시 필요
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert('글이 저장되었습니다. postId: ' + data.postId);
      // 필요시 페이지 이동 등 처리
      window.location.href = '/notice';
    } else {
      alert(data.error || '저장 실패');
    }
  };

  return (
    <form
      className="max-w-2xl mx-auto my-12 p-8 bg-white rounded shadow flex flex-col gap-6 font-pretendard"
      onSubmit={handleSubmit}
    >
      <h1 className="py-4 text-black text-2xl text-center">공지사항 작성</h1>
      <input
        className="border border-zinc-400 placeholder-gray-300 text-gray-700  px-3 py-2 rounded text-lg"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <div
        ref={contentRef}
        contentEditable
        className="min-h-[180px] border border-zinc-400 placeholder-gray-300 text-gray-700 px-3 py-2 rounded focus:outline-none"
        suppressContentEditableWarning
        style={{ whiteSpace: 'pre-wrap' }}
      />

      <div>
        <label className="block mb-1 font-medium">
          첨부파일 (PDF, AI, PSD, HWP, 워드, 엑셀)
        </label>
        <input
          type="file"
          multiple
          accept=".pdf,.ai,.psd,.hwp,.doc,.docx,.xls,.xlsx"
          onChange={handleFileChange}
          className="block"
        />
        {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
        {files.length > 0 && (
          <ul className="mt-2 text-sm text-gray-700">
            {files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? '저장 중...' : '글쓰기'}
      </button>
    </form>
  );
}

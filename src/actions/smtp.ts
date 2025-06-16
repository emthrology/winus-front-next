'use server';

import nodemailer from 'nodemailer';

/**
 * SMTP 서버 통신 모듈
 * @param formData
 * @returns
 */
export async function sendProjectRequest(
  formData: FormData
): Promise<{ ok: boolean }> {
  const company = formData.get('company') as string;
  const manager = formData.get('manager') as string;
  const phone = formData.get('phone') as string;
  const category = formData.get('category') as string;
  const email = formData.get('email') as string;
  const budget = formData.get('budget') as string;
  const message = formData.get('message') as string;
  const agree = formData.get('agree');

  if (
    !company ||
    !manager ||
    !phone ||
    !category ||
    !email ||
    !budget ||
    !message ||
    !agree
  ) {
    throw new Error('모든 항목을 입력해주세요.');
  }

  // SMTP 환경변수는 .env.local에 설정
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"프로젝트 문의" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: `[프로젝트 문의] ${company} - ${manager}`,
    html: `
      <h3>프로젝트 문의</h3>
      <ul>
        <li><b>회사명:</b> ${company}</li>
        <li><b>담당자명:</b> ${manager}</li>
        <li><b>연락처:</b> ${phone}</li>
        <li><b>프로젝트 구분:</b> ${category}</li>
        <li><b>이메일:</b> ${email}</li>
        <li><b>금액대:</b> ${budget}</li>
      </ul>
      <p><b>문의내용:</b><br/>${message}</p>
    `,
  });

  return { ok: true };
}

// app/actions/auth.ts
'use server';
import { query } from '@/lib/db';

/**
 * 로그인 통신 모듈
 * @param formData
 * @returns
 */
export async function login(formData: FormData) {
  const userId = formData.get('userId');
  const password = formData.get('password');

  if (typeof userId !== 'string' || typeof password !== 'string') {
    throw new Error('Invalid form data');
  }

  const result = await query(
    "SELECT id, name, password FROM users WHERE mame = ? AND status = 'approved'",
    [userId]
  );

  // If result is not an array, handle accordingly
  type UserRow = { id: number; name: string; password: string };
  const users = Array.isArray(result) ? (result as UserRow[]) : [];

  if (users.length === 0) {
    throw new Error('Invalid credentials');
  }

  const user = users[0];

  // TODO: 비밀번호 해시 비교 로직 추가 (bcrypt 등)

  if (user.password !== password) {
    throw new Error('Invalid credentials');
  }

  // 로그인 성공 처리 (세션 생성 등)

  return user;
}

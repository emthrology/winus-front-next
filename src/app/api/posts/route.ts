/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { query } from '@/lib/db';
import authOptions from '@/lib/authOptions';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = Number(searchParams.get('page')) || 1;
  const perPage = Number(searchParams.get('perPage')) || 15;
  const searchType =
    searchParams.get('searchType') === 'author' ? 'author' : 'title';
  const keyword = searchParams.get('keyword') || '';

  const offset = (page - 1) * perPage;
  let whereClause = '';
  const params: string[] = [];
  if (keyword) {
    if (searchType === 'title') {
      whereClause = 'WHERE title LIKE ?';
      params.push(`%${keyword}%`);
    } else if (searchType === 'author') {
      whereClause = 'WHERE author LIKE ?';
      params.push(`%${keyword}%`);
    }
  }

  const totalResult = (await query(
    `SELECT COUNT(*) as total FROM posts ${whereClause}`,
    params
  )) as Array<{ total: number }>;
  const total = totalResult[0]?.total ?? 0;

  const listResult = await query(
    `SELECT 
      posts.id, title, users.nickname AS author, posts.created_at 
    FROM 
      posts
    JOIN
      users ON posts.user_id = users.id 
    ${whereClause}
    ORDER BY 
      created_at DESC, posts.id DESC LIMIT ? OFFSET ?`,
    [...params, perPage, offset]
  );

  return NextResponse.json({
    notices: listResult,
    total,
  });
}

export async function POST(req: NextRequest) {
  try {
    // 세션에서 user id 추출
    interface SessionUser {
      id: string;
      [key: string]: any;
    }
    interface Session {
      user?: SessionUser;
      [key: string]: any;
    }
    const session = (await getServerSession(authOptions)) as Session;
    if (!session || !session.user?.id) {
      return NextResponse.json(
        { success: false, error: '로그인 필요' },
        { status: 401 }
      );
    }
    const userId = session.user.id;
    const { title, content, fileUrls } = await req.json();

    // 게시글 저장
    const result = await query(
      'INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)',
      [userId, title, content]
    );
    // Type guard for insertId
    let insertId: number | undefined;
    if (result && typeof result === 'object' && 'insertId' in result) {
      insertId = (result as { insertId: number }).insertId;
    } else if (Array.isArray(result) && result[0] && 'insertId' in result[0]) {
      insertId = (result[0] as { insertId: number }).insertId;
    }
    const postId = insertId;

    // 첨부파일 정보 저장 (여러 파일)
    if (Array.isArray(fileUrls) && fileUrls.length > 0) {
      const fileValues = fileUrls.map((url: string) => [postId, url]);
      // 여러 파일 한 번에 저장 (예시: post_files 테이블)
      await Promise.all(
        fileValues.map(([pid, url]) =>
          query('INSERT INTO post_files (post_id, file_url) VALUES (?, ?)', [
            pid,
            url,
          ])
        )
      );
    }

    return NextResponse.json({ success: true, postId });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: '게시글 저장 실패' },
      { status: 500 }
    );
  }
}

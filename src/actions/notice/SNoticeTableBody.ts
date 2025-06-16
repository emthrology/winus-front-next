'use server';
import { Notice } from '@/types/notice';
import { query } from '@/lib/db';
interface QueryParams {
  page: number;
  perPage?: number;
  searchType: 'title' | 'author';
  keyword?: string;
}
export async function SNoticeTableBody({
  page = 1,
  perPage = 15,
  searchType = 'title',
  keyword = '',
}: QueryParams) {
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
  // 전체 개수 구하기
  const totalResult = (await query(
    `SELECT COUNT(*) as total FROM posts ${whereClause}`,
    params
  )) as Array<{ total: number }>;
  const total = totalResult[0]?.total ?? 0;

  // 게시글 목록 가져오기
  const listResult = (await query(
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
  )) as Array<Notice>;

  return {
    notices: listResult,
    total,
  };
}

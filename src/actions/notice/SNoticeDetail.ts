// src/actions/notice/getNoticeDetail.ts
'use server';

import { query } from '@/lib/db';
import { Notice } from '@/types/notice';

export async function SNoticeDetail(id: number): Promise<Notice | null> {
  // 1. viewCount 증가
  await query(`UPDATE posts SET view_count = view_count + 1 WHERE id = ?`, [
    id,
  ]);
  const result = (await query(
    `SELECT 
      posts.id, 
      posts.title, 
      posts.content, 
      posts.view_count,
      users.nickname AS author, 
      posts.created_at,
      post_files.file_url
    FROM posts
    JOIN users ON posts.user_id = users.id
    LEFT JOIN post_files ON post_files.post_id = posts.id
    WHERE posts.id = ?
    LIMIT 1`,
    [id]
  )) as Notice[];

  if (!Array.isArray(result) || result.length === 0) return null;
  return result[0] as Notice;
}

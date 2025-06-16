// /types/notice.ts
export interface Notice {
  id: number;
  title: string;
  author: string;
  view_count?: string;
  content?: string;
  created_at: Date; // 또는 Date, DB에서 string으로 받으면 string
  file_url?: string;
}

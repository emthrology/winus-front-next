import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json(
      { success: false, error: 'ID가 없습니다.' },
      { status: 400 }
    );
  }

  try {
    await query('DELETE FROM posts WHERE id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: '삭제 실패' },
      { status: 500 }
    );
  }
}

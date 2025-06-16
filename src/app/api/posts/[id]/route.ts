import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    await query('DELETE FROM posts WHERE id = ?', [id]);
    // 첨부파일 등 연관 데이터도 함께 삭제 필요시 추가
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: '삭제 실패' },
      { status: 500 }
    );
  }
}

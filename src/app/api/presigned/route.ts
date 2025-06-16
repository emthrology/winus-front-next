import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const file = searchParams.get('file');
  const contentType =
    searchParams.get('contentType') || 'application/octet-stream';

  if (!file) return new Response('File name required', { status: 400 });

  const s3 = new S3Client({
    region: process.env.AWS_DEFAULT_REGION!,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET!,
    Key: file,
    ContentType: contentType,
  });

  const presignedUrl = await getSignedUrl(s3, command, { expiresIn: 60 }); // 60초 유효

  return Response.json({ presignedUrl });
}

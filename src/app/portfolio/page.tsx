// page.tsx
import { Suspense } from 'react';
import PortfolioMain from '@/components/portfolio/PortfolioMain';

export default function Page() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <PortfolioMain />
    </Suspense>
  );
}

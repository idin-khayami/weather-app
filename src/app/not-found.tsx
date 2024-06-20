import Link from 'next/link';

import { paths } from '@/utils/paths';

export default function NotFound() {
  return (
    <div data-testid="NotFoundPage">
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you have encountered a missing page.</p>
      <Link href={paths.homepage}>Go back home</Link>
    </div>
  );
}

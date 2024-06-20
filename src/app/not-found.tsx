import Link from 'next/link';

import { paths } from '@/utils/paths';

import styles from './layout.module.scss';

export default function NotFound() {
  return (
    <div data-testid="NotFoundPage" className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you have encountered a missing page.</p>
      <Link href={paths.homepage} className={styles.link}>
        Go back home
      </Link>
    </div>
  );
}

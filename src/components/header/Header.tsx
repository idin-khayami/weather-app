import clsx from 'clsx';
import Link from 'next/link';

import { ComponentBaseProps } from '@/types/global.types';
import { paths } from '@/utils/paths';

import styles from './header.module.scss';

interface HeaderProps extends ComponentBaseProps {}

export const Header = ({ dataTestId, className }: HeaderProps) => {
  return (
    <header
      data-testid={dataTestId}
      className={clsx([styles.header, className])}
    >
      <Link href={paths.homepage}>
        <p className={styles.title}>React Weather</p>
      </Link>
    </header>
  );
};

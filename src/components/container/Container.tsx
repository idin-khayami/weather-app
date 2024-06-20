import { ReactNode } from 'react';

import clsx from 'clsx';

import { ComponentBaseProps } from '@/types/global.types';

import styles from './container.module.scss';

interface ContainerProps extends ComponentBaseProps {
  children: ReactNode;
}

export const Container = ({
  dataTestId,
  children,
  className,
}: ContainerProps) => {
  return (
    <div
      data-testid={dataTestId}
      className={clsx([styles.container, className])}
    >
      {children}
    </div>
  );
};

import { ReactNode } from 'react';

import clsx from 'clsx';

import { Loading } from '@/components/loading';

import styles from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
}

export const Button = ({
  children,
  onClick,
  className,
  isLoading = false,
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.buttonBase, className)}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

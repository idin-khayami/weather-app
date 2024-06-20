import clsx from 'clsx';

import { ComponentBaseProps } from '@/types/global.types';
import { DEFAULT_ERROR_MESSAGE } from '@/utils/constants';

import styles from './error.module.scss';

interface ErrorProps extends ComponentBaseProps {
  hasError?: boolean;
  errorMessage?: string;
}

export const Error = ({
  dataTestId,
  errorMessage = DEFAULT_ERROR_MESSAGE,
  hasError = true,
  className,
}: ErrorProps) => {
  if (!hasError) return null;

  return (
    <div data-testid={dataTestId} className={clsx([styles.error, className])}>
      <p>{errorMessage}</p>
    </div>
  );
};

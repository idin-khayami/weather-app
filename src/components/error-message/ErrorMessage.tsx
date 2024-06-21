import clsx from 'clsx';

import { ComponentBaseProps } from '@/types/global.types';

import styles from './error-message.module.scss';

interface ErrorMessageProps extends ComponentBaseProps {
  hasError?: boolean;
  errorMessage?: string;
}

export const ErrorMessage = ({
  hasError = true,
  errorMessage = '',
  className,
  dataTestId,
}: ErrorMessageProps) => {
  if (!hasError) return null;

  return (
    <p
      data-testid={dataTestId}
      className={clsx([styles.errorMessage, className])}
    >
      {errorMessage}
    </p>
  );
};

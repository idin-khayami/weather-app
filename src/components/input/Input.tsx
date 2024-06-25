import { forwardRef } from 'react';

import clsx from 'clsx';

import { ComponentBaseProps } from '@/types/global.types';

import styles from './input.module.scss';

interface InputProps extends ComponentBaseProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  isInvalid?: boolean;
  onBlur?: (value: string) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      onChange,
      type = 'text',
      isInvalid = false,
      dataTestId,
      className,
      placeholder,
      onBlur,
    },
    ref,
  ) => {
    return (
      <input
        id={name}
        ref={ref}
        data-testid={dataTestId}
        name={name}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        onBlur={(e) => {
          if (onBlur) {
            onBlur(e.target.value);
          }
        }}
        type={type}
        placeholder={placeholder}
        className={clsx([
          styles.inputBase,
          {
            [styles.invalid]: isInvalid,
          },
          className,
        ])}
      />
    );
  },
);

Input.displayName = 'Input';

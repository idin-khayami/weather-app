'use client';

import { FormEventHandler, useState } from 'react';

import clsx from 'clsx';

import { Container } from '@/components/container';
import { ErrorMessage } from '@/components/error-message';
import { Input } from '@/components/input';
import { useInput } from '@/hooks/useInput';
import { ComponentBaseProps } from '@/types/global.types';
import { isRequired } from '@/utils/validators';

import styles from './search-form.module.scss';

interface SearchFormProps extends ComponentBaseProps {
  cityId?: string;
}

export const SearchForm = ({ dataTestId, className }: SearchFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cityInput = useInput({
    validator: isRequired,
    errorMessage: 'City name is required',
  });

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const cityValue = cityInput.ref.current?.value;

      const isCityNameValid = cityInput.validate();
      if (!isCityNameValid) {
        setIsLoading(true);
        console.log(cityValue);
        // implement
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div data-testid={dataTestId} className={className}>
      <Container>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles.formItem}>
            <label
              htmlFor="city"
              className={clsx({ [styles.error]: !cityInput.isValid })}
            >
              City Name
            </label>
            <Input
              dataTestId="cityInput"
              name="city"
              ref={cityInput.ref}
              isInvalid={!cityInput.isValid}
            />

            <ErrorMessage
              hasError={cityInput.isValid}
              errorMessage={cityInput.errorMessage}
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

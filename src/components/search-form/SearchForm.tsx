'use client';

import { FormEventHandler, useState, useEffect, useCallback } from 'react';

import clsx from 'clsx';

import { locationApiGateway } from '@/api/locations';
import { LocationApiSuccess } from '@/api/locations/locationsApi.types';
import { Container } from '@/components/container';
import { ErrorMessage } from '@/components/error-message';
import { Input } from '@/components/input';
import { useInput } from '@/hooks/useInput';
import { ComponentBaseProps } from '@/types/global.types';
import { debounce } from '@/utils/debounce';
import { isRequired } from '@/utils/validators';

import styles from './search-form.module.scss';

interface SearchFormProps extends ComponentBaseProps {
  cityId?: string;
}

export const SearchForm = ({ dataTestId, className }: SearchFormProps) => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<LocationApiSuccess>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const cityInput = useInput({
    validator: isRequired,
    errorMessage: 'City name is required',
  });

  const { data, isFetching } = locationApiGateway.useGetAutoCompleteLocations(
    query,
    !!query,
  );

  useEffect(() => {
    if (data) {
      setSuggestions(data);
    }
  }, [data]);

  const handleAutoComplete = useCallback(
    debounce((value: string) => {
      setQuery(value);
      setShowSuggestions(true);
      cityInput.validate();
    }, 300),
    [],
  );

  const handleBlur = () => {
    cityInput.setTouched(true);
    cityInput.validate();
  };

  const handleSelectSuggestion = (localizedName: string) => {
    setQuery(localizedName);
    setShowSuggestions(false);

    if (cityInput.ref.current) {
      cityInput.ref.current.value = localizedName;
    }
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      cityInput.setTouched(true);

      const cityValue = cityInput.ref.current?.value;

      if (cityValue && cityInput.validate()) {
        console.log(cityValue);
        // implement form submission
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
              className={clsx([
                styles.label,
                { [styles.error]: !cityInput.isValid && cityInput.touched },
                className,
              ])}
            >
              City Name
            </label>
            <Input
              dataTestId="cityInput"
              name="city"
              ref={cityInput.ref}
              isInvalid={!cityInput.isValid && cityInput.touched}
              onChange={(value) => {
                handleAutoComplete(value);
              }}
              onBlur={handleBlur}
            />
            {showSuggestions && query && (
              <div className={styles.suggestions}>
                {isFetching ? (
                  <div>Loading...</div>
                ) : (
                  suggestions.map((location) => (
                    <div
                      key={location.Key}
                      className={styles.suggestion}
                      onClick={() =>
                        handleSelectSuggestion(location.LocalizedName)
                      }
                    >
                      {location.LocalizedName}
                    </div>
                  ))
                )}
              </div>
            )}
            <ErrorMessage
              hasError={!cityInput.isValid && cityInput.touched}
              errorMessage={cityInput.errorMessage}
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

import { RefObject, useRef, useState, useEffect } from 'react';

export interface UseInputProps {
  initialValue?: string;
  validator?: (value?: string) => boolean;
  errorMessage?: string;
  ref?: RefObject<HTMLInputElement>;
}

export interface UseInputReturn {
  ref: RefObject<HTMLInputElement>;
  validate: () => boolean;
  isValid?: boolean;
  errorMessage?: string;
}

export function useInput({
  initialValue = '',
  validator,
  errorMessage = '',
  ref,
}: UseInputProps = {}): UseInputReturn {
  const defaultRef = useRef<HTMLInputElement>(null);
  const inputRef = ref ?? defaultRef;
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.defaultValue = initialValue;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validate = () => {
    if (validator) {
      const validationResult = validator(inputRef?.current?.value);

      setIsValid(validationResult);

      return validationResult;
    }

    return false;
  };

  return {
    ref: inputRef,
    isValid,
    errorMessage: isValid ? '' : errorMessage,
    validate,
  };
}

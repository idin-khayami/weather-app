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
  touched: boolean;
  setTouched: (touched: boolean) => void;
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
  const [touched, setTouched] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = initialValue;
    }
  }, [initialValue, inputRef]);

  const validate = () => {
    if (validator && inputRef.current) {
      const validationResult = validator(inputRef.current.value);

      setIsValid(validationResult);

      return validationResult;
    }

    return false;
  };

  return {
    ref: inputRef,
    isValid,
    errorMessage: touched && !isValid ? errorMessage : '',
    validate,
    touched,
    setTouched,
  };
}

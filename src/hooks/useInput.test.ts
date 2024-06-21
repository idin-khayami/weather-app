import { RefObject } from 'react';

import { act, fireEvent, renderHook } from '@testing-library/react';

import { useInput } from '@/hooks/useInput';

describe('Hooks: useInput', () => {
  const ref: RefObject<HTMLInputElement> = {
    current: document.createElement('input'),
  };

  const validatorMock = jest.fn((value) => !!value);

  it('should set defaultValue on initial render', () => {
    const { result } = renderHook(() =>
      useInput({ initialValue: 'test', ref }),
    );

    expect(result.current.ref.current?.defaultValue).toBe('test');
  });

  it('should validate and set isValid correctly', () => {
    const { result } = renderHook(() =>
      useInput({ validator: validatorMock, ref }),
    );

    act(() => {
      result.current.validate();
    });

    expect(validatorMock).toHaveBeenCalledWith('');
    expect(result.current.isValid).toBe(false);
  });

  it('should update errorMessage based on validation result', () => {
    const errorMessage = 'Invalid input';

    const { result } = renderHook(() =>
      useInput({ validator: validatorMock, errorMessage, ref }),
    );

    act(() => {
      result.current.validate();
    });

    expect(result.current.errorMessage).toBe(errorMessage);
  });

  it('should update isValid on input change', () => {
    const { result } = renderHook(() =>
      useInput({ validator: validatorMock, ref }),
    );

    fireEvent.change(result.current.ref.current!, {
      target: { value: 'valid' },
    });

    act(() => {
      result.current.validate();
    });

    expect(validatorMock).toHaveBeenCalledWith('valid');
    expect(result.current.isValid).toBe(true);
  });
});

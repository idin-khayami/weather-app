import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from '@/components/input';

describe('Component: input component', () => {
  it('should render', () => {
    const mockFn = jest.fn();

    render(
      <Input
        name="email"
        dataTestId="testingInput"
        value=""
        onChange={mockFn}
        type="email"
      />,
    );

    const input = screen.getByTestId('testingInput');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
  });

  it('should render with placeholder', () => {
    const mockFn = jest.fn();

    render(
      <Input
        name="email"
        dataTestId="testingInput"
        value=""
        placeholder="insert value here"
        onChange={mockFn}
      />,
    );

    expect(
      screen.getByPlaceholderText('insert value here'),
    ).toBeInTheDocument();
  });

  it('value and onChange should work correctly', () => {
    const mockFn = jest.fn();

    render(
      <Input
        name="email"
        type="email"
        dataTestId="testingInput"
        value="sample@gmail.com"
        placeholder="insert value here"
        onChange={mockFn}
      />,
    );

    const input = screen.getByTestId('testingInput');

    expect(input).toHaveValue('sample@gmail.com');

    fireEvent.change(input, { target: { value: 'sample@yahoo.com' } });

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenLastCalledWith('sample@yahoo.com');
  });

  it('should be invalid', () => {
    const mockFn = jest.fn();

    render(
      <Input
        name="email"
        type="email"
        dataTestId="testingInput"
        value="sample@gmail.com"
        placeholder="insert value here"
        onChange={mockFn}
        isInvalid={true}
      />,
    );

    expect(screen.getByTestId('testingInput')).toHaveClass('invalid');
  });
});

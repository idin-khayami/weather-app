import { render, screen } from '@testing-library/react';

import { Button } from '@/components/button/Button';
import { renderWithUserSetup } from '@/utils/test-helpers/test-helpers';

describe('Component: button component', () => {
  it('should render', () => {
    render(<Button>This is a Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('This is a Button');
  });

  it('should match the snapshot', () => {
    render(<Button>This is a Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toMatchSnapshot();
  });

  it('should be clickable', async () => {
    const mockFn = jest.fn();

    const { user } = renderWithUserSetup(
      <Button onClick={mockFn}>This is a Button</Button>,
    );

    const button = screen.getByRole('button');

    expect(mockFn).toHaveBeenCalledTimes(0);
    await user.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when loading', async () => {
    const mockFn = jest.fn();

    const { user } = renderWithUserSetup(
      <Button onClick={mockFn} isLoading={true}>
        This is a Button
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(mockFn).toHaveBeenCalledTimes(0);
    await user.click(button);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('sample functionality test', async () => {
    let variable = 0;

    const { user } = renderWithUserSetup(
      <Button
        onClick={() => {
          variable = variable + 1;
        }}
      >
        This is a Button
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(variable).toBe(0);
    await user.click(button);
    expect(variable).toBe(1);
  });
});

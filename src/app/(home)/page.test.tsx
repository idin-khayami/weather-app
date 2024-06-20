import { render, screen } from '@testing-library/react';

import HomePage from '@/app/(home)/page';

describe('Page: homepage', () => {
  it('should render homepage', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: /Hello World/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('should have valid snapshot', () => {
    render(<HomePage />);

    const homepage = screen.getByTestId('homepage');

    expect(homepage).toMatchSnapshot();
  });
});

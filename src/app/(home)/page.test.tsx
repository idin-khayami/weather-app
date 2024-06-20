import { render, screen } from '@testing-library/react';
import Home from '@/app/(home)/page';

describe('Pages', () => {
  it('page', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Hello World/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

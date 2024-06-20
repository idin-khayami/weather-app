import { render, screen } from '@testing-library/react';

import { Header } from '@/components/header';

describe('Component: header component', () => {
  it('should match the snapshot', () => {
    render(<Header dataTestId="testingHeader" />);

    const header = screen.getByTestId('testingHeader');

    expect(header).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';

import { Container } from '@/components/container';

describe('Component: container', () => {
  it('should match the snapshot', () => {
    render(<Container dataTestId="testingContainer">Content</Container>);

    const cont = screen.getByTestId('testingContainer');

    expect(cont).toMatchSnapshot();
  });
});

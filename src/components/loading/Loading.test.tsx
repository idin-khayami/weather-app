import { render, screen } from '@testing-library/react';

import { Loading } from '@/components/loading/Loading';

describe('Component: loading component', () => {
  it('should match the snapshot with loading state', () => {
    render(<Loading dataTestId="testingLoading" />);

    const loading = screen.getByTestId('testingLoading');

    expect(loading).toBeInTheDocument();
    expect(loading).toMatchSnapshot();
  });

  it('should match the snapshot without loading state', () => {
    render(<Loading dataTestId="testingLoading" isLoading={false} />);

    const loading = screen.queryByTestId('testingLoading');

    expect(loading).not.toBeInTheDocument();
    expect(loading).toMatchSnapshot();
  });
});

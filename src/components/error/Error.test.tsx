import { render, screen } from '@testing-library/react';

import { Error } from '@/components/error/Error';
import { DEFAULT_ERROR_MESSAGE } from '@/utils/constants';

describe('Component: error component', () => {
  it('should render error by default', () => {
    render(<Error dataTestId="testingError" />);

    expect(screen.getByTestId('testingError')).toBeInTheDocument();
    expect(screen.getByTestId('testingError')).toMatchSnapshot();
  });

  it('should not have error if hasError is false', () => {
    render(<Error dataTestId="testingError" hasError={false} />);

    expect(screen.queryByTestId('testingError')).toBeNull();
  });

  it('should be able to render default error message', () => {
    render(<Error dataTestId="testingError" hasError={true} />);

    expect(screen.getByTestId('testingError')).toHaveTextContent(
      DEFAULT_ERROR_MESSAGE,
    );
  });

  it('should be able to render specified error message', () => {
    render(
      <Error
        dataTestId="testingError"
        hasError={true}
        errorMessage="Awesome Error"
      />,
    );

    expect(screen.getByTestId('testingError')).toHaveTextContent(
      'Awesome Error',
    );
  });
});

import { render, screen } from '@testing-library/react';

import { ErrorMessage } from './ErrorMessage';

describe('Component: error-message', () => {
  it('should match the snapshot with default params', () => {
    render(<ErrorMessage dataTestId="testingErrorMessage" />);

    expect(screen.getByTestId('testingErrorMessage')).toMatchSnapshot();
  });

  it('should match the snapshot with specified error message', () => {
    render(
      <ErrorMessage
        dataTestId="testingErrorMessage"
        errorMessage="Oops! there was an error!"
      />,
    );

    expect(screen.getByTestId('testingErrorMessage')).toMatchSnapshot();
  });

  it('should render with error message when there is an error', () => {
    const errorMessageText = 'This is an error message';

    render(<ErrorMessage hasError={true} errorMessage={errorMessageText} />);

    expect(screen.getByText(errorMessageText)).toBeInTheDocument();
  });

  it('should not render when there is no error', () => {
    render(
      <ErrorMessage
        dataTestId="testingErrorMessage"
        hasError={false}
        errorMessage="Some error"
      />,
    );

    expect(screen.queryByTestId('testingErrorMessage')).toBeNull();
  });

  it('should render by default', () => {
    render(<ErrorMessage dataTestId="testingErrorMessage" />);

    const errorMessage = screen.getByTestId('testingErrorMessage');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('');
  });
});

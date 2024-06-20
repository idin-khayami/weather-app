import { screen } from '@testing-library/react';

import { renderWithUserSetup } from '@/utils/test-helpers/test-helpers';

describe('Utils: test-helpers', () => {
  it('renderWithUserSetup should have set up userEvent correctly', async () => {
    const mockFn = jest.fn();

    const { user } = renderWithUserSetup(
      <button onClick={mockFn} data-testid="sampleButton">
        Hello World!
      </button>,
    );

    const element = screen.getByRole('button');

    expect(user).toBeDefined();
    expect(user).toHaveProperty('click');

    expect(mockFn).toHaveBeenCalledTimes(0);
    await user.click(element);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('renderWithUserSetup should have rendered component correctly', () => {
    renderWithUserSetup(<div data-testid="sampleDiv">Hello StuDocu</div>);

    const div = screen.getByTestId('sampleDiv');

    expect(div).toBeDefined();
    expect(div).toBeInTheDocument();
    expect(div).toMatchSnapshot();
  });
});

import { ReactElement } from 'react';

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';

export const renderWithUserSetup = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult & { user: UserEvent } => {
  return {
    user: userEvent.setup(),
    ...render(ui, options),
  };
};

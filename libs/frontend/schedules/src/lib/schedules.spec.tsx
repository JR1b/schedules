import { render } from '@testing-library/react';

import { Schedules } from './schedules';

describe('FrontendSchedules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Schedules />);
    expect(baseElement).toBeTruthy();
  });
});

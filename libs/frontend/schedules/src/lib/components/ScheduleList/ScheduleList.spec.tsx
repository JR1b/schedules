import { render } from '@testing-library/react';

import { ScheduleList } from './ScheduleList';

describe('FrontendSchedules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScheduleList />);
    expect(baseElement).toBeTruthy();
  });
});

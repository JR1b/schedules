import { render } from '@testing-library/react';

import { LogList } from './LogList';

describe('FrontendSchedules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogList logList={[]} />);
    expect(baseElement).toBeTruthy();
  });
});

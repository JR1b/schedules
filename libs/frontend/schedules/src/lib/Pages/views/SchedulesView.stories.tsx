import type { Meta } from '@storybook/react';

import { SchedulesView } from './SchedulesView';

const Story: Meta<typeof SchedulesView> = {
  component: SchedulesView,
  title: 'SchedulesView',
};
export default Story;

export const Primary = {
  args: {},
};

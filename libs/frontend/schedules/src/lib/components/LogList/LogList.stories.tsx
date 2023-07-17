import type { Meta } from '@storybook/react';

import { LogList } from './LogList';

const Story: Meta<typeof LogList> = {
  component: LogList,
  title: 'ScheduleList',
};
export default Story;

export const Primary = {
  args: {
    schedules: [
      {
        id: '1',
        name: 'Schedule 1',
        description: 'Schedule 1 description',
      },
      {
        id: '2',
        name: 'Schedule 2',
        description: 'Schedule 2 description',
      },
    ],
  },
};

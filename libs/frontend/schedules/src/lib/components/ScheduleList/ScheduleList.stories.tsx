import type { Meta } from '@storybook/react';

import { Schedule } from '../../types';
import { ScheduleList } from './ScheduleList';

const Story: Meta<typeof ScheduleList> = {
  component: ScheduleList,
  title: 'ScheduleList',
};
export default Story;

const scheduleList: Schedule[] = [
  {
    id: 1,
    name: 'Schedule 1',
    description: 'Schedule 1 description',
    isRetired: true,
    startDate: '2021-01-01T00:00:00.000Z',
    endDate: '2021-01-03T00:00:00.000Z',
  },
  {
    id: 2,
    name: 'Schedule 2',
    description: 'Schedule 2 description',
    isRetired: false,
    startDate: '2021-03-01T00:00:00.000Z',
    endDate: '2021-07-03T00:00:00.000Z',
  },
];

export const Primary = {
  args: {
    schedules: scheduleList,
  },
};

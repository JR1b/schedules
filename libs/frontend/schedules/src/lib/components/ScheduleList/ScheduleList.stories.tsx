import type { Meta } from '@storybook/react';
import { ScheduleList } from './ScheduleList';

const Story: Meta<typeof ScheduleList> = {
  component: ScheduleList,
  title: 'Schedules',
};
export default Story;

export const Primary = {
  args: {},
};

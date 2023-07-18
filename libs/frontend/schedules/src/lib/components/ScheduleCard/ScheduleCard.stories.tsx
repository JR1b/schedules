import type { Meta } from '@storybook/react';

import { ScheduleCard } from './ScheduleCard';

const Story: Meta<typeof ScheduleCard> = {
  component: ScheduleCard,
  title: 'ScheduleCard',
};
export default Story;

export const Primary = {
  args: {},
};

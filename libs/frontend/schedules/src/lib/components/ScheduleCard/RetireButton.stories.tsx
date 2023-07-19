import type { Meta, StoryObj } from '@storybook/react';

import { RetireButton } from './RetireButton';

const Story: Meta<typeof RetireButton> = {
  component: RetireButton,
  title: 'RetireButton',
};
export default Story;

export const Primary: StoryObj<typeof RetireButton> = {
  args: {
    onRetire: () => null,
    schedule: {
      id: 1,
      name: 'Schedule 1',
      description: 'Schedule 1 description',
      isRetired: false,
      startDate: '2021-01-01T00:00:00',
      endDate: '2021-01-01T00:00:00',
    },
  },
};

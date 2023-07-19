import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const Story: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
};
export default Story;

export const Primary: StoryObj<typeof Badge> = {
  args: {
    children: 'Primary',
  },
};

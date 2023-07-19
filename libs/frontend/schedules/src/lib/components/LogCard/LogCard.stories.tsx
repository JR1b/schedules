import type { Meta } from '@storybook/react';

import { LogCard } from './LogCard';

const Story: Meta<typeof LogCard> = {
  component: LogCard,
  title: 'LogCard',
};
export default Story;

export const Primary = {
  args: {},
};

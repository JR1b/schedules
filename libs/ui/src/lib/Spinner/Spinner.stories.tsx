import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const Story: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Spinner',
};
export default Story;

export const Primary: StoryObj<typeof Spinner> = {
  args: {
    isLoading: true,
    label: 'Loading...',
  },
};

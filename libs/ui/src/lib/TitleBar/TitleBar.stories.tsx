import type { Meta } from '@storybook/react';

import { TitleBar } from './TitleBar';

const Story: Meta<typeof TitleBar> = {
  component: TitleBar,
  title: 'TitleBar',
};
export default Story;

export const Primary = {
  args: {
    title: 'App',
  },
};

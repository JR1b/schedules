import type { Meta } from '@storybook/react';

import { LogsView } from './LogsView';

const Story: Meta<typeof LogsView> = {
  component: LogsView,
  title: 'LogsView',
};
export default Story;

export const Primary = {
  args: {},
};

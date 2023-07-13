import type { Meta } from '@storybook/react';
import { Storybook } from './storybook';

const Story: Meta<typeof Storybook> = {
  component: Storybook,
  title: 'Storybook',
};
export default Story;

export const Primary = {
  args: {},
};

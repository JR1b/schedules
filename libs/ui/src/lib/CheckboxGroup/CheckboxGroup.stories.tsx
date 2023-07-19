import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';

const Story: Meta<typeof CheckboxGroup> = {
  component: CheckboxGroup,
  title: 'CheckboxGroup',
};
export default Story;

export const Primary: StoryObj<typeof CheckboxGroup> = {
  args: {
    label: 'Checkbox Group',
    description: 'This is a checkbox group',
  },
  render: ({ label, description }) => (
    <CheckboxGroup label={label} description={description}>
      <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
    </CheckboxGroup>
  ),
};

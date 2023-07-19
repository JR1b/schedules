import type { Meta, StoryObj } from '@storybook/react';

import { ViewCard } from './ViewCard';

const Story: Meta<typeof ViewCard> = {
  component: ViewCard,
  title: 'ViewCard',
};
export default Story;

export const Primary: StoryObj<typeof ViewCard> = {
  render: () => (
    <ViewCard>
      <ViewCard.Header className="bg-gray-300">
        <h1>Header</h1>
      </ViewCard.Header>
      <ViewCard.Body className="bg-gray-200">
        <p>Body</p>
      </ViewCard.Body>
    </ViewCard>
  ),
};

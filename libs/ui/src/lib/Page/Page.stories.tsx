import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const Story: Meta<typeof Page> = {
  component: Page,
  title: 'Page',
};
export default Story;

export const Primary: StoryObj<typeof Page> = {
  args: {
    children: 'Primary',
  },
  render: () => (
    <Page>
      <Page.TitleBar title="Page Title" />
      <Page.Body>
        <p>Page Body</p>
      </Page.Body>
    </Page>
  ),
};

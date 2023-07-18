import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'react-aria-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ToastPortal } from './ToastPortal';

const Story: Meta<typeof ToastPortal> = {
  component: ToastPortal,
  title: 'ToastPortal',
};
export default Story;

export const Primary: StoryObj<typeof ToastPortal> = {
  args: {},
  render: () => {
    return (
      <div className="h-screen">
        <Button
          onPress={() => toast.success('success toast')}
          className="rounded-md border bg-gray-700 px-2 py-1 text-gray-50"
        >
          success
        </Button>
        <Button
          onPress={() => toast.error('error toast')}
          className="rounded-md border bg-gray-700 px-2 py-1 text-gray-50"
        >
          error
        </Button>
        <Button
          onPress={() => toast.info('info toast')}
          className="rounded-md border bg-gray-700 px-2 py-1 text-gray-50"
        >
          info
        </Button>
        <Button
          onPress={() => toast.warning('warning toast')}
          className="rounded-md border bg-gray-700 px-2 py-1 text-gray-50"
        >
          warning
        </Button>

        <ToastPortal />
      </div>
    );
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { LogStatusEnum } from '../../schemas';
import { Log } from '../../types';
import { LogList } from './LogList';

const Story: Meta<typeof LogList> = {
  component: LogList,
  title: 'LogList',
};
export default Story;

const logs: Log[] = [
  {
    id: 1,
    scheduleId: 1,
    status: LogStatusEnum.Pending,
    serverName: 'server1',
    startTime: '2021-01-01T00:00:00',
    endTime: '2021-03-01T00:00:00',
  },
  {
    id: 2,
    scheduleId: 2,
    status: LogStatusEnum.Running,
    serverName: 'server2',
    startTime: '2021-02-01T00:00:00',
    endTime: '2021-04-01T00:00:00',
  },
  {
    id: 3,
    scheduleId: 3,
    status: LogStatusEnum.Terminated,
    serverName: 'server3',
    startTime: '2021-03-01T00:00:00',
    endTime: '2021-05-01T00:00:00',
  },
  {
    id: 4,
    scheduleId: 1,
    status: LogStatusEnum.Completed,
    serverName: 'server4',
    startTime: '2021-04-01T00:00:00',
    endTime: '2021-06-01T00:00:00',
  },
  {
    id: 5,
    scheduleId: 1,
    status: LogStatusEnum.Exception,
    serverName: 'server5',
    startTime: '2021-05-01T00:00:00',
    endTime: '2021-07-01T00:00:00',
  },
  {
    id: 6,
    scheduleId: 6,
    status: LogStatusEnum.Pending,
    serverName: 'server6',
    startTime: '2021-06-01T00:00:00',
    endTime: '2021-08-01T00:00:00',
  },
  {
    id: 7,
    scheduleId: 7,
    status: LogStatusEnum.Pending,
    serverName: 'server7',
    startTime: '2021-07-01T00:00:00',
    endTime: '2021-09-01T00:00:00',
  },
  {
    id: 8,
    scheduleId: 8,
    status: LogStatusEnum.Pending,
    serverName: 'server8',
    startTime: '2021-08-01T00:00:00',
    endTime: '2021-10-01T00:00:00',
  },
  {
    id: 9,
    scheduleId: 9,
    status: LogStatusEnum.Pending,
    serverName: 'server9',
    startTime: '2021-09-01T00:00:00',
    endTime: '2021-11-01T00:00:00',
  },
];

export const Primary: StoryObj<typeof LogList> = {
  args: {
    logList: logs,
  },
};

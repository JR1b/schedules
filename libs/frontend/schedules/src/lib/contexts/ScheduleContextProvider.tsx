import { createContext, useContext, useState } from 'react';
import { useAsyncList } from 'react-stately';

import { z } from 'zod';

import { logSchema } from '../schemas';
import { Log, Schedule } from '../types';
import { ScheduleContextState } from './types';

async function getScheduleList(signal: AbortSignal): Promise<Iterable<Schedule>> {
  const apiURL = process.env['API_URL'];
  const res = await fetch(`${apiURL}/schedules`, { signal });
  return res.json();
}

async function getLogList(signal: AbortSignal): Promise<Iterable<Log>> {
  const apiURL = process.env['API_URL'];
  const res = await fetch(`${apiURL}/logs`, { signal });
  return res.json();
}

export const ScheduleContext = createContext<ScheduleContextState>(
  {} as ScheduleContextState
);

type ScheduleProviderProps = {
  children: React.ReactNode;
};

export function ScheduleContextProvider({
  children,
}: ScheduleProviderProps): React.ReactElement {
  const [selectedScheduleLogList, setSelectedScheduleLogList] = useState<Log[]>([]);

  const scheduleListResponse = useAsyncList<Schedule>({
    load: async ({ signal }) => ({ items: await getScheduleList(signal) }),
  });
  const {
    items: scheduleList,
    isLoading: isLoadingSchedules,
    update: updateSchedules,
  } = scheduleListResponse;

  const logListResponse = useAsyncList<Log>({
    load: async ({ signal }) => ({ items: await getLogList(signal) }),
  });
  const { items: logList, isLoading: isLoadingLogs } = logListResponse;

  const onRetire = (schedule: Schedule, isRetired: boolean): void => {
    updateSchedules(schedule.id, { ...schedule, isRetired });
  };

  const onSelectSchedule = (schedule: Schedule): void => {
    const isSameSchedule =
      selectedScheduleLogList.length > 0 &&
      selectedScheduleLogList[0]?.scheduleId === schedule.id;
    if (isSameSchedule) {
      return setSelectedScheduleLogList([]);
    }

    const newSelectedScheduleLogList = logList.filter(
      (log) => log.scheduleId === schedule.id && logSchema.safeParse(log).success
    );
    setSelectedScheduleLogList(newSelectedScheduleLogList);
  };

  return (
    <ScheduleContext.Provider
      value={{
        scheduleList,
        isLoadingSchedules,
        selectedScheduleLogList,
        isLoadingLogs,
        onRetire,
        onSelectSchedule,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useScheduleContext(): ScheduleContextState {
  return useContext(ScheduleContext);
}

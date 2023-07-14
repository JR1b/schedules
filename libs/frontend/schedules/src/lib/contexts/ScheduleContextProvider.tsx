import { createContext, useContext, useState } from 'react';
import { useAsyncList } from 'react-stately';

import { Schedule } from '../types';
import { ScheduleContextState } from './types';

async function getScheduleList(signal: AbortSignal): Promise<Iterable<Schedule>> {
  const apiURL = process.env['API_URL'];
  const res = await fetch(`${apiURL}/schedules`, { signal });
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
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);

  const scheduleListResponse = useAsyncList<Schedule>({
    load: async ({ signal }) => ({ items: await getScheduleList(signal) }),
  });

  const { items: scheduleList, isLoading, reload } = scheduleListResponse;
  return (
    <ScheduleContext.Provider
      value={{
        scheduleList,
        total: scheduleList.length,
        isLoading,
        reload,
        selectedSchedule,
        setSelectedSchedule,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useScheduleContext(): ScheduleContextState {
  return useContext(ScheduleContext);
}

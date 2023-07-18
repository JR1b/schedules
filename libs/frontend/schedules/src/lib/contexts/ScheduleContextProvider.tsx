import { createContext, useContext, useState } from 'react';
import { useAsyncList } from 'react-stately';

import { getScheduleList } from '../requests';
import { Schedule } from '../types';
import { ScheduleContextState } from './types';

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
    load: async ({ signal }) => ({
      items: await getScheduleList({ options: { signal } }),
    }),
  });

  const {
    items: scheduleList,
    isLoading: isLoadingSchedules,
    update: updateSchedules,
  } = scheduleListResponse;

  const onRetire = (schedule: Schedule, isRetired: boolean): void => {
    updateSchedules(schedule.id, { ...schedule, isRetired });
  };

  const onSelectSchedule = (schedule: Schedule): void => {
    setSelectedSchedule((previousSelectedSchedule) => {
      const isSameSchedule =
        previousSelectedSchedule && previousSelectedSchedule.id === schedule.id;

      return isSameSchedule ? null : schedule;
    });
  };

  return (
    <ScheduleContext.Provider
      value={{
        scheduleList,
        selectedSchedule,
        isLoadingSchedules,
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

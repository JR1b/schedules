import { createContext, useContext, useState } from 'react';
import { useAsyncList } from 'react-stately';
import { toast } from 'react-toastify';

import { getScheduleList, updateSchedule } from '../requests';
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
    load: async ({ signal }) => {
      try {
        const response = await getScheduleList({ options: { signal } });
        return { items: response };
      } catch (error) {
        console.error(error);
        toast('Failed to load schedules', { type: 'error' });
        return { items: [] };
      }
    },
  });

  const {
    items: scheduleList,
    isLoading: isLoadingSchedules,
    update: updateSchedules,
  } = scheduleListResponse;

  const onRetire = async (schedule: Schedule, isRetired: boolean): Promise<void> => {
    const newSchedule = { ...schedule, isRetired };
    try {
      // server side update
      const updatedSchedule = await updateSchedule({ schedule: newSchedule });
      // client side update
      updateSchedules(schedule.id, updatedSchedule);
      toast.success(`Schedule '${updatedSchedule.name}' updated.`);
    } catch (error) {
      console.error(error);
      toast('Failed to update schedule', { type: 'error' });
    }
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

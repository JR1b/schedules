import { Schedule } from '../types';

export type ScheduleContextState = {
  scheduleList: Schedule[];
  total: number;
  isLoading?: boolean;
  reload: () => void;
  selectedSchedule: Schedule | null;
  setSelectedSchedule: (schedule: Schedule | null) => void;
};

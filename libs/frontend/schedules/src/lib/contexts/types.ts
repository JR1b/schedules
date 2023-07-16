import { Schedule } from '../types';

export type ScheduleContextState = {
  scheduleList: Schedule[];
  total: number;
  isLoading?: boolean;
  reload: () => void;
  onRetire: (schedule: Schedule, isRetired: boolean) => void;
  onShowLogs: (schedule: Schedule) => void;
};

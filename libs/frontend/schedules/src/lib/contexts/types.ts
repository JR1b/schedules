import { Log, Schedule } from '../types';

export type ScheduleContextState = {
  scheduleList: Schedule[];
  isLoadingSchedules?: boolean;
  selectedSchedule?: Schedule | null;
  onRetire: (schedule: Schedule, isRetired: boolean) => void;
  onSelectSchedule: (schedule: Schedule) => void;
};

export type LogContextState = {
  logList: Log[];
  isLoadingLogs?: boolean;
  onReload: (schedule: Schedule) => void;
};

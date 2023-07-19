import { Log, LogFilter, Schedule } from '../types';

export type ScheduleContextState = {
  scheduleList: Schedule[];
  isLoadingSchedules?: boolean;
  selectedSchedule?: Schedule | null;
  onRetire: (schedule: Schedule, isRetired: boolean) => void;
  onSelectSchedule: (schedule: Schedule) => void;
};

export type LogContextState = {
  logList: Log[];
  logFilter: LogFilter;
  updateLogFilter: (filter: LogFilter) => void;
  isLoadingLogs?: boolean;
};

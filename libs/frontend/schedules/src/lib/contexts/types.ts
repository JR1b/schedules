import { Log, Schedule } from '../types';

export type ScheduleContextState = {
  scheduleList: Schedule[];
  isLoadingSchedules?: boolean;
  selectedScheduleLogList: Log[];
  isLoadingLogs: boolean;
  onRetire: (schedule: Schedule, isRetired: boolean) => void;
  onSelectSchedule: (schedule: Schedule) => void;
};

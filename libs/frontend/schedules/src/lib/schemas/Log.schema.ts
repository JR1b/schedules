import { z } from 'zod';

export enum LogStatusEnum {
  Pending = 'Pending',
  Running = 'Running',
  Terminated = 'Terminated',
  Completed = 'Completed',
  Exception = 'Exception',
}

export const logSchema = z.object({
  id: z.number(),
  scheduleId: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  status: z.nativeEnum(LogStatusEnum),
  serverName: z.string(),
});

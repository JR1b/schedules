import { z } from 'zod';

export const logSchema = z.object({
  id: z.number(),
  scheduleId: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  status: z.string(),
  serverName: z.string(),
});

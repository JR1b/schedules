import { z } from 'zod';

import { logSchema } from '../schemas';

export type Log = z.infer<typeof logSchema>;

export type LogFilter = {
  status?: Log['status'][];
};

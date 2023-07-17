import { z } from 'zod';

import { logSchema } from '../schemas/Log.schema';

export type Log = z.infer<typeof logSchema>;
